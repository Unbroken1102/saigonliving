export type LeadSubmission = {
  name: string;
  phone: string;
  need: string;
  budget: string;
  note: string;
  source: string;
  page: string;
  website?: string;
};

export async function submitLead(payload: LeadSubmission) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as { error?: string };

  if (!response.ok) {
    throw new Error(data.error || "Không gửi được thông tin. Vui lòng thử lại.");
  }
}
