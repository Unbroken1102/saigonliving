"use client";

import VlastaImage from "./VlastaImage";
import AnimateIn from "./ui/AnimateIn";
import SectionHeader from "./ui/SectionHeader";

export default function Progress() {
  return (
    <section id="tien-do" className="section-padding bg-warm-white-dim">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Tiến độ thực tế"
          title="Cập nhật công trường & hình ảnh triển khai"
          description="Cập nhật ngày 24/05/2026: dự án đã hoàn thành toàn bộ tầng hầm của 2 tháp và đang thi công lên sàn tầng 1."
        />

        <AnimateIn delay={120}>
          <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] border border-charcoal/10 bg-charcoal shadow-2xl shadow-charcoal/10">
            <div className="relative aspect-video">
              <VlastaImage
                src="/assets/tiendo5.jpg"
                alt="Tiến độ thực tế Vlasta Premier Phú Thuận ngày 24/05/2026"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="max-w-2xl px-6 text-center font-display text-2xl leading-tight text-warm-white drop-shadow-lg md:text-4xl">
                  24/05/2026: Hoàn thành tầng hầm 2 tháp, thi công lên sàn tầng 1
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
