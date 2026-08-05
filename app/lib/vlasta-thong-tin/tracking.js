import { fireGoogleAdsLeadConversion, ensureGtag } from "./gtag-loader";

export function trackLeadFormSubmission(meta = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "generate_lead",
    form_name: meta.form_name ?? "vlasta_thong_tin",
    page_path: "/vlasta-premier/thong-tin",
    ...meta,
  });

  void ensureGtag({ pageView: true }).then((ready) => {
    if (!ready || !window.gtag) {
      return;
    }

    window.gtag("event", "generate_lead", {
      form_name: meta.form_name ?? "vlasta_thong_tin",
      page_path: "/vlasta-premier/thong-tin",
      ...meta,
    });
  });

  fireGoogleAdsLeadConversion();
}
