"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type DeferredHeroMediaProps = {
  poster: string;
  video?: string;
  mobileVideo?: string;
  label: string;
};

export function DeferredHeroMedia({
  poster,
  video,
  mobileVideo,
  label,
}: DeferredHeroMediaProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (!video) {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (!mediaQuery.matches) {
      return;
    }

    const loadVideo = () => setShouldLoadVideo(true);
    const idleCallback = window.requestIdleCallback?.(loadVideo, { timeout: 3000 });
    const timeout = window.setTimeout(loadVideo, 4500);

    return () => {
      window.clearTimeout(timeout);
      if (idleCallback) {
        window.cancelIdleCallback?.(idleCallback);
      }
    };
  }, [video]);

  return (
    <>
      <Image
        src={poster}
        alt={label}
        fill
        className="object-cover animate-hero-zoom"
        sizes="100vw"
        preload
        quality={82}
      />
      {shouldLoadVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          aria-label={label}
        >
          {mobileVideo ? (
            <source src={mobileVideo} type="video/mp4" media="(max-width: 767px)" />
          ) : null}
          <source src={video} type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}
