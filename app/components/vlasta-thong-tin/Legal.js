import VlastaImage from "./VlastaImage";
import { images, legalHighlights } from "@/app/lib/vlasta-thong-tin/data";
import AnimateIn from "./ui/AnimateIn";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";

export default function Legal() {
  return (
    <section id="phap-ly" className="section-padding bg-warm-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Pháp lý dự án"
          title="Minh bạch từ thông tin nền tảng"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <AnimateIn>
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-charcoal">
              <VlastaImage
                src={images.buildingCity}
                alt="Pháp lý dự án Vlasta Premier Phú Thuận"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
                  Vlasta Premier - Phú Thuận
                </p>
                <h3 className="mt-4 font-display text-4xl font-light leading-tight text-warm-white md:text-5xl">
                  Nắm rõ pháp lý trước khi ra quyết định
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-warm-white/70 md:text-base">
                  Chúng tôi khuyến nghị khách hàng kiểm tra hồ sơ pháp lý, chính
                  sách bán hàng và hợp đồng mẫu trước khi đặt mua.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="#lien-he" variant="primary">
                    Nhận tư vấn pháp lý dự án
                  </Button>
                  <Button
                    href="#lien-he"
                    variant="outline"
                    className="border-warm-white/30 text-warm-white hover:bg-warm-white/10"
                  >
                    Hồ sơ pháp lý chi tiết
                  </Button>
                </div>
              </div>
            </div>
          </AnimateIn>

          <div className="grid gap-5 sm:grid-cols-2">
            {legalHighlights.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 90}>
                <article className="h-full rounded-3xl border border-charcoal/5 bg-warm-white-dim p-6 transition-all duration-500 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 md:p-7">
                  <span className="font-display text-4xl font-light text-gold-dark">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-tropical">
                    {item.title}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-charcoal">
                    {item.value}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
                    {item.description}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
