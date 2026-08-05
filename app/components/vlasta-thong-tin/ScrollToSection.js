"use client";

import { useEffect } from "react";

export default function ScrollToSection({ sectionId }) {
  useEffect(() => {
    if (!sectionId) {
      return;
    }

    const timeout = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [sectionId]);

  return null;
}
