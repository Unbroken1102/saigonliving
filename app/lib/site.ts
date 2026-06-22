export const siteConfig = {
  name: "Saigon Living",
  tagline: "South Saigon Real Estate Advisory",
  description:
    "Saigon Living là nền tảng tư vấn bất động sản cao cấp Nam Sài Gòn, tập trung dự án đáng sống, pháp lý, bảng giá, mặt bằng và góc nhìn đầu tư cho gia đình.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://saigonliving.net",
  ogImage: "/assets/optimized/overview-marina.jpg",
  shareImage: "/assets/optimized/overview-marina.jpg?v=20260606",
  locale: "vi_VN",
  contact: {
    advisor: "Phạm Đức Tú",
    phone: "0931781111",
    zalo: "https://zalo.me/0931781111",
    whatsapp: "https://wa.me/84931781111",
    email: "phamductubk@gmail.com",
    facebook: "https://www.facebook.com/profile.php?id=61590951983725",
  },
};

export const trackingConfig = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
};

export const project = {
  name: "Vlasta Premier Phú Thuận",
  slug: "vlasta-premier",
  developer: "Văn Phú",
  location: "Phường Phú Thuận, TP. Hồ Chí Minh",
  headline: "Khởi nguyên sống mới tại Nam Sài Gòn",
  summary:
    "Vlasta Premier Phú Thuận là dự án căn hộ cao cấp của Văn Phú tại cửa ngõ Nam Sài Gòn, gồm 602 căn hộ ở, 136 căn thương mại dịch vụ, 2 tầng hầm, 5 tầng khối đế TMDV và 30 tầng căn hộ.",
  priceNote: "Liên hệ nhận bảng giá và phân tích dòng sản phẩm phù hợp",
  heroStats: [
    { label: "Căn hộ ở", value: "602" },
    { label: "Căn TMDV", value: "136" },
    { label: "Tầng căn hộ", value: "30" },
    { label: "Bàn giao dự kiến", value: "2027" },
  ],
  facts: [
    { label: "Vị trí", value: "Phường Phú Thuận, TP. Hồ Chí Minh" },
    { label: "Chủ đầu tư", value: "Văn Phú" },
    { label: "Quy mô", value: "602 căn hộ ở, 136 căn TMDV" },
    { label: "Tầng", value: "02 tầng hầm, 05 tầng khối đế TMDV, 30 tầng căn hộ" },
    { label: "Loại hình", value: "1PN, 1PN+, 2PN, 3PN, Penthouse duplex" },
    { label: "Sở hữu", value: "Sở hữu lâu dài" },
  ],
  productTypes: [
    "Căn hộ 1PN",
    "Căn hộ 1PN+1",
    "Căn hộ 2PN",
    "Căn hộ 3PN",
    "Penthouse duplex",
    "Căn thương mại dịch vụ",
  ],
  locationHighlights: [
    { time: "10 phút", place: "Phú Mỹ Hưng, Lotte, Unilever" },
    { time: "15 phút", place: "Quận 1 - trung tâm hành chính, văn hóa" },
    { time: "20 phút", place: "Thủ Thiêm - Thủ Đức, trung tâm tài chính mới" },
    { time: "45 phút", place: "Sân bay Long Thành" },
  ],
  salesPolicyMilestones: [
    "Ngày T",
    "T+7 ngày",
    "T+60 ngày",
    "T+120 ngày",
    "T+180 ngày",
    "T+240 ngày",
    "T+300 ngày",
    "T+360 ngày",
    "Bàn giao nhà ở",
    "Nhận GCN quyền sở hữu nhà ở",
  ],
  highlights: [
    "Tọa lạc tại Phường Phú Thuận, cửa ngõ kết nối chiến lược của khu Nam Sài Gòn.",
    "Cơ cấu sản phẩm đa dạng từ 1PN đến 3PN, Penthouse duplex và thương mại dịch vụ.",
    "Hệ tiện ích nhiều lớp với business lounge, co-working, hồ bơi, gym, yoga, golf 3D, cinema lounge và thư viện.",
    "Pháp lý định hướng sở hữu lâu dài, bàn giao dự kiến năm 2027.",
  ],
  amenities: [
    "Bể bơi Panorama tầng 5",
    "Business Lounge",
    "Co-Working Space hơn 1.000m2",
    "Phòng gym",
    "Phòng yoga",
    "Phòng Golf 3D",
    "Phòng phim mini",
    "Phòng thư viện",
  ],
  legalHighlights: [
    {
      title: "Chủ đầu tư",
      value: "Văn Phú",
      text: "Thông tin chủ đầu tư cần được kiểm tra cùng hồ sơ giao dịch chính thức.",
    },
    {
      title: "Hình thức sở hữu",
      value: "Sở hữu lâu dài",
      text: "Khách mua cần đối chiếu theo hồ sơ pháp lý và hợp đồng tại thời điểm giao dịch.",
    },
    {
      title: "Bàn giao dự kiến",
      value: "2027",
      text: "Mốc bàn giao có thể cập nhật theo tiến độ triển khai và thông báo chính thức.",
    },
  ],
  pricingPlans: [
    {
      type: "Căn hộ 1PN",
      price: "Từ 3.9 tỷ",
      note: "Phù hợp khách độc thân, chuyên gia hoặc đầu tư cho thuê.",
    },
    {
      type: "Căn hộ 2PN",
      price: "Từ 5.7 tỷ",
      note: "Dòng sản phẩm cân bằng giữa nhu cầu ở thực và thanh khoản.",
    },
    {
      type: "Căn hộ 3PN",
      price: "Từ 7.2 tỷ",
      note: "Phù hợp gia đình cần không gian rộng và tầm nhìn thoáng.",
    },
    {
      type: "Penthouse duplex",
      price: "Liên hệ",
      note: "Sản phẩm giới hạn, cần tư vấn theo tầng, hướng và view cụ thể.",
    },
  ],
  investmentPoints: [
    {
      title: "Quy mô sản phẩm rõ ràng",
      text: "Dự án có 602 căn hộ ở và 136 căn TMDV, tạo quy mô vừa đủ để hình thành cộng đồng cư dân nhưng vẫn cần phân tích kỹ theo từng loại sản phẩm.",
    },
    {
      title: "Nhu cầu ở thực chất lượng cao",
      text: "Cơ cấu 1PN, 1PN+, 2PN, 3PN và Penthouse duplex giúp tiếp cận nhiều nhóm nhu cầu: độc thân, gia đình trẻ, gia đình đa thế hệ và khách mua tài sản cao cấp.",
    },
    {
      title: "Câu chuyện hạ tầng Nam Sài Gòn",
      text: "Khả năng kết nối Phú Mỹ Hưng, Quận 1, Thủ Thiêm - Thủ Đức và sân bay Long Thành tạo nền tảng cho câu chuyện tăng trưởng khu Nam.",
    },
  ],
  faqs: [
    {
      question: "Tên đầy đủ và định vị của dự án là gì?",
      answer:
        "Tên dự án là Vlasta Premier Phú Thuận, được định vị là tòa tháp đôi cao cấp bên sông tại trung tâm Nam Sài Gòn.",
    },
    {
      question: "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      answer:
        "Vị trí dự án là thửa 548, tờ bản đồ số 85, đường Đào Trí, phường Phú Thuận, TP. Hồ Chí Minh.",
    },
    {
      question: "Chủ đầu tư và đơn vị phát triển dự án là ai?",
      answer:
        "Chủ đầu tư là Công ty Cổ phần Đầu tư Xây dựng New Tech. New Tech là công ty con thuộc hệ thống Văn Phú.",
    },
    {
      question: "Đơn vị quản lý vận hành dự án là đơn vị nào?",
      answer:
        "Đơn vị quản lý vận hành là CBRE. Đây là điểm quan trọng với khách mua ở vì ảnh hưởng trực tiếp đến chất lượng vận hành sau bàn giao.",
    },
    {
      question: "Quy mô dự án gồm những gì?",
      answer:
        "Dự án gồm 2 tòa tháp, 2 tầng hầm, 5 tầng thương mại dịch vụ và 29 tầng căn hộ chung cư. Tổng diện tích khu đất khoảng 9.016,5 m2.",
    },
    {
      question: "Dự án có bao nhiêu sản phẩm và loại căn nào?",
      answer:
        "Tổng số lượng là 602 căn hộ ở, gồm 54 căn 1PN khoảng 44,55-44,57 m2, 162 căn 1PN+ khoảng 49,99-52,49 m2, 270 căn 2PN khoảng 66,68-72,66 m2, 108 căn 3PN khoảng 89,52-91,33 m2 và 8 căn penthouse khoảng 281,6-348,2 m2.",
    },
    {
      question: "Các tiện ích nổi bật của dự án là gì?",
      answer:
        "Tiện ích nổi bật gồm bể bơi Panorama và bể bơi trẻ em khoảng 500 m2, Pool Bar, Gym & Fitness/Yoga/Dance khoảng 250 m2, nhà trẻ khoảng 1.010 m2, Co-Working khoảng 1.034 m2, thư viện, rạp phim gia đình, karaoke, phòng golf 3D, sân chơi trẻ em, vườn thiền và trạm sạc xe điện.",
    },
    {
      question: "Cư dân bên ngoài có được dùng tiện ích nội khu không?",
      answer:
        "Các dịch vụ nằm trong phí dịch vụ tòa nhà chỉ dành cho cư dân/chủ sở hữu diện tích trong tòa nhà. Các tiện ích gia tăng có thu phí riêng có thể có khách bên ngoài sử dụng có trả phí.",
    },
    {
      question: "Hệ thống an ninh của dự án gồm mấy lớp?",
      answer:
        "Hệ thống an ninh gồm 4 lớp: chốt an ninh 24/24 tại lối ra vào và hầm xe, access control tại lối phụ và tiện ích, kiểm soát tại sảnh/thang máy, camera hành lang và giám sát từ phòng CCTV trung tâm.",
    },
    {
      question: "Tiêu chuẩn bàn giao căn hộ như thế nào?",
      answer:
        "Các căn hộ bàn giao hoàn thiện, penthouse bàn giao thô. Danh mục vật tư bàn giao theo danh mục được chủ đầu tư ban hành.",
    },
    {
      question: "Thời hạn sở hữu của căn hộ là bao lâu?",
      answer:
        "Đối với loại hình căn hộ, người Việt Nam sở hữu lâu dài. Khách mua cần đối chiếu theo hợp đồng mua bán và hồ sơ pháp lý tại thời điểm giao dịch.",
    },
    {
      question: "Dự án có ngân hàng bảo lãnh không?",
      answer:
        "Theo thông tin tư vấn hiện tại, dự án có phương án phát hành thư bảo lãnh cho người mua nhà của VPBank. Khách mua cần đối chiếu chứng thư, phí bảo lãnh và điều kiện cụ thể theo hồ sơ giao dịch tại từng thời điểm.",
    },
    {
      question: "Thời gian bàn giao dự kiến là khi nào?",
      answer:
        "Thời gian bàn giao dự kiến là Q4/2027. Mốc này cần được cập nhật theo tiến độ triển khai và thông báo chính thức.",
    },
    {
      question: "Phí quản lý vận hành dự kiến bao nhiêu?",
      answer:
        "Mức phí quản lý dự kiến là 16.500 đồng/m2/tháng, chưa gồm VAT, bao gồm các dịch vụ phục vụ diện tích sở hữu chung của tòa nhà.",
    },
    {
      question: "Phí bảo trì phần sở hữu chung là bao nhiêu?",
      answer:
        "Kinh phí bảo trì phần sở hữu chung đối với căn hộ/phần diện tích khác trong nhà chung cư là 2% giá trị căn hộ hoặc diện tích khác bán, cho thuê mua, được quy định trong hợp đồng.",
    },
    {
      question: "Diện tích căn hộ khi bàn giao có được điều chỉnh không?",
      answer:
        "Nếu diện tích sử dụng thực tế chênh lệch trong phạm vi 1% so với hợp đồng thì hai bên không điều chỉnh giá. Nếu vượt quá ±1% thì giá bán được điều chỉnh theo diện tích đo đạc thực tế khi bàn giao.",
    },
    {
      question: "Hai người cùng góp tiền mua có được cùng đứng tên hợp đồng không?",
      answer:
        "Có. Hai người có thể cùng đứng tên trên hợp đồng mua bán; việc cấp giấy chứng nhận thực hiện theo quy định pháp luật và thỏa thuận đại diện nếu có.",
    },
    {
      question: "Có được chuyển nhượng hợp đồng mua bán không?",
      answer:
        "Chủ đầu tư có trách nhiệm tạo điều kiện để bên mua chuyển nhượng hợp đồng mua bán phù hợp quy định pháp luật. Phí/thuế phát sinh thực hiện theo quy định tại thời điểm chuyển nhượng.",
    },
    {
      question: "Người nước ngoài hoặc Việt kiều có thể mua không?",
      answer:
        "Người Việt Nam định cư ở nước ngoài, người gốc Việt Nam định cư ở nước ngoài, cá nhân/tổ chức nước ngoài cần cung cấp giấy tờ theo từng trường hợp. Thanh toán của người nước ngoài phải thông qua tổ chức tín dụng hoặc chi nhánh ngân hàng nước ngoài hoạt động tại Việt Nam.",
    },
    {
      question: "Các kết nối vùng nổi bật quanh dự án là gì?",
      answer:
        "Các tuyến đường chính gồm Nguyễn Văn Linh, Đào Trí, Nguyễn Hữu Thọ; các tiện ích lân cận gồm FV, Tim Tâm Đức, Đa Khoa Quốc Tế Nam Sài Gòn, Crescent Mall, SC VivoCity, Lotte Mart, Hồ Bán Nguyệt, Nam Viên, RMIT, Tôn Đức Thắng và cụm trường quốc tế.",
    },
  ],
};

// Legacy migration snapshot only. Blog content now lives in app/content/posts/*.mdx.
// Do not edit article text in this file.
type LegacyBlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  featuredImage: string;
  keywords: string[];
  sections: Array<{
    id: string;
    heading: string;
    body: string[];
  }>;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const seoHubLinks = [
  {
    title: "Tổng quan Vlasta Premier Phú Thuận",
    description: "Trang tổng quan về vị trí, pháp lý, tiện ích, tiến độ, bảng giá và FAQ.",
    href: "/vlasta-premier",
  },
  {
    title: "Bảng giá Vlasta Premier",
    description: "Xem giá tham khảo theo dòng sản phẩm và nhận bảng giá mới nhất.",
    href: "/vlasta-premier#pricing",
  },
  {
    title: "Pháp lý dự án",
    description: "Tóm tắt chủ đầu tư, sở hữu, bảo lãnh và các điểm cần kiểm tra.",
    href: "/vlasta-premier#legal",
  },
  {
    title: "Tiến độ Vlasta Premier",
    description: "Ảnh tiến độ và mốc bàn giao dự kiến của dự án.",
    href: "/vlasta-premier#progress",
  },
  {
    title: "Mizuki Park Bình Chánh",
    description: "Trang tư vấn căn hộ Mizuki, tiện ích hiện hữu, Trellia Cove và so sánh khu Nam.",
    href: "/mizuki-park",
  },
  {
    title: "The Peak Garden Quận 7",
    description: "Trang tư vấn The Peak Garden, giá, pháp lý, có nên mua và so sánh với Vlasta.",
    href: "/the-peak-garden",
  },
  {
    title: "Eco Retreat Long An",
    description: "Trang tư vấn Eco Retreat Bến Lức: vị trí, tiện ích sinh thái, mặt bằng và góc nhìn có nên mua.",
    href: "/eco-retreat",
  },
  {
    title: "FAQ dự án",
    description: "Các câu hỏi khách mua thường cần trước khi đặt cọc.",
    href: "/vlasta-premier#faq",
  },
];

export const vlastaHubSlugs = [
  "vlasta-premier-o-dau",
  "vlasta-premier-chu-dau-tu-la-ai",
  "vlasta-premier-ban-giao-khi-nao",
  "phi-quan-ly-vlasta-premier",
  "mat-bang-tang-vlasta-premier",
  "gia-vlasta-premier-2026",
  "gia-can-1pn-vlasta-premier-2026",
  "gia-can-2pn-vlasta-premier-2026",
  "gia-can-3pn-vlasta-premier-2026",
  "phap-ly-vlasta-premier-van-phu",
  "vlasta-premier-co-so-hong-khong",
  "review-vi-tri-vlasta-premier",
  "thanh-toan-vlasta-premier-20-den-khi-nhan-nha",
  "cam-1-ty-tien-mat-mua-can-ho-cao-cap-sai-gon-khong",
  "vlasta-premier-co-dang-dau-tu-khong",
  "vlasta-premier-co-nen-mua-de-o-khong",
  "vlasta-premier-co-tiem-nang-tang-gia-khong",
  "so-sanh-vlasta-premier-q7-riverside",
  "so-sanh-vlasta-premier-mizuki-park",
  "so-sanh-vlasta-premier-the-peak-garden",
  "so-sanh-vlasta-premier-sunshine-sky-city",
  "so-sanh-vlasta-premier-sunshine-diamond-river",
  "so-sanh-mizuki-vlasta-premier-the-peak-garden",
  "so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden",
] as const;

export function isVlastaHubPost(slug: string) {
  return (vlastaHubSlugs as readonly string[]).includes(slug);
}

export const blogHubSections = [
  {
    id: "eco-retreat",
    eyebrow: "Dự án tiêu điểm",
    title: "Eco Retreat",
    image: "/assets/eco-retreat/eco-retreat-hero.webp",
    description:
      "Cụm bài cho khách quan tâm Eco Retreat: giá bán, vị trí Bến Lức, sản phẩm thấp tầng, so sánh với Mizuki Park và câu hỏi có nên mua.",
    href: "/eco-retreat",
    cta: "Xem Eco Retreat",
    slugs: [
      "eco-retreat-co-nen-mua-khong",
      "gia-eco-retreat-2026",
      "vi-tri-eco-retreat-ben-luc-co-xa-khong",
      "so-sanh-eco-retreat-mizuki-park",
      "nha-pho-eco-retreat-tu-5-ty-co-dang-mua-khong",
    ],
  },
  {
    id: "vinhomes-binh-chanh",
    eyebrow: "Dự án sắp ra mắt",
    title: "Vinhomes Bình Chánh",
    image: "/assets/vinhomes-binh-chanh/quy-hoach-hung-long-binh-chanh.jpg",
    description:
      "Theo dõi quy hoạch Hưng Long - Bình Chánh, hạ tầng khu Tây Nam, môi trường sống và dòng tiền địa phương khi đại đô thị được chú ý.",
    href: "/vinhomes-binh-chanh",
    cta: "Xem Bình Chánh",
    slugs: [
      "vinhomes-binh-chanh-doc-quy-hoach-hung-long-1512ha",
      "vin-group-nghien-cuu-sieu-do-thi-1512ha-binh-chanh",
      "den-bu-tai-dinh-cu-vinhomes-binh-chanh-dong-tien-di-ve-dau",
      "bai-rac-da-phuoc-hung-long-1512ha-binh-chanh",
      "he-thong-chong-ngap-khu-nam-binh-chanh-quan-7-2026",
    ],
  },
  {
    id: "mizuki-park",
    eyebrow: "Dự án tiêu điểm",
    title: "Mizuki Park",
    image: "/assets/mizuki-park/mizuki-park-kenh-dao-tien-ich.jpg",
    description:
      "Các bài viết về Mizuki Park, Trellia Cove, lợi thế khu đô thị đã có cư dân và cách so với Vlasta/The Peak theo ngân sách.",
    href: "/mizuki-park",
    cta: "Xem Mizuki",
    slugs: [
      "cau-binh-tien-noi-trung-tam-khu-nam-mizuki-park",
      "mizuki-park-huong-loi-gi-tu-vinhomes-binh-chanh",
      "nha-o-xa-hoi-trong-khu-do-thi-lon-nam-long-mizuki-hung-long",
      "co-2-ty-nen-mua-mizuki-72m2-hay-vlasta-premier",
      "so-sanh-vlasta-premier-mizuki-park",
      "so-sanh-mizuki-vlasta-premier-the-peak-garden",
    ],
  },
  {
    id: "vlasta-premier",
    eyebrow: "Dự án tiêu điểm",
    title: "Vlasta Premier",
    image: "/assets/optimized/overview-marina.jpg",
    description:
      "Cụm bài về giá bán, pháp lý, vị trí, thanh toán, sổ hồng, tiềm năng tăng giá và các bài so sánh trực tiếp với dự án khu Nam.",
    href: "/vlasta-premier",
    cta: "Xem Vlasta",
    slugs: [...vlastaHubSlugs],
  },
  {
    id: "the-peak-garden",
    eyebrow: "Góc so sánh Quận 7",
    title: "The Peak Garden",
    image: "/assets/the-peak-garden/the-peak-garden-hero.jpg",
    description:
      "Nhóm bài The Peak Garden theo giá bán, có nên mua, hạ tầng Metro Bến Thành - Cần Giờ và so sánh căn hộ Quận 7.",
    href: "/the-peak-garden",
    cta: "Xem The Peak",
    slugs: [
      "gia-the-peak-garden-2026",
      "the-peak-garden-co-nen-mua-khong",
      "the-peak-garden-huong-loi-metro-ben-thanh-can-gio",
      "so-sanh-the-peak-garden-belleza-q7-boulevard",
      "so-sanh-vlasta-premier-the-peak-garden",
      "so-sanh-mizuki-vlasta-premier-the-peak-garden",
      "so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden",
    ],
  },
  {
    id: "tt-genesis",
    eyebrow: "Dự án sắp ra mắt",
    title: "TT Genesis",
    image: "/assets/tt-genesis/vi-tri-tt-genesis.jpg",
    description:
      "Trang tư vấn TT Genesis Đào Sư Tích, Nhà Bè: giá dự kiến từ 2,8 tỷ, vị trí gần Phú Mỹ Hưng, loại căn 1PN-3PN và checklist trước khi theo dõi mở bán.",
    href: "/tt-genesis",
    cta: "Xem TT Genesis",
    slugs: [
      "tt-genesis-co-nen-mua-khong",
      "thanh-toan-tt-genesis",
      "gia-can-1pn-tt-genesis-2026",
      "tt-genesis-ban-giao-khi-nao",
      "tt-genesis-hay-hoang-anh-an-tien-silver-star",
      "tt-genesis-co-gi-dac-biet",
      "gia-tt-genesis-2026",
    ],
  },
  {
    id: "thi-truong",
    eyebrow: "Cẩm nang mua nhà",
    title: "Góc tài chính & chọn căn",
    image: "/assets/optimized/location.jpg",
    description:
      "Các bài nền giúp khách mua hiểu vốn tự có, lãi suất, khẩu vị rủi ro và tiêu chí chọn căn trước khi đi vào từng dự án.",
    href: "/blog",
    cta: "Xem tất cả bài viết",
    slugs: [
      "metro-ben-thanh-can-gio-cac-nha-ga-chinh",
      "co-1-2-ty-mua-can-ho-sai-gon-2026",
      "cac-yeu-to-chon-can-ho-phu-hop-hien-nay",
      "ha-tang-bung-no-gia-tang-lai-suat-co-nen-mua-bat-dong-san",
      "chan-dung-khach-hang-mua-bat-dong-san-khi-lai-suat-cao",
      "du-an-phu-hop-gia-dinh-tre-nam-sai-gon",
    ],
  },
] as const;

export type BlogHubSection = (typeof blogHubSections)[number];

export function getBlogHubForSlug(slug: string) {
  return blogHubSections.find((hub) => (hub.slugs as readonly string[]).includes(slug)) ?? null;
}

export function getBlogHubProjectName(hub: BlogHubSection | null) {
  if (!hub || hub.id === "thi-truong") {
    return "Nam Sài Gòn";
  }

  return hub.title;
}

export const vlastaSeoClusterLinks = [
  {
    title: "Vlasta Premier ở đâu?",
    description: "Địa chỉ Đào Trí Phú Thuận, kết nối Phú Mỹ Hưng và checklist đi thực địa.",
    href: "/blog/vlasta-premier-o-dau",
  },
  {
    title: "Chủ đầu tư là ai?",
    description: "New Tech, hệ thống Văn Phú và đơn vị vận hành CBRE.",
    href: "/blog/vlasta-premier-chu-dau-tu-la-ai",
  },
  {
    title: "Bàn giao khi nào?",
    description: "Tiến độ dự kiến Q4/2027 và mốc cần theo dõi trước khi ký.",
    href: "/blog/vlasta-premier-ban-giao-khi-nao",
  },
  {
    title: "Phí quản lý bao nhiêu?",
    description: "16.500 đồng/m2/tháng, phí bảo trì 2% và chi phí sống thực tế.",
    href: "/blog/phi-quan-ly-vlasta-premier",
  },
  {
    title: "Mặt bằng tầng",
    description: "Cách đọc layout, chọn căn 1PN-3PN theo view và vị trí trên sàn.",
    href: "/blog/mat-bang-tang-vlasta-premier",
  },
  {
    title: "Giá Vlasta Premier 2026",
    description: "Bảng giá tham khảo theo 1PN, 1PN+, 2PN, 3PN và lưu ý khi so giỏ hàng.",
    href: "/blog/gia-vlasta-premier-2026",
  },
  {
    title: "Giá căn 1PN 2026",
    description: "Tổng vốn căn 1PN/1PN+ và phù hợp ở hay đầu tư.",
    href: "/blog/gia-can-1pn-vlasta-premier-2026",
  },
  {
    title: "Giá căn 2PN 2026",
    description: "Diện tích 77-80m2, tổng giá và cách chọn căn gia đình.",
    href: "/blog/gia-can-2pn-vlasta-premier-2026",
  },
  {
    title: "Giá căn 3PN 2026",
    description: "Không gian 101-102m2, view và checklist chọn căn lớn.",
    href: "/blog/gia-can-3pn-vlasta-premier-2026",
  },
  {
    title: "Pháp lý Vlasta Premier",
    description: "Tên pháp lý New Tech, giấy phép xây dựng, quy hoạch 1/500 và bảo lãnh ngân hàng.",
    href: "/blog/phap-ly-vlasta-premier-van-phu",
  },
  {
    title: "Vlasta Premier có sổ hồng không?",
    description: "Cách hiểu sở hữu lâu dài, điều kiện ra sổ và các giấy tờ nên kiểm tra trước khi mua.",
    href: "/blog/vlasta-premier-co-so-hong-khong",
  },
  {
    title: "Thanh toán 20% đến khi nhận nhà",
    description: "Phân tích lợi thế dòng tiền, hỗ trợ lãi suất và rủi ro cần tính trước khi xuống tiền.",
    href: "/blog/thanh-toan-vlasta-premier-20-den-khi-nhan-nha",
  },
  {
    title: "So sánh Vlasta Premier vs Q7 Riverside",
    description: "Hai thế hệ trên trục Đào Trí: Q7 Riverside đông dân vs Vlasta Premier wellness ven sông.",
    href: "/blog/so-sanh-vlasta-premier-q7-riverside",
  },
  {
    title: "So sánh Vlasta Premier vs Mizuki Park",
    description: "Không gian xanh, giá bán, lịch thanh toán và nhóm khách phù hợp từng dự án.",
    href: "/blog/so-sanh-vlasta-premier-mizuki-park",
  },
  {
    title: "So sánh Vlasta Premier vs The Peak Garden",
    description: "Vị trí Phú Mỹ Hưng, hạ tầng Metro và chất lượng căn hộ khi so ngân sách.",
    href: "/blog/so-sanh-vlasta-premier-the-peak-garden",
  },
  {
    title: "So sánh Vlasta Premier với nhóm Sunshine",
    description: "Đặt Vlasta Premier cạnh Sunshine Sky City, Sunshine Diamond River và The Peak Garden.",
    href: "/blog/so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden",
  },
];

export const legacyBlogPostsNotUsed: LegacyBlogPost[] = [
  {
    slug: "vlasta-premier-co-dang-dau-tu-khong",
    title: "Vlasta Premier có đáng đầu tư không?",
    description:
      "Phân tích Vlasta Premier dưới góc nhìn giá trị sống, cơ cấu căn hộ cao cấp, thanh khoản và chiến lược nắm giữ tại Nam Sài Gòn.",
    category: "Investment Insight",
    publishedAt: "2026-06-03",
    readingTime: "6 phút đọc",
    featuredImage: "Nền tối ánh vàng mô phỏng dự án căn hộ cao cấp Nam Sài Gòn",
    keywords: ["Vlasta Premier có đáng đầu tư", "đầu tư Nam Sài Gòn", "căn hộ cao cấp Phú Thuận"],
    sections: [
      {
        id: "tong-quan",
        heading: "Tổng quan luận điểm đầu tư",
        body: [
          "Vlasta Premier không nên được nhìn như một sản phẩm lướt sóng ngắn hạn. Giá trị chính của dự án nằm ở vị trí Phú Thuận, hệ tiện ích cao tầng, cơ cấu căn hộ đa dạng và khả năng giữ tài sản trong chu kỳ dài.",
          "Với khách mua có nhu cầu ở thực, câu hỏi quan trọng không chỉ là giá bao nhiêu mà là dự án có giải quyết đúng bài toán không gian sống, cộng đồng cư dân và kết nối hằng ngày hay không.",
        ],
      },
      {
        id: "rui-ro",
        heading: "Rủi ro cần kiểm tra trước khi mua",
        body: [
          "Nhà đầu tư cần kiểm tra kỹ pháp lý, tiến độ, chính sách thanh toán, mặt bằng giá thứ cấp trong khu Nam và khả năng cho thuê theo từng loại sản phẩm.",
          "Một sản phẩm cao cấp chỉ tốt khi giá vào hợp lý với mục tiêu nắm giữ. Việc chọn sai vị trí căn hoặc dùng đòn bẩy quá cao có thể làm giảm hiệu quả đầu tư.",
        ],
      },
      {
        id: "ket-luan",
        heading: "Kết luận cho từng nhóm khách",
        body: [
          "Nếu bạn mua để ở và ưu tiên chất lượng sống, Vlasta Premier là một lựa chọn đáng đưa vào shortlist. Nếu mua đầu tư, nên yêu cầu phân tích dòng tiền, giá so sánh và kịch bản thoát hàng trước khi quyết định.",
        ],
      },
    ],
  },
  {
    slug: "so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden",
    title: "So sánh Vlasta Premier với Sunshine Sky City, Sunshine Diamond River và The Peak Garden",
    description:
      "So sánh Vlasta Premier Phú Thuận với Sunshine Sky City, Sunshine Diamond River và The Peak Garden theo vị trí, yếu tố Đào Trí ven sông, sản phẩm, tiện ích, giá và mục tiêu đầu tư.",
    category: "Market Comparison",
    publishedAt: "2026-06-03",
    readingTime: "7 phút đọc",
    featuredImage: "Hai khối kiến trúc luxury đặt trên bản đồ Nam Sài Gòn",
    keywords: ["so sánh Vlasta Premier Sunshine Sky City", "Sunshine Diamond River", "The Peak Garden"],
    sections: [
      {
        id: "dinh-vi",
        heading: "Khác biệt về định vị",
        body: [
          "Vlasta Premier cần được đặt cạnh Sunshine Sky City, Sunshine Diamond River và The Peak Garden theo vị trí, yếu tố Đào Trí ven sông, giá vào, tiện ích vận hành, pháp lý, tiến độ và mục tiêu sử dụng.",
          "Vì vậy, hai dự án không cạnh tranh trực diện ở mọi tiêu chí. Điểm so sánh quan trọng là mục tiêu sử dụng và khẩu vị tài chính của từng gia đình.",
        ],
      },
      {
        id: "thanh-khoan",
        heading: "Thanh khoản và khách thuê",
        body: [
          "Với Vlasta Premier, tệp thuê và thanh khoản cần tách theo 1PN, 1PN+1, 2PN, 3PN, Penthouse duplex và TMDV. Mỗi loại sản phẩm có biên khách và kỳ vọng dòng tiền khác nhau.",
          "Nhà đầu tư nên so sánh theo yield thực tế, chi phí vận hành và mức độ khan hiếm của loại hình.",
        ],
      },
      {
        id: "lua-chon",
        heading: "Nên chọn dự án nào?",
        body: [
          "Nếu ưu tiên vị trí Phú Thuận, tiện ích cao tầng và thương hiệu Văn Phú, Vlasta Premier có lợi thế. Nếu ưu tiên ngân sách hoặc chiến lược cho thuê khác, cần so sánh sâu từng layout và chính sách bán hàng.",
        ],
      },
    ],
  },
  {
    slug: "review-vi-tri-vlasta-premier",
    title: "Review vị trí Vlasta Premier",
    description:
      "Đánh giá vị trí Vlasta Premier theo kết nối, tiện ích khu Nam, thói quen di chuyển và tiềm năng hình thành cộng đồng cư dân cao cấp.",
    category: "Location Review",
    publishedAt: "2026-06-03",
    readingTime: "5 phút đọc",
    featuredImage: "Bản đồ trừu tượng với các trục kết nối Nam Sài Gòn",
    keywords: ["vị trí Vlasta Premier", "review Vlasta Premier", "Nam Sài Gòn"],
    sections: [
      {
        id: "ket-noi",
        heading: "Kết nối hằng ngày",
        body: [
          "Vị trí dự án cần được đánh giá theo lịch sinh hoạt thật: đi làm, đưa con đi học, tiếp cận y tế, mua sắm và di chuyển cuối tuần. Với nhóm khách gia đình, thời gian di chuyển ổn định thường quan trọng hơn khoảng cách trên bản đồ.",
          "Khu Nam Sài Gòn có lợi thế nhờ hệ tiện ích đã hình thành quanh Quận 7, Phú Mỹ Hưng và các trục dịch vụ đang mở rộng.",
        ],
      },
      {
        id: "song",
        heading: "Giá trị sống khu Nam",
        body: [
          "Điểm mạnh của khu Nam là nhịp sống thoáng, nhiều mảng xanh hơn trung tâm và cộng đồng cư dân quốc tế. Đây là nền tảng tốt cho các dự án định vị lifestyle.",
        ],
      },
      {
        id: "luu-y",
        heading: "Lưu ý khi khảo sát thực tế",
        body: [
          "Nên đi thực địa vào giờ cao điểm, kiểm tra tuyến đường thường dùng và so sánh trải nghiệm với các dự án cùng phân khúc. Vị trí tốt phải phù hợp lối sống riêng của gia đình bạn.",
        ],
      },
    ],
  },
  {
    slug: "du-an-phu-hop-gia-dinh-tre-nam-sai-gon",
    title: "Dự án phù hợp gia đình trẻ Nam Sài Gòn",
    description:
      "Các tiêu chí chọn dự án cho gia đình trẻ tại Nam Sài Gòn: trường học, tiện ích, cộng đồng, an ninh và khả năng tăng giá dài hạn.",
    category: "Family Living",
    publishedAt: "2026-06-03",
    readingTime: "6 phút đọc",
    featuredImage: "Gia đình trẻ trong không gian sống tối giản và nhiều ánh sáng",
    keywords: ["dự án cho gia đình trẻ Nam Sài Gòn", "family living", "Vlasta Premier"],
    sections: [
      {
        id: "tieu-chi",
        heading: "Bộ tiêu chí cho gia đình trẻ",
        body: [
          "Một dự án phù hợp gia đình trẻ cần cân bằng năm yếu tố: an ninh, giáo dục, mảng xanh, tiện ích hằng ngày và cộng đồng cư dân. Giá bán chỉ là một phần của quyết định.",
          "Những gia đình có con nhỏ thường nên ưu tiên môi trường sống ổn định, ít xáo trộn và dễ duy trì nếp sinh hoạt.",
        ],
      },
      {
        id: "nam-sai-gon",
        heading: "Vì sao Nam Sài Gòn được quan tâm?",
        body: [
          "Nam Sài Gòn có lợi thế về trường quốc tế, dịch vụ y tế, trung tâm thương mại và cộng đồng cư dân đã hình thành. Đây là nền tảng giúp nhiều gia đình trẻ chuyển từ tiêu chí mua nhà sang tiêu chí chọn hệ sinh thái sống.",
        ],
      },
      {
        id: "goi-y",
        heading: "Gợi ý cách chọn",
        body: [
          "Hãy lập danh sách nhu cầu hằng ngày, đo thời gian di chuyển thực tế và so sánh tiện ích dùng được ngay. Với nhóm căn hộ cao cấp như Vlasta Premier, nên khảo sát sâu layout, tầng, view và chính sách thanh toán.",
        ],
      },
    ],
  },
  {
    slug: "vlasta-premier-co-tiem-nang-tang-gia-khong",
    title: "Vlasta Premier có tiềm năng tăng giá không?",
    description:
      "Đánh giá tiềm năng tăng giá Vlasta Premier dựa trên khan hiếm sản phẩm, hạ tầng Nam Sài Gòn, chất lượng cư dân và nhu cầu ở thực.",
    category: "Capital Growth",
    publishedAt: "2026-06-03",
    readingTime: "6 phút đọc",
    featuredImage: "Đường cong tăng trưởng tinh tế trên nền kiến trúc luxury",
    keywords: ["Vlasta Premier tiềm năng tăng giá", "tăng giá Nam Sài Gòn", "bất động sản cao cấp"],
    sections: [
      {
        id: "dong-luc",
        heading: "Các động lực tăng giá",
        body: [
          "Tiềm năng tăng giá của Vlasta Premier đến từ ba yếu tố chính: vị trí Phú Thuận, cơ cấu sản phẩm căn hộ cao cấp - TMDV và kỳ vọng hạ tầng khu Nam tiếp tục hoàn thiện.",
          "Tuy nhiên, tăng giá bền vững thường phụ thuộc vào giá mua ban đầu, chất lượng vận hành và sức khỏe thị trường chung.",
        ],
      },
      {
        id: "khong-nen-ky-vong",
        heading: "Không nên kỳ vọng điều gì?",
        body: [
          "Không nên kỳ vọng mức tăng nóng trong thời gian rất ngắn nếu thị trường chưa có thanh khoản mạnh. Sản phẩm cao cấp cần thời gian để thị trường hấp thụ và xác lập cộng đồng cư dân.",
        ],
      },
      {
        id: "chien-luoc",
        heading: "Chiến lược phù hợp",
        body: [
          "Chiến lược phù hợp là chọn sản phẩm có vị trí tốt, thanh toán vừa sức và nắm giữ theo chu kỳ 3-5 năm. Khách mua nên yêu cầu so sánh với các dự án cùng phân khúc trước khi quyết định.",
        ],
      },
    ],
  },
];

export function legacyGetPostBySlug(slug: string) {
  return legacyBlogPostsNotUsed.find((post) => post.slug === slug);
}

export function legacyGetRelatedPosts(post: LegacyBlogPost, limit = 3) {
  return legacyBlogPostsNotUsed
    .filter((item) => item.slug !== post.slug)
    .map((item) => {
      const sharedKeywords = item.keywords.filter((keyword) =>
        post.keywords.some(
          (postKeyword) =>
            postKeyword.toLowerCase().includes(keyword.toLowerCase()) ||
            keyword.toLowerCase().includes(postKeyword.toLowerCase()),
        ),
      ).length;

      const categoryScore = item.category === post.category ? 4 : 0;
      const titleScore = item.title.includes("Vlasta Premier") ? 1 : 0;

      return {
        post: item,
        score: categoryScore + sharedKeywords + titleScore,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

export function legacyGetArticleFaqs(post: LegacyBlogPost): FaqItem[] {
  const faqMap: Record<string, string[]> = {
    "vlasta-premier-co-dang-dau-tu-khong": [
      "Vlasta Premier phù hợp mua ở hay đầu tư?",
      "Dự án có ngân hàng bảo lãnh không?",
      "Thời gian bàn giao dự kiến là khi nào?",
      "Phí quản lý vận hành dự kiến bao nhiêu?",
    ],
    "so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Dự án có bao nhiêu sản phẩm và loại căn nào?",
      "Đơn vị quản lý vận hành dự án là đơn vị nào?",
      "Các tiện ích nổi bật của dự án là gì?",
    ],
    "review-vi-tri-vlasta-premier": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Các kết nối vùng nổi bật quanh dự án là gì?",
      "Các tiện ích nổi bật của dự án là gì?",
      "Hệ thống an ninh của dự án gồm mấy lớp?",
    ],
    "du-an-phu-hop-gia-dinh-tre-nam-sai-gon": [
      "Dự án có bao nhiêu sản phẩm và loại căn nào?",
      "Các tiện ích nổi bật của dự án là gì?",
      "Hệ thống an ninh của dự án gồm mấy lớp?",
      "Phí quản lý vận hành dự kiến bao nhiêu?",
    ],
    "vlasta-premier-co-tiem-nang-tang-gia-khong": [
      "Chủ đầu tư và đơn vị phát triển dự án là ai?",
      "Dự án có ngân hàng bảo lãnh không?",
      "Có được chuyển nhượng hợp đồng mua bán không?",
      "Thời gian bàn giao dự kiến là khi nào?",
    ],
  };

  const selectedQuestions = faqMap[post.slug] || [
    "Tên đầy đủ và định vị của dự án là gì?",
    "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
    "Dự án có bao nhiêu sản phẩm và loại căn nào?",
  ];

  return selectedQuestions
    .map((question) => project.faqs.find((faq) => faq.question === question))
    .filter((faq): faq is FaqItem => Boolean(faq));
}

export function absoluteUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}
