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

type ListingsHubViewProps = {
  activeType?: ListingType;
  basePath?: string;
  pageTitle: string;
  pageEyebrow?: string;
  pageDescription?: string;
  breadcrumbLabel?: string;
  relatedLinks?: Array<{ href: string; title: string }>;
};

export async function ListingsHubView({
  activeType,
  basePath = "/gio-hang",
  pageTitle,
  pageEyebrow = "Giỏ hàng · Saigon Living",
  pageDescription,
  breadcrumbLabel = "Giỏ hàng",
  relatedLinks = [
    { href: "/blog/cam-1-ty-tien-mat-mua-can-ho-cao-cap-sai-gon-khong", title: "Cầm 1 tỷ có mua được căn hộ?" },
    { href: "/blog/gia-tt-genesis-2026", title: "Giá TT Genesis 2026" },
    { href: "/blog/gia-mizuki-park-2026", title: "Giá Mizuki Park 2026" },
  ],
}: ListingsHubViewProps) {
  const allListings = await getPublishedListings();
  const listings = filterListingsByType(allListings, activeType);
  const counts = getListingCountsByType(allListings);
  const inventoryUpdatedLabel =
    pageDescription ?? formatInventoryUpdatedLabel(getLatestListingUpdatedAt(allListings));

  const pageUrl = activeType === "chuyen-nhuong" ? "/gio-hang/chuyen-nhuong" : basePath;
  const canonicalPath =
    activeType && activeType !== "chuyen-nhuong"
      ? `${basePath}?loai=${activeType}`
      : activeType === "chuyen-nhuong"
        ? "/gio-hang/chuyen-nhuong"
        : basePath;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: activeType ? `Giỏ hàng ${listingTypeLabels[activeType]}` : "Giỏ hàng Saigon Living",
      description:
        "Danh sách căn hộ đang bán, chuyển nhượng và cho thuê tại Nam Sài Gòn do Saigon Living tư vấn.",
      url: absoluteUrl(canonicalPath),
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
        url: absoluteUrl(`${canonicalPath}#${listing.id}`),
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
          name: breadcrumbLabel,
          item: absoluteUrl(pageUrl),
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
            {breadcrumbLabel !== "Giỏ hàng" ? (
              <>
                <Link href="/gio-hang" className="hover:text-neutral-900">
                  Giỏ hàng
                </Link>
                <span>/</span>
                <span className="text-neutral-700">{breadcrumbLabel}</span>
              </>
            ) : (
              <span className="text-neutral-700">{breadcrumbLabel}</span>
            )}
          </nav>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">{pageEyebrow}</p>
          <h1 className="font-display mt-5 max-w-4xl text-4xl font-medium tracking-[-0.05em] text-balance md:text-6xl">
            {pageTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">{inventoryUpdatedLabel}</p>

          <div className="mt-10">
            <ListingsHubTabs activeType={activeType} counts={counts} basePath={basePath} />
            <ListingsProjectNav listings={allListings} activeType={activeType} />
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
              <h2 className="font-display text-3xl font-medium tracking-[-0.04em] text-neutral-900">Chưa có căn</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-600">
                Xem nhóm khác hoặc liên hệ để nhận gợi ý căn phù hợp.
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
            Giá tham khảo. Liên hệ trước khi giữ chỗ. Saigon Living là đơn vị tư vấn độc lập — không phải website chủ đầu tư.
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedLinks.map((item) => (
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
