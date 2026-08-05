import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/app/lib/site";
import { images, site } from "@/app/lib/vlasta-thong-tin/data";

const pageTitle = "Vlasta Premier Phú Thuận | Bảng giá & thông tin tham khảo";
const pageDescription =
  "Nhận bảng giá tham khảo Vlasta Premier Phú Thuận, căn hộ 1PN từ 3.9 tỷ, 2PN từ 5.7 tỷ, 3PN từ 7.2 tỷ. Trang tư vấn độc lập của Saigon Living — không phải website chính thức chủ đầu tư Văn Phú.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: [
    "Vlasta Premier",
    "Vlasta Premier Phú Thuận",
    "bảng giá Vlasta Premier",
    "căn hộ Phú Thuận",
    "căn hộ Nam Sài Gòn",
    "Văn Phú Invest",
    "view sông Sài Gòn",
    "Saigon Living",
  ],
  alternates: {
    canonical: absoluteUrl("/vlasta-premier"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/vlasta-premier/thong-tin"),
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: absoluteUrl(images.heroPoster),
        width: 1600,
        height: 900,
        alt: "Phối cảnh tổng thể Vlasta Premier Phú Thuận",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [absoluteUrl(images.heroPoster)],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: site.fullName,
  description: pageDescription,
  url: absoluteUrl("/vlasta-premier/thong-tin"),
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  about: {
    "@type": "Residence",
    name: site.fullName,
    address: {
      "@type": "PostalAddress",
      streetAddress: "54 Đào Trí",
      addressLocality: "Phú Thuận",
      addressRegion: "TP.HCM",
      addressCountry: "VN",
    },
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  author: {
    "@type": "Person",
    name: siteConfig.contact.advisor,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  },
  disclaimer:
    "Trang tư vấn độc lập do Saigon Living vận hành. Không phải website chính thức của Chủ đầu tư Văn Phú Invest.",
};

export default function VlastaThongTinLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link
        rel="preload"
        href={images.heroPosterMobileWebp}
        as="image"
        type="image/webp"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
