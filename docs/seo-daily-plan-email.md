# Email kế hoạch SEO — mỗi sáng 07:00

Gửi email **kế hoạch sales/SEO trong ngày** tới inbox — **đã cấu hình tự động qua Resend** (cùng API lead form).

**Nguồn:** `docs/seo-daily-plans.json` (05/08 → 01/09, 3 trụ Eco/GS/Vinhomes)

---

## Đã setup sẵn trong repo

| Thành phần | File |
|------------|------|
| Dữ liệu từng ngày | `docs/seo-daily-plans.json` |
| Gửi mail (Resend) | `scripts/send-seo-daily-plan.mjs` |
| Cron Vercel (00:00 UTC = 07:00 VN) | `vercel.json` + `app/api/cron/seo-daily-plan/route.ts` |
| Cron Mac local 07:00 | `scripts/install-seo-daily-cron.sh` |
| Apps Script (tuỳ chọn) | `scripts/google-apps-script/seo-daily-plan-email.gs` |

---

## Tự chạy / test

```bash
npm run seo:daily-plan
```

Dùng `RESEND_API_KEY` từ `.env.local` · gửi tới `SEO_PLAN_EMAIL` hoặc `LEAD_NOTIFY_EMAIL` hoặc `phamductubk@gmail.com`.

---

## Cron Mac (local — không cần deploy)

```bash
npm run seo:daily-plan:install-cron
```

→ Mỗi **07:00** giờ VN gửi mail · log: `/tmp/saigon-seo-daily-plan.log`

---

## Cron Vercel (production)

Sau deploy, thêm env trên Vercel:

```text
CRON_SECRET=<random-string>
RESEND_API_KEY=...
SEO_PLAN_EMAIL=phamductubk@gmail.com
```

Vercel gọi `GET /api/cron/seo-daily-plan` lúc **00:00 UTC** (= 07:00 VN).

---

## Env tuỳ chọn (.env.local)

```text
SEO_PLAN_EMAIL=phamductubk@gmail.com
SEO_PLAN_EMAIL_FROM=Saigon Living <onboarding@resend.dev>
CRON_SECRET=...
```

---

## Sửa kế hoạch từng ngày

Edit `docs/seo-daily-plans.json` → field `plans[]` · mỗi ngày `date` + `tasks[]`.

---

## Apps Script (backup)

Nếu muốn gửi qua **Gmail** + chỉnh trên Sheet: xem `scripts/google-apps-script/seo-daily-plan-email.gs` · menu **Saigon Living SEO Plan**.

**Khuyến nghị:** dùng **Resend + cron** ở trên — không cần cài tay Google.

---

## Liên quan

- [seo-roadmap-1-tuan.md](./seo-roadmap-1-tuan.md)
