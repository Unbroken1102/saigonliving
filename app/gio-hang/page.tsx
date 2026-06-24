import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { ListingCard } from "@/app/components/listing-card";
import { ListingsHubTabs } from "@/app/components/listings-hub-tabs";
import { ListingsProjectNav } from "@/app/components/listings-project-nav";
import { ContactSection } from "@/app/components/site-sections";
import {
  filterListingsByType,
  formatInventoryUpdatedLabel,
  getLatestListingUpdatedAt,
  getListingCountsByType,
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

export const revalidate = 60;

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
  const counts = getListingCountsByType(allListings);
  const inventoryUpdatedLabel = formatInventoryUpdatedLabel(getLatestListingUpdatedAt(allListings));

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
            Giỏ hàng · Saigon Living
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-4xl font-medium tracking-[-0.05em] text-balance md:text-6xl">
            Giỏ hàng căn hộ Nam Sài Gòn
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">{inventoryUpdatedLabel}</p>

          <div className="mt-10">
            <ListingsHubTabs activeType={activeType} counts={counts} />
            <ListingsProjectNav listings={allListings} />
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
                Chưa có căn
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-600">
                Xem nhóm khác hoặc liên hệ để nhận gợi ý.
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

          <div className="mt-10 rounded-[1.75rem] border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-950">
            Giá tham khảo. Liên hệ trước khi giữ chỗ.
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
