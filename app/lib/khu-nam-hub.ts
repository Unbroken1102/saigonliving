export type KhuNamTierId =
  | "nha-pho-compound"
  | "can-ho-o-ngay"
  | "metro-tang-truong"
  | "cao-cap-pmh"
  | "q7-can-ho"
  | "theo-doi";

export type KhuNamTier = {
  id: KhuNamTierId;
  title: string;
  subtitle: string;
};

export type KhuNamProject = {
  slug: string;
  name: string;
  aliases?: string[];
  tier: KhuNamTierId;
  district: string;
  productType: string;
  budgetLabel: string;
  statusLabel: string;
  landingPath: string;
  image: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  highlights: Array<{ title: string; text: string }>;
  fitFor: string[];
  relatedLinks: Array<{ title: string; href: string; description?: string }>;
  inventorySlug?: string;
  popupSource: string;
  faqs: Array<{ question: string; answer: string }>;
  metaDescription: string;
};

export const khuNamTiers: KhuNamTier[] = [
  {
    id: "nha-pho-compound",
    title: "Nhà phố & compound",
    subtitle: "Lavila Kiến Á, Eco Retreat — ở thật, compound an ninh, ngân sách 3–9 tỷ",
  },
  {
    id: "can-ho-o-ngay",
    title: "Căn hộ ở ngay",
    subtitle: "Mizuki Park đã có cư dân — Trellia Cove, tiện ích hiện hữu, chuyển nhượng",
  },
  {
    id: "metro-tang-truong",
    title: "Metro & tăng trưởng",
    subtitle: "Zeit River County (GS Metro City) — hành lang metro Bến Thành – Cần Giờ, Long An",
  },
  {
    id: "q7-can-ho",
    title: "Căn hộ Quận 7 & Nam Sài Gòn",
    subtitle: "The Peak Garden, Sunshine Sky City, TT Genesis — gần Phú Mỹ Hưng, so sánh theo ngân sách",
  },
  {
    id: "cao-cap-pmh",
    title: "Cao cấp Phú Mỹ Hưng",
    subtitle: "Nine South Estates — biệt thự PMH, inbound tư vấn riêng",
  },
  {
    id: "theo-doi",
    title: "Theo dõi & so sánh thêm",
    subtitle: "Vinhomes Bình Chánh, Vlasta Premier — quy hoạch hoặc căn hộ cao cấp Q7",
  },
];

export const khuNamProjects: KhuNamProject[] = [
  {
    slug: "lavila",
    name: "Lavila",
    aliases: ["Lavila Kiến Á"],
    tier: "nha-pho-compound",
    district: "Kiến Á",
    productType: "Compound nhà phố (căn hộ giai đoạn sau)",
    budgetLabel: "Từ ~5 tỷ",
    statusLabel: "Compound đang bán",
    landingPath: "/lavila",
    image: "/assets/eco-retreat/eco-retreat-nha-pho.webp",
    heroEyebrow: "Compound nhà phố · Kiến Á",
    heroTitle: "Lavila — compound nhà phố Kiến Á",
    heroDescription:
      "Lavila là dự án compound nhà phố của Kiến Á đang được thị trường quan tâm. Giai đoạn căn hộ sẽ triển khai sau — hiện tại Saigon Living tư vấn theo sản phẩm nhà phố/compound và chính sách thanh toán thực tế.",
    highlights: [
      {
        title: "Compound an ninh",
        text: "Mô hình compound gọn, tiện ích nội khu và cộng đồng cư dân đồng nhất hơn nhà phố lẻ.",
      },
      {
        title: "Kiến Á",
        text: "Chủ đầu tư quen thuộc với các dự án nhà ở tại TP.HCM và vùng ven — cần kiểm tra pháp lý từng phân khu.",
      },
      {
        title: "Giai đoạn sau: căn hộ",
        text: "Căn hộ Lavila là hướng mở rộng sau; khách cần căn hộ ngay nên xem Mizuki hoặc The Peak Garden.",
      },
    ],
    fitFor: [
      "Gia đình cần nhà phố/compound, ưu tiên an ninh và không gian riêng",
      "Ngân sách khoảng 5–9 tỷ, so sánh với Eco Retreat nhà phố",
      "Khách chấp nhận chờ giai đoạn căn hộ nếu mua compound trước",
    ],
    relatedLinks: [
      {
        title: "Eco Retreat nhà phố từ 5 tỷ",
        href: "/blog/nha-pho-eco-retreat-tu-5-ty-co-dang-mua-khong",
        description: "So ngang ngữ sản phẩm thấp tầng Long An.",
      },
      {
        title: "Hub Khu Nam",
        href: "/khu-nam",
        description: "Xem toàn bộ dự án theo ngân sách.",
      },
    ],
    popupSource: "Lavila Compound Landing",
    faqs: [
      {
        question: "Lavila có căn hộ chưa?",
        answer:
          "Giai đoạn hiện tại tập trung compound nhà phố Kiến Á. Căn hộ là giai đoạn sau — liên hệ Saigon Living để nhận cập nhật khi có thông tin chính thức.",
      },
      {
        question: "Nên so Lavila với dự án nào?",
        answer:
          "Thường so với Eco Retreat nhà phố (giá mềm hơn) và Mizuki nếu cân nhắc chuyển sang căn hộ đã bàn giao.",
      },
    ],
    metaDescription:
      "Lavila compound nhà phố Kiến Á — tư vấn phân khu, giá tham khảo, so sánh Eco Retreat và Mizuki. Căn hộ Lavila giai đoạn sau.",
  },
  {
    slug: "eco-retreat",
    name: "Eco Retreat",
    tier: "nha-pho-compound",
    district: "Long An · Bến Lức",
    productType: "Căn hộ + nhà phố sinh thái",
    budgetLabel: "Từ ~3 tỷ",
    statusLabel: "Đang bán",
    landingPath: "/eco-retreat",
    image: "/assets/eco-retreat/eco-retreat-hero.webp",
    heroEyebrow: "Long An",
    heroTitle: "Eco Retreat",
    heroDescription: "Đô thị sinh thái Bến Lức — căn hộ và nhà phố, phù hợp entry khu Tây Nam.",
    highlights: [],
    fitFor: [],
    relatedLinks: [
      { title: "Giá Eco Retreat 2026", href: "/blog/gia-eco-retreat-2026" },
      { title: "So sánh Eco vs Mizuki", href: "/blog/so-sanh-eco-retreat-mizuki-park" },
    ],
    inventorySlug: "eco-retreat",
    popupSource: "Eco Retreat Hub",
    faqs: [],
    metaDescription: "Eco Retreat Long An — giá, nhà phố, so sánh Mizuki và Lavila compound.",
  },
  {
    slug: "mizuki-park",
    name: "Mizuki Park",
    tier: "can-ho-o-ngay",
    district: "Bình Chánh",
    productType: "Căn hộ · Trellia Cove",
    budgetLabel: "Từ ~4 tỷ",
    statusLabel: "Đã vận hành",
    landingPath: "/mizuki-park",
    image: "/assets/mizuki-park/mizuki-park-kenh-dao-tien-ich.jpg",
    heroEyebrow: "Bình Chánh",
    heroTitle: "Mizuki Park",
    heroDescription: "Khu đô thị xanh đã có cư dân — Trellia Cove, chuyển nhượng và cho thuê.",
    highlights: [],
    fitFor: [],
    relatedLinks: [
      { title: "Mizuki hưởng lợi Hưng Long?", href: "/blog/mizuki-park-huong-loi-gi-tu-vinhomes-binh-chanh" },
    ],
    inventorySlug: "mizuki-park",
    popupSource: "Mizuki Park Hub",
    faqs: [],
    metaDescription: "Mizuki Park Bình Chánh — Trellia Cove, giá, chuyển nhượng, so sánh khu Nam.",
  },
  {
    slug: "zeit-river-county",
    name: "Zeit River County",
    aliases: ["GS Metro City", "GS Metrocity"],
    tier: "metro-tang-truong",
    district: "Long An",
    productType: "Căn hộ · hưởng metro",
    budgetLabel: "Liên hệ",
    statusLabel: "Đang mở bán / theo dõi",
    landingPath: "/zeit-river-county",
    image: "/assets/eco-retreat/eco-retreat-hero.webp",
    heroEyebrow: "GS · Metro Bến Thành – Cần Giò",
    heroTitle: "Zeit River County",
    heroDescription:
      "Zeit River County (thị trường còn gọi GS Metro City) nằm trên hành lang metro Bến Thành – Cần Giờ, Long An. Phù hợp khách đầu tư theo hạ tầng và so sánh với Eco Retreat, Mizuki.",
    highlights: [
      {
        title: "Story metro",
        text: "Lợi thế gắn với tuyến metro khi hạ tầng hoàn thiện — cần đối chiếu ga và lộ trình thực tế.",
      },
      {
        title: "GS Metro City",
        text: "Tên gọi quảng cáo phổ biến trên thị trường; trang này dùng tên pháp lý Zeit River County kèm keyword GS Metro City.",
      },
      {
        title: "So với Eco · Mizuki",
        text: "Eco entry giá; Mizuki ở ngay; Zeit River County cho nhóm tin metro dài hạn.",
      },
    ],
    fitFor: [
      "Nhà đầu tư tin hạ tầng metro khu Tây Nam",
      "Khách đã xem Eco/Mizuki, muốn thêm lựa chọn tăng trưởng",
      "Ngân sách trung hạn, chấp nhận giữ 5–8 năm",
    ],
    relatedLinks: [
      {
        title: "Metro Bến Thành – Cần Giò",
        href: "/blog/metro-ben-thanh-can-gio-cac-nha-ga-chinh",
        description: "Các nhà ga chính trên tuyến.",
      },
      {
        title: "So sánh Eco vs Mizuki",
        href: "/blog/so-sanh-eco-retreat-mizuki-park",
      },
    ],
    popupSource: "Zeit River County Landing",
    faqs: [
      {
        question: "Zeit River County có phải GS Metro City không?",
        answer:
          "Đúng — GS Metro City là tên gọi phổ biến trên thị trường đại lý; Zeit River County là tên dự án dùng trên trang tư vấn này.",
      },
      {
        question: "Nên chọn Zeit River County hay Eco Retreat?",
        answer:
          "Eco phù hợp ở thật và giá mềm hơn; Zeit River County hợp khách ưu tiên câu chuyện metro và tăng trưởng dài hạn.",
      },
    ],
    metaDescription:
      "Zeit River County (GS Metro City) Long An — vị trí metro, giá, so sánh Eco Retreat và Mizuki Park. Tư vấn Saigon Living.",
  },
  {
    slug: "the-peak-garden",
    name: "The Peak Garden",
    tier: "q7-can-ho",
    district: "Quận 7",
    productType: "Căn hộ wellness",
    budgetLabel: "Liên hệ",
    statusLabel: "Đang bán / CN",
    landingPath: "/the-peak-garden",
    image: "/assets/the-peak-garden/the-peak-garden-hero.jpg",
    heroEyebrow: "Quận 7",
    heroTitle: "The Peak Garden",
    heroDescription: "Căn hộ wellness Nguyễn Lương Bằng, gần Phú Mỹ Hưng và ga Metro Tân Mỹ tương lai.",
    highlights: [],
    fitFor: [],
    relatedLinks: [{ title: "Giá The Peak Garden 2026", href: "/blog/gia-the-peak-garden-2026" }],
    inventorySlug: "the-peak-garden",
    popupSource: "The Peak Garden Hub",
    faqs: [],
    metaDescription: "The Peak Garden Quận 7 — giá, wellness, so sánh Sunshine và Vlasta.",
  },
  {
    slug: "sunshine-sky-city",
    name: "Sunshine Sky City",
    tier: "q7-can-ho",
    district: "Quận 7",
    productType: "Căn hộ cao cấp",
    budgetLabel: "Liên hệ",
    statusLabel: "Chuyển nhượng / tư vấn",
    landingPath: "/sunshine-sky-city",
    image: "/assets/optimized/balcony.jpg",
    heroEyebrow: "Quận 7 · Sunshine Group",
    heroTitle: "Sunshine Sky City",
    heroDescription:
      "Sunshine Sky City là lựa chọn căn hộ cao cấp khu Nam được nhiều khách so sánh với The Peak Garden và Vlasta Premier. Saigon Living tư vấn chuyển nhượng và bảng giá tham khảo.",
    highlights: [
      {
        title: "Vị trí khu Nam",
        text: "Thuộc hệ sinh thái Sunshine quanh trục Quận 7 — cần đi thực tế để cảm nhận kết nối PMH.",
      },
      {
        title: "So sánh cụm Q7",
        text: "Thường đặt cạnh The Peak Garden, Sunshine Diamond River và Vlasta Premier theo ngân sách.",
      },
    ],
    fitFor: [
      "Khách thích thương hiệu Sunshine, cần căn hộ Q7",
      "Người mua chuyển nhượng muốn vào nhanh",
      "Đang lọc giữa Peak Garden và Sky City",
    ],
    relatedLinks: [
      {
        title: "So sánh Vlasta vs Sunshine Sky City",
        href: "/blog/so-sanh-vlasta-premier-sunshine-sky-city",
      },
      {
        title: "So sánh Sky City, Diamond River, Peak Garden",
        href: "/blog/so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden",
      },
    ],
    popupSource: "Sunshine Sky City Landing",
    faqs: [
      {
        question: "Sunshine Sky City hay The Peak Garden?",
        answer:
          "Peak Garden định vị wellness gần PMH; Sky City thuộc hệ Sunshine — nên so theo giá chuyển nhượng, view và phí quản lý thực tế.",
      },
    ],
    metaDescription:
      "Sunshine Sky City Quận 7 — tư vấn giá, chuyển nhượng, so sánh The Peak Garden và Vlasta Premier.",
  },
  {
    slug: "tt-genesis",
    name: "TT Genesis",
    tier: "q7-can-ho",
    district: "Nhà Bè",
    productType: "Căn hộ · thanh toán giãn",
    budgetLabel: "Từ ~3 tỷ",
    statusLabel: "Đang bán",
    landingPath: "/tt-genesis",
    image: "/assets/tt-genesis/vi-tri-tt-genesis.jpg",
    heroEyebrow: "Nhà Bè · Đào Sư Tích",
    heroTitle: "TT Genesis",
    heroDescription: "Căn hộ Nhà Bè gần Phú Mỹ Hưng, thanh toán trực tiếp CĐT — so với Quận 7.",
    highlights: [],
    fitFor: [],
    relatedLinks: [{ title: "Giá TT Genesis 2026", href: "/blog/gia-tt-genesis-2026" }],
    inventorySlug: "tt-genesis",
    popupSource: "TT Genesis Hub",
    faqs: [],
    metaDescription: "TT Genesis Nhà Bè — giá, thanh toán, so sánh Quận 7 và khu Nam.",
  },
  {
    slug: "nine-south",
    name: "Nine South Estates",
    aliases: ["Nine South"],
    tier: "cao-cap-pmh",
    district: "Phú Mỹ Hưng · Quận 7",
    productType: "Biệt thự cao cấp",
    budgetLabel: "Từ ~20 tỷ",
    statusLabel: "Tư vấn riêng",
    landingPath: "/nine-south",
    image: "/assets/the-peak-garden/the-peak-garden-overview.jpg",
    heroEyebrow: "Phú Mỹ Hưng",
    heroTitle: "Nine South Estates",
    heroDescription:
      "Nine South là phân khu biệt thự cao cấp tại Phú Mỹ Hưng — không cùng phễu nhà phố Lavila/Eco. Saigon Living nhận tư vấn riêng theo nhu cầu và nguồn chuyển nhượng.",
    highlights: [
      {
        title: "Ultra premium PMH",
        text: "Phù hợp khách đã quen chuẩn sống Phú Mỹ Hưng, cần không gian và uy tín khu vực.",
      },
      {
        title: "Inbound, không volume",
        text: "Dự án này không chạy lead form mass — liên hệ trực tiếp để được ghép nguồn phù hợp.",
      },
    ],
    fitFor: [
      "Doanh nhân upgrade từ căn hộ PMH",
      "Khách cần biệt thự PMH, ngân sách 20 tỷ+",
    ],
    relatedLinks: [{ title: "Hub Khu Nam", href: "/khu-nam" }],
    popupSource: "Nine South Landing",
    faqs: [
      {
        question: "Nine South có liên quan Lavila không?",
        answer: "Không — Lavila là compound Kiến Á; Nine South là biệt thự Phú Mỹ Hưng, phân khúc khác hoàn toàn.",
      },
    ],
    metaDescription:
      "Nine South Estates Phú Mỹ Hưng — tư vấn biệt thự cao cấp Quận 7, chuyển nhượng riêng.",
  },
  {
    slug: "vinhomes-binh-chanh",
    name: "Vinhomes Bình Chánh",
    tier: "theo-doi",
    district: "Bình Chánh · Hưng Long",
    productType: "Đại đô thị dự kiến",
    budgetLabel: "Chưa công bố",
    statusLabel: "Theo dõi quy hoạch",
    landingPath: "/vinhomes-binh-chanh",
    image: "/assets/vinhomes-binh-chanh/quy-hoach-hung-long-binh-chanh.jpg",
    heroEyebrow: "Hưng Long 1.512 ha",
    heroTitle: "Vinhomes Bình Chánh",
    heroDescription: "Theo dõi quy hoạch Hưng Long — trong lúc chờ, xem Mizuki Park mua được ngay.",
    highlights: [],
    fitFor: [],
    relatedLinks: [
      {
        title: "Quy hoạch Hưng Long 1.512 ha",
        href: "/blog/vinhomes-binh-chanh-doc-quy-hoach-hung-long-1512ha",
      },
    ],
    popupSource: "Vinhomes Binh Chanh Hub",
    faqs: [],
    metaDescription: "Vinhomes Bình Chánh Hưng Long — quy hoạch, hạ tầng, so sánh Mizuki Park.",
  },
  {
    slug: "vlasta-premier",
    name: "Vlasta Premier",
    tier: "theo-doi",
    district: "Phú Thuận · Quận 7",
    productType: "Căn hộ cao cấp ven sông",
    budgetLabel: "Liên hệ",
    statusLabel: "Đang bán",
    landingPath: "/vlasta-premier",
    image: "/assets/optimized/overview-marina.jpg",
    heroEyebrow: "Đào Trí",
    heroTitle: "Vlasta Premier",
    heroDescription: "Căn hộ cao cấp Phú Thuận — upsell khi ngân sách trên Mizuki/Peak.",
    highlights: [],
    fitFor: [],
    relatedLinks: [{ title: "Giá Vlasta 2026", href: "/blog/gia-vlasta-premier-2026" }],
    inventorySlug: "vlasta-premier",
    popupSource: "Vlasta Premier Hub",
    faqs: [],
    metaDescription: "Vlasta Premier Phú Thuận — giá, thanh toán, so sánh khu Nam.",
  },
];

export const budgetGuideRows = [
  { range: "3 – 5 tỷ", picks: ["Eco Retreat", "TT Genesis"], href: "/eco-retreat" },
  { range: "5 – 8 tỷ", picks: ["Lavila compound", "Mizuki Park", "Eco nhà phố"], href: "/lavila" },
  { range: "8 – 15 tỷ", picks: ["Mizuki Trellia", "The Peak Garden", "Sunshine Sky City"], href: "/the-peak-garden" },
  { range: "15 tỷ+", picks: ["Nine South", "Vlasta Premier"], href: "/nine-south" },
];

export function getKhuNamProject(slug: string) {
  return khuNamProjects.find((project) => project.slug === slug) ?? null;
}

export function getKhuNamProjectsByTier(tierId: KhuNamTierId) {
  return khuNamProjects.filter((project) => project.tier === tierId);
}

export function getKhuNamProjectByPath(path: string) {
  return khuNamProjects.find((project) => project.landingPath === path) ?? null;
}
