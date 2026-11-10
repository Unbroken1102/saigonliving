import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { LeadFormTrigger } from "@/app/components/lead-form-popup";
import { MotionReveal } from "@/app/components/motion-reveal";
import { ProjectInventoryCta, PROJECT_INVENTORY_CTA_LABEL, INVENTORY_CTA_HERO_CLASS } from "@/app/components/project-inventory-cta";
import { absoluteUrl, siteConfig } from "@/app/lib/site";

const pageUrl = "/the-9-stellars";
const inventoryHref = "/gio-hang/the-9-stellars?loai=chuyen-nhuong";
const assetBase = "/assets/the-9-stellars";

const images = {
  hero: `${assetBase}/alta-villa.jpg`,
  factCard: `${assetBase}/hero.jpg`,
  location: `${assetBase}/vi-tri.jpg`,
  villa: `${assetBase}/alta-villa.jpg`,
  villaLake: `${assetBase}/alta-villa-ho.jpg`,
  amenity: `${assetBase}/tien-ich.jpg`,
};

const overviewRows = [
  ["Dự án", "The 9 Stellars"],
  ["Chủ đầu tư", "Công ty Cổ phần Ngân Thạnh"],
  ["Đơn vị phát triển", "SonKim Land — Công ty Cổ phần Bất động sản Sơn Kim"],
  ["Địa chỉ", "Đường Hoàng Hữu Nam, Long Bình, TP. Thủ Đức (tài liệu ghi Quận 9)"],
  ["Quy mô", "16,5 ha · nhà ở và thương mại"],
  ["Nhà mẫu", "Hoàng Hữu Nam, Long Bình (trang đang chạy). Thẻ cũ ghi 39 Nguyễn Thị Minh Khai, Quận 1"],
  ["Alta Villa", "79 biệt thự liền thổ hướng hồ 4,5 ha — bàn giao từ tháng 7/2025"],
  ["Alta Height", "1 tòa 21 tầng · 207 căn hộ · 6 penthouse · 14 shophouse · ~4.200 m²"],
];

const locationPoints = [
  "Cạnh depot tuyến metro Long Bình và gần ga Bến xe Suối Tiên — Metro số 1 đã vận hành.",
  "Gần Bến xe Miền Đông mới. Chủ đầu tư nêu khoảng 25 phút tới Quận 1 từ ga Metro Bến xe Suối Tiên.",
  "Hướng Công viên Lịch sử – Văn hóa Dân tộc (tầm nhìn 407 ha theo trang dự án) và sân golf Thủ Đức (300 ha).",
  "Gần Khu Công nghệ cao và Làng Đại học Quốc gia TP.HCM.",
];

const amenityPoints = [
  "Alta Villa: clubhouse, quán cà phê Noire, hồ bơi, gym, sân chơi trẻ em, tennis, bóng rổ, pickleball, công viên trung tâm và công viên ven hồ — theo bài bàn giao tháng 8/2025.",
  "Alta Height dùng chung hệ tiện ích đô thị, kèm hồ bơi, kidzone, gym, BBQ, sân tennis và pickleball trong tòa.",
  "SonKim Land công bố hợp tác KinderWorld để đưa mẫu giáo KinderWorld và trường quốc tế Singapore vào dự án — cần xác nhận lịch khai giảng thực tế.",
  "Nền tảng đô thị thông minh (Qualcomm, Viettel Networks, IoT) là hợp tác chủ đầu tư công bố, không phải cam kết vận hành của từng căn.",
];

const faqs = [
  {
    question: "The 9 Stellars ở đâu?",
    answer:
      "Dự án ở Long Bình, TP. Thủ Đức, cạnh depot metro Long Bình và ga Bến xe Suối Tiên, gần Bến xe Miền Đông mới. Nhà mẫu tại Hoàng Hữu Nam, Long Bình. Đây là khu Đông, không thuộc cụm Nam Sài Gòn như Mizuki Park hay The Peak Garden.",
  },
  {
    question: "Ai phát triển The 9 Stellars?",
    answer:
      "Thẻ tổng quan trên the9stellars.vn ghi chủ đầu tư là Công ty Cổ phần Ngân Thạnh và đơn vị phát triển là Công ty Cổ phần Bất động sản Sơn Kim. Bài Alta Height cũng nêu lễ ký hợp đồng ngày 20/9/2025 với Ngân Thạnh. Khi chuyển nhượng cần đối chiếu tên trên hợp đồng của đúng phân khu.",
  },
  {
    question: "Alta Villa đã bàn giao chưa?",
    answer:
      "Theo bài trên the9stellars.vn, phân khu 79 biệt thự Alta Villa bắt đầu bàn giao từ tháng 7/2025, hoàn thiện phần thô cao cấp, nằm gần hồ tự nhiên 4,5 ha. Từng căn chuyển nhượng vẫn cần xem hiện trạng, sổ và phí.",
  },
  {
    question: "Alta Height đã đủ điều kiện bán chưa?",
    answer:
      "Chủ đầu tư cho biết Sở Xây dựng TP.HCM xác nhận Alta Height đủ điều kiện ký hợp đồng mua bán nhà ở hình thành trong tương lai, và lễ ký diễn ra ngày 20/9/2025. Saigon Living không đăng văn bản đó trên trang này — khách nên xem bản xác nhận trước khi đặt cọc chuyển nhượng.",
  },
  {
    question: "Giỏ chuyển nhượng đang có những dòng nào?",
    answer:
      "Hub này mở giỏ cho hai dòng: biệt thự Alta Villa và căn hộ Alta Height. Giá không được niêm yết trên trang chủ đầu tư, nên từng căn ghi Liên hệ. Gửi ngân sách và loại hình để nhận căn đang có trong tuần.",
  },
  {
    question: "Trang này có phải website chủ đầu tư không?",
    answer:
      "Không. Đây là trang tư vấn độc lập của Saigon Living. Thông tin vị trí, quy mô và tiến độ được tổng hợp từ the9stellars.vn và có thể thay đổi. Giao dịch cần đối chiếu hợp đồng, pháp lý và chính sách tại thời điểm mua.",
  },
];

export const metadata: Metadata = {
  title: "The 9 Stellars | Giỏ chuyển nhượng Alta Villa · Alta Height",
  description:
    "The 9 Stellars Long Bình, Thủ Đức: biệt thự Alta Villa đã bàn giao và căn hộ Alta Height. Saigon Living tư vấn giỏ chuyển nhượng cạnh Metro Suối Tiên.",
  keywords: [
    "The 9 Stellars",
    "chuyển nhượng The 9 Stellars",
    "Alta Villa",
    "Alta Height",
    "SonKim Land Thủ Đức",
  ],
  alternates: {
    canonical: absoluteUrl(pageUrl),
  },
  openGraph: {
    title: "The 9 Stellars — hub chuyển nhượng khu Đông",
    description:
      "Alta Villa và Alta Height tại Long Bình, cạnh Metro số 1. Xem giỏ chuyển nhượng và nhận căn phù hợp ngân sách.",
    url: absoluteUrl(pageUrl),
    images: [
      {
        url: absoluteUrl(images.hero),
        width: 1200,
        height: 630,
        alt: "The 9 Stellars Long Bình Thủ Đức",
      },
    ],
  },
};

function SourcedImage({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-[1.75rem] border border-[#e7dfd2] bg-[#f7f1e6]">
        <Image src={src} alt={alt} width={1400} height={820} priority={priority} className="h-full w-full object-cover" />
      </div>
      {caption ? <figcaption className="mt-3 text-xs leading-5 text-[#6b6258]">{caption}</figcaption> : null}
    </figure>
  );
}

export default function The9StellarsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "The 9 Stellars — hub chuyển nhượng",
        description: "Trang tư vấn chuyển nhượng The 9 Stellars của Saigon Living.",
        url: absoluteUrl(pageUrl),
      },
      {
        "@type": "Residence",
        name: "The 9 Stellars",
        url: absoluteUrl(pageUrl),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Long Bình, Thủ Đức",
          addressRegion: "TP. Hồ Chí Minh",
          addressCountry: "VN",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="relative isolate overflow-hidden bg-[#14110e] px-5 pb-16 pt-32 text-white lg:px-8 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src={images.hero}
            alt="Phối cảnh biệt thự hướng hồ Alta Villa tại The 9 Stellars"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14110e]/96 via-[#14110e]/82 to-[#14110e]/45" />
        </div>
        <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <MotionReveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4b87a]/40 bg-black/35 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f0ddb0] md:text-xs">
              <span className="size-1.5 rounded-full bg-[#d4b87a]" />
              Thủ Đức · Metro số 1
            </p>
            <h1 className="font-display max-w-4xl text-5xl font-light leading-[1.03] tracking-tight sm:text-6xl md:text-7xl">
              The 9 Stellars
            </h1>
            <p className="font-display mt-4 max-w-3xl text-2xl font-light leading-[1.12] text-white/90 sm:text-3xl">
              Hub chuyển nhượng <span className="italic text-[#f0ddb0]">Alta Villa</span> và Alta Height.
            </p>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
              Đô thị 16,5 ha tại Long Bình do Ngân Thạnh làm chủ đầu tư và SonKim Land phát triển, cạnh ga Bến xe Suối Tiên. Biệt thự Alta Villa đã bàn giao; căn hộ Alta Height đã có mốc ký hợp đồng mua bán. Saigon Living gom giỏ chuyển nhượng theo căn, không niêm yết giá ảo.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={inventoryHref} className={INVENTORY_CTA_HERO_CLASS}>
                Xem giỏ chuyển nhượng
              </Link>
              <LeadFormTrigger source="The 9 Stellars Hub" ctaLabel={PROJECT_INVENTORY_CTA_LABEL} className="rounded-full border border-white/20 bg-white/8 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/14 md:px-9">
                {PROJECT_INVENTORY_CTA_LABEL}
              </LeadFormTrigger>
              <a href={siteConfig.contact.zalo} className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                Zalo {siteConfig.contact.phone}
              </a>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <div className="rounded-[2rem] border border-white/12 bg-white/6 p-6 backdrop-blur-md md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f0ddb0]">Hai dòng đang tư vấn</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-white/55">Alta Villa</dt>
                  <dd className="text-right font-medium">79 biệt thự · đã bàn giao</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-white/55">Alta Height</dt>
                  <dd className="text-right font-medium">207 căn · 21 tầng</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-white/55">Giá công bố</dt>
                  <dd className="text-right font-medium">Liên hệ theo căn</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/55">Giỏ hàng</dt>
                  <dd className="text-right font-medium">
                    <Link href={inventoryHref} className="underline decoration-[#d4b87a]/70 underline-offset-4">
                      Chuyển nhượng
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8" id="tong-quan">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6a2f]">Tổng quan</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              The 9 Stellars trên trục Metro số 1
            </h2>
            <p className="mt-6 leading-8 text-[#5d554c]">
              <strong>The 9 Stellars</strong> là đô thị 16,5 ha tại Long Bình. Thẻ tổng quan của dự án ghi chủ đầu tư <strong>Ngân Thạnh</strong> và đơn vị phát triển <strong>SonKim Land</strong>. Phần đang có giao dịch chuyển nhượng rõ nhất là biệt thự <strong>Alta Villa</strong> (đã bàn giao) và căn hộ <strong>Alta Height</strong> (đã ký hợp đồng mua bán).
            </p>
          </MotionReveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <MotionReveal>
              <SourcedImage
                src={images.factCard}
                alt="Thẻ tổng quan The 9 Stellars của chủ đầu tư"
                caption="Thẻ tổng quan trên the9stellars.vn: quy mô 16,5 ha, chủ đầu tư Ngân Thạnh, đơn vị phát triển Sơn Kim."
              />
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <SourcedImage
                src={images.villaLake}
                alt="Biệt thự Alta Villa hướng hồ tại The 9 Stellars"
                caption="Alta Villa — 79 biệt thự liền thổ gần hồ tự nhiên 4,5 ha, bàn giao từ tháng 7/2025."
              />
            </MotionReveal>
          </div>
          <MotionReveal delay={0.1} className="mt-12 overflow-x-auto">
            <table className="min-w-[640px] w-full border-collapse text-left text-sm">
              <tbody>
                {overviewRows.map(([label, value]) => (
                  <tr key={label} className="border-b border-[#e8dfd2]">
                    <th className="w-48 py-4 pr-6 font-semibold text-[#15110c]">{label}</th>
                    <td className="py-4 leading-7 text-[#5d554c]">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </MotionReveal>
          <p className="mt-6 text-sm leading-7 text-[#6b6258]">
            Nguồn:{" "}
            <a href="https://www.the9stellars.vn/" className="font-medium text-[#15110c] underline underline-offset-4" rel="noreferrer" target="_blank">
              the9stellars.vn
            </a>
            , gồm bài bàn giao Alta Villa và bài Alta Height đủ điều kiện ký hợp đồng mua bán. Số liệu có thể được chủ đầu tư cập nhật.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8" id="vi-tri">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6a2f]">Vị trí</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Long Bình, cạnh ga Bến xe Suối Tiên
            </h2>
            <p className="mt-6 leading-8 text-[#5d554c]">
              Điểm khác của The 9 Stellars so với các trang khu Nam trên Saigon Living là bám <strong>Metro số 1</strong> đã chạy, không phải Metro số 4 hay tuyến Bến Thành – Cần Giờ. Khi xem căn chuyển nhượng, nên đo thời gian thực từ ga tới căn, không chỉ nhìn khoảng cách trên sa bàn.
            </p>
          </MotionReveal>
          <ul className="mt-10 space-y-4">
            {locationPoints.map((point, index) => (
              <MotionReveal key={point} delay={index * 0.04}>
                <li className="flex gap-3 rounded-2xl border border-[#e7dfd2] bg-white px-5 py-4 leading-7 text-[#5d554c]">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#8a6a2f]" />
                  {point}
                </li>
              </MotionReveal>
            ))}
          </ul>
          <div className="mt-12">
            <SourcedImage
              src={images.location}
              alt="Sơ đồ vị trí The 9 Stellars Long Bình"
              caption="Sơ đồ vị trí chủ đầu tư — đối chiếu lại lối vào và khoảng cách tới ga khi khảo sát căn."
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8" id="san-pham">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6a2f]">Sản phẩm</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Alta Villa đã vào ở, Alta Height đang ở giai đoạn hợp đồng
            </h2>
          </MotionReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <MotionReveal>
              <article className="h-full overflow-hidden rounded-[1.75rem] border border-[#e7dfd2] bg-white">
                <div className="relative aspect-[4/3]">
                  <Image src={images.villa} alt="Biệt thự Alta Villa The 9 Stellars" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-medium text-[#15110c]">Alta Villa</h3>
                  <p className="mt-2 text-sm font-medium text-[#8a6a2f]">79 biệt thự liền thổ · hồ 4,5 ha</p>
                  <p className="mt-3 text-sm leading-7 text-[#5d554c]">
                    Hoàn thiện phần thô cao cấp, chủ nhà tự hoàn thiện nội thất. Phân khu đầu tiên được bàn giao, gần hồ và công viên trung tâm, cách ga metro vài phút đi bộ theo mô tả chủ đầu tư.
                  </p>
                </div>
              </article>
            </MotionReveal>
            <MotionReveal delay={0.06}>
              <article className="flex h-full flex-col rounded-[1.75rem] border border-[#e7dfd2] bg-[#f7f1e6] p-6">
                <h3 className="font-display text-2xl font-medium text-[#15110c]">Alta Height</h3>
                <p className="mt-2 text-sm font-medium text-[#8a6a2f]">1 tòa · 21 tầng · 207 căn hộ</p>
                <p className="mt-3 text-sm leading-7 text-[#5d554c]">
                  Thêm 6 penthouse và 14 shophouse trên khoảng 4.200 m². Mật độ 12 căn mỗi tầng, 4 thang máy mỗi tầng. Tiện ích trong tòa gồm hồ bơi, kidzone, gym, BBQ, tennis và pickleball.
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5d554c]">
                  Mốc pháp lý chủ đầu tư công bố: đủ điều kiện ký hợp đồng mua bán nhà ở hình thành trong tương lai; lễ ký ngày 20/9/2025.
                </p>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8" id="tien-ich">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6a2f]">Tiện ích</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Tiện ích đã vận hành và phần còn là công bố
            </h2>
          </MotionReveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <SourcedImage
              src={images.amenity}
              alt="Tiện ích nội khu The 9 Stellars"
              caption="Ảnh tiện ích trên trang chủ đầu tư. Khi nhận căn, nên kiểm tra hạng mục nào đã mở cửa."
            />
            <ul className="space-y-4">
              {amenityPoints.map((point) => (
                <li key={point} className="flex gap-3 rounded-2xl border border-[#e7dfd2] bg-white px-5 py-4 leading-7 text-[#5d554c]">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#8a6a2f]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8" id="chuyen-nhuong">
        <div className="mx-auto max-w-4xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6a2f]">Chuyển nhượng</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Giỏ theo căn, không có bảng giá niêm yết
            </h2>
            <p className="mt-6 leading-8 text-[#5d554c]">
              Trang chủ đầu tư không công bố giá bán lại. Saigon Living chỉ đưa căn khi có người bán, kèm giá tham khảo và việc cần kiểm: pháp nhân trên hợp đồng, tiến độ thanh toán còn lại, phí chuyển nhượng và hiện trạng nội thất với Alta Villa.
            </p>
          </MotionReveal>
          <ProjectInventoryCta
            projectName="The 9 Stellars"
            inventoryProjectSlug="the-9-stellars"
            source="The 9 Stellars Hub Inventory"
            description="Gửi loại hình (Alta Villa hoặc Alta Height) và ngân sách. Saigon Living gửi các căn chuyển nhượng đang có — giá chốt khi xem nhà."
          />
        </div>
      </section>

      <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8" id="faq">
        <div className="mx-auto max-w-4xl">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6a2f]">FAQ</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Câu hỏi trước khi xem căn chuyển nhượng
            </h2>
          </MotionReveal>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <MotionReveal key={faq.question} delay={index * 0.04}>
                <article className="rounded-[1.75rem] border border-[#e7dfd2] bg-white p-6">
                  <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-[#15110c]">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-[#5d554c]">{faq.answer}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-[#6b6258]">
            Saigon Living tư vấn độc lập, không phải website SonKim Land. Hotline tư vấn {siteConfig.contact.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
