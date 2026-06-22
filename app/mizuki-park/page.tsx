import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { LeadFormTrigger } from "@/app/components/lead-form-popup";
import { PROJECT_INVENTORY_CTA_LABEL, ProjectInventoryCta, INVENTORY_CTA_HERO_CLASS } from "@/app/components/project-inventory-cta";
import { MotionReveal } from "@/app/components/motion-reveal";
import { ContactSection } from "@/app/components/site-sections";
import { ZoomableImage } from "@/app/components/zoomable-image";
import { absoluteUrl, siteConfig } from "@/app/lib/site";

const pageUrl = "/mizuki-park";

const heroImage = "/assets/mizuki-park/mizuki-park-kenh-dao-tien-ich.jpg";
const masterplanImage = "/assets/mizuki-park/mizuki-park-masterplan.jpg";
const buildingImage = "/assets/mizuki-park/mizuki-park-can-ho-hien-huu.jpg";
const landscapeImage = "/assets/mizuki-park/mizuki-park-canh-quan-noi-khu.jpg";
const trelliaAmenityPlanImage = "/assets/mizuki-park/trellia-cove-mat-bang-tien-ich.jpg";
const trelliaTowerPlanImage = "/assets/mizuki-park/trellia-cove-mat-bang-tang-cao-tang.jpg";
const trelliaTownhousePlanImage = "/assets/mizuki-park/trellia-cove-mat-bang-nha-pho-lk11.jpg";
const trelliaTownhouseSampleImage = "/assets/mizuki-park/trellia-cove-mat-bang-mau-nha-pho-a.jpg";

const quickStats = [
  { value: "26ha", label: "Quy mô khu đô thị" },
  { value: "71%", label: "Mảng xanh & tiện ích" },
  { value: "17.000m2", label: "Kênh đào nội khu" },
  { value: "4.000+", label: "Gia đình đã chọn Mizuki" },
];

const locationPoints = [
  {
    title: "01-05 phút",
    text: "Trường tiểu học Nguyễn Bỉnh Khiêm, King Food, FDCare, Trường Bình Hưng, Tuệ Đức và THCS Nguyễn Thái Bình.",
  },
  {
    title: "05-10 phút",
    text: "RMIT, Tôn Đức Thắng, V-Star School, Parc Mall, BVIS, CIH và Bệnh viện Quận 8.",
  },
  {
    title: "10-15 phút",
    text: "SC VivoCity, Crescent Mall, FV, SSIS, Trường Đinh Thiện Lý và khu Hồ Bán Nguyệt.",
  },
];

const mizukiFacts = [
  ["Vị trí", "Khu Nam Sài Gòn, Bình Chánh, kết nối Nguyễn Văn Linh - Nguyễn Hữu Thọ - Quốc lộ 50"],
  ["Định vị", "Khu đô thị đã hình thành, có cư dân, trường học, thương mại và cảnh quan vận hành thực tế"],
  ["Cấu trúc đô thị", "Cao tầng, thấp tầng, phố thương mại, trường học, kênh đào, công viên và tiện ích cộng đồng"],
  ["Điểm nhấn sống", "Không gian xanh, mặt nước, cộng đồng cư dân hiện hữu và khả năng ở ngay/cho thuê"],
  ["Phân khu theo dõi", "Trellia Cove - phân khu compound cuối tại Mizuki Park, dành cho khách muốn sản phẩm riêng tư hơn"],
];

const paymentPlans = [
  {
    title: "Thanh toán thông thường",
    items: [
      "Đợt 1: 10% khi ký HĐMB, bao gồm khoản đặt cọc.",
      "Đợt 2: 10% theo mốc thanh toán tiếp theo.",
      "Đợt 3: ~75% khi đến mốc bàn giao/nhận thông báo bàn giao.",
      "Đợt cuối: 5% khi có thông báo cấp giấy chứng nhận.",
    ],
  },
  {
    title: "Phương án ngân hàng hỗ trợ",
    items: [
      "Khách hàng thanh toán ~30% trong tiến độ chính.",
      "Ngân hàng giải ngân phần còn lại ~70% theo từng đợt.",
      "Các mốc hỗ trợ có thể trải từ 06/2026, 12/2026, 03/2027 đến đợt bàn giao 06/2027.",
      "Đợt cuối 5% thanh toán khi có thông báo cấp giấy chứng nhận.",
    ],
  },
];

const priceRanges = [
  {
    type: "Căn 2PN + 1WC",
    area: "~54,37m2 thông thủy",
    price: "Từ ~4,51 tỷ",
    note: "Lựa chọn dễ tiếp cận cho khách muốn vào Trellia Cove với tổng ngân sách gọn hơn.",
  },
  {
    type: "Căn 2PN + 2WC",
    area: "~68-71m2 thông thủy",
    price: "~5,25-5,94 tỷ",
    note: "Dòng căn dễ chọn nhất cho gia đình trẻ, đủ công năng ở thật và dễ cho thuê lại.",
  },
  {
    type: "Căn 3PN",
    area: "~90,66m2 thông thủy",
    price: "~7,48-7,62 tỷ",
    note: "Phù hợp gia đình cần không gian rộng hơn, ưu tiên sự thoải mái khi ở lâu dài.",
  },
  {
    type: "Nhà phố / shophouse",
    area: "LK11 ~126m2 đất, GFA ~245-249m2",
    price: "~21,6-23,9 tỷ",
    note: "Dòng thấp tầng dành cho khách muốn tài sản có đất, mặt tiền đẹp và biên độ sử dụng rộng hơn căn hộ.",
  },
];

const floorPlanCards = [
  {
    title: "Mặt bằng tiện ích Trellia Cove",
    image: trelliaAmenityPlanImage,
    alt: "Mặt bằng tiện ích nội khu Trellia Cove Mizuki Park Bình Chánh",
    description:
      "Nhìn nhanh vị trí hồ bơi, gym - yoga, BBQ, khu picnic, sân chơi trẻ em và lối vào nội khu.",
  },
  {
    title: "Mặt bằng tầng cao tầng",
    image: trelliaTowerPlanImage,
    alt: "Mặt bằng tầng trệt đến tầng 20 tháp T1 Trellia Cove Mizuki Park",
    description:
      "Dễ hình dung vị trí căn, lõi thang, hành lang và cách phân bổ các nhóm diện tích trong tháp.",
  },
  {
    title: "Mặt bằng nhà phố LK11",
    image: trelliaTownhousePlanImage,
    alt: "Mặt bằng nhà phố liền kề LK11 Trellia Cove Mizuki Park",
    description:
      "Dành cho khách thích sản phẩm thấp tầng, có đất, có mặt tiền và muốn sử dụng linh hoạt hơn.",
  },
  {
    title: "Mặt bằng mẫu nhà phố",
    image: trelliaTownhouseSampleImage,
    alt: "Mặt bằng mẫu nhà phố Trellia Cove Mizuki Park Bình Chánh",
    description:
      "Xem nhanh cách bố trí tầng 1, tầng 2, tầng 3 và tum thang trước khi chọn mã căn.",
  },
];

const incentiveItems = [
  { title: "Thanh toán chuẩn", text: "Chiết khấu tham khảo ~6%, phù hợp khách muốn dòng tiền dễ kiểm soát." },
  { title: "Thanh toán nhanh", text: "Chiết khấu tham khảo ~8-9%, hợp với khách có sẵn tiền và muốn tối ưu giá mua." },
  { title: "Ngân hàng hỗ trợ", text: "Có phương án bank hỗ trợ, phù hợp khách muốn giữ lại vốn và chia dòng tiền theo tiến độ." },
  { title: "First Choice", text: "Ưu đãi 1% cho nhóm suất đầu tiên, nên kiểm tra sớm nếu đã có mã căn ưng ý." },
  { title: "Gói nội thất", text: "Ưu đãi quy đổi ~2%, giúp nhẹ hơn phần chi phí hoàn thiện ban đầu." },
  { title: "Ưu đãi khu vực", text: "Ưu đãi ~1% cho nhóm khách đủ điều kiện theo chương trình từng thời điểm." },
  { title: "Nam Long Club", text: "Ưu đãi ~1-2% tùy hạng khách hàng, nên tính vào bảng giá cuối cùng nếu Anh/Chị đủ điều kiện." },
  { title: "Không chọn bảo lãnh", text: "Có thể thêm ~0,5%; phù hợp khách đã hiểu rõ lựa chọn này và muốn tối ưu giá." },
];

const relatedArticleLinks = [
  {
    title: "Mizuki Park hưởng lợi gì nếu Bình Chánh được chú ý hơn?",
    href: "/blog/mizuki-park-huong-loi-gi-tu-vinhomes-binh-chanh",
    description: "Phân tích lợi thế của Mizuki khi Hưng Long 1.512 ha, môi trường khu Nam và dòng tiền địa phương được quan tâm.",
  },
  {
    title: "Hệ thống chống ngập khu Nam vận hành thế nào?",
    href: "/blog/he-thong-chong-ngap-khu-nam-binh-chanh-quan-7-2026",
    description: "Cống Bến Nghé đã vận hành thử từ 02/2026; cập nhật tiến độ các cống còn lại và cách đọc kỳ vọng giảm ngập Bình Chánh - Quận 7.",
  },
  {
    title: "Có 2 tỷ nên mua Mizuki 72m2 hay Vlasta Premier?",
    href: "/blog/co-2-ty-nen-mua-mizuki-72m2-hay-vlasta-premier",
    description: "So bài toán căn rộng ở ngay với phương án dự án mới thanh toán giãn.",
  },
  {
    title: "So sánh Mizuki, Vlasta Premier và The Peak Garden",
    href: "/blog/so-sanh-mizuki-vlasta-premier-the-peak-garden",
    description: "Đặt các lựa chọn khu Nam cạnh nhau theo vị trí, giá, dòng tiền và mục tiêu mua.",
  },
  {
    title: "Có 1-2 tỷ mua được căn hộ ở Sài Gòn không?",
    href: "/blog/co-1-2-ty-mua-can-ho-sai-gon-2026",
    description: "Góc nhìn tài chính cho khách có vốn tự có vừa phải khi cân nhắc vay mua căn hộ khu Nam.",
  },
];

const amenityGroups = [
  {
    title: "Tiện ích đô thị hiện hữu",
    items: ["Công viên thiền", "Đầm thủy sinh", "Đảo Nhật", "Kênh đào", "Quảng trường sự kiện", "Công viên ven sông"],
  },
  {
    title: "Dịch vụ hằng ngày",
    items: ["Trường mầm non", "Trường tiểu học Nguyễn Bỉnh Khiêm", "Khu thương mại dịch vụ", "Khu y tế", "Khu hành chính"],
  },
  {
    title: "Tiện ích Trellia Cove",
    items: ["Hồ bơi", "Gym & Yoga", "Sân chơi trẻ em", "BBQ", "Sân đa năng", "Khu picnic gia đình"],
  },
];

const trelliaHighlights = [
  {
    title: "Phân khu compound cuối",
    text: "Trellia Cove là lựa chọn rất đáng xem cho khách thích Mizuki nhưng muốn một không gian riêng tư, gọn gàng và mới hơn.",
  },
  {
    title: "3 tháp, 20 tầng",
    text: "Quy mô vừa đủ để có cộng đồng riêng, nhưng vẫn nằm trong tổng thể đại đô thị Mizuki đã có cư dân.",
  },
  {
    title: "Pháp lý sở hữu lâu dài",
    text: "Đây là điểm cộng quan trọng với khách mua ở lâu dài hoặc muốn giữ tài sản tại khu Nam.",
  },
];

const trelliaStrengths = [
  {
    title: "Lợi thế của sản phẩm ra sau trong khu đô thị đã có cư dân",
    text: "Điểm hay của Trellia Cove là khách không phải tưởng tượng quá nhiều. Trước khi chọn căn, Anh/Chị đã có thể đi thực tế Mizuki, xem cư dân, trường học, cảnh quan và nhịp sống xung quanh.",
  },
  {
    title: "Riêng tư hơn nhưng không tách khỏi hệ sinh thái Mizuki",
    text: "Trellia Cove có cảm giác riêng tư hơn nhờ mô hình compound, nhưng vẫn dùng được lợi thế lớn của Mizuki: kênh đào, công viên, trường học, phố thương mại và tiện ích hằng ngày.",
  },
  {
    title: "Phù hợp khách muốn nâng cấp chất lượng sống",
    text: "Nếu Anh/Chị đã quen khu Nam và muốn một căn mới hơn, tiện ích riêng hơn, môi trường sống văn minh hơn, Trellia Cove là lựa chọn nên đưa vào danh sách xem thực tế.",
  },
  {
    title: "Dễ so sánh với dự án mới trong cùng ngân sách",
    text: "Khi so với Vlasta Premier hay The Peak Garden, Trellia Cove có lợi thế là môi trường sống đã rõ. Việc còn lại là chọn căn, chọn tiến độ thanh toán và xem phương án nào dễ chịu nhất với dòng tiền.",
  },
];

const buyerCards = [
  {
    title: "Khách mua ở ngay",
    text: "Phù hợp khách muốn đi xem thực tế, cảm nhận cộng đồng cư dân và tiện ích trước khi quyết định.",
  },
  {
    title: "Gia đình cần diện tích",
    text: "Nếu gia đình cần 2PN rộng, dễ ở, dễ sắp xếp sinh hoạt, Mizuki/Trellia thường tạo cảm giác thoải mái hơn.",
  },
  {
    title: "Nhà đầu tư dòng tiền",
    text: "Sản phẩm đã có môi trường sống thật sẽ dễ kể câu chuyện cho thuê hơn, nhất là với khách thuê gia đình hoặc chuyên gia khu Nam.",
  },
];

const faqs = [
  {
    question: "Mizuki Park phù hợp với nhóm khách nào?",
    answer:
      "Mizuki Park phù hợp khách mua ở thật cần khu đô thị đã vận hành, gia đình cần diện tích căn hộ tốt hơn trong ngân sách, hoặc nhà đầu tư muốn xem xét sản phẩm có cộng đồng cư dân và khả năng khai thác cho thuê rõ hơn.",
  },
  {
    question: "Trellia Cove là gì?",
    answer:
      "Trellia Cove là phân khu compound cuối tại Mizuki Park, gồm 3 tháp 20 tầng, có căn hộ, căn hộ sân vườn, shophouse và nhà phố. Đây là lựa chọn phù hợp với khách thích Mizuki nhưng muốn sản phẩm mới và riêng tư hơn.",
  },
  {
    question: "Nên chọn Mizuki hay dự án mới như Vlasta Premier/The Peak Garden?",
    answer:
      "Nếu cần ở ngay, căn rộng và cộng đồng hiện hữu, Mizuki là phương án đáng xem. Nếu ưu tiên chính sách thanh toán giãn, sản phẩm mới và dòng tiền ban đầu nhẹ hơn, nên so thêm Vlasta Premier hoặc The Peak Garden theo ngân sách cụ thể.",
  },
  {
    question: "Trang này có phải website chính thức của Mizuki Park không?",
    answer:
      "Không. Đây là trang tư vấn độc lập của Saigon Living, giúp Anh/Chị có góc nhìn dễ hiểu trước khi xem căn. Giá, chính sách và hồ sơ giao dịch nên được cập nhật lại theo từng thời điểm.",
  },
];

export const metadata: Metadata = {
  title: "Mizuki Park Bình Chánh | Giá Trellia Cove, mặt bằng, có nên mua",
  description:
    "Trang tư vấn Mizuki Park Bình Chánh và Trellia Cove: giá tham khảo, mặt bằng căn hộ/nhà phố, tiện ích hiện hữu, lịch thanh toán, ưu đãi và checklist có nên mua.",
  keywords: [
    "Mizuki Park",
    "Mizuki Park Bình Chánh",
    "căn hộ Mizuki Park",
    "Trellia Cove",
    "mặt bằng Mizuki Park",
    "căn hộ khu Nam Sài Gòn",
  ],
  alternates: {
    canonical: absoluteUrl(pageUrl),
  },
  openGraph: {
    title: "Mizuki Park Bình Chánh | Giá Trellia Cove, mặt bằng, có nên mua",
    description:
      "Thông tin Mizuki Park, Trellia Cove, giá tham khảo, mặt bằng, tiện ích hiện hữu và góc nhìn chọn căn hộ khu Nam.",
    url: absoluteUrl(pageUrl),
    images: [
      {
        url: absoluteUrl(heroImage),
        width: 1600,
        height: 900,
        alt: "Phối cảnh kênh đào Mizuki Park Trellia Cove Bình Chánh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mizuki Park Bình Chánh | Giá Trellia Cove và mặt bằng",
    description: "Thông tin Mizuki Park, Trellia Cove, giá tham khảo, mặt bằng và checklist mua căn hộ khu Nam.",
    images: [absoluteUrl(heroImage)],
  },
};

export default function MizukiParkPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Mizuki Park Bình Chánh",
      url: absoluteUrl(pageUrl),
      inLanguage: "vi-VN",
      description: metadata.description,
      publisher: {
        "@type": "RealEstateAgent",
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
      },
      about: ["Mizuki Park", "Trellia Cove", "căn hộ khu Nam Sài Gòn", "Bình Chánh"],
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
          name: "Mizuki Park",
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
      <section className="relative isolate overflow-hidden bg-[#112017] px-5 pb-16 pt-32 text-white lg:px-8 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImage}
            alt="Phối cảnh kênh đào Mizuki Park Trellia Cove Bình Chánh"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#112017]/92 via-[#112017]/58 to-[#112017]/12" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#112017]/90 via-transparent to-[#112017]/28" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1fr_0.86fr]">
          <MotionReveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4b87a]/35 bg-[#112017]/45 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f0ddb0] shadow-lg shadow-black/20 backdrop-blur-md md:text-xs">
              <span className="size-1.5 rounded-full bg-[#d4b87a]" />
              Kênh đào, mảng xanh và cộng đồng gia đình
            </p>
            <h1 className="font-display max-w-4xl text-5xl font-light leading-[1.03] tracking-tight text-[#fffaf0] drop-shadow-[0_10px_28px_rgba(0,0,0,0.42)] sm:text-6xl md:text-7xl lg:text-[5rem]">
              Mizuki Park
              <span className="text-gradient-gold font-normal italic"> & Trellia Cove</span>
            </h1>
            <p className="font-display mt-4 max-w-3xl text-2xl font-light leading-[1.12] tracking-tight text-[#faf6f0]/92 sm:text-3xl md:text-4xl">
              Không gian xanh đã có đời sống tại khu Nam.
            </p>
            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-[#faf6f0]/88 md:text-lg">
              Mizuki Park phù hợp với gia đình muốn một môi trường sống mềm mại hơn: có kênh đào, nhiều mảng xanh, cư dân hiện hữu và tiện ích có thể kiểm chứng trước khi xuống tiền.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LeadFormTrigger source="Mizuki Park Hero" ctaLabel={PROJECT_INVENTORY_CTA_LABEL} className={INVENTORY_CTA_HERO_CLASS}>
                {PROJECT_INVENTORY_CTA_LABEL}
              </LeadFormTrigger>
              <Link href="#trellia-cove" className="rounded-full border border-[#faf6f0]/35 bg-[#112017]/32 px-8 py-4 text-center text-sm font-semibold text-[#faf6f0] shadow-lg shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[#faf6f0]/12 md:px-9">
                Xem Trellia Cove
              </Link>
            </div>
            <p className="mt-6 max-w-2xl text-xs leading-6 text-white/64">
              Saigon Living là kênh tư vấn độc lập, không phải website chính thức của chủ đầu tư. Thông tin giao dịch cần đối chiếu theo hồ sơ và chính sách tại thời điểm mua.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="grid gap-3 rounded-[2.25rem] border border-white/14 bg-white/[0.08] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:grid-cols-2">
              {quickStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-5">
                  <p className="font-display text-4xl text-[#f0ddb0]">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/72">{stat.label}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-5 py-20 text-[#15110c] lg:px-8" id="tong-quan">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
              Vì sao nên xem Mizuki Park
            </p>
            <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Điểm nổi bật khi chọn Mizuki Park khu Nam
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5d554c]">
              Điểm hay của Mizuki là Anh/Chị có thể đi xem và cảm nhận đời sống thật trước khi quyết định. Với nhiều dự án mới, khách phải hình dung khá nhiều từ phối cảnh. Còn tại Mizuki Park, Anh/Chị có thể nhìn thấy cư dân, cảnh quan, trường học, thương mại và tiện ích đang vận hành. Điều này giúp việc chọn căn thực tế hơn, đặc biệt với gia đình muốn mua để ở hoặc giữ tài sản lâu dài.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/blog/co-2-ty-nen-mua-mizuki-72m2-hay-vlasta-premier" className="rounded-full bg-[#15110c] px-6 py-3 text-sm font-semibold text-white">
                Đọc bài so sánh Mizuki - Vlasta
              </Link>
              <LeadFormTrigger source="Mizuki Park Overview CTA" className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-[#15110c]">
                Gửi ngân sách cần tư vấn
              </LeadFormTrigger>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="overflow-hidden rounded-[2.25rem] border border-[#d9c79f]/60 bg-white shadow-xl shadow-black/10">
              <div className="relative min-h-[430px] bg-[#112017]">
                <Image
                  src={masterplanImage}
                  alt="Mặt bằng tổng thể Mizuki Park và vị trí Trellia Cove Bình Chánh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 56vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                  Mặt bằng tổng thể
                </p>
                <p className="mt-3 text-sm leading-6 text-[#5d554c]">
                  Từ mặt bằng tổng thể, Anh/Chị sẽ thấy Trellia Cove nằm trong một khu đô thị đã có nhiều phân khu, trường học, phố thương mại và mảng xanh bao quanh.
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8" id="du-lieu">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
              Hồ sơ nhanh
            </p>
            <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Thông tin nhanh về Mizuki Park và Trellia Cove
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d554c]">
              Trước khi hỏi giá, nên hiểu nhanh Mizuki đang có gì.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#d9c79f]/70 bg-[#fbf8f2]">
            {mizukiFacts.map(([label, value]) => (
              <div key={label} className="grid gap-3 border-b border-[#d9c79f]/50 p-5 last:border-b-0 md:grid-cols-[0.28fr_0.72fr]">
                <p className="font-semibold text-[#15110c]">{label}</p>
                <p className="leading-7 text-[#5d554c]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#112017] px-5 py-24 text-white lg:px-8" id="mat-bang-trellia">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <MotionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f0ddb0]">
                Mặt bằng Trellia Cove
              </p>
              <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                Mặt bằng tổng thể phân khu Trellia Cove
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/72">
                Xem mặt bằng trước sẽ dễ chọn căn hơn rất nhiều. Cùng một loại căn nhưng chỉ cần khác tầng, hướng, vị trí gần lõi thang hay view nội khu là cảm giác ở và giá đã khác. Vì vậy, trước khi chọn mã căn Trellia Cove, Anh/Chị nên nhìn mặt bằng tổng thể, mặt bằng tầng và khu nhà phố LK11 để chọn đúng sản phẩm hợp nhu cầu.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LeadFormTrigger source="Mizuki Park Floor Plan CTA" className="btn-luxury rounded-full bg-[#d4b87a] px-7 py-4 text-sm font-semibold text-[#112017] transition hover:-translate-y-0.5 hover:bg-[#f0ddb0]">
                  Nhận file mặt bằng chi tiết
                </LeadFormTrigger>
                <Link href="#gia-trellia-cove" className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white">
                  Xem giá theo loại sản phẩm
                </Link>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <article className="overflow-hidden rounded-[2.5rem] border border-white/14 bg-white/[0.08] shadow-[0_30px_90px_rgba(0,0,0,0.24)]">
                <ZoomableImage
                  src={trelliaTowerPlanImage}
                  alt="Mặt bằng tầng cao tầng Trellia Cove Mizuki Park tháp T1"
                  className="relative min-h-[520px] bg-white"
                  imageClassName="object-contain p-3 transition duration-500 group-hover:scale-[1.01]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="border-t border-white/12 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f0ddb0]">
                    Cao tầng
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                    Mặt bằng tầng trệt, tầng 2, tầng 3 và tầng 4-20.
                  </h3>
                </div>
              </article>
            </MotionReveal>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {floorPlanCards.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <article className="h-full overflow-hidden rounded-[2rem] border border-white/14 bg-white/[0.08]">
                  <ZoomableImage
                    src={item.image}
                    alt={item.alt}
                    className="relative min-h-[230px] bg-white"
                    imageClassName="object-contain p-2 transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="border-t border-white/12 p-5">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/66">{item.description}</p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-5 py-24 lg:px-8" id="gia-trellia-cove">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <MotionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
                Giá tham khảo Trellia Cove
              </p>
              <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
                Giá bán tham khảo Trellia Cove tại Mizuki Park
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#5d554c]">
                Giá Trellia Cove nên xem theo từng mã căn cụ thể. Cùng là căn 2PN nhưng giá có thể chênh nhau tùy tầng, hướng, view, diện tích và chính sách khách chọn. Các mức dưới đây giúp Anh/Chị có khung tham khảo ban đầu trước khi lọc giỏ hàng chi tiết.
              </p>
              <p className="mt-4 text-base leading-7 text-[#5d554c]">
                Riêng nhà phố LK11 là dòng sản phẩm khác hẳn căn hộ vì có đất, mặt tiền và tổng diện tích sử dụng lớn hơn. Nếu Anh/Chị quan tâm nhóm này, nên xem trực tiếp vị trí từng căn trước khi so giá.
              </p>
              <div className="mt-8 rounded-[2rem] border border-[#d9c79f]/60 bg-white p-6">
                <p className="text-sm font-semibold text-[#15110c]">Ví dụ dễ hình dung</p>
                <p className="mt-3 text-sm leading-7 text-[#5d554c]">
                  Ví dụ một căn 2PN + 2WC ~70,46m2 thông thủy có giá trước chiết khấu ~5,75 tỷ chưa VAT và phí bảo trì. Sau khi tính ưu đãi và VAT, tổng giá tham khảo có thể quanh 5,9 tỷ, tùy mã căn và chính sách tại thời điểm tư vấn.
                </p>
              </div>
              <div className="relative mt-6 min-h-[280px] overflow-hidden rounded-[2rem] border border-[#d9c79f]/60 bg-[#112017]">
                <Image
                  src={buildingImage}
                  alt="Căn hộ hiện hữu Mizuki Park Bình Chánh khu Nam"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 36vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f0ddb0]">
                    Giá đi cùng trải nghiệm thật
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/78">
                    Khi môi trường sống đã hiện hữu, người mua dễ cảm nhận giá trị căn hộ hơn.
                  </p>
                </div>
              </div>
            </MotionReveal>
            <div className="grid gap-5 md:grid-cols-2">
              {priceRanges.map((item, index) => (
                <MotionReveal key={item.type} delay={index * 0.05}>
                  <article className="h-full rounded-[2rem] border border-[#d9c79f]/65 bg-white p-7 shadow-lg shadow-black/5">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                      {item.type}
                    </p>
                    <p className="font-display mt-4 text-4xl text-[#15110c]">{item.price}</p>
                    <p className="mt-3 text-sm font-semibold text-[#8a6a2f]">{item.area}</p>
                    <p className="mt-4 text-sm leading-7 text-[#5d554c]">{item.note}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
          <ProjectInventoryCta
            projectName="Mizuki Park"
            source="Mizuki Park Pricing CTA"
            className="mt-14"
            description="Saigon Living sẽ gửi 5 căn Mizuki Park — Trellia Cove có giá và chính sách tốt nhất trong giỏ hàng tuần này, lọc theo loại căn và ngân sách Anh/Chị đang cân nhắc."
          />
        </div>
      </section>

      <section className="bg-[#f7f1e6] px-5 py-20 lg:px-8" id="vi-tri">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
              Kết nối khu Nam
            </p>
            <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Vị trí Mizuki Park Bình Chánh và kết nối khu Nam
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5d554c]">
              Vị trí Mizuki dễ thuyết phục vì tiện ích xung quanh đã rất quen thuộc. Từ Mizuki có thể kết nối về Nguyễn Văn Linh, Nguyễn Hữu Thọ, Phạm Hùng, Quốc lộ 50 và khu Phú Mỹ Hưng. Với khách mua ở, điều quan trọng là cuộc sống hằng ngày đã thuận tiện: trường học, bệnh viện, trung tâm thương mại và cộng đồng cư dân đều đã có sẵn.
            </p>
          </MotionReveal>
          <div className="grid gap-4 md:grid-cols-3">
            {locationPoints.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-[2rem] border border-[#d9c79f]/60 bg-white p-6 shadow-lg shadow-black/5">
                  <p className="font-display text-3xl text-[#8a6a2f]">{item.title}</p>
                  <p className="mt-4 text-sm leading-7 text-[#5d554c]">{item.text}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8" id="lich-thanh-toan">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <MotionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
                Lịch thanh toán
              </p>
              <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
                Lịch thanh toán khi mua Trellia Cove
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#5d554c]">
                Chọn căn đẹp thôi chưa đủ, dòng tiền cũng phải dễ thở. Với Trellia Cove, Anh/Chị nên nhìn song song giá căn, số tiền cần thanh toán ban đầu, phần ngân hàng hỗ trợ và thời điểm bàn giao. Khi dòng tiền rõ ràng, việc chọn căn sẽ nhẹ nhàng hơn rất nhiều.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LeadFormTrigger source="Mizuki Park Payment Plan CTA" className="btn-luxury rounded-full bg-[#15110c] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8a6a2f]">
                  Nhận lịch thanh toán chi tiết
                </LeadFormTrigger>
                <Link href="#tong-quan" className="rounded-full border border-black/15 px-7 py-4 text-sm font-semibold text-[#15110c]">
                  Xem mặt bằng tổng thể
                </Link>
              </div>
            </MotionReveal>
            <div className="grid gap-5 md:grid-cols-2">
              {paymentPlans.map((plan, index) => (
                <MotionReveal key={plan.title} delay={index * 0.06}>
                  <article className="h-full rounded-[2rem] border border-[#d9c79f]/65 bg-[#fbf8f2] p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                      Phương án {index + 1}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#15110c]">{plan.title}</h3>
                    <div className="mt-6 space-y-3 text-sm leading-7 text-[#5d554c]">
                      {plan.items.map((item) => (
                        <p key={item} className="rounded-2xl border border-[#d9c79f]/45 bg-white/75 p-4">
                          {item}
                        </p>
                      ))}
                    </div>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
          <p className="mt-6 rounded-2xl border border-[#d9c79f]/55 bg-[#fbf8f2] p-5 text-sm leading-7 text-[#6b6258]">
            Lưu ý: Trellia Cove dự kiến bàn giao ~06/2027. Chính sách có thể thay đổi theo từng mã căn và từng thời điểm, nên Anh/Chị cứ gửi ngân sách hoặc mã căn quan tâm để được tính lại bảng thanh toán rõ ràng trước khi đặt cọc.
          </p>
        </div>
      </section>

      <section className="bg-[#112017] px-5 py-24 text-white lg:px-8" id="tien-ich">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <MotionReveal>
              <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-white/14 bg-[#0c1710]">
                <Image
                  src={landscapeImage}
                  alt="Cảnh quan nội khu Mizuki Park kênh đào xanh Bình Chánh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 54vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/10 to-transparent" />
                <div className="absolute inset-x-7 bottom-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f0ddb0]">
                    Sống giữa mảng xanh
                  </p>
                  <h3 className="font-display mt-4 text-3xl font-medium tracking-[-0.04em]">
                    Mizuki có lợi thế là bước vào đã thấy được nhịp sống.
                  </h3>
                </div>
              </div>
            </MotionReveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f0ddb0]">
                Tiện ích & cộng đồng
              </p>
              <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                Tiện ích và cộng đồng cư dân Mizuki Park
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/72">
                Ở Mizuki, khách không chỉ mua căn hộ mà mua cả môi trường sống đã có sẵn.
              </p>
              <div className="mt-9 grid gap-4">
                {amenityGroups.map((group) => (
                  <MotionReveal key={group.title}>
                    <article className="rounded-[2rem] border border-white/12 bg-white/[0.08] p-6">
                      <h3 className="text-lg font-semibold text-[#fffaf0]">{group.title}</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-xs text-white/72">
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                  </MotionReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f2] px-5 py-24 lg:px-8" id="trellia-cove">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <MotionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
                Trellia Cove
              </p>
              <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
                Trellia Cove — phân khu compound trong Mizuki Park
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#5d554c]">
                Trellia Cove hợp với khách thích Mizuki nhưng muốn một phân khu mới và riêng tư hơn. Nói đơn giản, Trellia Cove giống như cách bước vào Mizuki ở một phiên bản mới hơn: có tiện ích riêng, không gian riêng, nhưng vẫn hưởng trọn cộng đồng và tiện ích đã hình thành của toàn khu.
              </p>
              <LeadFormTrigger source="Mizuki Park Trellia Cove CTA" className="btn-luxury mt-8 inline-flex rounded-full bg-[#15110c] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8a6a2f]">
                Nhận thông tin Trellia Cove
              </LeadFormTrigger>
            </MotionReveal>
            <div className="grid gap-4 md:grid-cols-3">
              {trelliaHighlights.map((item, index) => (
                <MotionReveal key={item.title} delay={index * 0.05}>
                  <article className="h-full rounded-[2rem] border border-[#d9c79f]/65 bg-white p-6 shadow-lg shadow-black/5">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold text-[#15110c]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#5d554c]">{item.text}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {trelliaStrengths.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-[2rem] border border-[#d9c79f]/65 bg-white p-7 shadow-lg shadow-black/5">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                    Ưu điểm {index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#15110c]">{item.title}</h3>
                  <p className="mt-5 leading-7 text-[#5d554c]">{item.text}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
          <div className="mt-8 rounded-[2rem] border border-[#d9c79f]/65 bg-[#15110c] p-7 text-white md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f0ddb0]">
              Cách tư vấn dễ hiểu
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-white/78">
              Nếu khách thích sự chắc chắn của Mizuki nhưng vẫn muốn sản phẩm mới, tiện ích riêng và cảm giác riêng tư hơn, Trellia Cove là lựa chọn nên xem thực tế. Đây là điểm cân bằng khá dễ thuyết phục giữa “đã có cộng đồng” và “vẫn còn sản phẩm mới để chọn”.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#112017] px-5 py-24 text-white lg:px-8" id="uu-dai-trellia">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <MotionReveal>
              <div className="relative min-h-[560px] overflow-hidden rounded-[2.5rem] border border-white/14 bg-[#0c1710]">
                <Image
                  src={heroImage}
                  alt="Kênh đào Trellia Cove Mizuki Park tiện ích nội khu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent" />
                <div className="absolute inset-x-7 bottom-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f0ddb0]">
                    Chính sách bán hàng
                  </p>
                  <h3 className="font-display mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                    Ưu đãi chỉ thật sự tốt khi hợp với cách Anh/Chị dùng tiền.
                  </h3>
                </div>
              </div>
            </MotionReveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f0ddb0]">
                Ưu đãi Trellia Cove
              </p>
              <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                Ưu đãi và chính sách bán hàng Trellia Cove
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/72">
                Có khách nên chọn chiết khấu cao, có khách nên chọn bank hỗ trợ. Nếu dòng tiền mạnh, phương án thanh toán nhanh có thể tối ưu giá tốt hơn. Nếu muốn giữ vốn, phương án ngân hàng hỗ trợ lại dễ thở hơn. Vì vậy nên tính theo đúng mã căn, đúng ngân sách và đúng kế hoạch sử dụng tiền của Anh/Chị.
              </p>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {incentiveItems.map((item) => (
                  <MotionReveal key={item.title}>
                    <article className="h-full rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-5">
                      <h3 className="text-base font-semibold text-[#fffaf0]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/68">{item.text}</p>
                    </article>
                  </MotionReveal>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.08] p-6">
              <p className="text-sm font-semibold text-[#fffaf0]">Hỗ trợ lãi suất</p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Có phương án tài trợ lãi suất tối đa ~9%/năm, thời gian tham khảo 27 tháng kể từ mốc thanh toán đợt 2 và không quá 30/08/2028.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.08] p-6">
              <p className="text-sm font-semibold text-[#fffaf0]">Phí quản lý</p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Có chương trình hỗ trợ dịch vụ quản lý vận hành nội khu và ngoại vi trong 24 tháng từ bàn giao, không quá 30/06/2029.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.08] p-6">
              <p className="text-sm font-semibold text-[#fffaf0]">Thông tin đặt cọc</p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Tài khoản nhận tiền: Công ty Cổ phần NNH Mizuki, STK 1190 0292 5258 tại VietinBank. Nội dung: [Mã sản phẩm] [Tên khách hàng] thanh toán đặt cọc.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8" id="khach-hang">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
                Chọn theo mục tiêu
              </p>
              <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
                Mizuki Park Trellia Cove phù hợp với ai?
              </h2>
            </div>
            <Link href="/vlasta-premier" className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-[#15110c]">
              So với Vlasta Premier
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {buyerCards.map((card, index) => (
              <MotionReveal key={card.title} delay={index * 0.05}>
                <article className="h-full rounded-[2rem] border border-[#d9c79f]/60 bg-[#fbf8f2] p-7">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#15110c]">{card.title}</h3>
                  <p className="mt-5 leading-7 text-[#5d554c]">{card.text}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-[2.25rem] border border-[#d9c79f]/60 bg-[#112017]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[360px]">
                <Image
                  src={buildingImage}
                  alt="Block căn hộ hiện hữu Mizuki Park Trellia Cove Bình Chánh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 54vw"
                />
              </div>
              <div className="p-8 text-white md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f0ddb0]">
                  Lời khuyên khi xem căn
                </p>
                <h3 className="font-display mt-4 text-3xl font-medium tracking-[-0.04em]">
                  Nếu cần căn rộng, môi trường sống rõ ràng và tiện ích đã vận hành, Mizuki rất đáng đi xem.
                </h3>
                <p className="mt-6 leading-8 text-white/72">
                  Còn nếu Anh/Chị muốn giữ dòng tiền nhẹ hơn, có thể đặt Mizuki cạnh Vlasta Premier hoặc The Peak Garden để so thêm lịch thanh toán. Không có lựa chọn nào đúng cho tất cả, quan trọng là căn nào hợp với cách Anh/Chị sống và khả năng tài chính của mình.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
                Bài nên đọc tiếp
              </p>
              <h3 className="font-display mt-4 text-3xl font-medium tracking-[-0.04em] text-[#15110c] md:text-4xl">
                Bài viết liên quan Mizuki Park
              </h3>
              <p className="mt-4 text-lg leading-8 text-[#5d554c]">
                Nếu đang phân vân giữa ở ngay, vay mua hay chờ dự án mới, những bài này sẽ giúp Anh/Chị dễ quyết định hơn.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedArticleLinks.map((article) => (
                <Link key={article.href} href={article.href} className="rounded-[1.75rem] border border-[#d9c79f]/60 bg-[#fbf8f2] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
                  <p className="text-lg font-semibold leading-7 text-[#15110c]">{article.title}</p>
                  <p className="mt-3 text-sm leading-6 text-[#5d554c]">{article.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e6] px-5 py-20 lg:px-8" id="faq">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
            FAQ Mizuki Park
          </p>
          <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
            Những câu hỏi thường gặp về Mizuki Park
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[1.5rem] border border-[#d9c79f]/65 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#15110c]">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[#5d554c]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d9c79f]/60 bg-[#fbf8f2] p-6 text-sm leading-7 text-[#6b6258]">
          <p className="font-semibold text-[#15110c]">Miễn trừ trách nhiệm:</p>
          <p className="mt-2">
            Nội dung trên trang chỉ phục vụ mục đích tham khảo và tư vấn độc lập. Hình ảnh, bản vẽ, tiện ích, diện tích, pháp lý, giá bán và chính sách có thể thay đổi; người mua cần đối chiếu hồ sơ chính thức, hợp đồng và thông báo từ các bên liên quan tại thời điểm giao dịch.
          </p>
        </div>
      </section>

      <ContactSection variant="mizuki-park" />
    </>
  );
}
