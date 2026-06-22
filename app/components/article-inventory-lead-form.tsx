"use client";

import { useState } from "react";
import { PROJECT_INVENTORY_CTA_LABEL, INVENTORY_CTA_BUTTON_CLASS } from "@/app/components/project-inventory-cta";
import { submitLead } from "@/app/components/lead-submit";
import { siteConfig } from "@/app/lib/site";

type ArticleInventoryLeadFormProps = {
  projectName: string;
  source: string;
  className?: string;
};

export function ArticleInventoryLeadForm({
  projectName,
  source,
  className = "my-10",
}: ArticleInventoryLeadFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  return (
    <div className={`article-inventory-cta rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6 md:p-7 ${className}`.trim()}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
        Giỏ hàng 5 căn giá tốt nhất
      </p>
      <h3 className="font-display mt-3 text-2xl font-medium tracking-[-0.03em] text-neutral-900 md:text-[1.75rem]">
        Xem giỏ hàng {projectName} — 5 căn giá tốt nhất
      </h3>
      <p className="mt-3 leading-7 text-neutral-600">
        Để lại họ tên và số điện thoại, Saigon Living sẽ gửi 5 căn {projectName} có giá tốt nhất theo giỏ hàng hiện tại.
      </p>

      <form
        className="mt-5"
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
              note: `Yêu cầu xem 5 căn ${projectName} giá tốt nhất từ bài blog.`,
              source,
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
          <label className="space-y-2 text-sm font-medium text-neutral-900">
            Họ tên
            <input
              name="name"
              required
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-500"
              placeholder="Anh/Chị"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-neutral-900">
            Số điện thoại
            <input
              name="phone"
              required
              inputMode="tel"
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-500"
              placeholder="090..."
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`mt-4 w-full sm:w-auto ${INVENTORY_CTA_BUTTON_CLASS}`}
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
                <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold underline underline-offset-4">
                  Gọi {siteConfig.contact.phone}
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
      </form>
    </div>
  );
}
