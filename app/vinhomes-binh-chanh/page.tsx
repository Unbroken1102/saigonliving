import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { LeadFormTrigger } from "@/app/components/lead-form-popup";
import { MotionReveal } from "@/app/components/motion-reveal";
import { media } from "@/app/lib/media";
import { absoluteUrl, siteConfig } from "@/app/lib/site";

const pageUrl = "/vinhomes-binh-chanh";

const marketSignals = [
  {
    label: "Trục hạ tầng",
    value: "Khu Tây Nam",
    description: "Bình Chánh nằm trong vùng hưởng lợi từ các tuyến kết nối liên vùng và quá trình đô thị hóa phía Tây Nam TP.HCM.",
  },
  {
    label: "Giai đoạn thông tin",
    value: "Dự kiến 2027",
    description: "Mốc triển khai được theo dõi theo hướng dự kiến 2027; người mua nên chờ thêm pháp lý, sản phẩm, giá và chính sách bán hàng.",
  },
  {
    label: "Mục tiêu nội dung",
    value: "Nhận cập nhật",
    description: "Saigon Living tổng hợp thông tin quy hoạch, hạ tầng, mặt bằng giá khu vực và các yếu tố người mua nên kiểm tra.",
  },
];

const infrastructureItems = [
  {
    title: "Vành đai 3 và kết nối vùng",
    text: "Các tuyến vành đai giúp giảm phụ thuộc vào trục xuyên tâm, mở ra khả năng kết nối tốt hơn giữa Bình Chánh, Long An, khu Nam và khu Đông.",
  },
  {
    title: "Cao tốc và trục logistics",
    text: "Khu Tây Nam được chú ý nhờ vai trò cửa ngõ về Long An, miền Tây và các trục logistics. Đây là nền tảng quan trọng cho nhu cầu ở và kinh doanh dài hạn.",
  },
  {
    title: "Quá trình đô thị hóa Bình Chánh",
    text: "Từ huyện ven đô, Bình Chánh đang được quan tâm nhiều hơn khi quỹ đất lớn, dân cư tăng và nhu cầu về khu đô thị quy mô bài bản ngày càng rõ.",
  },
  {
    title: "Mặt bằng giá còn cần so sánh kỹ",
    text: "Kỳ vọng hạ tầng không đồng nghĩa mọi sản phẩm đều hấp dẫn. Người mua vẫn cần so giá với Nhà Bè, Quận 7, Long An và các dự án đã vận hành.",
  },
];

const updateRows = [
  ["Tên gọi thị trường", "Được cho là Vinhomes Bình Chánh", "Tên gọi được dùng theo thông tin thị trường, cần đối chiếu công bố chính thức"],
  ["Vị trí và ranh", "Dự kiến xã Hưng Long và xã Bình Chánh", "Ranh khu vực lấy theo ảnh quy hoạch đề xuất lập quy hoạch"],
  ["Quy mô", "Dự kiến khoảng 1.512,7 ha", "Theo thông tin thể hiện trên ảnh quy hoạch, cần đối chiếu hồ sơ chính thức"],
  ["Loại hình sản phẩm", "Chưa công bố", "Căn hộ, nhà phố, shophouse hoặc sản phẩm khác cần chờ thông tin chính thức"],
  ["Giá bán dự kiến", "Chưa có cơ sở xác nhận", "Nên so với mặt bằng Bình Chánh, Nhà Bè, Long An và khu Nam"],
  ["Thời gian triển khai", "Dự kiến 2027", "Cần cập nhật theo tiến độ và thông báo chính thức từng giai đoạn"],
];

const planningHighlights = [
  {
    title: "Vị trí theo ảnh quy hoạch",
    text: "Khu vực quy hoạch dự kiến nằm tại xã Hưng Long và xã Bình Chánh, TP.HCM, thuộc trục phát triển Tây Nam thành phố.",
  },
  {
    title: "Ranh khu đô thị",
    text: "Ranh dự kiến được thể hiện trực tiếp trên ảnh quy hoạch đề xuất lập quy hoạch, bao quanh khu đô thị quy mô lớn.",
  },
  {
    title: "Quy mô dự kiến khoảng 1.512,7 ha",
    text: "Nếu được giữ theo hồ sơ chính thức, quy mô này cho thấy đây là câu chuyện đại đô thị, không phải một cụm nhà ở đơn lẻ.",
  },
  {
    title: "Dự kiến triển khai 2027",
    text: "Mốc triển khai dự kiến giúp người mua có thời gian theo dõi pháp lý, sản phẩm, giá bán và hạ tầng trước khi ra quyết định.",
  },
];

const buyerStrategies = [
  {
    title: "Người mua ở thật",
    text: "Nên theo dõi hạ tầng, trường học, y tế, thời gian di chuyển thật và khả năng hình thành cộng đồng cư dân trước khi đặt kỳ vọng vào giá.",
  },
  {
    title: "Nhà đầu tư vốn tốt",
    text: "Có thể theo dõi sớm để hiểu chu kỳ khu vực, nhưng chỉ nên xuống tiền khi pháp lý, giá vào và thời gian nắm giữ phù hợp dòng tiền.",
  },
  {
    title: "Khách tìm cơ hội trước sóng",
    text: "Lợi thế của việc đi sớm là hiểu thị trường trước đám đông. Rủi ro là thông tin còn nhiễu, nên cần lọc nguồn và tránh mua theo tin đồn.",
  },
];

const faqs = [
  {
    question: "Vinhomes Bình Chánh đã có thông tin chính thức chưa?",
    answer:
      "Theo ảnh quy hoạch và thông tin thị trường hiện tại, khu đô thị được cho là liên quan Vinhomes được theo dõi tại khu vực xã Hưng Long và xã Bình Chánh, quy mô dự kiến khoảng 1.512,7 ha, mốc triển khai dự kiến 2027. Các thông tin giao dịch như sản phẩm, giá bán, chính sách và pháp lý chi tiết cần tiếp tục cập nhật theo công bố từng giai đoạn.",
  },
  {
    question: "Có nên theo dõi dự án từ bây giờ không?",
    answer:
      "Có. Theo dõi sớm giúp người mua hiểu quy hoạch, hạ tầng, mặt bằng giá và các rủi ro cần kiểm tra trước khi thị trường chú ý mạnh hơn.",
  },
  {
    question: "Landing này có phải website chính thức của chủ đầu tư không?",
    answer:
      "Không. Đây là trang thông tin độc lập của Saigon Living, dùng để tổng hợp phân tích thị trường và cập nhật khi có nguồn chính thức.",
  },
  {
    question: "Người mua nên kiểm tra gì trước khi đặt chỗ?",
    answer:
      "Nên kiểm tra pháp lý khu đất, đơn vị phát triển, quy hoạch, loại hình sản phẩm, giá so sánh, chính sách thanh toán và khả năng giữ tài sản trong vài năm.",
  },
];

export const metadata: Metadata = {
  title: "Vinhomes Bình Chánh | Hé lộ quy hoạch khu đô thị 1.500 ha",
  description:
    "Trang theo dõi khu đô thị 1.500 ha được cho là của Vinhomes ở Bình Chánh: thông tin dự kiến về quy hoạch Hưng Long - Bình Chánh, mốc 2027 và hạ tầng khu Tây Nam.",
  keywords: [
    "Vinhomes Bình Chánh",
    "đại đô thị Bình Chánh",
    "quy hoạch Bình Chánh",
    "bất động sản Bình Chánh",
    "Vành đai 3 Bình Chánh",
    "khu Tây Nam TP.HCM",
  ],
  alternates: {
    canonical: absoluteUrl(pageUrl),
  },
  openGraph: {
    title: "Hé lộ quy hoạch khu đô thị 1.500 ha được cho là của Vinhomes ở Bình Chánh",
    description:
      "Tổng hợp thông tin dự kiến về quy hoạch Hưng Long - Bình Chánh, quy mô khoảng 1.512,7 ha, được thị trường cho là liên quan Vinhomes.",
    url: absoluteUrl(pageUrl),
    images: [
      {
        url: absoluteUrl(siteConfig.shareImage),
        width: 1024,
        height: 576,
        alt: "Saigon Living theo dõi thị trường bất động sản Bình Chánh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hé lộ quy hoạch khu đô thị 1.500 ha ở Bình Chánh",
    description: "Theo dõi thông tin dự kiến về khu đô thị được cho là của Vinhomes ở Bình Chánh, quy mô khoảng 1.512,7 ha.",
    images: [absoluteUrl(siteConfig.shareImage)],
  },
};

export default function VinhomesBinhChanhPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Vinhomes Bình Chánh",
      url: absoluteUrl(pageUrl),
      inLanguage: "vi-VN",
      description: metadata.description,
      publisher: {
        "@type": "RealEstateAgent",
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
      },
      about: [
        "Vinhomes Bình Chánh",
        "quy hoạch Bình Chánh",
        "bất động sản khu Tây Nam TP.HCM",
      ],
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
          name: "Vinhomes Bình Chánh",
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
      <section className="relative isolate overflow-hidden bg-[#1c1b19] px-5 pb-16 pt-32 text-white lg:px-8 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(212,184,122,0.30),transparent_30rem),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.14),transparent_24rem),linear-gradient(145deg,#15110c,#2c241a_48%,#0f1411)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1c1b19]/88 via-[#1c1b19]/50 to-[#1c1b19]/16" />

        <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1fr_0.86fr]">
          <MotionReveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4b87a]/35 bg-[#1c1b19]/45 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f0ddb0] shadow-lg shadow-black/20 backdrop-blur-md md:text-xs">
              <span className="size-1.5 rounded-full bg-[#d4b87a]" />
              Theo dõi sớm khu Tây Nam
            </p>
            <h1 className="font-display max-w-4xl text-5xl font-light leading-[1.03] tracking-tight text-[#fffaf0] drop-shadow-[0_10px_28px_rgba(0,0,0,0.42)] sm:text-6xl md:text-7xl lg:text-[5.1rem]">
              Vinhomes
              <br />
              <span className="text-gradient-gold font-normal italic">Bình Chánh</span>
              <br />
              nên theo dõi từ bây giờ?
            </h1>
            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-[#faf6f0]/88 md:text-lg">
              Trang cập nhật độc lập của Saigon Living về khu đô thị quy mô khoảng 1.512,7 ha tại Hưng Long - Bình Chánh, được thị trường cho là liên quan Vinhomes và có mốc triển khai dự kiến 2027.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LeadFormTrigger source="Vinhomes Bình Chánh Hero" className="btn-luxury rounded-full bg-[#d4b87a] px-8 py-4 text-center text-sm font-bold text-[#1c1b19] shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#f0ddb0] md:px-9">
                Nhận cập nhật sớm
              </LeadFormTrigger>
              <Link href="#cap-nhat" className="rounded-full border border-[#faf6f0]/35 bg-[#1c1b19]/32 px-8 py-4 text-center text-sm font-semibold text-[#faf6f0] shadow-lg shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[#faf6f0]/12 md:px-9">
                Xem bảng theo dõi
              </Link>
            </div>
            <p className="mt-6 max-w-2xl text-xs leading-6 text-white/58">
              Lưu ý: Đây không phải website chính thức của chủ đầu tư. Giá bán, loại hình sản phẩm, chính sách thanh toán và lịch mở bán cần cập nhật theo công bố từng giai đoạn.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="rounded-[2.5rem] border border-white/14 bg-white/[0.08] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] bg-[#fbf8f2]">
                <Image
                  src={media.images.location}
                  alt="Hạ tầng và kết nối khu Nam, khu Tây Nam TP.HCM"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/18 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f0ddb0]">
                    Bình Chánh Watchlist
                  </p>
                  <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em]">
                    Đi sớm bằng dữ liệu, không đi theo tin đồn.
                  </h2>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-[#f7f1e6] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {marketSignals.map((item, index) => (
              <MotionReveal key={item.label} delay={index * 0.06}>
                <article className="luxury-card h-full rounded-[2rem] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6a2f]">
                    {item.label}
                  </p>
                  <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#15110c]">
                    {item.value}
                  </h2>
                  <p className="mt-5 leading-7 text-[#5d554c]">{item.description}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8" id="quy-hoach">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <MotionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6a2f]">
                Quy hoạch dự án
              </p>
              <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-6xl">
                Ranh, vị trí và quy mô khu đô thị được cho là của Vinhomes.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#5d554c] md:text-lg">
                Theo ảnh quy hoạch và thông tin thị trường hiện tại, khu đô thị được cho là liên quan Vinhomes ở Bình Chánh được theo dõi tại khu vực Hưng Long - Bình Chánh, TP.HCM, với quy mô dự kiến khoảng 1.512,7 ha. Đây là quy mô đủ lớn để hình thành một đại đô thị nếu được triển khai đồng bộ về hạ tầng, tiện ích, sản phẩm và vận hành.
              </p>
              <p className="mt-4 text-base leading-8 text-[#5d554c]">
                Ảnh quy hoạch cũng thể hiện hệ thống đường nội khu, các nhóm đất ở, công cộng, cây xanh, mặt nước/kênh rạch, giao thông và các khu chức năng đô thị khác. Với người mua, đây là phần nên xem trước khi hỏi đến giá bán vì nó cho thấy dự án có thể phát triển theo cấu trúc nào.
              </p>
              <Link
                href="/blog/vinhomes-binh-chanh-doc-quy-hoach-hung-long-1512ha"
                className="mt-8 inline-flex rounded-full bg-[#15110c] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8a6a2f]"
              >
                Đọc bài phân tích chi tiết
              </Link>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {planningHighlights.map((item) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-[#d9c79f]/60 bg-[#fbf8f2] p-5">
                    <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-[#15110c]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#5d554c]">{item.text}</p>
                  </div>
                ))}
              </div>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <figure className="overflow-hidden rounded-[2.25rem] border border-[#d9c79f]/60 bg-[#fbf8f2] shadow-[0_24px_70px_rgba(21,17,12,0.1)]">
                <div className="relative aspect-[4/5] bg-[#15110c]">
                  <Image
                    src="/assets/vinhomes-binh-chanh/quy-hoach-hung-long-binh-chanh.jpg"
                    alt="Quy hoạch khu đô thị 1.500 ha được cho là của Vinhomes ở Bình Chánh"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                </div>
                <figcaption className="border-t border-[#d9c79f]/45 px-5 py-4 text-sm font-medium leading-6 text-[#5d554c] md:px-6">
                  Ảnh quy hoạch dự kiến khu đô thị được cho là của Vinhomes tại khu vực Hưng Long - Bình Chánh, quy mô khoảng 1.512,7 ha, mốc triển khai dự kiến 2027.
                </figcaption>
              </figure>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8" id="ha-tang">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6a2f]">
              Bối cảnh khu vực
            </p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-6xl">
              Vì sao Bình Chánh đang được chú ý trước chu kỳ dự án lớn?
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5d554c] md:text-lg">
              Điểm đáng theo dõi không chỉ là một tên dự án, mà là sự thay đổi của cả vùng Tây Nam TP.HCM: hạ tầng kết nối, dân cư tăng, quỹ đất lớn và nhu cầu về khu đô thị bài bản hơn.
            </p>
          </MotionReveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {infrastructureItems.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.06}>
                <article className="rounded-[2rem] border border-[#d9c79f]/55 bg-[#fbf8f2] p-7 shadow-sm">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-[#15110c] font-display text-xl text-[#f0ddb0]">
                    {index + 1}
                  </span>
                  <h3 className="font-display mt-6 text-3xl font-medium tracking-[-0.04em] text-[#15110c]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#5d554c]">{item.text}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#15110c] px-5 py-24 text-white lg:px-8" id="cap-nhat">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
            <MotionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f0ddb0]">
                Bảng theo dõi
              </p>
              <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
                Cập nhật theo nguồn chính thức, không chạy theo tin đồn.
              </h2>
              <p className="mt-6 leading-8 text-white/70">
                Saigon Living sẽ cập nhật landing này khi có thông tin đủ rõ về pháp lý, sản phẩm, giá, tiến độ và chính sách. Trước thời điểm đó, trang này đóng vai trò theo dõi thị trường.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06]">
                <div className="grid grid-cols-[0.85fr_1fr_1.35fr] gap-3 border-b border-white/10 bg-white/[0.08] px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#f0ddb0]">
                  <span>Hạng mục</span>
                  <span>Trạng thái</span>
                  <span>Cần kiểm tra</span>
                </div>
                {updateRows.map(([name, status, note]) => (
                  <div key={name} className="grid gap-3 border-b border-white/10 px-5 py-5 text-sm last:border-b-0 md:grid-cols-[0.85fr_1fr_1.35fr]">
                    <p className="font-semibold text-white">{name}</p>
                    <p className="text-[#f0ddb0]">{status}</p>
                    <p className="leading-6 text-white/68">{note}</p>
                  </div>
                ))}
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6a2f]">
              Chiến lược theo dõi
            </p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-6xl">
              Ai nên quan tâm khu đô thị này từ sớm?
            </h2>
            <p className="mt-6 leading-8 text-[#5d554c]">
              Giai đoạn trước công bố không phù hợp để ra quyết định vội, nhưng rất phù hợp để chuẩn bị dữ liệu, ngân sách và tiêu chí chọn tài sản.
            </p>
          </MotionReveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {buyerStrategies.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.06}>
                <article className="luxury-card h-full rounded-[2rem] p-7">
                  <h3 className="font-display text-3xl font-medium tracking-[-0.04em] text-[#15110c]">
                    {item.title}
                  </h3>
                  <p className="mt-5 leading-7 text-[#5d554c]">{item.text}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(212,184,122,0.16),transparent_28rem)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 rounded-[2.5rem] border border-[#d9c79f]/55 bg-[#f7f1e6] p-7 md:p-10 lg:grid-cols-[1fr_0.72fr]">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6a2f]">
              Nhận cập nhật
            </p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-6xl">
              Muốn nhận thông tin khi có công bố mới?
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-[#5d554c]">
              Để lại nhu cầu để Saigon Living gửi cập nhật khi có thông tin rõ hơn về vị trí, pháp lý, sản phẩm, giá bán hoặc lịch mở bán. Nội dung tư vấn sẽ tập trung vào so sánh và kiểm chứng, không tạo áp lực xuống tiền.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="rounded-[2rem] bg-[#15110c] p-7 text-white">
              <h3 className="font-display text-3xl font-medium tracking-[-0.04em]">
                Theo dõi thông tin Bình Chánh
              </h3>
              <p className="mt-4 leading-7 text-white/68">
                Nhận checklist kiểm tra thông tin, bài phân tích khu vực và cập nhật khi có nguồn chính thức.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <LeadFormTrigger source="Vinhomes Bình Chánh Update CTA" className="btn-luxury rounded-full bg-[#d4b87a] px-7 py-4 text-center text-sm font-bold text-[#1c1b19] transition hover:-translate-y-0.5 hover:bg-[#f0ddb0]">
                  Đăng ký nhận cập nhật
                </LeadFormTrigger>
                <a href={siteConfig.contact.zalo} className="rounded-full border border-white/18 bg-white/8 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/14">
                  Trao đổi qua Zalo
                </a>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-5 py-24 lg:px-8" id="faq">
        <div className="mx-auto max-w-4xl">
          <MotionReveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6a2f]">
              FAQ
            </p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-6xl">
              Câu hỏi thường gặp
            </h2>
          </MotionReveal>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <MotionReveal key={faq.question} delay={index * 0.04}>
                <article className="rounded-[1.75rem] border border-[#d9c79f]/55 bg-white p-6 shadow-sm">
                  <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-[#15110c]">
                    {faq.question}
                  </h3>
                  <p className="mt-3 leading-7 text-[#5d554c]">{faq.answer}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
