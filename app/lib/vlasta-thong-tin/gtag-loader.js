/**
 * Single gtag loader for /vlasta-premier/thong-tin — avoids duplicate script tags
 * when lazy GA (interaction) and Ads conversion (form success) both need gtag.
 */

function getTrackingIds() {
  return {
    gaId: process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
    adsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
    conversionId: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || "",
    conversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || "",
  };
}

function getBootstrapId({ gaId, adsId, conversionId }) {
  return gaId || adsId || conversionId || "";
}

let loadPromise = null;

/**
 * @param {{ pageView?: boolean }} options
 * @returns {Promise<boolean>}
 */
export function ensureGtag({ pageView = false } = {}) {
  if (typeof window === "undefined") {
    return Promise.resolve(false);
  }

  const ids = getTrackingIds();
  const bootstrapId = getBootstrapId(ids);

  if (!bootstrapId) {
    return Promise.resolve(false);
  }

  const w = window;
  w.dataLayer = w.dataLayer || [];

  if (!w.gtag) {
    w.gtag = function gtag(...args) {
      w.dataLayer.push(args);
    };
  }

  const applyConfigs = () => {
    if (ids.gaId && !w.__thongTinGaConfigured) {
      w.gtag("config", ids.gaId, {
        send_page_view: Boolean(pageView && !w.__thongTinGaPageViewSent),
      });
      w.__thongTinGaConfigured = true;
      if (pageView) {
        w.__thongTinGaPageViewSent = true;
      }
    } else if (ids.gaId && pageView && !w.__thongTinGaPageViewSent) {
      w.gtag("event", "page_view");
      w.__thongTinGaPageViewSent = true;
    }

    if (ids.adsId && !w.__thongTinAdsTagConfigured) {
      w.gtag("config", ids.adsId, { send_page_view: false });
      w.__thongTinAdsTagConfigured = true;
    }

    if (ids.conversionId && !ids.gaId && !ids.adsId && !w.__thongTinAdsTagConfigured) {
      w.gtag("config", ids.conversionId, { send_page_view: false });
      w.__thongTinAdsTagConfigured = true;
    }

    w.__gtagReady = true;
  };

  if (w.__gtagScriptLoaded) {
    applyConfigs();
    return Promise.resolve(true);
  }

  if (!loadPromise) {
    loadPromise = new Promise((resolve) => {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${bootstrapId}`;
      script.onload = () => {
        w.gtag("js", new Date());
        w.__gtagScriptLoaded = true;
        applyConfigs();
        resolve(true);
      };
      script.onerror = () => resolve(false);
      document.head.appendChild(script);
    });
  }

  return loadPromise.then(() => {
    applyConfigs();
    return true;
  });
}

export function fireGoogleAdsLeadConversion() {
  if (typeof window === "undefined") {
    return;
  }

  const { conversionId, conversionLabel } = getTrackingIds();

  if (!conversionId || !conversionLabel) {
    return;
  }

  void ensureGtag({ pageView: false }).then((ready) => {
    if (!ready || !window.gtag) {
      return;
    }

    window.gtag("event", "conversion", {
      send_to: `${conversionId}/${conversionLabel}`,
    });
  });
}
