"use client";

import { usePathname } from "next/navigation";
import { TrackingEngagement } from "@/app/components/tracking-engagement";
import { TrackingScripts } from "@/app/components/tracking";

const STANDALONE_LANDING_PREFIXES = ["/vlasta-premier/thong-tin"];

function isStandaloneLanding(pathname: string) {
  return STANDALONE_LANDING_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function ConditionalTracking() {
  const pathname = usePathname();
  const standalone = isStandaloneLanding(pathname ?? "");

  if (standalone) {
    return null;
  }

  return (
    <>
      <TrackingScripts />
      <TrackingEngagement />
    </>
  );
}
