"use client";

import { LeadFormTrigger } from "@/app/components/lead-form-popup";
import { MotionReveal } from "@/app/components/motion-reveal";
import {
  GOLD_CTA_BUTTON_CLASS,
  GOLD_CTA_BUTTON_COMPACT_CLASS,
  GOLD_SECONDARY_CTA_BUTTON_CLASS,
  INVENTORY_CTA_BUTTON_CLASS,
  INVENTORY_CTA_BUTTON_COMPACT_CLASS,
  INVENTORY_CTA_FLOATING_CLASS,
  INVENTORY_CTA_HERO_CLASS,
} from "@/app/lib/cta-button-styles";

export {
  GOLD_CTA_BUTTON_CLASS,
  GOLD_CTA_BUTTON_COMPACT_CLASS,
  GOLD_SECONDARY_CTA_BUTTON_CLASS,
  INVENTORY_CTA_BUTTON_CLASS,
  INVENTORY_CTA_BUTTON_COMPACT_CLASS,
  INVENTORY_CTA_FLOATING_CLASS,
  INVENTORY_CTA_HERO_CLASS,
};

export const PROJECT_INVENTORY_CTA_LABEL = "Nhận bảng giá 5 căn giá tốt nhất";

type ProjectInventoryCtaProps = {
  projectName: string;
  source: string;
  description?: string;
  className?: string;
  variant?: "luxury" | "eco" | "dark";
};

const variantStyles = {
  luxury: {
    shell: "border-[#d9c79f]/60 bg-white text-[#10251c] shadow-[0_18px_60px_rgba(21,17,12,0.08)]",
    eyebrow: "text-[#8a6a2f]",
    body: "text-[#5d554c]",
    button: INVENTORY_CTA_BUTTON_CLASS,
  },
  eco: {
    shell: "border-[#d9c79f]/60 bg-white text-[#10251c] shadow-[0_18px_60px_rgba(21,17,12,0.08)]",
    eyebrow: "text-[#6f7f3f]",
    body: "text-[#5d554c]",
    button: INVENTORY_CTA_BUTTON_CLASS,
  },
  dark: {
    shell: "border-white/12 bg-white/[0.08] text-white",
    eyebrow: "text-[#f0ddb0]",
    body: "text-white/72",
    button: INVENTORY_CTA_BUTTON_CLASS,
  },
} as const;

export function ProjectInventoryCta({
  projectName,
  source,
  description,
  className = "mt-12",
  variant = "luxury",
}: ProjectInventoryCtaProps) {
  const styles = variantStyles[variant];

  return (
    <MotionReveal className={className}>
      <div className={`rounded-[2rem] border p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8 ${styles.shell}`}>
        <div className="max-w-2xl">
          <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${styles.eyebrow}`}>
            Giỏ hàng theo ngân sách
          </p>
          <h3 className="font-display mt-3 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
            Xem giỏ hàng {projectName} — 5 căn giá tốt nhất
          </h3>
          <p className={`mt-3 text-sm leading-7 md:text-base ${styles.body}`}>
            {description ||
              `Saigon Living sẽ gửi 5 căn ${projectName} có giá và chính sách tốt nhất trong giỏ hàng tuần này.`}
          </p>
        </div>
        <LeadFormTrigger
          source={source}
          ctaLabel={PROJECT_INVENTORY_CTA_LABEL}
          className={`mt-6 shrink-0 md:mt-0 ${styles.button}`}
        >
          {PROJECT_INVENTORY_CTA_LABEL}
        </LeadFormTrigger>
      </div>
    </MotionReveal>
  );
}
