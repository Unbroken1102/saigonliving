import { JsonLd } from "@/app/components/json-ld";
import {
  BlogPreview,
  ContactSection,
  GallerySection,
  HeroSection,
  LocationSection,
  ProjectOverview,
  RelatedProjects,
  VideoSection,
} from "@/app/components/site-sections";
import { absoluteUrl, project, siteConfig } from "@/app/lib/site";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: "vi-VN",
      description: siteConfig.description,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.url}/blog/{search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      areaServed: "Nam Sài Gòn, TP.HCM",
      slogan: siteConfig.tagline,
      knowsAbout: [
        "Vlasta Premier",
        "bất động sản cao cấp Nam Sài Gòn",
        "phân tích đầu tư bất động sản",
        "family living",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: project.name,
      url: absoluteUrl("/vlasta-premier"),
      description: project.summary,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nam Sài Gòn",
        addressCountry: "VN",
      },
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <HeroSection />
      <ProjectOverview />
      <GallerySection />
      <VideoSection />
      <LocationSection />
      <ContactSection />
      <RelatedProjects />
      <BlogPreview />
    </>
  );
}
