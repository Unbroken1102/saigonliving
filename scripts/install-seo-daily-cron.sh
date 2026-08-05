#!/bin/bash
# Cài cron gửi kế hoạch SEO 07:00 mỗi ngày (giờ VN) — chạy trên Mac local
# Usage: bash scripts/install-seo-daily-cron.sh

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MARKER="# saigonliving-seo-daily-plan"
CRON_LINE="0 7 * * * cd $ROOT && /usr/bin/env npm run seo:daily-plan >> /tmp/saigon-seo-daily-plan.log 2>&1 $MARKER"

EXISTING="$(crontab -l 2>/dev/null || true)"
FILTERED="$(echo "$EXISTING" | grep -v "$MARKER" || true)"

{
  echo "$FILTERED"
  echo "$CRON_LINE"
} | crontab -

echo "Installed: email kế hoạch 07:00 hàng ngày → $ROOT"
echo "Log: /tmp/saigon-seo-daily-plan.log"
echo "Test now: npm run seo:daily-plan"
