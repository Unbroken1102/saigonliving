/**
 * Saigon Living — Email kế hoạch SEO/sales mỗi sáng
 *
 * Cài trong cùng Google Sheet (Extensions → Apps Script).
 * Thêm vào onOpen(): registerSeoPlanMenu_();
 *
 * Script properties (tuỳ chọn):
 *   SEO_PLAN_EMAIL=phamductubk@gmail.com
 */

const SEO_PLAN_CONFIG = {
  SPREADSHEET_ID: "1_Jt2sT3B8lfSoFlPPExybT41fGNjYPNh7wPoI6vDGGg",
  SHEET_NAME: "SEO_Daily_Plan",
  TIME_ZONE: "Asia/Ho_Chi_Minh",
  TRIGGER_HOUR: 7,
  DEFAULT_EMAIL: "phamductubk@gmail.com",
  STRATEGY: "Eco 50% · GS Nhà Bè 30% · Vinhomes BC 20%",
};

const SEO_PLAN_HEADERS = ["date", "title", "hours", "tasks"];

/** Seed data — đồng bộ với docs/seo-daily-plans.json */
const SEO_PLAN_SEED = [
  ["2026-08-05", "T4 — CRM + Zalo + Sheet (3 trụ)", "~2h", "Zalo: tên Tú · trạng thái Eco · GS · Vinhomes BC — 0931781111|2 album Zalo: Eco · GS|Form test lead + email notify|Sheet 3 cột: Eco · GSNhaBe · VinhomesBC"],
  ["2026-08-06", "T5 — Giỏ Eco + đào chủ", "~3h", "Đăng 1 tin Eco trên giỏ|Đào chủ Eco 5 cuộc|Đào chủ GS 3 cuộc|Vinhomes: list bài link · GSC|Request index giỏ Eco"],
  ["2026-08-07", "T6 — Facebook + gọi", "~2,5h", "FB Marketplace 1 tin Eco|FB GS nếu có hàng|Gọi follow-up|Scout nhóm BĐS Long An · Nhà Bè · Bình Chánh"],
  ["2026-08-08", "T7 — Web Eco", "~2,5h", "CTA giỏ /eco-retreat|Internal link 3 bài Eco → giỏ|Draft bài Eco CN"],
  ["2026-08-09", "CN — Web GS + Vinhomes", "~2,5h", "Landing GS Nhà Bè|Refresh /vinhomes-binh-chanh + link 2 bài Hưng Long"],
  ["2026-08-10", "T2 — SEO + BDS prep", "~2h", "GSC index Eco · GS · Vinhomes|VIP prep Eco|CTA bài Mizuki–Vinhomes"],
  ["2026-08-11", "T3 — Clip + review tuần 1", "~2h", "Clip Eco 45s|Tick checklist tuần 1"],
  ["2026-08-12", "Tuần 2 — Tin Eco #2", "~3h", "+1 tin Eco|Đào chủ Eco 10|Link 2 bài Vinhomes"],
  ["2026-08-13", "Tuần 2 — Bài Eco giá/phí", "~2h", "Publish/update bài CN Eco|GSC index bài mới"],
  ["2026-08-14", "Tuần 2 — Landing Eco", "~3h", "FAQ CN · block lô · ảnh thực tế /eco-retreat"],
  ["2026-08-15", "Tuần 2 — Internal link", "~2h", "5 bài Eco → giỏ|3 bài Vinhomes cluster"],
  ["2026-08-16", "Tuần 2 — GS + tin", "~2,5h", "GS landing live|+1 tin GS|Đào chủ GS 5"],
  ["2026-08-17", "Tuần 2 — Clip + review", "~2h", "Clip Eco hoặc Vinhomes|Review tuần 2"],
  ["2026-08-18", "Tuần 2 — Bù pipeline", "~2h", "Gọi chủ warm|Bù Eco ưu tiên"],
  ["2026-08-19", "Tuần 3 — Tin Eco #3", "~3h", "+1 tin Eco · FB Eco|Đào chủ Eco 5 · GS 3"],
  ["2026-08-20", "Tuần 3 — Bài GS", "~2h", "Bài GS CN metro/Nhà Bè|Link giỏ GS"],
  ["2026-08-21", "Tuần 3 — Vinhomes", "~2h", "Bài/update quy hoạch Vinhomes BC|GSC"],
  ["2026-08-22", "Tuần 3 — Đào chủ GS", "~3h", "Đào chủ GS 8 · Eco 5|Ghi Sheet"],
  ["2026-08-23", "Tuần 3 — Clip + GSC", "~2h", "Clip GS hoặc Eco|GSC tuần 3"],
  ["2026-08-24", "Tuần 3 — Follow-up", "~1h", "Gọi lead|Inbound passive nếu có"],
  ["2026-08-25", "Tuần 3 — Review", "~1h", "Review KPI tuần 3|Plan tuần 4"],
  ["2026-08-26", "Tuần 4 — FB", "~2,5h", "FB 1 Eco + 1 GS|Follow-up lead"],
  ["2026-08-27", "Tuần 4 — Bài Eco", "~2h", "Bài checklist xem nhà Eco|Link giỏ"],
  ["2026-08-28", "Tuần 4 — VIP prep", "~2h", "Copy VIP 3 slot|BDS/Chợ Tốt ready"],
  ["2026-08-29", "Tuần 4 — Review T1", "~2h", "Review tháng 1|Bù tin Eco <3"],
  ["2026-08-30", "Tuần 4 — Bù giỏ", "~2h", "Bù tin thiếu|Đào chủ trụ yếu"],
  ["2026-08-31", "Cuối T8 — GSC", "~2h", "GSC 3 trụ|Link audit Eco + Vinhomes"],
  ["2026-09-01", "01/09 — Exit tháng 1", "~1h", "Tick KPI tháng 1|Chuẩn bị VIP tuần 5"],
];

const SEO_PLAN_FALLBACK = [
  "Gọi lead <30 phút nếu có form",
  "Eco 50%: giỏ / đào chủ / FB",
  "GS 30%: pipeline CN Nhà Bè",
  "Vinhomes 20%: blog / form theo dõi sớm",
  "Cập nhật kế hoạch: docs/seo-roadmap-1-thang.md",
];

function registerSeoPlanMenu_() {
  SpreadsheetApp.getUi()
    .createMenu("Saigon Living SEO Plan")
    .addItem("1. Setup sheet + seed plans", "setupSeoDailyPlanSheet")
    .addItem("2. Send today plan (email now)", "sendDailySeoPlanEmailUi")
    .addSeparator()
    .addItem("Create daily trigger (07:00)", "createDailySeoPlanTrigger")
    .addItem("Remove SEO plan triggers", "removeSeoPlanTriggers")
    .addToUi();
}

function setupSeoDailyPlanSheet() {
  const sheet = ensureSeoPlanSheet_();
  seedSeoDailyPlans_(sheet);
  SpreadsheetApp.getUi().alert(
    "SEO_Daily_Plan ready with " + (SEO_PLAN_SEED.length) + " days.\nEdit sheet rows anytime — email reads from here."
  );
}

function sendDailySeoPlanEmailUi() {
  const result = sendDailySeoPlanEmail_();
  SpreadsheetApp.getUi().alert(result);
}

/** Chạy bởi trigger hàng ngày 07:00 */
function sendDailySeoPlanEmail() {
  sendDailySeoPlanEmail_();
}

function sendDailySeoPlanEmail_() {
  const plan = getTodaySeoPlan_();
  const email = getSeoPlanEmail_();
  const todayLabel = formatDateVn_(plan.date);
  const subject = "[Saigon Living] Kế hoạch " + todayLabel + " — " + plan.title;
  const body = formatSeoPlanText_(plan);
  const html = formatSeoPlanHtml_(plan);

  GmailApp.sendEmail(email, subject, body, {
    htmlBody: html,
    name: "Saigon Living Plan",
  });

  return "Sent to " + email + " — " + plan.title;
}

function getTodaySeoPlan_() {
  const today = formatIsoDate_(new Date());
  const fromSheet = readPlanFromSheet_(today);
  if (fromSheet) {
    return fromSheet;
  }
  const fromSeed = readPlanFromSeed_(today);
  if (fromSeed) {
    return fromSeed;
  }
  return {
    date: today,
    title: "Ritual hàng ngày (chưa có plan chi tiết)",
    hours: "~1–2h",
    tasks: SEO_PLAN_FALLBACK,
  };
}

function readPlanFromSheet_(isoDate) {
  const sheet = getSeoPlanSheet_();
  if (!sheet) {
    return null;
  }
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) {
    return null;
  }
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const rowDate = normalizeIsoDate_(row[0]);
    if (rowDate === isoDate) {
      return {
        date: isoDate,
        title: String(row[1] || ""),
        hours: String(row[2] || ""),
        tasks: parseTasksCell_(row[3]),
      };
    }
  }
  return null;
}

function readPlanFromSeed_(isoDate) {
  for (let i = 0; i < SEO_PLAN_SEED.length; i++) {
    if (SEO_PLAN_SEED[i][0] === isoDate) {
      return {
        date: isoDate,
        title: SEO_PLAN_SEED[i][1],
        hours: SEO_PLAN_SEED[i][2],
        tasks: parseTasksCell_(SEO_PLAN_SEED[i][3]),
      };
    }
  }
  return null;
}

function parseTasksCell_(value) {
  if (!value) {
    return [];
  }
  if (Array.isArray(value)) {
    return value.map(String);
  }
  return String(value)
    .split("|")
    .map(function (s) {
      return s.trim();
    })
    .filter(Boolean);
}

function formatSeoPlanText_(plan) {
  const lines = [
    "Saigon Living — kế hoạch ngày " + formatDateVn_(plan.date),
    "Chiến lược: " + SEO_PLAN_CONFIG.STRATEGY,
    "",
    plan.title + " (" + plan.hours + ")",
    "",
  ];
  plan.tasks.forEach(function (task, idx) {
    lines.push((idx + 1) + ". [ ] " + task);
  });
  lines.push("");
  lines.push("Roadmap: saigonliving.net · docs seo-roadmap-1-tuan.md");
  lines.push("Zalo 0931781111 · Gọi lead trước khi nhắn");
  return lines.join("\n");
}

function formatSeoPlanHtml_(plan) {
  const items = plan.tasks
    .map(function (task) {
      return "<li style=\"margin:8px 0\">" + escapeHtml_(task) + "</li>";
    })
    .join("");

  return (
    "<div style=\"font-family:Arial,sans-serif;line-height:1.55;color:#15110c;max-width:640px\">" +
    "<h2 style=\"margin:0 0 8px\">Kế hoạch " +
    escapeHtml_(formatDateVn_(plan.date)) +
    "</h2>" +
    "<p style=\"color:#666;margin:0 0 16px\">" +
    escapeHtml_(SEO_PLAN_CONFIG.STRATEGY) +
    "</p>" +
    "<h3 style=\"margin:0 0 12px\">" +
    escapeHtml_(plan.title) +
    " <span style=\"font-weight:normal;color:#666\">(" +
    escapeHtml_(plan.hours) +
    ")</span></h3>" +
    "<ol style=\"padding-left:20px\">" +
    items +
    "</ol>" +
    "<p style=\"margin-top:24px;font-size:13px;color:#666\">Zalo 0931781111 · Gọi lead &lt;30p trước khi nhắn</p>" +
    "</div>"
  );
}

function escapeHtml_(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function createDailySeoPlanTrigger() {
  removeSeoPlanTriggers();
  ScriptApp.newTrigger("sendDailySeoPlanEmail")
    .timeBased()
    .atHour(SEO_PLAN_CONFIG.TRIGGER_HOUR)
    .everyDays(1)
    .inTimezone(SEO_PLAN_CONFIG.TIME_ZONE)
    .create();
  SpreadsheetApp.getUi().alert("Trigger 07:00 (" + SEO_PLAN_CONFIG.TIME_ZONE + ") created.");
}

function removeSeoPlanTriggers() {
  ScriptApp.getProjectTriggers().forEach(function (trigger) {
    if (trigger.getHandlerFunction() === "sendDailySeoPlanEmail") {
      ScriptApp.deleteTrigger(trigger);
    }
  });
}

function seedSeoDailyPlans_(sheet) {
  sheet.clearContents();
  sheet.getRange(1, 1, 1, SEO_PLAN_HEADERS.length).setValues([SEO_PLAN_HEADERS]);
  if (SEO_PLAN_SEED.length === 0) {
    return;
  }
  sheet.getRange(2, 1, SEO_PLAN_SEED.length, SEO_PLAN_HEADERS.length).setValues(SEO_PLAN_SEED);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, 4);
}

function ensureSeoPlanSheet_() {
  const ss = SpreadsheetApp.openById(SEO_PLAN_CONFIG.SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SEO_PLAN_CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SEO_PLAN_CONFIG.SHEET_NAME);
  }
  return sheet;
}

function getSeoPlanSheet_() {
  try {
    return SpreadsheetApp.openById(SEO_PLAN_CONFIG.SPREADSHEET_ID).getSheetByName(
      SEO_PLAN_CONFIG.SHEET_NAME
    );
  } catch (e) {
    return null;
  }
}

function getSeoPlanEmail_() {
  return (
    PropertiesService.getScriptProperties().getProperty("SEO_PLAN_EMAIL") ||
    SEO_PLAN_CONFIG.DEFAULT_EMAIL
  );
}

function formatIsoDate_(date) {
  return Utilities.formatDate(date, SEO_PLAN_CONFIG.TIME_ZONE, "yyyy-MM-dd");
}

function normalizeIsoDate_(value) {
  if (value instanceof Date) {
    return formatIsoDate_(value);
  }
  const s = String(value).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) {
    return s;
  }
  return s;
}

function formatDateVn_(isoDate) {
  const parts = isoDate.split("-");
  if (parts.length !== 3) {
    return isoDate;
  }
  return parts[2] + "/" + parts[1] + "/" + parts[0];
}
