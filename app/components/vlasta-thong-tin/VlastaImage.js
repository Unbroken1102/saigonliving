import Image from "next/image";
import { getMobileImageSrc, getMobileImageWebpSrc } from "@/app/lib/vlasta-thong-tin/image-variants";

/**
 * Serves a lighter pre-generated mobile file below 768px; desktop keeps full-res.
 */
export default function VlastaImage({
  src,
  mobileSrc,
  alt,
  fill = false,
  priority = false,
  className = "",
  sizes,
  quality = 75,
  width,
  height,
}) {
  const mobile = mobileSrc ?? getMobileImageSrc(src);
  const mobileWebp = getMobileImageWebpSrc(src);

  if (!mobile) {
    return (
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        className={className}
        sizes={sizes}
        quality={quality}
        width={width}
        height={height}
      />
    );
  }

  const imgClass = fill
    ? `h-full w-full ${className || "object-cover"}`.trim()
    : className;

  if (fill) {
    return (
      <picture className="absolute inset-0 block">
        {mobileWebp ? (
          <source media="(max-width: 767px)" srcSet={mobileWebp} type="image/webp" />
        ) : null}
        <source media="(max-width: 767px)" srcSet={mobile} />
        <img
          src={src}
          alt={alt}
          className={imgClass}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
        />
      </picture>
    );
  }

  return (
    <picture className="block">
      {mobileWebp ? (
        <source media="(max-width: 767px)" srcSet={mobileWebp} type="image/webp" />
      ) : null}
      <source media="(max-width: 767px)" srcSet={mobile} />
      <img
        src={src}
        alt={alt}
        className={imgClass}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
