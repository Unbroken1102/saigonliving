import fs from "node:fs";
import path from "node:path";
import type { Listing } from "@/app/lib/listings";
import { resolveProjectSlug } from "@/app/lib/listings-project";

const LISTINGS_ROOT = path.join(process.cwd(), "public/assets/listings");
const DEFAULT_IMAGE = "/assets/optimized/overview-marina.jpg";
const IMAGE_PATTERN = /\.(jpe?g|png|webp|gif)$/i;

function readFolderImages(folderName: string): string[] {
  const dir = path.join(LISTINGS_ROOT, folderName);

  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_PATTERN.test(file) && !file.startsWith("."))
    .sort((a, b) => a.localeCompare(b, "en"))
    .map((file) => `/assets/listings/${folderName}/${file}`);
}

function findListingImagesById(listingId: string): string[] {
  const direct = readFolderImages(listingId);
  if (direct.length > 0) {
    return direct;
  }

  if (!fs.existsSync(LISTINGS_ROOT)) {
    return [];
  }

  for (const entry of fs.readdirSync(LISTINGS_ROOT)) {
    if (entry.startsWith(".") || entry === listingId) {
      continue;
    }

    const nestedDir = path.join(LISTINGS_ROOT, entry, listingId);
    if (!fs.existsSync(nestedDir) || !fs.statSync(nestedDir).isDirectory()) {
      continue;
    }

    const nested = readFolderImages(`${entry}/${listingId}`);
    if (nested.length > 0) {
      return nested;
    }
  }

  return [];
}

function projectSlugToFolder(projectSlug?: string) {
  if (!projectSlug) {
    return undefined;
  }

  return projectSlug.replace(/^\//, "");
}

function resolveProjectFolder(listing: Listing): string | undefined {
  const fromSlug = projectSlugToFolder(resolveProjectSlug(listing.project, listing.projectSlug));
  if (fromSlug) {
    return fromSlug;
  }

  const slug = listing.project.trim().toLowerCase().replace(/\s+/g, "-");
  const slugDir = path.join(LISTINGS_ROOT, slug);
  if (fs.existsSync(slugDir) && fs.statSync(slugDir).isDirectory()) {
    return slug;
  }

  return undefined;
}

export function attachAutoListingImages(listings: Listing[]): Listing[] {
  const projectPools = new Map<string, string[]>();
  const projectIndexes = new Map<string, number>();

  return listings.map((listing) => {
    if (listing.images.length > 0) {
      return listing;
    }

    const listingFolderImages = findListingImagesById(listing.id);
    if (listingFolderImages.length > 0) {
      return { ...listing, images: listingFolderImages };
    }

    const projectFolder = resolveProjectFolder(listing);
    if (!projectFolder) {
      return { ...listing, images: [DEFAULT_IMAGE] };
    }

    if (!projectPools.has(projectFolder)) {
      projectPools.set(projectFolder, readFolderImages(projectFolder));
    }

    const pool = projectPools.get(projectFolder) || [];
    if (pool.length === 0) {
      return { ...listing, images: [DEFAULT_IMAGE] };
    }

    const index = projectIndexes.get(projectFolder) ?? 0;
    projectIndexes.set(projectFolder, index + 1);

    const cover = pool[Math.min(index, pool.length - 1)];
    return { ...listing, images: [cover] };
  });
}
