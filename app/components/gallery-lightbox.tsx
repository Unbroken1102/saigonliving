"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
};

type GalleryLightboxProps = {
  items: GalleryItem[];
};

export function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index === null ? index : (index + 1) % items.length));
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index === null ? index : (index - 1 + items.length) % items.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, items.length]);

  return (
    <>
      <div className="mt-14 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`image-polish group relative h-full overflow-hidden rounded-[2rem] border border-[#d9c79f]/60 bg-[#15110c] text-left outline-none transition duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#d4b87a] ${
              index === 0 ? "sm:col-span-2 sm:row-span-2" : index === 5 ? "lg:col-span-2" : ""
            }`}
            aria-label={`Xem ảnh lớn: ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes={index === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/18 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 text-white">
              <span className="rounded-full border border-[#f0ddb0]/30 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f0ddb0] backdrop-blur">
                Xem ảnh lớn
              </span>
              <h3 className="font-display mt-3 text-xl font-medium leading-6 text-white drop-shadow md:text-2xl">
                {item.alt}
              </h3>
            </div>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[100] bg-black/88 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.alt}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setActiveIndex(null)}
            aria-label="Đóng ảnh"
          />
          <div className="relative mx-auto flex h-full max-w-6xl flex-col">
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f0ddb0]">
                  Gallery {activeIndex! + 1}/{items.length}
                </p>
                <h2 className="font-display mt-2 text-2xl font-medium md:text-4xl">{activeItem.alt}</h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Đóng
              </button>
            </div>

            <div className="relative min-h-0 flex-1 overflow-hidden rounded-[2rem] border border-white/15 bg-[#15110c]">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="mt-4 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setActiveIndex((index) => (index === null ? index : (index - 1 + items.length) % items.length))}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ảnh trước
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((index) => (index === null ? index : (index + 1) % items.length))}
                className="rounded-full bg-[#d4b87a] px-5 py-3 text-sm font-semibold text-[#1c1b19] transition hover:bg-[#f0ddb0]"
              >
                Ảnh sau
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
