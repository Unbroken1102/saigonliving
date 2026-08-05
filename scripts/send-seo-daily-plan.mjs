#!/usr/bin/env node
/**
 * Gửi email kế hoạch SEO hôm nay.
 * Thứ tự: Resend → SMTP → FormSubmit → Mail.app (Mac)
 * Usage: npm run seo:daily-plan
 */

import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";
import nodemailer from "nodemailer";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function loadEnvLocal() {
  for (const name of [".env.local", ".env.vercel.local", ".env"]) {
    const path = join(root, name);
    if (!existsSync(path)) {
      continue;
    }
    for (const line of readFileSync(path, "utf8").split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }
      const eq = trimmed.indexOf("=");
      if (eq === -1) {
        continue;
      }
      const key = trimmed.slice(0, eq).trim();
      let val = trimmed.slice(eq + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

loadEnvLocal();

const plans = JSON.parse(readFileSync(join(root, "docs/seo-daily-plans.json"), "utf8"));
const tz = plans.timezone || "Asia/Ho_Chi_Minh";
const iso = new Intl.DateTimeFormat("en-CA", {
  timeZone: tz,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

const plan = plans.plans.find((p) => p.date === iso) ?? {
  date: iso,
  title: "Ritual hàng ngày",
  hours: "~1–2h",
  tasks: plans.fallbackTasks,
};

const [y, m, d] = iso.split("-");
const dateVn = `${d}/${m}/${y}`;
const to =
  process.env.SEO_PLAN_EMAIL || process.env.LEAD_NOTIFY_EMAIL || plans.emailDefault;
const from =
  process.env.SEO_PLAN_EMAIL_FROM ||
  process.env.LEAD_EMAIL_FROM ||
  "Saigon Living <onboarding@resend.dev>";
const subject = `[Saigon Living] Kế hoạch ${dateVn} — ${plan.title}`;

const text = [
  `Saigon Living — kế hoạch ngày ${dateVn}`,
  `Chiến lược: ${plans.strategy}`,
  "",
  `${plan.title} (${plan.hours})`,
  "",
  ...plan.tasks.map((t, i) => `${i + 1}. [ ] ${t}`),
  "",
  "Zalo 0931781111 · Gọi lead <30p trước khi nhắn",
].join("\n");

const html = `<pre style="font-family:Arial,sans-serif;white-space:pre-wrap">${text.replace(/</g, "&lt;")}</pre>`;

async function sendWithGoogleScript() {
  const url =
    process.env.SEO_PLAN_GOOGLE_SCRIPT_URL ||
    process.env.LISTINGS_WEB_APP_URL;
  if (!url) {
    return null;
  }
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "seo-daily-plan" }),
      redirect: "follow",
    });
    const raw = await res.text();
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      console.error("Google Script: invalid JSON", raw.slice(0, 200));
      return null;
    }
    if (data.ok) {
      return "gmail-script";
    }
    console.error("Google Script:", data.error || raw.slice(0, 200));
  } catch (error) {
    console.error("Google Script:", error instanceof Error ? error.message : error);
  }
  return null;
}

async function sendWithResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, text, html }),
  });
  const body = await res.text();
  if (!res.ok) {
    console.error("Resend:", res.status, body);
    return null;
  }
  return "resend";
}

async function sendWithSmtp() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    return null;
  }
  const port = Number(process.env.SMTP_PORT || 587);
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: { user, pass },
  });
  await transporter.sendMail({
    from: process.env.LEAD_EMAIL_FROM || user,
    to,
    subject,
    text,
    html,
  });
  return "smtp";
}

async function sendWithFormSubmit() {
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "https://saigonliving.net",
      Referer: "https://saigonliving.net/",
    },
    body: JSON.stringify({
      _subject: subject,
      _captcha: "false",
      _template: "table",
      message: text,
    }),
  });
  const raw = await res.text();
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    console.error("FormSubmit: invalid JSON", raw.slice(0, 200));
    return null;
  }
  if (data.success === "true" || data.success === true) {
    return "formsubmit";
  }
  console.error("FormSubmit chưa gửi được:", data.message || raw);
  if (String(data.message || "").toLowerCase().includes("activation")) {
    console.error("\n→ Mở inbox/spam tìm mail FormSubmit «Activate Form» → bấm link → chạy lại: npm run seo:daily-plan");
  }
  return null;
}

function sendWithMacMail() {
  if (process.platform !== "darwin") {
    return null;
  }
  try {
    const script = `
      tell application "Mail"
        set msg to make new outgoing message with properties {subject:"${subject.replace(/"/g, '\\"')}", content:"${text.replace(/"/g, '\\"').replace(/\n/g, "\\n")}", visible:false}
        tell msg
          make new to recipient at end of to recipients with properties {address:"${to}"}
          send
        end tell
      end tell
    `;
    execFileSync("osascript", ["-e", script], { stdio: "pipe" });
    return "mac-mail";
  } catch (error) {
    console.error("Mail.app:", error instanceof Error ? error.message : error);
    return null;
  }
}

const via =
  (await sendWithGoogleScript()) ||
  (await sendWithResend()) ||
  (await sendWithSmtp()) ||
  (await sendWithFormSubmit()) ||
  sendWithMacMail();

if (!via) {
  console.error("\nKhông gửi được email.");
  console.error("Cách nhanh (Gmail): Sheet → menu Saigon Living SEO Plan → Send today plan");
  console.error("Hoặc deploy Apps Script (doPost seo-daily-plan) rồi chạy lại npm run seo:daily-plan");
  console.error("Hoặc thêm RESEND_API_KEY vào .env.local (resend.com — free tier)\n");
  console.log("--- Kế hoạch hôm nay (copy tay) ---\n");
  console.log(text);
  process.exit(1);
}

console.log(`OK (${via}) → ${to}`);
console.log(subject);
