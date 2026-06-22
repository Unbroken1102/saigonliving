import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { ListingCard } from "@/app/components/listing-card";
import { ListingsHubTabs } from "@/app/components/listings-hub-tabs";
import { ContactSection } from "@/app/components/site-sections";
import {
  filterListingsByType,
  getPublishedListings,
  listingTypeLabels,
  type ListingType,
} from "@/app/lib/listings";
import { absoluteUrl, siteConfig } from "@/app/lib/site";

type GioHangPageProps = {
  searchParams: Promise<{ loai?: string }>;
};

const validTypes = new Set<ListingType>(["dang-ban", "chuyen-nhuong", "cho-thue"]);

function getActiveType(value?: string): ListingType | undefined {
  if (!value || !validTypes.has(value as ListingType)) {
    return undefined;
  }

  return value as ListingType;
}

export async function generateMetadata({ searchParams }: GioHangPageProps): Promise<Metadata> {
  const { loai } = await searchParams;
  const activeType = getActiveType(loai);
  const title = activeType
    ? `Giỏ hàng ${listingTypeLabels[activeType]} Nam Sài Gòn`
    : "Giỏ hàng căn hộ Nam Sài Gòn đang bán, chuyển nhượng, cho thuê";
  const description = activeType
    ? `Cập nhật căn ${listingTypeLabels[activeType].toLowerCase()} tại Mizuki Park, Vlasta Premier, The Peak Garden, TT Genesis và khu Nam Sài Gòn. Liên hệ Saigon Living để nhận thông tin căn cụ thể.`
    : "Giỏ hàng Saigon Living: căn đang bán, chuyển nhượng và cho thuê tại Nam Sài Gòn. Giá tham khảo, cập nhật theo tuần — liên hệ để xác nhận căn còn và chính sách.";

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(activeType ? `/gio-hang?loai=${activeType}` : "/gio-hang"),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(activeType ? `/gio-hang?loai=${activeType}` : "/gio-hang"),
      images: [
        {
          url: absoluteUrl(siteConfig.shareImage),
          width: 1024,
          height: 576,
          alt: "Giỏ hàng căn hộ Nam Sài Gòn Saigon Living",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function GioHangPage({ searchParams }: GioHangPageProps) {
  const { loai } = await searchParams;
  const activeType = getActiveType(loai);
  const allListings = await getPublishedListings();
  const listings = filterListingsByType(allListings, activeType);

  const counts = {
    all: allListings.length,
    "dang-ban": allListings.filter((item) => item.type === "dang-ban").length,
    "chuyen-nhuong": allListings.filter((item) => item.type === "chuyen-nhuong").length,
    "cho-thue": allListings.filter((item) => item.type === "cho-thue").length,
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: activeType ? `Giỏ hàng ${listingTypeLabels[activeType]}` : "Giỏ hàng Saigon Living",
      description:
        "Danh sách căn hộ đang bán, chuyển nhượng và cho thuê tại Nam Sài Gòn do Saigon Living tư vấn.",
      url: absoluteUrl(activeType ? `/gio-hang?loai=${activeType}` : "/gio-hang"),
      inLanguage: "vi-VN",
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: listings.map((listing, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${listing.project} ${listing.unitType} ${listing.price}`,
        url: absoluteUrl(activeType ? `/gio-hang?loai=${activeType}#${listing.id}` : `/gio-hang#${listing.id}`),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Giỏ hàng",
          item: absoluteUrl("/gio-hang"),
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="bg-white px-5 pb-10 pt-36 text-neutral-900 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-neutral-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-neutral-900">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-neutral-700">Giỏ hàng</span>
          </nav>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
            Saigon Living inventory
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-4xl font-medium tracking-[-0.05em] text-balance md:text-6xl">
            Giỏ hàng căn hộ Nam Sài Gòn
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Cập nhật căn đang mở bán, chuyển nhượng và cho thuê tại các dự án trọng tâm. Giá mang tính tham khảo —
            liên hệ để xác nhận căn còn, pháp lý và chính sách thanh toán.
          </p>

          <div className="mt-10">
            <ListingsHubTabs activeType={activeType} counts={counts} />
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {listings.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {listings.map((listing) => (
                <div key={listing.id} id={listing.id}>
                  <ListingCard listing={listing} />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 text-center">
              <h2 className="font-display text-3xl font-medium tracking-[-0.04em] text-neutral-900">
                Chưa có căn trong nhóm này
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
                Anh/Chị có thể xem các nhóm khác hoặc liên hệ để Saigon Living gửi giỏ hàng phù hợp ngân sách.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/gio-hang"
                  className="rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400"
                >
                  Xem tất cả
                </Link>
                <Link
                  href="/blog"
                  className="rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400"
                >
                  Đọc phân tích dự án
                </Link>
              </div>
            </div>
          )}

          <div className="mt-10 rounded-[1.75rem] border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-950">
            Thông tin trong giỏ hàng là tư vấn tham khảo, không thay thế bảng giá chính thức từ chủ đầu tư hoặc hợp
            đồng chuyển nhượng. Vui lòng liên hệ để xác nhận tình trạng căn trước khi giữ chỗ.
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { href: "/blog/cam-1-ty-tien-mat-mua-can-ho-cao-cap-sai-gon-khong", title: "Cầm 1 tỷ có mua được căn hộ?" },
              { href: "/blog/gia-tt-genesis-2026", title: "Giá TT Genesis 2026" },
              { href: "/blog/gia-vlasta-premier-2026", title: "Giá Vlasta Premier 2026" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-neutral-200 bg-white p-5 text-sm font-semibold text-neutral-800 transition hover:border-neutral-400"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
