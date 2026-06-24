"use client";

import Image from "next/image";
import { useState } from "react";

type ListingCardGalleryProps = {
  images: string[];
  alt: string;
};

export function ListingCardGallery({ images, alt }: ListingCardGalleryProps) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;
  const activeImage = images[index] ?? images[0];

  const showPrevious = () => {
    setIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setIndex((current) => (current + 1) % images.length);
  };

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
      <Image
        key={activeImage}
        src={activeImage}
        alt={hasMultiple ? `${alt} — ảnh ${index + 1}/${images.length}` : alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {hasMultiple ? (
        <>
          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-neutral-800 shadow transition hover:bg-white"
            aria-label="Ảnh trước"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-neutral-800 shadow transition hover:bg-white"
            aria-label="Ảnh sau"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((image, dotIndex) => (
              <button
                key={image}
                type="button"
                onClick={() => setIndex(dotIndex)}
                className={`h-2 rounded-full transition ${
                  dotIndex === index ? "w-5 bg-white" : "w-2 bg-white/60"
                }`}
                aria-label={`Xem ảnh ${dotIndex + 1}`}
              />
            ))}
          </div>
          <span className="absolute bottom-3 right-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white">
            {index + 1}/{images.length}
          </span>
        </>
      ) : null}
    </div>
  );
}
