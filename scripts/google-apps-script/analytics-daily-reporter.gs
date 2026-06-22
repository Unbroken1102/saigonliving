const ANALYTICS_CONFIG = {
  SPREADSHEET_ID: "1_Jt2sT3B8lfSoFlPPExybT41fGNjYPNh7wPoI6vDGGg",
  GSC_SITE_URL: "sc-domain:saigonliving.net",
  SITE_ORIGIN: "https://saigonliving.net",
  TIME_ZONE: "Asia/Ho_Chi_Minh",
  TOP_QUERIES_LIMIT: 25,
  TOP_PAGES_LIMIT: 10,
  SHEETS: {
    daily: "Analytics_Daily",
    queries: "GSC_Queries",
    pages: "GA_Pages",
    live: "GA_Live",
  },
};

const ANALYTICS_DAILY_HEADERS = [
  "date",
  "ga_activeUsers",
  "ga_sessions",
  "ga_pageViews",
  "gsc_impressions",
  "gsc_clicks",
  "gsc_ctr",
  "gsc_position",
  "gsc_dataState",
  "fetchedAt",
];

const GSC_QUERY_HEADERS = [
  "date",
  "query",
  "impressions",
  "clicks",
  "ctr",
  "position",
];

const GA_PAGE_HEADERS = ["date", "pagePath", "pageViews", "activeUsers"];

const GA_LIVE_HEADERS = [
  "fetchedAt",
  "activeUsers",
  "pagePath",
  "screenPageViews",
];

function registerAnalyticsMenu_() {
  SpreadsheetApp.getUi()
    .createMenu("Saigon Living Analytics")
    .addItem("1. Setup analytics sheets", "setupAnalyticsSheets")
    .addItem("2. Run daily report now", "runDailyAnalyticsReportUi")
    .addItem("3. Log GA realtime snapshot", "logRealtimeSnapshotUi")
    .addSeparator()
    .addItem("Create daily trigger (08:00)", "createDailyAnalyticsTrigger")
    .addItem("Remove analytics triggers", "removeAnalyticsTriggers")
    .addToUi();
}

function setupAnalyticsSheets() {
  ensureAnalyticsSheets_();
  SpreadsheetApp.getUi().alert("Analytics sheets are ready.");
}

function runDailyAnalyticsReportUi() {
  const result = runAnalyticsReport_({ persist: true });
  SpreadsheetApp.getUi().alert(result.message);
}

function logRealtimeSnapshotUi() {
  const result = getRealtimeSnapshot_({ persist: true });
  SpreadsheetApp.getUi().alert(result.message);
}

function runDailyAnalyticsReport() {
  return runAnalyticsReport_({ persist: true });
}

function createDailyAnalyticsTrigger() {
  removeAnalyticsTriggers();

  ScriptApp.newTrigger("runDailyAnalyticsReport")
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .inTimezone(ANALYTICS_CONFIG.TIME_ZONE)
    .create();

  SpreadsheetApp.getUi().alert(
    "Daily analytics trigger created for 08:00 Asia/Ho_Chi_Minh.",
  );
}

function removeAnalyticsTriggers() {
  ScriptApp.getProjectTriggers().forEach((trigger) => {
    if (trigger.getHandlerFunction() === "runDailyAnalyticsReport") {
      ScriptApp.deleteTrigger(trigger);
    }
  });
}

function doGet(e) {
  const action = String(e?.parameter?.action || "summary").toLowerCase();

  try {
    if (action === "live") {
      return jsonResponse_(getRealtimeSnapshot_({ persist: false }));
    }

    if (action === "report") {
      return jsonResponse_(runAnalyticsReport_({ persist: false }));
    }

    if (action === "daily") {
      return jsonResponse_(runAnalyticsReport_({ persist: true }));
    }

    return jsonResponse_(buildChatSummary_());
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: String(error?.message || error),
    });
  }
}

function buildChatSummary_() {
  const today = getDateString_(0);
  const yesterday = getDateString_(-1);
  const live = getRealtimeSnapshot_({ persist: false });
  const todayReport = runAnalyticsReport_({
    persist: false,
    startDate: today,
    endDate: today,
    label: "today",
  });
  const yesterdayReport = runAnalyticsReport_({
    persist: false,
    startDate: yesterday,
    endDate: yesterday,
    label: "yesterday",
  });

  const lines = [
    `Saigon Living analytics (${today})`,
    "",
    "GA4 realtime:",
    `- Active users now: ${live.totals.activeUsers}`,
    `- Top pages now: ${formatTopPages_(live.topPages, 5)}`,
    "",
    `GA4 today (${today}):`,
    `- Users: ${todayReport.ga.activeUsers}`,
    `- Sessions: ${todayReport.ga.sessions}`,
    `- Page views: ${todayReport.ga.pageViews}`,
    "",
    `GSC today (${today}, partial):`,
    `- Impressions: ${todayReport.gsc.impressions}`,
    `- Clicks: ${todayReport.gsc.clicks}`,
    `- CTR: ${formatPercent_(todayReport.gsc.ctr)}`,
    `- Avg position: ${formatNumber_(todayReport.gsc.position)}`,
    `- Top queries: ${formatTopQueries_(todayReport.gsc.queries, 5)}`,
    "",
    `GSC yesterday (${yesterday}, more stable):`,
    `- Impressions: ${yesterdayReport.gsc.impressions}`,
    `- Clicks: ${yesterdayReport.gsc.clicks}`,
    `- CTR: ${formatPercent_(yesterdayReport.gsc.ctr)}`,
    `- Avg position: ${formatNumber_(yesterdayReport.gsc.position)}`,
    `- Top queries: ${formatTopQueries_(yesterdayReport.gsc.queries, 5)}`,
  ];

  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    timezone: ANALYTICS_CONFIG.TIME_ZONE,
    text: lines.join("\n"),
    live,
    today: todayReport,
    yesterday: yesterdayReport,
  };
}

function runAnalyticsReport_(options) {
  const persist = Boolean(options?.persist);
  const startDate = options?.startDate || getDateString_(0);
  const endDate = options?.endDate || startDate;
  const label = options?.label || startDate;

  const ga = queryGa4Daily_(startDate, endDate);
  const gsc = querySearchConsole_(startDate, endDate, {
    includeQueries: true,
    dataState: startDate === getDateString_(0) ? "all" : "final",
  });

  const result = {
    ok: true,
    label,
    dateRange: { startDate, endDate },
    ga,
    gsc,
    message: [
      `Analytics report ${startDate}`,
      `GA users ${ga.activeUsers}, sessions ${ga.sessions}, page views ${ga.pageViews}`,
      `GSC impressions ${gsc.impressions}, clicks ${gsc.clicks}`,
    ].join("\n"),
  };

  if (persist) {
    writeDailySnapshot_(startDate, ga, gsc);
    writeGscQueries_(startDate, gsc.queries);
    writeGaPages_(startDate, ga.pages);
  }

  return result;
}

function getRealtimeSnapshot_(options) {
  const persist = Boolean(options?.persist);
  const propertyId = getGa4PropertyId_();
  const totalsResponse = ga4Request_(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runRealtimeReport`,
    {
      metrics: [{ name: "activeUsers" }, { name: "screenPageViews" }],
    },
  );
  const pagesResponse = ga4Request_(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runRealtimeReport`,
    {
      metrics: [{ name: "activeUsers" }, { name: "screenPageViews" }],
      dimensions: [{ name: "unifiedScreenName" }],
      limit: ANALYTICS_CONFIG.TOP_PAGES_LIMIT,
      orderBys: [
        {
          metric: { metricName: "activeUsers" },
          desc: true,
        },
      ],
    },
  );

  const totalsRow = totalsResponse.rows?.[0];
  const totals = {
    activeUsers: Number(totalsRow?.metricValues?.[0]?.value || 0),
    screenPageViews: Number(totalsRow?.metricValues?.[1]?.value || 0),
  };

  const topPages = (pagesResponse.rows || []).map((row) => ({
    page: row.dimensionValues?.[0]?.value || "(not set)",
    activeUsers: Number(row.metricValues?.[0]?.value || 0),
    screenPageViews: Number(row.metricValues?.[1]?.value || 0),
  }));

  const result = {
    ok: true,
    fetchedAt: new Date().toISOString(),
    totals,
    topPages,
    message: `GA realtime: ${totals.activeUsers} active users now.`,
  };

  if (persist) {
    writeLiveSnapshot_(totals, topPages);
  }

  return result;
}

function queryGa4Daily_(startDate, endDate) {
  const propertyId = getGa4PropertyId_();
  const summaryPayload = {
    dateRanges: [{ startDate, endDate }],
    metrics: [
      { name: "activeUsers" },
      { name: "sessions" },
      { name: "screenPageViews" },
    ],
  };

  const pagesPayload = {
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "pagePath" }],
    metrics: [
      { name: "screenPageViews" },
      { name: "activeUsers" },
    ],
    orderBys: [
      {
        metric: { metricName: "screenPageViews" },
        desc: true,
      },
    ],
    limit: ANALYTICS_CONFIG.TOP_PAGES_LIMIT,
  };

  const summary = ga4Request_(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    summaryPayload,
  );
  const pagesResponse = ga4Request_(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    pagesPayload,
  );

  const summaryRow = summary.rows?.[0];
  const pages = (pagesResponse.rows || []).map((row) => ({
    pagePath: row.dimensionValues?.[0]?.value || "/",
    pageViews: Number(row.metricValues?.[0]?.value || 0),
    activeUsers: Number(row.metricValues?.[1]?.value || 0),
  }));

  return {
    activeUsers: Number(summaryRow?.metricValues?.[0]?.value || 0),
    sessions: Number(summaryRow?.metricValues?.[1]?.value || 0),
    pageViews: Number(summaryRow?.metricValues?.[2]?.value || 0),
    pages,
  };
}

function querySearchConsole_(startDate, endDate, options) {
  const siteUrl = encodeURIComponent(ANALYTICS_CONFIG.GSC_SITE_URL);
  const url = `https://www.googleapis.com/webmasters/v3/sites/${siteUrl}/searchAnalytics/query`;
  const dataState = options?.dataState || "final";

  const summaryPayload = {
    startDate,
    endDate,
    type: "web",
    dataState,
  };

  const summaryResponse = searchConsoleRequest_(url, summaryPayload);
  const summaryRow = summaryResponse.rows?.[0] || {};

  let queries = [];
  if (options?.includeQueries) {
    const queryResponse = searchConsoleRequest_(url, {
      startDate,
      endDate,
      dimensions: ["query"],
      rowLimit: ANALYTICS_CONFIG.TOP_QUERIES_LIMIT,
      type: "web",
      dataState,
    });

    queries = (queryResponse.rows || []).map((row) => ({
      query: row.keys?.[0] || "",
      impressions: Number(row.impressions || 0),
      clicks: Number(row.clicks || 0),
      ctr: Number(row.ctr || 0),
      position: Number(row.position || 0),
    }));
  }

  return {
    impressions: Number(summaryRow.impressions || 0),
    clicks: Number(summaryRow.clicks || 0),
    ctr: Number(summaryRow.ctr || 0),
    position: Number(summaryRow.position || 0),
    dataState,
    queries,
  };
}

function ga4Request_(url, payload) {
  const response = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization: "Bearer " + ScriptApp.getOAuthToken(),
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  });

  return parseApiResponse_(response, "GA4");
}

function searchConsoleRequest_(url, payload) {
  const response = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization: "Bearer " + ScriptApp.getOAuthToken(),
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  });

  return parseApiResponse_(response, "Search Console");
}

function parseApiResponse_(response, label) {
  const code = response.getResponseCode();
  const text = response.getContentText();

  if (code < 200 || code >= 300) {
    throw new Error(`${label} API error ${code}: ${text.slice(0, 300)}`);
  }

  return JSON.parse(text || "{}");
}

function ensureAnalyticsSheets_() {
  const spreadsheet = SpreadsheetApp.openById(ANALYTICS_CONFIG.SPREADSHEET_ID);
  ensureSheetHeaders_(spreadsheet, ANALYTICS_CONFIG.SHEETS.daily, ANALYTICS_DAILY_HEADERS);
  ensureSheetHeaders_(spreadsheet, ANALYTICS_CONFIG.SHEETS.queries, GSC_QUERY_HEADERS);
  ensureSheetHeaders_(spreadsheet, ANALYTICS_CONFIG.SHEETS.pages, GA_PAGE_HEADERS);
  ensureSheetHeaders_(spreadsheet, ANALYTICS_CONFIG.SHEETS.live, GA_LIVE_HEADERS);
}

function ensureSheetHeaders_(spreadsheet, sheetName, headers) {
  let sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  const existing = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const needsHeaders = headers.some((header, index) => existing[index] !== header);

  if (needsHeaders) {
    sheet.clear();
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }
}

function writeDailySnapshot_(date, ga, gsc) {
  ensureAnalyticsSheets_();
  const sheet = SpreadsheetApp.openById(ANALYTICS_CONFIG.SPREADSHEET_ID).getSheetByName(
    ANALYTICS_CONFIG.SHEETS.daily,
  );
  const rows = readSheetRows_(sheet);
  const rowNumber = findRowByDate_(rows, date);

  const values = [
    date,
    ga.activeUsers,
    ga.sessions,
    ga.pageViews,
    gsc.impressions,
    gsc.clicks,
    gsc.ctr,
    gsc.position,
    gsc.dataState,
    new Date().toISOString(),
  ];

  if (rowNumber) {
    sheet.getRange(rowNumber, 1, 1, values.length).setValues([values]);
  } else {
    sheet.appendRow(values);
  }
}

function writeGscQueries_(date, queries) {
  ensureAnalyticsSheets_();
  const sheet = SpreadsheetApp.openById(ANALYTICS_CONFIG.SPREADSHEET_ID).getSheetByName(
    ANALYTICS_CONFIG.SHEETS.queries,
  );
  const rows = readSheetRows_(sheet);
  const keepRows = rows.filter((row) => row.date !== date);

  const rebuilt = [
    GSC_QUERY_HEADERS,
    ...keepRows.map((row) => [
      row.date,
      row.query,
      row.impressions,
      row.clicks,
      row.ctr,
      row.position,
    ]),
    ...queries.map((item) => [
      date,
      item.query,
      item.impressions,
      item.clicks,
      item.ctr,
      item.position,
    ]),
  ];

  sheet.clearContents();
  if (rebuilt.length > 0) {
    sheet.getRange(1, 1, rebuilt.length, GSC_QUERY_HEADERS.length).setValues(rebuilt);
    sheet.setFrozenRows(1);
  }
}

function writeGaPages_(date, pages) {
  ensureAnalyticsSheets_();
  const sheet = SpreadsheetApp.openById(ANALYTICS_CONFIG.SPREADSHEET_ID).getSheetByName(
    ANALYTICS_CONFIG.SHEETS.pages,
  );
  const rows = readSheetRows_(sheet);
  const keepRows = rows.filter((row) => row.date !== date);

  const rebuilt = [
    GA_PAGE_HEADERS,
    ...keepRows.map((row) => [row.date, row.pagePath, row.pageViews, row.activeUsers]),
    ...pages.map((item) => [date, item.pagePath, item.pageViews, item.activeUsers]),
  ];

  sheet.clearContents();
  if (rebuilt.length > 0) {
    sheet.getRange(1, 1, rebuilt.length, GA_PAGE_HEADERS.length).setValues(rebuilt);
    sheet.setFrozenRows(1);
  }
}

function writeLiveSnapshot_(totals, topPages) {
  ensureAnalyticsSheets_();
  const sheet = SpreadsheetApp.openById(ANALYTICS_CONFIG.SPREADSHEET_ID).getSheetByName(
    ANALYTICS_CONFIG.SHEETS.live,
  );
  const fetchedAt = new Date().toISOString();

  topPages.forEach((page) => {
    sheet.appendRow([
      fetchedAt,
      totals.activeUsers,
      page.page,
      page.screenPageViews,
    ]);
  });

  if (topPages.length === 0) {
    sheet.appendRow([fetchedAt, totals.activeUsers, "(none)", 0]);
  }
}

function readSheetRows_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return [];
  }

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const values = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues();

  return values.map((cells) => {
    const row = {};
    headers.forEach((header, index) => {
      row[header] = cells[index] || "";
    });
    return row;
  });
}

function findRowByDate_(rows, date) {
  const match = rows.find((row) => row.date === date);
  return match ? rows.indexOf(match) + 2 : 0;
}

function getGa4PropertyId_() {
  const propertyId = String(
    PropertiesService.getScriptProperties().getProperty("GA4_PROPERTY_ID") || "",
  ).trim();

  if (!propertyId) {
    throw new Error(
      "Missing script property GA4_PROPERTY_ID. Add the numeric GA4 property ID in Apps Script settings.",
    );
  }

  return propertyId;
}

function getDateString_(offsetDays) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return Utilities.formatDate(date, ANALYTICS_CONFIG.TIME_ZONE, "yyyy-MM-dd");
}

function formatPercent_(value) {
  return `${(Number(value || 0) * 100).toFixed(2)}%`;
}

function formatNumber_(value) {
  return Number(value || 0).toFixed(2);
}

function formatTopQueries_(queries, limit) {
  if (!queries || queries.length === 0) {
    return "(none)";
  }

  return queries
    .slice(0, limit)
    .map((item) => `${item.query} (${item.impressions} imp)`)
    .join("; ");
}

function formatTopPages_(pages, limit) {
  if (!pages || pages.length === 0) {
    return "(none)";
  }

  return pages
    .slice(0, limit)
    .map((item) => `${item.page} (${item.activeUsers} users)`)
    .join("; ");
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload, null, 2)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
