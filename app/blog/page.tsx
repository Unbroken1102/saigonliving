import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogHubPosts } from "@/app/components/blog-hub-posts";
import { BlogHubQuickNav } from "@/app/components/blog-hub-quick-nav";
import { JsonLd } from "@/app/components/json-ld";
import { ContactSection } from "@/app/components/site-sections";
import { blogPosts, toBlogPostMeta, type BlogPost } from "@/app/lib/posts";
import { absoluteUrl, blogHubSections, siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Phân tích Saigon Living | Bảng giá, pháp lý, so sánh dự án 2026",
  description:
    "Thư viện phân tích Saigon Living theo từng dự án: bảng giá, pháp lý, vị trí, có nên mua và so sánh Eco Retreat, Vlasta Premier, The Peak Garden, Mizuki Park, TT Genesis.",
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
  openGraph: {
    title: "Phân tích Saigon Living | Dự án Nam Sài Gòn",
    description:
      "Bài viết được nhóm theo từng dự án để khách mua đọc đúng bối cảnh: bảng giá, vị trí, pháp lý, hạ tầng, có nên mua và so sánh.",
    url: absoluteUrl("/blog"),
    images: [
      {
        url: absoluteUrl(siteConfig.shareImage),
        width: 1024,
        height: 576,
        alt: "Phân tích Saigon Living về Eco Retreat, Vlasta Premier, Mizuki Park và dự án Nam Sài Gòn",
      },
    ],
  },
};

const hubSections = blogHubSections;

function getPostsBySlugs(slugs: readonly string[]): BlogPost[] {
  return slugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is BlogPost => Boolean(post))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export default function BlogIndexPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Blog Saigon Living",
      description: metadata.description,
      url: absoluteUrl("/blog"),
      inLanguage: "vi-VN",
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: blogPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/blog/${post.slug}`),
        name: post.title,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: absoluteUrl("/blog"),
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="relative isolate overflow-hidden bg-white px-5 pb-16 pt-40 text-neutral-900 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
            Phân tích theo dự án
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-5xl font-medium tracking-[-0.05em] text-balance md:text-7xl">
            Phân tích chuyên sâu.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            Chọn dự án để xem các bài phân tích liên quan: giá bán, vị trí, pháp lý, mặt bằng, hạ tầng, so sánh và câu hỏi trước khi xuống tiền.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {hubSections.map((hub) => {
              const postCount = getPostsBySlugs(hub.slugs).length;

              return (
                <Link
                  key={hub.id}
                  href={`#hub-${hub.id}`}
                  className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-neutral-400 hover:shadow-md"
                >
                  <div className="relative min-h-52 bg-[#15110c]">
                    <Image
                      src={hub.image}
                      alt={`Phân tích chuyên sâu ${hub.title}`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/8 to-transparent" />
                    <p className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/28 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
                      {postCount > 0 ? `${postCount} bài phân tích` : "Sắp có bài"}
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">{hub.eyebrow}</p>
                    <h3 className="font-display mt-3 text-3xl font-medium tracking-[-0.04em] text-neutral-900">
                      {hub.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{hub.description}</p>
                    <p className="mt-5 text-sm font-semibold text-neutral-900">
                      Xem các bài phân tích →
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <BlogHubQuickNav hubs={hubSections} />

      {hubSections.map((hub, index) => {
        const posts = getPostsBySlugs(hub.slugs);

        return (
          <section
            key={hub.title}
            className={`scroll-mt-36 ${index % 2 === 0 ? "bg-white" : "bg-neutral-50"} px-5 py-16 lg:px-8 lg:py-20`}
            id={`hub-${hub.id}`}
          >
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
                    {hub.eyebrow}
                  </p>
                  <h2 className="font-display mt-4 text-3xl font-medium tracking-[-0.04em] text-neutral-900 md:text-4xl">
                    {hub.title}
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-neutral-600">{hub.description}</p>
                </div>
                <Link
                  href={hub.href}
                  className="shrink-0 rounded-full bg-neutral-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-700"
                >
                  {hub.cta}
                </Link>
              </div>

              {posts.length > 0 ? (
                <BlogHubPosts posts={posts.map(toBlogPostMeta)} hubTitle={hub.title} />
              ) : (
                <div className="mt-10 rounded-[2rem] border border-neutral-200 bg-white p-7 text-neutral-900 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                    Đang bổ sung cụm bài
                  </p>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-600">
                    Dự án này đã có trang tổng quan riêng. Các bài phân tích chuyên sâu sẽ được thêm vào sau để gom giá bán, mặt bằng, ảnh thực tế và câu hỏi mua theo từng nhu cầu.
                  </p>
                </div>
              )}
            </div>
          </section>
        );
      })}

      <ContactSection />
    </>
  );
}
