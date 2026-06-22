# Analytics Daily Reporter

Automation doc GA4 + Google Search Console vao Google Sheet, khong can service account key.

Script se:

1. Lay GA4 realtime: active users dang online, top trang dang xem.
2. Lay GA4 hom nay: users, sessions, page views, top pages.
3. Lay GSC hom nay (partial) va hom qua (on dinh hon): impressions, clicks, CTR, position, top queries.
4. Ghi vao Google Sheet.
5. Mo Web App de Cursor/CLI doc bang `npm run analytics:report` hoac `npm run analytics:live`.

## File code

- `scripts/google-apps-script/analytics-daily-reporter.gs`
- `scripts/google-apps-script/appsscript-analytics.json` (manifest tham khao)

## Google Sheet

Dung cung Sheet dang co:

`https://docs.google.com/spreadsheets/d/1_Jt2sT3B8lfSoFlPPExybT41fGNjYPNh7wPoI6vDGGg/edit`

Script tao 4 tab:

- `Analytics_Daily`
- `GSC_Queries`
- `GA_Pages`
- `GA_Live`

## Cai dat Apps Script (1 lan)

1. Mo Google Sheet tren.
2. Vao `Extensions` -> `Apps Script`.
3. Neu da co `social-auto-publisher.gs`, them file moi:
   - Bam `+` -> `Script`
   - Dat ten: `Analytics`
   - Copy noi dung `analytics-daily-reporter.gs` vao file nay
4. Mo `Project Settings` -> `Scopes` va dam bao co:
   - `https://www.googleapis.com/auth/spreadsheets`
   - `https://www.googleapis.com/auth/webmasters.readonly`
   - `https://www.googleapis.com/auth/analytics.readonly`

   Hoac tao file `appsscript.json` trong editor (View -> Show manifest file) va copy tu `appsscript-analytics.json`, roi merge scopes neu da co script khac.

5. Trong `Script properties`, them:

```text
GA4_PROPERTY_ID=123456789
```

`GA4_PROPERTY_ID` la **so** property GA4, khong phai `G-RMZ95E4B5N`.

Cach lay:

1. Vao [Google Analytics](https://analytics.google.com/)
2. Admin -> Property Settings
3. Copy **Property ID** (chi so, vi du `512345678`)

6. Trong `social-auto-publisher.gs`, them dong nay vao cuoi ham `onOpen()`:

```javascript
registerAnalyticsMenu_();
```

7. Save project, refresh Sheet. Se thay menu `Saigon Living Analytics`.

## Chay lan dau

Trong Google Sheet:

1. Menu `Saigon Living Analytics` -> `1. Setup analytics sheets`
2. Google hoi quyen Search Console + Analytics -> Chap nhan
3. Chon `2. Run daily report now`
4. Chon `3. Log GA realtime snapshot` neu muon test realtime

Neu bao loi quyen:

- Tai khoan Google dang nhap phai co quyen doc Search Console property `sc-domain:saigonliving.net`
- Tai khoan phai co quyen doc GA4 property `G-RMZ95E4B5N`

## Trigger tu dong

Menu `Saigon Living Analytics` -> `Create daily trigger (08:00)`

Moi ngay 08:00 gio Viet Nam, script tu ghi snapshot vao Sheet.

## Deploy Web App cho Cursor CLI

1. Trong Apps Script: `Deploy` -> `New deployment`
2. Type: `Web app`
3. Execute as: `Me`
4. Who has access: `Only myself`
5. Deploy va copy URL dang:

```text
https://script.google.com/macros/s/AKfycb.../exec
```

6. Tao file `.env.local` trong project:

```text
ANALYTICS_WEB_APP_URL=https://script.google.com/macros/s/AKfycb.../exec
```

## Dung trong Cursor / terminal

```bash
npm run analytics:live
```

GA4 realtime: active users ngay luc chay, top trang dang xem.

```bash
npm run analytics:report
```

Tong hop: GA hom nay + GSC hom nay (partial) + GSC hom qua (on dinh hon).

```bash
npm run analytics:daily
```

Giong `analytics:report` nhung dong thoi ghi vao Google Sheet.

## Web App actions

| action | Mo ta |
|---|---|
| `summary` | Mac dinh. Tra text tong hop cho chat |
| `live` | GA4 realtime |
| `report` | Chi doc, khong ghi Sheet |
| `daily` | Doc va ghi Sheet |

Vi du:

```text
https://script.google.com/macros/s/.../exec?action=live
```

## Gioi han can biet

| Nguon | Realtime? | Ghi chu |
|---|---|---|
| GA4 realtime | Co | Cap nhat trong vai phut |
| GA4 hom nay | Gan realtime | Cap nhat lien tuc trong ngay |
| GSC hom nay | Khong | Chi partial, co the thieu |
| GSC hom qua | Khong | On dinh hon, nen xem de phan tich tu khoa |

Search Console **khong co realtime** du dung script hay UI. Voi tu khoa/impressions, uu tien xem `yesterday` hoac `7 days` trong Sheet.

## Troubleshooting

### `Missing script property GA4_PROPERTY_ID`

Them property ID so vao Script properties.

### `Search Console API error 403`

Tai khoan chua duoc add vao Search Console property `saigonliving.net`.

### `GA4 API error 403`

Tai khoan chua duoc add vao GA4 property, hoac sai `GA4_PROPERTY_ID`.

### CLI bao `Missing ANALYTICS_WEB_APP_URL`

Deploy Web App va them URL vao `.env.local`.

### Web App tra HTML login page

Deployment phai la `Execute as: Me` va `Only myself`. Khi goi tu terminal, can dang nhap cung tai khoan Google da deploy. Neu can goi tu server khac, phai doi sang service account (hien tai policy Google Cloud cua ban dang chan tao key).
