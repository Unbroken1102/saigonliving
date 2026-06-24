# Social Auto Publisher

Automation nay dung Google Apps Script gan truc tiep voi Google Sheet. Khong can service account key, vi Google Cloud cua ban dang chan tao key bang policy `iam.disableServiceAccountKeyCreation`.

Script se:

1. Lay bai moi tu `https://saigonliving.net/sitemap.xml` va cac landing du an duoc khai bao trong `EXTRA_SOCIAL_PATHS`.
2. Lay title, description, image va noi dung bai viet.
3. Dung OpenAI de rewrite/tom tat thanh caption Facebook.
4. Ghi vao Google Sheet de luu log.
5. Len lich dang fanpage tu dong 2 bai/ngay luc 07:00 va 20:00 (gio Viet Nam).
6. Dang xong thi doi `status = POSTED` va luu `facebookPostId`.

Tat ca khung gio dang bai trong script duoc tinh theo mui gio `Asia/Ho_Chi_Minh`.

Van co che do thu cong neu can: tao `DRAFT`, sua caption, doi `status` thanh `APPROVED`, roi chay lenh dang rieng.

## File code

Copy toan bo noi dung file nay vao Apps Script:

`scripts/google-apps-script/social-auto-publisher.gs`

## Google Sheet

Sheet ban dang dung:

`https://docs.google.com/spreadsheets/d/1_Jt2sT3B8lfSoFlPPExybT41fGNjYPNh7wPoI6vDGGg/edit?gid=0#gid=0`

## Cai dat Apps Script

1. Mo Google Sheet.
2. Vao `Extensions` -> `Apps Script`.
3. Xoa code mac dinh trong file `Code.gs`.
4. Copy noi dung `scripts/google-apps-script/social-auto-publisher.gs` vao `Code.gs`.
5. Bam `Save`.
6. Refresh lai Google Sheet.
7. Se thay menu moi: `Saigon Living Auto Post`.

## Script properties

Trong Apps Script:

1. Bam `Project Settings` (bieu tuong banh rang).
2. Keo xuong `Script properties`.
3. Bam `Add script property`.
4. Them cac property sau:

```text
OPENAI_API_KEY=sk-...
FACEBOOK_PAGE_ACCESS_TOKEN=EA...
FACEBOOK_PAGE_ID=1154537577748632
```

`FACEBOOK_PAGE_ID` nay la Page ID tra ve tu Graph API cho page `Sai Gon Living`.

## Chay lan dau

Trong Google Sheet, dung menu `Saigon Living Auto Post`:

1. Chon `1. Setup sheet headers`.
2. Google se hoi quyen. Chap nhan bang tai khoan cua ban.
3. Chon `2. Auto draft + publish new posts`.
4. Script se lay bai moi/landing moi, tao caption, roi dang/hen lich luc 07:00 va 20:00 (toi da 2 bai/ngay).

Neu vua cap nhat lai cac URL cu va muon dang lai len fanpage:

1. Chon `Reschedule updated The Peak posts`.
2. Script se tao dong moi `SCHEDULED` cho cac URL trong `UPDATED_SOCIAL_PATHS`, bo qua viec URL da tung co trong Sheet.
3. Neu URL da co mot dong `SCHEDULED` trong tuong lai, script se `skipped` URL do de tranh tao trung lich.

Neu muon tu dong moi ngay:

1. Chon menu `Create daily auto post trigger`.
2. Moi ngay khoang 06:00 gio Viet Nam, script se tu kiem tra bai moi va hen 2 bai luc 07:00 va 20:00.
3. Neu khong co bai moi thi script khong dang gi.

Neu bai o trang thai `SCHEDULED` ma den gio chua dang:

1. Chon menu `Create scheduled publish watch (15 min)` de bat trigger kiem tra moi 15 phut.
2. Hoac chon `Publish due scheduled rows` de dang ngay cac bai da qua gio hen.

Ly do thuong gap khi `SCHEDULED` khong tu dang:

- Chua bat trigger watch 15 phut.
- Trigger mot lan theo tung gio hen da fail hoac vuot quota Apps Script.
- Facebook token het han hoac thieu quyen.

Neu muon quay lai duyet tay:

1. Chon `Create draft captions only`.
2. Sheet se co cac dong `DRAFT`.
3. Ban doc/sua cot `selectedCaption`.
4. Dong nao muon dang thi doi `status` thanh `APPROVED`.
5. Chon `Publish APPROVED rows only`.

## Lay quyen Facebook

Can Page access token co quyen dang bai:

- `pages_manage_posts`
- `pages_read_engagement`

Fanpage:

`https://www.facebook.com/profile.php?id=61590951983725`

Graph API Page ID dung de dang bai:

`1154537577748632`

Neu token het han hoac thieu quyen, dong trong Sheet se bi doi thanh `ERROR` va cot `error` se ghi ly do Facebook tra ve.

## Trang thai trong Sheet

- `DRAFT`: moi tao, chua dang.
- `APPROVED`: ban da duyet, lan chay tiep theo se dang len fanpage.
- `SCHEDULED`: da tao caption va hen gio dang.
- `POSTED`: da dang thanh cong.
- `ERROR`: dang that bai, xem cot `error`.

Cot `selectedCaption` la caption script se dung khi dang. Che do auto se tu dien cot nay bang `captionSocial`.
