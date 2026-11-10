import Link from "next/link";
import Image from "next/image";
import { DeferredHeroMedia } from "@/app/components/deferred-hero-media";
import { GalleryLightbox } from "@/app/components/gallery-lightbox";
import { LeadCaptureForm } from "@/app/components/lead-capture-form";
import { isProjectInventoryContactVariant } from "@/app/components/project-inventory-lead-config";
import { ProjectInventoryLeadForm } from "@/app/components/project-inventory-lead-form";
import { LeadFormTrigger } from "@/app/components/lead-form-popup";
import { PROJECT_INVENTORY_CTA_LABEL, ProjectInventoryCta, INVENTORY_CTA_BUTTON_COMPACT_CLASS, INVENTORY_CTA_FLOATING_CLASS, INVENTORY_CTA_HERO_CLASS } from "@/app/components/project-inventory-cta";
import { LocationVideo } from "@/app/components/location-video";
import { MotionReveal } from "@/app/components/motion-reveal";
import { SiteHeaderNav } from "@/app/components/site-header-nav";
import { media } from "@/app/lib/media";
import { blogPosts, postImageBySlug, type BlogPostMeta } from "@/app/lib/posts";
import { project, siteConfig, vlastaSeoClusterLinks } from "@/app/lib/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#1c1b19]/62 shadow-[0_14px_44px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Saigon Living">
          <span className="flex size-9 items-center justify-center rounded-full border border-[#d4b87a]/45 bg-[#d4b87a]/12 text-xs font-semibold text-[#f0ddb0]">
            SL
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#faf6f0]">
              Saigon
            </span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.28em] text-[#f0ddb0]">
              Living
            </span>
          </span>
        </Link>
        <a
          href={`tel:${siteConfig.contact.phoneTel}`}
          className="rounded-full border border-[#d4b87a]/55 bg-[#1c1b19]/25 px-4 py-2 text-xs font-semibold text-[#f0ddb0] transition hover:bg-[#d4b87a] hover:text-[#1c1b19]"
        >
          Gọi tư vấn
        </a>
      </div>
      <SiteHeaderNav />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d9c79f]/50 bg-[#f7f1e6] px-5 py-12 text-[#15110c] lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.15fr_0.75fr_0.75fr_0.75fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.38em] text-[#8a6a2f]">{siteConfig.tagline}</p>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-medium tracking-[-0.03em]">
            Saigon Living tư vấn bất động sản cao cấp Nam Sài Gòn bằng phân tích, không bằng áp lực bán hàng.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#5d554c]">
            Saigon Living là kênh thông tin và tư vấn độc lập. Website không đại diện pháp lý cho chủ đầu tư; mọi thông tin giao dịch cần đối chiếu với hồ sơ, hợp đồng và chính sách chính thức tại thời điểm mua.
          </p>
        </div>
        <div className="space-y-3 text-sm text-[#5d554c]">
          <p className="font-medium text-[#15110c]">Liên kết nội bộ</p>
          <Link href="/vlasta-premier" className="block hover:text-[#8a6a2f]">
            Dự án Vlasta Premier
          </Link>
          <Link href="/tt-genesis" className="block hover:text-[#8a6a2f]">
            TT Genesis
          </Link>
          <Link href="/vinhomes-binh-chanh" className="block hover:text-[#8a6a2f]">
            Vinhomes Bình Chánh
          </Link>
          <Link href="/mizuki-park" className="block hover:text-[#8a6a2f]">
            Mizuki Park
          </Link>
          <Link href="/the-peak-garden" className="block hover:text-[#8a6a2f]">
            The Peak Garden
          </Link>
          <Link href="/eco-retreat" className="block hover:text-[#8a6a2f]">
            Eco Retreat
          </Link>
          <Link href="/the-9-stellars" className="block hover:text-[#8a6a2f]">
            The 9 Stellars
          </Link>
          <Link href="/blog/review-vi-tri-vlasta-premier" className="block hover:text-[#8a6a2f]">
            Review vị trí
          </Link>
          <Link href="/blog/so-sanh-vlasta-premier-khu-nam-2026" className="block hover:text-[#8a6a2f]">
            So sánh dự án khu Nam
          </Link>
        </div>
        <div className="space-y-3 text-sm text-[#5d554c]">
          <p className="font-medium text-[#15110c]">Kết nối</p>
          <a href={`mailto:${siteConfig.contact.email}`} className="block hover:text-[#8a6a2f]">
            {siteConfig.contact.email}
          </a>
          <a href={`tel:${siteConfig.contact.phoneTel}`} className="block hover:text-[#8a6a2f]">
            {siteConfig.contact.phone}
          </a>
          <a href={siteConfig.contact.zalo} className="block hover:text-[#8a6a2f]">
            Zalo tư vấn nhanh
          </a>
          <a href={siteConfig.contact.whatsapp} className="block hover:text-[#8a6a2f]">
            WhatsApp
          </a>
          <a href={siteConfig.contact.facebook} target="_blank" rel="noreferrer" className="block hover:text-[#8a6a2f]">
            Fanpage Saigon Living
          </a>
        </div>
        <div className="space-y-3 text-sm text-[#5d554c]">
          <p className="font-medium text-[#15110c]">Pháp lý website</p>
          <Link href="/privacy-policy" className="block hover:text-[#8a6a2f]">
            Chính sách bảo mật
          </Link>
          <Link href="/terms" className="block hover:text-[#8a6a2f]">
            Điều khoản sử dụng
          </Link>
          <Link href="/disclaimer" className="block hover:text-[#8a6a2f]">
            Miễn trừ trách nhiệm
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl text-xs leading-6 text-[#6b6258]">
        Nội dung trên website chỉ phục vụ mục đích tham khảo, tư vấn và tổng hợp thông tin thị trường. Giá bán, chính sách thanh toán, pháp lý, tiến độ, tiện ích và vật liệu bàn giao có thể thay đổi theo thông báo của các bên liên quan.
      </div>
    </footer>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[720px] overflow-hidden bg-[#1c1b19] px-5 pb-10 pt-36 text-white lg:min-h-screen lg:px-8 lg:pb-16">
      <div className="absolute inset-0 -z-10">
        <DeferredHeroMedia
          poster={media.images.hero}
          video={media.video.hero}
          label="Vlasta Premier cinematic hero"
        />
        <div className="absolute inset-0 bg-[#1c1b19]/18" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1b19]/78 via-[#1c1b19]/38 to-[#1c1b19]/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b19]/68 via-transparent to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#1c1b19]/55 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.72fr]">
          <MotionReveal className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4b87a]/35 bg-[#1c1b19]/45 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f0ddb0] shadow-lg shadow-black/20 backdrop-blur-md md:text-xs">
              <span className="size-1.5 rounded-full bg-[#d4b87a]" />
              {siteConfig.tagline}
            </p>
            <h1 className="font-display text-5xl font-light leading-[1.01] tracking-tight text-[#fffaf0] drop-shadow-[0_10px_28px_rgba(0,0,0,0.42)] sm:text-6xl md:text-7xl lg:text-[5.7rem]">
              Vlasta Premier
            </h1>
            <p className="font-display mt-4 max-w-3xl text-2xl font-light leading-[1.12] tracking-tight text-[#faf6f0]/92 sm:text-3xl md:text-4xl">
              Khởi nguyên <span className="text-gradient-gold font-normal italic">sống mới</span> tại Nam Sài Gòn
            </p>
            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-[#faf6f0]/88 drop-shadow md:text-lg">
              {project.summary}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LeadFormTrigger source="Hero CTA" className="btn-luxury rounded-full bg-[#d4b87a] px-8 py-4 text-center text-sm font-bold text-[#1c1b19] shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#f0ddb0] md:px-9">
                Nhận bảng giá & phân tích
              </LeadFormTrigger>
              <Link href="/vlasta-premier#masterplan" className="rounded-full border border-[#faf6f0]/35 bg-[#1c1b19]/32 px-8 py-4 text-center text-sm font-semibold text-[#faf6f0] shadow-lg shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[#faf6f0]/12 md:px-9">
                Xem mặt bằng
              </Link>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.12} className="hidden lg:block">
            <aside className="luxury-card-dark rounded-[2rem] p-6 text-[#faf6f0] backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f0ddb0]">
                Private Dossier
              </p>
              <h3 className="font-display mt-4 text-3xl font-medium leading-tight">
                Nhận bảng giá, mặt bằng và tư vấn căn phù hợp.
              </h3>
              <div className="gold-divider my-6" />
              <div className="space-y-4 text-sm leading-6 text-[#faf6f0]/78">
                <p>• Lọc căn theo ngân sách, tầng, view và mục tiêu mua.</p>
                <p>• So sánh 1PN, 2PN, 3PN và penthouse duplex.</p>
                <p>• Cập nhật chính sách thanh toán tại thời điểm tư vấn.</p>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3">
                <LeadFormTrigger source="Private Dossier" className="rounded-full bg-[#d4b87a] px-5 py-3 text-center text-sm font-bold text-[#1c1b19] transition hover:bg-[#f0ddb0]">
                  Nhận bảng giá
                </LeadFormTrigger>
                <a href={`tel:${siteConfig.contact.phoneTel}`} className="rounded-full border border-white/18 bg-white/8 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/14">
                  Gọi tư vấn
                </a>
              </div>
            </aside>
          </MotionReveal>
        </div>
        <StatsStrip />
      </div>
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#faf6f0]/50 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Cuộn</span>
        <div className="h-10 w-px bg-gradient-to-b from-[#d4b87a]/60 to-transparent" />
      </div>
    </section>
  );
}

export function StatsStrip() {
  return (
    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-4">
      {project.heroStats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-[#faf6f0]/12 bg-[#1c1b19]/48 px-5 py-4 shadow-xl shadow-black/20 backdrop-blur-xl">
          <p className="font-display text-3xl text-[#f0ddb0] md:text-[2.35rem]">{stat.value}</p>
          <p className="mt-1 text-xs font-medium tracking-wide text-[#faf6f0]/68 md:text-sm">{stat.label}</p>
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
      <div className="gold-divider mx-auto mt-4 w-28" />
      <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-balance text-[#15110c] md:text-5xl">
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
    <section className="relative overflow-hidden bg-[#f7f1e6] px-5 py-24 lg:px-8" id="overview">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(212,184,122,0.16),transparent_28rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Tổng quan dự án"
          title="Vlasta Premier Phú Thuận — tổng quan căn hộ cao cấp Nam Sài Gòn"
          description="Tổng hợp nhanh vị trí, chủ đầu tư, quy mô, loại căn, pháp lý và thời gian bàn giao để Anh/Chị nắm thông tin trước khi nhận bảng giá."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {media.overviewVisuals.map((item, index) => (
            <MotionReveal
              key={item.src}
              delay={index * 0.05}
            >
              <article className="image-polish group relative h-[340px] overflow-hidden rounded-[2rem] border border-[#d9c79f]/60 bg-[#15110c] md:h-[390px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/12 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#f0ddb0]">
                    Tổng quan 0{index + 1}
                  </p>
                  <h3 className="font-display mt-3 text-2xl font-medium tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/76">
                    {item.description}
                  </p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
        <MotionReveal className="mt-14">
          <div className="luxury-card overflow-hidden rounded-[2.5rem]">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="border-b border-black/10 p-8 md:p-10 lg:border-b-0 lg:border-r">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6a2f]">
                  Dữ liệu cốt lõi
                </p>
                <h3 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
                  Quy mô vừa đủ, sản phẩm rõ và pháp lý dễ kiểm tra.
                </h3>
                <p className="mt-6 text-base leading-8 text-[#5d554c]">
                  Các thông số chính được gom vào một khối để khách mua nắm nhanh trước khi xem bảng giá, mặt bằng và chính sách thanh toán.
                </p>
              </div>
              <div className="grid gap-px bg-black/10 md:grid-cols-2 lg:grid-cols-3">
                {project.facts.map((fact) => (
                  <div key={fact.label} className="bg-[#fbf8f2]/92 p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8a6a2f]">
                      {fact.label}
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-7 text-[#15110c]">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {project.productTypes.map((type) => (
            <span key={type} className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-[#15110c]">
              {type}
            </span>
          ))}
        </div>
        <MotionReveal className="mt-14">
          <div className="grid gap-5 rounded-[2.5rem] border border-[#d9c79f]/60 bg-[#15110c] p-5 text-white shadow-[0_28px_80px_rgba(21,17,12,0.18)] lg:grid-cols-[0.72fr_1.28fr]">
            <div className="p-4 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f0ddb0]">
                Vì sao đáng xem
              </p>
              <h3 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] text-[#fffaf0]">
                Những lý do chính khiến Vlasta Premier nổi bật tại Nam Sài Gòn.
              </h3>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {project.highlights.map((item, index) => (
                <div key={item} className="rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0ddb0]">0{index + 1}</span>
                  <p className="mt-4 leading-7 text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

export function ProjectDataHighlights() {
  return (
    <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8" id="project-highlights">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Giỏ hàng & chính sách"
          title="Giỏ hàng và chính sách bán Vlasta Premier"
          description="Tóm tắt loại căn, pháp lý, bàn giao và tiến độ thanh toán để khách hàng dễ so sánh trước khi chọn căn."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <article className="luxury-card h-full rounded-[2rem] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                Cơ cấu sản phẩm
              </p>
              <h3 className="font-display mt-4 text-3xl font-medium tracking-[-0.04em] text-[#15110c]">
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
            <article className="luxury-card h-full rounded-[2rem] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                Chính sách thanh toán
              </p>
              <h3 className="font-display mt-4 text-3xl font-medium tracking-[-0.04em] text-[#15110c]">
                Các mốc thanh toán và hồ sơ cần nắm trước khi chọn căn.
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
          eyebrow="Hình ảnh dự án"
          title="Không gian sống Vlasta Premier qua hình ảnh thực tế"
          description="Xem nhanh các góc nhìn nổi bật của dự án: tổng thể, ven nước, hồ bơi, ban công và không gian nghỉ dưỡng."
        />
        <GalleryLightbox items={media.gallery} />
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8" id="location">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <MotionReveal>
            <div className="luxury-card rounded-[2rem] p-4">
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
              Vị trí chiến lược
            </p>
            <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
              Vị trí Vlasta Premier — kết nối nhanh khu Nam Sài Gòn
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5d554c]">
              Kết nối nhanh Phú Mỹ Hưng, Quận 1, Thủ Thiêm và sân bay Long Thành. Vlasta Premier tọa lạc tại Phường Phú Thuận, trục kết nối quan trọng của Nam Sài Gòn, phù hợp cả nhu cầu ở thực và đầu tư dài hạn.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.locationHighlights.map((item) => (
                <div key={item.place} className="luxury-card rounded-2xl p-4">
                  <p className="text-2xl font-semibold text-[#15110c]">{item.time}</p>
                  <p className="mt-1 text-sm leading-6 text-[#5d554c]">{item.place}</p>
                </div>
              ))}
            </div>
            <Link href="/blog/review-vi-tri-vlasta-premier" className="btn-luxury mt-8 inline-flex rounded-full bg-[#15110c] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8a6a2f]">
              Đọc review vị trí
            </Link>
          </MotionReveal>
        </div>
        <MotionReveal delay={0.12} className="mt-14">
          <LocationVideo
            thumbnail={media.images.location}
            embedUrl={media.video.locationEmbed}
            youtubeUrl={media.video.locationYoutube}
          />
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
          eyebrow="Tiện ích đặc quyền"
          title="Tiện ích cao cấp tại Vlasta Premier Phú Thuận"
          description="Từ hồ bơi Panorama, Business Lounge, Co-working đến Gym, Yoga, Golf 3D, rạp phim mini và thư viện nội khu."
        />
        <div className="mt-14 grid auto-rows-[280px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {media.amenityVisuals.map((item, index) => (
            <MotionReveal
              key={item.src}
              delay={index * 0.05}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <article className="image-polish group relative h-full overflow-hidden rounded-[2rem] border border-black/10 bg-[#15110c]">
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
                  <h3 className="font-display mt-3 text-2xl font-medium tracking-[-0.03em]">
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
              <div className="luxury-card group h-full overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1">
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
                  <h3 className="font-display mt-3 text-lg font-medium leading-7 text-[#15110c]">
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
          eyebrow="Pháp lý dự án"
          title="Pháp lý và quyền sở hữu Vlasta Premier"
          description="Các điểm quan trọng về chủ đầu tư, hình thức sở hữu, bàn giao và hồ sơ giao dịch cần được kiểm tra trước khi quyết định mua."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {project.legalHighlights.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.05}>
              <article className="luxury-card h-full rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                  {item.title}
                </p>
                <h3 className="font-display mt-4 text-3xl font-medium tracking-[-0.04em] text-[#15110c]">
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
            Tiến độ xây dựng
          </p>
          <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
            Cập nhật tiến độ thi công Vlasta Premier
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5d554c]">
            Hình ảnh tiến độ giúp Anh/Chị kiểm tra hiện trạng triển khai, thời gian bàn giao dự kiến và mức độ phù hợp với kế hoạch tài chính.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Ảnh tiến độ cập nhật", "Bàn giao dự kiến 2027"].map((item) => (
              <div key={item} className="luxury-card rounded-2xl p-5">
                <p className="text-sm font-semibold text-[#15110c]">{item}</p>
              </div>
            ))}
          </div>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-2">
            {[media.images.progressRecent, media.images.progress].map((src, index) => (
              <div key={src} className="image-polish relative min-h-80 overflow-hidden rounded-[2rem] border border-black/10 bg-[#15110c]">
                <Image
                  src={src}
                  alt={`Tiến độ thi công Vlasta Premier Phú Thuận đợt ${index + 1}`}
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
  const policyHighlights = [
    {
      label: "Ưu đãi tiên phong",
      value: "100 sản phẩm đầu",
      note: "Cập nhật chính sách áp dụng tại thời điểm tư vấn.",
    },
    {
      label: "Thanh toán linh hoạt",
      value: "Theo tiến độ",
      note: "Đối chiếu từng mốc thanh toán trước khi chọn căn.",
    },
    {
      label: "Hỗ trợ tư vấn vay",
      value: "Theo hồ sơ",
      note: "Lọc phương án tài chính phù hợp ngân sách và dòng tiền.",
    },
  ];

  return (
    <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8" id="pricing">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Bảng giá Vlasta Premier"
          title="Giá bán tham khảo từng loại căn Vlasta Premier"
          description="Nhận bảng giá mới nhất theo giỏ hàng, tầng, view, loại căn và chính sách thanh toán đang áp dụng."
        />
        <MotionReveal className="mt-14 overflow-hidden rounded-[2.5rem] border border-[#d9c79f]/70 bg-[#15110c] text-white shadow-[0_28px_80px_rgba(21,17,12,0.22)]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[320px] p-8 md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(212,184,122,0.32),transparent_22rem),linear-gradient(145deg,#15110c,#372715)]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f0ddb0]">
                  Chính sách bán hàng
                </p>
                <h3 className="font-display mt-5 max-w-xl text-4xl font-medium tracking-[-0.04em] text-[#fffaf0]">
                  Nhận bảng giá, ưu đãi và phương án thanh toán mới nhất.
                </h3>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
                  Bảng giá thực tế thay đổi theo giỏ hàng, tầng, view và chính sách tại thời điểm mở bán. Anh/Chị nên nhận tư vấn trước khi so sánh giá từng loại căn.
                </p>
                <LeadFormTrigger source="Sales Policy Highlight" ctaLabel={PROJECT_INVENTORY_CTA_LABEL} className={`mt-8 ${INVENTORY_CTA_HERO_CLASS}`}>
                  {PROJECT_INVENTORY_CTA_LABEL}
                </LeadFormTrigger>
              </div>
            </div>
            <div className="grid gap-4 bg-white/6 p-5 md:p-8">
              {policyHighlights.map((item, index) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f0ddb0]">
                    0{index + 1} · {item.label}
                  </p>
                  <h4 className="font-display mt-3 text-3xl font-medium tracking-[-0.04em] text-white">
                    {item.value}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-white/68">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {project.pricingPlans.map((plan, index) => (
            <MotionReveal key={plan.type} delay={index * 0.05}>
              <article className="luxury-card h-full overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1">
                <div className="relative h-48 bg-[#15110c]">
                  <Image
                    src={pricingImages[index]}
                    alt={`Mặt bằng ${plan.type} Vlasta Premier Phú Thuận`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a2f]">
                    {plan.type}
                  </p>
                  <h3 className="font-display mt-3 text-3xl font-medium tracking-[-0.04em] text-[#15110c]">
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
        <ProjectInventoryCta
          projectName="Vlasta Premier"
          source="Vlasta Premier Pricing CTA"
          description="Saigon Living sẽ gửi 5 căn Vlasta Premier có giá và chính sách tốt nhất trong giỏ hàng tuần này — đúng lúc Anh/Chị đang so từng loại căn và view."
        />
      </div>
    </section>
  );
}

export function InvestmentSection() {
  return (
    <section className="bg-[#fbf8f2] px-5 py-24 text-[#15110c] lg:px-8" id="investment">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Tiềm năng đầu tư"
          title="Vlasta Premier — có nên mua và giữ dài hạn?"
          description="Đánh giá theo vị trí Nam Sài Gòn, cơ cấu sản phẩm, nhu cầu thuê, chất lượng cư dân và khả năng thanh khoản."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {project.investmentPoints.map((point, index) => (
            <MotionReveal key={point.title} delay={index * 0.06}>
              <article className="luxury-card h-full rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1">
                <h3 className="font-display text-2xl font-medium">{point.title}</h3>
                <p className="mt-5 leading-7 text-[#5d554c]">{point.text}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VlastaBlogClusterSection() {
  return (
    <section className="bg-[#fbf8f2] px-5 py-24 lg:px-8" id="vlasta-insights">
      <div className="mx-auto max-w-7xl">
        <MotionReveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
            Cụm bài Vlasta Premier
          </p>
          <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
            Đọc thêm các bài phân tích Vlasta Premier
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#5d554c]">
            Cụm đã gom thành 5 trụ: giá · pháp lý · thanh toán · so sánh khu Nam · có nên mua. Đọc theo thứ tự trên trước khi nhận giỏ 5 căn.
          </p>
        </MotionReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {vlastaSeoClusterLinks.map((link, index) => (
            <MotionReveal key={link.href} delay={index * 0.03}>
              <Link
                href={link.href}
                className="group flex h-full flex-col rounded-[1.75rem] border border-[#d9c79f]/55 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#8a6a2f]/45 hover:shadow-md"
              >
                <span className="block text-lg font-bold leading-7 text-[#15110c] group-hover:text-[#8a6a2f]">
                  {link.title}
                </span>
                <span className="mt-3 block flex-1 text-sm leading-7 text-[#5d554c]">{link.description}</span>
                <span className="mt-5 text-sm font-semibold text-[#8a6a2f] transition group-hover:translate-x-1">
                  Đọc bài →
                </span>
              </Link>
            </MotionReveal>
          ))}
        </div>
        <MotionReveal className="mt-8">
          <Link
            href="/blog"
            className="inline-flex rounded-full border border-[#15110c]/15 bg-white px-7 py-4 text-sm font-semibold text-[#15110c] transition hover:-translate-y-0.5 hover:border-[#8a6a2f] hover:text-[#8a6a2f]"
          >
            Xem tất cả bài phân tích Saigon Living
          </Link>
        </MotionReveal>
      </div>
    </section>
  );
}

export function BlogPreview({ variant = "default" }: { variant?: "default" | "vlasta" }) {
  const recommendedSlugs =
    variant === "vlasta"
      ? [
          "vlasta-premier-o-dau",
          "gia-vlasta-premier-2026",
          "vlasta-premier-ban-giao-khi-nao",
          "phi-quan-ly-vlasta-premier",
          "phap-ly-vlasta-premier-van-phu",
          "thanh-toan-vlasta-premier-20-den-khi-nhan-nha",
        ]
      : [
          "eco-retreat-co-nen-mua-khong",
          "gia-vlasta-premier-2026",
          "so-sanh-vlasta-premier-khu-nam-2026",
          "mizuki-park-huong-loi-gi-tu-vinhomes-binh-chanh",
          "vin-group-nghien-cuu-sieu-do-thi-1512ha-binh-chanh",
          "phap-ly-vlasta-premier-van-phu",
        ];
  const recommendedPosts = recommendedSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is (typeof blogPosts)[number] => Boolean(post));

  return (
    <section className="bg-white px-5 py-24 lg:px-8" id="insights">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
            Bài viết nên đọc
          </p>
          <h2 className="font-display text-4xl font-medium tracking-[-0.04em] text-balance text-[#15110c] md:text-5xl">
            {variant === "vlasta" ? "Các bài nổi bật về Vlasta Premier" : "Phân tích dự án khu Nam nên đọc trước"}
          </h2>
          <p className="text-lg leading-8 text-[#5d554c]">
            {variant === "vlasta"
              ? "Các bài được chọn theo câu hỏi khách hay tìm: vị trí, giá, tiến độ, phí quản lý, pháp lý và thanh toán."
              : "Bắt đầu từ Eco Retreat, Vlasta Premier, The Peak Garden, Mizuki Park, Vinhomes Bình Chánh và pháp lý/giá bán để có đủ bối cảnh trước khi chọn dự án nên xem thực tế."}
          </p>
          <Link href="/blog" className="btn-luxury rounded-full bg-[#15110c] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8a6a2f]">
            Xem tất cả bài phân tích
          </Link>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recommendedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogCard({
  post,
  variant = "default",
}: {
  post: BlogPostMeta;
  variant?: "default" | "readable";
}) {
  const thumbnail = postImageBySlug[post.slug] || siteConfig.shareImage;
  const isReadable = variant === "readable";

  return (
    <MotionReveal>
      <article className={`group flex h-full flex-col overflow-hidden rounded-[2rem] border transition hover:-translate-y-1 ${isReadable ? "border-neutral-200 bg-white shadow-sm hover:shadow-md" : "luxury-card"}`}>
        <div className={`relative min-h-44 overflow-hidden ${isReadable ? "bg-neutral-100" : "bg-[#fbf8f2]"}`}>
          <Image
            src={thumbnail}
            alt={`Ảnh đại diện bài viết ${post.title}`}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/8 to-transparent" />
          <span className="absolute left-5 top-5 rounded-full bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className={`text-xs uppercase tracking-[0.22em] ${isReadable ? "text-neutral-500" : "text-[#8a6a2f]"}`}>{post.readingTime}</p>
          <h3 className="mt-3 line-clamp-2 text-xl font-bold leading-7 tracking-[-0.02em] text-[#15110c]">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className={`mt-4 line-clamp-3 text-sm leading-6 ${isReadable ? "text-neutral-600" : "text-[#5d554c]"}`}>{post.description}</p>
        </div>
      </article>
    </MotionReveal>
  );
}

type ContactSectionProps = {
  variant?: "default" | "vinhomes-binh-chanh" | "mizuki-park" | "the-peak-garden" | "eco-retreat" | "vlasta-premier";
};

export function ContactSection({ variant = "default" }: ContactSectionProps) {
  const isProjectInventory = isProjectInventoryContactVariant(variant);
  const isVinhomesBinhChanh = variant === "vinhomes-binh-chanh";
  const isMizukiPark = variant === "mizuki-park";
  const isThePeakGarden = variant === "the-peak-garden";
  const isEcoRetreat = variant === "eco-retreat";
  const isVlastaPremier = variant === "vlasta-premier";
  const needOptions = [
    "Chưa rõ, cần tư vấn chọn dự án",
    "Quan tâm Eco Retreat",
    "Quan tâm Mizuki Park",
    "Quan tâm Vinhomes Bình Chánh",
    "Quan tâm Vlasta Premier",
    "Quan tâm The Peak Garden",
    "Quan tâm The 9 Stellars",
    "Nhận cập nhật Vinhomes Bình Chánh",
  ];

  return (
    <section className="bg-[#f7f1e6] px-5 py-24 lg:px-8" id="contact">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a2f]">
            {isProjectInventory ? "Giỏ hàng theo ngân sách" : "Tư vấn chọn dự án"}
          </p>
          <h2 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] text-[#15110c] md:text-5xl">
            {isVlastaPremier
              ? "Nhận 5 căn Vlasta Premier giá tốt nhất trong giỏ hàng tuần này."
              : isMizukiPark
              ? "Nhận 5 căn Mizuki Park giá tốt nhất trong giỏ hàng tuần này."
              : isThePeakGarden
              ? "Nhận 5 căn The Peak Garden giá tốt nhất trong giỏ hàng tuần này."
              : isEcoRetreat
              ? "Nhận 5 căn Eco Retreat giá tốt nhất trong giỏ hàng tuần này."
              : isVinhomesBinhChanh
              ? "Nhận 5 phương án theo dõi sớm tại Vinhomes Bình Chánh."
              : "Gửi nhu cầu để được gợi ý dự án phù hợp."}
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5d554c]">
            {isVlastaPremier
              ? "Saigon Living sẽ lọc căn Vlasta Premier theo loại căn, tầng, view, phương án thanh toán và so sánh với Mizuki Park, The Peak Garden hoặc Q7 Riverside nếu Anh/Chị cần."
              : isMizukiPark
              ? "Saigon Living sẽ tư vấn Mizuki Park, Trellia Cove hoặc so sánh với Vlasta Premier, The Peak Garden theo mục tiêu ở thật, đầu tư và khả năng vay."
              : isThePeakGarden
              ? "Saigon Living sẽ lọc The Peak Garden theo ngân sách, vị trí căn, dòng tiền vay và so trực tiếp với Vlasta Premier hoặc Mizuki Park nếu Anh/Chị cần phương án chắc hơn."
              : isEcoRetreat
              ? "Nhận ngay layout và bảng tính dòng tiền của 5 căn giá tốt nhất Eco Retreat Bến Lức — lọc theo phân khúc ngân sách Anh/Chị chọn."
              : isVinhomesBinhChanh
              ? "Saigon Living sẽ cập nhật thông tin quy hoạch, pháp lý, giá dự kiến và gợi ý các phương án thực tế quanh Bình Chánh, Mizuki hoặc căn hộ Quận 7 tầm 3-5 tỷ."
              : "Saigon Living sẽ dựa trên ngân sách, khu vực làm việc, nhu cầu ở thật/đầu tư và thời gian nắm giữ để gợi ý 2-3 dự án nên xem trước."}
          </p>
          <div className="mt-7 grid gap-3 text-sm leading-6 text-[#5d554c]">
            <p className="rounded-2xl border border-[#d9c79f]/55 bg-white/75 p-4">
              <span className="font-bold text-[#15110c]">
                {isVlastaPremier ? "Nhận ưu đãi:" : isMizukiPark ? "Mua ở ngay:" : isThePeakGarden ? "Lọc căn The Peak:" : isEcoRetreat ? "Trong giỏ hàng:" : isVinhomesBinhChanh ? "Theo dõi Vinhomes Bình Chánh:" : "Nhu cầu sống:"}
              </span>{" "}
              {isVlastaPremier
                ? "nhận bảng giá mới nhất, chiết khấu booking sớm, lãi 0% và chính sách thanh toán đang áp dụng."
                : isMizukiPark
                ? "lọc căn Mizuki theo diện tích, tiện ích hiện hữu, trường học và nhu cầu gia đình."
                : isThePeakGarden
                ? "lọc theo ngân sách, tầng, view, mục tiêu ở/cho thuê và mức vay an toàn."
                : isEcoRetreat
                ? "5 căn giá tốt nhất tuần này, kèm layout vị trí lô và chính sách thanh toán đang áp dụng."
                : isVinhomesBinhChanh
                ? "nhận cập nhật khi có thông tin rõ hơn về ranh, pháp lý, sản phẩm và thời điểm triển khai."
                : "lọc theo nhịp sống thật: đi làm trung tâm, work from home, nghỉ cuối tuần, gia đình có con nhỏ hoặc người lớn tuổi."}
            </p>
            <p className="rounded-2xl border border-[#d9c79f]/55 bg-white/75 p-4">
              <span className="font-bold text-[#15110c]">
                {isVlastaPremier ? "Chọn căn:" : isMizukiPark ? "So sánh phương án:" : isThePeakGarden ? "So sánh phương án:" : isEcoRetreat ? "Bảng tính dòng tiền:" : isVinhomesBinhChanh ? "Tư vấn căn hộ thay thế:" : "So sánh dự án:"}
              </span>{" "}
              {isVlastaPremier
                ? "lọc căn 1PN, 2PN, 3PN theo tầng, view, mục tiêu ở thật hoặc đầu tư giữ tài sản."
                : isMizukiPark
                ? "đặt Mizuki cạnh Vlasta Premier, The Peak Garden hoặc căn hộ Quận 7 theo vốn tự có."
                : isThePeakGarden
                ? "đặt The Peak Garden cạnh Vlasta Premier, Mizuki Park hoặc các dự án Quận 7 theo dòng tiền thật."
                : isEcoRetreat
                ? "ước tính vốn tự có, khoản vay và áp lực thanh toán theo từng căn trong giỏ hàng."
                : isVinhomesBinhChanh
                ? "lọc các lựa chọn như Mizuki hoặc căn hộ Quận 7 3-5 tỷ nếu Anh/Chị cần phương án mua sớm hơn."
                : "đặt Eco Retreat, Mizuki Park, Vinhomes Bình Chánh, Vlasta Premier và The Peak Garden cạnh nhau theo ngân sách thật."}
            </p>
            <p className="rounded-2xl border border-[#d9c79f]/55 bg-white/75 p-4">
              <span className="font-bold text-[#15110c]">Tư vấn theo ngân sách:</span>{" "}
              {isVlastaPremier
                ? "tính khoản vay, dòng tiền thanh toán 20% đến khi nhận nhà và mức giá nên xem trước khi đi thực tế."
                : isMizukiPark
                ? "tính khoản vay, dòng tiền thuê và mức giá nên xem trước khi đi thực tế."
                : isThePeakGarden
                ? "tính tổng vốn, khoản vay, chi phí sau nhận nhà và kịch bản giữ tài sản."
                : isEcoRetreat
                ? "lọc theo loại hình căn hộ, nhà phố, song lập hay biệt thự phù hợp ngân sách Anh/Chị."
                : isVinhomesBinhChanh
                ? "gửi ngân sách/vốn tự có để được gợi ý khu vực nên theo dõi hoặc sản phẩm nên xem trước."
                : "gửi vốn tự có, mức vay dự kiến và thời gian nắm giữ để nhận phương án nên xem trước."}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={siteConfig.contact.zalo} className="btn-luxury rounded-full bg-[#15110c] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8a6a2f]">
              Zalo
            </a>
            <a href={`tel:${siteConfig.contact.phoneTel}`} className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-[#15110c]">
              Gọi điện
            </a>
            <a href={siteConfig.contact.whatsapp} className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-[#15110c]">
              WhatsApp
            </a>
          </div>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          {isProjectInventory ? (
            <ProjectInventoryLeadForm variant={variant} />
          ) : (
            <LeadCaptureForm
              source="Contact Section Comparison Form"
              needOptions={needOptions}
              defaultNeed={needOptions[0]}
              submitLabel="Gửi nhu cầu tư vấn"
            />
          )}
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
          eyebrow="So sánh dự án"
          title="So sánh Vlasta Premier với các dự án cùng khu vực"
          description="So sánh với Sunshine Sky City, Sunshine Diamond River và The Peak Garden để chọn đúng sản phẩm theo ngân sách và mục tiêu mua."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="luxury-card rounded-3xl p-6">
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
      <a href={`tel:${siteConfig.contact.phoneTel}`} className="rounded-full bg-[#15110c] px-3 py-3 text-white">
        Gọi
      </a>
      <a href={siteConfig.contact.zalo} className="rounded-full bg-[#0068ff] px-3 py-3 font-semibold text-white">
        Zalo
      </a>
      <LeadFormTrigger
        source="Mobile Sticky CTA"
        ctaLabel={PROJECT_INVENTORY_CTA_LABEL}
        className={INVENTORY_CTA_BUTTON_COMPACT_CLASS}
      >
        Bảng giá
      </LeadFormTrigger>
    </div>
  );
}

export function DesktopFloatingCta() {
  return (
    <div className="fixed bottom-8 right-6 z-50 hidden w-40 flex-col gap-2.5 lg:flex">
      <a
        href={siteConfig.contact.zalo}
        className="rounded-full border border-white/20 bg-[#0068ff]/90 px-4 py-2.5 text-center text-xs font-bold text-white shadow-[0_14px_34px_rgba(0,0,0,0.14)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#0068ff]"
      >
        Zalo
      </a>
      <a
        href={`tel:${siteConfig.contact.phoneTel}`}
        className="rounded-full border border-[#d9c79f]/45 bg-[#15110c]/92 px-4 py-2.5 text-center text-xs font-bold text-white shadow-[0_14px_34px_rgba(0,0,0,0.16)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#8a6a2f]"
      >
        {siteConfig.contact.phone}
      </a>
      <LeadFormTrigger
        source="Desktop Floating CTA"
        ctaLabel={PROJECT_INVENTORY_CTA_LABEL}
        className={INVENTORY_CTA_FLOATING_CLASS}
      >
        Bảng giá
      </LeadFormTrigger>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8" id="faq">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Câu hỏi thường gặp"
          title="Những câu hỏi thường gặp khi mua Vlasta Premier"
          description="Giải đáp nhanh về vị trí, chủ đầu tư, giá bán, pháp lý, tiện ích, phí vận hành, chuyển nhượng và thời gian bàn giao."
        />
        <div className="mt-12 space-y-4">
          {project.faqs.map((faq) => (
            <details key={faq.question} className="luxury-card group rounded-3xl p-6">
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
