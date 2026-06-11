import { JsonLd } from "@/app/components/json-ld";
import {
  BlogPreview,
  ContactSection,
  RelatedProjects,
  SectionIntro,
} from "@/app/components/site-sections";
import { LeadFormTrigger } from "@/app/components/lead-form-popup";
import { MotionReveal } from "@/app/components/motion-reveal";
import { absoluteUrl, project, siteConfig } from "@/app/lib/site";

export default function Home() {
  const featuredProjects = [
    {
      name: project.name,
      href: "/vlasta-premier",
      description: "Trang thông tin chuyên sâu về bảng giá, mặt bằng, pháp lý, vị trí và tiềm năng Vlasta Premier Phú Thuận.",
      status: "Dự án nổi bật",
    },
    {
      name: "Vinhomes Bình Chánh",
      href: "/vinhomes-binh-chanh",
      description: "Trang theo dõi sớm thông tin thị trường, quy hoạch và hạ tầng khu Tây Nam trước khi dự án được công bố chính thức.",
      status: "Theo dõi sớm",
    },
    {
      name: "Sunshine Sky City",
      href: "/blog/so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden",
      description: "Dự án so sánh trong rổ sản phẩm khu Nam, phù hợp khách cần đối chiếu vị trí và ngân sách.",
      status: "So sánh",
    },
  ];

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
        "Saigon Living",
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
      <section className="relative isolate flex min-h-[760px] overflow-hidden bg-[#1c1b19] px-5 pb-14 pt-32 text-white lg:min-h-[920px] lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(212,184,122,0.28),transparent_28rem),linear-gradient(145deg,#15110c,#2f2416_48%,#efe5d3)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1c1b19]/88 via-[#1c1b19]/46 to-[#1c1b19]/8" />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end">
          <div className="grid items-end gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <MotionReveal className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4b87a]/35 bg-[#1c1b19]/45 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f0ddb0] shadow-lg shadow-black/20 backdrop-blur-md md:text-xs">
                <span className="size-1.5 rounded-full bg-[#d4b87a]" />
                Saigon Living
              </p>
              <h1 className="font-display text-5xl font-light leading-[1.03] tracking-tight text-[#fffaf0] drop-shadow-[0_10px_28px_rgba(0,0,0,0.42)] sm:text-6xl md:text-7xl lg:text-[5rem]">
                Dự án đáng sống
                <br />
                <span className="text-gradient-gold font-normal italic">Nam Sài Gòn</span>
                <br />
                qua góc nhìn tư vấn.
              </h1>
              <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-[#faf6f0]/86 drop-shadow md:text-lg">
                Saigon Living tổng hợp dự án cao cấp, bảng giá, mặt bằng, pháp lý và phân tích vị trí để khách mua chọn đúng tài sản tại Nam Sài Gòn.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/vlasta-premier" className="btn-luxury rounded-full bg-[#d4b87a] px-8 py-4 text-center text-sm font-bold text-[#1c1b19] shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#f0ddb0] md:px-9">
                  Xem Vlasta Premier
                </a>
                <LeadFormTrigger source="Saigon Living Hero" className="rounded-full border border-[#faf6f0]/35 bg-[#1c1b19]/32 px-8 py-4 text-center text-sm font-semibold text-[#faf6f0] shadow-lg shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[#faf6f0]/12 md:px-9">
                  Nhận tư vấn dự án
                </LeadFormTrigger>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <div className="rounded-[2.5rem] border border-white/14 bg-white/[0.08] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <div className="rounded-[2rem] bg-[#fbf8f2] p-6 text-[#15110c] md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a2f]">
                    Dự án trọng tâm
                  </p>
                  <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                    Vlasta Premier Phú Thuận
                  </h2>
                  <p className="mt-5 leading-7 text-[#5d554c]">
                    Hồ sơ chuyên sâu cho khách đang tìm bảng giá, mặt bằng, pháp lý, tiến độ và tiềm năng khu Nam.
                  </p>
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    {project.heroStats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl bg-[#15110c] p-4 text-white">
                        <p className="font-display text-3xl text-[#f0ddb0]">{stat.value}</p>
                        <p className="mt-1 text-xs text-white/68">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <a href="/vlasta-premier" className="btn-luxury mt-7 inline-flex rounded-full bg-[#15110c] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8a6a2f]">
                    Vào trang dự án
                  </a>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Project Hub"
            title="Saigon Living bắt đầu với Vlasta Premier và mở rộng sang các dự án khu Nam."
            description="Trang tổng giúp xây dựng thương hiệu rộng hơn cho domain saigonliving.net, trong khi từng dự án vẫn có landing page SEO chuyên sâu."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {featuredProjects.map((item) => (
              <MotionReveal key={item.name}>
                <a href={item.href} className="luxury-card block h-full rounded-[2rem] p-7 transition hover:-translate-y-1 hover:border-[#c9a45d]">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                    {item.status}
                  </p>
                  <h2 className="font-display mt-4 text-3xl font-medium tracking-[-0.04em] text-[#15110c]">
                    {item.name}
                  </h2>
                  <p className="mt-5 leading-7 text-[#5d554c]">{item.description}</p>
                </a>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
      <RelatedProjects />
      <BlogPreview />
    </>
  );
}
