"use client";

import { useState } from "react";
import { submitLead } from "@/app/components/lead-submit";
import { siteConfig } from "@/app/lib/site";

const segmentOptions = [
  {
    value: "Ngân sách nhỏ (Dưới 5 tỷ)",
    label: "Tôi muốn tìm căn Ngân sách nhỏ",
    hint: "Dưới 5 tỷ",
  },
  {
    value: "Thấp tầng / Biệt thự (Trên 5 tỷ)",
    label: "Tôi muốn tìm căn Thấp tầng / Biệt thự",
    hint: "Trên 5 tỷ",
  },
] as const;

export function EcoRetreatLeadForm({
  source = "Eco Retreat Bottom Contact Form",
  className = "rounded-[2rem] border border-[#d9c79f]/60 bg-white p-6 shadow-[0_18px_60px_rgba(21,17,12,0.08)] md:p-8",
}: {
  source?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  return (
    <form
      className={className}
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const segments = formData.getAll("segment").map(String);

        if (!segments.length) {
          setStatus("error");
          setMessage("Vui lòng chọn ít nhất một phân khúc ngân sách.");
          return;
        }

        setStatus("submitting");
        setMessage("");

        try {
          await submitLead({
            name: String(formData.get("name") || ""),
            phone: String(formData.get("phone") || ""),
            need: `Giỏ hàng độc quyền - ${segments.join("; ")}`,
            budget: segments.join("; "),
            note: `Yêu cầu layout và bảng tính dòng tiền 5 căn Eco Retreat Bến Lức. Phân khúc: ${segments.join(", ")}.`,
            source,
            page: window.location.href,
            website: String(formData.get("website") || ""),
          });
          form.reset();
          setStatus("success");
          setMessage("Đã đăng ký. Saigon Living sẽ gửi giỏ hàng 5 căn và bảng tính dòng tiền sớm.");
        } catch (error) {
          setStatus("error");
          setMessage(error instanceof Error ? error.message : "Không gửi được thông tin. Vui lòng thử lại.");
        }
      }}
    >
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7f3f]">Giỏ hàng độc quyền</p>
      <h3 className="font-display mt-3 text-3xl font-medium tracking-[-0.04em] text-[#10251c] md:text-4xl">
        Đăng ký nhận Giỏ hàng độc quyền
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#5d554c] md:text-base">
        Nhận ngay layout và bảng tính dòng tiền của 5 căn giá tốt nhất Eco Retreat Bến Lức.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[#10251c]">
          Họ tên
          <input
            name="name"
            required
            className="w-full rounded-2xl border border-[#d9c79f]/45 bg-[#fbf8f2] px-4 py-3 text-[#10251c] outline-none placeholder:text-[#8a7f72] focus:border-[#6f7f3f]"
            placeholder="Anh/Chị"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[#10251c]">
          Số điện thoại
          <input
            name="phone"
            required
            inputMode="tel"
            className="w-full rounded-2xl border border-[#d9c79f]/45 bg-[#fbf8f2] px-4 py-3 text-[#10251c] outline-none placeholder:text-[#8a7f72] focus:border-[#6f7f3f]"
            placeholder="090..."
          />
        </label>
      </div>

      <fieldset className="mt-6 space-y-3">
        <legend className="text-sm font-semibold text-[#10251c]">Phân khúc Anh/Chị quan tâm</legend>
        {segmentOptions.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#d9c79f]/45 bg-[#fbf8f2] p-4 transition hover:border-[#6f7f3f]/55 hover:bg-[#eef5df]"
          >
            <input
              type="checkbox"
              name="segment"
              value={option.value}
              className="mt-1 size-4 shrink-0 accent-[#6f7f3f]"
            />
            <span className="text-sm leading-6 text-[#2d2a25]">
              <span className="font-semibold text-[#10251c]">{option.label}</span>
              <span className="mt-1 block text-[#5d554c]">({option.hint})</span>
            </span>
          </label>
        ))}
      </fieldset>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-[#10251c] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#6f7f3f] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Đang gửi..." : "Đăng ký nhận Giỏ hàng độc quyền"}
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
    </form>
  );
}
