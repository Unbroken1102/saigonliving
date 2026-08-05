import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Saigon Living | Bất động sản cao cấp Nam Sài Gòn",
    template: "%s | Saigon Living",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Saigon Living",
    "Vlasta Premier",
    "bất động sản Nam Sài Gòn",
    "bất động sản cao cấp Nam Sài Gòn",
    "căn hộ cao cấp Phú Thuận",
    "tư vấn bất động sản cao cấp",
  ],
  authors: [{ name: siteConfig.contact.advisor }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Saigon Living | Bất động sản cao cấp Nam Sài Gòn",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.shareImage),
        width: 1024,
        height: 576,
        alt: "Vlasta Premier view sông Đào Trí Nam Sài Gòn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saigon Living | Bất động sản cao cấp Nam Sài Gòn",
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.shareImage)],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
