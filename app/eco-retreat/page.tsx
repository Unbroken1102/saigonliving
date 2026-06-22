import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { LeadFormTrigger } from "@/app/components/lead-form-popup";
import { PROJECT_INVENTORY_CTA_LABEL, ProjectInventoryCta, INVENTORY_CTA_HERO_CLASS } from "@/app/components/project-inventory-cta";
import { MotionReveal } from "@/app/components/motion-reveal";
import { ContactSection } from "@/app/components/site-sections";
import { absoluteUrl, siteConfig } from "@/app/lib/site";

const pageUrl = "/eco-retreat";
const assetBase = "/assets/eco-retreat";
const heroVideo = `${assetBase}/eco-retreat-hero-video.mp4`;

const images = {
  hero: `${assetBase}/eco-retreat-hero.webp`,
  location: `${assetBase}/eco-retreat-vi-tri.webp`,
  water: `${assetBase}/eco-retreat-mat-nuoc.webp`,
  amenityPlan: `${assetBase}/eco-retreat-mat-bang-tien-ich.webp`,
  retreatCircle: `${assetBase}/eco-retreat-retreat-circle.webp`,
  swanLake: `${assetBase}/eco-retreat-ho-thien-nga.webp`,
  landscape: `${assetBase}/eco-retreat-canh-quan-xanh.webp`,
  products: `${assetBase}/eco-retreat-san-pham.webp`,
  townhouse: `${assetBase}/eco-retreat-nha-pho.webp`,
  villa: `${assetBase}/eco-retreat-villa-don-lap.webp`,
};

const quickStats = [
  { value: "220,05ha", label: "Quy mô khu đô thị" },
  { value: "121ha", label: "Cảnh quan xanh" },
  { value: "23ha", label: "Mặt nước sinh thái" },
  { value: "19,5%", label: "Mật độ nhà ở" },
];

const factRows = [
  ["Tên dự án", "Eco Retreat"],
  ["Vị trí", "Đường Nguyễn Hữu Trí, xã Thanh Phú, huyện Bến Lức, tỉnh Long An"],
  ["Đơn vị phát triển", "Tập đoàn Ecopark"],
  ["Quy mô", "Khoảng 220,05 ha"],
  ["Cảnh quan", "121 ha, tương đương khoảng 55% tổng diện tích, với 4 triệu cây và hoa"],
  ["Hạ tầng & tiện ích", "56 ha, tương đương khoảng 25,5% tổng diện tích"],
  ["Loại hình", "Townhouse, Town Villa, Villa, Shophouse, Shop Villa; có thông tin căn hộ trong tổng thể"],
  ["Bàn giao", "Hoàn thiện mặt ngoài, thô bên trong"],
  ["Sở hữu", "Lâu dài với khách hàng Việt Nam; 50 năm với khách hàng nước ngoài"],
  ["Khởi công", "Quý 1/2025"],
];

const locationLinks = [
  "Cao tốc TP.HCM - Trung Lương",
  "Cao tốc Bến Lức - Long Thành",
  "Quốc lộ 1A mở rộng",
  "Vành đai 3",
  "Trục Nguyễn Hữu Trí",
  "Các nút giao Mỹ Yên, QL1A - Võ Văn Kiệt, QL1A - Nguyễn Văn Linh",
];

const amenityGroups = [
  {
    title: "Retreat Circle 50ha",
    text: "Trái tim cảnh quan với 20 khu vườn chủ đề, được định vị như hành trình tản bộ, nghỉ dưỡng và phục hồi năng lượng mỗi ngày.",
  },
  {
    title: "23ha mặt nước",
    text: "Bao gồm Hồ Thiên Nga khoảng 12ha và Retreat River khoảng 11ha, tạo lớp vi khí hậu và điểm nhấn sinh thái cho toàn khu.",
  },
  {
    title: "Không gian sống xanh",
    text: "121ha cảnh quan, 4 triệu cây và hoa, 8 tầng thực vật; nhà ở chỉ chiếm khoảng 19,5% tổng diện tích.",
  },
  {
    title: "Tiện ích vận hành hằng ngày",
    text: "Tropical Clubhouse, Forest Clubhouse, Island Clubhouse, Zen Clubhouse, Retreat Center, Eco Bazaar, Eco Bus, trường học, phòng khám, thương mại khối đế và công viên thể thao.",
  },
];

const productCards = [
  {
    title: "Townhouse",
    image: images.townhouse,
    text: "Dòng nhà phố dành cho khách muốn tài sản thấp tầng, dễ khai thác ở thực hoặc kinh doanh trong khu đô thị sinh thái.",
  },
  {
    title: "Town Villa",
    image: images.products,
    text: "Cân bằng giữa cảm giác biệt thự, mặt tiền thoáng và ngân sách dễ kiểm soát hơn villa lớn.",
  },
  {
    title: "Villa song lập / đơn lập",
    image: images.villa,
    text: "Phù hợp nhóm khách ưu tiên riêng tư, không gian vườn và trải nghiệm nghỉ dưỡng dài hạn.",
  },
  {
    title: "Shophouse / Shop Villa",
    image: images.water,
    text: "Dành cho khách quan tâm dòng sản phẩm thương mại, cần kiểm tra lưu lượng cư dân, vị trí trục chính và thời gian vận hành khu đô thị.",
  },
];

const strategyCards = [
  {
    title: "Người mua ở thật",
    text: "Eco Retreat đáng xem nếu Anh/Chị muốn không gian thấp tầng, nhiều mảng xanh, tách khỏi mật độ trung tâm nhưng vẫn có trục kết nối về TP.HCM.",
  },
  {
    title: "Nhà đầu tư dài hạn",
    text: "Luận điểm nằm ở chu kỳ phát triển cửa ngõ Tây Sài Gòn, hạ tầng liên vùng và khả năng hình thành cộng đồng cư dân thực, không nên chỉ mua vì tin đồn sóng ngắn.",
  },
  {
    title: "Khách so sánh khu Nam",
    text: "Nên đặt Eco Retreat cạnh Mizuki Park, Vinhomes Bình Chánh và các dự án Long An theo tiêu chí: khoảng cách, pháp lý, thanh toán, loại hình thấp tầng và khả năng khai thác sau bàn giao.",
  },
];

const actualImages = [
  {
    src: `${assetBase}/eco-retreat-thuc-te-01.jpg`,
    alt: "Flycam công trường Eco Retreat Bến Lức Long An đang thi công",
    caption: "Góc flycam khu vực đang thi công, cho thấy quy mô hạ tầng và các dãy sản phẩm đang hình thành.",
  },
  {
    src: `${assetBase}/eco-retreat-thuc-te-02.jpg`,
    alt: "Flycam mặt nước và phân khu Eco Retreat Bến Lức Long An",
    caption: "Mặt nước nội khu và các cụm thấp tầng nhìn từ trên cao.",
  },
  {
    src: `${assetBase}/eco-retreat-thuc-te-04.jpg`,
    alt: "Hạ tầng nội khu Eco Retreat Bến Lức Long An thực tế",
    caption: "Các trục đường, dãy nhà và cảnh quan đang được triển khai theo tổng thể khu đô thị.",
  },
  {
    src: `${assetBase}/eco-retreat-thuc-te-07.jpg`,
    alt: "Toàn cảnh flycam Eco Retreat Bến Lức Long An 220ha",
    caption: "Toàn cảnh khu vực dự án, phù hợp để hình dung khoảng cách giữa mặt nước, trục đường và sản phẩm.",
  },
  {
    src: `${assetBase}/eco-retreat-thuc-te-14.jpg`,
    alt: "Cảnh quan ven hồ Eco Retreat Bến Lức Long An thực tế",
    caption: "Góc nhìn ven hồ và mảng xanh hiện hữu quanh khu vực triển khai.",
  },
  {
    src: `${assetBase}/eco-retreat-thuc-te-sa-ban.jpg`,
    alt: "Sa bàn Eco Retreat Bến Lức Long An mặt bằng tổng thể",
    caption: "Ảnh sa bàn/không gian giới thiệu dự án, dùng để đối chiếu với mặt bằng và phối cảnh tổng thể.",
  },
];

const priceCards = [
  {
    type: "Căn hộ",
    price: "Từ 1,8 tỷ",
    note: "Dòng sản phẩm dễ tiếp cận nhất, phù hợp khách muốn vào Eco Retreat với ngân sách gọn.",
  },
  {
    type: "Nhà phố",
    price: "Từ 5 tỷ",
    note: "Phù hợp khách muốn tài sản thấp tầng, có thể ở, giữ dài hạn hoặc khai thác linh hoạt.",
  },
  {
    type: "Song lập",
    price: "Từ 9 tỷ",
    note: "Cân bằng giữa không gian biệt thự, sân vườn và tổng ngân sách dễ kiểm soát hơn biệt thự lớn.",
  },
  {
    type: "Shophouse",
    price: "Từ 12 tỷ",
    note: "Dành cho khách quan tâm vị trí thương mại, cần so kỹ trục đường, lưu lượng cư dân và thời điểm vận hành.",
  },
  {
    type: "Biệt thự rừng",
    price: "Từ 15 tỷ",
    note: "Dòng sản phẩm nhấn mạnh không gian riêng tư, mảng xanh và trải nghiệm nghỉ dưỡng trong nội khu.",
  },
  {
    type: "Biệt thự đảo",
    price: "Từ 16 tỷ",
    note: "Sản phẩm cao cấp hơn, nên kiểm tra kỹ vị trí đảo, view nước, diện tích đất và tiêu chuẩn bàn giao.",
  },
];

const relatedLinks = [
  {
    title: "Eco Retreat có nên mua không?",
    href: "/blog/eco-retreat-co-nen-mua-khong",
    description: "Phân tích điểm mạnh cốt lõi của hệ sinh thái sống xanh, tài chính phù hợp và tầm nhìn 3-5 năm.",
  },
  {
    title: "Giá Eco Retreat 2026",
    href: "/blog/gia-eco-retreat-2026",
    description: "Đọc giỏ hàng căn hộ, nhà phố, biệt thự và shophouse theo dữ liệu thị trường tham khảo.",
  },
  {
    title: "Vị trí Eco Retreat Bến Lức",
    href: "/blog/vi-tri-eco-retreat-ben-luc-co-xa-khong",
    description: "Cách đọc vị trí Eco Retreat như một retreat cửa ngõ Tây Sài Gòn, không chỉ bằng số km đến trung tâm.",
  },
  {
    title: "Nhà phố Eco Retreat từ 5 tỷ",
    href: "/blog/nha-pho-eco-retreat-tu-5-ty-co-dang-mua-khong",
    description: "Vì sao nhà phố 5-7 tỷ là cửa vào thấp tầng cạnh tranh trong một đô thị retreat.",
  },
  {
    title: "So sánh Eco Retreat và Mizuki Park",
    href: "/blog/so-sanh-eco-retreat-mizuki-park",
    description: "So phiên bản retreat sâu hơn với khu đô thị xanh đã vận hành gần trung tâm hơn.",
  },
  {
    title: "Mizuki Park Bình Chánh",
    href: "/mizuki-park",
    description: "Khu đô thị Nam Long đã có cư dân, phù hợp để so với Eco Retreat theo mức độ vận hành thật.",
  },
  {
    title: "Vinhomes Bình Chánh",
    href: "/vinhomes-binh-chanh",
    description: "Theo dõi đại đô thị phía Tây Nam TP.HCM và tác động đến dòng tiền khu Bình Chánh - Long An.",
  },
  {
    title: "Nhà ở xã hội trong khu đô thị lớn",
    href: "/blog/nha-o-xa-hoi-trong-khu-do-thi-lon-nam-long-mizuki-hung-long",
    description: "Góc nhìn về cấu trúc cư dân, tiện ích và sức sống thật của một khu đô thị quy mô lớn.",
  },
];

const faqs = [
  {
    question: "Eco Retreat ở đâu?",
    answer:
      "Eco Retreat tọa lạc trên đường Nguyễn Hữu Trí, xã Thanh Phú, huyện Bến Lức, tỉnh Long An, thuộc cửa ngõ phía Tây TP.HCM.",
  },
  {
    question: "Eco Retreat có quy mô bao nhiêu?",
    answer:
      "Eco Retreat có quy mô khoảng 220,05ha, trong đó khoảng 121ha dành cho cảnh quan xanh và 56ha cho hạ tầng, tiện ích.",
  },
  {
    question: "Eco Retreat phù hợp mua ở hay đầu tư?",
    answer:
      "Dự án phù hợp với khách muốn không gian sống xanh, thấp tầng và có tầm nhìn dài hạn ở khu Tây Sài Gòn - Long An. Với đầu tư, cần kiểm tra giá vào, pháp lý, tiến độ, chính sách thanh toán và khả năng vận hành cộng đồng cư dân sau bàn giao.",
  },
  {
    question: "Nên so Eco Retreat với dự án nào?",
    answer:
      "Có thể so với Mizuki Park, Vinhomes Bình Chánh và các dự án thấp tầng Long An theo vị trí, thời gian di chuyển, quy mô cảnh quan, pháp lý, dòng tiền và mức độ hình thành tiện ích thật.",
  },
];

function SourcedImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={820}
        className="h-full w-full rounded-[2rem] border border-[#d9c79f]/55 object-cover shadow-[0_24px_70px_rgba(21,17,12,0.12)]"
      />
      <figcaption className="mt-3 text-xs leading-5 text-[#6b6258]">{caption}</figcaption>
    </figure>
  );
}

function EcoCtaBand({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  source,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary: string;
  secondary?: string;
  source: string;
  dark?: boolean;
}) {
  return (
    <MotionReveal>
      <div className={`rounded-[2rem] border p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8 ${dark ? "border-white/12 bg-white/[0.08] text-white" : "border-[#d9c79f]/60 bg-white text-[#10251c] shadow-[0_18px_60px_rgba(21,17,12,0.08)]"}`}>
        <div className="max-w-2xl">
          <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${dark ? "text-[#d8efae]" : "text-[#6f7f3f]"}`}>{eyebrow}</p>
          <h3 className="font-display mt-3 text-3xl font-medium tracking-[-0.04em] md:text-4xl">{title}</h3>
          <p className={`mt-3 text-sm leading-7 ${dark ? "text-white/72" : "text-[#5d554c]"}`}>{description}</p>
        </div>
        <div className={`mt-6 shrink-0 md:mt-0 ${secondary ? "flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row" : ""}`}>
          <LeadFormTrigger source={`${source} - ${primary}`} ctaLabel={primary} className={`rounded-full px-6 py-3 text-center text-sm font-bold transition hover:-translate-y-0.5 ${dark ? "bg-[#d8efae] text-[#10251c] hover:bg-[#f0ffd4]" : "bg-[#10251c] text-white hover:bg-[#6f7f3f]"}`}>
            {primary}
          </LeadFormTrigger>
          {secondary ? (
            <LeadFormTrigger source={`${source} - ${secondary}`} ctaLabel={secondary} className={`rounded-full border px-6 py-3 text-center text-sm font-semibold transition hover:-translate-y-0.5 ${dark ? "border-white/20 bg-white/10 text-white hover:bg-white/16" : "border-[#10251c]/15 bg-[#f7f1e6] text-[#10251c] hover:border-[#6f7f3f]"}`}>
              {secondary}
            </LeadFormTrigger>
          ) : null}
        </div>
      </div>
    </MotionReveal>
  );
}

export const metadata: Metadata = {
  title: "Eco Retreat Long An 2026 | Giá bán, vị trí Bến Lức, có nên mua",
  description:
    "Trang tư vấn Eco Retreat Long An 2026: vị trí Bến Lức, giá bán căn hộ/nhà phố/biệt thự, quy mô 220ha, tiện ích retreat và góc nhìn có nên mua.",
  keywords: [
    "Eco Retreat",
    "Eco Retreat Long An",
    "Eco Retreat Bến Lức",
    "Eco Retreat Ecopark",
    "giá Eco Retreat",
    "Eco Retreat có nên mua",
    "vị trí Eco Retreat",
    "mặt bằng Eco Retreat",
    "biệt thự Eco Retreat",
  ],
  alternates: {
    canonical: absoluteUrl(pageUrl),
  },
  openGraph: {
    title: "Eco Retreat Long An 2026 | Giá bán, vị trí Bến Lức, có nên mua",
    description:
      "Tổng hợp Eco Retreat theo vị trí, quy mô, tiện ích sinh thái, loại hình sản phẩm và các điểm cần kiểm tra trước khi mua.",
    url: absoluteUrl(pageUrl),
    images: [
      {
        url: absoluteUrl(images.hero),
        width: 1200,
        height: 743,
        alt: "Phối cảnh Eco Retreat Bến Lức Long An khu đô thị sinh thái 220ha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco Retreat Long An 2026 | Giá bán và có nên mua",
    description: "Trang tư vấn Eco Retreat: vị trí Bến Lức, giá bán, quy mô 220ha, tiện ích và sản phẩm thấp tầng.",
    images: [absoluteUrl(images.hero)],
  },
};

export default function EcoRetreatPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Eco Retreat Long An",
      url: absoluteUrl(pageUrl),
      inLanguage: "vi-VN",
      description: metadata.description,
      publisher: {
        "@type": "RealEstateAgent",
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
      },
      about: ["Eco Retreat", "Eco Retreat Long An", "bất động sản Bến Lức", "đô thị sinh thái Long An"],
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
      <section className="relative isolate min-h-[820px] overflow-hidden bg-[#10251c] px-5 pb-16 pt-32 text-white lg:px-8">
        <div className="absolute inset-0 -z-10">
          <video
            className="size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={images.hero}
            aria-label="Video thực tế Eco Retreat Long An"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b14]/92 via-[#10251c]/58 to-[#10251c]/12" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b14]/90 via-[#0b1b14]/14 to-[#0b1b14]/18" />
        </div>
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col justify-end">
          <MotionReveal className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c7d8a4]/35 bg-[#0b1b14]/45 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e4f2c8] shadow-lg shadow-black/20 backdrop-blur-md md:text-xs">
              <span className="size-1.5 rounded-full bg-[#a8c77b]" />
              Eco Retreat Long An
            </p>
            <h1 className="font-display text-5xl font-light leading-[1.03] tracking-tight text-[#fffaf0] drop-shadow-[0_10px_28px_rgba(0,0,0,0.42)] sm:text-6xl md:text-7xl lg:text-[5rem]">
              Eco Retreat
            </h1>
            <p className="font-display mt-4 max-w-3xl text-2xl font-light leading-[1.12] tracking-tight text-[#f7f4ea]/92 sm:text-3xl md:text-4xl">
              Rừng Retreat <span className="italic text-[#d8efae]">cửa ngõ Tây</span> Sài Gòn.
            </p>
            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-[#f7f4ea]/88 md:text-lg">
              Trang tư vấn Eco Retreat dành cho khách muốn hiểu nhanh vị trí Bến Lức, quy mô 220ha, hệ sinh thái 121ha cảnh quan và các điểm cần kiểm tra trước khi đặt chỗ.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LeadFormTrigger source="Eco Retreat Hero" ctaLabel={PROJECT_INVENTORY_CTA_LABEL} className={INVENTORY_CTA_HERO_CLASS}>
                {PROJECT_INVENTORY_CTA_LABEL}
              </LeadFormTrigger>
              <Link href="#overview" className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/16 md:px-9">
                Xem thông tin dự án
              </Link>
            </div>
          </MotionReveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickStats.map((item, index) => (
              <MotionReveal key={item.label} delay={index * 0.05}>
                <div className="rounded-3xl border border-white/14 bg-white/[0.09] p-5 backdrop-blur-xl">
                  <p className="font-display text-4xl text-[#d8efae]">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/68">{item.label}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="overview" className="bg-[#f7f1e6] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7f3f]">Tổng quan</p>
            <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#10251c] md:text-5xl">
              Eco Retreat Bến Lức — khu đô thị xanh tại Long An
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d554c]">
              Một khu đô thị được kể bằng mật độ xanh, mặt nước và trải nghiệm phục hồi. Eco Retreat có quy mô khoảng 220,05ha tại Bến Lức, Long An. Điểm khác biệt nằm ở cách phân bổ đất: khoảng 55% cho cảnh quan xanh, 25,5% cho hạ tầng và tiện ích, phần nhà ở chỉ khoảng 19,5%.
            </p>
            <p className="mt-4 text-base leading-8 text-[#5d554c]">
              Với người mua, đây không chỉ là câu chuyện “xa hay gần trung tâm”, mà là bài toán chọn một môi trường sống xanh hơn, rộng hơn, trong khi vẫn phải kiểm tra kỹ pháp lý, giá vào và thời gian hình thành cộng đồng cư dân.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <div className="grid gap-3 rounded-[2rem] border border-[#d9c79f]/60 bg-white/70 p-4 shadow-[0_24px_80px_rgba(21,17,12,0.08)]">
              {factRows.map(([label, value]) => (
                <div key={label} className="grid gap-2 rounded-2xl bg-[#fbf8f2] p-4 sm:grid-cols-[0.32fr_0.68fr]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f7f3f]">{label}</p>
                  <p className="text-sm leading-6 text-[#2d2a25]">{value}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section id="location" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <MotionReveal>
              <SourcedImage
                src={images.location}
                alt="Bản đồ vị trí Eco Retreat Bến Lức Long An cửa ngõ Tây Sài Gòn"
                caption="Ảnh vị trí Eco Retreat, dùng để tham khảo trục kết nối Nguyễn Hữu Trí - Bến Lức."
              />
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7f3f]">Vị trí</p>
              <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#10251c] md:text-5xl">
                Vị trí Eco Retreat và hướng kết nối khu Nam
              </h2>
              <p className="mt-6 leading-8 text-[#5d554c]">
                Cửa ngõ phía Tây, gần cao tốc nhưng vẫn cần kiểm tra thời gian đi thật. Website dự án giới thiệu Eco Retreat cách bến Bạch Đằng khoảng 30 phút theo trục Võ Văn Kiệt - cao tốc TP.HCM - Trung Lương. Đây là lợi thế truyền thông mạnh, nhưng khi tư vấn mua thật nên đo lại theo giờ cao điểm, điểm làm việc và lịch sinh hoạt từng gia đình.
              </p>
              <div className="mt-7 grid gap-3">
                {locationLinks.map((item) => (
                  <div key={item} className="rounded-2xl border border-[#d9c79f]/60 bg-[#f7f1e6] px-5 py-4 text-sm font-medium text-[#2d2a25]">
                    {item}
                  </div>
                ))}
              </div>
            </MotionReveal>
          </div>
          <div className="mt-12">
            <EcoCtaBand
              eyebrow="Khảo sát thực tế"
              title="Muốn xem Eco Retreat ngoài đời trước khi quyết định?"
              description="Đặt lịch khảo sát thực địa, có xe đưa đón. Saigon Living sẽ đồng hành để Anh/Chị đối chiếu vị trí, tiến độ và cảm giác quy mô thật."
              primary="Đặt lịch xem thực tế (Có xe đưa đón)"
              source="Eco Retreat Location CTA"
            />
          </div>
        </div>
      </section>

      <section id="actual-photos" className="bg-[#fbf8f2] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7f3f]">Hình ảnh thực tế</p>
            <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#10251c] md:text-5xl">
              Hình ảnh thực tế khu Eco Retreat Long An
            </h2>
            <p className="mt-6 leading-8 text-[#5d554c]">
              Bên cạnh ảnh phối cảnh, các ảnh thực tế trong bộ tư liệu của Anh/Chị cho thấy công trường, mặt nước, trục đường và các cụm thấp tầng đang hình thành. Đây là lớp dữ liệu quan trọng khi đánh giá tiến độ và cảm giác quy mô thật.
            </p>
          </MotionReveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {actualImages.map((item, index) => (
              <MotionReveal key={item.src} delay={index * 0.04}>
                <figure className="h-full overflow-hidden rounded-[2rem] border border-[#d9c79f]/60 bg-white shadow-[0_18px_60px_rgba(21,17,12,0.08)]">
                  <div className="relative min-h-64 bg-[#10251c]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="p-5 text-sm leading-7 text-[#5d554c]">{item.caption}</figcaption>
                </figure>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="bg-[#10251c] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8efae]">Tiện ích & cảnh quan</p>
            <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Tiện ích và cảnh quan xanh tại Eco Retreat
            </h2>
            <p className="mt-6 leading-8 text-white/72">
              Nếu các dự án đô thị thường dùng tiện ích như điểm cộng, Eco Retreat đặt tiện ích vào vai trò cấu trúc sống: đi bộ, hít thở, gặp gỡ, vận động và nghỉ dưỡng trong nội khu.
            </p>
          </MotionReveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <MotionReveal>
              <SourcedImage
                src={images.retreatCircle}
                alt="Retreat Circle 50ha Eco Retreat Bến Lức Long An"
                caption="Retreat Circle được giới thiệu là trái tim cảnh quan 50ha với 20 khu vườn chủ đề."
              />
            </MotionReveal>
            <div className="grid gap-5">
              {amenityGroups.map((item, index) => (
                <MotionReveal key={item.title} delay={index * 0.05}>
                  <article className="rounded-[2rem] border border-white/12 bg-white/[0.08] p-6 backdrop-blur-xl">
                    <h3 className="font-display text-3xl text-[#d8efae]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <SourcedImage src={images.swanLake} alt="Hồ Thiên Nga 12ha Eco Retreat Bến Lức Long An" caption="Hồ Thiên Nga khoảng 12ha là một trong các điểm nhấn mặt nước chính." />
            <SourcedImage src={images.landscape} alt="Cảnh quan xanh 121ha Eco Retreat Long An" caption="Eco Retreat nhấn mạnh 121ha cảnh quan và 4 triệu cây, hoa trong tổng thể dự án." />
          </div>
        </div>
      </section>

      <section id="masterplan" className="bg-[#f7f1e6] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7f3f]">Mặt bằng & sản phẩm</p>
            <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#10251c] md:text-5xl">
              Mặt bằng và dòng sản phẩm Eco Retreat Long An
            </h2>
            <p className="mt-6 leading-8 text-[#5d554c]">
              Nên đọc theo loại hình thấp tầng và khả năng vận hành từng trục sản phẩm. Dự án có nhiều dòng sản phẩm như Townhouse, Town Villa, Villa, Shophouse và Shop Villa. Khi chọn mua, nên tách rõ mục tiêu ở thực, nghỉ dưỡng cuối tuần, kinh doanh hay nắm giữ dài hạn.
            </p>
          </MotionReveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <MotionReveal>
              <SourcedImage
                src={images.amenityPlan}
                alt="Mặt bằng tiện ích Eco Retreat Bến Lức Long An"
                caption="Mặt bằng tiện ích Eco Retreat, dùng để hình dung cấu trúc cảnh quan và tiện ích chính."
              />
            </MotionReveal>
            <div className="grid gap-5 md:grid-cols-2">
              {productCards.map((item, index) => (
                <MotionReveal key={item.title} delay={index * 0.05}>
                  <article className="h-full overflow-hidden rounded-[2rem] border border-[#d9c79f]/60 bg-white shadow-[0_18px_60px_rgba(21,17,12,0.08)]">
                    <div className="relative min-h-56 bg-[#10251c]">
                      <Image src={item.image} alt={`${item.title} Eco Retreat Bến Lức Long An`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 28vw" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-3xl font-medium text-[#10251c]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#5d554c]">{item.text}</p>
                    </div>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <EcoCtaBand
              eyebrow="Mặt bằng & sản phẩm"
              title="Cần đọc rõ từng phân khu trước khi chọn dòng sản phẩm?"
              description="Nhận mặt bằng chi tiết theo phân khu để đối chiếu vị trí lô, trục đường, tiện ích và loại hình Townhouse, Villa hay Shophouse."
              primary="Nhận mặt bằng chi tiết từng phân khu"
              source="Eco Retreat Masterplan CTA"
            />
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <MotionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7f3f]">Giá bán Eco Retreat</p>
              <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#10251c] md:text-5xl">
                Giá bán tham khảo từng dòng sản phẩm Eco Retreat
              </h2>
              <p className="mt-6 leading-8 text-[#5d554c]">
                Mỗi loại hình có biên giá và mục tiêu sử dụng khác nhau. Anh/Chị nên gửi ngân sách, nhu cầu và thời điểm mua để nhận bảng giá chi tiết theo sản phẩm phù hợp.
              </p>
            </MotionReveal>
            <div className="grid gap-5 md:grid-cols-2">
              {priceCards.map((item, index) => (
                <MotionReveal key={item.type} delay={index * 0.05}>
                  <article className="h-full rounded-[2rem] border border-[#d9c79f]/60 bg-[#fbf8f2] p-6 shadow-[0_18px_60px_rgba(21,17,12,0.07)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6f7f3f]">{item.type}</p>
                    <h3 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#10251c]">
                      {item.price}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#5d554c]">{item.note}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <ProjectInventoryCta
              source="Eco Retreat Pricing CTA"
              projectName="Eco Retreat"
              variant="eco"
              description="Saigon Living sẽ gửi 5 căn Eco Retreat có giá và chính sách tốt nhất trong giỏ hàng tuần này — đúng lúc Anh/Chị đang so giá từ 1,8 tỷ đến 16 tỷ."
            />
          </div>
        </div>
      </section>

      <section id="investment" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7f3f]">Có nên mua?</p>
            <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#10251c] md:text-5xl">
              Eco Retreat — có nên mua và giữ dài hạn?
            </h2>
          </MotionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {strategyCards.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-[2rem] border border-[#d9c79f]/60 bg-[#fbf8f2] p-7">
                  <h3 className="font-display text-3xl font-medium text-[#10251c]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5d554c]">{item.text}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] border border-[#d9c79f]/60 bg-[#10251c] p-7 text-white md:p-10">
            <h3 className="font-display text-3xl font-medium text-[#d8efae]">Checklist trước khi đặt chỗ</h3>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {["Hồ sơ pháp lý và chủ thể ký hợp đồng", "Giá từng mã sản phẩm so với Bến Lức/Long An/khu Nam", "Tiến độ hạ tầng và thời gian bàn giao", "Chính sách thanh toán, vay và chi phí giữ tài sản", "Vị trí lô, trục đường, khoảng cách đến tiện ích", "Kế hoạch vận hành cư dân và thương mại sau bàn giao"].map((item) => (
                <p key={item} className="rounded-2xl border border-white/12 bg-white/[0.08] px-5 py-4 text-sm leading-6 text-white/78">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="related" className="bg-[#f7f1e6] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7f3f]">Đọc tiếp</p>
            <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#10251c] md:text-5xl">
              Đọc thêm về Eco Retreat và khu vực lân cận
            </h2>
          </MotionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {relatedLinks.map((item, index) => (
              <MotionReveal key={item.href} delay={index * 0.06}>
                <Link href={item.href} className="block h-full rounded-[2rem] border border-[#d9c79f]/60 bg-white p-7 transition hover:-translate-y-1 hover:border-[#6f7f3f]">
                  <h3 className="font-display text-3xl font-medium text-[#10251c]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5d554c]">{item.description}</p>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7f3f]">FAQ</p>
            <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#10251c] md:text-5xl">
              Những câu hỏi thường gặp về Eco Retreat
            </h2>
          </MotionReveal>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <MotionReveal key={faq.question}>
                <details className="group rounded-[1.5rem] border border-[#d9c79f]/60 bg-[#fbf8f2] p-6">
                  <summary className="cursor-pointer list-none font-display text-2xl font-medium text-[#10251c]">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[#5d554c]">{faq.answer}</p>
                </details>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection variant="eco-retreat" />
    </>
  );
}
