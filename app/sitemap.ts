import type { MetadataRoute } from "next";
import { INVENTORY_PROJECTS } from "@/app/lib/listings-project";
import { blogPosts, postImageBySlug } from "@/app/lib/posts";
import { absoluteUrl } from "@/app/lib/site";
import { vlastaRedirectedSlugs } from "@/app/lib/vlasta-cluster";

const sitemapBlogPosts = blogPosts.filter((post) => !vlastaRedirectedSlugs.includes(post.slug));

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
      url: absoluteUrl("/zeit-river-county"),
      lastModified: now,
      ...sitemapImages("/assets/zeit-river-county/hero-banner.jpg"),
    },
    {
      url: absoluteUrl("/the-9-stellars"),
      lastModified: now,
      ...sitemapImages("/assets/the-9-stellars/alta-villa.jpg"),
    },
    {
      url: absoluteUrl("/vlasta-premier/thong-tin"),
      lastModified: now,
      ...sitemapImages("/assets/vlasta-thong-tin/renders/hero-poster.jpg"),
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
    {
      url: absoluteUrl("/gio-hang/chuyen-nhuong"),
      lastModified: now,
      ...sitemapImages("/assets/mizuki-park/mizuki-park-can-ho-hien-huu.jpg"),
    },
    ...INVENTORY_PROJECTS.map((project) => ({
      url: absoluteUrl(`/gio-hang/${project.slug}`),
      lastModified: now,
      ...sitemapImages(project.image),
    })),
    ...sitemapBlogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: now,
      ...sitemapImages(postImageBySlug[post.slug]),
    })),
  ];
}
