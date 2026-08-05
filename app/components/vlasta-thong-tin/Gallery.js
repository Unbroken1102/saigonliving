"use client";

import Image from "next/image";
import VlastaImage from "./VlastaImage";
import { useState } from "react";
import { galleryImages } from "@/app/lib/vlasta-thong-tin/data";
import SectionHeader from "./ui/SectionHeader";
import AnimateIn from "./ui/AnimateIn";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="thu-vien" className="section-padding bg-charcoal-soft">
      <SectionHeader
        light
        eyebrow="Thư viện hình ảnh"
        title="Không gian sống đẳng cấp"
        description="Mỗi góc nhìn là một khoảnh khắc — từ lobby sang trọng đến ban công đón hoàng hôn."
      />

      <div className="mx-auto max-w-7xl mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <AnimateIn
              key={img.src}
              delay={i * 60}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${img.span}`}
            >
              <button
                type="button"
                className="absolute inset-0 w-full h-full"
                onClick={() => setActive(img)}
                aria-label={img.alt}
              >
                <VlastaImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm text-warm-white font-medium">{img.alt}</p>
                </div>
              </button>
            </AnimateIn>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-warm-white/80 hover:text-warm-white text-sm tracking-widest uppercase"
            onClick={() => setActive(null)}
          >
            Đóng ✕
          </button>
          <div
            className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              className="object-cover"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
