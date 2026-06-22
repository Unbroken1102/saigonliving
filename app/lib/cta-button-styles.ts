/** Article footer primary — dark gold, desktop-optimized */
export const ARTICLE_FOOTER_PRIMARY_CLASS = "cta-article-primary";

/** Article footer Zalo — brand blue */
export const ARTICLE_FOOTER_ZALO_CLASS = "cta-zalo-brand";

/** Primary conversion CTA — solid gold (styles in globals.css) */
export const GOLD_CTA_BUTTON_CLASS = "cta-gold-primary btn-luxury";

export const GOLD_CTA_BUTTON_COMPACT_CLASS = "cta-gold-compact";

/** Inventory / giỏ hàng 5 căn — dark navy + white text (trang dự án + form giữa bài blog) */
export const INVENTORY_CTA_BUTTON_CLASS =
  "cta-navy-primary btn-luxury inline-flex cursor-pointer items-center justify-center rounded-full border border-[#0f1829] bg-[#1a2744] px-7 py-4 text-center text-sm font-bold leading-5 text-white shadow-[0_10px_15px_-3px_rgba(26,39,68,0.45),0_18px_40px_rgba(15,24,41,0.2)] transition hover:-translate-y-0.5 hover:bg-[#243556] disabled:cursor-not-allowed disabled:opacity-70";

/** @deprecated Dùng INVENTORY_CTA_BUTTON_CLASS */
export const ARTICLE_INLINE_INVENTORY_CTA_BUTTON_CLASS = INVENTORY_CTA_BUTTON_CLASS;

export const INVENTORY_CTA_BUTTON_COMPACT_CLASS =
  "cta-navy-compact inline-flex cursor-pointer items-center justify-center rounded-full border border-[#0f1829] bg-[#1a2744] px-3 py-3 text-xs font-bold text-white shadow-[0_4px_6px_-1px_rgba(26,39,68,0.35)] transition hover:bg-[#243556]";

export const INVENTORY_CTA_HERO_CLASS =
  "btn-luxury cta-navy-primary inline-flex cursor-pointer items-center justify-center rounded-full border border-[#0f1829] bg-[#1a2744] px-7 py-4 text-center text-sm font-bold leading-5 text-white shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#243556] md:px-9";

/** Floating sticky / desktop corner — compact navy pill */
export const INVENTORY_CTA_FLOATING_CLASS =
  "cta-navy-compact inline-flex cursor-pointer items-center justify-center rounded-full border border-[#0f1829]/80 bg-[#1a2744] px-4 py-2.5 text-center text-xs font-bold text-white backdrop-blur-xl shadow-[0_14px_34px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 hover:bg-[#243556]";

/** Secondary gold CTA — lighter fill for Zalo / quick contact */
export const GOLD_SECONDARY_CTA_BUTTON_CLASS = "cta-gold-secondary btn-luxury";

/** Article footer — rounded rectangle, full width, no pill distortion */
export const GOLD_CTA_BLOCK_CLASS = `${GOLD_CTA_BUTTON_CLASS} cta-gold-block`;

export const GOLD_SECONDARY_BLOCK_CLASS = `${GOLD_SECONDARY_CTA_BUTTON_CLASS} cta-gold-block`;
