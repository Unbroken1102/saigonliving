import type { ComponentType } from "react";
import { project } from "@/app/lib/site";
import ArticleOne, { post as articleOne } from "@/app/content/posts/vlasta-premier-co-dang-dau-tu-khong.mdx";
import ArticleTwo, { post as articleTwo } from "@/app/content/posts/so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden.mdx";
import ArticleThree, { post as articleThree } from "@/app/content/posts/review-vi-tri-vlasta-premier.mdx";
import ArticleFour, { post as articleFour } from "@/app/content/posts/du-an-phu-hop-gia-dinh-tre-nam-sai-gon.mdx";
import ArticleFive, { post as articleFive } from "@/app/content/posts/vlasta-premier-co-tiem-nang-tang-gia-khong.mdx";
import ArticleSix, { post as articleSix } from "@/app/content/posts/so-sanh-mizuki-vlasta-premier-the-peak-garden.mdx";
import ArticleEight, { post as articleEight } from "@/app/content/posts/so-sanh-vlasta-premier-mizuki-park.mdx";
import ArticleNine, { post as articleNine } from "@/app/content/posts/so-sanh-vlasta-premier-the-peak-garden.mdx";
import ArticleTen, { post as articleTen } from "@/app/content/posts/so-sanh-vlasta-premier-sunshine-sky-city.mdx";
import ArticleEleven, { post as articleEleven } from "@/app/content/posts/so-sanh-vlasta-premier-sunshine-diamond-river.mdx";
import ArticleTwelve, { post as articleTwelve } from "@/app/content/posts/phap-ly-vlasta-premier-van-phu.mdx";
import ArticleThirteen, { post as articleThirteen } from "@/app/content/posts/gia-vlasta-premier-2026.mdx";
import ArticleFourteen, { post as articleFourteen } from "@/app/content/posts/gia-can-1pn-vlasta-premier-2026.mdx";
import ArticleFifteen, { post as articleFifteen } from "@/app/content/posts/vlasta-premier-co-so-hong-khong.mdx";
import ArticleSixteen, { post as articleSixteen } from "@/app/content/posts/vlasta-premier-co-nen-mua-de-o-khong.mdx";
import ArticleSeventeen, { post as articleSeventeen } from "@/app/content/posts/thanh-toan-vlasta-premier-20-den-khi-nhan-nha.mdx";
import ArticleEighteen, { post as articleEighteen } from "@/app/content/posts/co-2-ty-nen-mua-mizuki-72m2-hay-vlasta-premier.mdx";
import ArticleNineteen, { post as articleNineteen } from "@/app/content/posts/co-1-2-ty-mua-can-ho-sai-gon-2026.mdx";
import ArticleTwenty, { post as articleTwenty } from "@/app/content/posts/cac-yeu-to-chon-can-ho-phu-hop-hien-nay.mdx";
import ArticleTwentyOne, { post as articleTwentyOne } from "@/app/content/posts/ha-tang-bung-no-gia-tang-lai-suat-co-nen-mua-bat-dong-san.mdx";
import ArticleTwentyTwo, { post as articleTwentyTwo } from "@/app/content/posts/chan-dung-khach-hang-mua-bat-dong-san-khi-lai-suat-cao.mdx";
import ArticleTwentyThree, { post as articleTwentyThree } from "@/app/content/posts/vinhomes-binh-chanh-doc-quy-hoach-hung-long-1512ha.mdx";
import ArticleTwentyFour, { post as articleTwentyFour } from "@/app/content/posts/den-bu-tai-dinh-cu-vinhomes-binh-chanh-dong-tien-di-ve-dau.mdx";
import ArticleTwentyFive, { post as articleTwentyFive } from "@/app/content/posts/chinh-thuc-de-xuat-mo-rong-khu-do-thi-hung-long-binh-chanh-1512ha-vingroup.mdx";
import ArticleTwentySix, { post as articleTwentySix } from "@/app/content/posts/bai-rac-da-phuoc-hung-long-1512ha-binh-chanh.mdx";
import ArticleTwentySeven, { post as articleTwentySeven } from "@/app/content/posts/mizuki-park-huong-loi-gi-tu-vinhomes-binh-chanh.mdx";
import ArticleTwentyEight, { post as articleTwentyEight } from "@/app/content/posts/he-thong-chong-ngap-khu-nam-binh-chanh-quan-7-2026.mdx";
import ArticleTwentyNine, { post as articleTwentyNine } from "@/app/content/posts/nha-o-xa-hoi-trong-khu-do-thi-lon-nam-long-mizuki-hung-long.mdx";
import ArticleThirty, { post as articleThirty } from "@/app/content/posts/eco-retreat-co-nen-mua-khong.mdx";
import ArticleThirtyOne, { post as articleThirtyOne } from "@/app/content/posts/gia-eco-retreat-2026.mdx";
import ArticleThirtyTwo, { post as articleThirtyTwo } from "@/app/content/posts/vi-tri-eco-retreat-ben-luc-co-xa-khong.mdx";
import ArticleThirtyThree, { post as articleThirtyThree } from "@/app/content/posts/so-sanh-eco-retreat-mizuki-park.mdx";
import ArticleThirtyFour, { post as articleThirtyFour } from "@/app/content/posts/nha-pho-eco-retreat-tu-5-ty-co-dang-mua-khong.mdx";
import ArticleThirtyFive, { post as articleThirtyFive } from "@/app/content/posts/metro-ben-thanh-can-gio-cac-nha-ga-chinh.mdx";
import ArticleThirtySix, { post as articleThirtySix } from "@/app/content/posts/gia-the-peak-garden-2026.mdx";
import ArticleThirtySeven, { post as articleThirtySeven } from "@/app/content/posts/the-peak-garden-co-nen-mua-khong.mdx";
import ArticleThirtyEight, { post as articleThirtyEight } from "@/app/content/posts/the-peak-garden-huong-loi-metro-ben-thanh-can-gio.mdx";
import ArticleThirtyNine, { post as articleThirtyNine } from "@/app/content/posts/so-sanh-the-peak-garden-belleza-q7-boulevard.mdx";
import ArticleForty, { post as articleForty } from "@/app/content/posts/so-sanh-vlasta-premier-q7-riverside.mdx";
import ArticleFortyOne, { post as articleFortyOne } from "@/app/content/posts/vlasta-premier-ban-giao-khi-nao.mdx";
import ArticleFortyTwo, { post as articleFortyTwo } from "@/app/content/posts/vlasta-premier-chu-dau-tu-la-ai.mdx";
import ArticleFortyThree, { post as articleFortyThree } from "@/app/content/posts/phi-quan-ly-vlasta-premier.mdx";
import ArticleFortyFour, { post as articleFortyFour } from "@/app/content/posts/mat-bang-tang-vlasta-premier.mdx";
import ArticleFortyFive, { post as articleFortyFive } from "@/app/content/posts/gia-can-2pn-vlasta-premier-2026.mdx";
import ArticleFortySix, { post as articleFortySix } from "@/app/content/posts/gia-can-3pn-vlasta-premier-2026.mdx";
import ArticleFortySeven, { post as articleFortySeven } from "@/app/content/posts/vlasta-premier-o-dau.mdx";
import ArticleFortyEight, { post as articleFortyEight } from "@/app/content/posts/tt-genesis-co-gi-dac-biet.mdx";
import ArticleFifty, { post as articleFifty } from "@/app/content/posts/gia-tt-genesis-2026.mdx";
import ArticleFortyNine, { post as articleFortyNine } from "@/app/content/posts/cam-1-ty-tien-mat-mua-can-ho-cao-cap-sai-gon-khong.mdx";
import ArticleFiftyOne, { post as articleFiftyOne } from "@/app/content/posts/cau-binh-tien-noi-trung-tam-khu-nam-mizuki-park.mdx";
import ArticleFiftyTwo, { post as articleFiftyTwo } from "@/app/content/posts/tt-genesis-hay-hoang-anh-an-tien-silver-star.mdx";
import ArticleFiftyThree, { post as articleFiftyThree } from "@/app/content/posts/tt-genesis-co-nen-mua-khong.mdx";
import ArticleFiftyFour, { post as articleFiftyFour } from "@/app/content/posts/thanh-toan-tt-genesis.mdx";
import ArticleFiftyFive, { post as articleFiftyFive } from "@/app/content/posts/tt-genesis-ban-giao-khi-nao.mdx";
import ArticleFiftySix, { post as articleFiftySix } from "@/app/content/posts/600-trieu-1-ty-mua-can-ho-cao-cap-gan-phu-my-hung.mdx";
import ArticleFiftySeven, { post as articleFiftySeven } from "@/app/content/posts/gia-can-1pn-tt-genesis-2026.mdx";
import ArticleFiftyEight, { post as articleFiftyEight } from "@/app/content/posts/bo-tnmt-tu-choi-nang-cong-suat-bai-rac-da-phuoc.mdx";
import ArticleFiftyNine, { post as articleFiftyNine } from "@/app/content/posts/eco-retreat-cap-nhat-tien-do-thang-8-2026.mdx";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  keywords: string[];
  toc: Array<{
    id: string;
    heading: string;
  }>;
};

export type BlogPost = BlogPostMeta & {
  Content: ComponentType;
};

export function toBlogPostMeta(post: BlogPost): BlogPostMeta {
  const { Content: _content, ...meta } = post;
  return meta;
}

export type FaqItem = {
  question: string;
  answer: string;
};

export const postImageBySlug: Record<string, string> = {
  "so-sanh-vlasta-premier-q7-riverside": "/assets/optimized/overview-dao-tri.jpg",
  "so-sanh-the-peak-garden-belleza-q7-boulevard": "/assets/the-peak-garden/the-peak-garden-overview.jpg",
  "the-peak-garden-huong-loi-metro-ben-thanh-can-gio": "/assets/metro-ben-thanh-can-gio/ga-tan-my.png",
  "the-peak-garden-co-nen-mua-khong": "/assets/the-peak-garden/the-peak-garden-overview.jpg",
  "gia-the-peak-garden-2026": "/assets/the-peak-garden/the-peak-garden-hero.jpg",
  "metro-ben-thanh-can-gio-cac-nha-ga-chinh": "/assets/metro-ben-thanh-can-gio/ban-do-metro-ben-thanh-can-gio.png",
  "nha-pho-eco-retreat-tu-5-ty-co-dang-mua-khong": "/assets/eco-retreat/eco-retreat-nha-pho.webp",
  "so-sanh-eco-retreat-mizuki-park": "/assets/eco-retreat/eco-retreat-mat-nuoc.webp",
  "vi-tri-eco-retreat-ben-luc-co-xa-khong": "/assets/eco-retreat/eco-retreat-vi-tri.webp",
  "gia-eco-retreat-2026": "/assets/eco-retreat/eco-retreat-san-pham.webp",
  "eco-retreat-co-nen-mua-khong": "/assets/eco-retreat/eco-retreat-hero.webp",
  "eco-retreat-cap-nhat-tien-do-thang-8-2026": "/assets/eco-retreat/eco-retreat-thuc-te-04.jpg",
  "nha-o-xa-hoi-trong-khu-do-thi-lon-nam-long-mizuki-hung-long":
    "/assets/mizuki-park/mizuki-park-kenh-dao-tien-ich.jpg",
  "he-thong-chong-ngap-khu-nam-binh-chanh-quan-7-2026": "/assets/flood-control/cong-ngan-trieu-khu-nam-01.jpg",
  "mizuki-park-huong-loi-gi-tu-vinhomes-binh-chanh": "/assets/mizuki-park/mizuki-park-kenh-dao-tien-ich.jpg",
  "bai-rac-da-phuoc-hung-long-1512ha-binh-chanh": "/assets/vinhomes-binh-chanh/quy-hoach-hung-long-binh-chanh.jpg",
  "vin-group-nghien-cuu-sieu-do-thi-1512ha-binh-chanh":
    "/assets/vinhomes-binh-chanh/de-xuat-hung-long-1512ha-ranh-gioi.jpg",
  "den-bu-tai-dinh-cu-vinhomes-binh-chanh-dong-tien-di-ve-dau": "/assets/vinhomes-binh-chanh/quy-hoach-hung-long-binh-chanh.jpg",
  "vinhomes-binh-chanh-doc-quy-hoach-hung-long-1512ha": "/assets/vinhomes-binh-chanh/quy-hoach-hung-long-binh-chanh.jpg",
  "chan-dung-khach-hang-mua-bat-dong-san-khi-lai-suat-cao": "/assets/optimized/overview-dao-tri.jpg",
  "ha-tang-bung-no-gia-tang-lai-suat-co-nen-mua-bat-dong-san": "/assets/optimized/location.jpg",
  "cac-yeu-to-chon-can-ho-phu-hop-hien-nay": "/assets/optimized/overview-dao-tri.jpg",
  "co-1-2-ty-mua-can-ho-sai-gon-2026": "/assets/optimized/overview-dao-tri.jpg",
  "co-2-ty-nen-mua-mizuki-72m2-hay-vlasta-premier": "/assets/optimized/plan-b-1br.jpg",
  "gia-can-1pn-vlasta-premier-2026": "/assets/pricing/vlasta-premier-gia-du-kien-2026.jpg",
  "gia-vlasta-premier-2026": "/assets/pricing/vlasta-premier-gia-du-kien-2026.jpg",
  "phap-ly-vlasta-premier-van-phu": "/assets/optimized/overview-towers.jpg",
  "vlasta-premier-co-so-hong-khong": "/assets/optimized/overview-towers.jpg",
  "vlasta-premier-co-nen-mua-de-o-khong": "/assets/optimized/overview-balcony.jpg",
  "thanh-toan-vlasta-premier-20-den-khi-nhan-nha": "/assets/optimized/overview-marina.jpg",
  "vlasta-premier-co-dang-dau-tu-khong": "/assets/optimized/balcony.jpg",
  "so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden":
    "/assets/optimized/overview-towers.jpg",
  "review-vi-tri-vlasta-premier": "/assets/optimized/location.jpg",
  "du-an-phu-hop-gia-dinh-tre-nam-sai-gon": "/assets/optimized/overview-balcony.jpg",
  "vlasta-premier-co-tiem-nang-tang-gia-khong": "/assets/optimized/sky-amenity.jpg",
  "so-sanh-mizuki-vlasta-premier-the-peak-garden": "/assets/optimized/overview-towers.jpg",
  "so-sanh-vlasta-premier-mizuki-park": "/assets/optimized/overview-towers.jpg",
  "so-sanh-vlasta-premier-the-peak-garden": "/assets/optimized/location.jpg",
  "so-sanh-vlasta-premier-sunshine-sky-city": "/assets/optimized/balcony.jpg",
  "so-sanh-vlasta-premier-sunshine-diamond-river": "/assets/optimized/amenity-golf.jpg",
  "vlasta-premier-ban-giao-khi-nao": "/assets/optimized/overview-marina.jpg",
  "vlasta-premier-chu-dau-tu-la-ai": "/assets/optimized/overview-towers.jpg",
  "phi-quan-ly-vlasta-premier": "/assets/optimized/overview-marina.jpg",
  "mat-bang-tang-vlasta-premier": "/assets/optimized/plan-a-2br.jpg",
  "gia-can-2pn-vlasta-premier-2026": "/assets/pricing/vlasta-premier-gia-du-kien-2026.jpg",
  "gia-can-3pn-vlasta-premier-2026": "/assets/pricing/vlasta-premier-gia-du-kien-2026.jpg",
  "vlasta-premier-o-dau": "/assets/optimized/location.jpg",
  "tt-genesis-co-gi-dac-biet": "/assets/tt-genesis/phoi-canh-tt-genesis.jpg",
  "gia-tt-genesis-2026": "/assets/tt-genesis/tt-genesis-phoi-canh-2026.jpg",
  "tt-genesis-hay-hoang-anh-an-tien-silver-star": "/assets/tt-genesis/phoi-canh-tt-genesis.jpg",
  "tt-genesis-co-nen-mua-khong": "/assets/tt-genesis/tt-genesis-phoi-canh-2026.jpg",
  "thanh-toan-tt-genesis": "/assets/tt-genesis/van-hanh-anabuki-tt-genesis.jpg",
  "tt-genesis-ban-giao-khi-nao": "/assets/tt-genesis/tien-do-thuc-te-tt-genesis-dao-su-tich-02.png",
  "cam-1-ty-tien-mat-mua-can-ho-cao-cap-sai-gon-khong": "/assets/optimized/amenity-pool.jpg",
  "600-trieu-1-ty-mua-can-ho-cao-cap-gan-phu-my-hung": "/assets/optimized/amenity-pool.jpg",
  "gia-can-1pn-tt-genesis-2026": "/assets/tt-genesis/mat-bang-tt-genesis.jpg",
  "cau-binh-tien-noi-trung-tam-khu-nam-mizuki-park": "/assets/binh-tien-bridge/binh-tien-phoi-canh-cau.png",
  "bo-tnmt-tu-choi-nang-cong-suat-bai-rac-da-phuoc": "/assets/mizuki-park/mizuki-park-kenh-dao-tien-ich.jpg",
};

const registry: Array<{ meta: BlogPostMeta; Content: ComponentType }> = [
  { meta: articleFiftyNine, Content: ArticleFiftyNine },
  { meta: articleFiftyEight, Content: ArticleFiftyEight },
  { meta: articleFiftySeven, Content: ArticleFiftySeven },
  { meta: articleFiftySix, Content: ArticleFiftySix },
  { meta: articleFiftyFive, Content: ArticleFiftyFive },
  { meta: articleFiftyFour, Content: ArticleFiftyFour },
  { meta: articleFiftyThree, Content: ArticleFiftyThree },
  { meta: articleFiftyTwo, Content: ArticleFiftyTwo },
  { meta: articleFiftyOne, Content: ArticleFiftyOne },
  { meta: articleFifty, Content: ArticleFifty },
  { meta: articleFortyNine, Content: ArticleFortyNine },
  { meta: articleFortyEight, Content: ArticleFortyEight },
  { meta: articleFortySeven, Content: ArticleFortySeven },
  { meta: articleFortySix, Content: ArticleFortySix },
  { meta: articleFortyFive, Content: ArticleFortyFive },
  { meta: articleFortyFour, Content: ArticleFortyFour },
  { meta: articleFortyThree, Content: ArticleFortyThree },
  { meta: articleFortyTwo, Content: ArticleFortyTwo },
  { meta: articleFortyOne, Content: ArticleFortyOne },
  { meta: articleForty, Content: ArticleForty },
  { meta: articleThirtyNine, Content: ArticleThirtyNine },
  { meta: articleThirtyEight, Content: ArticleThirtyEight },
  { meta: articleThirtySeven, Content: ArticleThirtySeven },
  { meta: articleThirtySix, Content: ArticleThirtySix },
  { meta: articleThirtyFive, Content: ArticleThirtyFive },
  { meta: articleThirtyFour, Content: ArticleThirtyFour },
  { meta: articleThirtyThree, Content: ArticleThirtyThree },
  { meta: articleThirtyTwo, Content: ArticleThirtyTwo },
  { meta: articleThirtyOne, Content: ArticleThirtyOne },
  { meta: articleThirty, Content: ArticleThirty },
  { meta: articleTwentyNine, Content: ArticleTwentyNine },
  { meta: articleTwentyEight, Content: ArticleTwentyEight },
  { meta: articleTwentySeven, Content: ArticleTwentySeven },
  { meta: articleTwentySix, Content: ArticleTwentySix },
  { meta: articleTwentyFive, Content: ArticleTwentyFive },
  { meta: articleTwentyFour, Content: ArticleTwentyFour },
  { meta: articleTwentyThree, Content: ArticleTwentyThree },
  { meta: articleTwentyTwo, Content: ArticleTwentyTwo },
  { meta: articleTwentyOne, Content: ArticleTwentyOne },
  { meta: articleTwenty, Content: ArticleTwenty },
  { meta: articleNineteen, Content: ArticleNineteen },
  { meta: articleEighteen, Content: ArticleEighteen },
  { meta: articleFourteen, Content: ArticleFourteen },
  { meta: articleFifteen, Content: ArticleFifteen },
  { meta: articleSixteen, Content: ArticleSixteen },
  { meta: articleSeventeen, Content: ArticleSeventeen },
  { meta: articleThirteen, Content: ArticleThirteen },
  { meta: articleTwelve, Content: ArticleTwelve },
  { meta: articleOne, Content: ArticleOne },
  { meta: articleTwo, Content: ArticleTwo },
  { meta: articleThree, Content: ArticleThree },
  { meta: articleFour, Content: ArticleFour },
  { meta: articleFive, Content: ArticleFive },
  { meta: articleSix, Content: ArticleSix },
  { meta: articleEight, Content: ArticleEight },
  { meta: articleNine, Content: ArticleNine },
  { meta: articleTen, Content: ArticleTen },
  { meta: articleEleven, Content: ArticleEleven },
];

export const blogPosts: BlogPost[] = registry.map(({ meta, Content }) => ({
  ...meta,
  Content,
}));

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return blogPosts
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

export function getArticleFaqs(post: BlogPost): FaqItem[] {
  const ecoRetreatFaqs: FaqItem[] = [
    {
      question: "Eco Retreat phù hợp với nhóm khách nào?",
      answer:
        "Eco Retreat phù hợp với khách muốn không gian sống xanh cao cấp, có nhu cầu retreat cuối tuần, work from home, nghỉ hưu hoặc làm việc trong bán kính thuận tiện quanh khu Tây - Bến Lức. Nếu cần đi trung tâm TP.HCM mỗi ngày, nên khảo sát kỹ thời gian di chuyển thực tế.",
    },
    {
      question: "Giá Eco Retreat nên đọc theo tiêu chí nào?",
      answer:
        "Nên đọc theo loại hình sản phẩm, vị trí, diện tích đất, diện tích xây dựng, view, chính sách thanh toán và mục tiêu mua ở hay đầu tư. Căn hộ, nhà phố, song lập, biệt thự và shophouse có bài toán dòng tiền rất khác nhau.",
    },
    {
      question: "Eco Retreat nên nắm giữ trong bao lâu?",
      answer:
        "Với một khu đại đô thị sinh thái quy mô lớn, người mua nên nhìn theo chu kỳ tối thiểu 3-5 năm trở lên để hạ tầng, cảnh quan, tiện ích và cộng đồng cư dân có thời gian hình thành rõ hơn.",
    },
  ];

  const customFaqMap: Record<string, FaqItem[]> = {
    "eco-retreat-co-nen-mua-khong": ecoRetreatFaqs,
    "gia-eco-retreat-2026": ecoRetreatFaqs,
    "vi-tri-eco-retreat-ben-luc-co-xa-khong": ecoRetreatFaqs,
    "so-sanh-eco-retreat-mizuki-park": ecoRetreatFaqs,
    "nha-pho-eco-retreat-tu-5-ty-co-dang-mua-khong": ecoRetreatFaqs,
    "eco-retreat-cap-nhat-tien-do-thang-8-2026": ecoRetreatFaqs,
    "cam-1-ty-tien-mat-mua-can-ho-cao-cap-sai-gon-khong": [
      {
        question: "Cầm 1 tỷ tiền mặt có mua được căn hộ cao cấp ở Sài Gòn không?",
        answer:
          "Có thể, nếu chọn dự án có lịch thanh toán nhẹ và có kế hoạch tài chính sau thời gian hỗ trợ ngân hàng. Với Vlasta Premier, đợt đầu chỉ khoảng 10%, thêm 10% đợt tiếp theo, tổng 20% đến khi nhận nhà theo chính sách dự kiến.",
      },
      {
        question: "Vlasta Premier thanh toán ban đầu bao nhiêu phần trăm?",
        answer:
          "Theo chính sách dự kiến, khách hàng đóng khoảng 10% đợt đầu, thêm 10% đợt tiếp theo, tổng khoảng 20% trong giai đoạn xây dựng đến khi nhận nhà. Mức cụ thể cần kiểm tra bảng tiến độ tại thời điểm ký.",
      },
      {
        question: "Sau khi nhận nhà Vlasta Premier có phải trả gốc lãi ngay không?",
        answer:
          "Theo chính sách bán hàng dự kiến, sau khi nhận nhà thêm khoảng 9 tháng khách hàng vẫn chưa phải trả gốc và lãi trong phạm vi chương trình hỗ trợ ngân hàng. Điều kiện cụ thể phụ thuộc ngân hàng, loại căn và thời điểm ký hợp đồng.",
      },
    ],
    "600-trieu-1-ty-mua-can-ho-cao-cap-gan-phu-my-hung": [
      {
        question: "Với 600 triệu – 1 tỷ tiền mặt có mua được căn hộ cao cấp gần Phú Mỹ Hưng không?",
        answer:
          "Có thể vào được căn mới nếu trả theo tiến độ đến khi nhận nhà, không phải trả trọn tổng giá một lần. TT Genesis phù hợp mức vốn 600–800 triệu cho căn 1PN; quanh 1 tỷ có thể so sánh Genesis 1PN+ với Vlasta Premier 1PN.",
      },
      {
        question: "600 triệu đủ mua căn 1PN TT Genesis không?",
        answer:
          "Hoàn toàn đủ cho tổng số tiền cần bỏ ra đến khi nhận nhà. Với tổng giá căn 1PN/1PN+ dao động từ 2.8 - 4 tỷ, lịch thanh toán giãn giúp người mua chỉ cần đóng khoảng 600 - 800 triệu cho đến khi nhận nhà vào đầu năm 2029.",
      },
      {
        question: "Nên chọn TT Genesis hay Vlasta Premier với 1 tỷ tiền mặt?",
        answer:
          "Chọn TT Genesis nếu ưu tiên đơn giá thấp hơn Vlasta khoảng 20% và vốn vào từ 600–800 triệu. Chọn Vlasta Premier nếu ưu tiên gần Phú Mỹ Hưng hơn và chính sách thanh toán 20% chia đều 2 đợt đến khi nhận nhà Quý 4/2027.",
      },
    ],
    "tt-genesis-co-gi-dac-biet": [
      {
        question: "TT Genesis ở đâu?",
        answer:
          "TT Genesis được giới thiệu tại khu vực Đào Sư Tích, Phước Kiển, Nhà Bè, TP.HCM, thuộc vùng kết nối khu Nam Sài Gòn, Phú Mỹ Hưng, Nguyễn Văn Linh và các tiện ích giáo dục - y tế quanh Quận 7.",
      },
      {
        question: "Giá TT Genesis dự kiến bao nhiêu?",
        answer:
          "Thông tin thị trường hiện ghi nhận giá dự kiến từ khoảng 2,8-2,9 tỷ/căn, với 1PN khoảng 2,9-3,5 tỷ, 1PN+ khoảng 3,5-3,8 tỷ, 2PN khoảng 4,3-5,5 tỷ và 3PN từ khoảng 6 tỷ. Chi tiết từng loại căn xem thêm bài Giá TT Genesis 2026.",
      },
      {
        question: "TT Genesis nên so với dự án nào?",
        answer:
          "Nên so TT Genesis với các căn hộ khu Nam có cùng ngân sách và bán kính di chuyển như The Peak Garden, Vlasta Premier, Mizuki Park hoặc các dự án Nhà Bè - Quận 7 khác.",
      },
      {
        question: "Vì sao TT Genesis được chú ý ở phân khúc dưới 70 triệu/m2?",
        answer:
          "Nhiều căn hộ mới khu Nam hiện ở vùng 75-90 triệu/m2 trở lên. TT Genesis được định vị với giá dự kiến từ khoảng 2,8 tỷ/căn, thuộc phân khúc dưới 70 triệu/m2 đang khan hiếu nguồn cung mới. Tuy nhiên giá thực tế cần đối chiếu theo từng đợt mở bán.",
      },
      {
        question: "Thông tin trong bài có phải công bố chính thức không?",
        answer:
          "Không. Đây là bài tư vấn tham khảo của Saigon Living, tổng hợp thông tin thị trường để giúp người mua có checklist trước khi làm việc với đơn vị phân phối hoặc chủ đầu tư.",
      },
    ],
    "tt-genesis-ban-giao-khi-nao": [
      {
        question: "TT Genesis bàn giao khi nào?",
        answer:
          "Theo thông tin thị trường tham khảo, TT Genesis dự kiến khởi công năm 2026 và bàn giao khoảng 2028–2029, một số nguồn dự kiến đầu năm 2029. Đây là mốc dự kiến — cần đối chiếu hợp đồng và thông báo chính thức tại thời điểm ký.",
      },
      {
        question: "Có nên mua TT Genesis khi dự án đang xây không?",
        answer:
          "Có thể cân nhắc nếu chấp nhận chờ 2028–2029, ưu tiên dòng tiền nhẹ và căn mới. Không nên mua nếu cần vào ở trong vòng 1 năm hoặc chỉ tin căn đã bàn giao có sổ sẵn — khi đó nhà cũ cùng khu thường hợp lý hơn.",
      },
      {
        question: "TT Genesis do ai thi công?",
        answer:
          "Theo thông tin giới thiệu thị trường, Ricons tham gia vai trò tổng thầu xây dựng; dự án còn có đối tác Nhật Bản như Cosmos Initia và Koterasu Group. Người mua vẫn nên theo dõi tiến độ thực tế định kỳ.",
      },
      {
        question: "Thông tin bàn giao trong bài có phải cam kết chính thức không?",
        answer:
          "Không. Đây là bài tư vấn tham khảo của Saigon Living. Mốc bàn giao và tiến độ cần đối chiếu lại với hồ sơ pháp lý và hợp đồng tại thời điểm giao dịch.",
      },
    ],
    "thanh-toan-tt-genesis": [
      {
        question: "TT Genesis có chính sách 20–30% đến khi nhận nhà không?",
        answer:
          "Theo một số nguồn tin thị trường dự kiến, TT Genesis có thể áp dụng mức đóng 20–30% trong giai đoạn xây dựng, phần còn lại khi nhận nhà (bàn giao dự kiến đầu 2029). Đây chưa phải công bố chính thức — cần đối chiếu bảng chính sách và hợp đồng tại thời điểm ký từng đợt.",
      },
      {
        question: "TT Genesis thanh toán bao nhiêu phần trăm ban đầu?",
        answer:
          "Theo thông tin thị trường tham khảo, người mua TT Genesis thường đóng khoảng 10% ban đầu để giữ chỗ hoặc ký hợp đồng, phần còn lại trả theo tiến độ xây dựng. Con số chính xác cần đối chiếu bảng giá và hợp đồng từng đợt mở bán.",
      },
      {
        question: "Thanh toán TT Genesis có nhẹ hơn mua nhà cũ không?",
        answer:
          "Thường nhẹ hơn về vốn ban đầu: mua lại nhà cũ 4–5 tỷ trong bối cảnh lãi suất cao thường cần 3–4 tỷ tiền mặt, trong khi TT Genesis có thể chia dòng tiền theo nhiều đợt từ chủ đầu tư. Đổi lại phải chờ bàn giao và theo dõi tiến độ dự án.",
      },
      {
        question: "TT Genesis trả góp theo tiến độ như thế nào?",
        answer:
          "Người mua thanh toán trực tiếp từ chủ đầu tư theo các mốc xây dựng — mỗi đợt thường nhỏ hơn so với trả một lần khi mua nhà cũ. Cần lập bảng dòng tiền dài hạn, kể cả sau khi hết ưu đãi lãi suất ngân hàng.",
      },
      {
        question: "Ai nên chọn chính sách thanh toán giãn của TT Genesis?",
        answer:
          "Phù hợp người trẻ có thu nhập ổn định, muốn giữ vốn kinh doanh và chấp nhận chờ nhận nhà. Không phù hợp nếu cần vào ở ngay hoặc muốn căn đã bàn giao có sổ sẵn.",
      },
    ],
    "tt-genesis-co-nen-mua-khong": [
      {
        question: "TT Genesis có nên mua không?",
        answer:
          "Có thể cân nhắc nếu muốn căn mới trên Đào Sư Tích, chấp nhận chờ bàn giao và ưu tiên trả giãn theo tiến độ thay vì gom 3,5–4 tỷ tiền mặt cho thứ cấp. Không nên mua nếu cần vào ở trong 6 tháng, đã có sẵn ~4 tỷ tiền mặt để săn Sunrise/South Residence, hoặc chưa tính dòng tiền sau khi hết ưu đãi vay.",
      },
      {
        question: "TT Genesis có đáng tiền ở mức 6x–7x triệu/m² không?",
        answer:
          "Có thể đáng nếu bạn trả cao hơn để có nhà mới, quản lý Anabuki và dòng tiền ban đầu nhẹ (~1–1,5 tỷ vốn tự có) — thay vì dồn 3,5–4 tỷ một lần cho căn thứ cấp 4,5–5 tỷ. Khó đáng hơn nếu chỉ cần ở ngay với tổng giá thấp; khi đó An Tiến hoặc Silver Star thường hợp lý hơn.",
      },
      {
        question: "TT Genesis hay mua Hoàng Anh An Tiến?",
        answer:
          "Chọn TT Genesis nếu muốn căn mới, chấp nhận chờ bàn giao và chia nhỏ dòng tiền. Chọn An Tiến nếu ưu tiên tổng giá thấp (~4x triệu/m² thứ cấp), diện tích rộng và dọn vào ở ngay.",
      },
      {
        question: "Ai không nên mua TT Genesis?",
        answer:
          "Không phù hợp nếu cần nhà gấp trong 6 tháng, không chấp nhận rủi ro dự án đang xây, hoặc đang có sẵn 4 tỷ tiền mặt — lúc đó thị trường thứ cấp cùng khu thường hợp lý hơn primary 6x–7x triệu/m².",
      },
    ],
    "tt-genesis-hay-hoang-anh-an-tien-silver-star": [
      {
        question: "TT Genesis có đắt hơn Hoàng Anh An Tiến và Silver Star không?",
        answer:
          "Theo giá/m² tham khảo thị trường, TT Genesis (khoảng 60–70 triệu/m² mua từ chủ đầu tư) cao hơn An Tiến (khoảng 4x triệu/m² nhà cũ) và Silver Star (khoảng 5x triệu/m² nhà cũ). Tuy nhiên mua lại từ thị trường thứ cấp trong bối cảnh lãi suất cao thường cần khoảng 3,5–4 tỷ tiền mặt để chốt căn 4,5–5 tỷ, trong khi TT Genesis có thể giãn thanh toán theo tiến độ với vốn tự có ban đầu thấp hơn — tùy chính sách từng đợt.",
      },
      {
        question: "Nên chọn An Tiến hay TT Genesis?",
        answer:
          "Chọn Hoàng Anh An Tiến nếu ưu tiên tổng giá thấp, diện tích rộng và vào ở ngay. Chọn TT Genesis nếu muốn căn mới, tiện ích hiện đại và lịch thanh toán trực tiếp từ chủ đầu tư giãn hơn, chấp nhận chờ bàn giao.",
      },
      {
        question: "Silver Star giá bao nhiêu so với TT Genesis?",
        answer:
          "Silver Star thường giao dịch nhà cũ quanh vùng 5x triệu/m², nhiều căn đẹp 4,5–5 tỷ. Trong bối cảnh lãi suất cao, chốt mua lại nhà cũ thường cần khoảng 3,5–4 tỷ tiền mặt. TT Genesis phù hợp hơn nếu vốn tự có không đủ cục đó nhưng có thu nhập ổn định và chấp nhận trả theo tiến độ từ chủ đầu tư.",
      },
      {
        question: "Thông tin trong bài có phải công bố chính thức không?",
        answer:
          "Không. Đây là bài tư vấn tham khảo của Saigon Living. Giá nhà cũ và chính sách thanh toán TT Genesis cần đối chiếu lại tại thời điểm giao dịch.",
      },
    ],
    "gia-tt-genesis-2026": [
      {
        question: "Giá TT Genesis 2026 bao nhiêu?",
        answer:
          "Theo thông tin thị trường, TT Genesis tham khảo khoảng 65 triệu/m2 chưa VAT. 1PN từ khoảng 2,9-3,5 tỷ, 1PN+ khoảng 3,5-3,8 tỷ, 2PN khoảng 4,3-5,5 tỷ và 3PN từ khoảng 6 tỷ. Giá thực tế cần cập nhật theo bảng giá chính thức từng đợt.",
      },
      {
        question: "2,9 - 3 tỷ có mua được TT Genesis không?",
        answer:
          "Có khả năng mua được dòng căn 1PN ở giai đoạn đầu, tùy tầng, view và chính sách từng đợt mở bán. Nên tính thêm VAT, phí bảo trì và dòng tiền vay trước khi giữ chỗ.",
      },
      {
        question: "TT Genesis có đắt hơn Quận 7 không?",
        answer:
          "TT Genesis không còn là phân khúc giá rẻ, nhưng mặt bằng giá/m2 vẫn thấp hơn nhiều dự án mới tại Quận 7 (thường 75-120 triệu/m2). Nên so cùng ngân sách với The Peak Garden và Vlasta Premier.",
      },
      {
        question: "Nên so TT Genesis với dự án nào?",
        answer:
          "Nên so TT Genesis với The Peak Garden, Vlasta Premier, Mizuki Park hoặc các căn hộ Nhà Bè - Quận 7 cùng ngân sách 3-6 tỷ, trên cùng bảng: giá/m2, tổng giá, vốn ban đầu và mục tiêu ở/cho thuê.",
      },
    ],
    "gia-can-1pn-tt-genesis-2026": [
      {
        question: "Giá căn 1PN TT Genesis 2026 bao nhiêu?",
        answer:
          "Theo bảng giá thị trường, căn 1PN TT Genesis khoảng 45-50m2 với tổng giá dự kiến từ khoảng 2,9-3,5 tỷ tùy tầng, view và chính sách từng đợt. Căn 1PN+ khoảng 55m2 có thể từ 3,5-3,8 tỷ chưa VAT.",
      },
      {
        question: "Căn 1PN TT Genesis phù hợp với ai?",
        answer:
          "Phù hợp khách độc thân, chuyên gia, vợ chồng trẻ hoặc nhà đầu tư muốn tổng vốn gọn hơn nhóm 2PN-3PN, chấp nhận chờ bàn giao dự kiến 2028-2029.",
      },
      {
        question: "Mua căn 1PN TT Genesis cần chuẩn bị bao nhiêu tiền ban đầu?",
        answer:
          "Với tổng giá từ 2,9 - 3,8 tỷ, áp dụng lịch thanh toán giãn, bạn chỉ cần chuẩn bị khoảng 600 - 800 triệu (tương đương 20% - 25%) là có thể ung dung chờ nhận nhà vào đầu năm 2029. Nên đọc bài tiến độ thanh toán TT Genesis và đối chiếu bảng giá chính thức từng đợt trước khi giữ chỗ.",
      },
    ],
    "nha-o-xa-hoi-trong-khu-do-thi-lon-nam-long-mizuki-hung-long": [
      {
        question: "Vì sao khu đô thị lớn nên có cả nhà ở thương mại và nhà ở xã hội?",
        answer:
          "Vì nhà ở xã hội giúp mở rộng cơ hội an cư cho người thu nhập thấp và trung bình thấp, đồng thời tạo thêm cư dân thật cho khu đô thị. Khi có nhiều tầng cư dân, tiện ích, thương mại, trường học và dịch vụ có nhu cầu sử dụng đều hơn.",
      },
      {
        question: "Bài học từ Nam Long và Mizuki Park là gì?",
        answer:
          "Điểm đáng tham khảo là tư duy phát triển cộng đồng cư dân và tiện ích vận hành từng bước, thay vì chỉ bán một dòng sản phẩm. Mizuki Park cho thấy lợi thế của một khu đô thị đã có cảnh quan, cư dân, tiện ích và nhịp sống thật.",
      },
      {
        question: "Nếu Hưng Long - Bình Chánh phát triển thành đại đô thị, nhà ở xã hội có cần thiết không?",
        answer:
          "Có thể rất cần thiết nếu được quy hoạch đúng. Một đại đô thị quy mô lớn cần nhiều nhóm cư dân, người lao động, dịch vụ, giáo dục, y tế và thương mại để vận hành. Nhà ở xã hội giúp đô thị có sinh khí nhanh hơn và phát triển cân bằng hơn.",
      },
      {
        question: "Nhà ở xã hội có làm giảm giá trị khu đô thị không?",
        answer:
          "Không nhất thiết. Giá trị phụ thuộc vào quy hoạch, mật độ, chất lượng xây dựng, vị trí, tiện ích và quản lý vận hành. Nếu làm bài bản, nhà ở xã hội có thể là mảnh ghép giúp khu đô thị có cộng đồng cư dân đa dạng và bền hơn.",
      },
    ],
    "vinhomes-binh-chanh-doc-quy-hoach-hung-long-1512ha": [
      {
        question: "Thông tin khu đô thị 1.500 ha được cho là của Vinhomes ở Bình Chánh đã chính thức chưa?",
        answer:
          "Chưa nên xem là thông tin giao dịch chính thức. Bài viết dùng ngôn ngữ dự kiến/được cho là, dựa trên ảnh quy hoạch và tín hiệu thị trường; người mua cần đối chiếu với công bố chính thức, pháp lý, giá bán và chính sách tại thời điểm giao dịch.",
      },
      {
        question: "Quy mô khu đô thị tại Hưng Long - Bình Chánh dự kiến khoảng bao nhiêu?",
        answer:
          "Theo ảnh quy hoạch đang được phân tích, khu vực Hưng Long - Bình Chánh có quy mô khoảng 1.512,7 ha. Con số này cần được đối chiếu lại với hồ sơ/công bố chính thức khi dự án có thông tin đầy đủ hơn.",
      },
      {
        question: "Thời gian triển khai dự kiến là khi nào?",
        answer:
          "Thông tin hiện tại được ghi nhận theo hướng dự kiến là năm 2027. Mốc này có thể thay đổi theo pháp lý, tiến độ chuẩn bị dự án và thông báo chính thức từng giai đoạn.",
      },
      {
        question: "Có nên đặt cọc khi thông tin còn sớm không?",
        answer:
          "Không nên chuyển tiền hoặc đặt cọc chỉ dựa trên tin đồn hoặc ảnh quy hoạch. Giai đoạn này phù hợp để theo dõi, khảo sát thực địa, chuẩn bị dòng tiền và chờ thông tin pháp lý, sản phẩm, giá bán rõ ràng.",
      },
    ],
    "bo-tnmt-tu-choi-nang-cong-suat-bai-rac-da-phuoc": [
      {
        question: "Bộ TN&MT có chấp thuận nâng công suất bãi rác Đa Phước lên 41 triệu tấn không?",
        answer:
          "Theo các thông tin công bố gần đây, Bộ TN&MT không chấp thuận đề xuất của VWS về việc nâng công suất tiếp nhận từ khoảng 24 triệu tấn lên 41 triệu tấn. Người đọc vẫn nên đối chiếu văn bản chính thức khi sử dụng thông tin.",
      },
      {
        question: "Bao giờ khu Nam Sài Gòn hết mùi hôi từ bãi rác Đa Phước?",
        answer:
          "Chưa có mốc chính thức “hết mùi hôi”. Câu chuyện phụ thuộc tiến độ các nhà máy đốt rác phát điện, chính sách điều phối rác của TP.HCM và cảm nhận thực tế tại từng khu vực. Nên khảo sát thực địa thay vì chỉ dựa vào tin tức.",
      },
      {
        question: "Tin không tăng công suất có nghĩa bãi rác sẽ ngừng hoạt động ngay không?",
        answer:
          "Không. TP.HCM vẫn có thể tiếp tục điều phối rác về Đa Phước trong giai đoạn chuyển tiếp cho đến khi có thêm nhà máy xử lý bằng công nghệ đốt rác phát điện.",
      },
    ],
    "bai-rac-da-phuoc-hung-long-1512ha-binh-chanh": [
      {
        question: "Bãi rác Đa Phước có chắc chắn sẽ được di dời không?",
        answer:
          "Chưa có cơ sở để khẳng định chắc chắn. Điều đáng theo dõi là nếu Hưng Long - Bình Chánh phát triển thành vùng đô thị lớn hơn, câu chuyện môi trường sống quanh khu Nam có thể được nhìn lại nghiêm túc hơn.",
      },
      {
        question: "Vì sao bãi rác Đa Phước liên quan đến câu chuyện Bình Chánh và khu Nam?",
        answer:
          "Vì đây là một nỗi băn khoăn nhiều năm của người dân và người mua nhà khu Nam. Khi chất lượng sống được cải thiện, cảm nhận về Bình Chánh, Mizuki Park và các khu đô thị quanh Nguyễn Văn Linh cũng có thể tích cực hơn.",
      },
      {
        question: "Người mua nên kiểm tra gì trước khi quyết định?",
        answer:
          "Nên khảo sát thực địa vào nhiều thời điểm, hỏi cư dân đang sống quanh khu vực, theo dõi thông tin quy hoạch và môi trường chính thức, đồng thời không mua chỉ vì kỳ vọng một vấn đề môi trường sẽ được xử lý trong tương lai.",
      },
    ],
    "cau-binh-tien-noi-trung-tam-khu-nam-mizuki-park": [
      {
        question: "Cầu đường Bình Tiên khởi công khi nào và hoàn thành năm nào?",
        answer:
          "Theo báo Lao Động ngày 18/6/2026, Ban Giao thông TP.HCM đang hoàn thiện hồ sơ thi công để khởi công trong quý III/2026 và hoàn thành vào năm 2028.",
      },
      {
        question: "Cầu đường Bình Tiên dài bao nhiêu và đi qua những đâu?",
        answer:
          "Tuyến đường trên cao dài khoảng 3,1 km (4–6 làn), đường song hành dài hơn 3,3 km. Tuyến bắt đầu từ Phạm Văn Chí, vượt kênh Tàu Hũ, đi qua Phú Định, Bình Đông, xã Bình Hưng, vượt Nguyễn Văn Linh và kết nối tuyến nối Quốc lộ 50.",
      },
      {
        question: "Dự án ảnh hưởng bao nhiêu hộ dân và kinh phí GPMB?",
        answer:
          "Theo báo Lao Động, dự án ảnh hưởng khoảng 441 hộ dân cần bồi thường, hỗ trợ và giải phóng mặt bằng. Tổng kinh phí GPMB dự kiến hơn 3.369 tỷ đồng.",
      },
      {
        question: "Cầu Bình Tiên có giảm kẹt xe trên Quốc lộ 50 và Phạm Hùng không?",
        answer:
          "Theo mục tiêu dự án, cầu đường Bình Tiên nhằm chia sẻ áp lực cho các trục hiện hữu như Quốc lộ 50, Phạm Hùng, Nguyễn Hữu Thọ và Dương Bá Trạc. Tuyến trên cao giúp một bộ phận lưu lượng đi thẳng từ trung tâm xuống Nguyễn Văn Linh mà không dồn hết vào đường mặt đất. Tuy nhiên, mức giảm kẹt thực tế còn phụ thuộc tiến độ hoàn thành, lưu lượng sau vận hành và các dự án giao thông khác trong cùng khu vực.",
      },
      {
        question: "Mizuki Park có tăng giá khi cầu Bình Tiên hoàn thành không?",
        answer:
          "Không nên kỳ vọng tuyệt đối. Cầu Bình Tiên có thể cải thiện cảm nhận về kết nối khu Nam với trung tâm, hỗ trợ Mizuki Park được nhìn lại nhờ vị trí trên trục Nguyễn Văn Linh và lợi thế đô thị đã vận hành. Tuy nhiên giá vẫn phụ thuộc chu kỳ thị trường, sản phẩm, pháp lý và nhu cầu ở thật.",
      },
    ],
    "mizuki-park-huong-loi-gi-tu-vinhomes-binh-chanh": [
      {
        question: "Mizuki Park có chắc chắn tăng giá nếu Vinhomes Bình Chánh được triển khai không?",
        answer:
          "Không nên hiểu theo hướng chắc chắn. Mizuki Park có thể được người mua nhìn lại nhờ vị trí khu Nam, môi trường sống đã hình thành và tiện ích hiện hữu, nhưng giá vẫn phụ thuộc vào mặt bằng thị trường, pháp lý, dòng tiền, giỏ hàng và nhu cầu thật.",
      },
      {
        question: "Mizuki Park hưởng lợi gì từ câu chuyện Hưng Long 1.512 ha?",
        answer:
          "Lợi thế chính là được đặt vào bản đồ khảo sát rộng hơn của Bình Chánh - khu Nam. Khi khu vực được chú ý, người mua thường tìm các dự án đã có cư dân, tiện ích và môi trường sống kiểm chứng được như Mizuki Park.",
      },
      {
        question: "Trellia Cove có khác gì so với căn hộ hiện hữu tại Mizuki?",
        answer:
          "Trellia Cove là giỏ hàng mới hơn trong quần thể Mizuki Park, phù hợp khách thích môi trường đô thị đã có cư dân nhưng vẫn muốn sản phẩm mới, chính sách bán hàng và dòng tiền theo tiến độ. Người mua cần so kỹ từng mã căn, giá và lịch thanh toán.",
      },
    ],
    "he-thong-chong-ngap-khu-nam-binh-chanh-quan-7-2026": [
      {
        question: "Hệ thống chống ngập khu Nam có làm Bình Chánh và Quận 7 hết ngập hoàn toàn từ 2026 không?",
        answer:
          "Không nên hiểu theo hướng tuyệt đối. Hệ thống cống ngăn triều có thể giúp kiểm soát triều, hỗ trợ tiêu thoát nước mưa và giảm rủi ro ngập ở nhiều khu vực, nhưng hiệu quả còn phụ thuộc vào mưa lớn, cao độ từng tuyến đường, hệ thống thoát nước nội khu, vận hành bơm và bảo trì kênh rạch.",
      },
      {
        question: "Cống ngăn triều hoạt động như thế nào?",
        answer:
          "Khi triều cao, cửa cống đóng để ngăn nước sông tràn ngược vào đô thị. Khi triều thấp và mực nước bên trong cao hơn bên ngoài, cống mở để thoát nước. Nếu mưa lớn nhưng triều vẫn cao, trạm bơm hỗ trợ bơm nước ra ngoài.",
      },
      {
        question: "Khu Nam, Mizuki Park và Vlasta Premier có thể hưởng lợi gì?",
        answer:
          "Nếu hệ thống vận hành ổn định, cảm nhận về rủi ro ngập và chất lượng sống khu Nam có thể tốt hơn. Điều này giúp người mua nhìn tích cực hơn vào các dự án đã có nền tảng sống thật hoặc nằm trong khu vực được hưởng lợi, nhưng vẫn cần kiểm tra thực địa và dòng tiền từng dự án.",
      },
    ],
    "chan-dung-khach-hang-mua-bat-dong-san-khi-lai-suat-cao": [
      {
        question: "Lãi suất cao thì ai vẫn đang mua bất động sản?",
        answer:
          "Nhóm vẫn mua thường là người mua ở thật có dòng tiền ổn định, nhà đầu tư có tiền mặt mạnh, nhà đầu tư tin vào chu kỳ hạ tầng, khách muốn giữ tài sản dài hạn và người chọn sản phẩm có nhu cầu thuê thật.",
      },
      {
        question: "Nhà đầu tư tin vào hạ tầng có nên xuống tiền lúc này không?",
        answer:
          "Có thể cân nhắc nếu tài sản có vị trí hưởng lợi thật, pháp lý rõ, nhu cầu ở hoặc thuê thật, giá còn hợp lý và nhà đầu tư có đủ dòng tiền để giữ tài sản trong 3-5 năm.",
      },
      {
        question: "Lãi suất cao có làm thị trường bất động sản đứng lại không?",
        answer:
          "Không hoàn toàn. Lãi suất cao làm thị trường chọn lọc hơn, khiến nhóm vay quá sức hoặc mua lướt sóng chậm lại, nhưng nhóm có nhu cầu thật, vốn tốt và chiến lược rõ vẫn tiếp tục mua chọn lọc.",
      },
      {
        question: "Người mua nên kiểm tra gì trước khi xuống tiền trong giai đoạn này?",
        answer:
          "Nên kiểm tra dòng tiền sau ưu đãi lãi suất, quỹ dự phòng, pháp lý dự án, giá so với khu vực, khả năng cho thuê hoặc bán lại và kế hoạch giữ tài sản trong vài năm tới.",
      },
    ],
    "ha-tang-bung-no-gia-tang-lai-suat-co-nen-mua-bat-dong-san": [
      {
        question: "Hạ tầng bùng nổ có nên mua bất động sản ngay không?",
        answer:
          "Không nên mua chỉ vì thông tin hạ tầng. Người mua cần xem giá hiện tại đã phản ánh kỳ vọng hạ tầng chưa, khu vực có nhu cầu ở thật không, pháp lý có rõ không và dòng tiền có đủ an toàn để giữ tài sản dài hạn không.",
      },
      {
        question: "Lãi suất cao có nên vay mua nhà không?",
        answer:
          "Vẫn có thể vay nếu tỷ lệ vay vừa phải, thu nhập ổn định và đã tính được khoản trả sau ưu đãi. Nếu phải vay quá sâu hoặc chưa có quỹ dự phòng 6-12 tháng, người mua nên chậm lại để tránh áp lực dòng tiền.",
      },
      {
        question: "Ai phù hợp mua bất động sản trong giai đoạn này?",
        answer:
          "Nhóm phù hợp là người mua để ở thật, có vốn sẵn tốt, vay vừa phải, chọn dự án pháp lý rõ, vị trí có nhu cầu thật và có kế hoạch giữ tài sản từ 3-5 năm trở lên.",
      },
      {
        question: "Rủi ro lớn nhất khi mua theo câu chuyện hạ tầng là gì?",
        answer:
          "Rủi ro lớn nhất là giá đã tăng trước kỳ vọng, người mua vay quá sức và không giữ được tài sản đủ lâu để hưởng lợi từ hạ tầng. Vì vậy cần ưu tiên dòng tiền và biên an toàn thay vì FOMO.",
      },
    ],
    "cac-yeu-to-chon-can-ho-phu-hop-hien-nay": [
      {
        question: "Khi chọn căn hộ hiện nay cần xem những yếu tố nào?",
        answer:
          "Người mua nên xem dòng tiền, vị trí theo lịch sống thật, pháp lý, loại căn, chính sách thanh toán, tiện ích sử dụng thật và khả năng giữ tài sản hoặc cho thuê sau này.",
      },
      {
        question: "Có nên chọn căn hộ chỉ vì giá rẻ không?",
        answer:
          "Không nên. Giá rẻ chỉ là một phần của quyết định mua. Cần so thêm layout, tầng, view, pháp lý, tiến độ thanh toán, chi phí sau nhận nhà và khả năng giữ tài sản trong dài hạn.",
      },
      {
        question: "Dòng tiền khi mua căn hộ nên tính như thế nào?",
        answer:
          "Nên tính vốn ban đầu, khoản vay ngân hàng, lãi suất sau ưu đãi, chi phí nội thất, phí quản lý và quỹ dự phòng ít nhất 6 tháng để tránh bị áp lực sau khi ký hợp đồng.",
      },
      {
        question: "Nên chọn căn 1PN, 2PN hay 3PN?",
        answer:
          "Căn 1PN và 1PN+ phù hợp vốn gọn hoặc cho thuê; căn 2PN cân bằng cho gia đình trẻ; căn 3PN phù hợp gia đình cần không gian rộng và có ngân sách khỏe hơn.",
      },
    ],
    "co-1-2-ty-mua-can-ho-sai-gon-2026": [
      {
        question: "Có 1-2 tỷ tiền mặt còn mua được căn hộ Sài Gòn không?",
        answer:
          "Vẫn có thể mua, nhưng người mua thường cần dùng thêm vay ngân hàng, chọn căn diện tích nhỏ hơn hoặc chấp nhận đi xa hơn. Với mặt bằng giá 75-90 triệu/m2, căn hộ trong TP.HCM thường đã ở vùng tổng giá 4-6 tỷ.",
      },
      {
        question: "Vì sao căn hộ 3-4 tỷ ở TP.HCM ngày càng khó tìm?",
        answer:
          "Do mặt bằng giá căn hộ đã tăng, quỹ đất nội đô hạn chế và chi phí phát triển dự án cao hơn. Muốn tổng giá 3-4 tỷ, người mua thường phải chọn khu xa hơn như Bình Dương, Long An hoặc các khu ven.",
      },
      {
        question: "Vì sao Mizuki, The Peak Garden và Vlasta Premier vẫn có nhu cầu?",
        answer:
          "Mizuki mạnh ở quần thể xanh và cộng đồng cư dân; The Peak Garden mạnh ở vị trí gần Phú Mỹ Hưng và tổng giá dễ tiếp cận hơn; Vlasta Premier mạnh ở sản phẩm mới, thiết kế cao cấp, tiện ích khác biệt và chính sách thanh toán nhẹ.",
      },
    ],
    "co-2-ty-nen-mua-mizuki-72m2-hay-vlasta-premier": [
      {
        question: "Có 2 tỷ nên mua Mizuki 72m2 hay Vlasta Premier 50-58m2?",
        answer:
          "Nếu ưu tiên ở ngay và cần diện tích rộng, Mizuki 72m2 giá khoảng 4 tỷ hợp lý hơn. Nếu ưu tiên giữ dòng tiền trong bối cảnh lãi suất vay 11-14%/năm, mua sản phẩm mới và chỉ muốn trả trước khoảng 900 triệu, Vlasta Premier 50-58m2 đáng cân nhắc hơn.",
      },
      {
        question: "Vlasta Premier nhỏ hơn Mizuki thì có đáng mua không?",
        answer:
          "Vlasta Premier nhỏ hơn về diện tích trong cùng bài toán ngân sách, nhưng có lợi thế về sản phẩm mới, thiết kế cao cấp, tiện ích khác biệt và lịch thanh toán nhẹ hơn. Quyết định phụ thuộc vào việc người mua ưu tiên diện tích hay dòng tiền.",
      },
      {
        question: "Có nên dùng hết 2 tỷ để giảm khoản vay khi mua căn hộ không?",
        answer:
          "Không nên dùng hết vốn nếu chưa có quỹ dự phòng, nhất là khi lãi suất vay có thể ở mức 11-14%/năm. Người mua nên giữ lại một khoản tiền mặt đủ cho 6-12 tháng chi phí sinh hoạt, trả nợ và các khoản phát sinh sau khi mua nhà.",
      },
    ],
    "gia-can-1pn-vlasta-premier-2026": [
      {
        question: "Giá căn 1PN Vlasta Premier 2026 khoảng bao nhiêu?",
        answer:
          "Theo bảng giá dự kiến hiện có, căn 1PN và 1PN+ Vlasta Premier có diện tích khoảng 50.03-58.72m2, tổng giá dự kiến khoảng 4.35-5.74 tỷ tùy tầng, view, hướng và chính sách từng thời điểm.",
      },
      {
        question: "Căn 1PN Vlasta Premier phù hợp với ai?",
        answer:
          "Căn 1PN phù hợp khách độc thân, chuyên gia, vợ chồng trẻ hoặc nhà đầu tư cần sản phẩm tổng giá gọn hơn để cho thuê hoặc giữ tài sản tại khu Nam Sài Gòn.",
      },
      {
        question: "Khi chọn căn 1PN Vlasta Premier nên xem gì?",
        answer:
          "Nên xem layout, tầng, view, hướng, vị trí lõi thang, tiêu chuẩn bàn giao, chính sách thanh toán và tổng vốn thực tế thay vì chỉ chọn căn có giá thấp nhất.",
      },
    ],
    "vlasta-premier-co-so-hong-khong": [
      {
        question: "Vlasta Premier có sổ hồng không?",
        answer:
          "Với dự án đang triển khai, câu hỏi này nên được hiểu là kiểm tra nền tảng pháp lý để tiến tới cấp giấy chứng nhận sau khi dự án hoàn thành, nghiệm thu và bàn giao. Người mua nên xem giấy phép xây dựng, quy hoạch 1/500, nghĩa vụ tài chính, bảo lãnh ngân hàng và điều khoản sở hữu trong hợp đồng.",
      },
      {
        question: "Tên pháp lý của Vlasta Premier là gì?",
        answer:
          "Tên pháp lý chính thức của dự án là Khu chung cư thương mại và dịch vụ hỗn hợp New Tech. Vlasta Premier là tên thương mại được sử dụng trong truyền thông và tư vấn bán hàng.",
      },
      {
        question: "Cần kiểm tra giấy tờ nào trước khi mua Vlasta Premier?",
        answer:
          "Nên kiểm tra giấy phép xây dựng, quy hoạch 1/500, hồ sơ nghĩa vụ tài chính đất, bảo lãnh ngân hàng, tiến độ và hợp đồng mua bán cập nhật tại thời điểm giao dịch.",
      },
    ],
    "vlasta-premier-co-nen-mua-de-o-khong": [
      {
        question: "Vlasta Premier có nên mua để ở không?",
        answer:
          "Vlasta Premier đáng cân nhắc để ở nếu người mua ưu tiên khu Nam Sài Gòn, thiết kế căn hộ cao cấp, tiện ích khác biệt, môi trường sống riêng tư và lịch thanh toán nhẹ hơn giai đoạn đầu.",
      },
      {
        question: "Điểm mạnh khi mua ở Vlasta Premier là gì?",
        answer:
          "Điểm mạnh gồm thiết kế kính full-height, tiện ích như golf giả lập, hồ bơi muối điện phân, coworking khoảng 1.000m2, vị trí Phú Thuận và khả năng kết nối về Phú Mỹ Hưng, Quận 7, Nhà Bè.",
      },
      {
        question: "Ai nên cân nhắc kỹ trước khi mua Vlasta Premier để ở?",
        answer:
          "Khách có ngân sách quá sát hoặc chỉ muốn tìm căn giá thấp nhất khu vực nên so thêm các dự án khác, vì Vlasta Premier phù hợp hơn với nhóm ưu tiên chất lượng sống và trải nghiệm căn hộ.",
      },
    ],
    "thanh-toan-vlasta-premier-20-den-khi-nhan-nha": [
      {
        question: "Thanh toán Vlasta Premier chỉ đóng 20% đến khi nhận nhà là gì?",
        answer:
          "Đây là chính sách dự kiến giúp khách mua chỉ cần đóng khoảng 20% trước thời điểm nhận nhà. Khi nhận nhà vào quý IV/2027, khách hàng chỉ đóng thêm khoảng 10%, phần còn lại theo tiến độ và điều kiện cụ thể tại thời điểm ký.",
      },
      {
        question: "Ngân hàng hỗ trợ lãi suất Vlasta Premier trong bao lâu?",
        answer:
          "Theo chính sách bán hàng, ngân hàng có thể hỗ trợ lãi suất đủ 24 tháng kể từ khi ký hợp đồng mua bán. Nếu nhận nhà vào quý IV/2027, khách hàng vẫn còn khoảng 9 tháng sau nhận nhà được hỗ trợ theo điều kiện chương trình.",
      },
      {
        question: "Sau khi nhận nhà có thể ở hoặc cho thuê trong thời gian hỗ trợ lãi suất không?",
        answer:
          "Có. Trong thời gian còn hỗ trợ lãi suất sau khi nhận nhà, khách hàng có thể về ở hoặc khai thác cho thuê để tạo dòng tiền, trong khi chưa phải chịu thêm áp lực tài chính lớn từ khoản vay.",
      },
      {
        question: "Chính sách thanh toán nhẹ có phải lý do duy nhất để mua không?",
        answer:
          "Không. Chính sách thanh toán là lợi thế dòng tiền, nhưng người mua vẫn cần chọn đúng căn, đúng giá, đúng layout, đúng khả năng tài chính và kiểm tra pháp lý trước khi quyết định.",
      },
    ],
    "so-sanh-vlasta-premier-mizuki-park": [
      {
        question: "Nên mua Vlasta Premier hay Mizuki Park?",
        answer:
          "Nếu ưu tiên không gian xanh, quần thể lớn và giá dễ tiếp cận hơn, Mizuki Park là lựa chọn đáng xem. Nếu ưu tiên thiết kế căn hộ cao cấp, chất lượng bàn giao, tiện ích khác biệt và lịch thanh toán giãn, Vlasta Premier phù hợp hơn.",
      },
      {
        question: "Vlasta Premier có đắt hơn Mizuki Park không?",
        answer:
          "Vlasta Premier thường có mức giá cao hơn tùy loại căn, tầng và chính sách từng thời điểm. Khoản chênh cần được so với chất lượng bàn giao, thiết kế, tiện ích và lợi thế dòng tiền thanh toán.",
      },
      {
        question: "Mizuki Park mạnh hơn Vlasta Premier ở điểm nào?",
        answer:
          "Mizuki Park mạnh ở không gian xanh, quy mô quần thể, cảnh quan và môi trường sống yên tĩnh. Đây là lợi thế rõ với gia đình thích khu đô thị lớn và nhiều mảng xanh.",
      },
    ],
    "so-sanh-vlasta-premier-the-peak-garden": [
      {
        question: "Nên mua Vlasta Premier hay The Peak Garden?",
        answer:
          "The Peak Garden phù hợp với khách ưu tiên gần Phú Mỹ Hưng, ngân sách dễ tiếp cận và kỳ vọng hạ tầng tương lai. Vlasta Premier phù hợp hơn nếu ưu tiên thiết kế, chất lượng bàn giao, tiện ích cao cấp và lịch thanh toán giãn.",
      },
      {
        question: "The Peak Garden có lợi thế gì so với Vlasta Premier?",
        answer:
          "The Peak Garden có lợi thế về vị trí gần Phú Mỹ Hưng và mức giá thường dễ tiếp cận hơn. Tuy nhiên, khách mua nên kiểm tra kỹ layout, độ thoáng và chất lượng hoàn thiện thực tế.",
      },
      {
        question: "Vlasta Premier khác The Peak Garden ở điểm nào?",
        answer:
          "Vlasta Premier nổi bật ở định vị cao cấp hơn, hệ kính full-height, tiện ích khác biệt và lịch thanh toán nhẹ hơn giai đoạn đầu. Đây là lựa chọn hợp với khách đặt nặng trải nghiệm căn hộ.",
      },
    ],
    "so-sanh-vlasta-premier-q7-riverside": [
      {
        question: "Nên mua Vlasta Premier hay Q7 Riverside?",
        answer:
          "Q7 Riverside phù hợp với khách thích khu đông dân, mua vào an toàn, khai thác cho thuê ngay và ngân sách vừa phải. Vlasta Premier phù hợp hơn nếu ưu tiên sản phẩm mới, sống sang hơn, mật độ thấp hơn và đầu tư trung dài hạn.",
      },
      {
        question: "Q7 Riverside mạnh hơn Vlasta Premier ở điểm nào?",
        answer:
          "Q7 Riverside mạnh ở quy mô lớn, cộng đồng cư dân đã hình thành, khu vực nhộn nhịp, giá dễ tiếp cận và khả năng cho thuê ngay. Đây là lợi thế rõ với gia đình trẻ và người mua ở thật.",
      },
      {
        question: "Vlasta Premier khác Q7 Riverside như thế nào?",
        answer:
          "Vlasta Premier đi theo concept Luxury Wellness ven sông với ít căn hơn, thiết kế hiện đại, mặt ngoài kính sang trọng, tiện ích nghỉ dưỡng và chính sách thanh toán kích cầu mạnh giai đoạn đầu. Dự án đại diện cho thế hệ nâng cấp mới trên trục Đào Trí.",
      },
    ],
    "so-sanh-vlasta-premier-sunshine-sky-city": [
      {
        question: "Vlasta Premier và Sunshine Sky City khác nhau ở điểm nào?",
        answer:
          "Sunshine Sky City mạnh ở vị trí gần Phú Mỹ Hưng và hệ tiện ích khu vực đã hình thành. Vlasta Premier mạnh ở thiết kế căn hộ, cảm giác riêng tư hơn, tiện ích khác biệt và chính sách thanh toán nhẹ hơn.",
      },
      {
        question: "Ai phù hợp với Sunshine Sky City hơn?",
        answer:
          "Sunshine Sky City phù hợp với khách muốn ở gần Phú Mỹ Hưng, ưu tiên tiện ích Quận 7 và chấp nhận quy mô cư dân lớn hơn.",
      },
      {
        question: "Ai phù hợp với Vlasta Premier hơn?",
        answer:
          "Vlasta Premier phù hợp với khách muốn dự án chọn lọc hơn, thiết kế đẹp, bàn giao chất lượng và có lịch thanh toán hỗ trợ dòng tiền tốt hơn.",
      },
    ],
    "so-sanh-vlasta-premier-sunshine-diamond-river": [
      {
        question: "Nên chọn Vlasta Premier hay Sunshine Diamond River?",
        answer:
          "Sunshine Diamond River phù hợp với khách thích khu phức hợp ven sông quy mô lớn và chấp nhận mặt bằng giá cao khoảng 110 triệu/m2. Vlasta Premier phù hợp hơn nếu ưu tiên yếu tố Đào Trí ven sông, căn hộ cao cấp, thiết kế đẹp, tiện ích hiếm và lịch thanh toán giãn.",
      },
      {
        question: "Sunshine Diamond River mạnh hơn ở điểm nào?",
        answer:
          "Sunshine Diamond River mạnh ở yếu tố cảnh quan ven sông, quy mô khu phức hợp, hệ sinh thái lớn và định vị giá cao khoảng 110 triệu/m2. Đây là điểm cộng với khách thích không gian rộng và chấp nhận ngân sách lớn.",
      },
      {
        question: "Vlasta Premier có lợi thế gì khi so với Sunshine Diamond River?",
        answer:
          "Vlasta Premier có lợi thế về vị trí trên trục Đào Trí ven sông, cảm giác chọn lọc, thiết kế căn hộ, kính full-height, tiện ích như golf 3D, hồ bơi muối, coworking và lịch thanh toán nhẹ hơn giai đoạn đầu.",
      },
    ],
    "phap-ly-vlasta-premier-van-phu": [
      {
        question: "Tên pháp lý chính thức của Vlasta Premier là gì?",
        answer:
          "Tên pháp lý chính thức của dự án là Khu chung cư thương mại và dịch vụ hỗn hợp New Tech. Vlasta Premier là tên thương mại được dùng trong truyền thông và tư vấn bán hàng.",
      },
      {
        question: "Vlasta Premier đã có giấy phép xây dựng chưa?",
        answer:
          "Theo bộ hồ sơ pháp lý, dự án đã được Sở Xây dựng TP.HCM cấp Giấy phép xây dựng số 17/GPXD ngày 15/5/2024 cho Công ty Cổ phần Đầu tư Xây dựng New Tech.",
      },
      {
        question: "Văn Phú - Invest đã hoàn tất tiền sử dụng đất chưa?",
        answer:
          "Theo bộ hồ sơ hiện có, Văn Phú - Invest đã hoàn tất việc đóng tiền sử dụng đất, tạo nền tảng pháp lý tốt hơn cho quỹ đất sạch và thủ tục sổ hồng sau này.",
      },
      {
        question: "Vlasta Premier có tài liệu bảo lãnh ngân hàng không?",
        answer:
          "Trong bộ hồ sơ có tài liệu VPBank cam kết phát hành bảo lãnh. Người mua nên yêu cầu bản cập nhật tại thời điểm ký để kiểm tra phạm vi bảo lãnh theo đúng căn và hợp đồng.",
      },
    ],
    "gia-vlasta-premier-2026": [
      {
        question: "Giá Vlasta Premier 2026 khoảng bao nhiêu?",
        answer:
          "Theo bảng giá dự kiến hiện có, căn 1PN và 1PN+ khoảng 4.35-5.74 tỷ, căn 2PN khoảng 6.36-8.24 tỷ và căn 3PN khoảng 8.15-9.57 tỷ. Giá thực tế cần kiểm tra theo giỏ hàng và thời điểm tư vấn.",
      },
      {
        question: "Giá Vlasta Premier đã gồm VAT và nội thất chưa?",
        answer:
          "Theo bảng giá dự kiến hiện có, mức giá đã gồm VAT và full nội thất cao cấp. Người mua vẫn nên kiểm tra thêm phí bảo trì, chính sách thanh toán và ưu đãi tại thời điểm giao dịch.",
      },
      {
        question: "Nên chọn căn 1PN, 2PN hay 3PN tại Vlasta Premier?",
        answer:
          "Căn 1PN và 1PN+ phù hợp ngân sách gọn hoặc cho thuê. Căn 2PN cân bằng hơn cho gia đình trẻ và thanh khoản. Căn 3PN phù hợp khách mua ở lâu dài, cần không gian rộng và trải nghiệm cao cấp hơn.",
      },
    ],
    "so-sanh-mizuki-vlasta-premier-the-peak-garden": [
      {
        question: "Trong 3 dự án Mizuki, The Peak Garden và Vlasta Premier, dự án nào phù hợp mua ở?",
        answer:
          "Mizuki phù hợp với gia đình thích không gian xanh và yên tĩnh. The Peak Garden phù hợp với khách ưu tiên gần Phú Mỹ Hưng. Vlasta Premier phù hợp với khách muốn căn hộ cao cấp, thiết kế đẹp và lịch thanh toán giãn.",
      },
      {
        question: "Dự án nào có lịch thanh toán tốt hơn?",
        answer:
          "Vlasta Premier có lợi thế về lịch thanh toán khi khách mua chỉ cần đóng một phần trước khi nhận nhà và có chính sách hỗ trợ ngân hàng theo từng thời điểm. Khách mua vẫn cần kiểm tra chính sách mới nhất trước khi quyết định.",
      },
      {
        question: "Dự án nào có giá dễ tiếp cận hơn?",
        answer:
          "Mizuki Park và The Peak Garden thường dễ tiếp cận hơn về giá so với Vlasta Premier. Vlasta Premier phù hợp hơn với khách chấp nhận trả thêm để lấy thiết kế, bàn giao và trải nghiệm sống cao cấp hơn.",
      },
    ],
    "so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden": [
      {
        question: "Bài so sánh nhiều dự án nên đọc như thế nào?",
        answer:
          "Nên đọc bài này như một bản tổng quan để xác định dự án phù hợp theo nhu cầu. Sau đó, khách mua nên đọc thêm bài so sánh từng cặp để kiểm tra kỹ hơn giữa Vlasta Premier và từng dự án cụ thể.",
      },
      {
        question: "Vlasta Premier có lợi thế gì trong nhóm so sánh?",
        answer:
          "Vlasta Premier có lợi thế ở thiết kế căn hộ, yếu tố Đào Trí ven sông, tiện ích khác biệt như golf 3D, hồ bơi muối, coworking lớn và lịch thanh toán giãn hơn. Khi so với Sunshine Diamond River, giá Vlasta không nhất thiết cao hơn vì Sunshine Diamond River có thể ở khoảng 110 triệu/m2.",
      },
      {
        question: "Có nên chỉ so giá bán giữa các dự án không?",
        answer:
          "Không nên chỉ so giá bán. Khách mua nên so thêm vị trí, mật độ, layout, chất lượng bàn giao, tiện ích, lịch thanh toán và mục tiêu mua ở hay đầu tư.",
      },
    ],
    "vlasta-premier-co-dang-dau-tu-khong": [
      {
        question: "Vlasta Premier có phù hợp để đầu tư không?",
        answer:
          "Vlasta Premier phù hợp với nhà đầu tư ưu tiên sản phẩm cao cấp, tiện ích khác biệt và lịch thanh toán nhẹ giai đoạn đầu. Tuy nhiên, hiệu quả đầu tư phụ thuộc vào giá vào, loại căn, tầng, view và chiến lược nắm giữ.",
      },
      {
        question: "Điểm mạnh đầu tư của Vlasta Premier là gì?",
        answer:
          "Điểm mạnh gồm thiết kế căn hộ đẹp, tiện ích hiếm, yếu tố Đào Trí ven sông, vị trí khu Nam, chính sách thanh toán giãn và hỗ trợ ngân hàng theo từng thời điểm.",
      },
      {
        question: "Rủi ro khi đầu tư Vlasta Premier là gì?",
        answer:
          "Rủi ro thường nằm ở việc chọn sai căn, mua giá chênh quá cao, dùng đòn bẩy quá mạnh hoặc kỳ vọng tăng giá trong thời gian quá ngắn.",
      },
    ],
    "vlasta-premier-co-tiem-nang-tang-gia-khong": [
      {
        question: "Vlasta Premier có tiềm năng tăng giá không?",
        answer:
          "Dự án có nền tảng giữ giá nhờ thiết kế, tiện ích khác biệt, yếu tố Đào Trí ven sông, vị trí khu Nam và lịch thanh toán tốt. Tuy nhiên, không nên xem đây là cam kết tăng giá vì kết quả còn phụ thuộc thị trường và giá mua ban đầu.",
      },
      {
        question: "Tiện ích có ảnh hưởng tới giá trị dự án không?",
        answer:
          "Có. Những tiện ích hiếm như golf 3D, hồ bơi muối và coworking lớn giúp dự án dễ tạo nhận diện hơn khi khách mua hoặc thuê so sánh với các dự án khác.",
      },
      {
        question: "Nên chọn căn nào để tối ưu tiềm năng giữ giá?",
        answer:
          "Nên ưu tiên căn có layout tốt, view thoáng, tầng hợp lý, mức chênh vừa phải và phù hợp nhu cầu ở thật hoặc cho thuê trong tương lai.",
      },
    ],
    "du-an-phu-hop-gia-dinh-tre-nam-sai-gon": [
      {
        question: "Vlasta Premier có phù hợp gia đình trẻ không?",
        answer:
          "Có, nếu gia đình trẻ ưu tiên căn hộ sáng, layout dễ ở, tiện ích nội khu đa dạng và lịch thanh toán giúp giảm áp lực vốn trước khi nhận nhà.",
      },
      {
        question: "Gia đình trẻ nên chọn loại căn nào tại Vlasta Premier?",
        answer:
          "Gia đình trẻ nên so kỹ căn 1PN+, 2PN và 3PN theo ngân sách, số thành viên, nhu cầu làm việc tại nhà, hướng view và khả năng nâng cấp trong vài năm tới.",
      },
      {
        question: "Tiện ích nào quan trọng với gia đình trẻ?",
        answer:
          "Các tiện ích đáng chú ý gồm hồ bơi muối, coworking space, khu thể thao, không gian thư giãn và hệ an ninh nhiều lớp.",
      },
    ],
    "vlasta-premier-ban-giao-khi-nao": [
      {
        question: "Thời gian bàn giao dự kiến là khi nào?",
        answer:
          "Thời gian bàn giao dự kiến là Q4/2027. Mốc này cần được cập nhật theo tiến độ triển khai và thông báo chính thức.",
      },
      {
        question: "Tiêu chuẩn bàn giao căn hộ như thế nào?",
        answer:
          "Các căn hộ bàn giao hoàn thiện, penthouse bàn giao thô. Danh mục vật tư bàn giao theo danh mục được chủ đầu tư ban hành.",
      },
      {
        question: "Dự án có ngân hàng bảo lãnh không?",
        answer:
          "Theo thông tin tư vấn hiện tại, dự án có phương án phát hành thư bảo lãnh cho người mua nhà của VPBank. Khách mua cần đối chiếu chứng thư, phí bảo lãnh và điều kiện cụ thể theo hồ sơ giao dịch tại từng thời điểm.",
      },
    ],
    "vlasta-premier-chu-dau-tu-la-ai": [
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
        question: "Tên pháp lý chính thức của dự án là gì?",
        answer:
          "Tên pháp lý chính thức của dự án là Khu chung cư thương mại và dịch vụ hỗn hợp New Tech. Vlasta Premier là tên thương mại được sử dụng trong truyền thông và tư vấn bán hàng.",
      },
    ],
    "phi-quan-ly-vlasta-premier": [
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
        question: "Cư dân bên ngoài có được dùng tiện ích nội khu không?",
        answer:
          "Các dịch vụ nằm trong phí dịch vụ tòa nhà chỉ dành cho cư dân/chủ sở hữu diện tích trong tòa nhà. Các tiện ích gia tăng có thu phí riêng có thể có khách bên ngoài sử dụng có trả phí.",
      },
    ],
    "mat-bang-tang-vlasta-premier": [
      {
        question: "Dự án có bao nhiêu sản phẩm và loại căn nào?",
        answer:
          "Tổng số lượng là 602 căn hộ ở, gồm 54 căn 1PN khoảng 44,55-44,57 m2, 162 căn 1PN+ khoảng 49,99-52,49 m2, 270 căn 2PN khoảng 66,68-72,66 m2, 108 căn 3PN khoảng 89,52-91,33 m2 và 8 căn penthouse khoảng 281,6-348,2 m2.",
      },
      {
        question: "Quy mô dự án gồm những gì?",
        answer:
          "Dự án gồm 2 tòa tháp, 2 tầng hầm, 5 tầng thương mại dịch vụ và 29 tầng căn hộ chung cư. Tổng diện tích khu đất khoảng 9.016,5 m2.",
      },
      {
        question: "Các tiện ích nổi bật của dự án là gì?",
        answer:
          "Tiện ích nổi bật gồm bể bơi Panorama và bể bơi trẻ em khoảng 500 m2, Pool Bar, Gym & Fitness/Yoga/Dance khoảng 250 m2, nhà trẻ khoảng 1.010 m2, Co-Working khoảng 1.034 m2, thư viện, rạp phim gia đình, karaoke, phòng golf 3D, sân chơi trẻ em, vườn thiền và trạm sạc xe điện.",
      },
    ],
    "gia-can-2pn-vlasta-premier-2026": [
      {
        question: "Giá Vlasta Premier 2026 khoảng bao nhiêu?",
        answer:
          "Theo bảng giá dự kiến hiện có, căn 1PN và 1PN+ khoảng 4.35-5.74 tỷ, căn 2PN khoảng 6.36-8.24 tỷ và căn 3PN khoảng 8.15-9.57 tỷ. Giá thực tế cần kiểm tra theo giỏ hàng và thời điểm tư vấn.",
      },
      {
        question: "Giá Vlasta Premier đã gồm VAT và nội thất chưa?",
        answer:
          "Theo bảng giá dự kiến hiện có, mức giá đã gồm VAT và full nội thất cao cấp. Người mua vẫn nên kiểm tra thêm phí bảo trì, chính sách thanh toán và ưu đãi tại thời điểm giao dịch.",
      },
      {
        question: "Nên chọn căn 1PN, 2PN hay 3PN tại Vlasta Premier?",
        answer:
          "Căn 1PN và 1PN+ phù hợp ngân sách gọn hoặc cho thuê. Căn 2PN cân bằng hơn cho gia đình trẻ và thanh khoản. Căn 3PN phù hợp khách mua ở lâu dài, cần không gian rộng và trải nghiệm cao cấp hơn.",
      },
    ],
    "gia-can-3pn-vlasta-premier-2026": [
      {
        question: "Giá Vlasta Premier 2026 khoảng bao nhiêu?",
        answer:
          "Theo bảng giá dự kiến hiện có, căn 1PN và 1PN+ khoảng 4.35-5.74 tỷ, căn 2PN khoảng 6.36-8.24 tỷ và căn 3PN khoảng 8.15-9.57 tỷ. Giá thực tế cần kiểm tra theo giỏ hàng và thời điểm tư vấn.",
      },
      {
        question: "Phí quản lý vận hành dự kiến bao nhiêu?",
        answer:
          "Mức phí quản lý dự kiến là 16.500 đồng/m2/tháng, chưa gồm VAT, bao gồm các dịch vụ phục vụ diện tích sở hữu chung của tòa nhà.",
      },
      {
        question: "Thời gian bàn giao dự kiến là khi nào?",
        answer:
          "Thời gian bàn giao dự kiến là Q4/2027. Mốc này cần được cập nhật theo tiến độ triển khai và thông báo chính thức.",
      },
    ],
    "vlasta-premier-o-dau": [
      {
        question: "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
        answer:
          "Vị trí dự án là thửa 548, tờ bản đồ số 85, đường Đào Trí, phường Phú Thuận, TP. Hồ Chí Minh.",
      },
      {
        question: "Các kết nối vùng nổi bật quanh dự án là gì?",
        answer:
          "Các tuyến đường chính gồm Nguyễn Văn Linh, Đào Trí, Nguyễn Hữu Thọ; các tiện ích lân cận gồm FV, Tim Tâm Đức, Đa Khoa Quốc Tế Nam Sài Gòn, Crescent Mall, SC VivoCity, Lotte Mart, Hồ Bán Nguyệt, Nam Viên, RMIT, Tôn Đức Thắng và cụm trường quốc tế.",
      },
      {
        question: "Hệ thống an ninh của dự án gồm mấy lớp?",
        answer:
          "Hệ thống an ninh gồm 4 lớp: chốt an ninh 24/24 tại lối ra vào và hầm xe, access control tại lối phụ và tiện ích, kiểm soát tại sảnh/thang máy, camera hành lang và giám sát từ phòng CCTV trung tâm.",
      },
    ],
    "review-vi-tri-vlasta-premier": [
      {
        question: "Vị trí Vlasta Premier có thuận tiện không?",
        answer:
          "Vlasta Premier nằm tại Phú Thuận trên trục Đào Trí ven sông, thuận kết nối về Phú Mỹ Hưng, Nguyễn Văn Linh và các tiện ích khu Nam. Khách mua nên khảo sát thực tế vào giờ cao điểm để đánh giá đúng nhu cầu di chuyển.",
      },
      {
        question: "Vị trí có phải yếu tố quan trọng nhất khi mua Vlasta Premier không?",
        answer:
          "Vị trí rất quan trọng, nhưng không nên tách khỏi chất lượng căn hộ, tiện ích nội khu, pháp lý, giá bán và lịch thanh toán.",
      },
      {
        question: "Nên kiểm tra gì khi đi thực địa vị trí dự án?",
        answer:
          "Nên kiểm tra thời gian di chuyển vào giờ cao điểm, tuyến đường thường dùng, tiện ích xung quanh, mức độ kết nối về Phú Mỹ Hưng và cảm giác khu vực vào ban ngày lẫn buổi tối.",
      },
    ],
  };

  const customFaqs = customFaqMap[post.slug];

  if (customFaqs) {
    return customFaqs;
  }

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
    "so-sanh-mizuki-vlasta-premier-the-peak-garden": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Dự án có bao nhiêu sản phẩm và loại căn nào?",
      "Các tiện ích nổi bật của dự án là gì?",
      "Thời gian bàn giao dự kiến là khi nào?",
    ],
    "so-sanh-vlasta-premier-mizuki-park": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Các tiện ích nổi bật của dự án là gì?",
      "Thời gian bàn giao dự kiến là khi nào?",
    ],
    "so-sanh-vlasta-premier-the-peak-garden": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Dự án có bao nhiêu sản phẩm và loại căn nào?",
      "Các tiện ích nổi bật của dự án là gì?",
    ],
    "so-sanh-vlasta-premier-q7-riverside": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Các tiện ích nổi bật của dự án là gì?",
      "Thời gian bàn giao dự kiến là khi nào?",
    ],
    "so-sanh-vlasta-premier-sunshine-sky-city": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Các tiện ích nổi bật của dự án là gì?",
      "Phí quản lý vận hành dự kiến bao nhiêu?",
    ],
    "so-sanh-vlasta-premier-sunshine-diamond-river": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Các tiện ích nổi bật của dự án là gì?",
      "Thời gian bàn giao dự kiến là khi nào?",
    ],
    "vlasta-premier-ban-giao-khi-nao": [
      "Thời gian bàn giao dự kiến là khi nào?",
      "Tiêu chuẩn bàn giao căn hộ như thế nào?",
      "Dự án có ngân hàng bảo lãnh không?",
    ],
    "vlasta-premier-chu-dau-tu-la-ai": [
      "Chủ đầu tư và đơn vị phát triển dự án là ai?",
      "Đơn vị quản lý vận hành dự án là đơn vị nào?",
      "Tên pháp lý chính thức của dự án là gì?",
    ],
    "phi-quan-ly-vlasta-premier": [
      "Phí quản lý vận hành dự kiến bao nhiêu?",
      "Phí bảo trì phần sở hữu chung là bao nhiêu?",
      "Cư dân bên ngoài có được dùng tiện ích nội khu không?",
    ],
    "mat-bang-tang-vlasta-premier": [
      "Dự án có bao nhiêu sản phẩm và loại căn nào?",
      "Quy mô dự án gồm những gì?",
      "Các tiện ích nổi bật của dự án là gì?",
    ],
    "gia-can-2pn-vlasta-premier-2026": [
      "Giá Vlasta Premier 2026 khoảng bao nhiêu?",
      "Giá Vlasta Premier đã gồm VAT và nội thất chưa?",
      "Nên chọn căn 1PN, 2PN hay 3PN tại Vlasta Premier?",
    ],
    "gia-can-3pn-vlasta-premier-2026": [
      "Giá Vlasta Premier 2026 khoảng bao nhiêu?",
      "Phí quản lý vận hành dự kiến bao nhiêu?",
      "Thời gian bàn giao dự kiến là khi nào?",
    ],
    "vlasta-premier-o-dau": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Các kết nối vùng nổi bật quanh dự án là gì?",
      "Hệ thống an ninh của dự án gồm mấy lớp?",
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
