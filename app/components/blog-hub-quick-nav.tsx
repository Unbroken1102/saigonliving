import type { BlogHubSection } from "@/app/lib/site";

type BlogHubQuickNavProps = {
  hubs: readonly BlogHubSection[];
};

export function BlogHubQuickNav({ hubs }: BlogHubQuickNavProps) {
  return (
    <nav
      className="sticky top-[4.25rem] z-40 border-b border-neutral-200/80 bg-white/92 px-5 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.04)] backdrop-blur-md lg:px-8"
      aria-label="Điều hướng nhanh theo dự án"
    >
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {hubs.map((hub) => (
          <a
            key={hub.id}
            href={`#hub-${hub.id}`}
            className="shrink-0 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-900 hover:text-white"
          >
            {hub.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
