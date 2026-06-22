import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { LeadFormTrigger } from "@/app/components/lead-form-popup";
import { PROJECT_INVENTORY_CTA_LABEL, ProjectInventoryCta, INVENTORY_CTA_HERO_CLASS } from "@/app/components/project-inventory-cta";
import { MotionReveal } from "@/app/components/motion-reveal";
import { ContactSection } from "@/app/components/site-sections";
import { absoluteUrl, siteConfig } from "@/app/lib/site";

const pageUrl = "/the-peak-garden";
const heroImage = "/assets/the-peak-garden/the-peak-garden-hero.jpg";
const comparisonImage = "/assets/the-peak-garden/the-peak-garden-overview.jpg";
const amenityImage = "/assets/the-peak-garden/the-peak-garden-sky-pool.jpg";
const lunaParkImage = "/assets/the-peak-garden/the-peak-garden-luna-park.jpg";
const typicalFloorImage = "/assets/the-peak-garden/the-peak-garden-mat-bang-tang-6-24.jpg";
const sampleApartmentImage = "/assets/the-peak-garden/the-peak-garden-can-ho-mau.jpg";

const quickStats = [
  { value: "Nguyễn Lương Bằng", label: "Trục vị trí chính" },
  { value: "Phú Mỹ Hưng", label: "Kề nhịp sống Quận 7" },
  { value: "Wellness", label: "Định vị căn hộ sức khỏe" },
  { value: "Tân Mỹ", label: "Gần ga metro tương lai" },
];

const fitCards = [
  {
    title: "Sống khỏe giữa đô thị",
    text: "The Peak Garden gợi một nhịp sống nhẹ hơn giữa Quận 7: có mảng xanh, mặt nước, hồ bơi, spa, onsen và những góc thư giãn ngay trong khu nhà.",
  },
  {
    title: "Liền kề Phú Mỹ Hưng",
    text: "Từ Nguyễn Lương Bằng, cư dân dễ chạm tới hệ tiện ích Phú Mỹ Hưng: trường học, bệnh viện, trung tâm thương mại, quán ăn và các dịch vụ hằng ngày.",
  },
  {
    title: "Gần ga Metro Tân Mỹ",
    text: "Khi tuyến Bến Thành - Cần Giờ hoàn thành, lợi thế gần ga Tân Mỹ có thể giúp việc đi về khu trung tâm TP.HCM thuận tiện hơn rất nhiều.",
  },
];

const factRows = [
  ["Cảm giác sống", "Một không gian wellness giữa Quận 7, hợp với người thích nhịp sống đô thị nhưng vẫn cần khoảng thở mỗi ngày"],
  ["Vị trí", "Nằm trên Nguyễn Lương Bằng, liền kề Phú Mỹ Hưng và gần ga Metro Tân Mỹ trong tương lai"],
  ["Phù hợp", "Người muốn sống gần tiện ích Quận 7, dễ đi làm, dễ đi học và vẫn có hệ tiện ích nội khu đủ đầy"],
  ["Điểm nhớ", "Công viên Luna Park, hồ Thiên Đường, hồ bơi Sky View, onsen, spa và các tiện ích chăm sóc sức khỏe"],
  ["Nên xem", "Chọn căn theo cảm giác ở thật: hướng nhìn, độ sáng, tầng, tiện ích thường dùng và tổng ngân sách phù hợp"],
];

const locationGroups = [
  {
    range: "0-5 phút",
    places: ["Nguyễn Văn Linh", "FV", "Tâm Đức", "UBND Quận 7", "Crescent Mall", "SECC"],
  },
  {
    range: "5-10 phút",
    places: ["RMIT", "Tôn Đức Thắng", "Cầu Phú Mỹ", "Lotte Mart", "SC VivoCity"],
  },
  {
    range: "10-20 phút",
    places: ["Chợ Bến Thành", "Bitexco", "Cao tốc Long Thành - Dầu Giây", "Cao tốc Bến Lức - Long Thành"],
  },
];

const amenityHighlights = [
  "Hồ bơi Sky View",
  "Công viên Luna Park hơn 6.000m2",
  "Hồ Thiên Đường hơn 3.000m2",
  "Hồ tắm khoáng nóng Onsen",
  "Spa & Sauna",
  "Detox & Organic Shop",
  "Smarthome",
  "An ninh 7 lớp",
  "BBQ Garden",
  "Đường dạo bộ trên mây",
];

const floorPlanCards = [
  {
    title: "Mặt bằng tầng 6-24",
    image: typicalFloorImage,
    alt: "Mặt bằng tầng 6-24 The Peak Garden Quận 7 tháp căn hộ wellness",
    text: "Mặt bằng giúp Anh/Chị hình dung cách các căn hộ được sắp xếp, khoảng cách di chuyển và cảm giác riêng tư trong mỗi tầng.",
  },
  {
    title: "Không gian căn hộ mẫu",
    image: sampleApartmentImage,
    alt: "Không gian căn hộ mẫu The Peak Garden Quận 7 gần Phú Mỹ Hưng",
    text: "Không gian mẫu giúp cảm nhận rõ hơn ánh sáng, cách bố trí nội thất và phong cách sống mà dự án đang hướng tới.",
  },
];

const comparisonRows = [
  ["Vị trí", "Gần Phú Mỹ Hưng, gần ga Metro Tân Mỹ tương lai", "Phú Thuận - Đào Trí, gần sông và kết nối khu Nam"],
  ["Cảm giác", "Đời sống Quận 7 rõ nét, tiện ích xung quanh đã quen thuộc", "Không gian mới, riêng tư hơn và định vị cao cấp hơn"],
  ["Ngân sách", "Dễ tiếp cận hơn trong rổ căn hộ cao cấp TP.HCM", "Cao hơn nhưng hợp với người ưu tiên trải nghiệm căn hộ"],
  ["Phù hợp", "Người thích vị trí thực dụng, gần Phú Mỹ Hưng và metro tương lai", "Người muốn căn hộ mới, thiết kế đẹp và nhịp sống chọn lọc hơn"],
];

const articleLinks = [
  {
    title: "Giá The Peak Garden 2026",
    href: "/blog/gia-the-peak-garden-2026",
    description: "Nhìn nhanh mặt bằng giá/m2, lợi thế gần Phú Mỹ Hưng, ga Metro Tân Mỹ và mức giá dễ tiếp cận.",
  },
  {
    title: "The Peak Garden có nên mua không?",
    href: "/blog/the-peak-garden-co-nen-mua-khong",
    description: "Góc nhìn nhẹ nhàng về ai hợp với The Peak Garden, điểm mạnh vị trí và tiện ích sống khỏe.",
  },
  {
    title: "The Peak Garden hưởng lợi gì từ Metro Bến Thành - Cần Giờ?",
    href: "/blog/the-peak-garden-huong-loi-metro-ben-thanh-can-gio",
    description: "Góc nhìn theo ga Tân Mỹ/Tân Thuận, Phú Mỹ Hưng và hạ tầng khu Nam.",
  },
  {
    title: "So sánh The Peak Garden, Belleza và Q7 Boulevard",
    href: "/blog/so-sanh-the-peak-garden-belleza-q7-boulevard",
    description: "Đặt ba lựa chọn Quận 7 cạnh nhau theo cảm giác sống, độ mới và nhu cầu gia đình.",
  },
  {
    title: "So sánh Vlasta Premier và The Peak Garden Quận 7",
    href: "/blog/so-sanh-vlasta-premier-the-peak-garden",
    description: "Một bài đọc ngắn để hiểu khác biệt giữa gần Phú Mỹ Hưng và trải nghiệm căn hộ cao cấp hơn.",
  },
  {
    title: "So sánh Mizuki Park, Vlasta Premier và The Peak Garden",
    href: "/blog/so-sanh-mizuki-vlasta-premier-the-peak-garden",
    description: "Đọc ba lựa chọn khu Nam theo nhịp sống: xanh, tiện lợi hay cao cấp hơn.",
  },
  {
    title: "So sánh Vlasta với Sunshine Sky City, Sunshine Diamond River và The Peak Garden",
    href: "/blog/so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden",
    description: "Góc nhìn rộng hơn cho khách đang lọc dự án quanh Quận 7 - khu Nam.",
  },
  {
    title: "Giá Vlasta Premier 2026",
    href: "/blog/gia-vlasta-premier-2026",
    description: "Dùng làm mốc tham khảo nếu Anh/Chị đang cân giữa The Peak Garden và Vlasta.",
  },
];

const faqs = [
  {
    question: "The Peak Garden phù hợp với ai?",
    answer:
      "The Peak Garden phù hợp với khách thích Quận 7, muốn ở gần Phú Mỹ Hưng, gần tiện ích hằng ngày và quan tâm thêm lợi thế ga Metro Tân Mỹ trong tương lai.",
  },
  {
    question: "Nên chọn The Peak Garden hay Vlasta Premier?",
    answer:
      "Nếu Anh/Chị thích gần Phú Mỹ Hưng, tiện ích Quận 7 và mức giá dễ vào hơn, The Peak Garden đáng xem. Nếu muốn cảm giác căn hộ mới, riêng tư và cao cấp hơn, Vlasta Premier nổi bật hơn.",
  },
  {
    question: "Có nên mua The Peak Garden để đầu tư không?",
    answer:
      "Có thể cân nhắc nếu Anh/Chị thích vị trí Quận 7 gần Phú Mỹ Hưng và tin vào câu chuyện metro tương lai. Dù vậy, vẫn nên chọn căn dễ ở, dễ cho thuê và phù hợp ngân sách.",
  },
  {
    question: "Nên xem gì khi đi thực tế?",
    answer:
      "Nên cảm nhận đường đi, tiện ích xung quanh, ánh sáng căn hộ, view, khoảng cách tới Phú Mỹ Hưng, hướng về ga Tân Mỹ và mức ngân sách mình thấy thoải mái.",
  },
];

function SourcedImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={1100}
        height={720}
        className="rounded-[2rem] border border-[#d9c79f]/55 object-cover shadow-[0_24px_70px_rgba(21,17,12,0.12)]"
      />
      <figcaption className="mt-3 text-xs leading-5 text-[#6b6258]">{caption}</figcaption>
    </figure>
  );
}

export const metadata: Metadata = {
  title: "The Peak Garden Quận 7 | Gần Phú Mỹ Hưng và Metro Tân Mỹ",
  description:
    "Trang tổng quan The Peak Garden Quận 7 gần Phú Mỹ Hưng, ga Metro Tân Mỹ, tiện ích wellness, mặt bằng giá và góc nhìn có nên mua.",
  keywords: [
    "The Peak Garden",
    "The Peak Garden Quận 7",
    "The Peak Garden Phú Mỹ Hưng",
    "giá The Peak Garden",
    "The Peak Garden Metro Tân Mỹ",
    "The Peak Garden có nên mua",
    "so sánh The Peak Garden và Vlasta Premier",
    "căn hộ Quận 7 gần Phú Mỹ Hưng",
  ],
  alternates: {
    canonical: absoluteUrl(pageUrl),
  },
  openGraph: {
    title: "The Peak Garden Quận 7 | Gần Phú Mỹ Hưng và Metro Tân Mỹ",
    description:
      "Góc nhìn mềm về The Peak Garden: vị trí gần Phú Mỹ Hưng, ga Metro Tân Mỹ, tiện ích wellness và cách đặt cạnh Vlasta Premier.",
    url: absoluteUrl(pageUrl),
    images: [
      {
        url: absoluteUrl(heroImage),
        width: 1024,
        height: 576,
        alt: "The Peak Garden Quận 7 và kết nối khu Nam Sài Gòn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Peak Garden Quận 7 | Gần Phú Mỹ Hưng và Metro Tân Mỹ",
    description: "Vị trí, tiện ích wellness, mặt bằng giá và góc nhìn có nên mua The Peak Garden.",
    images: [absoluteUrl(heroImage)],
  },
};

export default function ThePeakGardenPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "The Peak Garden Quận 7",
      url: absoluteUrl(pageUrl),
      inLanguage: "vi-VN",
      description: metadata.description,
      publisher: {
        "@type": "RealEstateAgent",
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
      },
      about: ["The Peak Garden", "căn hộ Quận 7", "bất động sản Nam Sài Gòn"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Saigon Living", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "The Peak Garden", item: absoluteUrl(pageUrl) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="relative isolate overflow-hidden bg-[#15110c] px-5 pb-24 pt-40 text-white lg:px-8">
        <div className="absolute inset-0 -z-10">
          <Image src={heroImage} alt="Phối cảnh The Peak Garden Quận 7 gần Phú Mỹ Hưng" fill priority className="object-cover opacity-70" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#15110c]/82 via-[#15110c]/48 to-[#3a2712]/36" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#f0ddb0]">The Peak Garden Quận 7</p>
            <h1 className="font-display mt-6 max-w-5xl text-5xl font-medium tracking-[-0.055em] text-balance md:text-7xl">
              The Peak Garden
            </h1>
            <p className="mt-4 max-w-4xl text-lg font-medium leading-8 text-[#f7ead1] md:text-xl">
              Thanh lọc cơ thể, bảo vệ sức khỏe, khơi nguồn năng lượng sống.
            </p>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#f7ead1]">
              The Peak Garden là căn hộ wellness tại Quận 7, gần Phú Mỹ Hưng và ga Metro Tân Mỹ tương lai, dành cho người muốn sống tiện lợi nhưng vẫn có khoảng thở xanh mỗi ngày.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <LeadFormTrigger
                source="The Peak Garden Hero CTA"
                ctaLabel={PROJECT_INVENTORY_CTA_LABEL}
                className={INVENTORY_CTA_HERO_CLASS}
              >
                {PROJECT_INVENTORY_CTA_LABEL}
              </LeadFormTrigger>
              <Link href="#amenities" className="rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#f0ddb0] hover:bg-white/10">
                Cảm nhận không gian sống
              </Link>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <div className="grid gap-3 rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:grid-cols-2">
              {quickStats.map((item) => (
                <div key={item.label} className="rounded-[1.4rem] border border-white/10 bg-black/18 p-5">
                  <p className="font-display text-3xl font-medium text-[#f0ddb0]">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#f7ead1]">{item.label}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-5 py-20 text-[#15110c] lg:px-8" id="overview">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">Concept dự án</p>
            <h2 id="overview-heading" className="font-display mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] md:text-4xl">
              Concept wellness và phong cách sống The Peak Garden
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5d554c]">
              The Peak Garden nên được cảm nhận trước hết như một không gian wellness giữa nhịp sống Quận 7.
            </p>
          </MotionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {fitCards.map((card, index) => (
              <MotionReveal key={card.title} delay={index * 0.05}>
                <div className="h-full rounded-[1.75rem] border border-[#d9c79f]/55 bg-white p-6 shadow-[0_20px_60px_rgba(21,17,12,0.08)]">
                  <h3 className="text-xl font-bold tracking-[-0.02em]">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5d554c]">{card.text}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#15110c] lg:px-8" id="facts">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <MotionReveal>
            <SourcedImage
              src={comparisonImage}
              alt="Phối cảnh tổng quan The Peak Garden Quận 7 gần Phú Mỹ Hưng"
              caption="Phối cảnh The Peak Garden giúp hình dung định vị căn hộ cao cấp khu Nam."
            />
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">Điểm chạm đáng nhớ</p>
            <h2 id="facts-heading" className="font-display mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
              Thông tin nhanh về The Peak Garden Quận 7
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5d554c]">
              The Peak Garden đáng nhớ ở vị trí Quận 7, nhịp sống Phú Mỹ Hưng và câu chuyện metro tương lai.
            </p>
            <div className="mt-8 divide-y divide-[#d9c79f]/50 rounded-[1.5rem] border border-[#d9c79f]/55 bg-[#fbf8f2]">
              {factRows.map(([label, value]) => (
                <div key={label} className="grid gap-2 p-5 md:grid-cols-[0.32fr_0.68fr]">
                  <p className="font-semibold text-[#15110c]">{label}</p>
                  <p className="text-sm leading-7 text-[#5d554c]">{value}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-[#f7f1e6] px-5 py-20 text-[#15110c] lg:px-8" id="location">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">Vị trí Nguyễn Lương Bằng</p>
            <h2 id="location-heading" className="font-display mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] md:text-4xl">
              Vị trí The Peak Garden trên Nguyễn Lương Bằng, Quận 7
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#5d554c]">
              Ở The Peak Garden, lợi thế lớn là sống gần Phú Mỹ Hưng và đón thêm kết nối Metro Tân Mỹ trong tương lai. Từ trục Nguyễn Lương Bằng, cư dân dễ tiếp cận trường học, bệnh viện, trung tâm thương mại, nhà hàng và nhịp sống quen thuộc của Quận 7. Khi tuyến Metro Bến Thành - Cần Giờ hoàn thành, ga Tân Mỹ có thể trở thành một điểm cộng lớn cho việc đi về khu trung tâm TP.HCM.
            </p>
          </MotionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {locationGroups.map((group) => (
              <MotionReveal key={group.range}>
                <div className="h-full rounded-[1.75rem] border border-[#d9c79f]/55 bg-white p-6 shadow-[0_20px_60px_rgba(21,17,12,0.08)]">
                  <h3 className="font-display text-2xl font-medium text-[#8a6a2f]">{group.range}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.places.map((place) => (
                      <span key={place} className="rounded-full bg-[#fbf8f2] px-3 py-1.5 text-xs font-medium text-[#5d554c]">
                        {place}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#15110c] lg:px-8" id="amenities">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">Wellness Apartment</p>
            <h2 id="amenities-heading" className="font-display mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
              Tiện ích wellness nội khu The Peak Garden
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5d554c]">
              Thay vì chỉ là nơi để về ngủ, dự án hướng tới một nhịp sống thư giãn hơn: bơi, đi dạo, chăm sóc cơ thể, gặp gỡ bạn bè và có những khoảng nghỉ nhỏ ngay trong ngày.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {amenityHighlights.map((amenity) => (
                <span key={amenity} className="rounded-full border border-[#d9c79f]/55 bg-[#fbf8f2] px-4 py-2 text-sm text-[#5d554c]">
                  {amenity}
                </span>
              ))}
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <SourcedImage
              src={lunaParkImage}
              alt="Công viên Luna Park 6000m2 The Peak Garden Quận 7"
              caption="Công viên Luna Park là một trong các điểm nhấn trong câu chuyện sống xanh của The Peak Garden."
            />
          </MotionReveal>
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-5 py-20 text-[#15110c] lg:px-8" id="floorplans">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">Không gian tham khảo</p>
            <h2 id="floorplans-heading" className="font-display mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] md:text-4xl">
              Mặt bằng và căn hộ mẫu tại The Peak Garden
            </h2>
          </MotionReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {floorPlanCards.map((card) => (
              <MotionReveal key={card.title}>
                <div className="rounded-[2rem] border border-[#d9c79f]/55 bg-white p-4 shadow-[0_24px_70px_rgba(21,17,12,0.08)]">
                  <SourcedImage src={card.image} alt={card.alt} caption={card.title} />
                  <h3 className="mt-5 px-2 text-xl font-bold tracking-[-0.02em]">{card.title}</h3>
                  <p className="mt-3 px-2 pb-2 text-sm leading-7 text-[#5d554c]">{card.text}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e6] px-5 py-20 text-[#15110c] lg:px-8" id="comparison">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">Đặt cạnh Vlasta</p>
            <h2 id="comparison-heading" className="font-display mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] md:text-4xl">
              So sánh The Peak Garden với Vlasta Premier cùng khu vực
            </h2>
          </MotionReveal>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#d9c79f]/55 bg-white shadow-[0_24px_70px_rgba(21,17,12,0.08)]">
            <div className="grid bg-[#15110c] text-sm font-semibold text-white md:grid-cols-[0.23fr_0.385fr_0.385fr]">
              <div className="p-5">Tiêu chí</div>
              <div className="p-5">The Peak Garden</div>
              <div className="p-5">Vlasta Premier</div>
            </div>
            {comparisonRows.map(([label, peak, vlasta]) => (
              <div key={label} className="grid border-t border-[#d9c79f]/45 text-sm leading-7 md:grid-cols-[0.23fr_0.385fr_0.385fr]">
                <div className="bg-[#fbf8f2] p-5 font-semibold text-[#15110c]">{label}</div>
                <div className="p-5 text-[#5d554c]">{peak}</div>
                <div className="p-5 text-[#5d554c]">{vlasta}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <LeadFormTrigger
              source="The Peak Garden Comparison CTA"
              className="rounded-full bg-[#15110c] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8a6a2f]"
            >
              Nhờ tư vấn chọn dự án hợp hơn
            </LeadFormTrigger>
            <Link href="/vlasta-premier" className="rounded-full border border-[#15110c]/20 px-7 py-4 text-sm font-semibold text-[#15110c] transition hover:border-[#8a6a2f] hover:text-[#8a6a2f]">
              Xem Vlasta Premier
            </Link>
          </div>
          <ProjectInventoryCta
            projectName="The Peak Garden"
            source="The Peak Garden Pricing CTA"
            className="mt-10"
            description="Saigon Living sẽ gửi 5 căn The Peak Garden có giá và chính sách tốt nhất trong giỏ hàng tuần này — lọc theo tầng, view và ngân sách Anh/Chị đang cân nhắc."
          />
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#15110c] lg:px-8" id="site-visit">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">Khi đi xem thực tế</p>
            <h2 id="site-visit-heading" className="font-display mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
              Khảo sát thực tế trước khi chọn căn The Peak Garden
            </h2>
            <div className="mt-7 space-y-4 text-base leading-8 text-[#5d554c]">
              <p>
                Với The Peak Garden, nên đi từ trải nghiệm rất đời thường: sáng đi làm có tiện không, con đi học có gần không, cuối tuần có dễ dùng tiện ích Phú Mỹ Hưng không, và mình có thật sự thích không gian wellness của dự án không.
              </p>
              <p>
                Nếu đặt cạnh Vlasta Premier, hãy xem mình thích nhịp sống nào hơn: gần trung tâm tiện ích Quận 7 và metro tương lai, hay một sản phẩm mới hơn, riêng tư hơn và mang cảm giác cao cấp hơn.
              </p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <SourcedImage
              src={amenityImage}
              alt="Hồ bơi Sky View wellness The Peak Garden Quận 7"
              caption="Hồ bơi Sky View là tiện ích tạo điểm nhớ trong định vị wellness của The Peak Garden."
            />
          </MotionReveal>
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-5 py-20 text-[#15110c] lg:px-8" id="related">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">Đọc tiếp</p>
            <h2 id="related-heading" className="font-display mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] md:text-4xl">
              Đọc thêm các bài phân tích The Peak Garden
            </h2>
          </MotionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {articleLinks.map((article) => (
              <Link key={article.href} href={article.href} className="rounded-[1.75rem] border border-[#d9c79f]/55 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
                <h3 className="text-xl font-bold tracking-[-0.02em]">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5d554c]">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#15110c] lg:px-8" id="faq">
        <div className="mx-auto max-w-4xl">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">FAQ</p>
            <h2 id="faq-heading" className="font-display mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
              Những câu hỏi thường gặp về The Peak Garden
            </h2>
          </MotionReveal>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-[1.5rem] border border-[#d9c79f]/55 bg-[#fbf8f2] p-6">
                <summary className="cursor-pointer list-none">
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-[#15110c]">{faq.question}</h3>
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#5d554c]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection variant="the-peak-garden" />
    </>
  );
}
