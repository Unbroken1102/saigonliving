"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LeadFormTrigger } from "@/app/components/lead-form-popup";

type NavItem = {
  href?: string;
  label: string;
  highlight?: boolean;
  popupSource?: string;
};

const defaultNavItems: NavItem[] = [
  { href: "/gio-hang", label: "Giỏ hàng", highlight: true },
  { href: "/vlasta-premier", label: "Vlasta Premier" },
  { href: "/eco-retreat", label: "Eco Retreat" },
  { href: "/mizuki-park", label: "Mizuki Park" },
  { href: "/the-peak-garden", label: "The Peak Garden" },
  { href: "/vinhomes-binh-chanh", label: "Vinhomes Bình Chánh" },
  { href: "/blog", label: "Phân tích & cẩm nang" },
  { href: "/#contact", label: "Tư vấn", highlight: true },
  { href: "/tt-genesis", label: "TT Genesis" },
  { href: "/the-9-stellars", label: "The 9 Stellars" },
];

const navByPath: Record<string, NavItem[]> = {
  "/vlasta-premier": [
    { href: "/", label: "Saigon Living" },
    { href: "/vlasta-premier#overview", label: "Tổng quan" },
    { href: "/vlasta-premier#location", label: "Vị trí" },
    { href: "/vlasta-premier#masterplan", label: "Mặt bằng" },
    { href: "/vlasta-premier#amenities", label: "Tiện ích" },
    { href: "/vlasta-premier#legal", label: "Pháp lý" },
    { href: "/vlasta-premier#progress", label: "Tiến độ" },
    { href: "/vlasta-premier#pricing", label: "Bảng giá", highlight: true },
    { href: "/vlasta-premier#faq", label: "FAQ" },
  ],
  "/eco-retreat": [
    { href: "/", label: "Saigon Living" },
    { href: "/eco-retreat#overview", label: "Tổng quan" },
    { href: "/eco-retreat#location", label: "Vị trí" },
    { href: "/eco-retreat#actual-photos", label: "Ảnh thực tế" },
    { href: "/eco-retreat#amenities", label: "Tiện ích" },
    { href: "/eco-retreat#masterplan", label: "Mặt bằng" },
    { href: "/eco-retreat#pricing", label: "Giá bán", highlight: true },
    { href: "/eco-retreat#investment", label: "Có nên mua" },
    { href: "/eco-retreat#faq", label: "FAQ" },
    { href: "/eco-retreat#contact", label: "Nhận bảng giá", highlight: true },
  ],
  "/mizuki-park": [
    { href: "/", label: "Saigon Living" },
    { href: "/mizuki-park#tong-quan", label: "Tổng quan" },
    { href: "/mizuki-park#mat-bang-trellia", label: "Mặt bằng" },
    { href: "/mizuki-park#gia-trellia-cove", label: "Giá Trellia", highlight: true },
    { href: "/mizuki-park#vi-tri", label: "Vị trí" },
    { href: "/mizuki-park#lich-thanh-toan", label: "Thanh toán" },
    { href: "/mizuki-park#tien-ich", label: "Tiện ích" },
    { href: "/mizuki-park#uu-dai-trellia", label: "Ưu đãi" },
    { href: "/mizuki-park#faq", label: "FAQ" },
  ],
  "/the-peak-garden": [
    { href: "/", label: "Saigon Living" },
    { href: "/the-peak-garden#overview", label: "Tổng quan" },
    { href: "/the-peak-garden#location", label: "Vị trí" },
    { href: "/the-peak-garden#amenities", label: "Wellness" },
    { href: "/the-peak-garden#floorplans", label: "Mặt bằng" },
    { href: "/the-peak-garden#comparison", label: "So sánh", highlight: true },
    { href: "/the-peak-garden#buyer-checklist", label: "Checklist" },
    { href: "/the-peak-garden#faq", label: "FAQ" },
  ],
  "/tt-genesis": [
    { href: "/", label: "Saigon Living" },
    { href: "/tt-genesis#overview", label: "Tổng quan" },
    { href: "/tt-genesis#actual-photos", label: "Ảnh thực tế" },
    { href: "/tt-genesis#location", label: "Vị trí" },
    { href: "/tt-genesis#pricing", label: "Giá bán", highlight: true },
    { href: "/tt-genesis#amenities", label: "Tiện ích" },
    { href: "/tt-genesis#checklist", label: "Checklist" },
    { href: "/tt-genesis#related", label: "Đọc tiếp" },
    { href: "/tt-genesis#contact", label: "Nhận thông tin", highlight: true },
    { href: "/tt-genesis#faq", label: "FAQ" },
  ],
  "/the-9-stellars": [
    { href: "/", label: "Saigon Living" },
    { href: "/the-9-stellars#tong-quan", label: "Tổng quan" },
    { href: "/the-9-stellars#vi-tri", label: "Vị trí" },
    { href: "/the-9-stellars#san-pham", label: "Sản phẩm" },
    { href: "/the-9-stellars#tien-ich", label: "Tiện ích" },
    { href: "/the-9-stellars#chuyen-nhuong", label: "Chuyển nhượng", highlight: true },
    { href: "/the-9-stellars#faq", label: "FAQ" },
  ],
  "/vinhomes-binh-chanh": [
    { href: "/", label: "Saigon Living" },
    { href: "/vinhomes-binh-chanh#quy-hoach", label: "Quy hoạch" },
    { href: "/vinhomes-binh-chanh#ha-tang", label: "Hạ tầng" },
    { href: "/vinhomes-binh-chanh#cap-nhat", label: "Cập nhật", highlight: true },
    { href: "/vinhomes-binh-chanh#doc-tiep", label: "Đọc tiếp" },
    { href: "/vinhomes-binh-chanh#faq", label: "FAQ" },
    { label: "Nhận tin sớm", highlight: true, popupSource: "Vinhomes Bình Chánh Header Early Lead" },
  ],
};

function getNavItems(pathname: string) {
  return navByPath[pathname] || defaultNavItems;
}

export function SiteHeaderNav() {
  const pathname = usePathname();
  const navItems = getNavItems(pathname);

  return (
    <nav
      className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 pb-2.5 text-xs font-semibold text-[#faf6f0]/86 lg:px-8"
      aria-label="Project sections"
    >
      {navItems.map((item) => {
        const className = `shrink-0 rounded-full border px-3.5 py-2 shadow-sm shadow-black/10 transition hover:border-[#d4b87a]/70 hover:bg-[#d4b87a]/12 hover:text-white ${
            item.highlight
              ? "border-[#d4b87a]/55 bg-[#d4b87a]/16 text-[#f0ddb0]"
              : "border-white/12 bg-white/[0.06]"
          }`;

        if (item.popupSource) {
          return (
            <LeadFormTrigger key={item.popupSource} source={item.popupSource} ctaLabel={item.label} className={className}>
              {item.label}
            </LeadFormTrigger>
          );
        }

        return (
          <Link key={item.href} href={item.href || "/"} className={className}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
