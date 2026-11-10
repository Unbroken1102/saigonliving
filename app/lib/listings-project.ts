const PROJECT_SLUG_BY_KEY: Record<string, string> = {
  "mizuki park": "/mizuki-park",
  mizuki: "/mizuki-park",
  "the peak garden": "/the-peak-garden",
  "tt genesis": "/tt-genesis",
  "vlasta premier": "/vlasta-premier",
  vlasta: "/vlasta-premier",
  "eco retreat": "/eco-retreat",
  "the 9 stellars": "/the-9-stellars",
  "9 stellars": "/the-9-stellars",
};

export type InventoryProject = {
  slug: string;
  name: string;
  image: string;
  landingPath: string;
  district: string;
};

export const INVENTORY_PROJECTS: InventoryProject[] = [
  {
    slug: "tt-genesis",
    name: "TT Genesis",
    image: "/assets/tt-genesis/vi-tri-tt-genesis.jpg",
    landingPath: "/tt-genesis",
    district: "Nhà Bè",
  },
  {
    slug: "vlasta-premier",
    name: "Vlasta Premier",
    image: "/assets/optimized/overview-marina.jpg",
    landingPath: "/vlasta-premier",
    district: "Quận 7",
  },
  {
    slug: "the-peak-garden",
    name: "The Peak Garden",
    image: "/assets/the-peak-garden/the-peak-garden-hero.jpg",
    landingPath: "/the-peak-garden",
    district: "Quận 7",
  },
  {
    slug: "mizuki-park",
    name: "Mizuki Park",
    image: "/assets/mizuki-park/mizuki-park-kenh-dao-tien-ich.jpg",
    landingPath: "/mizuki-park",
    district: "Bình Chánh",
  },
  {
    slug: "eco-retreat",
    name: "Eco Retreat",
    image: "/assets/eco-retreat/eco-retreat-hero.webp",
    landingPath: "/eco-retreat",
    district: "Long An",
  },
  {
    slug: "the-9-stellars",
    name: "The 9 Stellars",
    image: "/assets/the-9-stellars/alta-villa.jpg",
    landingPath: "/the-9-stellars",
    district: "Thủ Đức",
  },
];

function normalizeProjectKey(project: string) {
  return project.trim().toLowerCase();
}

export function resolveProjectSlug(project: string, projectSlug?: string) {
  const explicit = projectSlug?.trim();
  if (explicit) {
    return explicit.startsWith("/") ? explicit : `/${explicit}`;
  }

  const mapped = PROJECT_SLUG_BY_KEY[normalizeProjectKey(project)];
  if (mapped) {
    return mapped;
  }

  const slugified = `/${normalizeProjectKey(project).replace(/\s+/g, "-")}`;
  return Object.values(PROJECT_SLUG_BY_KEY).includes(slugified) ? slugified : undefined;
}

export function getInventoryProjectBySlug(slug: string) {
  return INVENTORY_PROJECTS.find((project) => project.slug === slug);
}

export function getInventoryProjectPath(slug: string) {
  return `/gio-hang/${slug}`;
}

export function normalizeInventoryProjectSlug(value: string) {
  return value.replace(/^\//, "");
}
