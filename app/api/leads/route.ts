import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const leadRecipient = process.env.LEAD_NOTIFY_EMAIL || "phamductubk@gmail.com";
// Google Sheet: https://docs.google.com/spreadsheets/d/1GMd344rtJkok7Fl1I_4EStpRWw-Yp0O2TfaRlFmJtpo
const googleScriptUrl =
  process.env.LEAD_GOOGLE_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycby2S8xtn-rQLQjGchtA28nz0NjxEFYDiwFiBgMS9UVq57RNm_XrtgyCGOticFVlXiGJ/exec";

type LeadPayload = {
  name?: string;
  phone?: string;
  need?: string;
  budget?: string;
  note?: string;
  source?: string;
  page?: string;
  website?: string;
};

function clean(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, 1200);
}

function buildEmail(payload: Required<Omit<LeadPayload, "website">>) {
  const rows: [string, string][] = [
    ["Nguồn", payload.source],
    ["Trang", payload.page],
    ["Họ tên", payload.name],
    ["Số điện thoại", payload.phone],
    ["Nhu cầu", payload.need],
    ...(payload.budget ? ([["Ngân sách", payload.budget]] as [string, string][]) : []),
    ...(payload.note ? ([["Ghi chú", payload.note]] as [string, string][]) : []),
    ["Thời gian", new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#15110c">
      <h2 style="margin:0 0 16px">Lead mới từ Saigon Living</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border:1px solid #eadfca;padding:10px 12px;font-weight:700;width:160px;background:#fbf8f2">${label}</td>
                <td style="border:1px solid #eadfca;padding:10px 12px">${String(value).replace(/\n/g, "<br />")}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
    </div>
  `;

  return { text, html };
}

async function sendWithResend(subject: string, html: string, text: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.LEAD_EMAIL_FROM || "Saigon Living <onboarding@resend.dev>",
      to: [leadRecipient],
      subject,
      html,
      text,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend rejected lead email: ${response.status}`);
  }

  return true;
}

async function sendWithSmtp(subject: string, html: string, text: string) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER || leadRecipient;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return false;
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
    to: leadRecipient,
    replyTo: user,
    subject,
    html,
    text,
  });

  return true;
}

async function sendWithFormSubmit(subject: string, text: string) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(leadRecipient)}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _subject: subject,
      _captcha: "false",
      _template: "table",
      message: text,
    }),
  });

  if (!response.ok) {
    throw new Error(`FormSubmit rejected lead email: ${response.status}`);
  }

  return true;
}

async function sendWithGoogleScript(payload: Required<Omit<LeadPayload, "website">>) {
  if (!googleScriptUrl) {
    return false;
  }

  const response = await fetch(googleScriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    redirect: "follow",
  });

  const text = await response.text();

  if (!response.ok || /<html/i.test(text)) {
    throw new Error(`Google Apps Script rejected lead: ${response.status} ${text.slice(0, 160)}`);
  }

  const data = JSON.parse(text) as { ok?: boolean; error?: string };

  if (!data.ok) {
    throw new Error(data.error || "Google Apps Script did not accept the lead.");
  }

  return true;
}

async function tryGoogleScript(payload: Required<Omit<LeadPayload, "website">>) {
  try {
    return await sendWithGoogleScript(payload);
  } catch (error) {
    console.error("Google Sheet lead failed", error);
    return false;
  }
}

async function tryEmail(subject: string, html: string, text: string) {
  try {
    if (await sendWithResend(subject, html, text)) {
      return true;
    }

    if (await sendWithSmtp(subject, html, text)) {
      return true;
    }

    await sendWithFormSubmit(subject, text);
    return true;
  } catch (error) {
    console.error("Lead email failed", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    if (clean(body.website)) {
      return NextResponse.json({ ok: true });
    }

    const payload = {
      name: clean(body.name),
      phone: clean(body.phone),
      need: clean(body.need),
      budget: clean(body.budget),
      note: clean(body.note),
      source: clean(body.source) || "Website form",
      page: clean(body.page) || "Không rõ",
    };

    if (!payload.name || !payload.phone) {
      return NextResponse.json({ error: "Vui lòng nhập họ tên và số điện thoại." }, { status: 400 });
    }

    const subject = `Lead Saigon Living: ${payload.name} - ${payload.phone}`;
    const { html, text } = buildEmail(payload);
    const [sheetSaved, emailSent] = await Promise.all([
      tryGoogleScript(payload),
      tryEmail(subject, html, text),
    ]);

    if (!sheetSaved && !emailSent) {
      return NextResponse.json(
        { error: "Không gửi được thông tin. Vui lòng thử lại hoặc liên hệ Zalo." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submission failed", error);
    return NextResponse.json({ error: "Không gửi được thông tin. Vui lòng thử lại hoặc liên hệ Zalo." }, { status: 500 });
  }
}
