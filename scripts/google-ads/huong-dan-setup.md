# Hướng dẫn setup Google Ads — Vlasta Premier /thong-tin

Landing: https://saigonliving.net/vlasta-premier/thong-tin  
Tài khoản: **Vlastar Văn Phú** (193-067-4554)

---

## Nguyên tắc copy quảng cáo

| Nơi | Làm gì |
|---|---|
| **Headline** (15 dòng) | Giá, vị trí, Vlasta, **Văn Phú**, **Phú Thuận**, CTA — **không** ghi "không phải web CĐT" |
| **Description** (4 dòng) | 3 dòng lợi ích + **1 dòng disclaimer mềm** (Google xoay vòng, không phải lúc nào cũng hiện) |
| **Website** | Disclaimer đầy đủ đã có sẵn trên landing |

Copy chi tiết: `responsive-search-ads.txt`  
Từ khóa copy-paste: `tu-khoa-paste.txt`

---

## Bước 1 — Tạo chiến dịch

1. **Chiến dịch mới** → chọn **Vlastar Văn Phú**
2. **Tạo chiến dịch không cần hướng dẫn** → **Tìm kiếm**
3. Tên: `SL | Vlasta Thong Tin | Search`
4. **Thêm mục tiêu chuyển đổi** (tạm: cuộc gọi — sau đổi sang form web)
5. Kết quả mong muốn:
   - ✅ Lượt truy cập trang web → `https://saigonliving.net/vlasta-premier/thong-tin`
   - ✅ Cuộc gọi (tùy chọn) → Việt Nam `0931781111`

---

## Bước 2 — Giá thầu & cài đặt

| Mục | Chọn |
|---|---|
| Giá thầu | **Lượt nhấp** (Manual CPC) |
| Hạn mức CPC | Tùy chọn: 10.000 ₫ (trần an toàn) |
| Thu nạp KH mới | Không tick |
| Tối đa hoá AI | **Tắt** (không bật mở rộng URL) |
| Vị trí | TP.HCM |
| Ngôn ngữ | Tiếng Việt |
| Mạng | Chỉ Google Tìm kiếm (tắt đối tác) |

---

## Bước 3 — Từ khóa

Dán toàn bộ nội d file **`tu-khoa-paste.txt`** vào ô "Nhập từ khóa".

Gồm 4 nhóm intent (~29 từ khóa):
- Brand Vlasta + **Phú Thuận**
- Giá / bảng giá
- Vị trí **Phú Thuận**, Đào Trí
- **Văn Phú / CĐT**

Sản phẩm/dịch vụ (ô trên): `Vlasta Premier căn hộ cao cấp Phú Thuận Văn Phú Invest`

---

## Bước 4 — Quảng cáo (RSA)

**Final URL:** `https://saigonliving.net/vlasta-premier/thong-tin`  
**Display path:** `Vlasta-Premier` / `Thong-Tin`

Dán **Headlines** và **Descriptions** từ `responsive-search-ads.txt`.

**Lưu ý Google:** không ghi số điện thoại trong headline/description — dùng extension **Gọi** `0931781111`.

### Cách hiển thị trên Google (ví dụ)

```
Quảng cáo
saigonliving.net › Vlasta-Premier › Thong-Tin
Vlasta Premier Phú Thuận | Bảng Giá 2026 | Văn Phú Invest Phú Thuận
1PN 3,9 tỷ · 2PN 5,7 tỷ · Vlasta Premier Phú Thuận. Tư vấn miễn phí — Saigon Living.
54 Đào Trí, Phú Thuận — PMH, Nam SG. Nhận bảng giá, mặt bằng & tiến độ qua form.
```

Google **tự ghép** headline/description — mỗi lần hiển thị có thể khác.

---

## Bước 5 — Ngân sách & xuất bản

- Ngân sách: **400.000 ₫/ngày**
- Xem lại → **Xuất bản chiến dịch**

---

## Bước 6 — Liên kết trang web (Sitelinks) + Callout

**File copy-paste:** `vlasta-thong-tin-sitelinks-paste.txt`  
**File import Google Ads Editor:** `vlasta-thong-tin-sitelinks.csv`

### Cách thêm nhanh (2 phút)

1. Google Ads → chiến dịch **SL | Vlasta Thong Tin | Search**
2. **Mục tiêu** → **Phần mở rộng quảng cáo** → **Liên kết trang web** → **+**
3. Dán lần lượt 6 sitelink từ file paste (mỗi sitelink = 1 lần bấm +)

| Văn bản liên kết | URL |
|---|---|
| Bảng giá 2026 | `.../thong-tin#bang-gia` |
| Vị trí Phú Thuận | `.../thong-tin#vi-tri` |
| Mặt bằng căn hộ | `.../thong-tin#mat-bang` |
| Pháp lý dự án | `.../thong-tin#phap-ly` |
| Tiến độ xây dựng | `.../thong-tin#tien-do` |
| Nhận bảng giá | `.../thong-tin#lien-he` |

Base URL: `https://saigonliving.net/vlasta-premier/thong-tin`

**Lưu ý:** Sitelink trỏ `#section` **không ảnh hưởng** conversion tracking. Google có thể mất vài ngày mới hiển thị menu dưới quảng cáo.

### Callout (thêm cùng lúc)

```
Tư vấn độc lập
Bảng giá tham khảo
View sông Sài Gòn
Thanh toán 20%
602 căn hộ · 30 tầng
Nam Sài Gòn · Phú Thuận
```

### Extension Gọi

| Extension | Nội dung |
|---|---|
| **Gọi** | 0931781111 |

---

## Bước 7 — Từ khóa phủ định

**Từ khóa → Từ khóa phủ định** → thêm:

```
miễn phí, việc làm, tuyển dụng, cho thuê, thuê, lừa đảo, pdf, cọc, airbnb, nhà nghỉ
```

(File đầy đủ: `vlasta-thong-tin-negative-keywords.csv`)

---

## Bước 8 — GA + conversion form (landing `/thong-tin`)

**Cơ chế (không ảnh hưởng PageSpeed):**

| Sự kiện | Khi nào load |
|---|---|
| GA4 pageview | Lazy — sau scroll/click/touch hoặc tối đa 10s |
| Google Ads conversion | Chỉ khi **gửi form thành công** |
| gtag.js | **Một lần** — dùng chung loader, không load trùng |

1. **Mục tiêu → Lượt chuyển đổi → + Tạo**
2. Trang web `https://saigonliving.net` → **Gửi biểu mẫu liên hệ**
3. Thêm env Vercel → redeploy:

```
NEXT_PUBLIC_GA_ID=G-RMZ95E4B5N
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-18183709244
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=cDBnCP2KqMUcELzE1d5D
```

Không dùng thêm `GoogleTag.js` / gtag `afterInteractive` trên landing — tránh trùng trigger với `ThongTinTracking`.

---

## Checklist trước khi bật chiến dịch

- [ ] Final URL đúng `/thong-tin`
- [ ] 15 headline + 4 description đã dán
- [ ] ~29 từ khóa (có Văn Phú + Phú Thuận)
- [ ] Ngân sách 400k/ngày
- [ ] Tắt AI / mở rộng URL
- [ ] Extension gọi 0931781111
- [ ] Từ khóa phủ định đã thêm
