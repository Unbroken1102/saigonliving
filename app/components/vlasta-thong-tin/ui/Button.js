export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
  onClick,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25 active:scale-[0.98]",
    outline:
      "border border-gold/60 text-gold hover:bg-gold/10 backdrop-blur-sm",
    white:
      "bg-warm-white text-charcoal hover:bg-warm-white-dim hover:shadow-lg active:scale-[0.98]",
    dark: "bg-charcoal text-warm-white hover:bg-charcoal-soft active:scale-[0.98]",
    turquoise:
      "bg-turquoise text-warm-white hover:bg-turquoise-light hover:shadow-lg hover:shadow-turquoise/30 active:scale-[0.98]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
