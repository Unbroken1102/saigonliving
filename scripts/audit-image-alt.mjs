import fs from "node:fs";
import path from "node:path";

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      walk(full, acc);
    } else if (/\.(tsx|ts|mdx)$/.test(entry.name)) {
      const content = fs.readFileSync(full, "utf8");
      if (
        content.includes("<Image") ||
        content.includes("<img") ||
        content.includes("ArticleImage") ||
        content.includes("ArticlePortraitImage")
      ) {
        acc.push(full);
      }
    }
  }
  return acc;
}

const files = walk(path.join(process.cwd(), "app")).concat(
  ["mdx-components.tsx"].map((f) => path.join(process.cwd(), f)).filter(fs.existsSync),
);

const weakPatterns = [
  /minh hoạ/i,
  /minh họa/i,
  /hình ảnh minh/i,
  /^view /i,
  /^ảnh /i,
  /^layout /i,
  /^tiến độ vlasta premier \d+$/i,
  /^hình minh hoạ/i,
];

const issues = [];

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");

  for (const block of content.matchAll(/<Article(?:Portrait)?Image[\s\S]*?\/>/g)) {
    const alt =
      block[0].match(/alt="([^"]*)"/)?.[1] ??
      block[0].match(/alt=\{`([^`]*)`\}/)?.[1];
    if (!alt) {
      issues.push({ file, type: "missing", snippet: block[0].slice(0, 100) });
    } else if (alt.length < 25 || weakPatterns.some((p) => p.test(alt))) {
      issues.push({ file, type: "weak", alt });
    }
  }

  for (const tag of content.matchAll(/<Image[\s\S]*?\/>/g)) {
    if (!tag[0].includes("alt=")) {
      issues.push({ file, type: "missing-alt", snippet: tag[0].slice(0, 120) });
      continue;
    }
    const alt =
      tag[0].match(/alt="([^"]*)"/)?.[1] ??
      tag[0].match(/alt=\{`([^`]*)`\}/)?.[1];
    if (alt && !alt.includes("${") && (alt.length < 20 || weakPatterns.some((p) => p.test(alt)))) {
      issues.push({ file, type: "weak", alt });
    }
  }

  for (const tag of content.matchAll(/<img[\s\S]*?\/?>/g)) {
    if (!tag[0].includes("alt=")) {
      issues.push({ file, type: "missing-img", snippet: tag[0].slice(0, 120) });
    }
  }
}

console.log(`Total issues: ${issues.length}`);
for (const issue of issues) {
  console.log(JSON.stringify(issue));
}
