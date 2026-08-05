import VlastaImage from "./VlastaImage";
import { investmentReasons } from "@/app/lib/vlasta-thong-tin/data";
import AnimateIn from "./ui/AnimateIn";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";

export default function Reasons() {
  const featured = investmentReasons[0];
  const reasons = investmentReasons.slice(1);

  return (
    <section className="section-padding bg-charcoal text-warm-white">
      <SectionHeader
        light
        eyebrow="Lý do không thể bỏ qua"
        title="5 lợi thế tạo nên sức hút Vlasta Premier Phú Thuận"
        description="Những lợi thế nổi bật về vị trí, tầm nhìn, mật độ riêng tư, hệ tiện ích và chính sách sở hữu."
      />

      <div className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <AnimateIn>
          <article className="group relative min-h-[520px] overflow-hidden rounded-[2rem] border border-warm-white/10 bg-warm-white/5">
            <VlastaImage
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/15 font-display text-2xl text-gold-light">
                01
              </span>
              <h3 className="max-w-2xl font-display text-4xl font-light leading-tight md:text-6xl">
                {featured.title}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-warm-white/75 md:text-lg">
                {featured.description}
              </p>
              <div className="mt-8">
                <Button href="#lien-he" variant="primary">
                  Đăng ký ưu đãi tới 12%
                  <ArrowIcon />
                </Button>
              </div>
            </div>
          </article>
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {reasons.map((reason, index) => (
            <AnimateIn key={reason.title} delay={(index + 1) * 80}>
              <article className="group grid h-full grid-cols-[132px_1fr] overflow-hidden rounded-3xl border border-warm-white/10 bg-warm-white/5 transition-all duration-500 hover:border-gold/30 hover:bg-warm-white/10">
                <div className="relative min-h-[170px] overflow-hidden">
                  <VlastaImage
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="132px"
                  />
                  <div className="absolute inset-0 bg-charcoal/15" />
                </div>
                <div className="p-5">
                  <span className="font-display text-2xl text-gold-light">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-light leading-tight text-warm-white">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-warm-white/65">
                    {reason.description}
                  </p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
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
