"use client";

import { LeadCaptureForm } from "@/app/components/lead-capture-form";
import { siteConfig } from "@/app/lib/site";

const formFieldStyles =
  "[&_label]:text-neutral-900 [&_input]:border-neutral-300 [&_input]:bg-white [&_input]:text-neutral-900 [&_input]:placeholder:text-neutral-400 [&_select]:border-neutral-300 [&_select]:bg-white [&_select]:text-neutral-900 [&_p]:text-neutral-600";

const formShellClassName =
  "rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-sm";

export function VlastaArticleLeadForms({ className = "" }: { className?: string }) {
  return (
    <section className={`grid gap-8 lg:grid-cols-2 ${className}`.trim()} aria-label="Đăng ký tư vấn Vlasta Premier">
      <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7 shadow-sm md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Chính sách bán hàng
        </p>
        <h2 className="font-display mt-4 text-3xl font-medium tracking-[-0.04em] text-neutral-900 md:text-4xl">
          Đăng ký nhận ưu đãi
        </h2>
        <p className="mt-4 leading-7 text-neutral-600">
          Nhận bảng giá mới nhất theo giỏ hàng, chiết khấu booking sớm, lãi 0% và chính sách thanh toán đang áp dụng — giống form trên trang Vlasta Premier.
        </p>
        <div className={`mt-6 ${formFieldStyles}`}>
          <LeadCaptureForm
            source="Vlasta Article - Nhận ưu đãi"
            needOptions={[
              "Nhận bảng giá & ưu đãi",
              "Nhận chính sách thanh toán",
              "Nhận chiết khấu booking sớm",
              "Nhận thông tin iPhone 17 Pro Max",
              "Nhận checklist pháp lý",
            ]}
            defaultNeed="Nhận bảng giá & ưu đãi"
            submitLabel="Đăng ký nhận ưu đãi"
            className={formShellClassName}
          />
        </div>
      </div>

      <div className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Chọn căn theo nhu cầu
        </p>
        <h2 className="font-display mt-4 text-3xl font-medium tracking-[-0.04em] text-neutral-900 md:text-4xl">
          Nhận gợi ý căn phù hợp ngân sách
        </h2>
        <p className="mt-4 leading-7 text-neutral-600">
          Gửi ngân sách, loại căn, tầng, view và mục tiêu mua ở hoặc đầu tư. Saigon Living sẽ lọc căn Vlasta Premier phù hợp thay vì gửi một bảng giá chung.
        </p>
        <div className={`mt-6 ${formFieldStyles}`}>
          <LeadCaptureForm
            source="Vlasta Article - Chọn căn theo nhu cầu"
            needOptions={[
              "Chọn căn 1PN",
              "Chọn căn 1PN+",
              "Chọn căn 2PN",
              "Chọn căn 3PN",
              "Lọc căn theo tầng/view",
              "Tư vấn mua để ở",
              "Tư vấn đầu tư giữ tài sản",
            ]}
            defaultNeed="Lọc căn theo tầng/view"
            submitLabel="Nhận gợi ý căn phù hợp"
            className={formShellClassName}
          />
        </div>
        <p className="mt-5 text-sm leading-6 text-neutral-600">
          Hoặc trao đổi nhanh qua{" "}
          <a href={siteConfig.contact.zalo} className="font-semibold text-neutral-900 underline underline-offset-4">
            Zalo
          </a>{" "}
          /{" "}
          <a href={`tel:${siteConfig.contact.phoneTel}`} className="font-semibold text-neutral-900 underline underline-offset-4">
            {siteConfig.contact.phone}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
