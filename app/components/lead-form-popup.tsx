"use client";

import { type ReactNode, useEffect, useState } from "react";
import { siteConfig } from "@/app/lib/site";

type LeadFormTriggerProps = {
  children: ReactNode;
  className: string;
  source?: string;
};

function LeadFormModal({
  source,
  onClose,
}: {
  source: string;
  onClose: () => void;
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div
      className="fixed inset-0 z-[110] overflow-y-auto bg-black/78 px-4 py-6 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-form-title"
    >
      <button
        type="button"
        className="fixed inset-0 cursor-default"
        aria-label="Đóng form nhận bảng giá"
        onClick={onClose}
      />
      <div className="relative mx-auto flex min-h-full max-w-5xl items-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/15 bg-[#fbf8f2] shadow-2xl shadow-black/40 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative hidden bg-[#1c1b19] p-8 text-white lg:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,184,122,0.32),transparent_20rem),linear-gradient(145deg,#1c1b19,#3b2b18)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f0ddb0]">
                  Cập nhật T06/2026
                </p>
                <h2 className="font-display mt-5 text-4xl font-medium leading-tight">
                  Nhận bảng giá, mặt bằng và ưu đãi mới nhất.
                </h2>
                <p className="mt-5 leading-7 text-white/70">
                  Đội tư vấn sẽ lọc thông tin theo ngân sách, loại căn, tầng, view và mục tiêu mua ở hoặc đầu tư.
                </p>
              </div>
              <div className="mt-10 space-y-4 text-sm text-white/72">
                <p>• Cập nhật bảng giá theo giỏ hàng mới nhất.</p>
                <p>• Gửi mặt bằng tầng và layout căn liên quan.</p>
                <p>• Phân tích nhanh phương án thanh toán phù hợp.</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6a2f]">
                  {source}
                </p>
                <h2 id="lead-form-title" className="font-display mt-3 text-3xl font-medium tracking-[-0.04em] text-[#15110c] md:text-4xl">
                  Nhận bảng giá Vlasta Premier
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#15110c] transition hover:bg-[#f1e6d2]"
              >
                Đóng
              </button>
            </div>

            {isSubmitted ? (
              <div className="mt-8 rounded-[1.5rem] border border-[#d4b87a]/35 bg-white p-6">
                <h3 className="font-display text-2xl font-medium text-[#15110c]">
                  Đã ghi nhận nhu cầu tư vấn.
                </h3>
                <p className="mt-3 leading-7 text-[#5d554c]">
                  Để nhận phản hồi nhanh hơn, Anh/Chị có thể liên hệ trực tiếp qua Zalo hoặc gọi ngay.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={siteConfig.contact.zalo} className="rounded-full bg-[#15110c] px-6 py-3 text-center text-sm font-semibold text-white">
                    Mở Zalo
                  </a>
                  <a href={`tel:${siteConfig.contact.phone}`} className="rounded-full border border-black/15 px-6 py-3 text-center text-sm font-semibold text-[#15110c]">
                    Gọi {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            ) : (
              <form
                className="mt-7 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setIsSubmitted(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-medium text-[#15110c]">
                    Họ tên
                    <input required className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#c9a45d]" placeholder="Anh/Chị" />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-[#15110c]">
                    Số điện thoại
                    <input required inputMode="tel" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#c9a45d]" placeholder="090..." />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-medium text-[#15110c]">
                    Nhu cầu
                    <select className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#c9a45d]" defaultValue="Nhận bảng giá">
                      <option>Nhận bảng giá</option>
                      <option>Nhận mặt bằng/layout</option>
                      <option>Tư vấn mua để ở</option>
                      <option>Tư vấn đầu tư</option>
                    </select>
                  </label>
                  <label className="space-y-2 text-sm font-medium text-[#15110c]">
                    Ngân sách dự kiến
                    <select className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#c9a45d]" defaultValue="Chưa xác định">
                      <option>Chưa xác định</option>
                      <option>3-5 tỷ</option>
                      <option>5-7 tỷ</option>
                      <option>7-10 tỷ</option>
                      <option>Trên 10 tỷ</option>
                    </select>
                  </label>
                </div>
                <label className="block space-y-2 text-sm font-medium text-[#15110c]">
                  Ghi chú
                  <textarea className="min-h-28 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#c9a45d]" placeholder="Loại căn, tầng/view mong muốn, thời gian mua..." />
                </label>
                <button type="submit" className="btn-luxury w-full rounded-full bg-[#15110c] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c9a45d] hover:text-black">
                  Gửi yêu cầu nhận bảng giá
                </button>
                <p className="text-xs leading-6 text-[#6b6258]">
                  Khi gửi thông tin, Anh/Chị đồng ý để Saigon Living liên hệ tư vấn theo nhu cầu. Dữ liệu được xử lý theo{" "}
                  <a href="/privacy-policy" className="font-semibold text-[#8a6a2f] underline-offset-4 hover:underline">
                    Chính sách bảo mật
                  </a>
                  . Thông tin dự án chỉ mang tính tham khảo và cần đối chiếu tại thời điểm giao dịch.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LeadFormTrigger({
  children,
  className,
  source = "Website CTA",
}: LeadFormTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button type="button" className={className} onClick={() => setIsOpen(true)}>
        {children}
      </button>

      {isOpen ? (
        <LeadFormModal source={source} onClose={() => setIsOpen(false)} />
      ) : null}
    </>
  );
}

export function LeadFormAutoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storageKey = "vlasta-lead-popup-seen";
    if (window.sessionStorage.getItem(storageKey)) {
      return;
    }

    let hasOpened = false;
    const openPopup = () => {
      if (hasOpened) {
        return;
      }

      hasOpened = true;
      window.sessionStorage.setItem(storageKey, "true");
      window.removeEventListener("scroll", onScroll);
      setIsOpen(true);
    };

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable > 0.45) {
        window.clearTimeout(timeout);
        openPopup();
      }
    };
    const timeout = window.setTimeout(openPopup, 9000);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return isOpen ? (
    <LeadFormModal source="Nhận bảng giá & ưu đãi" onClose={() => setIsOpen(false)} />
  ) : null;
}
