"use client";

import { images, locationHighlights, site } from "@/app/lib/vlasta-thong-tin/data";
import VlastaImage from "./VlastaImage";
import { useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import AnimateIn from "./ui/AnimateIn";

export default function Location() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="vi-tri" className="section-padding overflow-hidden bg-tropical text-warm-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <SectionHeader
            light
            align="left"
            eyebrow="Vị trí chiến lược"
            title="Phú Thuận · Quận 7 · TP.HCM"
            description={`${site.address} · Tọa lạc trên cung đường tỷ đô Đào Trí ven sông Sài Gòn, cửa ngõ kết nối Phú Mỹ Hưng, Thủ Thiêm, trung tâm Quận 1 và các trục hạ tầng trọng điểm khu Nam.`}
          />

          <div className="space-y-4">
            {locationHighlights.map((item, i) => (
              <AnimateIn key={item.place} delay={i * 80}>
                <div className="flex flex-col gap-3 rounded-2xl border border-warm-white/10 bg-warm-white/5 px-5 py-5 backdrop-blur-sm transition-colors hover:bg-warm-white/10 sm:flex-row sm:items-center sm:gap-6 sm:px-6">
                  <span className="font-display text-2xl text-gold-light md:text-3xl sm:min-w-[100px] sm:whitespace-nowrap">
                    {item.time}
                  </span>
                  <div className="hidden h-px flex-1 bg-warm-white/15 sm:block" />
                  <span className="text-sm md:text-base text-warm-white/85">
                    {item.place}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn delay={200}>
          <div className="relative mt-12 aspect-video w-full max-w-full overflow-hidden rounded-2xl border border-warm-white/10 sm:mt-16 sm:rounded-3xl lg:aspect-[21/9] lg:min-h-[280px]">
            {showVideo ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/hgcSRJMupjc?autoplay=1&rel=0&modestbranding=1"
                title="Video vị trí Vlasta Premier Phú Thuận"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="group absolute inset-0 block h-full w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Xem video vị trí Vlasta Premier Phú Thuận"
              >
                <VlastaImage
                  src={images.locationAerial}
                  alt="Thumbnail video vị trí Vlasta Premier Phú Thuận"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/50 bg-charcoal/45 text-gold-light shadow-2xl shadow-charcoal/30 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <span className="rounded-full border border-warm-white/25 bg-charcoal/45 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-warm-white backdrop-blur-md">
                      Xem video vị trí
                    </span>
                  </div>
                </div>
              </button>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
