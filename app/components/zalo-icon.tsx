type ZaloIconProps = {
  className?: string;
};

/** White Zalo mark for buttons on brand-blue background */
export function ZaloIcon({ className = "size-[1.125rem] shrink-0" }: ZaloIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2C6.486 2 2 5.82 2 10.5c0 2.79 1.51 5.27 3.89 6.88L4 22l4.74-2.37C9.47 19.87 10.72 20 12 20c5.514 0 10-3.82 10-8.5S17.514 2 12 2zm-4.2 10.8V9.6h1.8v1.35h1.35V9.6h1.8v3.2h-1.8v-1.35H9.6v1.35H7.8zm4.95 0V9.6h3.45v1.35h-1.65v.5h1.5v1.35h-3.3zm5.25 0V9.6H19.5v3.2h-1.5z" />
    </svg>
  );
}
