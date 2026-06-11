import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/app/components/json-ld";
import { ContactSection } from "@/app/components/site-sections";
import {
  blogPosts,
  getArticleFaqs,
  getPostBySlug,
  getRelatedPosts,
} from "@/app/lib/posts";
import {
  absoluteUrl,
  seoHubLinks,
  siteConfig,
  vlastaSeoClusterLinks,
} from "@/app/lib/site";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

const vinhomesBinhChanhReadNextLinks = [
  {
    title: "Theo dõi Vinhomes Bình Chánh",
    description: "Landing cập nhật thông tin sớm về quy hoạch, hạ tầng và tín hiệu thị trường Bình Chánh.",
    href: "/vinhomes-binh-chanh",
  },
  {
    title: "Có 1-2 tỷ còn mua được căn hộ Sài Gòn?",
    description: "Góc nhìn dòng tiền cho người mua nhà khi giá căn hộ đã lên mặt bằng mới.",
    href: "/blog/co-1-2-ty-mua-can-ho-sai-gon-2026",
  },
  {
    title: "Ai vẫn xuống tiền khi lãi suất cao?",
    description: "Chân dung các nhóm khách mua thật, nhà đầu tư tiền mặt và người chọn sản phẩm có dòng tiền.",
    href: "/blog/chan-dung-khach-hang-mua-bat-dong-san-khi-lai-suat-cao",
  },
  {
    title: "Hạ tầng bùng nổ, có nên mua lúc này?",
    description: "Phân tích cách nhìn cơ hội hạ tầng khi giá tăng và lãi suất vẫn là áp lực lớn.",
    href: "/blog/ha-tang-bung-no-gia-tang-lai-suat-co-nen-mua-bat-dong-san",
  },
  {
    title: "Các yếu tố chọn căn hộ phù hợp",
    description: "Checklist về dòng tiền, vị trí, pháp lý, loại căn, tiện ích và khả năng giữ tài sản.",
    href: "/blog/cac-yeu-to-chon-can-ho-phu-hop-hien-nay",
  },
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: absoluteUrl(`/blog/${post.slug}`),
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      publishedTime: post.publishedAt,
      authors: [siteConfig.contact.advisor],
      images: [
        {
          url: absoluteUrl(siteConfig.shareImage),
          width: 1024,
          height: 576,
          alt: `${post.title} - Saigon Living`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [absoluteUrl(siteConfig.shareImage)],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);
  const articleFaqs = getArticleFaqs(post);
  const isVlastaPost = post.title.includes("Vlasta Premier") || post.keywords.some((keyword) => keyword.includes("Vlasta Premier"));
  const isVinhomesBinhChanhPost = post.slug === "vinhomes-binh-chanh-doc-quy-hoach-hung-long-1512ha";
  const readNextLinks = isVinhomesBinhChanhPost ? vinhomesBinhChanhReadNextLinks : seoHubLinks;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      inLanguage: "vi-VN",
      author: {
        "@type": "Person",
        name: siteConfig.contact.advisor,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
      image: absoluteUrl(siteConfig.ogImage),
      keywords: post.keywords.join(", "),
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
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: absoluteUrl(`/blog/${post.slug}`),
        },
      ],
    },
    ...(articleFaqs.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: articleFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]
      : []),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <article className="bg-[#fbf8f2]">
        <header className="relative isolate overflow-hidden bg-[#fbf8f2] px-5 pb-20 pt-40 text-[#15110c] lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_65%_20%,rgba(201,164,93,0.24),transparent_30%),linear-gradient(145deg,#fbf8f2,#f1e6d2)]" />
          <div className="mx-auto max-w-4xl">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-[#6b6258]" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#15110c]">
                Trang chủ
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#15110c]">
                Blog
              </Link>
              <span>/</span>
              <span className="text-[#8a6a2f]">{post.category}</span>
            </nav>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
              Vlasta Premier insights
            </p>
            <h1 className="font-display mt-5 text-4xl font-medium tracking-[-0.05em] text-balance md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-[#5d554c]">{post.description}</p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-[#5d554c]">
              <span className="rounded-full border border-[#d9c79f]/70 bg-white/75 px-3 py-1">
                {post.category}
              </span>
              <time className="rounded-full border border-[#d9c79f]/70 bg-white/75 px-3 py-1" dateTime={post.publishedAt}>
                {post.publishedAt}
              </time>
              <span className="rounded-full border border-[#d9c79f]/70 bg-white/75 px-3 py-1">
                {post.readingTime}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8">
          <aside className="lg:sticky lg:top-36 lg:self-start">
            <div className="rounded-[2rem] border border-black/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                Mục lục
              </p>
              <nav className="mt-5 space-y-3" aria-label="Mục lục bài viết">
                {post.toc.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="block rounded-xl px-3 py-2 text-sm font-medium leading-6 text-[#5d554c] transition hover:bg-[#fbf8f2] hover:text-[#15110c]">
                    {section.heading}
                  </a>
                ))}
                {articleFaqs.length ? (
                  <a href="#faq" className="block rounded-xl px-3 py-2 text-sm font-medium leading-6 text-[#5d554c] transition hover:bg-[#fbf8f2] hover:text-[#15110c]">
                    FAQ nhanh
                  </a>
                ) : null}
              </nav>
            </div>
          </aside>

          <div className="min-w-0 space-y-12">
            <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-10">
              <div className="blog-article">
                <post.Content />
              </div>
            </div>

            <section className="rounded-[2rem] border border-black/10 bg-white p-7 md:p-8">
              <h2 className="font-display text-3xl font-medium tracking-[-0.04em] text-[#15110c]">
                {isVinhomesBinhChanhPost ? "Đọc tiếp: quy hoạch, dòng tiền và thị trường" : "Nên đọc tiếp"}
              </h2>
              <p className="mt-3 leading-7 text-[#5d554c]">
                {isVinhomesBinhChanhPost
                  ? "Nếu Anh/Chị đang theo dõi sớm Vinhomes Bình Chánh, nên đọc thêm các góc nhìn thị trường dưới đây để hiểu dòng tiền, lãi suất và bối cảnh mua nhà hiện tại."
                  : "Các nội dung quan trọng giúp bạn kiểm tra dự án theo từng bước trước khi để lại thông tin."}
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {readNextLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="rounded-2xl bg-[#fbf8f2] p-5 transition hover:bg-[#f1e6d2]">
                    <span className="text-sm font-semibold text-[#15110c]">{link.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-[#5d554c]">
                      {link.description}
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {isVlastaPost ? (
              <section className="rounded-[2rem] border border-[#d9c79f]/65 bg-[#fbf8f2] p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a2f]">
                  Cụm bài Vlasta Premier
                </p>
                <h2 className="font-display mt-3 text-3xl font-medium tracking-[-0.04em] text-[#15110c]">
                  Đọc theo đúng thứ tự: giá, pháp lý, vị trí, thanh toán và so sánh.
                </h2>
                <p className="mt-3 leading-7 text-[#5d554c]">
                  Nếu Anh/Chị đang tìm hiểu Vlasta Premier, nên đọc thêm các bài dưới đây để nắm đủ bức tranh trước khi so giá, chọn căn hoặc để lại thông tin tư vấn.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {vlastaSeoClusterLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="rounded-2xl border border-[#d9c79f]/55 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#c9a45d] hover:shadow-lg hover:shadow-[#15110c]/5">
                      <span className="block text-sm font-bold leading-6 text-[#15110c]">{link.title}</span>
                      <span className="mt-2 block text-sm leading-6 text-[#5d554c]">{link.description}</span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            {articleFaqs.length ? (
              <section className="rounded-[2rem] border border-black/10 bg-white p-7 md:p-8" id="faq">
                <h2 className="font-display text-3xl font-medium tracking-[-0.04em] text-[#15110c]">
                  FAQ nhanh theo chủ đề bài viết
                </h2>
                <div className="mt-6 space-y-4">
                  {articleFaqs.map((faq) => (
                    <details key={faq.question} className="rounded-2xl bg-[#fbf8f2] p-5">
                      <summary className="cursor-pointer list-none text-lg font-semibold text-[#15110c]">
                        {faq.question}
                      </summary>
                      <p className="mt-4 leading-7 text-[#5d554c]">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}

            <section>
              <h2 className="font-display text-3xl font-medium tracking-[-0.04em] text-[#15110c]">Bài liên quan</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {relatedPosts.map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-3xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#8a6a2f]">{item.category}</p>
                    <h3 className="font-display mt-3 text-xl font-medium tracking-[-0.03em] text-[#15110c]">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
      <ContactSection />
    </>
  );
}

