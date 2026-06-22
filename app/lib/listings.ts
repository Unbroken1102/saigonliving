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
  "dang-ban":
    "Căn mở bán từ chủ đầu tư hoặc đợt phân phối chính thức — giá và chính sách cần xác nhận lại theo giỏ hàng tuần.",
  "chuyen-nhuong":
    "Căn chuyển nhượng thứ cấp tại các dự án Nam Sài Gòn — nên kiểm tra pháp lý, tiến độ và phí trước khi giữ chỗ.",
  "cho-thue":
    "Căn cho thuê tại khu Nam — phù hợp khách muốn ở thử khu vực hoặc nhà đầu tư cần tham chiếu giá thuê thực tế.",
};

const projectSlugByName: Record<string, string> = {
  "Mizuki Park": "/mizuki-park",
  "The Peak Garden": "/the-peak-garden",
  "TT Genesis": "/tt-genesis",
  "Vlasta Premier": "/vlasta-premier",
  "Eco Retreat": "/eco-retreat",
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
    project: String(raw.project),
    projectSlug: raw.projectSlug || projectSlugByName[String(raw.project)],
    district: String(raw.district || "TP.HCM"),
    unitType: String(raw.unitType),
    area: raw.area ? String(raw.area) : undefined,
    price: String(raw.price),
    priceNote: raw.priceNote ? String(raw.priceNote) : undefined,
    description: String(raw.description || ""),
    images: images.length ? images : ["/assets/optimized/overview-marina.jpg"],
    updatedAt: String(raw.updatedAt || new Date().toISOString().slice(0, 10)),
    featured: Boolean(raw.featured),
  };
}

export async function getPublishedListings(): Promise<Listing[]> {
  const feedUrl = process.env.LISTINGS_WEB_APP_URL;

  if (feedUrl) {
    try {
      const response = await fetch(feedUrl, {
        next: { revalidate: 300 },
      });

      if (response.ok) {
        const payload = (await response.json()) as { listings?: Partial<Listing>[] };
        const listings = (payload.listings || [])
          .map((item) => normalizeListing(item))
          .filter((item): item is Listing => Boolean(item))
          .filter((item) => item.status === "published");

        if (listings.length) {
          return listings;
        }
      }
    } catch {
      // Fall back to bundled sample listings when the feed is unavailable.
    }
  }

  return sampleListings.filter((listing) => listing.status === "published");
}

export function filterListingsByType(listings: Listing[], type?: ListingType) {
  if (!type) {
    return listings;
  }

  return listings.filter((listing) => listing.type === type);
}

export function getProjectSlug(listing: Listing) {
  return listing.projectSlug || projectSlugByName[listing.project];
}
