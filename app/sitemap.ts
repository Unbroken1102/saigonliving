import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/lib/posts";
import { absoluteUrl } from "@/app/lib/site";

const postImageBySlug: Record<string, string> = {
  "den-bu-tai-dinh-cu-vinhomes-binh-chanh-dong-tien-di-ve-dau": "/assets/vinhomes-binh-chanh/quy-hoach-hung-long-binh-chanh.jpg",
  "vinhomes-binh-chanh-doc-quy-hoach-hung-long-1512ha": "/assets/vinhomes-binh-chanh/quy-hoach-hung-long-binh-chanh.jpg",
  "chan-dung-khach-hang-mua-bat-dong-san-khi-lai-suat-cao": "/assets/optimized/overview-dao-tri.jpg",
  "ha-tang-bung-no-gia-tang-lai-suat-co-nen-mua-bat-dong-san": "/assets/optimized/location.jpg",
  "cac-yeu-to-chon-can-ho-phu-hop-hien-nay": "/assets/optimized/overview-dao-tri.jpg",
  "co-1-2-ty-mua-can-ho-sai-gon-2026": "/assets/optimized/overview-dao-tri.jpg",
  "co-2-ty-nen-mua-mizuki-72m2-hay-vlasta-premier": "/assets/optimized/plan-b-1br.jpg",
  "gia-can-1pn-vlasta-premier-2026": "/assets/pricing/vlasta-premier-gia-du-kien-2026.jpg",
  "gia-vlasta-premier-2026": "/assets/pricing/vlasta-premier-gia-du-kien-2026.jpg",
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
};

function sitemapImages(imagePath?: string) {
  return imagePath ? { images: [absoluteUrl(imagePath)] } : {};
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
    },
    {
      url: absoluteUrl("/vlasta-premier"),
      lastModified: now,
      ...sitemapImages("/assets/optimized/overview-marina.jpg"),
    },
    {
      url: absoluteUrl("/vinhomes-binh-chanh"),
      lastModified: now,
      ...sitemapImages("/assets/vinhomes-binh-chanh/quy-hoach-hung-long-binh-chanh.jpg"),
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
    },
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: now,
      ...sitemapImages(postImageBySlug[post.slug]),
    })),
  ];
}
