const CONFIG = {
  SITE_ORIGIN: "https://saigonliving.net",
  SITEMAP_URL: "https://saigonliving.net/sitemap.xml",
  SPREADSHEET_ID: "1_Jt2sT3B8lfSoFlPPExybT41fGNjYPNh7wPoI6vDGGg",
  FACEBOOK_PAGE_ID: "1154537577748632",
  FACEBOOK_GRAPH_VERSION: "v20.0",
  OPENAI_MODEL: "gpt-4o-mini",
  MAX_DRAFTS: 5,
  TIME_ZONE: "Asia/Ho_Chi_Minh",
  EXTRA_SOCIAL_PATHS: ["/tt-genesis"],
  UPDATED_SOCIAL_PATHS: [
    "/the-peak-garden",
    "/blog/gia-the-peak-garden-2026",
    "/blog/the-peak-garden-co-nen-mua-khong",
    "/blog/the-peak-garden-huong-loi-metro-ben-thanh-can-gio",
  ],
  POST_SCHEDULE_HOURS: [9, 11, 13, 19, 21],
  POST_SCHEDULE_GRACE_MINUTES: 30,
};

const HEADERS = [
  "status",
  "url",
  "title",
  "description",
  "image",
  "sourcePublishedAt",
  "createdAt",
  "captionShort",
  "captionExpert",
  "captionSocial",
  "selectedCaption",
  "scheduledAt",
  "facebookPostId",
  "postedAt",
  "error",
];

const STATUS = {
  draft: "DRAFT",
  approved: "APPROVED",
  scheduled: "SCHEDULED",
  posted: "POSTED",
  error: "ERROR",
};

function onOpen() {
  buildAutoPostMenu_();
}

function buildAutoPostMenu_() {
  SpreadsheetApp.getUi()
    .createMenu("Saigon Living Auto Post")
    .addItem("1. Setup sheet headers", "setupSheet")
    .addItem("2. Auto draft + publish new posts", "autoDraftAndPublishNewPosts")
    .addItem("Create draft captions only", "createDraftCaptions")
    .addItem("Publish APPROVED rows only", "publishApprovedRows")
    .addItem("Publish due scheduled rows", "publishScheduledRows")
    .addItem("Dang ngay TAT CA bai SCHEDULED", "forcePublishAllScheduledRows")
    .addItem("Kiem tra trang thai lich dang", "diagnoseScheduledRows")
    .addItem("Sua gio hen + xoa trung SCHEDULED", "repairAndDedupeScheduledRows")
    .addItem("Reschedule updated The Peak posts", "rescheduleUpdatedThePeakPosts")
    .addSeparator()
    .addItem("Create daily auto post trigger", "createDailyAutoPostTrigger")
    .addItem("Bat trigger dang bai len lich (15 phut)", "createScheduledPublishWatchTrigger")
    .addItem("Reload menu", "reloadAutoPostMenu")
    .addItem("Remove all triggers", "removeAllTriggers")
    .addToUi();

  if (typeof registerAnalyticsMenu_ === "function") {
    registerAnalyticsMenu_();
  }
}

function reloadAutoPostMenu() {
  buildAutoPostMenu_();
  SpreadsheetApp.getUi().alert("Menu da cap nhat.");
}

function setupSheet() {
  const sheet = getTargetSheet_();
  ensureHeaders_(sheet);
  SpreadsheetApp.getUi().alert("Sheet headers are ready.");
}

function createDraftCaptions() {
  const result = processNewPosts_(false);
  SpreadsheetApp.getUi().alert(result.message);
}

function autoDraftAndPublishNewPosts() {
  const result = processNewPosts_(true);
  SpreadsheetApp.getUi().alert(result.message);
}

function rescheduleUpdatedThePeakPosts() {
  const urls = CONFIG.UPDATED_SOCIAL_PATHS.map((path) => `${CONFIG.SITE_ORIGIN}${path}`);
  const result = createScheduledRowsForUrls_(urls);
  showMessage_(result.message);
  return result;
}

function processNewPosts_(autoPublish) {
  const sheet = getTargetSheet_();
  ensureHeaders_(sheet);

  const rows = readRows_(sheet);
  const knownUrls = new Set(rows.map((row) => row.url).filter(Boolean));
  const blogUrls = getBlogUrlsFromSitemap_()
    .filter((url) => !knownUrls.has(url))
    .slice(0, CONFIG.MAX_DRAFTS);

  if (blogUrls.length === 0) {
    return {
      created: 0,
      posted: 0,
      failed: 0,
      message: "No new blog URLs found.",
    };
  }

  let posted = 0;
  let scheduled = 0;
  let failed = 0;
  const slots = autoPublish ? allocatePostSlots_(blogUrls.length, new Date()) : [];

  blogUrls.forEach((url, index) => {
    const rowNumber = sheet.getLastRow() + 1;
    let article;
    let captions;

    try {
      article = fetchArticle_(url);
      captions = createCaptions_(article);
    } catch (error) {
      sheet.getRange(rowNumber, 1, 1, HEADERS.length).setValues([
        [
          STATUS.error,
          url,
          "",
          "",
          "",
          "",
          new Date().toISOString(),
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          error.message || String(error),
        ],
      ]);
      failed += 1;
      return;
    }

    const selectedCaption = captions.social;

    sheet.getRange(rowNumber, 1, 1, HEADERS.length).setValues([
      [
        STATUS.draft,
        article.url,
        article.title,
        article.description,
        article.image,
        article.publishedAt,
        new Date().toISOString(),
        captions.short,
        captions.expert,
        captions.social,
        selectedCaption,
        "",
        "",
        "",
        "",
      ],
    ]);

    if (!autoPublish) return;

    const slot = slots[index];
    if (slot && !slot.immediate) {
      updateRow_(sheet, rowNumber, {
        status: STATUS.scheduled,
        scheduledAt: slot.date,
        error: "",
      });
      ensureScheduledPublishWatchTrigger_();
      scheduled += 1;
      return;
    }

    try {
      const facebookPostId = publishToFacebook_({
        message: withLink_(selectedCaption, article.url),
        link: article.url,
      });

      updateRow_(sheet, rowNumber, {
        status: STATUS.posted,
        scheduledAt: slot ? slot.date.toISOString() : "",
        facebookPostId,
        postedAt: new Date().toISOString(),
        error: "",
      });
      posted += 1;
    } catch (error) {
      updateRow_(sheet, rowNumber, {
        status: STATUS.error,
        error: error.message || String(error),
      });
      failed += 1;
    }
  });

  if (autoPublish) {
    return {
      created: blogUrls.length,
      posted,
      scheduled,
      failed,
      message: `Created ${blogUrls.length} row(s), posted ${posted}, scheduled ${scheduled}, failed ${failed}.`,
    };
  }

  return {
    created: blogUrls.length,
    posted: 0,
    failed: 0,
    message: `Created ${blogUrls.length} draft row(s).`,
  };
}

function createScheduledRowsForUrls_(urls) {
  const sheet = getTargetSheet_();
  ensureHeaders_(sheet);

  const now = new Date();
  const rows = readRows_(sheet);
  const alreadyScheduledUrls = new Set(
    rows
      .filter((row) => normalizeStatus_(row.status) === STATUS.scheduled)
      .filter((row) => {
        const scheduledAt = getScheduledAtFromRow_(sheet, row.rowNumber);
        return scheduledAt && scheduledAt.getTime() > now.getTime();
      })
      .map((row) => row.url)
      .filter(Boolean),
  );
  const allUrls = [...new Set(urls.filter(Boolean))];
  const uniqueUrls = allUrls.filter((url) => !alreadyScheduledUrls.has(url));
  const skipped = allUrls.length - uniqueUrls.length;

  if (uniqueUrls.length === 0) {
    return {
      created: 0,
      scheduled: 0,
      failed: 0,
      skipped,
      message: skipped > 0
        ? `No new rows created. ${skipped} URL(s) already have future SCHEDULED rows.`
        : "No URLs provided for rescheduling.",
    };
  }

  const slots = allocateFuturePostSlots_(uniqueUrls.length, new Date());
  let scheduled = 0;
  let failed = 0;

  uniqueUrls.forEach((url, index) => {
    const rowNumber = sheet.getLastRow() + 1;
    const slot = slots[index];

    try {
      const article = fetchArticle_(url);
      const captions = createCaptions_(article);
      const selectedCaption = captions.social;

      sheet.getRange(rowNumber, 1, 1, HEADERS.length).setValues([
        [
          STATUS.scheduled,
          article.url,
          article.title,
          article.description,
          article.image,
          article.publishedAt,
          new Date().toISOString(),
          captions.short,
          captions.expert,
          captions.social,
          selectedCaption,
          slot.date,
          "",
          "",
          "",
        ],
      ]);

      ensureScheduledPublishWatchTrigger_();
      scheduled += 1;
    } catch (error) {
      sheet.getRange(rowNumber, 1, 1, HEADERS.length).setValues([
        [
          STATUS.error,
          url,
          "",
          "",
          "",
          "",
          new Date().toISOString(),
          "",
          "",
          "",
          "",
          slot ? slot.date.toISOString() : "",
          "",
          "",
          error.message || String(error),
        ],
      ]);
      failed += 1;
    }
  });

  return {
    created: uniqueUrls.length,
    scheduled,
    failed,
    skipped,
    message: `Created ${uniqueUrls.length} updated The Peak row(s), scheduled ${scheduled}, failed ${failed}, skipped ${skipped}. Existing rows were left unchanged.`,
  };
}

function publishApprovedRows() {
  const sheet = getTargetSheet_();
  ensureHeaders_(sheet);

  const rows = readRows_(sheet);
  const approvedRows = rows.filter((row) => normalizeStatus_(row.status) === STATUS.approved);

  if (approvedRows.length === 0) {
    SpreadsheetApp.getUi().alert("No APPROVED rows to publish.");
    return;
  }

  approvedRows.forEach((row) => {
    try {
      const message = buildFacebookMessage_(row);
      const facebookPostId = publishToFacebook_({
        message,
        link: row.url,
      });

      updateRow_(sheet, row.rowNumber, {
        status: STATUS.posted,
        scheduledAt: "",
        facebookPostId,
        postedAt: new Date().toISOString(),
        error: "",
      });
    } catch (error) {
      updateRow_(sheet, row.rowNumber, {
        status: STATUS.error,
        error: error.message || String(error),
      });
    }
  });

  SpreadsheetApp.getUi().alert(`Processed ${approvedRows.length} approved row(s).`);
}

function publishScheduledRows() {
  const result = publishScheduledRows_();
  SpreadsheetApp.getUi().alert(result.message);
}

function forcePublishAllScheduledRows() {
  const result = publishScheduledRows_({ force: true });
  SpreadsheetApp.getUi().alert(result.message);
}

function diagnoseScheduledRows() {
  const result = diagnoseScheduledRows_();
  SpreadsheetApp.getUi().alert(result.message);
}

function repairAndDedupeScheduledRows() {
  const result = repairAndDedupeScheduledRows_();
  SpreadsheetApp.getUi().alert(result.message);
}

function publishScheduledRowsForTrigger() {
  const result = publishScheduledRows_();
  Logger.log(result.message);
}

function publishScheduledRows_(options) {
  const force = Boolean(options?.force);
  const sheet = getTargetSheet_();
  ensureHeaders_(sheet);

  const now = new Date();
  const rows = readRows_(sheet);
  const scheduledRows = rows.filter(
    (row) => normalizeStatus_(row.status) === STATUS.scheduled,
  );
  const dueRows = scheduledRows.filter((row) => {
    if (force) return true;
    const scheduledAt = getScheduledAtFromRow_(sheet, row.rowNumber);
    return scheduledAt && scheduledAt.getTime() <= now.getTime();
  });

  if (dueRows.length === 0) {
    return {
      posted: 0,
      failed: 0,
      message: buildNoDueRowsMessage_(scheduledRows, now),
    };
  }

  let posted = 0;
  let failed = 0;
  dueRows.forEach((row) => {
    try {
      const message = buildFacebookMessage_(row);
      const facebookPostId = publishToFacebook_({
        message,
        link: row.url,
      });

      updateRow_(sheet, row.rowNumber, {
        status: STATUS.posted,
        facebookPostId,
        postedAt: new Date(),
        error: "",
      });
      posted += 1;
    } catch (error) {
      updateRow_(sheet, row.rowNumber, {
        status: STATUS.error,
        error: error.message || String(error),
      });
      failed += 1;
    }
  });

  return {
    posted,
    failed,
    message: `Published ${posted} scheduled row(s), failed ${failed}.`,
  };
}

function diagnoseScheduledRows_() {
  const sheet = getTargetSheet_();
  ensureHeaders_(sheet);
  const now = new Date();
  const rows = readRows_(sheet);
  const scheduledRows = rows.filter(
    (row) => normalizeStatus_(row.status) === STATUS.scheduled,
  );

  if (scheduledRows.length === 0) {
    return {
      message: "Khong co dong SCHEDULED nao trong Sheet.",
    };
  }

  const lines = [`Tong SCHEDULED: ${scheduledRows.length}`, `Gio hien tai: ${formatDateTime_(now)}`, ""];

  scheduledRows.forEach((row, index) => {
    const scheduledAt = getScheduledAtFromRow_(sheet, row.rowNumber);
    const rawValue = getScheduledAtRawValue_(sheet, row.rowNumber);
    const dueText = !scheduledAt
      ? `LOI: khong doc duoc scheduledAt (raw: ${describeRawValue_(rawValue)})`
      : scheduledAt.getTime() <= now.getTime()
        ? "DEN GIO - san sang dang"
        : `CHUA DEN GIO - hen ${formatDateTime_(scheduledAt)}`;

    lines.push(`${index + 1}. ${dueText}`);
    lines.push(`   ${row.url}`);
  });

  const dueCount = scheduledRows.filter((row) => {
    const scheduledAt = getScheduledAtFromRow_(sheet, row.rowNumber);
    return scheduledAt && scheduledAt.getTime() <= now.getTime();
  }).length;

  lines.push("");
  lines.push(`San sang dang ngay: ${dueCount}/${scheduledRows.length}`);
  lines.push('Neu 0 san sang: chon "Sua gio hen + xoa trung SCHEDULED"');
  lines.push('Neu muon dang ngay: chon "Dang ngay TAT CA bai SCHEDULED"');

  return {
    message: lines.join("\n"),
  };
}

function repairAndDedupeScheduledRows_() {
  const sheet = getTargetSheet_();
  ensureHeaders_(sheet);

  const rows = readRows_(sheet);
  const scheduledRows = rows.filter(
    (row) => normalizeStatus_(row.status) === STATUS.scheduled,
  );

  if (scheduledRows.length === 0) {
    return { message: "Khong co dong SCHEDULED nao de sua." };
  }

  const keepByUrl = {};
  scheduledRows.forEach((row) => {
    if (!row.url) return;
    const current = keepByUrl[row.url];
    if (!current || row.rowNumber > current.rowNumber) {
      keepByUrl[row.url] = row;
    }
  });

  let duplicates = 0;
  let repaired = 0;
  const now = new Date();

  scheduledRows.forEach((row) => {
    const keeper = keepByUrl[row.url];
    if (keeper && keeper.rowNumber !== row.rowNumber) {
      updateRow_(sheet, row.rowNumber, {
        status: STATUS.error,
        error: "Duplicate schedule removed",
      });
      duplicates += 1;
      return;
    }

    const scheduledAt = getScheduledAtFromRow_(sheet, row.rowNumber);
    if (!scheduledAt) {
      const repairTime = new Date(now.getTime() - (repaired + 1) * 2 * 60 * 1000);
      setScheduledAtOnRow_(sheet, row.rowNumber, repairTime);
      repaired += 1;
    }
  });

  return {
    message: [
      `Da xu ly ${scheduledRows.length} dong SCHEDULED.`,
      `Xoa trung: ${duplicates}`,
      `Sua gio hen: ${repaired}`,
      `Con lai: ${Object.keys(keepByUrl).length} URL unique.`,
      'Tiep theo chon "Dang ngay TAT CA bai SCHEDULED".',
    ].join("\n"),
  };
}

function buildNoDueRowsMessage_(scheduledRows, now) {
  const sheet = getTargetSheet_();

  if (scheduledRows.length === 0) {
    return "Khong co dong SCHEDULED nao trong Sheet.";
  }

  const nextRow = scheduledRows
    .map((row) => ({
      row,
      scheduledAt: getScheduledAtFromRow_(sheet, row.rowNumber),
    }))
    .filter((item) => item.scheduledAt)
    .sort((a, b) => a.scheduledAt.getTime() - b.scheduledAt.getTime())[0];

  if (!nextRow) {
    return [
      `Co ${scheduledRows.length} dong SCHEDULED nhung khong doc duoc cot scheduledAt.`,
      'Chon "Sua gio hen + xoa trung SCHEDULED" roi chay lai.',
    ].join("\n");
  }

  return [
    `Co ${scheduledRows.length} bai SCHEDULED nhung chua den gio.`,
    `Gio hien tai: ${formatDateTime_(now)}`,
    `Bai sap den gio: ${formatDateTime_(nextRow.scheduledAt)}`,
    `URL: ${nextRow.row.url}`,
    'Neu muon dang ngay, chon menu "Dang ngay TAT CA bai SCHEDULED".',
  ].join("\n");
}

function parseScheduledAt_(value) {
  if (value === "" || value === null || value === undefined) return null;
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value;

  if (typeof value === "number" && value > 0) {
    const serialDate = new Date(Math.round((value - 25569) * 86400 * 1000));
    if (!Number.isNaN(serialDate.getTime())) return serialDate;
  }

  const parsed = new Date(value);
  if (!Number.isNaN(parsed.getTime())) return parsed;

  if (typeof value === "string") {
    const match = value.match(
      /(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/,
    );
    if (match) {
      const [, day, month, year, hour = "0", minute = "0", second = "0"] = match;
      const local = new Date(
        `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(2, "0")}+07:00`,
      );
      if (!Number.isNaN(local.getTime())) return local;
    }
  }

  return null;
}

function getScheduledAtColumnIndex_() {
  return HEADERS.indexOf("scheduledAt") + 1;
}

function getScheduledAtRawValue_(sheet, rowNumber) {
  return sheet.getRange(rowNumber, getScheduledAtColumnIndex_()).getValue();
}

function getScheduledAtFromRow_(sheet, rowNumber) {
  return parseScheduledAt_(getScheduledAtRawValue_(sheet, rowNumber));
}

function setScheduledAtOnRow_(sheet, rowNumber, date) {
  sheet.getRange(rowNumber, getScheduledAtColumnIndex_()).setValue(date);
}

function describeRawValue_(value) {
  if (value === "" || value === null || value === undefined) return "(trong)";
  if (value instanceof Date) return formatDateTime_(value);
  return String(value);
}

function formatDateTime_(date) {
  return Utilities.formatDate(date, CONFIG.TIME_ZONE, "dd/MM/yyyy HH:mm");
}

function createDailyAutoPostTrigger() {
  removeTriggersByHandler_("autoDraftAndPublishNewPostsForTrigger");
  ScriptApp.newTrigger("autoDraftAndPublishNewPostsForTrigger")
    .timeBased()
    .inTimezone(CONFIG.TIME_ZONE)
    .everyDays(1)
    .atHour(9)
    .create();

  ensureScheduledPublishWatchTrigger_();

  SpreadsheetApp.getUi().alert(
    "Daily auto post trigger created for around 09:00. Scheduled posts will be checked every 5 minutes.",
  );
}

function createScheduledPublishWatchTrigger() {
  removeTriggersByHandler_("publishScheduledRowsForTrigger");
  ScriptApp.newTrigger("publishScheduledRowsForTrigger")
    .timeBased()
    .inTimezone(CONFIG.TIME_ZONE)
    .everyMinutes(5)
    .create();

  SpreadsheetApp.getUi().alert(
    "Scheduled publish watch created. Due SCHEDULED rows will be checked every 5 minutes.",
  );
}

function ensureScheduledPublishWatchTrigger_() {
  const handler = "publishScheduledRowsForTrigger";
  const existing = ScriptApp.getProjectTriggers().some(
    (trigger) => trigger.getHandlerFunction() === handler,
  );

  if (existing) return;

  ScriptApp.newTrigger(handler)
    .timeBased()
    .inTimezone(CONFIG.TIME_ZONE)
    .everyMinutes(5)
    .create();
}

function autoDraftAndPublishNewPostsForTrigger() {
  processNewPosts_(true);
}

function allocatePostSlots_(count, now) {
  const slots = [];
  const graceMs = CONFIG.POST_SCHEDULE_GRACE_MINUTES * 60 * 1000;

  for (let dayOffset = 0; slots.length < count && dayOffset < 14; dayOffset += 1) {
    CONFIG.POST_SCHEDULE_HOURS.forEach((hour) => {
      if (slots.length >= count) return;

      const slotDate = createDateInTimeZone_(now, dayOffset, hour, CONFIG.TIME_ZONE);

      if (slotDate.getTime() + graceMs < now.getTime()) return;

      slots.push({
        date: slotDate,
        immediate: slotDate.getTime() <= now.getTime(),
      });
    });
  }

  return slots;
}

function allocateFuturePostSlots_(count, now) {
  const slots = allocatePostSlots_(count, now).filter((slot) => !slot.immediate);

  if (slots.length >= count) return slots;

  const fallbackStart = new Date(now.getTime() + 60 * 60 * 1000);
  while (slots.length < count) {
    const nextDate = new Date(fallbackStart.getTime() + slots.length * 2 * 60 * 60 * 1000);
    slots.push({
      date: nextDate,
      immediate: false,
    });
  }

  return slots;
}

function createDateInTimeZone_(baseDate, dayOffset, hour, timeZone) {
  const baseDay = Utilities.formatDate(baseDate, timeZone, "yyyy-MM-dd");
  const baseMidnight = new Date(`${baseDay}T00:00:00+07:00`);
  const target = new Date(baseMidnight.getTime() + dayOffset * 24 * 60 * 60 * 1000);
  const targetDay = Utilities.formatDate(target, timeZone, "yyyy-MM-dd");
  return new Date(`${targetDay}T${String(hour).padStart(2, "0")}:00:00+07:00`);
}

function removeTriggersByHandler_(handlerName) {
  ScriptApp.getProjectTriggers()
    .filter((trigger) => trigger.getHandlerFunction() === handlerName)
    .forEach((trigger) => ScriptApp.deleteTrigger(trigger));
}

function removeAllTriggers() {
  ScriptApp.getProjectTriggers().forEach((trigger) => ScriptApp.deleteTrigger(trigger));
  SpreadsheetApp.getUi().alert("All triggers removed.");
}

function getTargetSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet() ||
    SpreadsheetApp.openById(getProperty_("SPREADSHEET_ID", CONFIG.SPREADSHEET_ID));
  return spreadsheet.getActiveSheet() || spreadsheet.getSheets()[0];
}

function getBlogUrlsFromSitemap_() {
  const xml = fetchText_(CONFIG.SITEMAP_URL);
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
  const extraUrls = CONFIG.EXTRA_SOCIAL_PATHS.map((path) => `${CONFIG.SITE_ORIGIN}${path}`);
  const blogUrls = matches
    .map((match) => decodeXml_(match[1].trim()))
    .filter((url) => url.indexOf(`${CONFIG.SITE_ORIGIN}/blog/`) === 0)
    .filter((url) => url !== `${CONFIG.SITE_ORIGIN}/blog`)
    .filter((url) => url.indexOf("#") === -1);

  return [...new Set([...extraUrls, ...blogUrls])];
}

function fetchArticle_(url) {
  const html = fetchText_(url);
  const title = cleanText_(
    getMeta_(html, "property", "og:title") || getTitle_(html) || "Saigon Living",
  );
  const description = cleanText_(
    getMeta_(html, "name", "description") ||
      getMeta_(html, "property", "og:description") ||
      "",
  );
  const image = absoluteUrl_(getMeta_(html, "property", "og:image") || "", CONFIG.SITE_ORIGIN);
  const publishedAt = getMeta_(html, "property", "article:published_time") || "";
  const text = extractReadableText_(html).slice(0, 8000);

  return {
    url,
    title,
    description,
    image,
    publishedAt,
    text,
  };
}

function createCaptions_(article) {
  const apiKey = getRequiredProperty_("OPENAI_API_KEY");
  const prompt = [
    "Ban la copywriter Facebook cho Saigon Living, chuyen bat dong san Nam Sai Gon.",
    "Hay rewrite/tom tat bai viet thanh 3 caption Facebook tieng Viet.",
    "Giu giong chuyen nghiep, khong thoi phong, khong khang dinh phap ly/quy hoach neu bai chi noi la tin hieu, de xuat, hoac thong tin can theo doi.",
    "Moi caption nen co hook 1-2 cau, tom tat 3-5 y, CTA \"Đọc bài đầy đủ\".",
    "Khong tu bia so lieu ngoai noi dung nguon.",
    'Tra ve JSON dung dang: {"short":"...","expert":"...","social":"..."}.',
    "",
    `URL: ${article.url}`,
    `Tieu de: ${article.title}`,
    `Mo ta: ${article.description}`,
    `Noi dung nguon: ${article.text}`,
  ].join("\n");

  const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", {
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    payload: JSON.stringify({
      model: getProperty_("OPENAI_MODEL", CONFIG.OPENAI_MODEL),
      messages: [
        {
          role: "system",
          content:
            "Ban chi tra ve JSON hop le. Khong dung Markdown. Khong them giai thich ngoai JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.65,
    }),
    muteHttpExceptions: true,
  });

  const code = response.getResponseCode();
  const body = response.getContentText();

  if (code < 200 || code >= 300) {
    throw new Error(`OpenAI request failed: ${code} ${body}`);
  }

  const data = JSON.parse(body);
  const content = data.choices?.[0]?.message?.content || "";
  const captions = parseJsonFromText_(content);

  return {
    short: withLink_(captions.short, article.url),
    expert: withLink_(captions.expert, article.url),
    social: withLink_(captions.social, article.url),
  };
}

function publishToFacebook_({ message, link }) {
  const pageId = getProperty_("FACEBOOK_PAGE_ID", CONFIG.FACEBOOK_PAGE_ID);
  const accessToken = getRequiredProperty_("FACEBOOK_PAGE_ACCESS_TOKEN");
  const endpoint = `https://graph.facebook.com/${CONFIG.FACEBOOK_GRAPH_VERSION}/${pageId}/feed`;

  const response = UrlFetchApp.fetch(endpoint, {
    method: "post",
    payload: {
      message,
      link,
      access_token: accessToken,
    },
    muteHttpExceptions: true,
  });

  const code = response.getResponseCode();
  const body = response.getContentText();
  const data = JSON.parse(body);

  if (code < 200 || code >= 300) {
    throw new Error(`Facebook post failed: ${code} ${body}`);
  }

  return data.id;
}

function buildFacebookMessage_(row) {
  const caption = row.selectedCaption || row.captionSocial || row.captionShort || row.title;
  return withLink_(caption, row.url);
}

function ensureHeaders_(sheet) {
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.setFrozenRows(1);
}

function readRows_(sheet) {
  if (sheet.getLastRow() < 2) return [];

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();

  return values.map((cells, rowIndex) => {
    const row = {
      rowNumber: rowIndex + 2,
    };

    headers.forEach((header, columnIndex) => {
      row[header] = cells[columnIndex] || "";
    });

    return row;
  });
}

function updateRow_(sheet, rowNumber, patch) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  Object.keys(patch).forEach((key) => {
    const columnIndex = headers.indexOf(key);
    if (columnIndex >= 0) {
      sheet.getRange(rowNumber, columnIndex + 1).setValue(patch[key]);
    }
  });
}

function getRequiredProperty_(key) {
  const value = getProperty_(key, "");
  if (!value) {
    throw new Error(`Missing script property: ${key}`);
  }
  return value;
}

function getProperty_(key, fallback) {
  const value = PropertiesService.getScriptProperties().getProperty(key);
  return value || fallback;
}

function fetchText_(url) {
  const response = UrlFetchApp.fetch(url, {
    headers: {
      "User-Agent": "SaigonLivingAppsScript/1.0",
    },
    muteHttpExceptions: true,
  });

  const code = response.getResponseCode();
  if (code < 200 || code >= 300) {
    throw new Error(`Fetch failed for ${url}: ${code}`);
  }

  return response.getContentText();
}

function getMeta_(html, attr, value) {
  const regex = new RegExp(
    `<meta[^>]+${attr}=["']${escapeRegex_(value)}["'][^>]*content=["']([^"']*)["'][^>]*>|<meta[^>]+content=["']([^"']*)["'][^>]*${attr}=["']${escapeRegex_(value)}["'][^>]*>`,
    "i",
  );
  const match = html.match(regex);
  return decodeHtml_(match?.[1] || match?.[2] || "");
}

function getTitle_(html) {
  const match = html.match(/<title[^>]*>(.*?)<\/title>/i);
  return decodeHtml_(match?.[1] || "");
}

function extractReadableText_(html) {
  const articleMatch = html.match(/<article[\s\S]*?<\/article>/i);
  const articleHtml = articleMatch ? articleMatch[0] : html;

  return cleanText_(
    articleHtml
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " "),
  );
}

function parseJsonFromText_(text) {
  const jsonText = String(text).trim().match(/\{[\s\S]*\}/)?.[0] || String(text).trim();
  return JSON.parse(jsonText);
}

function withLink_(caption, url) {
  const trimmed = stripReadFullCta_(caption).trim();
  if (!trimmed) return url;
  if (trimmed.indexOf(url) !== -1) return trimmed;
  return `${trimmed}\n\nĐọc bài đầy đủ: ${url}`;
}

function stripReadFullCta_(caption) {
  return String(caption || "")
    .split(/\r?\n/)
    .filter((line) => !isReadFullCtaLine_(line))
    .join("\n")
    .trim();
}

function isReadFullCtaLine_(line) {
  const normalized = String(line || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .trim()
    .toLowerCase();

  return /^doc\s+bai\s+day\s+du\s*:?.*$/.test(normalized);
}

function normalizeStatus_(status) {
  return String(status || "").trim().toUpperCase();
}

function showMessage_(message) {
  try {
    SpreadsheetApp.getUi().alert(message);
  } catch (error) {
    Logger.log(message);
  }
}

function absoluteUrl_(value, origin) {
  if (!value) return "";
  try {
    return new URL(value, origin).toString();
  } catch (error) {
    return "";
  }
}

function cleanText_(value) {
  return decodeHtml_(String(value || "").replace(/\s+/g, " ").trim());
}

function decodeXml_(value) {
  return decodeHtml_(value);
}

function decodeHtml_(value) {
  return String(value || "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function escapeRegex_(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
