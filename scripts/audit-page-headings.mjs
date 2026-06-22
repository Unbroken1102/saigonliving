#!/usr/bin/env node
/**
 * Fetch rendered HTML and list H1/H2 tags.
 * Usage: node scripts/audit-page-headings.mjs [url]
 * Default: http://localhost:3000/mizuki-park
 */
const url = process.argv[2] || "http://localhost:3000/mizuki-park";

const html = await fetch(url).then((r) => {
  if (!r.ok) throw new Error(`${r.status} ${r.statusText} for ${url}`);
  return r.text();
});

const headings = [...html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map((m) => ({
  tag: m[1].toLowerCase(),
  text: m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
}));

const h1 = headings.filter((h) => h.tag === "h1");
const h2 = headings.filter((h) => h.tag === "h2");

console.log(`URL: ${url}`);
console.log(`H1 count: ${h1.length}`);
for (const item of h1) console.log(`  [H1] ${item.text.slice(0, 120)}`);
console.log(`H2 count: ${h2.length}`);
for (const item of h2) console.log(`  [H2] ${item.text.slice(0, 120)}`);

if (h1.length !== 1) {
  console.error("\nFAIL: expected exactly 1 H1");
  process.exit(1);
}

console.log("\nOK: single H1");
