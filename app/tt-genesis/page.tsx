import type { Metadata } from "next";
import Image from "next/image";
import { DeferredHeroMedia } from "@/app/components/deferred-hero-media";
import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { ProjectInventoryLeadForm } from "@/app/components/project-inventory-lead-form";
import { LeadFormTrigger } from "@/app/components/lead-form-popup";
import { PROJECT_INVENTORY_CTA_LABEL, ProjectInventoryCta, INVENTORY_CTA_HERO_CLASS } from "@/app/components/project-inventory-cta";
import { MotionReveal } from "@/app/components/motion-reveal";
import { SectionIntro } from "@/app/components/site-sections";
import { media } from "@/app/lib/media";
import { absoluteUrl, siteConfig } from "@/app/lib/site";

const pageUrl = "/tt-genesis";
const heroImage = media.images.hero;
const heroVideo = "/assets/Video/hero-tt-genesis.mp4";
const locationImage = "/assets/tt-genesis/vi-tri-tt-genesis.jpg";

const projectFacts = [
  ["Tên dự án", "TT Genesis", "Căn hộ cao cấp phong cách Nhật tại khu Nam"],
  ["Vị trí", "Đào Sư Tích, Phước Kiển, Nhà Bè", "Kết nối Nguyễn Văn Linh, Phú Mỹ Hưng và trục Nam Sài Gòn"],
  ["Đơn vị phát triển", "TT Capital và liên doanh quốc tế", "TT Capital, Cosmos Initia, Hinokiya, Koterasu, Vietmax Capital"],
  ["Quy mô tham khảo", "Khoảng 1,9 ha", "Nguồn thị trường ghi nhận mật độ xây dựng khoảng 40%"],
  ["Sản phẩm", "Hơn 1.400 căn hộ", "Căn 1PN, 1PN+, 2PN, 3PN và sản phẩm thương mại"],
  ["Giá dự kiến", "Từ khoảng 2,8 tỷ/căn", "Cần cập nhật theo bảng giá chính thức từng đợt"],
];

const locationHighlights = [
  {
    title: "Trục Đào Sư Tích - Phước Kiển",
    text: "TT Genesis được giới thiệu tại khu vực Đào Sư Tích, Phước Kiển, Nhà Bè, một trục đang được khách mua khu Nam quan tâm nhờ bán kính kết nối Phú Mỹ Hưng và Nguyễn Văn Linh.",
  },
  {
    title: "Gần hệ tiện ích khu Nam",
    text: "Từ khu vực dự án có thể tiếp cận RMIT, Tôn Đức Thắng, trường quốc tế, FV, Tâm Đức, Lotte Mart, VivoCity và Crescent Mall trong bán kính di chuyển quen thuộc của cư dân khu Nam.",
  },
  {
    title: "Câu chuyện hạ tầng dài hạn",
    text: "Khu Nam còn được theo dõi nhờ Nguyễn Hữu Thọ, Lê Văn Lương, Nguyễn Văn Linh và các đề xuất hạ tầng tương lai. Người mua nên kiểm tra thời gian di chuyển thực tế theo giờ cao điểm.",
  },
];

const productTypes = [
  { label: "1PN", area: "Khoảng 40m2", price: "Từ khoảng 2,8 tỷ" },
  { label: "1PN+", area: "Khoảng 56m2", price: "Khoảng 2,8-3,1 tỷ" },
  { label: "2PN", area: "Khoảng 62-68m2", price: "Khoảng 3,9-4,5 tỷ" },
  { label: "3PN", area: "Khoảng 81m2", price: "Trên 5,5 tỷ" },
];

const amenityCards = [
  {
    title: "Wellness và chăm sóc sức khỏe",
    text: "Website TT Capital nhấn mạnh nhóm tiện ích sức khỏe như gym, spa, xông hơi, hồ khoáng nóng, không gian hồi phục và các khu thư giãn cho cư dân.",
    image: "/assets/tt-genesis/galaxy-pool-tt-genesis.jpg",
  },
  {
    title: "Không gian gia đình",
    text: "Các tiện ích như sân chơi trẻ em, thư viện, khu sinh hoạt cộng đồng, vườn thiền và mảng xanh giúp dự án tiếp cận nhóm gia đình trẻ tại khu Nam.",
    image: "/assets/tt-genesis/tien-ich-canh-quan-tt-genesis.jpg",
  },
  {
    title: "Phong cách Nhật Bản",
    text: "Điểm nhấn truyền thông của TT Genesis là liên doanh Việt Nam - Nhật Bản - Singapore và định hướng thiết kế tinh tế, tối ưu công năng căn hộ.",
    image: "/assets/tt-genesis/phong-yoga-tt-genesis.jpg",
  },
];

const realImages = [
  {
    title: "Tiến độ thực tế TT Genesis tháng 06/2026",
    image: "/assets/tt-genesis/tien-do-thuc-te-tt-genesis-dao-su-tich-01.png",
    text: "Ảnh flycam khu đất TT Genesis tại trục Đào Sư Tích, giúp người mua hình dung bối cảnh thực tế, ranh khu vực và kết nối xung quanh.",
  },
  {
    title: "Khu đất TT Genesis nhìn về Phú Mỹ Hưng",
    image: "/assets/tt-genesis/tien-do-thuc-te-tt-genesis-dao-su-tich-02.png",
    text: "Ảnh tiến độ thực tế cho thấy vị trí khu đất, mảng xanh và bán kính kết nối về cụm cao tầng Phú Mỹ Hưng - Nhà Bè.",
  },
  {
    title: "Không gian sông nước khu Nhà Bè",
    image: "/assets/tt-genesis/tt-genesis-thuc-te-song-nha-be.png",
    text: "Ảnh thực tế khu vực sông nước và mảng xanh quanh Nhà Bè, giúp hình dung bối cảnh sống phía Nam trước khi đọc sâu vị trí TT Genesis.",
  },
  {
    title: "Phối cảnh TT Genesis",
    image: "/assets/tt-genesis/phoi-canh-tt-genesis.jpg",
    text: "Ảnh phối cảnh dự án, dùng để hình dung ngôn ngữ kiến trúc và quy mô tháp.",
  },
  {
    title: "Hệ tiện ích nội khu",
    image: "/assets/tt-genesis/tien-ich-tt-genesis.jpg",
    text: "Minh họa hệ tiện ích xanh, wellness và các không gian sinh hoạt chung.",
  },
  {
    title: "Hồ bơi sắc màu",
    image: "/assets/tt-genesis/ho-boi-sac-mau-tt-genesis.jpg",
    text: "Một trong các hình ảnh tiện ích được dùng để truyền thông trải nghiệm nghỉ dưỡng tại nhà.",
  },
  {
    title: "Tham khảo chất lượng TT Avio",
    image: "/assets/tt-genesis/tt-avio-thuc-te-tt-genesis.jpg",
    text: "Ảnh liên quan TT Avio, dùng để tham khảo năng lực bàn giao trước đó của TT Capital.",
  },
];

const buyerNotes = [
  "Đối chiếu giá dự kiến với The Peak Garden, Vlasta Premier, Grand Sentosa, Sunshine Sky City và các căn hộ Quận 7 - Nhà Bè cùng ngân sách.",
  "Kiểm tra pháp lý, giấy phép, tiến độ công bố chính thức, ngân hàng hỗ trợ và chính sách thanh toán trước khi đặt chỗ.",
  "Đi thực tế trục Đào Sư Tích - Nguyễn Hữu Thọ - Nguyễn Văn Linh vào giờ cao điểm để đánh giá đúng thời gian di chuyển.",
  "So sánh loại căn 1PN+, 2PN và 3PN theo mục tiêu ở thật, cho thuê hay giữ tài sản trung hạn.",
];

const articleLinks = [
  {
    title: "TT Genesis: đừng nhìn mỗi giá 6x–7x",
    href: "/blog/tt-genesis-co-nen-mua-khong",
    description:
      "So bài toán tiền mặt thứ cấp (3,5–4 tỷ) với trả giãn TT Genesis — ai nên mua, ai bỏ qua.",
  },
  {
    title: "Tiến độ thanh toán TT Genesis",
    href: "/blog/thanh-toan-tt-genesis",
    description:
      "Vì sao trả ~10% đợt đầu và trả theo tiến độ có thể dễ thở hơn gom 3–4 tỷ mua nhà cũ cùng band giá.",
  },
  {
    title: "TT Genesis bàn giao khi nào?",
    href: "/blog/tt-genesis-ban-giao-khi-nao",
    description:
      "Dự kiến 2028–2029, Ricons thi công và bài toán có nên mua dự án đang xây thay vì nhà cũ bàn giao ngay.",
  },
  {
    title: "TT Genesis vs An Tiến & Silver Star",
    href: "/blog/tt-genesis-hay-hoang-anh-an-tien-silver-star",
    description:
      "So căn thứ cấp giá 4x–5x triệu/m² với TT Genesis thế hệ mới quanh 6x–7x — khác nhau ở dòng tiền và chính sách thanh toán.",
  },
  {
    title: "Giá căn 1PN TT Genesis 2026",
    href: "/blog/gia-can-1pn-tt-genesis-2026",
    description: "Tổng giá 2,9–3,5 tỷ, phù hợp ai và cách chọn căn 1PN/1PN+ trong ngân sách gọn.",
  },
  {
    title: "Giá TT Genesis 2026",
    href: "/blog/gia-tt-genesis-2026",
    description: "Bảng giá 1PN, 1PN+, 2PN, 3PN và cách đọc giá/m² so với Quận 7 và Phú Mỹ Hưng.",
  },
  {
    title: "TT Genesis có gì đặc biệt?",
    href: "/blog/tt-genesis-co-gi-dac-biet",
    description: "Vị trí Đào Sư Tích, tiện ích wellness, phong cách Nhật và vì sao khu Nam đang chú ý.",
  },
  {
    title: "Có 1–2 tỷ mua căn hộ Sài Gòn 2026?",
    href: "/blog/co-1-2-ty-mua-can-ho-sai-gon-2026",
    description: "Góc nhìn dòng tiền và vay khi vốn tự có còn gọn — hữu ích khi so TT Genesis với căn thứ cấp.",
  },
  {
    title: "So sánh Vlasta Premier và The Peak Garden",
    href: "/blog/so-sanh-vlasta-premier-the-peak-garden",
    description: "Mở rộng rổ so sánh nếu ngân sách trên 5–6 tỷ và muốn nâng phân khúc khu Nam.",
  },
];

const faqs = [
  {
    question: "TT Genesis ở đâu?",
    answer:
      "TT Genesis được giới thiệu tại khu vực Đào Sư Tích, Phước Kiển, Nhà Bè, TP.HCM, thuộc vùng kết nối khu Nam Sài Gòn, Phú Mỹ Hưng, Nguyễn Văn Linh và các tiện ích giáo dục - y tế quanh Quận 7.",
  },
  {
    question: "Giá TT Genesis dự kiến bao nhiêu?",
    answer:
      "Thông tin thị trường hiện ghi nhận giá dự kiến từ khoảng 2,8 tỷ/căn, với nhóm 1PN/1PN+ khoảng 2,8-3,1 tỷ, 2PN khoảng 3,9-4,5 tỷ và 3PN trên 5,5 tỷ. Giá thực tế cần cập nhật theo bảng giá chính thức từng đợt.",
  },
  {
    question: "TT Genesis nên so với dự án nào?",
    answer:
      "Nên so TT Genesis với các căn hộ khu Nam có cùng ngân sách và bán kính di chuyển như The Peak Garden, Vlasta Premier, Sunshine Sky City, Sunshine Diamond River, Grand Sentosa hoặc các dự án Nhà Bè - Quận 7 khác.",
  },
  {
    question: "Thông tin trên trang này có phải công bố chính thức không?",
    answer:
      "Không. Đây là trang tư vấn độc lập của Saigon Living, tổng hợp thông tin tham khảo trên thị trường để giúp người mua có checklist trước khi làm việc với đơn vị phân phối/chủ đầu tư.",
  },
];

export const metadata: Metadata = {
  title: "TT Genesis Nhà Bè 2026 | Giá từ 2,8 tỷ, trả theo tiến độ đến nhận nhà",
  description:
    "TT Genesis Đào Sư Tích — giá dự kiến từ 2,8 tỷ, thanh toán theo tiến độ xây dựng. Bảng giá 1PN–3PN, tiện ích wellness và form giữ chỗ.",
  keywords: [
    "TT Genesis",
    "TT Genesis Đào Sư Tích",
    "TT Genesis Nhà Bè",
    "giá TT Genesis",
    "căn hộ Đào Sư Tích",
    "căn hộ Nhà Bè",
  ],
  alternates: {
    canonical: absoluteUrl(pageUrl),
  },
  openGraph: {
    title: "TT Genesis Nhà Bè 2026 | Giá từ 2,8 tỷ, trả theo tiến độ đến nhận nhà",
    description:
      "TT Genesis Đào Sư Tích — giá từ 2,8 tỷ, trả theo tiến độ đến nhận nhà. Xem loại căn 1PN–3PN, tiện ích wellness và giữ chỗ trên Saigon Living.",
    url: absoluteUrl(pageUrl),
    images: [
      {
        url: absoluteUrl(heroImage),
        width: 1024,
        height: 576,
        alt: "Phối cảnh căn hộ TT Genesis Đào Sư Tích Nhà Bè khu Nam Sài Gòn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TT Genesis Đào Sư Tích 2026 | Giá từ 2,8 tỷ",
    description: "Trang tư vấn TT Genesis Nhà Bè theo vị trí Đào Sư Tích, giá dự kiến, loại căn và checklist người mua.",
    images: [absoluteUrl(heroImage)],
  },
};

export default function TTGenesisPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "TT Genesis",
      url: absoluteUrl(pageUrl),
      description: metadata.description,
      image: absoluteUrl(heroImage),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Đào Sư Tích",
        addressLocality: "Nhà Bè",
        addressRegion: "TP.HCM",
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
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Saigon Living",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "TT Genesis",
          item: absoluteUrl(pageUrl),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
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
      <section className="relative isolate overflow-hidden bg-[#171412] px-5 pb-16 pt-32 text-white lg:px-8 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-72">
            <DeferredHeroMedia
              poster={heroImage}
              video={heroVideo}
              label="TT Genesis Đào Sư Tích hero"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#171412]/78 via-[#171412]/42 to-[#171412]/8" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/74 via-[#171412]/10 to-[#171412]/22" />
        </div>
        <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <MotionReveal>
            <p className="inline-flex rounded-full border border-[#d4b87a]/35 bg-black/25 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f0ddb0] backdrop-blur">
              TT Genesis Đào Sư Tích
            </p>
            <h1 className="font-display mt-6 max-w-4xl text-5xl font-light leading-[1.03] tracking-[-0.05em] text-[#fffaf0] md:text-7xl">
              TT Genesis
            </h1>
            <p className="font-display mt-4 max-w-3xl text-2xl font-light leading-[1.12] tracking-tight text-[#faf6f0]/92 sm:text-3xl md:text-4xl">
              Căn hộ chuẩn Nhật tại cửa ngõ Nam Sài Gòn.
            </p>
            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-[#faf6f0]/86 md:text-lg">
              TT Genesis được giới thiệu tại Đào Sư Tích, Phước Kiển, Nhà Bè, với định hướng căn hộ cao cấp, tiện ích wellness và mức giá dự kiến từ khoảng 2,8 tỷ/căn.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LeadFormTrigger source="TT Genesis Hero" ctaLabel={PROJECT_INVENTORY_CTA_LABEL} className={INVENTORY_CTA_HERO_CLASS}>
                {PROJECT_INVENTORY_CTA_LABEL}
              </LeadFormTrigger>
              <Link href="#location" className="rounded-full border border-white/24 bg-white/10 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/16">
                Xem vị trí Đào Sư Tích
              </Link>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <div className="rounded-[2rem] border border-white/14 bg-white/[0.08] p-5 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f0ddb0]">Thông tin nhanh</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {projectFacts.slice(0, 4).map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/12 bg-black/18 p-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/54">{label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-5 py-24 text-[#15110c] lg:px-8" id="overview">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Tổng quan dự án"
            title="Tổng quan căn hộ TT Genesis tại Đào Sư Tích, Nhà Bè"
            description="TT Genesis phù hợp nhóm khách muốn căn hộ mới quanh Phú Mỹ Hưng - Nhà Bè. Trang này giúp bạn đọc nhanh các dữ liệu nền: vị trí, liên doanh phát triển, loại căn, mức giá dự kiến và những điểm cần kiểm tra trước khi giữ chỗ."
          />
          <div className="mt-14 overflow-hidden rounded-[2rem] border border-[#d9c79f]/60 bg-white">
            {projectFacts.map(([label, value, note]) => (
              <div key={label} className="grid gap-3 border-b border-[#eadfc7] p-5 last:border-b-0 md:grid-cols-[0.8fr_1fr_1.6fr] md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6a2f]">{label}</p>
                <p className="font-display text-2xl font-medium tracking-[-0.04em] text-[#15110c]">{value}</p>
                <p className="text-sm leading-7 text-[#5d554c]">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-[#15110c] lg:px-8" id="actual-photos">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Ảnh thực tế & phối cảnh"
            title="Ảnh thực tế và phối cảnh TT Genesis Nhà Bè"
            description="Ảnh tiến độ thực tế giúp đọc TT Genesis sát bối cảnh hơn. Các ảnh dưới đây gồm ảnh flycam tiến độ khu đất TT Genesis tháng 06/2026, ảnh thực tế khu vực Nhà Bè, phối cảnh dự án và tiện ích để đọc thêm bối cảnh phát triển."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {realImages.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <article className="luxury-card group h-full overflow-hidden rounded-[2rem]">
                  <div className="relative aspect-[16/10] bg-[#15110c]">
                    <Image
                      src={item.image}
                      alt={`Tiện ích ${item.title} TT Genesis Đào Sư Tích Nhà Bè`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-medium tracking-[-0.04em]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#5d554c]">{item.text}</p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-5 py-24 text-[#15110c] lg:px-8" id="location">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <MotionReveal>
            <SectionIntro
              eyebrow="Vị trí"
              title="Vị trí TT Genesis — kết nối khu Nam từ Đào Sư Tích"
              description="Đào Sư Tích là lớp vị trí đáng đọc kỹ trước khi so giá. Điểm mạnh của TT Genesis nằm ở bán kính kết nối khu Nam: Phú Mỹ Hưng, Nguyễn Văn Linh, trường quốc tế, bệnh viện và trung tâm thương mại. Điểm cần kiểm tra là thời gian di chuyển thực tế từ Nhà Bè về Quận 7, Quận 1 và khu làm việc hằng ngày."
            />
            <div className="mt-10 grid gap-4">
              {locationHighlights.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-[#d9c79f]/60 bg-[#fbf8f2] p-5">
                  <h3 className="font-display text-2xl font-medium tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5d554c]">{item.text}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <div className="overflow-hidden rounded-[2.25rem] border border-[#d9c79f]/60 bg-[#15110c]">
              <div className="relative aspect-[1.28]">
                <Image
                  src={locationImage}
                  alt="Sơ đồ vị trí TT Genesis Đào Sư Tích Nhà Bè"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="bg-[#15110c] p-5 text-sm leading-7 text-white/72">
                Ảnh vị trí dùng để tham khảo hướng kết nối. Người mua nên kiểm tra lại ranh dự án, đường vào thực tế và quy hoạch tại thời điểm giao dịch.
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-[#15110c] px-5 py-24 text-white lg:px-8" id="pricing">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f0ddb0]">Giá bán dự kiến</p>
            <div className="gold-divider mx-auto mt-4 w-28" />
            <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-balance text-white md:text-5xl">
              Giá bán dự kiến TT Genesis tại Nhà Bè
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              Mức giá trên thị trường hiện vẫn là thông tin dự kiến. Khi có bảng giá chính thức, cần đối chiếu tầng, view, diện tích, chính sách thanh toán, khoản vay và thời điểm bàn giao.
            </p>
          </MotionReveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {productTypes.map((item) => (
              <MotionReveal key={item.label}>
                <div className="h-full rounded-[2rem] border border-white/12 bg-white/[0.06] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f0ddb0]">{item.label}</p>
                  <h3 className="font-display mt-5 text-3xl font-medium tracking-[-0.04em]">{item.area}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/70">{item.price}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/58">
            Nên so tổng giá và dòng tiền với các dự án đang bán quanh khu Nam như Vlasta Premier, The Peak Garden, Grand Sentosa, Sunshine Sky City hoặc các lựa chọn Nhà Bè - Quận 7 cùng ngân sách.
          </p>
          <ProjectInventoryCta
            projectName="TT Genesis"
            source="TT Genesis Pricing CTA"
            variant="dark"
            className="mt-10"
            description="Saigon Living sẽ gửi 5 căn TT Genesis có giá và chính sách tốt nhất trong giỏ hàng tuần này — lọc theo loại căn và ngân sách từ khoảng 2,8 tỷ."
          />
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-5 py-24 text-[#15110c] lg:px-8" id="amenities">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Tiện ích & phong cách sống"
            title="Tiện ích wellness và phong cách sống TT Genesis"
            description="Wellness, gia đình và tinh thần Nhật Bản là ba lớp định vị chính. Với một dự án mới ở Đào Sư Tích, tiện ích nội khu và chất lượng vận hành sẽ là yếu tố quan trọng không kém giá bán ban đầu."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {amenityCards.map((item) => (
              <MotionReveal key={item.title}>
                <article className="luxury-card h-full overflow-hidden rounded-[2rem]">
                  <div className="relative aspect-[4/3] bg-[#15110c]">
                    <Image src={item.image} alt={`${item.title} tại căn hộ TT Genesis Đào Sư Tích Nhà Bè`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-medium tracking-[-0.04em]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#5d554c]">{item.text}</p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-[#15110c] lg:px-8" id="checklist">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <MotionReveal>
            <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-[#d9c79f]/60 bg-[#15110c]">
              <Image src="/assets/optimized/overview-marina.jpg" alt="Không gian ven nước tham khảo khi so sánh TT Genesis và căn hộ khu Nam" fill className="object-cover opacity-85" sizes="(max-width: 1024px) 100vw, 48vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
              <div className="absolute inset-x-7 bottom-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f0ddb0]">Checklist người mua</p>
                <h3 className="font-display mt-4 text-3xl font-medium tracking-[-0.04em]">Đừng chỉ đọc giá từ, hãy kiểm tra dòng tiền thật.</h3>
              </div>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <SectionIntro
              eyebrow="Góc nhìn tư vấn"
              title="Checklist trước khi chọn căn TT Genesis"
              description="TT Genesis cần được đặt cạnh rổ căn hộ khu Nam cùng ngân sách. Nếu bạn đang tìm căn hộ 2,8-5 tỷ quanh Quận 7 - Nhà Bè, điều quan trọng là so tổng giá, tiến độ thanh toán, khả năng vay, tiêu chuẩn bàn giao và độ thuận tiện đi làm hằng ngày."
            />
            <div className="mt-10 grid gap-4">
              {buyerNotes.map((note, index) => (
                <div key={note} className="rounded-[1.5rem] border border-[#d9c79f]/60 bg-[#fbf8f2] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6a2f]">Bước {index + 1}</p>
                  <p className="mt-3 leading-7 text-[#5d554c]">{note}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-5 py-24 text-[#15110c] lg:px-8" id="related">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">Đọc tiếp</p>
            <h2 id="related-heading" className="font-display mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] md:text-4xl">
              Đọc thêm các bài phân tích TT Genesis
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#5d554c]">
              So sánh với căn cũ Nhà Bè, đọc bảng giá từng loại căn và góc nhìn dòng tiền trước khi giữ chỗ hoặc chọn căn thứ cấp cùng ngân sách.
            </p>
          </MotionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {articleLinks.map((article, index) => (
              <MotionReveal key={article.href} delay={index * 0.04}>
                <Link
                  href={article.href}
                  className="block h-full rounded-[1.75rem] border border-[#d9c79f]/55 bg-white p-6 transition hover:-translate-y-1 hover:border-[#8a6a2f]/45 hover:shadow-xl hover:shadow-black/10"
                >
                  <h3 className="text-xl font-bold tracking-[-0.02em] text-[#15110c]">{article.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5d554c]">{article.description}</p>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e6] px-5 py-24 text-[#15110c] lg:px-8" id="contact">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">Giỏ hàng theo ngân sách</p>
            <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Nhận giỏ hàng TT Genesis phù hợp ngân sách
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5d554c]">
              Saigon Living sẽ gửi 5 căn TT Genesis có giá và chính sách tốt nhất, đồng thời so với Vlasta Premier, The Peak Garden và các dự án Quận 7 - Nhà Bè cùng ngân sách nếu bạn cần.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={siteConfig.contact.zalo} className="btn-luxury rounded-full bg-[#15110c] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8a6a2f]">
                Zalo
              </a>
              <a href={`tel:${siteConfig.contact.phone}`} className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-[#15110c]">
                Gọi điện
              </a>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <ProjectInventoryLeadForm variant="tt-genesis" />
          </MotionReveal>
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-5 py-10 text-[#15110c] lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-[#d9c79f]/60 bg-white/78 p-5 text-sm leading-7 text-[#5d554c]">
          <span className="font-semibold text-[#15110c]">Lưu ý thông tin:</span>{" "}
          Nội dung trên trang TT Genesis là thông tin tham khảo trên thị trường tại thời điểm cập nhật, không phải công bố chính thức về pháp lý, giá bán, chính sách thanh toán hoặc điều kiện giao dịch. Người mua nên đối chiếu lại với hồ sơ, bảng giá và chính sách chính thức trước khi đặt chỗ hoặc ký bất kỳ thỏa thuận nào.
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-[#15110c] lg:px-8" id="faq">
        <div className="mx-auto max-w-4xl">
          <SectionIntro
            eyebrow="FAQ"
            title="Những câu hỏi thường gặp về TT Genesis"
            description="Các câu trả lời dưới đây dùng để định hướng ban đầu, không thay thế hồ sơ pháp lý, bảng giá hoặc chính sách chính thức."
          />
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="luxury-card group rounded-3xl p-6">
                <summary className="cursor-pointer list-none text-xl font-semibold text-[#15110c]">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-[#5d554c]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
