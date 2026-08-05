"use client";

import { useEffect, useRef } from "react";
import { ensureGtag } from "@/app/lib/vlasta-thong-tin/gtag-loader";
import { trackingConfig } from "@/app/lib/site";

function injectGtm(gtmId: string) {
  if (document.getElementById("thong-tin-gtm")) {
    return;
  }

  const script = document.createElement("script");
  script.id = "thong-tin-gtm";
  script.textContent = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;
  document.head.appendChild(script);
}

/** No tracking in SSR HTML — one deferred trigger set so Lighthouse/PageSpeed stay clean. */
export function ThongTinTracking() {
  const loadedRef = useRef(false);
  const { gtmId, gaId } = trackingConfig;
  const hasGtag = Boolean(gaId || process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID);

  useEffect(() => {
    if (loadedRef.current || (!gtmId && !hasGtag)) {
      return;
    }

    const load = () => {
      if (loadedRef.current) {
        return;
      }
      loadedRef.current = true;

      if (gtmId) {
        injectGtm(gtmId);
        return;
      }

      void ensureGtag({ pageView: true });
    };

    const opts: AddEventListenerOptions = { once: true, passive: true };
    window.addEventListener("scroll", load, opts);
    window.addEventListener("click", load, opts);
    window.addEventListener("touchstart", load, opts);
    window.addEventListener("keydown", load, opts);
    document.addEventListener("focusin", load, opts);

    const idleCallback = window.requestIdleCallback?.(load, { timeout: 10000 });
    const timeout = window.setTimeout(load, 10000);

    return () => {
      window.clearTimeout(timeout);
      if (idleCallback) {
        window.cancelIdleCallback?.(idleCallback);
      }
    };
  }, [gtmId, hasGtag]);

  return null;
}
