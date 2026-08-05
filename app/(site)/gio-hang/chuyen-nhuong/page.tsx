import type { Metadata } from "next";
import { ListingsHubView } from "@/app/components/listings-hub-view";
import {
  formatInventoryUpdatedLabel,
  getLatestListingUpdatedAt,
  getPublishedListings,
  listingTypeDescriptions,
} from "@/app/lib/listings";
import { absoluteUrl, siteConfig } from "@/app/lib/site";

export const revalidate = 60;

const title = "Giỏ chuyển nhượng căn hộ Nam Sài Gòn 2026";
const description =
  "Cập nhật căn chuyển nhượng tại Mizuki Park, Eco Retreat, TT Genesis, The Peak Garden và khu Nam Sài Gòn. Giá tham khảo — liên hệ Saigon Living để xác nhận căn còn và pháp lý.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl("/gio-hang/chuyen-nhuong"),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/gio-hang/chuyen-nhuong"),
    images: [
      {
        url: absoluteUrl(siteConfig.shareImage),
        width: 1024,
        height: 576,
        alt: "Giỏ chuyển nhượng căn hộ Nam Sài Gòn Saigon Living",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function ChuyenNhuongHubPage() {
  const allListings = await getPublishedListings();
  const inventoryUpdatedLabel = `${formatInventoryUpdatedLabel(getLatestListingUpdatedAt(allListings))} ${listingTypeDescriptions["chuyen-nhuong"]}`;

  return (
    <ListingsHubView
      activeType="chuyen-nhuong"
      basePath="/gio-hang/chuyen-nhuong"
      pageTitle="Giỏ chuyển nhượng căn hộ Nam Sài Gòn"
      pageEyebrow="Chuyển nhượng · Saigon Living"
      pageDescription={inventoryUpdatedLabel}
      breadcrumbLabel="Chuyển nhượng"
      relatedLinks={[
        { href: "/blog/so-sanh-eco-retreat-mizuki-park", title: "So sánh Eco Retreat và Mizuki Park" },
        { href: "/blog/gia-tt-genesis-2026", title: "Giá TT Genesis 2026" },
        { href: "/blog/gia-eco-retreat-2026", title: "Giá Eco Retreat 2026" },
      ]}
    />
  );
}
