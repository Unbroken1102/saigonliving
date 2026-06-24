import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/app/components/json-ld";
import { ListingCard } from "@/app/components/listing-card";
import { ListingsHubTabs } from "@/app/components/listings-hub-tabs";
import { ContactSection } from "@/app/components/site-sections";
import {
  filterListingsByProject,
  filterListingsByType,
  formatInventoryUpdatedLabel,
  getBestPriceListings,
  getLatestListingUpdatedAt,
  getListingCountsByType,
  getPublishedListings,
  listingTypeLabels,
  type ListingType,
} from "@/app/lib/listings";
import { getInventoryProjectBySlug, getInventoryProjectPath, INVENTORY_PROJECTS } from "@/app/lib/listings-project";
import { absoluteUrl, siteConfig } from "@/app/lib/site";

type ProjectGioHangPageProps = {
  params: Promise<{ project: string }>;
  searchParams: Promise<{ loai?: string }>;
};

const validTypes = new Set<ListingType>(["dang-ban", "chuyen-nhuong", "cho-thue"]);
const BEST_PRICE_LIMIT = 5;

function getActiveType(value?: string): ListingType | undefined {
  if (!value || !validTypes.has(value as ListingType)) {
    return undefined;
  }

  return value as ListingType;
}

export const revalidate = 60;

export function generateStaticParams() {
  return INVENTORY_PROJECTS.map((project) => ({ project: project.slug }));
}

export async function generateMetadata({ params, searchParams }: ProjectGioHangPageProps): Promise<Metadata> {
  const { project: projectSlug } = await params;
  const { loai } = await searchParams;
  const project = getInventoryProjectBySlug(projectSlug);

  if (!project) {
    return {
      title: "Giỏ hàng dự án",
      robots: { index: false, follow: false },
    };
  }

  const activeType = getActiveType(loai);
  const title = activeType
    ? `Giỏ hàng ${listingTypeLabels[activeType]} ${project.name}`
    : `Giỏ hàng ${project.name}`;
  const description = activeType
    ? `Căn ${listingTypeLabels[activeType].toLowerCase()} tại ${project.name}. Liên hệ xác nhận giá và căn còn.`
    : `Giỏ hàng ${project.name} — cập nhật hằng tuần. Liên hệ để nhận thông tin căn.`;

  const canonicalPath = activeType
    ? `${getInventoryProjectPath(project.slug)}?loai=${activeType}`
    : getInventoryProjectPath(project.slug);

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(canonicalPath),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonicalPath),
      images: [
        {
          url: absoluteUrl(project.image),
          width: 1200,
          height: 630,
          alt: `Giỏ hàng ${project.name}`,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProjectGioHangPage({ params, searchParams }: ProjectGioHangPageProps) {
  const { project: projectSlug } = await params;
  const { loai } = await searchParams;
  const project = getInventoryProjectBySlug(projectSlug);

  if (!project) {
    notFound();
  }

  const activeType = getActiveType(loai);
  const allListings = await getPublishedListings();
  const projectListings = filterListingsByProject(allListings, project.slug);
  const filteredListings = filterListingsByType(projectListings, activeType);
  const listings = getBestPriceListings(filteredListings, BEST_PRICE_LIMIT);
  const counts = getListingCountsByType(projectListings);
  const inventoryPath = getInventoryProjectPath(project.slug);
  const inventoryUpdatedLabel = formatInventoryUpdatedLabel(getLatestListingUpdatedAt(projectListings));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: activeType ? `Giỏ hàng ${listingTypeLabels[activeType]} ${project.name}` : `Giỏ hàng ${project.name}`,
      description: `Các căn Saigon Living đang tư vấn tại ${project.name}.`,
      url: absoluteUrl(activeType ? `${inventoryPath}?loai=${activeType}` : inventoryPath),
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
        url: absoluteUrl(`${inventoryPath}#${listing.id}`),
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
        {
          "@type": "ListItem",
          position: 3,
          name: project.name,
          item: absoluteUrl(inventoryPath),
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
            <Link href="/gio-hang" className="hover:text-neutral-900">
              Giỏ hàng
            </Link>
            <span>/</span>
            <span className="text-neutral-700">{project.name}</span>
          </nav>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
            {project.district} · Giỏ hàng Saigon Living
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-4xl font-medium tracking-[-0.05em] text-balance md:text-6xl">
            Giỏ hàng {project.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">{inventoryUpdatedLabel}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={project.landingPath}
              className="inline-flex items-center rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900"
            >
              Xem phân tích dự án
            </Link>
            <Link
              href="/gio-hang"
              className="inline-flex items-center rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900"
            >
              ← Tất cả
            </Link>
          </div>

          <div className="mt-10">
            <ListingsHubTabs activeType={activeType} counts={counts} basePath={inventoryPath} />
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
                Liên hệ để nhận gợi ý hoặc xem nhóm khác.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href={inventoryPath}
                  className="rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400"
                >
                  Xem tất cả
                </Link>
                <Link
                  href="/gio-hang"
                  className="rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400"
                >
                  Tất cả dự án
                </Link>
                <Link
                  href={project.landingPath}
                  className="rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400"
                >
                  Phân tích {project.name}
                </Link>
              </div>
            </div>
          )}

          <div className="mt-10 rounded-[1.75rem] border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-950">
            Giá tham khảo. Liên hệ trước khi giữ chỗ.
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
