# Google Ads — Vlasta Premier /thong-tin

Landing: https://saigonliving.net/vlasta-premier/thong-tin

## File trong thư mục này

| File | Dùng để |
|---|---|
| **`huong-dan-setup.md`** | Hướng dẫn từng bước (đọc file này trước) |
| **`tu-khoa-paste.txt`** | Copy-paste từ khóa vào Google Ads (có Văn Phú + Phú Thuận) |
| **`responsive-search-ads.txt`** | 15 headline + 4 description (disclaimer mềm) |
| `campaign-settings.md` | Tóm tắt cài đặt chiến dịch |
| `vlasta-thong-tin-import.csv` | Import qua Google Ads Editor (4 ad groups) |
| `vlasta-thong-tin-negative-keywords.csv` | Từ khóa phủ định |

## Tài khoản

| Tài khoản | ID |
|---|---|
| **Vlastar Văn Phú** (chiến dịch) | 193-067-4554 |
| Đô Thị Thủ Thiêm (MCC) | 635-688-7691 |

## Copy quảng cáo — nguyên tắc

- **Headline:** Vlasta, Văn Phú, Phú Thuận, giá, CTA — **không số điện thoại**, không disclaimer
- **Description:** 3 dòng lợi ích + 1 dòng disclaimer mềm — **không số điện thoại** (≤90 ký tự/dòng)
- **Extension Gọi:** `0931781111` — đây là nơi duy nhất hiện số trên SERP
- **Website:** disclaimer đầy đủ đã có trên landing
- Lỗi policy số ĐT: xem `sua-loi-sdt-quang-cao.md`

## Conversion tracking (website)

Sau khi tạo conversion trong Google Ads, thêm Vercel:

```
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=xxxxxxxxxxxx
```

Gtag chỉ load khi gửi form lead thành công.
