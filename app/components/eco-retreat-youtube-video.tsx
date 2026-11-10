"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ecoRetreatYoutubeEmbedUrl, ecoRetreatYoutubeWatchUrl } from "@/app/lib/eco-retreat-media";

type EcoRetreatYoutubeVideoProps = {
  videoId?: string | null;
  title: string;
  caption?: string;
  thumbnail: string;
  blogHref?: string;
  inventoryHref?: string;
  playLabel?: string;
};

export function EcoRetreatYoutubeVideo({
  videoId,
  title,
  caption,
  thumbnail,
  blogHref,
  inventoryHref,
  playLabel = "Xem video",
}: EcoRetreatYoutubeVideoProps) {
  const [showVideo, setShowVideo] = useState(false);
  const hasVideo = Boolean(videoId?.trim());
  const embedUrl = hasVideo ? ecoRetreatYoutubeEmbedUrl(videoId!) : "";
  const watchUrl = hasVideo ? ecoRetreatYoutubeWatchUrl(videoId!) : "";

  return (
    <figure className="overflow-hidden rounded-[1.75rem] border border-[#d9c79f]/60 bg-[#10251c] shadow-[0_18px_60px_rgba(21,17,12,0.12)]">
      <div className="relative aspect-video w-full">
        {hasVideo && showVideo ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => hasVideo && setShowVideo(true)}
            disabled={!hasVideo}
            className="group absolute inset-0 block h-full w-full overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-[#a8c77b] disabled:cursor-default"
            aria-label={hasVideo ? title : `${title} — video sắp có`}
          >
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition duration-700 group-enabled:group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 900px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b14]/88 via-[#0b1b14]/28 to-[#0b1b14]/12" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
              {hasVideo ? (
                <>
                  <span className="flex size-20 items-center justify-center rounded-full border border-[#c7d8a4]/45 bg-[#0b1b14]/55 text-[#d8efae] shadow-2xl shadow-black/35 backdrop-blur-md transition duration-300 group-hover:scale-110 md:size-24">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="rounded-full border border-white/20 bg-[#0b1b14]/55 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                    {playLabel}
                  </span>
                </>
              ) : (
                <>
                  <span className="rounded-full border border-[#c7d8a4]/35 bg-[#0b1b14]/65 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d8efae]">
                    Video sắp đăng
                  </span>
                  <p className="max-w-md text-sm font-medium leading-7 text-white/88">
                    Bảng giá chi tiết đã cập nhật trên site — xem bài viết hoặc giỏ chuyển nhượng bên dưới.
                  </p>
                </>
              )}
            </div>
          </button>
        )}
        {hasVideo ? (
          <a
            href={watchUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-black/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur transition hover:bg-black/65"
          >
            YouTube
          </a>
        ) : null}
      </div>
      {caption ? (
        <figcaption className="border-t border-[#d9c79f]/35 bg-[#fbf8f2] px-5 py-4 text-sm leading-7 text-[#5d554c] md:px-6">
          {caption}
          {!hasVideo && (blogHref || inventoryHref) ? (
            <span className="mt-2 block">
              {blogHref ? (
                <Link href={blogHref} className="font-semibold text-[#10251c] underline underline-offset-4">
                  Bài giá chuyển nhượng tháng 8/2026
                </Link>
              ) : null}
              {blogHref && inventoryHref ? " · " : null}
              {inventoryHref ? (
                <Link href={inventoryHref} className="font-semibold text-[#10251c] underline underline-offset-4">
                  Giỏ chuyển nhượng
                </Link>
              ) : null}
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
