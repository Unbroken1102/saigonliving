export const SCROLL_MILESTONES = [25, 50, 75, 100] as const;

export type ScrollMilestone = (typeof SCROLL_MILESTONES)[number];

export type PageContentMeta = {
  content_name: string;
  content_category: "blog" | "project" | "page";
  page_path: string;
};

const projectPaths = [
  "/vlasta-premier",
  "/tt-genesis",
  "/mizuki-park",
  "/the-peak-garden",
  "/eco-retreat",
  "/vinhomes-binh-chanh",
];

export function getPageContentMeta(pathname: string): PageContentMeta {
  let content_category: PageContentMeta["content_category"] = "page";

  if (pathname.startsWith("/blog/")) {
    content_category = "blog";
  } else if (projectPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`))) {
    content_category = "project";
  }

  return {
    content_name: typeof document !== "undefined" ? document.title : pathname,
    content_category,
    page_path: pathname,
  };
}

export function getScrollPercent(): number {
  const doc = document.documentElement;
  const scrollTop = window.scrollY || doc.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;

  if (scrollHeight <= 0) {
    return 100;
  }

  return Math.min(100, Math.round((scrollTop / scrollHeight) * 100));
}

type FbqFn = (
  command: "track" | "trackCustom",
  eventName: string,
  params?: Record<string, string | number>,
) => void;

type GtagFn = (
  command: "event",
  eventName: string,
  params?: Record<string, string | number>,
) => void;

function getFbq(): FbqFn | null {
  if (typeof window === "undefined") {
    return null;
  }

  const fbq = (window as Window & { fbq?: FbqFn }).fbq;
  return typeof fbq === "function" ? fbq : null;
}

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") {
    return null;
  }

  const gtag = (window as Window & { gtag?: GtagFn }).gtag;
  return typeof gtag === "function" ? gtag : null;
}

export function trackMetaViewContent(meta: PageContentMeta) {
  const fbq = getFbq();
  if (!fbq) {
    return;
  }

  fbq("track", "ViewContent", {
    content_name: meta.content_name,
    content_category: meta.content_category,
    content_type: meta.content_category,
  });
}

export function trackMetaScrollDepth(meta: PageContentMeta, depth: ScrollMilestone) {
  const fbq = getFbq();
  if (!fbq) {
    return;
  }

  fbq("trackCustom", "ScrollDepth", {
    depth_percent: depth,
    page_path: meta.page_path,
    content_category: meta.content_category,
  });
}

export function trackMetaEngagedTime(meta: PageContentMeta, seconds: number) {
  const fbq = getFbq();
  if (!fbq) {
    return;
  }

  fbq("trackCustom", `Engaged${seconds}s`, {
    engaged_seconds: seconds,
    page_path: meta.page_path,
    content_category: meta.content_category,
  });
}

export function trackGaViewContent(meta: PageContentMeta) {
  const gtag = getGtag();
  if (!gtag) {
    return;
  }

  gtag("event", "view_content", {
    page_path: meta.page_path,
    content_category: meta.content_category,
    page_title: meta.content_name,
  });
}

export function trackGaScrollDepth(meta: PageContentMeta, depth: ScrollMilestone) {
  const gtag = getGtag();
  if (!gtag) {
    return;
  }

  gtag("event", "scroll_depth", {
    percent_scrolled: depth,
    page_path: meta.page_path,
    content_category: meta.content_category,
  });
}

export function trackGaEngagedTime(meta: PageContentMeta, seconds: number) {
  const gtag = getGtag();
  if (!gtag) {
    return;
  }

  gtag("event", "engaged_time", {
    engaged_seconds: seconds,
    page_path: meta.page_path,
    content_category: meta.content_category,
  });
}
