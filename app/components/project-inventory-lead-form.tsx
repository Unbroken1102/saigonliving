"use client";

import { useState } from "react";
import { PROJECT_INVENTORY_CTA_LABEL, INVENTORY_CTA_BUTTON_CLASS } from "@/app/components/project-inventory-cta";
import {
  projectInventoryContactConfig,
  type ProjectInventoryContactVariant,
} from "@/app/components/project-inventory-lead-config";
import { submitLead } from "@/app/components/lead-submit";
import { siteConfig } from "@/app/lib/site";

type ProjectInventoryLeadFormProps = {
  variant: ProjectInventoryContactVariant;
  className?: string;
};

export function ProjectInventoryLeadForm({ variant, className = "" }: ProjectInventoryLeadFormProps) {
  const config = projectInventoryContactConfig[variant];
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  return (
    <div className={`${config.shellClassName} ${className}`.trim()}>
      <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${config.eyebrowClassName}`}>
        Giỏ hàng theo ngân sách
      </p>
      <h3 className={`font-display mt-3 text-3xl font-medium tracking-[-0.04em] md:text-4xl ${config.titleClassName}`}>
        Xem giỏ hàng {config.projectName} — 5 căn giá tốt nhất
      </h3>
      <p className={`mt-3 text-sm leading-7 md:text-base ${config.bodyClassName}`}>{config.description}</p>

      <form
        className="mt-6"
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.currentTarget;
          const formData = new FormData(form);

          setStatus("submitting");
          setMessage("");

          try {
            await submitLead({
              name: String(formData.get("name") || ""),
              phone: String(formData.get("phone") || ""),
              need: PROJECT_INVENTORY_CTA_LABEL,
              budget: "",
              note: `Yêu cầu giỏ hàng 5 căn ${config.projectName} từ form cuối trang.`,
              source: config.source,
              page: window.location.href,
              website: String(formData.get("website") || ""),
            });
            form.reset();
            setStatus("success");
            setMessage("Đã gửi thông tin. Saigon Living sẽ gửi 5 căn phù hợp sớm.");
          } catch (error) {
            setStatus("error");
            setMessage(error instanceof Error ? error.message : "Không gửi được thông tin. Vui lòng thử lại.");
          }
        }}
      >
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={`space-y-2 text-sm font-medium ${config.titleClassName}`}>
            Họ tên
            <input
              name="name"
              required
              className={`w-full rounded-2xl border px-4 py-3 outline-none ${config.fieldClassName}`}
              placeholder="Anh/Chị"
            />
          </label>
          <label className={`space-y-2 text-sm font-medium ${config.titleClassName}`}>
            Số điện thoại
            <input
              name="phone"
              required
              inputMode="tel"
              className={`w-full rounded-2xl border px-4 py-3 outline-none ${config.fieldClassName}`}
              placeholder="090..."
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`mt-5 w-full ${INVENTORY_CTA_BUTTON_CLASS}`}
        >
          {status === "submitting" ? "Đang gửi..." : PROJECT_INVENTORY_CTA_LABEL}
        </button>
        {message ? (
          <div
            className={`mt-4 rounded-2xl border p-4 text-sm leading-6 ${
              status === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                : "border-red-200 bg-red-50 text-red-900"
            }`}
          >
            <p>{message}</p>
            {status === "error" ? (
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={siteConfig.contact.zalo} className="font-semibold underline underline-offset-4">
                  Gửi qua Zalo
                </a>
                <a href={`tel:${siteConfig.contact.phoneTel}`} className="font-semibold underline underline-offset-4">
                  Gọi {siteConfig.contact.phone}
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
        <p className={`mt-4 text-xs leading-6 ${config.bodyClassName}`}>
          Chỉ cần họ tên và số điện thoại. Saigon Living liên hệ lại để gửi giỏ hàng 5 căn phù hợp.
        </p>
      </form>
    </div>
  );
}
