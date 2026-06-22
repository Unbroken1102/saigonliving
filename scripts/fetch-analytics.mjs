const DEFAULT_ACTION = "summary";

function getWebAppUrl() {
  return (
    process.env.ANALYTICS_WEB_APP_URL ||
    process.env.ANALYTICS_REPORT_URL ||
    ""
  ).trim();
}

function buildUrl(baseUrl, action) {
  const url = new URL(baseUrl);
  url.searchParams.set("action", action);
  return url.toString();
}

async function fetchAnalytics(action) {
  const baseUrl = getWebAppUrl();

  if (!baseUrl) {
    throw new Error(
      [
        "Missing ANALYTICS_WEB_APP_URL.",
        "Deploy analytics-daily-reporter.gs as a Web App, then add the URL to .env.local:",
        "ANALYTICS_WEB_APP_URL=https://script.google.com/macros/s/.../exec",
      ].join("\n"),
    );
  }

  const response = await fetch(buildUrl(baseUrl, action), {
    headers: {
      Accept: "application/json",
      "User-Agent": "SaigonLivingAnalyticsCLI/1.0",
    },
  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(`Analytics web app returned ${response.status}: ${text.slice(0, 300)}`);
  }

  try {
    return JSON.parse(text);
  } catch {
    return { ok: true, text };
  }
}

function printSummary(payload) {
  if (payload.text) {
    console.log(payload.text);
    return;
  }

  console.log(JSON.stringify(payload, null, 2));
}

function printLive(payload) {
  const activeUsers = payload?.totals?.activeUsers ?? 0;
  const topPages = payload?.topPages || [];

  console.log(`GA4 realtime (${payload?.fetchedAt || "now"})`);
  console.log(`Active users now: ${activeUsers}`);

  if (topPages.length === 0) {
    console.log("Top pages now: (none)");
    return;
  }

  console.log("Top pages now:");
  topPages.forEach((page, index) => {
    console.log(
      `${index + 1}. ${page.page} — ${page.activeUsers} active users, ${page.screenPageViews} views`,
    );
  });
}

function printReport(payload) {
  const ga = payload?.ga || {};
  const gsc = payload?.gsc || {};
  const range = payload?.dateRange || {};

  console.log(`Analytics report ${range.startDate || ""} → ${range.endDate || ""}`);
  console.log("");
  console.log("GA4:");
  console.log(`- Users: ${ga.activeUsers ?? 0}`);
  console.log(`- Sessions: ${ga.sessions ?? 0}`);
  console.log(`- Page views: ${ga.pageViews ?? 0}`);

  if (ga.pages?.length) {
    console.log("- Top pages:");
    ga.pages.slice(0, 5).forEach((page, index) => {
      console.log(
        `  ${index + 1}. ${page.pagePath} — ${page.pageViews} views, ${page.activeUsers} users`,
      );
    });
  }

  console.log("");
  console.log("Search Console:");
  console.log(`- Impressions: ${gsc.impressions ?? 0}`);
  console.log(`- Clicks: ${gsc.clicks ?? 0}`);
  console.log(`- CTR: ${((gsc.ctr ?? 0) * 100).toFixed(2)}%`);
  console.log(`- Avg position: ${Number(gsc.position ?? 0).toFixed(2)}`);
  console.log(`- Data state: ${gsc.dataState || "final"}`);

  if (gsc.queries?.length) {
    console.log("- Top queries:");
    gsc.queries.slice(0, 10).forEach((item, index) => {
      console.log(
        `  ${index + 1}. ${item.query} — ${item.impressions} imp, ${item.clicks} clicks, pos ${Number(item.position).toFixed(1)}`,
      );
    });
  }
}

async function main() {
  const action = process.argv[2] || DEFAULT_ACTION;

  try {
    const payload = await fetchAnalytics(action);

    if (!payload.ok && payload.error) {
      throw new Error(payload.error);
    }

    if (action === "live") {
      printLive(payload);
      return;
    }

    if (action === "report" || action === "daily") {
      printReport(payload);
      return;
    }

    printSummary(payload);
  } catch (error) {
    console.error(error.message || error);
    process.exitCode = 1;
  }
}

main();
