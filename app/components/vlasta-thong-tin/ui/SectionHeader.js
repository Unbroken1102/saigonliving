import AnimateIn from "./AnimateIn";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}) {
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col gap-4 max-w-3xl ${alignClass} mx-auto`}>
      {eyebrow && (
        <AnimateIn>
          <span
            className={`inline-block text-xs font-semibold tracking-[0.25em] uppercase ${
              light ? "text-gold-light" : "text-gold-dark"
            }`}
          >
            {eyebrow}
          </span>
        </AnimateIn>
      )}
      <AnimateIn delay={80}>
        <h2
          className={`font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight ${
            light ? "text-warm-white" : "text-charcoal"
          }`}
        >
          {title}
        </h2>
      </AnimateIn>
      {description && (
        <AnimateIn delay={160}>
          <p
            className={`text-base md:text-lg leading-relaxed max-w-2xl ${
              light ? "text-warm-white/75" : "text-charcoal/65"
            } ${align === "center" ? "mx-auto" : ""}`}
          >
            {description}
          </p>
        </AnimateIn>
      )}
    </div>
  );
}
