import { NextResponse } from "next/server";
import { sendSeoDailyPlanEmail } from "@/app/lib/seo-daily-plan";

function isAuthorized(request: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return process.env.NODE_ENV === "development";
  }

  const auth = request.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await sendSeoDailyPlanEmail();
    return NextResponse.json({
      ok: true,
      to: result.to,
      subject: result.subject,
      date: result.plan.date,
      title: result.plan.title,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("SEO daily plan cron failed", error);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
