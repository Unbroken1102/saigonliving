"use client";

import { amenities } from "@/app/lib/vlasta-thong-tin/data";
import Image from "next/image";
import VlastaImage from "./VlastaImage";
import { useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import AnimateIn from "./ui/AnimateIn";

const icons = {
  pool: (
    <path d="M2 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 10c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
  ),
  spa: <path d="M12 2v4M8 6c0 4 4 6 4 10M16 6c0 4-4 6-4 10M12 14v8" />,
  gym: (
    <path d="M6 12h12M8 8v8M16 8v8M4 10v4M20 10v4" />
  ),
  kids: (
    <>
      <circle cx="9" cy="7" r="2" />
      <circle cx="15" cy="7" r="2" />
      <path d="M6 18c0-2 2-4 6-4s6 2 6 4" />
    </>
  ),
  dining: (
    <path d="M6 2v8M10 2v8M8 10v12M14 2v6c0 2 2 3 4 3v11" />
  ),
  garden: (
    <path d="M12 22V12M12 12C12 7 7 2 2 2c0 5 5 10 10 10M12 12c0-5 5-10 10-10-5 0-10 5-10 10" />
  ),
  security: (
    <path d="M12 2l8 4v6c0 5-4 9-8 10C8 21 4 17 4 12V6l8-4z" />
  ),
  ev: (
    <path d="M4 14h16M6 14l2-6h8l2 6M8 18h.01M16 18h.01" />
  ),
};

export default function Amenities() {
  const [activeAmenity, setActiveAmenity] = useState(null);

  return (
    <section id="tien-ich" className="section-padding bg-warm-white">
      <SectionHeader
        eyebrow="Tiện ích nội khu"
        title="Bộ sưu tập tiện ích đa tầng"
        description="Hệ tiện ích Live - Work - Learn - Well-being được quy hoạch đa tầng, phục vụ trọn vẹn nhịp sống cư dân hiện đại."
      />

      <div className="mx-auto max-w-7xl mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {amenities.map((item, i) => (
          <AnimateIn key={item.title} delay={i * 50}>
            <button
              type="button"
              onClick={() => setActiveAmenity(item)}
              className="group h-full w-full rounded-2xl border border-charcoal/5 bg-warm-white p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              aria-label={`Xem ảnh lớn ${item.title}`}
            >
              <div className="relative mb-5 h-32 overflow-hidden rounded-xl">
                <VlastaImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 to-transparent" />
                <div className="absolute bottom-3 right-3 rounded-full border border-warm-white/30 bg-charcoal/35 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-warm-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  Xem ảnh
                </div>
              </div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-tropical/8 text-tropical transition-colors group-hover:bg-gold/15 group-hover:text-gold-dark">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[item.icon]}
                </svg>
              </div>
              <h3 className="font-display text-xl text-charcoal font-medium">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                {item.description}
              </p>
            </button>
          </AnimateIn>
        ))}
      </div>

      {activeAmenity && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal/85 p-4 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={activeAmenity.title}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-warm-white/15 bg-charcoal shadow-2xl animate-popup-zoom"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={activeAmenity.image}
                alt={activeAmenity.title}
                fill
                className="object-cover"
                sizes="95vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 to-transparent p-5 md:p-8">
                <p className="font-display text-3xl font-light text-warm-white md:text-5xl">
                  {activeAmenity.title}
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-warm-white/70 md:text-base">
                  {activeAmenity.description}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-warm-white/25 bg-charcoal/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-warm-white backdrop-blur transition-colors hover:bg-warm-white/10"
              onClick={() => setActiveAmenity(null)}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
