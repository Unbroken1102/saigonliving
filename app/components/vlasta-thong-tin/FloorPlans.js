"use client";

import Image from "next/image";
import VlastaImage from "./VlastaImage";
import { useState } from "react";
import { floorPlans } from "@/app/lib/vlasta-thong-tin/data";
import AnimateIn from "./ui/AnimateIn";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";

export default function FloorPlans() {
  const [activePlan, setActivePlan] = useState(null);

  return (
    <section id="mat-bang" className="section-padding bg-warm-white">
      <SectionHeader
        title="Mặt bằng"
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-2">
        {floorPlans.map((plan, index) => (
          <AnimateIn key={plan.title} delay={index * 90}>
            <article
              className={`group h-full overflow-hidden rounded-[2rem] border border-charcoal/10 bg-warm-white-dim shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/35 hover:shadow-xl hover:shadow-charcoal/10 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setActivePlan(plan)}
                className={`relative block w-full overflow-hidden bg-white ${
                  index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
                aria-label={`Xem lớn ${plan.title}`}
              >
                <VlastaImage
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-contain p-1 transition-transform duration-700 group-hover:scale-[1.01] md:p-3"
                  sizes={index === 0 ? "100vw" : "(max-width: 1024px) 100vw, 50vw"}
                />
                <span className="absolute bottom-4 right-4 rounded-full bg-charcoal/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-warm-white backdrop-blur-sm">
                  Xem lớn
                </span>
              </button>

              <div className="p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
                  {plan.subtitle}
                </p>
                <h3 className="mt-2 font-display text-2xl font-light leading-tight text-charcoal md:text-3xl">
                  {plan.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/68 md:text-base">
                  {plan.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {plan.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-dark"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={220}>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-4 rounded-3xl bg-charcoal px-6 py-6 text-center text-warm-white md:flex-row md:text-left">
          <p className="max-w-2xl text-sm leading-relaxed text-warm-white/70">
            Đăng ký để nhận file mặt bằng chi tiết, bảng giá theo từng căn và
            chính sách ưu đãi mới nhất từ chủ đầu tư.
          </p>
          <Button href="#lien-he" variant="primary" className="shrink-0">
            Nhận mặt bằng & bảng giá
          </Button>
        </div>
      </AnimateIn>

      {activePlan && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal
          aria-label={activePlan.title}
        >
          <div className="relative flex h-full max-h-[92vh] w-full max-w-[1080px] flex-col overflow-hidden rounded-3xl bg-warm-white shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-charcoal/10 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
                  {activePlan.subtitle}
                </p>
                <h3 className="font-display text-2xl font-light text-charcoal">
                  {activePlan.title}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={activePlan.image}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden rounded-full border border-charcoal/20 px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-gold/50 hover:text-gold-dark md:inline-flex"
                >
                  Mở ảnh gốc
                </a>
                <button
                  type="button"
                  onClick={() => setActivePlan(null)}
                  className="rounded-full bg-charcoal px-5 py-2 text-sm font-medium text-warm-white transition-colors hover:bg-charcoal-soft"
                >
                  Đóng
                </button>
              </div>
            </div>
            <div className="relative min-h-0 flex-1 bg-white">
              <Image
                src={activePlan.image}
                alt={activePlan.title}
                fill
                unoptimized
                quality={100}
                className="object-contain p-2 md:p-4"
                sizes="1080px"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
