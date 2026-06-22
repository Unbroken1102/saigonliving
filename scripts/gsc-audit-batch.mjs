// Helper: outputs URL batches for manual audit tracking
import fs from 'fs';

const urls = fs.readFileSync('.tmp-gsc-audit-urls.txt', 'utf8').trim().split('\n');
const batchSize = 10;
for (let i = 0; i < urls.length; i += batchSize) {
  const batch = urls.slice(i, i + batchSize);
  console.log(`\n=== BATCH ${Math.floor(i / batchSize) + 1} (${batch.length} URLs) ===`);
  batch.forEach((u) => console.log(u));
}
