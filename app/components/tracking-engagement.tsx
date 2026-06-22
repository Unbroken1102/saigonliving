"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  getPageContentMeta,
  getScrollPercent,
  SCROLL_MILESTONES,
  type ScrollMilestone,
  trackGaEngagedTime,
  trackGaScrollDepth,
  trackGaViewContent,
  trackMetaEngagedTime,
  trackMetaScrollDepth,
  trackMetaViewContent,
} from "@/app/lib/analytics";
import { trackingConfig } from "@/app/lib/site";

const ENGAGED_TIME_MARKS = [30, 60] as const;

export function TrackingEngagement() {
  const pathname = usePathname();
  const scrollMarksRef = useRef<Set<ScrollMilestone>>(new Set());
  const engagedMarksRef = useRef<Set<number>>(new Set());
  const { gaId, metaPixelId } = trackingConfig;

  useEffect(() => {
    if (!gaId && !metaPixelId) {
      return;
    }

    scrollMarksRef.current = new Set();
    engagedMarksRef.current = new Set();

    const meta = getPageContentMeta(pathname);

    if (metaPixelId) {
      trackMetaViewContent(meta);
    }

    if (gaId) {
      trackGaViewContent(meta);
    }

    const onScroll = () => {
      const percent = getScrollPercent();

      for (const milestone of SCROLL_MILESTONES) {
        if (percent < milestone || scrollMarksRef.current.has(milestone)) {
          continue;
        }

        scrollMarksRef.current.add(milestone);

        if (metaPixelId) {
          trackMetaScrollDepth(meta, milestone);
        }

        if (gaId) {
          trackGaScrollDepth(meta, milestone);
        }
      }
    };

    const engagedTimers = ENGAGED_TIME_MARKS.map((seconds) =>
      window.setTimeout(() => {
        if (engagedMarksRef.current.has(seconds)) {
          return;
        }

        engagedMarksRef.current.add(seconds);

        if (metaPixelId) {
          trackMetaEngagedTime(meta, seconds);
        }

        if (gaId) {
          trackGaEngagedTime(meta, seconds);
        }
      }, seconds * 1000),
    );

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      engagedTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [gaId, metaPixelId, pathname]);

  return null;
}
