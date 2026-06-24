import Image from "next/image";
import Link from "next/link";
import {
  filterListingsByProject,
  getBestPriceListings,
  type Listing,
} from "@/app/lib/listings";
import { getInventoryProjectPath, INVENTORY_PROJECTS } from "@/app/lib/listings-project";

function getProjectCardMeta(listings: Listing[], slug: string) {
  const projectListings = filterListingsByProject(listings, slug);
  const bestListing = getBestPriceListings(projectListings, 1)[0];

  return {
    count: projectListings.length,
    fromPrice: bestListing?.price,
  };
}

export function ListingsProjectNav({ listings }: { listings: Listing[] }) {
  return (
    <div className="mt-10 border-t border-neutral-200 pt-10">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">Theo dự án</p>
      <h2 className="font-display mt-2 text-2xl font-medium tracking-[-0.03em] text-neutral-900 md:text-3xl">
        Giỏ hàng theo dự án
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {INVENTORY_PROJECTS.map((project) => {
          const { count, fromPrice } = getProjectCardMeta(listings, project.slug);

          return (
            <Link
              key={project.slug}
              href={getInventoryProjectPath(project.slug)}
              className="group overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">{project.district}</p>
                  <h3 className="font-display mt-2 text-2xl font-medium tracking-[-0.03em]">{project.name}</h3>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <p className="text-sm text-neutral-600">
                  {count > 0 ? (
                    <>
                      {count} căn{fromPrice ? ` · từ ${fromPrice}` : ""}
                    </>
                  ) : (
                    "Đang cập nhật"
                  )}
                </p>
                <span className="text-sm font-semibold text-neutral-900 transition group-hover:text-[#8a6a2f]">
                  Xem →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
