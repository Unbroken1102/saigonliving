"use client";

import { useEffect, useState } from "react";

type DeferredHeroMediaProps = {
  poster: string;
  mobilePoster?: string;
  video?: string;
  mobileVideo?: string;
  label: string;
};

export function DeferredHeroMedia({
  poster,
  mobilePoster,
  video,
  mobileVideo,
  label,
}: DeferredHeroMediaProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (!video && !mobileVideo) {
      return;
    }

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const hasVideoForViewport = isDesktop ? Boolean(video) : Boolean(mobileVideo);
    if (!hasVideoForViewport) {
      return;
    }

    const loadVideo = () => setShouldLoadVideo(true);
    const idleCallback = window.requestIdleCallback?.(loadVideo, { timeout: isDesktop ? 3000 : 2000 });
    const timeout = window.setTimeout(loadVideo, isDesktop ? 4500 : 2800);

    return () => {
      window.clearTimeout(timeout);
      if (idleCallback) {
        window.cancelIdleCallback?.(idleCallback);
      }
    };
  }, [mobileVideo, video]);

  return (
    <>
      <picture className="absolute inset-0 block">
        {mobilePoster ? <source srcSet={mobilePoster} media="(max-width: 767px)" /> : null}
        <img
          src={poster}
          alt={label}
          className="hero-media h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      {shouldLoadVideo ? (
        <video
          className="hero-media absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          aria-label={label}
        >
          {mobileVideo ? (
            <source src={mobileVideo} type="video/mp4" media="(max-width: 1023px)" />
          ) : null}
          {video ? <source src={video} type="video/mp4" media="(min-width: 1024px)" /> : null}
        </video>
      ) : null}
    </>
  );
}
