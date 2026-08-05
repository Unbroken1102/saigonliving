import { heroStats, images, site } from "@/app/lib/vlasta-thong-tin/data";
import HeroPoster from "./HeroPoster";
import HeroVideo from "./HeroVideo";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="tong-quan"
      className="relative h-screen min-h-[720px] flex items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <HeroPoster
          poster={images.heroPoster}
          mobilePoster={images.heroPosterMobile}
          mobilePosterWebp={images.heroPosterMobileWebp}
        />
        <HeroVideo
          poster={images.heroPosterMobile}
          mobileVideo="/assets/Video/hero-mobile.mp4"
          video="/assets/Video/hero.mp4"
          label="Vlasta Premier Phú Thuận cinematic background"
        />
        <div className="absolute inset-0 bg-charcoal/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/55 via-charcoal/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full px-5 pb-10 pt-28 md:px-10 md:pb-14 md:pt-32 lg:px-16 lg:pb-18">
        <div className="mx-auto max-w-7xl">
          <div
            className="max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-charcoal/30 px-4 py-1.5 text-[10px] font-medium tracking-[0.2em] uppercase text-gold-light backdrop-blur-sm md:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              {site.tagline}
            </p>

            <h1 className="font-display text-4xl font-light leading-[1.02] text-warm-white tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
              <span className="sr-only">{site.fullName} — </span>
              Khởi nguyên
              <br />
              <span className="text-gradient-gold italic font-normal">
                sống mới
              </span>
              <br />
              tại Nam Sài Gòn
            </h1>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href="#lien-he" variant="primary" className="w-full justify-center sm:w-auto">
                Nhận thông tin dự án
                <ArrowIcon />
              </Button>
              <Button
                href="#lien-he"
                data-lead-modal-title="Xem 5 căn giá tốt nhất"
                data-lead-context="Xem 5 căn giá tốt nhất"
                variant="white"
                className="w-full justify-center border-2 border-gold/40 shadow-lg shadow-black/25 sm:w-auto"
              >
                Xem 5 căn giá tốt nhất
              </Button>
            </div>
          </div>

          <div
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl animate-fade-up"
            style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="glass-dark rounded-2xl px-5 py-4 border border-warm-white/10"
              >
                <p className="font-display text-3xl md:text-4xl text-gold-light">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-lg text-warm-white/60 ml-0.5">
                      {stat.unit}
                    </span>
                  )}
                </p>
                <p className="mt-1 text-xs md:text-sm text-warm-white/60 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:flex flex-col items-center gap-2 text-warm-white/50">
        <span className="text-[10px] tracking-[0.3em] uppercase">Cuộn</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
