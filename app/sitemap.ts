import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/lib/posts";
import { absoluteUrl } from "@/app/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/vlasta-premier"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [absoluteUrl("/og-vlasta-premier.svg")],
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75,
      images: [absoluteUrl("/og-vlasta-premier.svg")],
    })),
  ];
}
