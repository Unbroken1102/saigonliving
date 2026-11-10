/** Vlasta Premier SEO cluster — gom pillar sau 08/2026 */

export const vlastaComparisonPillar = "so-sanh-vlasta-premier-khu-nam-2026" as const;
export const vlastaPricePillar = "gia-vlasta-premier-2026" as const;
export const vlastaDecisionPillar = "vlasta-premier-co-nen-mua-de-o-khong" as const;
export const vlastaLegalPillar = "phap-ly-vlasta-premier-van-phu" as const;
export const vlastaPaymentPillar = "thanh-toan-vlasta-premier-20-den-khi-nhan-nha" as const;

/** 301: slug cũ → slug pillar (path /blog/...) */
export const vlastaClusterRedirects: Record<string, string> = {
  // So sánh (8 bài → 1)
  "so-sanh-vlasta-premier-q7-riverside": vlastaComparisonPillar,
  "so-sanh-vlasta-premier-mizuki-park": vlastaComparisonPillar,
  "so-sanh-vlasta-premier-the-peak-garden": vlastaComparisonPillar,
  "so-sanh-vlasta-premier-sunshine-sky-city": vlastaComparisonPillar,
  "so-sanh-vlasta-premier-sunshine-diamond-river": vlastaComparisonPillar,
  "so-sanh-mizuki-vlasta-premier-the-peak-garden": vlastaComparisonPillar,
  "so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden":
    vlastaComparisonPillar,
  // Giá theo loại căn (3 bài → 1)
  "gia-can-1pn-vlasta-premier-2026": vlastaPricePillar,
  "gia-can-2pn-vlasta-premier-2026": vlastaPricePillar,
  "gia-can-3pn-vlasta-premier-2026": vlastaPricePillar,
  // Quyết định mua (2 bài → 1)
  "vlasta-premier-co-dang-dau-tu-khong": vlastaDecisionPillar,
  "vlasta-premier-co-tiem-nang-tang-gia-khong": vlastaDecisionPillar,
};

export const vlastaRedirectedSlugs = Object.keys(vlastaClusterRedirects);

export const vlastaHubSlugs = [
  // Pillars
  vlastaPricePillar,
  vlastaPaymentPillar,
  vlastaLegalPillar,
  vlastaComparisonPillar,
  vlastaDecisionPillar,
  // Supporting (long-tail, không trùng intent)
  "vlasta-premier-o-dau",
  "vlasta-premier-chu-dau-tu-la-ai",
  "vlasta-premier-ban-giao-khi-nao",
  "phi-quan-ly-vlasta-premier",
  "mat-bang-tang-vlasta-premier",
  "review-vi-tri-vlasta-premier",
  "vlasta-premier-co-so-hong-khong",
  "co-2-ty-nen-mua-mizuki-72m2-hay-vlasta-premier",
  "cam-1-ty-tien-mat-mua-can-ho-cao-cap-sai-gon-khong",
] as const;

export const vlastaSeoClusterLinks = [
  {
    title: "Giá Vlasta Premier 2026",
    description: "Bảng giá 1PN–3PN, lưu ý khi so giỏ và cập nhật theo đợt bán.",
    href: `/blog/${vlastaPricePillar}`,
  },
  {
    title: "Thanh toán 20% đến nhận nhà",
    description: "Phân tích dòng tiền, hỗ trợ lãi suất và rủi ro trước khi giữ chỗ.",
    href: `/blog/${vlastaPaymentPillar}`,
  },
  {
    title: "Pháp lý Vlasta Premier",
    description: "New Tech, giấy phép xây dựng, quy hoạch 1/500 và bảo lãnh ngân hàng.",
    href: `/blog/${vlastaLegalPillar}`,
  },
  {
    title: "So sánh Vlasta vs khu Nam 2026",
    description: "Mizuki, Peak, Sunshine, Q7 Riverside — bảng so một chỗ.",
    href: `/blog/${vlastaComparisonPillar}`,
  },
  {
    title: "Vlasta Premier có nên mua để ở?",
    description: "Góc nhìn ở thật, đầu tư và checklist trước khi ký.",
    href: `/blog/${vlastaDecisionPillar}`,
  },
  {
    title: "Vlasta Premier ở đâu?",
    description: "Đào Trí Phú Thuận, kết nối Phú Mỹ Hưng và checklist đi thực địa.",
    href: "/blog/vlasta-premier-o-dau",
  },
  {
    title: "Bàn giao khi nào?",
    description: "Tiến độ dự kiến Q4/2027 và mốc cần theo dõi trước khi ký.",
    href: "/blog/vlasta-premier-ban-giao-khi-nao",
  },
  {
    title: "Mặt bằng tầng",
    description: "Cách đọc layout, chọn căn 1PN–3PN theo view và vị trí sàn.",
    href: "/blog/mat-bang-tang-vlasta-premier",
  },
  {
    title: "600 triệu – 1 tỷ gần PMH",
    description: "So TT Genesis và Vlasta theo vốn vào và thanh toán giãn.",
    href: "/blog/600-trieu-1-ty-mua-can-ho-cao-cap-gan-phu-my-hung",
  },
] as const;

export function isVlastaHubPost(slug: string) {
  return (vlastaHubSlugs as readonly string[]).includes(slug);
}

export function blogPath(slug: string) {
  return `/blog/${slug}`;
}
