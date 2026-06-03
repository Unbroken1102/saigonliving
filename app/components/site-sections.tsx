import Link from "next/link";
import Image from "next/image";
import { MotionReveal } from "@/app/components/motion-reveal";
import { media } from "@/app/lib/media";
import { blogPosts } from "@/app/lib/posts";
import { project, siteConfig } from "@/app/lib/site";

const navItems = [
  { href: "/vlasta-premier#overview", label: "Tổng quan" },
  { href: "/vlasta-premier#location", label: "Vị trí" },
  { href: "/vlasta-premier#masterplan", label: "Mặt bằng" },
  { href: "/vlasta-premier#amenities", label: "Tiện ích" },
  { href: "/vlasta-premier#legal", label: "Pháp lý" },
  { href: "/vlasta-premier#progress", label: "Tiến độ" },
  { href: "/vlasta-premier#pricing", label: "Bảng giá" },
  { href: "/vlasta-premier#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d9c79f]/45 bg-[#fbf8f2]/92 shadow-sm shadow-black/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Vlasta Premier Advisory">
          <span className="flex size-10 items-center justify-center rounded-full border border-[#c9a45d]/45 bg-[#f1e6d2] text-sm font-semibold text-[#6f4f1c]">
            VP
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#15110c]">
              Vlasta
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#8a6a2f]">
              Premier Advisory
            </span>
          </span>
        </Link>
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="rounded-full border border-[#c9a45d]/55 bg-white/70 px-4 py-2 text-xs font-semibold text-[#6f4f1c] transition hover:bg-[#c9a45d] hover:text-black sm:inline-flex sm:text-sm"
        >
          Gọi tư vấn
        </a>
      </div>
      <nav
        className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 pb-3 text-sm font-semibold text-[#3b3024] lg:px-8"
        aria-label="Project sections"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border border-[#d9c79f]/70 bg-white/75 px-4 py-2.5 shadow-sm shadow-black/5 transition hover:border-[#c9a45d] hover:bg-[#f1e6d2]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d9c79f]/50 bg-[#f7f1e6] px-5 py-12 text-[#15110c] lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.38em] text-[#8a6a2f]">{siteConfig.tagline}</p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight">
            Tư vấn bất động sản cao cấp bằng phân tích, không bằng áp lực bán hàng.
          </h2>
        </div>
        <div className="space-y-3 text-sm text-[#5d554c]">
          <p className="font-medium text-[#15110c]">Liên kết nội bộ</p>
          <Link href="/vlasta-premier" className="block hover:text-[#8a6a2f]">
            Dự án Vlasta Premier
          </Link>
          <Link href="/blog/review-vi-tri-vlasta-premier" className="block hover:text-[#8a6a2f]">
            Review vị trí
          </Link>
          <Link href="/blog/so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden" className="block hover:text-[#8a6a2f]">
            So sánh dự án khu Nam
          </Link>
        </div>
        <div className="space-y-3 text-sm text-[#5d554c]">
          <p className="font-medium text-[#15110c]">Kết nối</p>
          <a href={`tel:${siteConfig.contact.phone}`} className="block hover:text-[#8a6a2f]">
            {siteConfig.contact.phone}
          </a>
          <a href={siteConfig.contact.zalo} className="block hover:text-[#8a6a2f]">
            Zalo tư vấn nhanh
          </a>
          <a href={siteConfig.contact.whatsapp} className="block hover:text-[#8a6a2f]">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl text-xs text-[#6b6258]">
        Nội dung trên website mang tính tham khảo và cần được đối chiếu theo pháp lý, chính sách bán hàng, hiện trạng từng thời điểm.
      </div>
    </footer>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#fbf8f2] px-5 pt-32 text-[#15110c] lg:px-8">
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover opacity-100"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={media.images.hero}
          aria-label="Vlasta Premier cinematic hero video"
        >
          <source src={media.video.heroMobile} type="video/mp4" media="(max-width: 767px)" />
          <source src={media.video.hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#fbf8f2]/18" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf8f2]/72 via-[#fbf8f2]/42 to-[#fbf8f2]/5" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#fbf8f2]/82 to-transparent" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-14 pb-24 lg:grid-cols-[1.05fr_0.95fr]">
        <MotionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#8a6a2f]">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-7xl">
            {project.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4c4339]">
            {project.summary}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className="rounded-full bg-[#15110c] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#c9a45d] hover:text-black">
              Nhận phân tích riêng
            </Link>
            <Link href="/vlasta-premier" className="rounded-full border border-[#15110c]/15 bg-white/70 px-7 py-4 text-center text-sm font-semibold text-[#15110c] transition hover:border-[#c9a45d] hover:bg-[#f1e6d2]">
              Xem hồ sơ dự án
            </Link>
          </div>
        </MotionReveal>
        <MotionReveal delay={0.12} className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#d9c79f]/70 bg-white/70 p-4 shadow-2xl shadow-black/10">
            <div className="relative h-full overflow-hidden rounded-[1.5rem]">
              <Image
                src={media.images.marina}
                alt="Bến thuyền và phối cảnh Vlasta Premier"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-x-8 bottom-8 rounded-3xl border border-white/40 bg-[#fbf8f2]/82 p-5 text-[#15110c] shadow-xl backdrop-blur">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8a6a2f]">Private briefing</p>
                <p className="mt-3 text-2xl font-semibold">High-end apartment outlook 2026</p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
      <StatsStrip />
    </section>
  );
}

export function StatsStrip() {
  return (
    <div className="mx-auto grid max-w-7xl gap-3 pb-10 sm:grid-cols-2 lg:grid-cols-4">
      {project.heroStats.map((stat) => (
        <div key={stat.label} className="rounded-3xl border border-[#d9c79f]/70 bg-white/80 p-5 shadow-sm shadow-black/5 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8a6a2f]">{stat.label}</p>
          <p className="mt-2 text-xl font-semibold text-[#15110c]">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <MotionReveal className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-balance text-[#15110c] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-[#5d554c]">
        {description}
      </p>
    </MotionReveal>
  );
}

export function ProjectOverview() {
  return (
    <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8" id="overview">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Project overview"
          title="Thông số dự án được đặt trong trải nghiệm tư vấn cao cấp."
          description="Các thông tin cốt lõi như vị trí, quy mô, tầng, loại hình, sở hữu và thời gian bàn giao được trình bày rõ ràng để khách mua dễ ra quyết định."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {project.facts.map((fact, index) => (
            <MotionReveal key={fact.label} delay={index * 0.04}>
              <article className="h-full rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                  {fact.label}
                </p>
                <p className="mt-3 text-xl font-semibold leading-7 text-[#15110c]">{fact.value}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {project.productTypes.map((type) => (
            <span key={type} className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-[#15110c]">
              {type}
            </span>
          ))}
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {project.highlights.map((item, index) => (
            <MotionReveal key={item} delay={index * 0.05}>
              <article className="h-full rounded-[2rem] border border-black/10 bg-white/70 p-7 shadow-sm">
                <span className="text-sm font-semibold text-[#a7803c]">0{index + 1}</span>
                <p className="mt-5 text-lg leading-7 text-[#2a241d]">{item}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectDataHighlights() {
  return (
    <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8" id="project-highlights">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Project highlights"
          title="Những dữ liệu cần nhớ trước khi xem bảng giá."
          description="Thông tin dự án được chuẩn hóa để khách mua hiểu đúng sản phẩm trước khi so sánh giá, tầng, view và chính sách thanh toán."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <article className="h-full rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                Product mix
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#15110c]">
                602 căn hộ ở và 136 căn thương mại dịch vụ.
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.productTypes.map((type) => (
                  <span key={type} className="rounded-full bg-[#f7f1e6] px-4 py-2 text-sm font-medium text-[#15110c]">
                    {type}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#15110c] p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#d9bc7c]">Pháp lý</p>
                  <p className="mt-2 text-xl font-semibold">Sở hữu lâu dài</p>
                </div>
                <div className="rounded-2xl bg-[#15110c] p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#d9bc7c]">Bàn giao</p>
                  <p className="mt-2 text-xl font-semibold">Dự kiến 2027</p>
                </div>
              </div>
            </article>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <article className="h-full rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                Payment timeline
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#15110c]">
                Các mốc thanh toán và hoàn tất hồ sơ cần nắm trước khi chọn căn.
              </h3>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {project.salesPolicyMilestones.map((milestone, index) => (
                  <div key={milestone} className="flex items-center gap-3 rounded-2xl bg-[#fbf8f2] p-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#15110c] text-xs font-semibold text-[#f3d69b]">
                      {index + 1}
                    </span>
                    <p className="text-sm font-medium text-[#15110c]">{milestone}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-[#6b6258]">
                Tỷ lệ thanh toán chi tiết cần đối chiếu theo chính sách áp dụng tại thời điểm giao dịch.
              </p>
            </article>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="bg-[#fbf8f2] px-5 py-24 text-[#15110c] lg:px-8" id="gallery">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Gallery"
          title="Phối cảnh dự án được trình bày theo phong cách editorial luxury."
          description="Hình ảnh được tối ưu responsive qua Next Image để giữ trải nghiệm tốt trên mobile và desktop."
        />
        <div className="mt-14 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {media.gallery.map((item, index) => (
            <MotionReveal
              key={item.src}
              delay={index * 0.04}
              className={index === 0 ? "sm:col-span-2 sm:row-span-2" : index === 5 ? "lg:col-span-2" : ""}
            >
              <div className="group relative h-full overflow-hidden rounded-[2rem] border border-[#d9c79f]/60 bg-white shadow-sm shadow-black/5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <span className="text-xs uppercase tracking-[0.28em] text-[#d9bc7c]">Frame 0{index + 1}</span>
                  <h3 className="mt-2 text-xl font-semibold">{item.alt}</h3>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VideoSection() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <MotionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
            Cinematic briefing
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#15110c] md:text-5xl">
            Video cinematic giúp khách cảm nhận nhanh quy mô và tinh thần dự án.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5d554c]">
            Video chỉ tải metadata ban đầu và có poster ảnh phối cảnh để giữ trải nghiệm nhanh hơn trên mobile.
          </p>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#15110c] p-3 shadow-2xl shadow-black/10">
            <video
              className="aspect-video w-full rounded-[1.5rem] object-cover"
              controls
              preload="metadata"
              poster={media.images.hero}
            >
              <source src={media.video.hero} type="video/mp4" />
            </video>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8" id="location">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <MotionReveal>
          <div className="rounded-[2rem] border border-black/10 bg-white p-4 shadow-sm">
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-[#eee4d2]">
              <Image
                src={media.images.location}
                alt="Bản đồ vị trí Vlasta Premier tại Nam Sài Gòn"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              <div className="absolute left-8 top-8 rounded-2xl bg-[#15110c]/90 px-5 py-4 text-white shadow-xl backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-[#f3d69b]">Nam Sài Gòn</p>
                <p className="mt-2 text-xl font-semibold">Lifestyle map</p>
              </div>
            </div>
          </div>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
            Location intelligence
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#15110c] md:text-5xl">
            Vị trí được kể bằng thói quen sống, không chỉ bằng khoảng cách.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5d554c]">
            Dự án tọa lạc tại Phường Phú Thuận, kết nối nhanh đến Phú Mỹ Hưng, Quận 1, Thủ Thiêm - Thủ Đức và sân bay Long Thành.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {project.locationHighlights.map((item) => (
              <div key={item.place} className="rounded-2xl border border-black/10 bg-white/70 p-4">
                <p className="text-2xl font-semibold text-[#15110c]">{item.time}</p>
                <p className="mt-1 text-sm leading-6 text-[#5d554c]">{item.place}</p>
              </div>
            ))}
          </div>
          <Link href="/blog/review-vi-tri-vlasta-premier" className="mt-8 inline-flex rounded-full bg-[#15110c] px-7 py-4 text-sm font-semibold text-white">
            Đọc review vị trí
          </Link>
        </MotionReveal>
      </div>
    </section>
  );
}

export function AmenitiesSection() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8" id="amenities">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Amenities"
          title="Tiện ích được đặt trong bối cảnh wellness, family living và cộng đồng cư dân."
          description="Cách trình bày tránh kiểu bán hàng ồn ào, thay bằng insight giúp khách hàng hình dung cuộc sống hằng ngày."
        />
        <div className="mt-14 grid auto-rows-[280px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {media.amenityVisuals.map((item, index) => (
            <MotionReveal
              key={item.src}
              delay={index * 0.05}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-black/10 bg-[#15110c] shadow-sm">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f3d69b]">
                    Amenity 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/78">
                    {item.description}
                  </p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {media.amenityCards.map((amenity, index) => (
            <MotionReveal key={amenity.title} delay={index * 0.035}>
              <div className="group h-full overflow-hidden rounded-3xl border border-black/10 bg-[#fbf8f2] shadow-sm">
                <div className="relative h-44 bg-white">
                  <Image
                    src={amenity.src}
                    alt={amenity.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6a2f]">
                    Tiện ích 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-7 text-[#15110c]">
                    {amenity.title}
                  </h3>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LegalSection() {
  return (
    <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8" id="legal">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Legal"
          title="Pháp lý và thông tin sở hữu cần kiểm tra trước khi đặt cọc."
          description="Tóm tắt nhanh theo hướng dễ hiểu cho khách mua, đồng thời nhắc rõ cần đối chiếu hồ sơ chính thức trước khi giao dịch."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {project.legalHighlights.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.05}>
              <article className="h-full rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                  {item.title}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#15110c]">
                  {item.value}
                </h3>
                <p className="mt-5 leading-7 text-[#5d554c]">{item.text}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgressSection() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8" id="progress">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <MotionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
            Construction progress
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#15110c] md:text-5xl">
            Tiến độ được tách thành mục riêng để khách dễ kiểm tra trước khi liên hệ.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5d554c]">
            Khu vực này có thể cập nhật định kỳ bằng ảnh thực tế mới để khách hàng theo dõi tiến độ trước khi liên hệ.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Ảnh tiến độ cập nhật", "Bàn giao dự kiến 2027"].map((item) => (
              <div key={item} className="rounded-2xl border border-black/10 bg-[#fbf8f2] p-5">
                <p className="text-sm font-semibold text-[#15110c]">{item}</p>
              </div>
            ))}
          </div>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-2">
            {[media.images.progressRecent, media.images.progress].map((src, index) => (
              <div key={src} className="relative min-h-80 overflow-hidden rounded-[2rem] border border-black/10 bg-[#15110c] shadow-sm">
                <Image
                  src={src}
                  alt={`Tiến độ Vlasta Premier ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-black/45 p-4 text-white backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#f3d69b]">
                    Progress 0{index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

export function PricingSection() {
  const pricingImages = [
    media.images.planB1Br,
    media.images.planB2Br,
    media.images.planA3Br,
    media.images.planA2Br,
  ];

  return (
    <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8" id="pricing">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Pricing"
          title="Bảng giá tham khảo theo dòng sản phẩm."
          description="Giá bán cần được xác nhận theo giỏ hàng, tầng, view, chính sách thanh toán và thời điểm giao dịch."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {project.pricingPlans.map((plan, index) => (
            <MotionReveal key={plan.type} delay={index * 0.05}>
              <article className="h-full overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm">
                <div className="relative h-48 bg-[#15110c]">
                  <Image
                    src={pricingImages[index]}
                    alt={`Layout ${plan.type} Vlasta Premier`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                    {plan.type}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#15110c]">
                    {plan.price}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#5d554c]">{plan.note}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-[#6b6258]">
          Các mức giá trên là thông tin tham khảo ban đầu. Khách hàng nên nhận bảng giá mới nhất theo giỏ hàng, tầng, view và chính sách thanh toán trước khi ra quyết định.
        </p>
      </div>
    </section>
  );
}

export function InvestmentSection() {
  return (
    <section className="bg-[#fbf8f2] px-5 py-24 text-[#15110c] lg:px-8" id="investment">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Investment potential"
          title="Phân tích đầu tư giữ giọng advisory: rõ luận điểm, rõ rủi ro, không thổi phồng."
          description="Website định vị chuyên gia tư vấn bằng framework phân tích thay vì chỉ kêu gọi đặt cọc."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {project.investmentPoints.map((point, index) => (
            <MotionReveal key={point.title} delay={index * 0.06}>
              <article className="h-full rounded-[2rem] border border-[#d9c79f]/60 bg-white p-7 shadow-sm shadow-black/5">
                <h3 className="text-2xl font-semibold">{point.title}</h3>
                <p className="mt-5 leading-7 text-[#5d554c]">{point.text}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogPreview() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8" id="insights">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
            Market insights
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-balance text-[#15110c] md:text-5xl">
            Cụm bài phân tích giúp khách mua hiểu sâu hơn trước khi chọn căn.
          </h2>
          <p className="text-lg leading-8 text-[#5d554c]">
            Các bài viết được tổ chức theo từng chủ đề như vị trí, pháp lý, bảng giá, tiện ích và so sánh dự án để khách hàng dễ tra cứu.
          </p>
          <Link href="/blog" className="rounded-full bg-[#15110c] px-7 py-4 text-sm font-semibold text-white">
            Xem tất cả bài phân tích
          </Link>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 5).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <MotionReveal>
      <article className="group h-full overflow-hidden rounded-[2rem] border border-black/10 bg-[#fbf8f2] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
        <div className="min-h-44 bg-[radial-gradient(circle_at_40%_20%,rgba(201,164,93,0.42),transparent_30%),linear-gradient(145deg,#18130d,#ede2cf)] p-5">
          <span className="rounded-full bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {post.category}
          </span>
        </div>
        <div className="p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-[#8a6a2f]">{post.readingTime}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#15110c]">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="mt-4 line-clamp-3 leading-7 text-[#5d554c]">{post.description}</p>
        </div>
      </article>
    </MotionReveal>
  );
}

export function ContactSection() {
  return (
    <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8" id="contact">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
            Private advisory
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#15110c] md:text-5xl">
            Nhận phân tích căn phù hợp, bảng giá và kịch bản đầu tư.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5d554c]">
            Để lại thông tin, đội tư vấn sẽ hỗ trợ lọc căn theo ngân sách, nhu cầu ở thực hoặc mục tiêu đầu tư.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={siteConfig.contact.zalo} className="rounded-full bg-[#15110c] px-6 py-3 text-sm font-semibold text-white">
              Zalo
            </a>
            <a href={`tel:${siteConfig.contact.phone}`} className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-[#15110c]">
              Gọi điện
            </a>
            <a href={siteConfig.contact.whatsapp} className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-[#15110c]">
              WhatsApp
            </a>
          </div>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <form className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-[#15110c]">
                Họ tên
                <input className="w-full rounded-2xl border border-black/10 bg-[#fbf8f2] px-4 py-3 outline-none focus:border-[#c9a45d]" placeholder="Anh/Chị" />
              </label>
              <label className="space-y-2 text-sm font-medium text-[#15110c]">
                Số điện thoại
                <input className="w-full rounded-2xl border border-black/10 bg-[#fbf8f2] px-4 py-3 outline-none focus:border-[#c9a45d]" placeholder="090..." />
              </label>
            </div>
            <label className="mt-4 block space-y-2 text-sm font-medium text-[#15110c]">
              Nhu cầu
              <select className="w-full rounded-2xl border border-black/10 bg-[#fbf8f2] px-4 py-3 outline-none focus:border-[#c9a45d]">
                <option>Mua để ở</option>
                <option>Đầu tư giữ tài sản</option>
                <option>Thuê / cho thuê</option>
                <option>Nhận phân tích so sánh</option>
              </select>
            </label>
            <label className="mt-4 block space-y-2 text-sm font-medium text-[#15110c]">
              Ghi chú
              <textarea className="min-h-32 w-full rounded-2xl border border-black/10 bg-[#fbf8f2] px-4 py-3 outline-none focus:border-[#c9a45d]" placeholder="Ngân sách, mục tiêu, thời gian dự kiến..." />
            </label>
            <button type="button" className="mt-5 w-full rounded-full bg-[#15110c] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#c9a45d] hover:text-black">
              Gửi yêu cầu tư vấn
            </button>
            <p className="mt-4 text-xs leading-6 text-[#6b6258]">
              Thông tin chỉ dùng để tư vấn dự án và gửi bảng giá phù hợp theo nhu cầu của Anh/Chị.
            </p>
          </form>
        </MotionReveal>
      </div>
    </section>
  );
}

export function RelatedProjects() {
  const items = ["Sunshine Sky City", "Sunshine Diamond River", "The Peak Garden"];

  return (
    <section className="bg-[#fbf8f2] px-5 py-20 text-[#15110c] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Related projects"
          title="Mở rộng authority bằng cụm dự án Nam Sài Gòn."
          description="Các dự án cùng khu vực giúp khách hàng có thêm góc nhìn khi so sánh vị trí, tiện ích, giá bán và mục tiêu sử dụng."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="rounded-3xl border border-[#d9c79f]/60 bg-white p-6 shadow-sm shadow-black/5">
              <p className="text-xl font-semibold">{item}</p>
              <p className="mt-3 text-sm leading-6 text-[#5d554c]">
                Hồ sơ so sánh, định vị khách hàng và phân tích giá trị sống.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t border-[#d9c79f]/60 bg-[#fbf8f2]/95 p-3 text-center text-xs font-semibold text-[#15110c] shadow-[0_-10px_30px_rgba(0,0,0,0.08)] backdrop-blur lg:hidden">
      <a href={`tel:${siteConfig.contact.phone}`} className="rounded-full bg-[#15110c] px-3 py-3 text-white">
        Gọi
      </a>
      <a href={siteConfig.contact.zalo} className="rounded-full bg-[#f3d69b] px-3 py-3 text-black">
        Zalo
      </a>
      <a href={siteConfig.contact.whatsapp} className="rounded-full border border-[#15110c]/15 bg-white px-3 py-3">
        WhatsApp
      </a>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8" id="faq">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="FAQ"
          title="FAQ nổi bật về Vlasta Premier Phú Thuận."
          description="Các câu hỏi được chọn theo những mối quan tâm lớn nhất của khách mua: chủ đầu tư, vị trí, quy mô, tiện ích, pháp lý, vận hành, chi phí và chuyển nhượng."
        />
        <div className="mt-12 space-y-4">
          {project.faqs.map((faq) => (
            <details key={faq.question} className="group rounded-3xl border border-black/10 bg-[#fbf8f2] p-6">
              <summary className="cursor-pointer list-none text-xl font-semibold text-[#15110c]">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-[#5d554c]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
