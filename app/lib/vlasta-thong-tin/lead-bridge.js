import { submitLead } from "@/app/components/lead-submit";

export async function submitLeadWebhook(payload) {
  await submitLead({
    name: String(payload.fullName || ""),
    phone: String(payload.phone || ""),
    need: String(payload.project || "Vlasta Premier Phú Thuận"),
    budget: "",
    note: String(payload.note || ""),
    source: "Vlasta Thong Tin Landing",
    page: "/vlasta-premier/thong-tin",
  });
}
