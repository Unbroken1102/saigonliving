import { readFileSync } from "fs";
import { join } from "path";

export type SeoDailyPlan = {
  date: string;
  title: string;
  hours: string;
  tasks: string[];
};

type PlansFile = {
  timezone: string;
  emailDefault: string;
  strategy: string;
  plans: Array<{
    date: string;
    title: string;
    hours: string;
    tasks: string[];
  }>;
  fallbackTasks: string[];
};

let cached: PlansFile | null = null;

function loadPlansFile(): PlansFile {
  if (cached) {
    return cached;
  }
  const raw = readFileSync(join(process.cwd(), "docs/seo-daily-plans.json"), "utf8");
  cached = JSON.parse(raw) as PlansFile;
  return cached;
}

export function getSeoPlanTimezone(): string {
  return loadPlansFile().timezone;
}

export function getSeoPlanStrategy(): string {
  return loadPlansFile().strategy;
}

export function getSeoPlanDefaultEmail(): string {
  return loadPlansFile().emailDefault;
}

export function isoDateInTimezone(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function formatDateVn(isoDate: string): string {
  const [y, m, d] = isoDate.split("-");
  if (!y || !m || !d) {
    return isoDate;
  }
  return `${d}/${m}/${y}`;
}

export function getSeoDailyPlan(forDate?: Date): SeoDailyPlan {
  const file = loadPlansFile();
  const tz = file.timezone;
  const iso = isoDateInTimezone(forDate ?? new Date(), tz);
  const found = file.plans.find((p) => p.date === iso);

  if (found) {
    return { ...found };
  }

  return {
    date: iso,
    title: "Ritual hàng ngày (chưa có plan chi tiết — xem roadmap)",
    hours: "~1–2h",
    tasks: file.fallbackTasks,
  };
}

export function formatSeoPlanText(plan: SeoDailyPlan, strategy: string): string {
  const lines = [
    `Saigon Living — kế hoạch ngày ${formatDateVn(plan.date)}`,
    `Chiến lược: ${strategy}`,
    "",
    `${plan.title} (${plan.hours})`,
    "",
  ];

  plan.tasks.forEach((task, idx) => {
    lines.push(`${idx + 1}. [ ] ${task}`);
  });

  lines.push("");
  lines.push("Zalo 0943949191 · Gọi lead <30p trước khi nhắn");
  lines.push("Roadmap: docs/seo-roadmap-1-tuan.md");

  return lines.join("\n");
}

export function formatSeoPlanHtml(plan: SeoDailyPlan, strategy: string): string {
  const items = plan.tasks
    .map((task) => `<li style="margin:8px 0">${escapeHtml(task)}</li>`)
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.55;color:#15110c;max-width:640px">
      <h2 style="margin:0 0 8px">Kế hoạch ${escapeHtml(formatDateVn(plan.date))}</h2>
      <p style="color:#666;margin:0 0 16px">${escapeHtml(strategy)}</p>
      <h3 style="margin:0 0 12px">${escapeHtml(plan.title)}
        <span style="font-weight:normal;color:#666">(${escapeHtml(plan.hours)})</span>
      </h3>
      <ol style="padding-left:20px">${items}</ol>
      <p style="margin-top:24px;font-size:13px;color:#666">Zalo 0943949191 · Gọi lead &lt;30p trước khi nhắn</p>
    </div>
  `.trim();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendSeoDailyPlanEmail(options?: {
  to?: string;
  forDate?: Date;
}): Promise<{ to: string; subject: string; plan: SeoDailyPlan; via: string }> {
  const to =
    options?.to ||
    process.env.SEO_PLAN_EMAIL ||
    process.env.LEAD_NOTIFY_EMAIL ||
    getSeoPlanDefaultEmail();

  const strategy = getSeoPlanStrategy();
  const plan = getSeoDailyPlan(options?.forDate);
  const subject = `[Saigon Living] Kế hoạch ${formatDateVn(plan.date)} — ${plan.title}`;
  const text = formatSeoPlanText(plan, strategy);
  const html = formatSeoPlanHtml(plan, strategy);

  const scriptUrl =
    process.env.SEO_PLAN_GOOGLE_SCRIPT_URL || process.env.LISTINGS_WEB_APP_URL;

  if (scriptUrl) {
    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "seo-daily-plan" }),
        redirect: "follow",
      });
      const raw = await response.text();
      const data = JSON.parse(raw) as { ok?: boolean; error?: string };
      if (data.ok) {
        return { to, subject, plan, via: "gmail-script" };
      }
    } catch {
      // fall through to Resend / FormSubmit
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.SEO_PLAN_EMAIL_FROM ||
    process.env.LEAD_EMAIL_FROM ||
    "Saigon Living <onboarding@resend.dev>";

  if (apiKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject, text, html }),
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Resend rejected SEO plan email: ${response.status} ${body}`);
    }

    return { to, subject, plan, via: "resend" };
  }

  const formRes = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      _subject: subject,
      _captcha: "false",
      _template: "table",
      message: text,
    }),
  });

  if (!formRes.ok) {
    throw new Error(`FormSubmit rejected SEO plan email: ${formRes.status}`);
  }

  return { to, subject, plan, via: "formsubmit" };
}
