import { attachAutoListingImages } from "@/app/lib/listings-images";
import { resolveProjectSlug } from "@/app/lib/listings-project";

export { resolveProjectSlug } from "@/app/lib/listings-project";

export type ListingType = "dang-ban" | "chuyen-nhuong" | "cho-thue";

export type ListingStatus = "draft" | "published" | "sold";

export type Listing = {
  id: string;
  type: ListingType;
  status: ListingStatus;
  project: string;
  projectSlug?: string;
  district: string;
  unitType: string;
  area?: string;
  price: string;
  priceNote?: string;
  description: string;
  images: string[];
  updatedAt: string;
  featured?: boolean;
};

export const listingTypeLabels: Record<ListingType, string> = {
  "dang-ban": "Đang bán",
  "chuyen-nhuong": "Chuyển nhượng",
  "cho-thue": "Cho thuê",
};

export const listingTypeDescriptions: Record<ListingType, string> = {
  "dang-ban": "Liên hệ để xem chính sách ưu đãi và lịch thanh toán.",
  "chuyen-nhuong": "Giỏ hàng chuyển nhượng — liên hệ để xem nhà và biết giá chốt.",
  "cho-thue": "Liên hệ xem nhà và biết giá chốt.",
};


export const sampleListings: Listing[] = [
  {
    id: "tt-genesis-1pn-01",
    type: "dang-ban",
    status: "published",
    project: "TT Genesis",
    projectSlug: "/tt-genesis",
    district: "Nhà Bè",
    unitType: "Căn 1PN",
    area: "~50m²",
    price: "Từ ~2,9 tỷ",
    priceNote: "Chưa VAT, tùy tầng và view",
    description: "Dòng 1PN giai đoạn đầu, phù hợp khách ngân sách 3 tỷ muốn vào khu Nam gần Phú Mỹ Hưng.",
    images: ["/assets/tt-genesis/tt-genesis-phoi-canh-2026.jpg"],
    updatedAt: "2026-06-20",
    featured: true,
  },
  {
    id: "peak-garden-1pn-01",
    type: "dang-ban",
    status: "published",
    project: "The Peak Garden",
    projectSlug: "/the-peak-garden",
    district: "Quận 7",
    unitType: "Căn 1PN",
    area: "~50m²",
    price: "Từ ~3,63 tỷ",
    priceNote: "Giỏ hàng tham khảo",
    description: "Căn hộ Quận 7 gần Phú Mỹ Hưng, wellness nội khu — dễ so với TT Genesis và Vlasta cùng ngân sách.",
    images: ["/assets/the-peak-garden/the-peak-garden-can-ho-mau.jpg"],
    updatedAt: "2026-06-20",
    featured: true,
  },
  {
    id: "mizuki-trellia-2pn-01",
    type: "dang-ban",
    status: "published",
    project: "Mizuki Park",
    projectSlug: "/mizuki-park",
    district: "Bình Chánh",
    unitType: "Căn 2PN",
    area: "~68m² thông thủy",
    price: "~5,25 tỷ",
    priceNote: "Trellia Cove",
    description: "Compound đã hình thành, phù hợp gia đình trẻ muốn ở thật hoặc cho thuê ổn định tại khu Nam.",
    images: ["/assets/mizuki-park/mizuki-park-can-ho-hien-huu.jpg"],
    updatedAt: "2026-06-20",
    featured: true,
  },
  {
    id: "vlasta-1pn-cn-01",
    type: "chuyen-nhuong",
    status: "published",
    project: "Vlasta Premier",
    projectSlug: "/vlasta-premier",
    district: "Quận 7",
    unitType: "Căn 1PN",
    area: "~50m²",
    price: "Liên hệ",
    priceNote: "Chuyển nhượng — giá theo căn cụ thể",
    description: "Căn chuyển nhượng tại dự án ven sông Đào Trí. Cần đối chiếu pháp lý, tiến độ và lịch thanh toán còn lại.",
    images: ["/assets/optimized/overview-towers.jpg"],
    updatedAt: "2026-06-19",
  },
  {
    id: "mizuki-2pn-thue-01",
    type: "cho-thue",
    status: "published",
    project: "Mizuki Park",
    projectSlug: "/mizuki-park",
    district: "Bình Chánh",
    unitType: "Căn 2PN",
    area: "~71m²",
    price: "Liên hệ",
    priceNote: "Cho thuê dài hạn",
    description: "Tham khảo căn 2PN cho thuê tại Mizuki — phù hợp khách muốn ở thử khu compound Nam Sài Gòn.",
    images: ["/assets/mizuki-park/mizuki-park-canh-quan-noi-khu.jpg"],
    updatedAt: "2026-06-18",
  },
];

function normalizeListing(raw: Partial<Listing>): Listing | null {
  if (!raw.id || !raw.type || !raw.project || !raw.unitType || !raw.price) {
    return null;
  }

  const type = raw.type as ListingType;
  if (!listingTypeLabels[type]) {
    return null;
  }

  const images = Array.isArray(raw.images)
    ? raw.images.filter((image): image is string => typeof image === "string" && image.length > 0)
    : [];

  return {
    id: String(raw.id),
    type,
    status: (raw.status as ListingStatus) || "published",
    project: String(raw.project).trim(),
    projectSlug: resolveProjectSlug(String(raw.project), raw.projectSlug),
    district: String(raw.district || "TP.HCM"),
    unitType: String(raw.unitType),
    area: raw.area ? String(raw.area) : undefined,
    price: String(raw.price),
    priceNote: raw.priceNote ? String(raw.priceNote) : undefined,
    description: String(raw.description || ""),
    images: images.length ? images : [],
    updatedAt: String(raw.updatedAt || new Date().toISOString().slice(0, 10)),
    featured: Boolean(raw.featured),
  };
}

export async function getPublishedListings(): Promise<Listing[]> {
  const feedUrl = process.env.LISTINGS_WEB_APP_URL;

  if (feedUrl) {
    try {
      const response = await fetch(feedUrl, {
        next: { revalidate: 60 },
      });

      if (response.ok) {
        const payload = (await response.json()) as { listings?: Partial<Listing>[] };
        const listings = (payload.listings || [])
          .map((item) => normalizeListing(item))
          .filter((item): item is Listing => Boolean(item))
          .filter((item) => item.status === "published");

        if (listings.length) {
          return attachAutoListingImages(listings);
        }
      }
    } catch {
      // Fall back to bundled sample listings when the feed is unavailable.
    }
  }

  return attachAutoListingImages(
    sampleListings.filter((listing) => listing.status === "published"),
  );
}

export function filterListingsByType(listings: Listing[], type?: ListingType) {
  if (!type) {
    return listings;
  }

  return listings.filter((listing) => listing.type === type);
}

export function getProjectSlug(listing: Listing) {
  return resolveProjectSlug(listing.project, listing.projectSlug);
}

export function parseListingPriceBillions(price: string): number | null {
  const normalized = price
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/,/g, ".");

  if (/lien he|thoa thuan/.test(normalized)) {
    return null;
  }

  const tyMatch = normalized.match(/(\d+(?:\.\d+)?)\s*t[y]/);
  if (tyMatch) {
    return Number.parseFloat(tyMatch[1]);
  }

  const trieuMatch = normalized.match(/(\d+(?:\.\d+)?)\s*tr(?:ieu)?/);
  if (trieuMatch) {
    return Number.parseFloat(trieuMatch[1]) / 1000;
  }

  return null;
}

export function parseListingBedroomCount(unitType: string): 1 | 2 | 3 | null {
  const normalized = unitType
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const match = normalized.match(/\b([123])\s*pn\b/);
  if (!match) {
    return null;
  }

  const count = Number.parseInt(match[1], 10);
  return count === 1 || count === 2 || count === 3 ? count : null;
}

export function sortListingsByBestPrice(listings: Listing[]) {
  return [...listings].sort((a, b) => {
    const aPrice = parseListingPriceBillions(a.price);
    const bPrice = parseListingPriceBillions(b.price);

    if (aPrice === null && bPrice === null) {
      return 0;
    }

    if (aPrice === null) {
      return 1;
    }

    if (bPrice === null) {
      return -1;
    }

    if (aPrice !== bPrice) {
      return aPrice - bPrice;
    }

    if (a.featured && !b.featured) {
      return -1;
    }

    if (!a.featured && b.featured) {
      return 1;
    }

    return 0;
  });
}

export function getBestPriceListings(listings: Listing[], limit = 5) {
  if (listings.length <= limit) {
    return sortListingsByBestPrice(listings);
  }

  const buckets: Record<1 | 2 | 3, Listing[]> = {
    1: [],
    2: [],
    3: [],
  };
  const others: Listing[] = [];

  for (const listing of listings) {
    const bedrooms = parseListingBedroomCount(listing.unitType);
    if (bedrooms) {
      buckets[bedrooms].push(listing);
    } else {
      others.push(listing);
    }
  }

  for (const bedroom of [1, 2, 3] as const) {
    buckets[bedroom] = sortListingsByBestPrice(buckets[bedroom]);
  }

  const sortedOthers = sortListingsByBestPrice(others);
  const selected: Listing[] = [];
  const selectedIds = new Set<string>();
  const pointers: Record<1 | 2 | 3, number> = { 1: 0, 2: 0, 3: 0 };

  while (selected.length < limit) {
    let addedInRound = false;

    for (const bedroom of [1, 2, 3] as const) {
      if (selected.length >= limit) {
        break;
      }

      const bucket = buckets[bedroom];
      while (pointers[bedroom] < bucket.length && selectedIds.has(bucket[pointers[bedroom]].id)) {
        pointers[bedroom] += 1;
      }

      if (pointers[bedroom] < bucket.length) {
        const listing = bucket[pointers[bedroom]];
        pointers[bedroom] += 1;
        selected.push(listing);
        selectedIds.add(listing.id);
        addedInRound = true;
      }
    }

    if (!addedInRound) {
      break;
    }
  }

  if (selected.length < limit) {
    for (const listing of [...sortedOthers, ...sortListingsByBestPrice(listings)]) {
      if (selected.length >= limit) {
        break;
      }

      if (!selectedIds.has(listing.id)) {
        selected.push(listing);
        selectedIds.add(listing.id);
      }
    }
  }

  return selected;
}

export function listingMatchesProjectSlug(listing: Listing, projectSlug: string) {
  const listingSlug = getProjectSlug(listing)?.replace(/^\//, "");
  return listingSlug === projectSlug.replace(/^\//, "");
}

export function filterListingsByProject(listings: Listing[], projectSlug: string) {
  return listings.filter((listing) => listingMatchesProjectSlug(listing, projectSlug));
}

export function getListingCountsByType(listings: Listing[]) {
  return {
    all: listings.length,
    "dang-ban": listings.filter((item) => item.type === "dang-ban").length,
    "chuyen-nhuong": listings.filter((item) => item.type === "chuyen-nhuong").length,
    "cho-thue": listings.filter((item) => item.type === "cho-thue").length,
  };
}

export function getLatestListingUpdatedAt(listings: Listing[]) {
  if (!listings.length) {
    return undefined;
  }

  return listings.reduce((latest, listing) => {
    return listing.updatedAt > latest ? listing.updatedAt : latest;
  }, listings[0].updatedAt);
}

export function formatInventoryUpdatedLabel(updatedAt?: string) {
  const source = updatedAt ?? new Date().toISOString().slice(0, 10);
  const [year, month] = source.slice(0, 7).split("-");

  return `Bảng giá cập nhật mới nhất tháng ${Number(month)} năm ${year}`;
}
