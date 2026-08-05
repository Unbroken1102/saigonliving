import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GOOGLE_TAG_ID = GA_MEASUREMENT_ID || GOOGLE_ADS_ID;

export default function GoogleTag() {
  if (!GOOGLE_TAG_ID) {
    return null;
  }

  const configCommands = [
    GA_MEASUREMENT_ID ? `gtag('config', '${GA_MEASUREMENT_ID}');` : "",
    GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : "",
  ].join("\n");

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${configCommands}
        `}
      </Script>
    </>
  );
}
