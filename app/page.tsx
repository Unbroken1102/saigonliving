import Image from "next/image";
import { JsonLd } from "@/app/components/json-ld";
import { DeferredHeroMedia } from "@/app/components/deferred-hero-media";
import {
  BlogPreview,
  ContactSection,
  SectionIntro,
} from "@/app/components/site-sections";
import { LeadFormTrigger } from "@/app/components/lead-form-popup";
import { MotionReveal } from "@/app/components/motion-reveal";
import { absoluteUrl, project, siteConfig } from "@/app/lib/site";

export default function Home() {
  const featuredProjects = [
    {
      name: "The Peak Garden",
      href: "/the-peak-garden",
      description: "Căn hộ Quận 7 gần Phú Mỹ Hưng, phù hợp khách cần vị trí tiện đi lại, tiện ích wellness và tổng giá dễ tiếp cận hơn.",
      status: "Quận 7",
      image: "/assets/the-peak-garden/the-peak-garden-hero.jpg",
    },
    {
      name: "Eco Retreat",
      href: "/eco-retreat",
      description: "Đô thị sinh thái tại Bến Lức, phù hợp khách muốn không gian xanh, second home hoặc kế hoạch nắm giữ dài hạn.",
      status: "Sống xanh",
      image: "/assets/eco-retreat/eco-retreat-hero.webp",
    },
    {
      name: "Mizuki Park",
      href: "/mizuki-park",
      description: "Trang tư vấn Mizuki Park, Trellia Cove, tiện ích hiện hữu, giá tham khảo và so sánh với các dự án khu Nam.",
      status: "Đã vận hành",
      image: "/assets/mizuki-park/mizuki-park-kenh-dao-tien-ich.jpg",
    },
    {
      name: project.name,
      href: "/vlasta-premier",
      description: "Căn hộ cao cấp Phú Thuận với lợi thế ven sông Đào Trí, thiết kế chọn lọc và bài toán thanh toán cần tính kỹ.",
      status: "Phú Thuận",
      image: "/assets/optimized/overview-marina.jpg",
    },
    {
      name: "TT Genesis",
      href: "/tt-genesis",
      description: "Căn hộ Đào Sư Tích - Nhà Bè, phù hợp khách muốn so giá với Quận 7 và theo dõi dự án mới gần Phú Mỹ Hưng.",
      status: "Nhà Bè",
      image: "/assets/tt-genesis/vi-tri-tt-genesis.jpg",
    },
  ];

  const projectNeeds = [
    {
      need: "Muốn retreat, sống xanh và ngôi nhà thứ hai cuối tuần",
      project: "Eco Retreat",
      href: "/eco-retreat",
      description: "Phù hợp khách thích không gian xanh quy mô lớn, nhịp sống phục hồi, second home hoặc kế hoạch nắm giữ dài hạn.",
      accent: "Retreat",
      image: "/assets/eco-retreat/eco-retreat-mat-nuoc.webp",
    },
    {
      need: "Muốn khu đô thị xanh đã có cư dân, gần trung tâm hơn",
      project: "Mizuki Park",
      href: "/mizuki-park",
      description: "Phù hợp gia đình cần tiện ích hiện hữu, trường lớp, sinh hoạt hằng ngày và kết nối khu Nam thuận tiện hơn.",
      accent: "Ở thật",
      image: "/assets/mizuki-park/mizuki-park-kenh-dao-tien-ich.jpg",
    },
    {
      need: "Muốn theo dõi quy hoạch và đại đô thị cửa ngõ Tây Nam",
      project: "Vinhomes Bình Chánh",
      href: "/vinhomes-binh-chanh",
      description: "Phù hợp khách đang quan sát sớm câu chuyện Bình Chánh, Hưng Long, hạ tầng và dòng tiền khu Tây Nam.",
      accent: "Theo dõi",
      image: "/assets/vinhomes-binh-chanh/quy-hoach-hung-long-binh-chanh.jpg",
    },
    {
      need: "Muốn căn hộ cao cấp khu Nam với bài toán dòng tiền rõ",
      project: "Vlasta Premier",
      href: "/vlasta-premier",
      description: "Phù hợp khách cần căn hộ mới, tiện ích cao cấp, thanh toán giãn và tư vấn cụ thể theo ngân sách.",
      accent: "Căn hộ",
      image: "/assets/optimized/overview-marina.jpg",
    },
    {
      need: "Muốn căn hộ Nhà Bè gần Phú Mỹ Hưng, ngân sách từ khoảng 3 tỷ",
      project: "TT Genesis",
      href: "/tt-genesis",
      description: "Phù hợp khách đang tìm căn hộ Đào Sư Tích - Nhà Bè, cần so giá với Quận 7 và kiểm tra thời gian di chuyển thực tế.",
      accent: "Nhà Bè",
      image: "/assets/tt-genesis/vi-tri-tt-genesis.jpg",
    },
    {
      need: "Muốn căn hộ Quận 7 gần Phú Mỹ Hưng và wellness",
      project: "The Peak Garden",
      href: "/the-peak-garden",
      description: "Phù hợp khách ưu tiên vị trí Quận 7, tổng giá dễ tiếp cận hơn và muốn so với các lựa chọn khu Nam.",
      accent: "Quận 7",
      image: "/assets/the-peak-garden/the-peak-garden-hero.jpg",
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
      <section className="relative isolate flex min-h-[760px] overflow-hidden bg-[#10251c] px-5 pb-14 pt-32 text-white lg:min-h-[920px] lg:px-8">
        <div className="absolute inset-0 -z-10">
          <DeferredHeroMedia
            poster="/assets/eco-retreat/eco-retreat-hero.webp"
            mobilePoster="/assets/eco-retreat/eco-retreat-hero-mobile.webp"
            video="/assets/eco-retreat/eco-retreat-hero-video.mp4"
            mobileVideo="/assets/eco-retreat/eco-retreat-hero-video.mp4"
            label="Phối cảnh Eco Retreat Bến Lức Long An khu đô thị sinh thái"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08140f]/92 via-[#10251c]/58 to-[#10251c]/14" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08140f]/90 via-[#08140f]/20 to-[#08140f]/24" />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end">
          <MotionReveal className="max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4b87a]/35 bg-[#1c1b19]/45 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f0ddb0] md:text-xs md:shadow-lg md:shadow-black/20 md:backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-[#d4b87a]" />
              Saigon Living
            </p>
            <h1 className="hero-mobile-heading text-5xl font-light leading-[1.03] tracking-tight text-[#fffaf0] sm:text-6xl md:text-7xl md:drop-shadow-[0_10px_28px_rgba(0,0,0,0.42)] lg:text-[5rem]">
              Saigon Living
            </h1>
            <p className="font-display mt-4 max-w-3xl text-2xl font-light leading-[1.12] tracking-tight text-[#faf6f0]/92 sm:text-3xl md:text-4xl md:drop-shadow">
              Dự án đáng sống <span className="text-gradient-gold font-normal italic">Nam Sài Gòn</span> qua góc nhìn tư vấn.
            </p>
            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-[#faf6f0]/86 md:text-lg md:drop-shadow">
              Saigon Living tổng hợp dự án cao cấp, bảng giá, mặt bằng, pháp lý và phân tích vị trí để khách mua chọn đúng tài sản tại Nam Sài Gòn.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/eco-retreat" className="btn-luxury rounded-full bg-[#d4b87a] px-8 py-4 text-center text-sm font-bold text-[#1c1b19] shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#f0ddb0] md:px-9">
                Xem Eco Retreat
              </a>
              <LeadFormTrigger source="Saigon Living Hero" className="rounded-full border border-[#faf6f0]/35 bg-[#1c1b19]/32 px-8 py-4 text-center text-sm font-semibold text-[#faf6f0] shadow-lg shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[#faf6f0]/12 md:px-9">
                Nhận tư vấn dự án
              </LeadFormTrigger>
            </div>
          </MotionReveal>
        </div>
      </section>
      <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Dự án nổi bật"
            title="Dự án nổi bật khu Nam."
            description="Xem nhanh các dự án theo vị trí, giá bán, pháp lý và nhu cầu mua ở hoặc đầu tư."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {featuredProjects.map((item) => (
              <MotionReveal key={item.name}>
                <a href={item.href} className="luxury-card group block h-full overflow-hidden rounded-[2rem] p-0 transition hover:-translate-y-1 hover:border-[#c9a45d]">
                  <div className="relative aspect-[4/3] bg-[#15110c]">
                    <Image
                      src={item.image}
                      alt={`Phối cảnh dự án ${item.name} tại Nam Sài Gòn`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      quality={68}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/6 to-transparent" />
                    <p className="absolute bottom-4 left-4 rounded-full border border-white/18 bg-black/28 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                      {item.status}
                    </p>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-medium tracking-[-0.04em] text-[#15110c]">
                      {item.name}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[#5d554c]">{item.description}</p>
                  </div>
                </a>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
      <section className="bg-[#fbf8f2] px-5 py-24 text-[#15110c] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Chọn theo nhu cầu"
            title="Chọn dự án phù hợp nhu cầu của gia đình"
            description="Thay vì chỉ so giá bán, Saigon Living giúp Anh/Chị bắt đầu từ nhu cầu sống, bán kính di chuyển, ngân sách và thời gian nắm giữ để chọn đúng dự án nên xem trước."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {projectNeeds.map((item, index) => (
              <MotionReveal key={item.project} delay={index * 0.05}>
                <a href={item.href} className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#d9c79f]/60 bg-white shadow-[0_18px_60px_rgba(21,17,12,0.06)] transition hover:-translate-y-1 hover:border-[#c9a45d] hover:shadow-[0_24px_70px_rgba(21,17,12,0.12)]">
                  <div className="relative aspect-[4/3] bg-[#15110c]">
                    <Image
                      src={item.image}
                      alt={`${item.project} — dự án ${item.accent} khu Nam Sài Gòn`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      quality={68}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <p className="absolute bottom-4 left-4 rounded-full border border-white/18 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
                      {item.accent}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-medium tracking-[-0.04em] text-[#15110c]">
                      {item.need}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#5d554c]">{item.description}</p>
                    <p className="mt-auto pt-6 text-sm font-semibold text-[#8a6a2f] transition group-hover:text-[#15110c]">
                      Xem {item.project}
                    </p>
                  </div>
                </a>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
      <BlogPreview />
    </>
  );
}
