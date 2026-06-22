"use client";

import { Children, type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "@/app/lib/site";
import { submitLead } from "@/app/components/lead-submit";
import { GOLD_CTA_BUTTON_CLASS, INVENTORY_CTA_BUTTON_CLASS, PROJECT_INVENTORY_CTA_LABEL } from "@/app/components/project-inventory-cta";

type LeadFormTriggerProps = {
  children: ReactNode;
  className: string;
  source?: string;
  ctaLabel?: string;
};

function getChildText(children: ReactNode) {
  if (typeof children === "string" || typeof children === "number") {
    return String(children).trim();
  }

  const parts = Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child).trim();
      }

      return "";
    })
    .filter(Boolean);

  return parts.length === 1 ? parts[0] : "";
}

function getLeadIntent(source: string) {
  const normalizedSource = source.toLowerCase();

  if (normalizedSource.includes("mizuki")) {
    return {
      eyebrow: "Tư vấn Mizuki Park",
      title: "Nhận tư vấn căn Mizuki phù hợp ngân sách",
      description:
        "Saigon Living sẽ giúp Anh/Chị lọc căn Mizuki theo mục tiêu ở thật, đầu tư cho thuê, so sánh với Vlasta Premier hoặc theo dõi Trellia Cove.",
      bullets: [
        "Gợi ý căn theo ngân sách, diện tích và nhu cầu ở ngay.",
        "So sánh áp lực vay khi mua Mizuki với dự án mới thanh toán giãn.",
        "Cập nhật thêm Trellia Cove nếu Anh/Chị muốn phân khu mới trong Mizuki Park.",
      ],
      defaultNeed: "Tư vấn căn hộ Mizuki",
      needOptions: [
        "Tư vấn căn hộ Mizuki",
        "Nhận thông tin Trellia Cove",
        "So sánh Mizuki / The Peak / Vlasta",
        "Tư vấn căn hộ Quận 7 3-5 tỷ",
        "Nhận cập nhật Vinhomes Bình Chánh",
      ],
      submitLabel: "Gửi nhu cầu tư vấn Mizuki",
    };
  }

  if (normalizedSource.includes("eco retreat")) {
    return {
      eyebrow: "Nhận bảng giá Eco Retreat",
      title: "Nhận bảng giá và tư vấn sản phẩm Eco Retreat",
      description:
        "Saigon Living sẽ lọc nhanh dòng sản phẩm Eco Retreat theo ngân sách, mục tiêu mua ở, giữ tài sản hoặc khai thác thương mại.",
      bullets: [
        "Gửi bảng giá theo nhóm nhà phố, căn hộ, song lập, biệt thự và shophouse.",
        "Gợi ý sản phẩm phù hợp với ngân sách 1,8 tỷ đến trên 16 tỷ.",
        "Tư vấn điểm cần kiểm tra trước khi đặt chỗ hoặc chọn mã sản phẩm.",
      ],
      defaultNeed: "Anh/Chị quan tâm nhà phố",
      needOptions: [
        "Anh/Chị quan tâm nhà phố",
        "Anh/Chị quan tâm căn hộ",
        "Anh/Chị quan tâm song lập",
        "Anh/Chị quan tâm biệt thự rừng",
        "Anh/Chị quan tâm biệt thự đảo",
        "Anh/Chị quan tâm shophouse",
        "Anh/Chị muốn nhận bảng giá Eco Retreat",
      ],
      submitLabel: "Gửi yêu cầu nhận bảng giá",
    };
  }

  if (normalizedSource.includes("vinhomes") || normalizedSource.includes("bình chánh")) {
    return {
      eyebrow: "Theo dõi Vinhomes Bình Chánh",
      title: "Nhận cập nhật sớm khi có thông tin rõ hơn",
      description:
        "Saigon Living sẽ gửi lại các điểm cần kiểm tra về quy hoạch, pháp lý, giá dự kiến và khu vực nên khảo sát khi dự án có tín hiệu chính thức hơn.",
      bullets: [
        "Cập nhật khi có thông tin rõ hơn về pháp lý, ranh và sản phẩm.",
        "Gợi ý khu vực nên khảo sát quanh Bình Chánh theo ngân sách.",
        "So sánh với Mizuki, West Gate, Lovera Park hoặc khu Nam nếu cần.",
      ],
      defaultNeed: "Đăng ký nhận thông tin Vinhomes Bình Chánh",
      needOptions: [
        "Đăng ký nhận thông tin Vinhomes Bình Chánh",
        "Tư vấn căn hộ Mizuki",
        "Tư vấn căn hộ Quận 7 3-5 tỷ",
        "Nhận cập nhật Vinhomes Bình Chánh",
      ],
      submitLabel: "Gửi nhu cầu nhận cập nhật",
    };
  }

  if (
    normalizedSource.includes("so sánh") ||
    normalizedSource.includes("mizuki") ||
    normalizedSource.includes("peak") ||
    normalizedSource.includes("market")
  ) {
    return {
      eyebrow: "So sánh phương án",
      title: "Nhận bài phân tích dòng tiền & so sánh khu Nam",
      description:
        "Nếu Anh/Chị đang phân vân giữa Mizuki, The Peak Garden, Vlasta Premier hoặc chờ Vinhomes Bình Chánh, cho biết mục tiêu mua — Saigon Living sẽ gửi phân tích dòng tiền và gợi ý 2-3 phương án phù hợp.",
      bullets: [
        "So sánh mua ở, đầu tư, chờ dự án mới hoặc chọn căn có sẵn.",
        "Ước tính áp lực vốn ban đầu, vay ngân hàng và thời điểm xuống tiền.",
        "Gợi ý hướng đi phù hợp thay vì chỉ gửi một bảng giá chung.",
      ],
      defaultNeed: "So sánh Mizuki / The Peak / Vlasta",
      needOptions: [
        "So sánh Mizuki / The Peak / Vlasta",
        "Tư vấn căn hộ Mizuki",
        "Tư vấn căn hộ Quận 7 3-5 tỷ",
        "Nhận cập nhật Vinhomes Bình Chánh",
        "Tư vấn mua để ở",
        "Tư vấn đầu tư giữ tài sản",
      ],
      submitLabel: "Nhận phân tích & so sánh khu Nam",
    };
  }

  if (normalizedSource.includes("pháp lý")) {
    return {
      eyebrow: "Kiểm tra pháp lý",
      title: "Nhận checklist pháp lý trước khi đặt cọc",
      description:
        "Gửi nhu cầu để được hướng dẫn kiểm tra giấy phép, bảo lãnh, hợp đồng, tiến độ thanh toán và các điểm cần hỏi trước khi xuống tiền.",
      bullets: [
        "Tóm tắt bộ hồ sơ cần kiểm tra theo từng dự án.",
        "Gợi ý câu hỏi nên hỏi trước khi đặt cọc/ký hợp đồng.",
        "Đối chiếu rủi ro pháp lý với mục tiêu mua ở hoặc đầu tư.",
      ],
      defaultNeed: "Nhận checklist pháp lý",
      needOptions: [
        "Nhận checklist pháp lý",
        "Nhận bảng giá Vlasta Premier",
        "So sánh Mizuki / The Peak / Vlasta",
        "Tư vấn mua để ở",
        "Tư vấn đầu tư giữ tài sản",
      ],
      submitLabel: "Gửi nhu cầu kiểm tra pháp lý",
    };
  }

  return {
    eyebrow: "Tư vấn Vlasta Premier",
    title: "Nhận bảng giá và căn phù hợp ngân sách",
    description:
      "Đội tư vấn sẽ lọc thông tin theo ngân sách, loại căn, tầng, view và mục tiêu mua ở hoặc đầu tư, thay vì gửi một bảng giá chung khó đọc.",
    bullets: [
      "Cập nhật bảng giá theo giỏ hàng mới nhất.",
      "Gửi mặt bằng tầng và layout căn liên quan.",
      "Phân tích nhanh phương án thanh toán phù hợp.",
    ],
    defaultNeed: "Nhận bảng giá Vlasta Premier",
    needOptions: [
      "Nhận bảng giá Vlasta Premier",
      "So sánh Mizuki / The Peak / Vlasta",
      "Nhận cập nhật Vinhomes Bình Chánh",
      "Nhận checklist pháp lý",
      "Tư vấn mua để ở",
      "Tư vấn đầu tư giữ tài sản",
    ],
    submitLabel: "Gửi yêu cầu nhận bảng giá",
  };
}

function LeadFormModal({
  source,
  ctaLabel,
  onClose,
}: {
  source: string;
  ctaLabel?: string;
  onClose: () => void;
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const intent = getLeadIntent(source);
  const title = ctaLabel || intent.title;
  const submitLabel = ctaLabel || intent.submitLabel;
  const defaultNeed = ctaLabel || intent.defaultNeed;
  const description = ctaLabel
    ? `Gửi họ tên và số điện thoại, Saigon Living sẽ liên hệ và xử lý theo đúng yêu cầu: ${ctaLabel}.`
    : intent.description;
  const bullets = ctaLabel
    ? [
        "Chỉ cần họ tên và số điện thoại.",
        "Saigon Living liên hệ lại trong thời gian sớm nhất.",
        "Thông tin chỉ dùng để tư vấn theo nhu cầu của Anh/Chị.",
      ]
    : intent.bullets;

  return (
    <div
      className="fixed inset-0 z-[1000] overflow-y-auto bg-black/78 px-4 py-6 backdrop-blur-md"
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
                  {intent.eyebrow}
                </p>
                <h2 className="font-display mt-5 text-4xl font-medium leading-tight">
                  {title}
                </h2>
                <p className="mt-5 leading-7 text-white/70">
                  {description}
                </p>
              </div>
              <div className="mt-10 space-y-4 text-sm text-white/72">
                {bullets.map((bullet) => (
                  <p key={bullet}>• {bullet}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6a2f]">
                  {intent.eyebrow}
                </p>
                <h2 id="lead-form-title" className="font-display mt-3 text-3xl font-medium tracking-[-0.04em] text-[#15110c] md:text-4xl">
                  {title}
                </h2>
                {ctaLabel ? (
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#5d554c] md:text-base">{description}</p>
                ) : null}
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
                  Để nhận phản hồi nhanh hơn, Anh/Chị có thể liên hệ trực tiếp qua Zalo hoặc gọi ngay. Khi trao đổi, hãy gửi thêm ngân sách, khu vực quan tâm và thời điểm dự kiến mua.
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
                onSubmit={async (event) => {
                  event.preventDefault();
                  const form = event.currentTarget;
                  const formData = new FormData(form);

                  setIsSubmitting(true);
                  setErrorMessage("");

                  try {
                    await submitLead({
                      name: String(formData.get("name") || ""),
                      phone: String(formData.get("phone") || ""),
                      need: String(formData.get("need") || defaultNeed),
                      budget: "",
                      note: String(formData.get("note") || ""),
                      source,
                      page: window.location.href,
                      website: String(formData.get("website") || ""),
                    });
                    setIsSubmitted(true);
                  } catch (error) {
                    setErrorMessage(error instanceof Error ? error.message : "Không gửi được thông tin. Vui lòng thử lại.");
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-medium text-[#15110c]">
                    Họ tên
                    <input name="name" required className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#c9a45d]" placeholder="Anh/Chị" />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-[#15110c]">
                    Số điện thoại
                    <input name="phone" required inputMode="tel" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#c9a45d]" placeholder="090..." />
                  </label>
                </div>
                {ctaLabel ? (
                  <input type="hidden" name="need" value={ctaLabel} />
                ) : (
                  <label className="block space-y-2 text-sm font-medium text-[#15110c]">
                    Nhu cầu
                    <select name="need" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#c9a45d]" defaultValue={defaultNeed}>
                      {intent.needOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${ctaLabel === PROJECT_INVENTORY_CTA_LABEL ? INVENTORY_CTA_BUTTON_CLASS : GOLD_CTA_BUTTON_CLASS}`}
                >
                  {isSubmitting ? "Đang gửi..." : submitLabel}
                </button>
                {errorMessage ? (
                  <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-900">
                    <p>{errorMessage}</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a href={siteConfig.contact.zalo} className="font-semibold underline underline-offset-4">
                        Gửi qua Zalo
                      </a>
                      <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold underline underline-offset-4">
                        Gọi {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                ) : null}
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
  ctaLabel,
}: LeadFormTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const resolvedCtaLabel = ctaLabel || getChildText(children) || undefined;

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

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <LeadFormModal source={source} ctaLabel={resolvedCtaLabel} onClose={() => setIsOpen(false)} />,
            document.body,
          )
        : null}
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
    <LeadFormModal source="Nhận bảng giá & ưu đãi" ctaLabel="Nhận bảng giá & ưu đãi" onClose={() => setIsOpen(false)} />
  ) : null;
}
