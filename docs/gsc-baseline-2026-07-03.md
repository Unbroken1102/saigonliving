# GSC Baseline — saigonliving.net

**Chụp mốc:** 03/07/2026 (dùng cho KPI tháng 1, bắt đầu làm việc 04/07)  
**Khoảng thời gian GSC:** 28 ngày qua (~06/06–03/07/2026)  
**Property:** `sc-domain:saigonliving.net`  
**Tài khoản:** phamductubk@gmail.com (Phạm Đức Tú)

---

## Tổng quan hiệu suất (28 ngày)

| Chỉ số | Giá trị | KPI tháng 1 (+30%) |
|--------|---------|---------------------|
| **Impressions** | **481** | **≥625** |
| **Clicks** | **50** | — |
| **CTR** | **10,4%** | — |
| **Vị trí TB** | **4,9** | — |

---

## Lập chỉ mục — chi tiết 19 URL chưa index (03/07/2026)

**Cập nhật GSC:** 30/06/2026 · **2 lý do**

| Lý do | Số URL | Mức độ | Hành động |
|-------|--------|--------|-----------|
| **Đã phát hiện – chưa lập chỉ mục** | **16** | ⚠️ Cần xử lý | Request index + internal link |
| **Trang có lệnh chuyển hướng** | **3** | ✅ Bình thường | Không cần sửa (HTTP/www → HTTPS) |
| Đã thu thập – chưa index | 0 | — | — |

### Lý do 1 · Redirect (3 URL) — OK

Google **không index** bản redirect; đây là chuẩn:

| URL | Crawl cuối |
|-----|------------|
| `https://www.saigonliving.net/` | 29/06/2026 |
| `http://saigonliving.net/` | 07/06/2026 |
| `http://www.saigonliving.net/` | 07/06/2026 |

→ Canonical đúng: `https://saigonliving.net/`

### Lý do 2 · Discovered – not indexed (16 URL)

Google **biết URL** (sitemap/internal link) nhưng **chưa crawl/index** — thường do site mới, DR 0, crawl budget thấp.

**Blog (10) — ưu tiên request index P0:**

| URL | P0? |
|-----|-----|
| `/blog/gia-can-1pn-tt-genesis-2026` | ✅ TT Genesis |
| `/blog/gia-eco-retreat-2026` | ✅ Eco |
| `/blog/so-sanh-eco-retreat-mizuki-park` | ✅ Mizuki/Eco |
| `/blog/vi-tri-eco-retreat-ben-luc-co-xa-khong` | ✅ Eco |
| `/blog/nha-pho-eco-retreat-tu-5-ty-co-dang-mua-khong` | ✅ Eco |
| `/blog/metro-ben-thanh-can-gio-cac-nha-ga-chinh` | Trung bình |
| `/blog/so-sanh-the-peak-garden-belleza-q7-boulevard` | Trung bình |
| `/blog/phi-quan-ly-vlasta-premier` | Vlasta — thấp |
| `/blog/vlasta-premier-ban-giao-khi-nao` | Vlasta — thấp |
| `/blog/vlasta-premier-chu-dau-tu-la-ai` | Vlasta — thấp |

**Giỏ hàng (5) — ⚠️ quan trọng cho chiến lược CN:**

| URL |
|-----|
| `/gio-hang/tt-genesis` |
| `/gio-hang/mizuki-park` |
| `/gio-hang/eco-retreat` |
| `/gio-hang/the-peak-garden` |
| `/gio-hang/vlasta-premier` |

**Landing ads (1):**

| URL |
|-----|
| `/vlasta-premier/thong-tin` |

**Việc tuần 1:** GSC → URL Inspection → **Request indexing** cho 5 URL: 4 giỏ P0 + `gia-can-1pn-tt-genesis-2026`. Internal link từ trang chủ + blog Hung Long (đang có traffic).

### Request index · 03/07/2026 ✅

| # | URL | Trạng thái GSC | Kết quả |
|---|-----|----------------|---------|
| 1 | `/gio-hang/tt-genesis` | Discovered – not indexed | ✅ Đã yêu cầu lập chỉ mục |
| 2 | `/gio-hang/mizuki-park` | Discovered – not indexed | ✅ Đã yêu cầu lập chỉ mục |
| 3 | `/gio-hang/eco-retreat` | Google không xác định URL (chưa crawl) | ✅ Đã yêu cầu lập chỉ mục |
| 4 | `/blog/gia-can-1pn-tt-genesis-2026` | Discovered – not indexed | ✅ Đã yêu cầu lập chỉ mục |
| 5 | `/blog/gia-eco-retreat-2026` | Discovered – not indexed | ✅ Đã yêu cầu lập chỉ mục |

*Google xử lý trong 1–7 ngày. Kiểm tra lại GSC ~10/07.*

### Request index · 04/07/2026 (batch 2)

| # | URL | Kết quả |
|---|-----|---------|
| 6 | `/blog/so-sanh-eco-retreat-mizuki-park` | ✅ Đã yêu cầu (03/07 hoặc 04/07) |
| 7 | `/blog/vi-tri-eco-retreat-ben-luc-co-xa-khong` | ✅ Đã yêu cầu lập chỉ mục |
| 8 | `/blog/nha-pho-eco-retreat-tu-5-ty-co-dang-mua-khong` | ✅ Đã yêu cầu lập chỉ mục |
| 9 | `/blog/metro-ben-thanh-can-gio-cac-nha-ga-chinh` | ✅ Đã yêu cầu lập chỉ mục |
| 10 | `/blog/so-sanh-the-peak-garden-belleza-q7-boulevard` | ✅ Đã yêu cầu lập chỉ mục |
| 11 | `/blog/phi-quan-ly-vlasta-premier` | ✅ Đã yêu cầu (Google chưa xác định URL) |
| 12 | `/blog/vlasta-premier-ban-giao-khi-nao` | ✅ Đã yêu cầu lập chỉ mục (21/07) |
| 13 | `/blog/vlasta-premier-chu-dau-tu-la-ai` | ✅ Đã yêu cầu lập chỉ mục (21/07) |
| 14 | `/gio-hang/the-peak-garden` | ✅ Đã yêu cầu lập chỉ mục (21/07) |
| 15 | `/gio-hang/vlasta-premier` | ✅ Đã yêu cầu lập chỉ mục (21/07) |
| 16 | `/vlasta-premier/thong-tin` | ✅ **Đã lập chỉ mục** — không cần request (21/07) |

**Tổng:** 16/16 URL discovered-not-indexed đã xử lý · **5 URL batch retry hoàn tất 21/07/2026** (4 request + 1 đã index).

---

## Top queries (28 ngày)

| Query | Clicks | Impressions | CTR | Vị trí |
|-------|--------|-------------|-----|--------|
| rác đa phước | 3 | 20 | 15% | 2,8 |
| đô thị đại học hưng long | 3 | 8 | 37,5% | 4,5 |
| bãi rác đa phước | 1 | 2 | 50% | 2,0 |
| bai rac da phuoc | 1 | 1 | 100% | 2,0 |
| saigon pavillon | 0 | 3 | 0% | 76,7 |
| the peak garden quận 7 | 0 | 2 | 0% | 11,0 |
| vinhomes bình chánh | 0 | 2 | 0% | 25,5 |
| home retreat | 0 | 1 | 0% | 4,0 |
| sunshine diamond river | 0 | 1 | 0% | 4,0 |
| trellia cove mizuki park | 0 | 1 | 0% | 4,0 |
| vlasta premier | 0 | 1 | 0% | 23,0 |

**Nhận xét:** Traffic chủ yếu từ **bài Hung Long / bãi rác / quy hoạch**, chưa có click từ cluster CN hay TT Genesis.

---

## Keyword mục tiêu SEO (filter GSC 28 ngày)

| Keyword / filter | Impressions | Clicks | Ghi chú |
|------------------|-------------|--------|---------|
| `*tt genesis*` | **0** | **0** | Chưa có dữ liệu — ưu tiên sprint tháng 1–2 |
| `*chuyển nhượng*` | **0** | **0** | Chưa có content/hub CN |
| `*mizuki*` | *(chỉ trellia cove 1 imp)* | 0 | trellia cove mizuki park: 1 imp, pos 4 |
| `*eco retreat*` / home retreat | 1 imp | 0 | home retreat: pos 4 |

---

## Top pages (28 ngày)

| URL | Clicks | Impressions | CTR | Vị trí |
|-----|--------|-------------|-----|--------|
| https://saigonliving.net/ | 12 | 129 | 9,3% | 3,8 |
| …/blog/vinhomes-binh-chanh-doc-quy-hoach-hung-long-1512ha | 11 | 59 | 18,6% | 11,5 |
| …/vinhomes-binh-chanh | 7 | 84 | 8,3% | 6,4 |
| …/blog/bai-rac-da-phuoc-hung-long-1512ha-binh-chanh | 4 | 31 | 12,9% | 9,0 |
| …/blog/bo-tnmt-tu-choi-nang-cong-suat-bai-rac-da-phuoc | 3 | 16 | 18,8% | 5,6 |
| …/blog/phap-ly-vlasta-premier-van-phu | 2 | 135 | 1,5% | 6,9 |

**Nhận xét:** `/tt-genesis`, `/mizuki-park`, `/eco-retreat`, `/gio-hang` chưa lên top pages — cần hub CN + landing Sunshine.

---

## Audit giỏ hàng (03/07/2026)

| Loại | Số lượng | Chi tiết |
|------|----------|----------|
| **chuyen-nhuong** | **1** | Vlasta Premier 1PN only |
| dang-ban | 3 | TT Genesis, Peak Garden, Mizuki |
| cho-thue | 1 | Mizuki 2PN |

**Thiếu CN (P0):** Mizuki, Sunshine Sky City, Eco Retreat, TT Genesis — roadmap tuần 1 cần +2 listing, tháng 1 ≥8 CN.

---

## So sánh cuối tháng (điền 29/07)

| Chỉ số | 03/07 | 29/07 | Δ |
|--------|-------|-------|---|
| Impressions | 481 | | |
| Clicks | 50 | | |
| Indexed | 56 | | |
| TT genesis imp | 0 | | |
| CN imp | 0 | | |

---

*Nguồn: Google Search Console, truy cập 03/07/2026.*
