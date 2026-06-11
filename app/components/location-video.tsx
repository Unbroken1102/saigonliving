"use client";

import Image from "next/image";
import { useState } from "react";

type LocationVideoProps = {
  thumbnail: string;
  embedUrl: string;
  youtubeUrl: string;
};

export function LocationVideo({
  thumbnail,
  embedUrl,
  youtubeUrl,
}: LocationVideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="image-polish relative aspect-video w-full overflow-hidden rounded-[2rem] border border-[#d9c79f]/60 bg-[#15110c] lg:aspect-[21/9] lg:min-h-[320px]">
      {showVideo ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={embedUrl}
          title="Video vị trí Vlasta Premier Phú Thuận"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setShowVideo(true)}
          className="group absolute inset-0 block h-full w-full overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-[#d4b87a]"
          aria-label="Xem video vị trí Vlasta Premier Phú Thuận"
        >
          <Image
            src={thumbnail}
            alt="Thumbnail video vị trí Vlasta Premier Phú Thuận"
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <span className="flex size-20 items-center justify-center rounded-full border border-[#d4b87a]/55 bg-[#1c1b19]/50 text-[#f0ddb0] shadow-2xl shadow-black/35 backdrop-blur-md transition duration-300 group-hover:scale-110 md:size-24">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="rounded-full border border-white/25 bg-[#1c1b19]/55 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                Xem video vị trí
              </span>
            </div>
          </div>
        </button>
      )}
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur transition hover:bg-black/60"
      >
        Mở YouTube
      </a>
    </div>
  );
}
