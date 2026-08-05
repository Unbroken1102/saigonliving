import Link from "next/link";
import { listingTypeDescriptions, listingTypeLabels, type ListingType } from "@/app/lib/listings";

export function ListingsHubTabs({
  activeType,
  counts,
  basePath = "/gio-hang",
}: {
  activeType?: ListingType;
  counts: Record<ListingType | "all", number>;
  basePath?: string;
}) {
  const isCnHub = basePath === "/gio-hang/chuyen-nhuong";

  const tabs: Array<{ id: ListingType | "all"; label: string; href: string }> = [
    { id: "all", label: "Tất cả", href: isCnHub ? "/gio-hang" : basePath },
    { id: "dang-ban", label: listingTypeLabels["dang-ban"], href: "/gio-hang?loai=dang-ban" },
    { id: "chuyen-nhuong", label: listingTypeLabels["chuyen-nhuong"], href: "/gio-hang/chuyen-nhuong" },
    { id: "cho-thue", label: listingTypeLabels["cho-thue"], href: "/gio-hang?loai=cho-thue" },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = tab.id === "all" ? !activeType : activeType === tab.id;

          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "border-[#d4b87a] bg-[#d4b87a]/15 text-[#15110c]"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-900"
              }`}
            >
              {tab.label} ({counts[tab.id]})
            </Link>
          );
        })}
      </div>

      {activeType ? (
        <p className="max-w-3xl text-sm leading-6 text-neutral-600">{listingTypeDescriptions[activeType]}</p>
      ) : null}
    </div>
  );
}
