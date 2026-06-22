"use client";

import { useState } from "react";
import { siteConfig } from "@/app/lib/site";
import { submitLead } from "@/app/components/lead-submit";
import { GOLD_CTA_BUTTON_CLASS } from "@/app/components/project-inventory-cta";

type LeadCaptureFormProps = {
  source: string;
  needOptions: string[];
  defaultNeed?: string;
  submitLabel: string;
  className?: string;
};

export function LeadCaptureForm({
  source,
  needOptions,
  defaultNeed,
  submitLabel,
  className = "luxury-card rounded-[2rem] p-6",
}: LeadCaptureFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  return (
    <form
      className={className}
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
            need: String(formData.get("need") || defaultNeed || needOptions[0] || ""),
            budget: "",
            note: "",
            source,
            page: window.location.href,
            website: String(formData.get("website") || ""),
          });
          form.reset();
          setStatus("success");
          setMessage("Đã gửi thông tin. Saigon Living sẽ liên hệ lại sớm.");
        } catch (error) {
          setStatus("error");
          setMessage(error instanceof Error ? error.message : "Không gửi được thông tin. Vui lòng thử lại.");
        }
      }}
    >
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[#15110c]">
          Họ tên
          <input name="name" required className="w-full rounded-2xl border border-black/10 bg-[#fbf8f2] px-4 py-3 outline-none focus:border-[#c9a45d]" placeholder="Anh/Chị" />
        </label>
        <label className="space-y-2 text-sm font-medium text-[#15110c]">
          Số điện thoại
          <input name="phone" required inputMode="tel" className="w-full rounded-2xl border border-black/10 bg-[#fbf8f2] px-4 py-3 outline-none focus:border-[#c9a45d]" placeholder="090..." />
        </label>
      </div>
      <label className="mt-4 block space-y-2 text-sm font-medium text-[#15110c]">
        Nhu cầu
        <select name="need" className="w-full rounded-2xl border border-black/10 bg-[#fbf8f2] px-4 py-3 outline-none focus:border-[#c9a45d]" defaultValue={defaultNeed || needOptions[0]}>
          {needOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className={`mt-5 w-full ${GOLD_CTA_BUTTON_CLASS}`}
      >
        {status === "submitting" ? "Đang gửi..." : submitLabel}
      </button>
      {message ? (
        <div className={`mt-4 rounded-2xl border p-4 text-sm leading-6 ${status === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-red-200 bg-red-50 text-red-900"}`}>
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
      <p className="mt-4 text-xs leading-6 text-[#6b6258]">
        Thông tin chỉ dùng để tư vấn dự án, gửi bảng giá hoặc gợi ý phương án phù hợp theo nhu cầu của Anh/Chị.
      </p>
    </form>
  );
}
