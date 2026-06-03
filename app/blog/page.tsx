import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { BlogCard, ContactSection } from "@/app/components/site-sections";
import { blogPosts } from "@/app/lib/posts";
import { absoluteUrl, seoHubLinks, siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Blog Vlasta Premier Phú Thuận | Pháp lý, bảng giá, tiến độ, vị trí",
  description:
    "Thư viện bài viết SEO về Vlasta Premier Phú Thuận: pháp lý, bảng giá, tiến độ, vị trí, tiện ích, so sánh và phân tích đầu tư.",
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
  openGraph: {
    title: "Blog Vlasta Premier Phú Thuận",
    description:
      "Cụm nội dung SEO chuyên sâu về Vlasta Premier Phú Thuận và bất động sản cao cấp Nam Sài Gòn.",
    url: absoluteUrl("/blog"),
    images: [absoluteUrl("/og-vlasta-premier.svg")],
  },
};

export default function BlogIndexPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Blog Vlasta Premier Phú Thuận",
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

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="relative isolate overflow-hidden bg-[#fbf8f2] px-5 pb-24 pt-40 text-[#15110c] lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_18%,rgba(201,164,93,0.24),transparent_30%),linear-gradient(145deg,#fbf8f2,#f1e6d2)]" />
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#8a6a2f]">
            Content hub
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-balance md:text-7xl">
            Blog Vlasta Premier Phú Thuận cho pháp lý, bảng giá, tiến độ và đầu tư.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5d554c]">
            Thư viện bài viết giúp khách hàng tìm nhanh các chủ đề quan trọng trước khi liên hệ tư vấn.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-[#d9c79f]/70 bg-white/75 px-4 py-2 text-sm text-[#5d554c]">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e6] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {seoHubLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-3xl border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
                <p className="text-sm font-semibold text-[#15110c]">{link.title}</p>
                <p className="mt-3 text-sm leading-6 text-[#5d554c]">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
                All articles
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#15110c] md:text-5xl">
                Tất cả bài phân tích.
              </h2>
            </div>
            <Link href="/vlasta-premier" className="rounded-full bg-[#15110c] px-6 py-3 text-sm font-semibold text-white">
              Về hub dự án
            </Link>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
