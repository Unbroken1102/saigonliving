export default function HeroPoster({ poster, mobilePoster, mobilePosterWebp }) {
  return (
    <picture className="absolute inset-0 block">
      {mobilePosterWebp ? (
        <source media="(max-width: 767px)" srcSet={mobilePosterWebp} type="image/webp" />
      ) : null}
      {mobilePoster ? <source media="(max-width: 767px)" srcSet={mobilePoster} /> : null}
      <img
        src={poster}
        alt=""
        aria-hidden
        width={1600}
        height={900}
        className="h-full w-full object-cover animate-hero-zoom"
        fetchPriority="high"
        decoding="sync"
      />
    </picture>
  );
}
