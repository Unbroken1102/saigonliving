import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { LeadFormTrigger } from "@/app/components/lead-form-popup";
import { PROJECT_INVENTORY_CTA_LABEL, ProjectInventoryCta, INVENTORY_CTA_HERO_CLASS } from "@/app/components/project-inventory-cta";
import { MotionReveal } from "@/app/components/motion-reveal";
import { getKhuNamProject } from "@/app/lib/khu-nam-hub";
import { absoluteUrl, siteConfig } from "@/app/lib/site";

const pageUrl = "/zeit-river-county";

function getZeitHub() {
  const project = getKhuNamProject("zeit-river-county");
  if (!project) {
    throw new Error("Missing zeit-river-county hub config");
  }
  return project;
}

const hub = getZeitHub();

const assetBase = "/assets/zeit-river-county";
const images = {
  hero: `${assetBase}/hero-banner.jpg`,
  overview: `${assetBase}/river-county-overview.jpg`,
  aerial: `${assetBase}/phoi-canh-trung-tam.jpg`,
  location: `${assetBase}/vi-tri.jpg`,
  masterPlan: `${assetBase}/mat-bang-tong-the.jpg`,
  shophouse: `${assetBase}/shophouse.jpg`,
  townhouse: `${assetBase}/nha-pho.jpg`,
  villa: `${assetBase}/biet-thu.jpg`,
  amenity1: `${assetBase}/tien-ich-01.jpg`,
  amenity2: `${assetBase}/tien-ich-02.jpg`,
};

const heroImage = images.hero;
const faqs = hub.faqs;

const productCards = [
  {
    title: "Shophouse",
    spec: "126 m² đất · ~375 m² sàn",
    share: "66/359 căn",
    image: images.shophouse,
    alt: "Thiết kế shophouse Zeit River County Nhà Bè",
    caption: "Tầng trệt kinh doanh, tầng trên sinh sống — phù hợp vừa ở vừa kinh doanh trên Nguyễn Hữu Thọ.",
  },
  {
    title: "Nhà phố liền kề",
    spec: "119 m² đất · ~258 m² sàn",
    share: "66/359 căn",
    image: images.townhouse,
    alt: "Thiết kế nhà phố Zeit River County Nhà Bè",
    caption: "Nhà phố 3 tầng — sản phẩm entry trong phân khu thấp tầng River County.",
  },
  {
    title: "Biệt thự",
    spec: "162–250 m² đất",
    share: "227/359 căn",
    image: images.villa,
    alt: "Thiết kế biệt thự Zeit River County Nhà Bè",
    caption: "Biệt thự song lập và đơn lập chiếm tỷ trọng lớn nhất phân khu 1.1.",
  },
];

function SourcedImage({
  src,
  alt,
  caption,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-[1.75rem] border border-[#dbeafe]/80 bg-[#f8fbff] shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={820}
          priority={priority}
          className="h-full w-full object-cover"
        />
      </div>
      {caption ? <figcaption className="mt-3 text-xs leading-5 text-[#6b6258]">{caption}</figcaption> : null}
    </figure>
  );
}

const overviewRows = [
  ["Tên phân khu", "Zeit River County (giai đoạn 1 · phân khu 1.1)"],
  ["Thuộc đại đô thị", "Zeitgeist Nhà Bè — thị trường còn gọi GS Metro City"],
  ["Chủ đầu tư", "Công ty TNHH MTV Phát triển GS Nhà Bè (GS E&C, Hàn Quốc)"],
  ["Vị trí", "Mặt tiền Nguyễn Hữu Thọ, xã Phước Kiển & Nhơn Đức, Nhà Bè, TP.HCM"],
  ["Quy mô phân khu 1.1", "17,9 ha · 359 căn nhà phố, shophouse, biệt thự"],
  ["Quy mô tổng thể", "349,36 ha · 5 giai đoạn phát triển"],
  ["Pháp lý", "Sở hữu lâu dài"],
  ["Bàn giao phân khu 1.1", "Quý IV/2022 (theo thông tin dự án)"],
];

const priceRows: Array<[string, string, string]> = [
  ["Nhà phố", "9,6 – 10,4 tỷ", "16 – 17 tỷ"],
  ["Biệt thự song lập", "11,8 – 16,9 tỷ", "22 – 28 tỷ"],
  ["Shophouse", "12,8 – 14,8 tỷ", "23,5 – 27 tỷ"],
  ["Biệt thự đơn lập (250 m²)", "16,6 – 18,8 tỷ", "30 – 32 tỷ"],
  ["Biệt thự đơn lập (300 m²)", "20 – 27 tỷ", "45 – 60 tỷ"],
];

const locationPoints = [
  "Trục Nguyễn Hữu Thọ — tuyến huyết mạch Nam Sài Gòn, liền kề Phú Mỹ Hưng và hành lang cảng Hiệp Phước.",
  "Ven sông Mương Chuối, Rạch Tôm, Rạch Long Kiểng — mặt nước và cảnh quan nội khu là điểm khác biệt so với căn hộ mật độ cao trung tâm.",
  "Kết nối PMH (~15 phút), Crescent Mall, SC VivoCity, FV, RMIT, Tôn Đức Thắng — tiện ích ngoại khu đã vận hành.",
  "Hạ tầng trọng điểm: mở rộng Nguyễn Hữu Thọ, nút giao Nguyễn Văn Linh – Nguyễn Hữu Thọ, cao tốc Bến Lức – Nhà Bè – Long Thành.",
];

const amenityPoints = [
  "39 ha cây xanh & mặt nước trong masterplan; phân khu có clubhouse, hồ bơi, gym, nhà hàng cafe.",
  "Hệ giáo dục: trường quốc tế Chadwick (theo thông tin dự án) và hệ thống trường trong nội khu.",
  "Phí quản lý tham khảo ~18.000 đ/m²/tháng (điện nước theo khung nhà nước) — cần đối chiếu hợp đồng từng căn.",
];

const comparisonRows = [
  ["Định vị", "Thấp tầng ven sông · phân khu đã bàn giao", "Đô thị Nam Long đã cư cư", "Căn hộ wellness Q7"],
  ["Khu vực", "Nhà Bè · Nguyễn Hữu Thọ", "Bình Chánh", "Quận 7 · PMH"],
  ["Sản phẩm", "Nhà phố · shophouse · biệt thự", "Căn hộ + thấp tầng Trellia", "Căn hộ cao tầng"],
  ["Phù hợp", "CN thấp tầng · kinh doanh · ở dài hạn", "Ở sớm · cộng đồng có sẵn", "Ở Q7 · wellness"],
];

export const metadata: Metadata = {
  title: "Zeit River County Nhà Bè | Giá CN · Shophouse · Biệt thự",
  description:
    "Zeit River County thuộc đại đô thị Zeitgeist Nhà Bè (GS Metro City): vị trí Nguyễn Hữu Thọ, quy mô phân khu 17,9 ha, bảng giá tham khảo và giỏ chuyển nhượng. Tư vấn Saigon Living.",
  keywords: [
    "Zeit River County",
    "Zeitgeist Nhà Bè",
    "GS Metro City Nhà Bè",
    "nhà phố Zeit River County",
    "shophouse Nhà Bè chuyển nhượng",
  ],
  alternates: {
    canonical: absoluteUrl(pageUrl),
  },
  openGraph: {
    title: "Zeit River County — phân khu thấp tầng Zeitgeist Nhà Bè",
    description: hub.metaDescription,
    url: absoluteUrl(pageUrl),
    images: [
      {
        url: absoluteUrl(heroImage),
        width: 1200,
        height: 630,
        alt: "Zeit River County Nhà Bè Nguyễn Hữu Thọ",
      },
    ],
  },
};

export default function ZeitRiverCountyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Zeit River County Nhà Bè",
        description: hub.metaDescription,
        url: absoluteUrl(pageUrl),
      },
      {
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
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="relative isolate overflow-hidden bg-[#0c1420] px-5 pb-16 pt-32 text-white lg:px-8 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImage}
            alt="Zeit River County phân khu thấp tầng Nguyễn Hữu Thọ Nhà Bè"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1420]/95 via-[#0c1420]/72 to-[#0c1420]/28" />
        </div>

        <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <MotionReveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/35 bg-sky-950/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-100 backdrop-blur-md md:text-xs">
              <span className="size-1.5 rounded-full bg-sky-300" />
              Nhà Bè · Nguyễn Hữu Thọ
            </p>
            <h1 className="font-display max-w-4xl text-5xl font-light leading-[1.03] tracking-tight text-white sm:text-6xl md:text-7xl">
              Zeit River County
            </h1>
            <p className="font-display mt-4 max-w-3xl text-2xl font-light leading-[1.12] tracking-tight text-white/90 sm:text-3xl">
              Phân khu thấp tầng thuộc <span className="italic text-sky-200">Zeitgeist Nhà Bè</span>.
            </p>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
              {hub.heroDescription}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LeadFormTrigger source={hub.popupSource} ctaLabel={PROJECT_INVENTORY_CTA_LABEL} className={INVENTORY_CTA_HERO_CLASS}>
                {PROJECT_INVENTORY_CTA_LABEL}
              </LeadFormTrigger>
              <a
                href={siteConfig.contact.zalo}
                className="rounded-full border border-white/20 bg-white/8 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/14 md:px-9"
              >
                Trao đổi Zalo
              </a>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="rounded-[2rem] border border-white/12 bg-white/6 p-6 backdrop-blur-md md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/90">Thông số phân khu 1.1</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-white/55">Diện tích</dt>
                  <dd className="text-right font-medium text-white">17,9 ha</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-white/55">Quy mô</dt>
                  <dd className="text-right font-medium text-white">359 căn</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-white/55">Loại hình</dt>
                  <dd className="text-right font-medium text-white">Nhà phố · SH · biệt thự</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/55">Bàn giao</dt>
                  <dd className="text-right font-medium text-white">Q4/2022</dd>
                </div>
              </dl>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8" id="tong-quan">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">Tổng quan</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Zeit River County trong masterplan Zeitgeist Nhà Bè
            </h2>
            <p className="mt-6 leading-8 text-[#5d554c]">
              <strong>Zeit River County</strong> là phân khu thấp tầng thuộc giai đoạn 1 của đại đô thị{" "}
              <strong>Zeitgeist Nhà Bè</strong> (tên thị trường: GS Metro City), do GS E&C phát triển. Masterplan tổng
              349,36 ha gồm khu Linear, Gateway City, Park City, hạ tầng công cộng và mảng xanh — trong đó phân khu
              1.1 River County tập trung nhà phố, shophouse và biệt thự ven sông.
            </p>
          </MotionReveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <MotionReveal delay={0.06}>
              <SourcedImage
                src={images.overview}
                alt="Tổng quan phân khu Zeit River County 1 Nhà Bè"
                caption="Phân khu Zeit River County 1 — 17,9 ha thấp tầng ven sông thuộc đại đô thị Zeitgeist Nhà Bè."
              />
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <SourcedImage
                src={images.aerial}
                alt="Phối cảnh trung tâm Zeitgeist Nhà Bè"
                caption="Masterplan Zeitgeist Nhà Bè 349 ha — River County là một trong các phân khu giai đoạn đầu."
              />
            </MotionReveal>
          </div>

          <MotionReveal delay={0.12} className="mt-12">
            <table className="min-w-[640px] w-full border-collapse text-left text-sm">
              <tbody>
                {overviewRows.map(([label, value]) => (
                  <tr key={label} className="border-b border-[#e8edf2]">
                    <th className="w-48 py-4 pr-6 font-semibold text-[#15110c]">{label}</th>
                    <td className="py-4 leading-7 text-[#5d554c]">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-[#f4f8fc] px-5 py-24 lg:px-8" id="vi-tri">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">Vị trí</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Nguyễn Hữu Thọ — trục Nam Sài Gòn
            </h2>
            <p className="mt-6 leading-8 text-[#5d554c]">
              Zeit River County nằm trên mặt tiền <strong>Nguyễn Hữu Thọ</strong>, xã Phước Kiển và Nhơn Đức, Nhà Bè.
              Đây là vị trí ven sông, kết nối trực tiếp Phú Mỹ Hưng và cửa ngõ cảng Hiệp Phước — khác hẳn story{" "}
              <Link href="/eco-retreat" className="font-semibold text-[#15110c] underline decoration-sky-400/60 underline-offset-4">
                Eco Retreat Long An
              </Link>{" "}
              (retreat Tây Sài Gòn) hay{" "}
              <Link href="/mizuki-park" className="font-semibold text-[#15110c] underline decoration-sky-400/60 underline-offset-4">
                Mizuki Park
              </Link>{" "}
              (đô thị Bình Chánh đã vận hành).
            </p>
          </MotionReveal>
          <ul className="mt-10 space-y-4">
            {locationPoints.map((point, index) => (
              <MotionReveal key={point} delay={index * 0.04}>
                <li className="flex gap-3 rounded-2xl border border-sky-100 bg-white px-5 py-4 leading-7 text-[#5d554c]">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-500" />
                  {point}
                </li>
              </MotionReveal>
            ))}
          </ul>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <MotionReveal delay={0.08}>
              <SourcedImage
                src={images.location}
                alt="Bản đồ vị trí Zeit River County Nguyễn Hữu Thọ Nhà Bè"
                caption="Vị trí trên trục Nguyễn Hữu Thọ — liền kề Phú Mỹ Hưng, ven sông Mương Chuối và Rạch Tôm."
              />
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <SourcedImage
                src={images.masterPlan}
                alt="Mặt bằng tổng thể phân khu Zeitgeist Nhà Bè"
                caption="Mặt bằng phân khu — cần đối chiếu vị trí lô cụ thể trên sa bàn khi xem căn chuyển nhượng."
              />
            </MotionReveal>
          </div>
          <p className="mt-8 text-sm leading-7 text-[#6b6258]">
            Hành lang <strong>Metro số 4</strong> là yếu tố quy hoạch dài hạn của khu Nam — khác tuyến Metro Bến Thành
            – Cần Giỏ (liên quan{" "}
            <Link href="/the-peak-garden" className="font-medium text-[#15110c] underline underline-offset-4">
              The Peak Garden
            </Link>
            ). Cần đối chiếu ga và lộ trình trên hồ sơ chính thức trước khi đặt kỳ vọng giá.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8" id="san-pham">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">Sản phẩm</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Loại hình tại Zeit River County 1.1
            </h2>
            <p className="mt-6 leading-8 text-[#5d554c]">
              Phân khu 1.1 gồm 359 căn: shophouse mặt tiền thương mại, nhà phố liền kề và biệt thự song lập/đơn lập.
              Shophouse phù hợp vừa ở vừa kinh doanh; biệt thự đơn lập chiếm tỷ trọng lớn nhất trong phân khu.
            </p>
          </MotionReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {productCards.map((product, index) => (
              <MotionReveal key={product.title} delay={index * 0.05}>
                <article className="h-full overflow-hidden rounded-[1.75rem] border border-[#dbeafe] bg-white shadow-sm">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-medium text-[#15110c]">{product.title}</h3>
                    <p className="mt-2 text-sm font-medium text-sky-800">{product.spec}</p>
                    <p className="mt-1 text-xs text-[#6b6258]">{product.share}</p>
                    <p className="mt-3 text-sm leading-6 text-[#5d554c]">{product.caption}</p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fc] px-5 py-24 lg:px-8" id="gia">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">Giá tham khảo</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Mặt bằng giá giai đoạn mở bán & chuyển nhượng
            </h2>
            <p className="mt-6 leading-8 text-[#5d554c]">
              Cột giá mở bán là mặt bằng giai đoạn đầu (đã gồm VAT). Cột chuyển nhượng cập nhật{" "}
              <strong>tháng 6/2028</strong> — thay đổi theo vị trí lô, hiện trạng và thời điểm; cần nhận báo giá căn
              cụ thể trước khi quyết định.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.05} className="mt-10 overflow-x-auto">
            <table className="min-w-[640px] w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#dbeafe] bg-white text-[#15110c]">
                  <th className="py-3 pl-4 pr-4 font-semibold">Loại hình</th>
                  <th className="py-3 pr-4 font-semibold">Giá mở bán</th>
                  <th className="py-3 pr-4 font-semibold">Giá chuyển nhượng (T6/2028)</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map(([type, openPrice, transferPrice]) => (
                  <tr key={type} className="border-b border-[#dbeafe] bg-white">
                    <th className="py-4 pl-4 pr-4 font-semibold text-[#15110c]">{type}</th>
                    <td className="py-4 pr-4 text-[#5d554c]">{openPrice}</td>
                    <td className="py-4 pr-4 font-medium text-[#15110c]">{transferPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </MotionReveal>
          <p className="mt-6 text-sm leading-7 text-[#6b6258]">
            Ngân hàng BIDV, Vietcombank từng hỗ trợ vay ~70–80% giá trị hợp đồng (theo chính sách từng thời điểm).
            Mỗi căn CN cần kiểm tra lại phí quản lý, tiến độ sổ và điều kiện thanh toán trên hợp đồng cụ thể.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8" id="tien-ich">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">Tiện ích</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Hệ tiện ích nội – ngoại khu
            </h2>
          </MotionReveal>
          <ul className="mt-10 space-y-4">
            {amenityPoints.map((point, index) => (
              <MotionReveal key={point} delay={index * 0.04}>
                <li className="flex gap-3 leading-7 text-[#5d554c]">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-500" />
                  {point}
                </li>
              </MotionReveal>
            ))}
          </ul>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <MotionReveal delay={0.06}>
              <SourcedImage
                src={images.amenity1}
                alt="Tiện ích nội khu Zeit River County Nhà Bè"
                caption="Hệ tiện ích nội khu — clubhouse, cảnh quan và không gian cộng đồng trong masterplan Zeitgeist."
              />
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <SourcedImage
                src={images.amenity2}
                alt="Cảnh quan Zeitgeist Nhà Bè"
                caption="Mảng xanh và mặt nước chiếm tỷ trọng lớn trong quy hoạch 349 ha."
              />
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="bg-[#0c1420] px-5 py-24 text-white lg:px-8" id="so-sanh">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-200/80">So sánh</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Zeit River County vs Mizuki Park vs The Peak Garden
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.05} className="mt-12 overflow-x-auto">
            <table className="min-w-[640px] w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/15 text-sky-100/80">
                  <th className="py-4 pr-4 font-semibold">Tiêu chí</th>
                  <th className="py-4 pr-4 font-semibold">Zeit River County</th>
                  <th className="py-4 pr-4 font-semibold">Mizuki Park</th>
                  <th className="py-4 font-semibold">The Peak Garden</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([label, zrc, mizuki, peak]) => (
                  <tr key={label} className="border-b border-white/10">
                    <td className="py-4 pr-4 font-medium text-white/90">{label}</td>
                    <td className="py-4 pr-4 text-white/75">{zrc}</td>
                    <td className="py-4 pr-4 text-white/75">{mizuki}</td>
                    <td className="py-4 text-white/75">{peak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8" id="doc-them">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">Đọc thêm</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Bài liên quan khu Nam
            </h2>
          </MotionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {hub.relatedLinks.map((link, index) => (
              <MotionReveal key={link.href} delay={index * 0.04}>
                <Link
                  href={link.href}
                  className="block h-full rounded-[1.75rem] border border-[#dbeafe] bg-[#f8fbff] p-6 transition hover:-translate-y-0.5 hover:border-sky-200"
                >
                  <h3 className="font-display text-xl font-medium text-[#15110c]">{link.title}</h3>
                  {"description" in link && link.description ? (
                    <p className="mt-3 leading-7 text-[#5d554c]">{link.description}</p>
                  ) : null}
                </Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fc] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <ProjectInventoryCta
            projectName="Zeit River County"
            source={`${hub.popupSource} Pricing CTA`}
            description="Gửi ngân sách và loại hình (nhà phố · shophouse · biệt thự) — Saigon Living gửi 5 căn Zeit River County phù hợp tuần này khi có hàng chuyển nhượng."
          />
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8" id="faq">
        <div className="mx-auto max-w-4xl">
          <MotionReveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">FAQ</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Câu hỏi thường gặp về Zeit River County
            </h2>
          </MotionReveal>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <MotionReveal key={faq.question} delay={index * 0.04}>
                <article className="rounded-[1.75rem] border border-[#dbeafe] bg-[#f8fbff] p-6">
                  <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-[#15110c]">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-[#5d554c]">{faq.answer}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs leading-6 text-[#6b6258]">
            Trang tư vấn độc lập của Saigon Living — không phải website chính thức GS E&C. Giá và tồn kho mang tính
            tham khảo, thay đổi theo tuần.
          </p>
        </div>
      </section>
    </>
  );
}
