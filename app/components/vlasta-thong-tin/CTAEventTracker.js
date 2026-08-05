"use client";

import { useEffect } from "react";
import { trackPhoneClick, trackZaloClick } from "@/app/lib/vlasta-thong-tin/tracking";

export default function CTAEventTracker() {
  useEffect(() => {
    function handleClick(event) {
      const link = event.target.closest("a[href]");

      if (!link) {
        return;
      }

      const href = link.getAttribute("href") || "";
      const label = link.textContent?.trim() || "";
      const location = link.closest("header") ? "navbar" : "page";

      if (href.startsWith("tel:")) {
        trackPhoneClick({
          link_url: href,
          cta_text: label,
          cta_location: location,
        });
        return;
      }

      if (href.includes("zalo.me")) {
        trackZaloClick({
          link_url: href,
          cta_text: label,
          cta_location: location,
        });
      }
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
