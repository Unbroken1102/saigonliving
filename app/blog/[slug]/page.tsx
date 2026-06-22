import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/app/components/json-ld";
import { LeadFormTrigger } from "@/app/components/lead-form-popup";
import { ZaloIcon } from "@/app/components/zalo-icon";
import { ARTICLE_FOOTER_PRIMARY_CLASS, ARTICLE_FOOTER_ZALO_CLASS } from "@/app/lib/cta-button-styles";
import { BlogArticleContent } from "@/app/components/blog-article-content";
import {
  blogPosts,
  getArticleFaqs,
  getPostBySlug,
  getRelatedPosts,
  postImageBySlug,
} from "@/app/lib/posts";
import {
  absoluteUrl,
  getBlogHubForSlug,
  getBlogHubProjectName,
  seoHubLinks,
  siteConfig,
  vlastaSeoClusterLinks,
} from "@/app/lib/site";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

const vinhomesBinhChanhReadNextLinks = [
  {
    title: "Vin Group nghiên cứu siêu đô thị 1.512 ha",
    description: "Phân tích tài liệu đề xuất, quy mô dân số 232.000 người và phần kiến nghị Vin Group nghiên cứu triển khai.",
    href: "/blog/vin-group-nghien-cuu-sieu-do-thi-1512ha-binh-chanh",
  },
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

const ecoRetreatReadNextLinks = [
  {
    title: "Tổng quan Eco Retreat Long An",
    description: "Trang dự án tổng hợp vị trí Bến Lức, quy mô 220ha, ảnh thực tế, tiện ích, sản phẩm và giá bán.",
    href: "/eco-retreat",
  },
  {
    title: "Giá Eco Retreat 2026",
    description: "Bảng giá tham khảo theo căn hộ, nhà phố, song lập, shophouse, biệt thự rừng và biệt thự đảo.",
    href: "/blog/gia-eco-retreat-2026",
  },
  {
    title: "Vị trí Eco Retreat Bến Lức",
    description: "Cách đọc vị trí Eco Retreat theo trục cửa ngõ Tây Sài Gòn, thời gian di chuyển và khảo sát thực tế.",
    href: "/blog/vi-tri-eco-retreat-ben-luc-co-xa-khong",
  },
  {
    title: "Eco Retreat có nên mua không?",
    description: "Góc nhìn cho người mua ở và nhà đầu tư: điểm mạnh, rủi ro, dòng tiền và thời gian nắm giữ.",
    href: "/blog/eco-retreat-co-nen-mua-khong",
  },
  {
    title: "So sánh Eco Retreat và Mizuki Park",
    description: "So khu đô thị sinh thái mới ở Bến Lức với khu đô thị đã vận hành tại khu Nam.",
    href: "/blog/so-sanh-eco-retreat-mizuki-park",
  },
  {
    title: "Nhà phố Eco Retreat từ 5 tỷ",
    description: "Phân tích dòng nhà phố Eco Retreat: vị trí, ngân sách, công năng và điểm cần kiểm tra trước khi chọn.",
    href: "/blog/nha-pho-eco-retreat-tu-5-ty-co-dang-mua-khong",
  },
];

const authorProfile = {
  name: "Phạm Đức Tú",
  role: "Chuyên gia tư vấn bất động sản",
  bio: "Chuyên gia tư vấn bất động sản với 10 năm kinh nghiệm tại TP.HCM, tập trung phân tích dự án, pháp lý, dòng tiền và lựa chọn an toàn cho người mua ở thực lẫn nhà đầu tư.",
};

function getArticleConsultationCta({
  isVlastaPost,
  isVinhomesBinhChanhPost,
  isEcoRetreatPost,
  title,
}: {
  isVlastaPost: boolean;
  isVinhomesBinhChanhPost: boolean;
  isEcoRetreatPost: boolean;
  title: string;
}) {
  if (isVinhomesBinhChanhPost) {
    return {
      eyebrow: "Theo dõi sớm Bình Chánh",
      title: "Muốn nhận cập nhật khi thông tin Vinhomes Bình Chánh rõ hơn?",
      description:
        "Để lại nhu cầu để nhận checklist theo dõi quy hoạch, khu vực nên khảo sát và cập nhật khi có tín hiệu chính thức hơn về pháp lý, giá hoặc lịch triển khai.",
      source: "Vinhomes Bình Chánh Article CTA",
      buttonLabel: "Đăng ký nhận cập nhật",
      secondary: "Phù hợp nếu Anh/Chị đang theo dõi sớm, chưa muốn xuống tiền vội.",
    };
  }

  if (isEcoRetreatPost) {
    return {
      eyebrow: "Tư vấn Eco Retreat",
      title: "Muốn nhận bảng giá, mặt bằng và phân tích dòng sản phẩm Eco Retreat?",
      description:
        "Gửi ngân sách và mục tiêu mua, Saigon Living sẽ giúp Anh/Chị lọc dòng căn hộ, nhà phố, song lập, biệt thự hoặc shophouse phù hợp.",
      source: "Eco Retreat Article CTA",
      buttonLabel: "Nhận bảng giá Eco Retreat",
      secondary: "Phù hợp nếu Anh/Chị đang cần so sản phẩm, dòng tiền và vị trí trước khi đặt chỗ.",
    };
  }

  if (isVlastaPost) {
    return {
      eyebrow: "Tư vấn Vlasta Premier",
      title: "Cần lọc căn theo ngân sách, tầng, view và lịch thanh toán?",
      description:
        "Gửi ngân sách và mục tiêu mua, Saigon Living sẽ gợi ý loại căn phù hợp, điểm cần kiểm tra pháp lý và phương án thanh toán trước khi Anh/Chị quyết định.",
      source: "Vlasta Premier Article CTA",
      buttonLabel: "Nhận bảng giá và căn phù hợp",
      secondary: "Phù hợp nếu Anh/Chị đang so giá, pháp lý, layout hoặc muốn chọn căn cụ thể.",
    };
  }

  return {
    eyebrow: "So sánh lựa chọn khu Nam",
    title: "Đang phân vân giữa Mizuki, The Peak Garden, Vlasta Premier hoặc chờ dự án mới?",
    description:
      "Cho Saigon Living biết mục tiêu mua và khung tài chính sơ bộ (không bắt buộc chi tiết). Đội tư vấn sẽ gửi bài phân tích dòng tiền và gợi ý 2-3 phương án khu Nam đáng xem.",
    source: `Market comparison Article CTA - ${title}`,
    buttonLabel: "Nhận phân tích & so sánh khu Nam",
    secondary: "Phù hợp nếu Anh/Chị muốn quyết định theo dòng tiền thật thay vì chỉ xem giá/m2.",
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const postImage = postImageBySlug[post.slug] ?? siteConfig.shareImage;

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
          url: absoluteUrl(postImage),
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
      images: [absoluteUrl(postImage)],
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
  const blogHub = getBlogHubForSlug(post.slug);
  const blogHubProjectName = getBlogHubProjectName(blogHub);
  const isVinhomesBinhChanhPost = post.slug.includes("vinhomes-binh-chanh") || post.keywords.some((keyword) => keyword.includes("Vinhomes Bình Chánh"));
  const isEcoRetreatPost = post.slug.includes("eco-retreat") || post.keywords.some((keyword) => keyword.includes("Eco Retreat"));
  const readNextLinks = isEcoRetreatPost
    ? ecoRetreatReadNextLinks
    : isVinhomesBinhChanhPost
      ? vinhomesBinhChanhReadNextLinks
      : seoHubLinks;
  const consultationCta = getArticleConsultationCta({
    isVlastaPost,
    isVinhomesBinhChanhPost,
    isEcoRetreatPost,
    title: post.title,
  });
  const postImage = postImageBySlug[post.slug] ?? siteConfig.ogImage;
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
        name: authorProfile.name,
        jobTitle: authorProfile.role,
        description: authorProfile.bio,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
      image: absoluteUrl(postImage),
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
      <article className="bg-white">
        <header className="relative isolate overflow-hidden border-b border-neutral-200 bg-white px-5 pb-20 pt-[11.25rem] text-neutral-900 md:pt-40 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-neutral-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-neutral-900">
                Trang chủ
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-neutral-900">
                Blog
              </Link>
              <span>/</span>
              <span className="text-neutral-700">{post.category}</span>
            </nav>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              {post.category} insights
            </p>
            <h1 className="font-display mt-5 text-4xl font-medium tracking-[-0.05em] text-balance text-neutral-900 md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-neutral-600">{post.description}</p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-neutral-600">
              <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">
                {post.category}
              </span>
              <time className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1" dateTime={post.publishedAt}>
                {post.publishedAt}
              </time>
              <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">
                {post.readingTime}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8">
          <aside className="lg:sticky lg:top-36 lg:self-start">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Mục lục
              </p>
              <nav className="mt-5 space-y-3" aria-label="Mục lục bài viết">
                {post.toc.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="block rounded-xl px-3 py-2 text-sm font-medium leading-6 text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900">
                    {section.heading}
                  </a>
                ))}
                {articleFaqs.length ? (
                  <a href="#faq" className="block rounded-xl px-3 py-2 text-sm font-medium leading-6 text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900">
                    FAQ nhanh
                  </a>
                ) : null}
              </nav>
            </div>
          </aside>

          <div className="min-w-0 space-y-12">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm md:p-10">
              <div className="blog-article">
                <BlogArticleContent hub={blogHub} projectName={blogHubProjectName}>
                  <post.Content />
                </BlogArticleContent>
              </div>
            </div>

            <section className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm md:p-8" aria-label="Thông tin tác giả">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Tác giả
              </p>
              <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-lg font-semibold text-white">
                  PT
                </div>
                <div>
                  <h2 className="font-display text-2xl font-medium tracking-[-0.03em] text-neutral-900">
                    {authorProfile.name}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-neutral-600">
                    {authorProfile.role}
                  </p>
                  <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
                    {authorProfile.bio}
                  </p>
                </div>
              </div>
            </section>

            <section className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                {consultationCta.eyebrow}
              </p>
              <div className="mt-4 flex flex-col gap-6">
                <div className="max-w-3xl">
                  <h2 className="font-display text-3xl font-medium tracking-[-0.04em] text-neutral-900 md:text-4xl">
                    {consultationCta.title}
                  </h2>
                  <p className="mt-4 leading-7 text-neutral-600">
                    {consultationCta.description}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-neutral-500">
                    {consultationCta.secondary}
                  </p>
                </div>
                <div className="article-footer-cta-actions">
                  <LeadFormTrigger
                    source={consultationCta.source}
                    ctaLabel={consultationCta.buttonLabel}
                    className={ARTICLE_FOOTER_PRIMARY_CLASS}
                  >
                    {consultationCta.buttonLabel}
                  </LeadFormTrigger>
                  <a href={siteConfig.contact.zalo} className={ARTICLE_FOOTER_ZALO_CLASS}>
                    <ZaloIcon />
                    <span>Trao đổi nhanh qua Zalo</span>
                  </a>
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] border border-neutral-200 bg-white p-7 md:p-8">
              <h2 className="font-display text-3xl font-medium tracking-[-0.04em] text-neutral-900">
                {isEcoRetreatPost
                  ? "Đọc tiếp: giá, vị trí và sản phẩm Eco Retreat"
                  : isVinhomesBinhChanhPost
                    ? "Đọc tiếp: quy hoạch, dòng tiền và thị trường"
                    : "Nên đọc tiếp"}
              </h2>
              <p className="mt-3 leading-7 text-neutral-600">
                {isEcoRetreatPost
                  ? "Nếu Anh/Chị đang tìm hiểu Eco Retreat, nên đọc theo cụm để nắm đủ bức tranh: tổng quan dự án, giá bán, vị trí, sản phẩm và các lựa chọn có thể so sánh."
                  : isVinhomesBinhChanhPost
                    ? "Nếu Anh/Chị đang theo dõi sớm Vinhomes Bình Chánh, nên đọc thêm các góc nhìn thị trường dưới đây để hiểu dòng tiền, lãi suất và bối cảnh mua nhà hiện tại."
                    : "Các nội dung quan trọng giúp bạn kiểm tra dự án theo từng bước trước khi để lại thông tin."}
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {readNextLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition hover:bg-neutral-100">
                    <span className="text-sm font-semibold text-neutral-900">{link.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-neutral-600">
                      {link.description}
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {isVlastaPost ? (
              <section className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                  Cụm bài Vlasta Premier
                </p>
                <h2 className="font-display mt-3 text-3xl font-medium tracking-[-0.04em] text-neutral-900">
                  Đọc theo đúng thứ tự: giá, pháp lý, vị trí, thanh toán và so sánh.
                </h2>
                <p className="mt-3 leading-7 text-neutral-600">
                  Nếu Anh/Chị đang tìm hiểu Vlasta Premier, nên đọc thêm các bài dưới đây để nắm đủ bức tranh trước khi so giá, chọn căn hoặc để lại thông tin tư vấn.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {vlastaSeoClusterLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-md">
                      <span className="block text-sm font-bold leading-6 text-neutral-900">{link.title}</span>
                      <span className="mt-2 block text-sm leading-6 text-neutral-600">{link.description}</span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            {articleFaqs.length ? (
              <section className="rounded-[2rem] border border-neutral-200 bg-white p-7 md:p-8" id="faq">
                <h2 className="font-display text-3xl font-medium tracking-[-0.04em] text-neutral-900">
                  FAQ nhanh theo chủ đề bài viết
                </h2>
                <div className="mt-6 space-y-4">
                  {articleFaqs.map((faq) => (
                    <details key={faq.question} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                      <summary className="cursor-pointer list-none text-lg font-semibold text-neutral-900">
                        {faq.question}
                      </summary>
                      <p className="mt-4 leading-7 text-neutral-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}

            <section>
              <h2 className="font-display text-3xl font-medium tracking-[-0.04em] text-neutral-900">Bài liên quan</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {relatedPosts.map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 transition hover:-translate-y-1 hover:bg-neutral-100 hover:shadow-md">
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">{item.category}</p>
                    <h3 className="font-display mt-3 text-xl font-medium tracking-[-0.03em] text-neutral-900">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}

