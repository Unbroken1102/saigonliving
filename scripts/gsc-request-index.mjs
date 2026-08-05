/**
 * GSC URL Inspection — request indexing for pending URLs.
 * Uses Playwright + Chrome profile (must be logged into GSC as phamductubk@gmail.com).
 * Run: node scripts/gsc-request-index.mjs
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const RESOURCE = "sc-domain:saigonliving.net";
const DEFAULT_URLS = [
  "https://saigonliving.net/blog/vlasta-premier-ban-giao-khi-nao",
  "https://saigonliving.net/blog/vlasta-premier-chu-dau-tu-la-ai",
  "https://saigonliving.net/gio-hang/the-peak-garden",
  "https://saigonliving.net/gio-hang/vlasta-premier",
  "https://saigonliving.net/vlasta-premier/thong-tin",
];

const urlsFile = process.argv[2] || ".tmp-gsc-retry-06-07.txt";
const urls = fs.existsSync(urlsFile)
  ? fs
      .readFileSync(urlsFile, "utf8")
      .trim()
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
  : DEFAULT_URLS;

// Separate profile so Playwright can run while daily Chrome is open.
const chromeUserData = path.join(
  process.env.HOME,
  "Library/Application Support/CursorGSCAutomation"
);

async function dismissToast(page) {
  const dismiss = page.getByRole("button", { name: "Loại bỏ" });
  if (await dismiss.isVisible({ timeout: 2000 }).catch(() => false)) {
    await dismiss.click();
  }
}

async function waitForGscLogin(page) {
  for (let i = 0; i < 60; i++) {
    const body = await page.locator("body").innerText().catch(() => "");
    const needsLogin =
      body.includes("Đăng nhập") ||
      body.includes("Sign in") ||
      body.includes("accounts.google.com");
    if (!needsLogin) return true;
    if (i === 0) {
      console.log("  ⏳ Đăng nhập GSC trong cửa sổ Chrome (phamductubk@gmail.com)...");
    }
    await page.waitForTimeout(3000);
  }
  return false;
}

async function requestIndex(page, url) {
  const inspectUrl = `https://search.google.com/search-console/inspect?resource_id=${encodeURIComponent(RESOURCE)}&url=${encodeURIComponent(url)}`;
  await page.goto(inspectUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(3000);

  if (!(await waitForGscLogin(page))) {
    return { url, status: "login_required" };
  }

  await page.goto(inspectUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(3000);

  const requestBtn = page.getByRole("button", { name: /Yêu cầu lập chỉ mục/i });
  const alreadyRequested = page.getByRole("heading", { name: /Đã yêu cầu lập chỉ mục/i });

  if (await alreadyRequested.isVisible({ timeout: 5000 }).catch(() => false)) {
    return { url, status: "already_requested" };
  }

  if (!(await requestBtn.isVisible({ timeout: 15000 }).catch(() => false))) {
    const body = await page.locator("body").innerText();
    if (body.includes("URL nằm trên Google")) return { url, status: "indexed" };
    return { url, status: "no_button", snippet: body.slice(0, 200) };
  }

  await requestBtn.click();
  await page.waitForTimeout(18000);

  const success = await page.getByRole("heading", { name: /Đã yêu cầu lập chỉ mục/i }).isVisible({ timeout: 5000 }).catch(() => false);
  await dismissToast(page);
  return { url, status: success ? "requested" : "unknown_after_click" };
}

const CDP_PORT = 9333;

async function getContext() {
  try {
    const browser = await chromium.connectOverCDP(`http://127.0.0.1:${CDP_PORT}`);
    const context = browser.contexts()[0];
    if (context) return { context, ownsContext: false };
  } catch {
    // fall through to launch
  }

  return {
    context: await chromium.launchPersistentContext(chromeUserData, {
      channel: "chrome",
      headless: false,
      args: [
        `--remote-debugging-port=${CDP_PORT}`,
        "--no-first-run",
        "--no-default-browser-check",
      ],
    }),
    ownsContext: true,
  };
}

const results = [];
let context;
let ownsContext = true;

try {
  ({ context, ownsContext } = await getContext());
  const page = context.pages()[0] || (await context.newPage());

  for (const url of urls) {
    console.log(`\n→ ${url}`);
    const result = await requestIndex(page, url);
    console.log(JSON.stringify(result));
    results.push(result);
    await page.waitForTimeout(2000);
  }
} catch (err) {
  console.error("Error:", err.message);
  process.exitCode = 1;
} finally {
  if (context && ownsContext) await context.close();
}

console.log("\n=== SUMMARY ===");
console.log(JSON.stringify(results, null, 2));
