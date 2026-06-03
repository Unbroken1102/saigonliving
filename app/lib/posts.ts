import type { ComponentType } from "react";
import { project } from "@/app/lib/site";
import ArticleOne, { post as articleOne } from "@/app/content/posts/vlasta-premier-co-dang-dau-tu-khong.mdx";
import ArticleTwo, { post as articleTwo } from "@/app/content/posts/so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden.mdx";
import ArticleThree, { post as articleThree } from "@/app/content/posts/review-vi-tri-vlasta-premier.mdx";
import ArticleFour, { post as articleFour } from "@/app/content/posts/du-an-phu-hop-gia-dinh-tre-nam-sai-gon.mdx";
import ArticleFive, { post as articleFive } from "@/app/content/posts/vlasta-premier-co-tiem-nang-tang-gia-khong.mdx";

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

export type FaqItem = {
  question: string;
  answer: string;
};

const registry: Array<{ meta: BlogPostMeta; Content: ComponentType }> = [
  { meta: articleOne, Content: ArticleOne },
  { meta: articleTwo, Content: ArticleTwo },
  { meta: articleThree, Content: ArticleThree },
  { meta: articleFour, Content: ArticleFour },
  { meta: articleFive, Content: ArticleFive },
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
