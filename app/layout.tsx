import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader, MobileStickyCta } from "@/app/components/site-sections";
import { TrackingScripts } from "@/app/components/tracking";
import { absoluteUrl, siteConfig } from "@/app/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Vlasta Premier | South Saigon Luxury Living Platform",
    template: "%s | Vlasta Premier Advisory",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Vlasta Premier",
    "bất động sản Nam Sài Gòn",
    "South Saigon luxury living",
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
    title: "Vlasta Premier | South Saigon Luxury Living Platform",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/og-vlasta-premier.svg"),
        width: 1200,
        height: 630,
        alt: "Vlasta Premier luxury real estate advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vlasta Premier | South Saigon Luxury Living Platform",
    description: siteConfig.description,
    images: [absoluteUrl("/og-vlasta-premier.svg")],
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
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#fbf8f2] font-sans text-[#15110c]">
        <TrackingScripts />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileStickyCta />
      </body>
    </html>
  );
}
