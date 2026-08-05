import { Cormorant_Garamond, Inter } from "next/font/google";
import { ConditionalTracking } from "@/app/components/conditional-tracking";
import { DesktopFloatingCta, MobileStickyCta, SiteFooter, SiteHeader } from "@/app/components/site-sections";
import "../globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${cormorantGaramond.variable} ${inter.variable} min-h-full bg-[#fbf8f2] font-sans text-[#15110c] antialiased`}
    >
      <ConditionalTracking />
      <SiteHeader />
      <DesktopFloatingCta />
      <MobileStickyCta />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
