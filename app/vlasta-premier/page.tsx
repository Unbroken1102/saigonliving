import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DeferredHeroMedia } from "@/app/components/deferred-hero-media";
import { JsonLd } from "@/app/components/json-ld";
import { LeadFormTrigger } from "@/app/components/lead-form-popup";
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
  StatsStrip,
} from "@/app/components/site-sections";
import { MotionReveal } from "@/app/components/motion-reveal";
import { media } from "@/app/lib/media";
import { absoluteUrl, project, siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Vlasta Premier Phú Thuận | Bảng giá, mặt bằng, pháp lý mới nhất",
  description:
    "Cập nhật Vlasta Premier Phú Thuận: bảng giá, mặt bằng tầng, layout căn hộ, vị trí, pháp lý, tiến độ, tiện ích và FAQ cho khách mua ở hoặc đầu tư.",
  alternates: {
    canonical: absoluteUrl("/vlasta-premier"),
  },
  openGraph: {
    title: "Vlasta Premier Phú Thuận | Bảng giá, mặt bằng, pháp lý",
    description: project.summary,
    url: absoluteUrl("/vlasta-premier"),
    images: [
      {
        url: absoluteUrl(siteConfig.shareImage),
        width: 1024,
        height: 576,
        alt: "Vlasta Premier view sông Đào Trí Nam Sài Gòn",
      },
    ],
  },
};

export default function VlastaPremierPage() {
  const quickAnchors = [
    { label: "Vị trí", href: "#location", note: "Kết nối khu Nam" },
    { label: "Mặt bằng", href: "#masterplan", note: "Tầng & layout căn" },
    { label: "Pháp lý", href: "#legal", note: "Sở hữu, bảo lãnh" },
    { label: "Bảng giá", href: "#pricing", note: "Giỏ hàng mới nhất" },
  ];

  const planCards = [
    {
      title: "Mặt bằng tổng thể",
      text: "Xem cách dự án tổ chức khối đế, cảnh quan, tiện ích và trục di chuyển trước khi chọn tháp.",
      image: media.images.hero,
    },
    {
      title: "Mặt bằng tầng",
      text: "Đối chiếu lõi thang, hành lang, vị trí căn và hướng nhìn để lọc sản phẩm phù hợp.",
      image: media.images.planA2Br,
    },
    {
      title: "Layout căn hộ",
      text: "So sánh nhanh 1PN, 2PN, 3PN theo công năng, ngân sách và mục tiêu mua.",
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
      <section className="relative isolate flex min-h-[760px] overflow-hidden bg-[#1c1b19] px-5 pb-10 pt-32 text-white lg:min-h-[920px] lg:px-8 lg:pb-16">
        <div className="absolute inset-0 -z-10">
          <DeferredHeroMedia
            poster={media.images.hero}
            video={media.video.hero}
            label="Vlasta Premier Phú Thuận hero"
          />
          <div className="absolute inset-0 bg-[#1c1b19]/22" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1b19]/82 via-[#1c1b19]/46 to-[#1c1b19]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b19]/82 via-[#1c1b19]/16 to-[#1c1b19]/25" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end">
          <div className="max-w-3xl">
            <MotionReveal className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4b87a]/35 bg-[#1c1b19]/45 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f0ddb0] shadow-lg shadow-black/20 backdrop-blur-md md:text-xs">
                <span className="size-1.5 rounded-full bg-[#d4b87a]" />
                Vlasta Premier Phú Thuận
              </p>
              <h1 className="font-display text-5xl font-light leading-[1.03] tracking-tight text-[#fffaf0] drop-shadow-[0_10px_28px_rgba(0,0,0,0.42)] sm:text-6xl md:text-7xl lg:text-[4.85rem]">
                Bảng giá &
                <br />
                <span className="text-gradient-gold font-normal italic">mặt bằng</span>
                <br />
                Vlasta Premier
                <br />
                Phú Thuận.
              </h1>
              <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-[#faf6f0]/88 drop-shadow md:text-lg">
                {project.summary}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <LeadFormTrigger source="Vlasta Premier Hero" className="btn-luxury rounded-full bg-[#d4b87a] px-8 py-4 text-center text-sm font-bold text-[#1c1b19] shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#f0ddb0] md:px-9">
                  Nhận bảng giá & giỏ hàng
                </LeadFormTrigger>
                <Link href="#masterplan" className="rounded-full border border-[#faf6f0]/35 bg-[#1c1b19]/32 px-8 py-4 text-center text-sm font-semibold text-[#faf6f0] shadow-lg shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[#faf6f0]/12 md:px-9">
                  Xem mặt bằng dự án
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
                {quickAnchors.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-white/14 bg-white/[0.08] p-4 text-left shadow-lg shadow-black/15 backdrop-blur-md transition hover:border-[#d4b87a]/55 hover:bg-white/[0.12]"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f0ddb0]">
                      {item.label}
                    </span>
                    <p className="mt-2 text-xs leading-5 text-white/72">{item.note}</p>
                  </Link>
                ))}
              </div>
            </MotionReveal>
          </div>
          <StatsStrip />
        </div>
      </section>
      <ProjectOverview />
      <ProjectDataHighlights />
      <LocationSection />
      <section className="relative overflow-hidden bg-white px-5 py-24 lg:px-8" id="masterplan">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(212,184,122,0.14),transparent_30rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Mặt bằng & layout"
            title="Chọn đúng tháp, đúng tầng và đúng layout trước khi nhận bảng giá."
            description="Tổng hợp mặt bằng tổng thể, mặt bằng tầng và layout căn hộ để Anh/Chị lọc nhanh dòng sản phẩm phù hợp nhu cầu ở thực hoặc đầu tư."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <MotionReveal>
              <article className="image-polish group relative min-h-[520px] overflow-hidden rounded-[2.25rem] border border-[#d9c79f]/60 bg-[#15110c]">
                <Image
                  src={media.images.hero}
                  alt="Tổng thể mặt bằng và phối cảnh Vlasta Premier Phú Thuận"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/16 to-transparent" />
                <div className="absolute inset-x-7 bottom-7 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f0ddb0]">
                    Masterplan nổi bật
                  </p>
                  <h2 className="font-display mt-4 max-w-2xl text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                    Xem tổng quan trước, rồi lọc căn theo tầng, view và ngân sách.
                  </h2>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <LeadFormTrigger source="Masterplan Featured CTA" className="btn-luxury rounded-full bg-[#d4b87a] px-7 py-4 text-sm font-bold text-[#1c1b19] transition hover:-translate-y-0.5 hover:bg-[#f0ddb0]">
                      Nhận mặt bằng & bảng giá
                    </LeadFormTrigger>
                    <Link href="#pricing" className="rounded-full border border-white/25 bg-white/10 px-7 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/16">
                      Xem giá theo loại căn
                    </Link>
                  </div>
                </div>
              </article>
            </MotionReveal>
            <div className="grid gap-5">
            {planCards.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.06}>
                <article className="luxury-card grid h-full overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1 sm:grid-cols-[0.42fr_0.58fr] lg:grid-cols-1 xl:grid-cols-[0.42fr_0.58fr]">
                  <div className="relative min-h-44 bg-[#15110c]">
                    <Image
                      src={item.image}
                      alt={`${item.title} Vlasta Premier`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#8a6a2f]">Module 0{index + 1}</p>
                    <h3 className="font-display mt-4 text-2xl font-medium tracking-[-0.04em] text-[#15110c]">{item.title}</h3>
                    <p className="mt-5 leading-7 text-[#5d554c]">
                      {item.text}
                    </p>
                  </div>
                </article>
              </MotionReveal>
            ))}
            </div>
          </div>
          <div className="mt-20 rounded-[2.5rem] border border-[#d9c79f]/60 bg-[#f7f1e6] p-5 md:p-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
                Mặt bằng tầng
              </p>
              <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
                Mặt bằng tầng điển hình và vị trí căn trong tòa tháp.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5d554c]">
                Xem cách bố trí lõi thang, hành lang, hướng căn và phân bổ sản phẩm trước khi chọn layout chi tiết.
              </p>
            </div>
              <LeadFormTrigger source="Floor Plan CTA" className="btn-luxury w-full rounded-full bg-[#15110c] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c9a45d] hover:text-black md:w-auto">
                Nhận tư vấn chọn tầng
              </LeadFormTrigger>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {media.towerFloorPlans.map((plan, index) => (
                <MotionReveal key={plan.src} delay={index * 0.05}>
                  <article className="luxury-card h-full overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1">
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
                      <h3 className="font-display mt-3 text-2xl font-medium tracking-[-0.03em] text-[#15110c]">
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
                  Layout căn hộ
                </p>
                <h2 className="font-display mt-4 max-w-3xl text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
                  Layout căn hộ 1PN, 2PN, 3PN theo từng tháp.
                </h2>
              </div>
              <Link href="#pricing" className="btn-luxury rounded-full bg-[#15110c] px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c9a45d] hover:text-black">
                Xem bảng giá theo loại căn
              </Link>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {media.floorLayouts.map((layout, index) => (
                <MotionReveal key={layout.src} delay={index * 0.05}>
                  <article className="luxury-card overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1">
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
                      <h3 className="font-display mt-3 text-2xl font-medium tracking-[-0.03em] text-[#15110c]">
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
      <BlogPreview />
      <GallerySection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
