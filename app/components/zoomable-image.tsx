"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useState } from "react";

type ZoomableImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className: string;
  imageClassName: string;
  children?: ReactNode;
};

export function ZoomableImage({
  src,
  alt,
  sizes,
  className,
  imageClassName,
  children,
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={`${className} group block w-full cursor-zoom-in overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-[#d4b87a]`}
        onClick={() => setIsOpen(true)}
        aria-label={`Phóng to ảnh: ${alt}`}
      >
        <Image src={src} alt={alt} fill className={imageClassName} sizes={sizes} unoptimized />
        <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 opacity-90 backdrop-blur transition group-hover:bg-[#d4b87a] group-hover:text-[#112017]">
          Click phóng to
        </span>
        {children}
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[120] bg-black/90 px-4 py-5 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-zoom-out"
            onClick={() => setIsOpen(false)}
            aria-label="Đóng ảnh phóng to"
          />
          <div className="relative mx-auto flex h-full max-w-7xl flex-col">
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f0ddb0]">
                  Mặt bằng Trellia Cove
                </p>
                <h2 className="font-display mt-2 text-2xl font-medium md:text-4xl">{alt}</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Đóng
              </button>
            </div>
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-[2rem] border border-white/20 bg-white">
              <Image src={src} alt={alt} fill className="object-contain p-3" sizes="100vw" priority unoptimized />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
