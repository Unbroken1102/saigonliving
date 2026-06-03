import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/app/components/json-ld";
import {
  AmenitiesSection,
  BlogPreview,
  ContactSection,
  FaqSection,
  GallerySection,
  InvestmentSection,
  LegalSection,
  LocationSection,
  PricingSection,
  ProjectOverview,
  ProgressSection,
  ProjectDataHighlights,
  SectionIntro,
  VideoSection,
} from "@/app/components/site-sections";
import { MotionReveal } from "@/app/components/motion-reveal";
import { media } from "@/app/lib/media";
import { absoluteUrl, project, siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Vlasta Premier Phú Thuận | Phân tích dự án cao cấp",
  description:
    "Hồ sơ dự án Vlasta Premier Phú Thuận: 602 căn hộ ở, 136 căn TMDV, vị trí, mặt bằng, tiện ích, lifestyle, tiềm năng đầu tư và FAQ.",
  alternates: {
    canonical: absoluteUrl("/vlasta-premier"),
  },
  openGraph: {
    title: "Vlasta Premier Phú Thuận | Hồ sơ dự án cao cấp",
    description: project.summary,
    url: absoluteUrl("/vlasta-premier"),
    images: [absoluteUrl("/og-vlasta-premier.svg")],
  },
};

export default function VlastaPremierPage() {
  const planCards = [
    {
      title: "Masterplan",
      text: "Phối cảnh tổng thể giúp khách mua hiểu cách dự án tổ chức không gian, cảnh quan và trục di chuyển.",
      image: media.images.hero,
    },
    {
      title: "Layouts",
      text: "Mặt bằng căn hộ mẫu giúp phát triển module so sánh loại căn, diện tích, hướng, tầng và công năng.",
      image: media.images.planA2Br,
    },
    {
      title: "Lifestyle analysis",
      text: "Ảnh tiện ích và cảnh quan hỗ trợ phân tích trải nghiệm sống, không chỉ mô tả thông số.",
      image: media.images.skyAmenity,
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: project.name,
      url: absoluteUrl("/vlasta-premier"),
      description: project.summary,
      amenityFeature: project.amenities.map((amenity) => ({
        "@type": "LocationFeatureSpecification",
        name: amenity,
      })),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nam Sài Gòn",
        addressCountry: "VN",
      },
      provider: {
        "@type": "RealEstateAgent",
        name: siteConfig.name,
        telephone: siteConfig.contact.phone,
        url: siteConfig.url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: project.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="relative isolate overflow-hidden bg-[#fbf8f2] px-5 pb-24 pt-36 text-[#15110c] lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_12%,rgba(201,164,93,0.24),transparent_32%),linear-gradient(145deg,#fbf8f2,#f1e6d2_62%,#fbf8f2)]" />
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#d9bc7c]">
              Project dossier
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-balance md:text-7xl">
              Vlasta Premier Phú Thuận: hồ sơ sống, đầu tư và lựa chọn căn tại Nam Sài Gòn.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5d554c]">{project.summary}</p>
          </MotionReveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Vị trí", href: "#location" },
              { label: "Pháp lý", href: "#legal" },
              { label: "Tiến độ", href: "#progress" },
              { label: "Bảng giá", href: "#pricing" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="rounded-3xl border border-[#d9c79f]/60 bg-white/78 p-6 text-[#15110c] shadow-sm shadow-black/5 transition hover:border-[#c9a45d] hover:bg-white">
                <span className="text-sm uppercase tracking-[0.25em] text-[#8a6a2f]">Quick access</span>
                <p className="mt-3 text-xl font-semibold">Đi tới {item.label}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ProjectOverview />
      <ProjectDataHighlights />
      <LocationSection />
      <section className="bg-white px-5 py-24 lg:px-8" id="masterplan">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Masterplan & layouts"
            title="Masterplan, mặt bằng căn hộ và layout theo từng dòng sản phẩm."
            description="Khu vực này giúp khách mua xem nhanh mặt bằng tổng thể, layout căn hộ và nhóm sản phẩm phù hợp trước khi nhận tư vấn chi tiết theo tầng, hướng và view."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {planCards.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.06}>
                <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#fbf8f2]">
                  <div className="relative h-56 bg-[#15110c]">
                    <Image
                      src={item.image}
                      alt={`${item.title} Vlasta Premier`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#8a6a2f]">Module 0{index + 1}</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#15110c]">{item.title}</h2>
                    <p className="mt-5 leading-7 text-[#5d554c]">
                      {item.text}
                    </p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
          <div className="mt-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
                Tower floor plans
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#15110c] md:text-5xl">
                Mặt bằng tầng và cách tổ chức không gian trong tháp.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5d554c]">
                Các hình ảnh mặt bằng tầng giúp khách mua nhìn nhanh vị trí căn, lõi thang, hành lang và cách phân bổ sản phẩm trước khi chọn layout chi tiết.
              </p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {media.towerFloorPlans.map((plan, index) => (
                <MotionReveal key={plan.src} delay={index * 0.05}>
                  <article className="h-full overflow-hidden rounded-[2rem] border border-black/10 bg-[#fbf8f2] shadow-sm">
                    <div className="relative min-h-[300px] bg-white p-4 md:min-h-[380px]">
                      <Image
                        src={plan.src}
                        alt={plan.alt}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                    <div className="border-t border-black/10 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                        Mặt bằng 0{index + 1}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#15110c]">
                        {plan.title}
                      </h3>
                      <p className="mt-4 leading-7 text-[#5d554c]">{plan.note}</p>
                    </div>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
          <div className="mt-20">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
                  Floor plans
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[#15110c] md:text-5xl">
                  Hình ảnh mặt bằng layout căn hộ theo tháp.
                </h2>
              </div>
              <a href="#pricing" className="rounded-full bg-[#15110c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c9a45d] hover:text-black">
                Xem bảng giá theo loại căn
              </a>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {media.floorLayouts.map((layout, index) => (
                <MotionReveal key={layout.src} delay={index * 0.05}>
                  <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#fbf8f2] shadow-sm">
                    <div className="relative min-h-[340px] bg-white p-4 md:min-h-[430px]">
                      <Image
                        src={layout.src}
                        alt={layout.alt}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="border-t border-black/10 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                        Layout 0{index + 1}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#15110c]">
                        {layout.title}
                      </h3>
                      <p className="mt-4 leading-7 text-[#5d554c]">{layout.note}</p>
                    </div>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AmenitiesSection />
      <LegalSection />
      <ProgressSection />
      <PricingSection />
      <InvestmentSection />
      <GallerySection />
      <VideoSection />
      <FaqSection />
      <BlogPreview />
      <ContactSection />
    </>
  );
}
