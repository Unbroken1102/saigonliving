"use client";

import { useEffect, useState } from "react";
import { site } from "@/app/lib/vlasta-thong-tin/data";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const telHref = `tel:${site.hotline.replace(/\s/g, "")}`;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-500 md:bottom-8 md:right-8 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={site.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-w-[104px] items-center justify-center gap-1.5 rounded-full bg-[#0068ff] px-3.5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#0068ff]/25 transition-all duration-300 hover:scale-105 hover:bg-[#2d83ff] active:scale-95 md:min-w-[156px] md:gap-2 md:px-5 md:py-3.5 md:text-sm"
        aria-label="Chat Zalo"
      >
        <ZaloIcon />
        <span>Zalo</span>
      </a>

      <a
        href={telHref}
        className="flex min-w-[104px] items-center justify-center gap-1.5 rounded-full bg-charcoal px-3.5 py-2.5 text-xs font-semibold text-warm-white shadow-lg shadow-charcoal/25 transition-all duration-300 hover:scale-105 hover:bg-charcoal-soft active:scale-95 md:min-w-[156px] md:gap-2 md:px-5 md:py-3.5 md:text-sm"
        aria-label={`Gọi hotline ${site.hotline}`}
      >
        <PhoneIcon />
        <span>{site.hotline}</span>
      </a>

      <a
        href="#lien-he"
        className="animate-cta-blink flex min-w-[104px] items-center justify-center gap-1.5 rounded-full bg-gold px-3.5 py-2.5 text-xs font-semibold text-charcoal shadow-lg shadow-gold/30 transition-all duration-300 hover:scale-105 hover:bg-gold-light active:scale-95 md:min-w-[156px] md:gap-2 md:px-5 md:py-3.5 md:text-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-charcoal/40" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-charcoal" />
        </span>
        <span>Tải bảng giá</span>
      </a>
    </div>
  );
}

function ZaloIcon() {
  return (
    <span
      className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-bold leading-none text-[#0068ff] md:h-5 md:w-5 md:text-[10px]"
      aria-hidden
    >
      Z
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4 md:h-[17px] md:w-[17px]" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.3 2.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
