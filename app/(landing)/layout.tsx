import { Playfair_Display } from "next/font/google";
import "./landing.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["400"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${playfairDisplay.variable} min-h-full font-body antialiased`}
      style={{
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        ["--font-body-sans" as string]: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      {children}
    </div>
  );
}
