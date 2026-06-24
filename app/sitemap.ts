import type { MetadataRoute } from "next";
import { INVENTORY_PROJECTS } from "@/app/lib/listings-project";
import { blogPosts, postImageBySlug } from "@/app/lib/posts";
import { absoluteUrl } from "@/app/lib/site";

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
      url: absoluteUrl("/mizuki-park"),
      lastModified: now,
      ...sitemapImages("/assets/mizuki-park/mizuki-park-kenh-dao-tien-ich.jpg"),
    },
    {
      url: absoluteUrl("/the-peak-garden"),
      lastModified: now,
      ...sitemapImages("/assets/the-peak-garden/the-peak-garden-hero.jpg"),
    },
    {
      url: absoluteUrl("/tt-genesis"),
      lastModified: now,
      ...sitemapImages("/assets/tt-genesis/vi-tri-tt-genesis.jpg"),
    },
    {
      url: absoluteUrl("/eco-retreat"),
      lastModified: now,
      ...sitemapImages("/assets/eco-retreat/eco-retreat-hero.webp"),
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
    },
    {
      url: absoluteUrl("/gio-hang"),
      lastModified: now,
      ...sitemapImages("/assets/mizuki-park/mizuki-park-can-ho-hien-huu.jpg"),
    },
    ...INVENTORY_PROJECTS.map((project) => ({
      url: absoluteUrl(`/gio-hang/${project.slug}`),
      lastModified: now,
      ...sitemapImages(project.image),
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: now,
      ...sitemapImages(postImageBySlug[post.slug]),
    })),
  ];
}
