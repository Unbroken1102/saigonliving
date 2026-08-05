#!/usr/bin/env node
/**
 * Generate mobile variants for Vlasta thong-tin landing images.
 * JPG: max 960px wide, quality ~82. PNG: max 1200px (plans) or 960px (amenities).
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("public/assets/vlasta-thong-tin");
const EXTRA = [
  { src: "public/assets/tiendo5.jpg", out: "public/assets/vlasta-thong-tin/mobile/tiendo5.jpg", max: 960 },
  { src: "public/assets/vlasta-thong-tin/renders/hero-poster.jpg", out: "public/assets/vlasta-thong-tin/renders/mobile/hero-poster.jpg", max: 960 },
];

const RENDER_JPG_MAX = 960;
const RENDER_PNG_MAX = 960;
const PLAN_PNG_MAX = 1200;
const JPG_QUALITY = 82;

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function optimizeJpg(src, dest, maxWidth) {
  ensureDir(dest);
  execSync(`sips -Z ${maxWidth} "${src}" --out "${dest}"`, { stdio: "pipe" });
  execSync(`sips -s format jpeg -s formatOptions ${JPG_QUALITY} "${dest}" --out "${dest}"`, { stdio: "pipe" });
}

function optimizePng(src, dest, maxWidth) {
  ensureDir(dest);
  execSync(`sips -Z ${maxWidth} "${src}" --out "${dest}"`, { stdio: "pipe" });
}

function walkRenders(dir, rel = "") {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "mobile") continue;
    const abs = path.join(dir, entry.name);
    const relPath = path.join(rel, entry.name);
    if (entry.isDirectory()) {
      walkRenders(abs, relPath);
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;
    if (entry.name === "hero-poster.jpg") continue;

    const dest = path.join(ROOT, "renders", "mobile", relPath);
    const isPlan = relPath.includes("layouts");
    const max = ext === ".png" ? (isPlan ? PLAN_PNG_MAX : RENDER_PNG_MAX) : RENDER_JPG_MAX;

    if (ext === ".jpg" || ext === ".jpeg") {
      optimizeJpg(abs, dest, max);
    } else {
      optimizePng(abs, dest, max);
    }
    const size = fs.statSync(dest).size;
    console.log(`${(size / 1024).toFixed(0)}KB\t${path.relative(ROOT, dest)}`);
  }
}

function walkMatBang() {
  const dir = path.join(ROOT, "mat-bang");
  if (!fs.existsSync(dir)) return;
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".jpg") || file.includes(" ")) continue;
    const src = path.join(dir, file);
    const dest = path.join(dir, "mobile", file);
    optimizeJpg(src, dest, 1200);
    const size = fs.statSync(dest).size;
    console.log(`${(size / 1024).toFixed(0)}KB\tmat-bang/mobile/${file}`);
  }
}

console.log("Generating mobile image variants…");
walkRenders(path.join(ROOT, "renders"));
walkMatBang();

for (const item of EXTRA) {
  const src = path.resolve(item.src);
  const dest = path.resolve(item.out);
  if (!fs.existsSync(src)) continue;
  optimizeJpg(src, dest, item.max);
  console.log(`${(fs.statSync(dest).size / 1024).toFixed(0)}KB\t${path.relative(ROOT, dest)}`);
}

console.log("Done.");
