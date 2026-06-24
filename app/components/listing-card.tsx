import Link from "next/link";
import { ListingCardGallery } from "@/app/components/listing-card-gallery";
import { LeadFormTrigger } from "@/app/components/lead-form-popup";
import { GOLD_CTA_BUTTON_COMPACT_CLASS } from "@/app/components/project-inventory-cta";
import { getProjectSlug, type Listing, listingTypeLabels } from "@/app/lib/listings";
import { siteConfig } from "@/app/lib/site";

export function ListingCard({ listing }: { listing: Listing }) {
  const projectHref = getProjectSlug(listing);
  const imageAlt = `${listing.project} ${listing.unitType} ${listing.price}`;
  const description = listing.description.replace(/\n{2,}/g, "\n").trim();

  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-md">
      <div className="relative">
        <ListingCardGallery images={listing.images} alt={imageAlt} />
        <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/92 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-800">
            {listingTypeLabels[listing.type]}
          </span>
          {listing.featured ? (
            <span className="rounded-full bg-[#d4b87a] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#15110c]">
              Nổi bật
            </span>
          ) : null}
        </div>
      </div>

      <div className="space-y-4 p-5 md:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
            {listing.district}
          </p>
          <h3 className="font-display mt-2 text-2xl font-medium tracking-[-0.03em] text-neutral-900">
            {listing.project} · {listing.unitType}
          </h3>
          {listing.area ? <p className="mt-1 text-sm text-neutral-500">{listing.area}</p> : null}
        </div>

        <div>
          <p className="text-2xl font-semibold tracking-[-0.03em] text-neutral-900">{listing.price}</p>
          {listing.priceNote ? <p className="mt-1 text-sm text-neutral-500">{listing.priceNote}</p> : null}
        </div>

        <p className="whitespace-pre-line text-sm leading-snug text-neutral-600">{description}</p>

        <p className="text-xs text-neutral-400">Cập nhật {listing.updatedAt}</p>

        <div className="flex flex-wrap gap-3 pt-1">
          <LeadFormTrigger
            source={`Giỏ hàng ${listing.project} ${listing.id}`}
            ctaLabel="Nhận thông tin căn này"
            className={GOLD_CTA_BUTTON_COMPACT_CLASS}
          >
            Nhận thông tin căn này
          </LeadFormTrigger>
          {projectHref ? (
            <Link
              href={projectHref}
              className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900"
            >
              Xem dự án
            </Link>
          ) : null}
          <a
            href={siteConfig.contact.zalo}
            className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900"
          >
            Zalo
          </a>
        </div>
      </div>
    </article>
  );
}
