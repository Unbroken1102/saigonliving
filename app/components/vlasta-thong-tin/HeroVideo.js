"use client";

import { useEffect, useState } from "react";

function pickVideoSrc(mobileVideo, video) {
  if (typeof window === "undefined") {
    return video ?? mobileVideo ?? null;
  }

  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  if (isMobile) {
    return mobileVideo ?? video ?? null;
  }

  return video ?? mobileVideo ?? null;
}

/** Deferred hero video — poster is server-rendered in HeroPoster.js for LCP. */
export default function HeroVideo({ mobileVideo, video, poster, label }) {
  const [videoSrc, setVideoSrc] = useState(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const src = pickVideoSrc(mobileVideo, video);
    if (!src) {
      return;
    }

    setVideoSrc(src);

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const loadVideo = () => setShouldLoadVideo(true);
    const idleCallback = window.requestIdleCallback?.(loadVideo, {
      timeout: isMobile ? 8000 : 6000,
    });
    const timeout = window.setTimeout(loadVideo, isMobile ? 10000 : 8000);

    return () => {
      window.clearTimeout(timeout);
      if (idleCallback) {
        window.cancelIdleCallback?.(idleCallback);
      }
    };
  }, [mobileVideo, video]);

  if (!shouldLoadVideo || !videoSrc) {
    return null;
  }

  return (
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
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
