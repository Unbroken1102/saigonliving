import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ListingsHubView } from "@/app/components/listings-hub-view";
import {
  formatInventoryUpdatedLabel,
  getLatestListingUpdatedAt,
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

  if (activeType === "chuyen-nhuong") {
    return {
      alternates: {
        canonical: absoluteUrl("/gio-hang/chuyen-nhuong"),
      },
    };
  }

  const title = activeType
    ? `Giỏ hàng ${listingTypeLabels[activeType]} Nam Sài Gòn`
    : "Giỏ hàng căn hộ Nam Sài Gòn đang bán, chuyển nhượng, cho thuê";
  const description = activeType
    ? `Cập nhật căn ${listingTypeLabels[activeType].toLowerCase()} tại Mizuki Park, The Peak Garden, TT Genesis, Eco Retreat và khu Nam Sài Gòn. Liên hệ Saigon Living để nhận thông tin căn cụ thể.`
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

  if (activeType === "chuyen-nhuong") {
    redirect("/gio-hang/chuyen-nhuong");
  }

  const allListings = await getPublishedListings();
  const inventoryUpdatedLabel = formatInventoryUpdatedLabel(getLatestListingUpdatedAt(allListings));

  const pageTitle = activeType
    ? `Giỏ hàng ${listingTypeLabels[activeType]} Nam Sài Gòn`
    : "Giỏ hàng căn hộ Nam Sài Gòn";

  return (
    <ListingsHubView
      activeType={activeType}
      pageTitle={pageTitle}
      pageDescription={inventoryUpdatedLabel}
    />
  );
}
