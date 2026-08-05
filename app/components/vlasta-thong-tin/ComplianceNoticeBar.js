import { agency } from "@/app/lib/vlasta-thong-tin/data";

export const COMPLIANCE_BAR_OFFSET_CLASS = "top-14 md:top-12";

export default function ComplianceNoticeBar() {
  return (
    <div
      role="note"
      aria-label="Thông báo vai trò tư vấn độc lập"
      className="fixed inset-x-0 top-0 z-[70] border-b border-gold/30 bg-[#1c1b19] text-warm-white shadow-[0_4px_24px_rgba(0,0,0,0.18)]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:px-10 lg:px-16">
        <p className="text-[11px] font-medium leading-snug text-warm-white sm:text-xs md:text-sm">
          <span className="font-semibold text-gold-light">{agency.name}</span>
          {" — "}
          {agency.role} ({agency.advisor}).{" "}
          <span className="text-warm-white/95">
            Trang này{" "}
            <strong className="font-semibold text-gold-light">KHÔNG phải</strong> website
            chính thức của Chủ đầu tư Văn Phú Invest / Vlasta Premier.
          </span>{" "}
          Giá &amp; chính sách chỉ mang tính tham khảo.
        </p>
        <div className="flex shrink-0 items-center gap-3 text-[11px] sm:text-xs">
          <a
            href="#dieu-khoan-mien-tru"
            className="font-semibold text-gold-light underline decoration-gold/40 underline-offset-2 transition-colors hover:text-gold"
          >
            Điều khoản
          </a>
          <a
            href="/disclaimer"
            className="font-semibold text-gold-light underline decoration-gold/40 underline-offset-2 transition-colors hover:text-gold"
          >
            Miễn trừ trách nhiệm
          </a>
        </div>
      </div>
    </div>
  );
}
