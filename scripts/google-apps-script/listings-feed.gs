const LISTINGS_CONFIG = {
  SPREADSHEET_ID: "1_Jt2sT3B8lfSoFlPPExybT41fGNjYPNh7wPoI6vDGGg",
  SHEET_NAME: "Listings",
  TIME_ZONE: "Asia/Ho_Chi_Minh",
};

// Cot co ban + description — anh dat trong public/assets/listings/{id}/
const LISTING_HEADERS = ["id", "type", "status", "project", "unit_type", "price", "description"];

const PROJECT_SLUG_BY_KEY = {
  "mizuki park": "/mizuki-park",
  mizuki: "/mizuki-park",
  "the peak garden": "/the-peak-garden",
  "tt genesis": "/tt-genesis",
  "vlasta premier": "/vlasta-premier",
  vlasta: "/vlasta-premier",
  "eco retreat": "/eco-retreat",
};

function resolveProjectSlug_(project, explicitSlug) {
  const slug = String(explicitSlug || "").trim();
  if (slug) {
    return slug.indexOf("/") === 0 ? slug : "/" + slug;
  }

  const key = String(project || "").trim().toLowerCase();
  if (PROJECT_SLUG_BY_KEY[key]) {
    return PROJECT_SLUG_BY_KEY[key];
  }

  const slugified = "/" + key.replace(/\s+/g, "-");
  const known = Object.keys(PROJECT_SLUG_BY_KEY).map(function (name) {
    return PROJECT_SLUG_BY_KEY[name];
  });
  return known.indexOf(slugified) !== -1 ? slugified : undefined;
}

function registerListingsMenu_() {
  SpreadsheetApp.getUi()
    .createMenu("Saigon Living Listings")
    .addItem("Setup Listings sheet", "setupListingsSheet")
    .addItem("Seed 2 dong mau (ban + thue)", "seedTwoListingsSample")
    .addItem("Preview listings JSON", "previewListingsJson")
    .addToUi();
}

function seedTwoListingsSample() {
  const spreadsheet = SpreadsheetApp.openById(LISTINGS_CONFIG.SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(LISTINGS_CONFIG.SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(LISTINGS_CONFIG.SHEET_NAME);
  }

  sheet.clear();
  sheet.getRange(1, 1, 1, LISTING_HEADERS.length).setValues([LISTING_HEADERS]);
  sheet.setFrozenRows(1);
  sheet.setColumnWidths(1, LISTING_HEADERS.length, 160);
  sheet.setColumnWidth(1, 220);
  sheet.setColumnWidth(4, 180);
  sheet.setColumnWidth(6, 140);
  sheet.setColumnWidth(7, 320);

  const sampleRows = [
    [
      "vlasta-1pn-01",
      "dang-ban",
      "published",
      "Vlasta Premier",
      "Căn 1PN",
      "Từ ~3,2 tỷ",
      "Căn 1PN ven sông Đào Trí, phù hợp khách ngân sách ~3 tỷ muốn vào Quận 7.",
    ],
    [
      "mizuki-2pn-thue-01",
      "cho-thue",
      "published",
      "Mizuki Park",
      "Căn 2PN",
      "Liên hệ",
      "Tham khảo căn 2PN cho thuê tại Mizuki — phù hợp khách muốn ở thử khu compound Nam Sài Gòn.",
    ],
  ];

  sheet.getRange(2, 1, sampleRows.length + 1, LISTING_HEADERS.length).setValues(sampleRows);
  sheet.getRange(1, 1, sampleRows.length + 1, LISTING_HEADERS.length).setFontFamily("Arial").setFontSize(10);
  sheet.getRange(1, 1, 1, LISTING_HEADERS.length).setFontWeight("bold").setBackground("#f3efe6");

  SpreadsheetApp.getUi().alert(
    "Da tao 2 dong mau:\n" +
      "1. dang-ban — Vlasta Premier 1PN\n" +
      "2. cho-thue — Mizuki Park 2PN\n\n" +
      "Anh: public/assets/listings/{id}/ tren site.",
  );
}

function setupListingsSheet() {
  const spreadsheet = SpreadsheetApp.openById(LISTINGS_CONFIG.SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(LISTINGS_CONFIG.SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(LISTINGS_CONFIG.SHEET_NAME);
  }

  sheet.clear();
  sheet.getRange(1, 1, 1, LISTING_HEADERS.length).setValues([LISTING_HEADERS]);
  sheet.setFrozenRows(1);
  sheet.setColumnWidths(1, LISTING_HEADERS.length, 160);
  sheet.setColumnWidth(1, 220);
  sheet.setColumnWidth(4, 180);
  sheet.setColumnWidth(6, 140);
  sheet.setColumnWidth(7, 320);

  const sampleRows = [
    [
      "tt-genesis-1pn-01",
      "dang-ban",
      "published",
      "TT Genesis",
      "Căn 1PN",
      "Từ ~2,9 tỷ",
      "Dòng 1PN giai đoạn đầu, phù hợp khách ngân sách 3 tỷ muốn vào khu Nam gần Phú Mỹ Hưng.",
    ],
    [
      "peak-garden-1pn-01",
      "dang-ban",
      "published",
      "The Peak Garden",
      "Căn 1PN",
      "Từ ~3,63 tỷ",
      "Căn hộ Quận 7 gần Phú Mỹ Hưng, wellness nội khu — dễ so với TT Genesis và Vlasta cùng ngân sách.",
    ],
    [
      "mizuki-trellia-2pn-01",
      "dang-ban",
      "published",
      "Mizuki Park",
      "Căn 2PN",
      "~5,25 tỷ",
      "Compound đã hình thành, phù hợp gia đình trẻ muốn ở thật hoặc cho thuê ổn định tại khu Nam.",
    ],
    [
      "vlasta-1pn-cn-01",
      "chuyen-nhuong",
      "published",
      "Vlasta Premier",
      "Căn 1PN",
      "Liên hệ",
      "Căn chuyển nhượng tại dự án ven sông Đào Trí. Cần đối chiếu pháp lý, tiến độ và lịch thanh toán còn lại.",
    ],
    [
      "mizuki-2pn-cn-01",
      "chuyen-nhuong",
      "published",
      "Mizuki Park",
      "Căn 2PN",
      "Liên hệ",
      "Căn chuyển nhượng Mizuki Park — nên kiểm tra phí, tiến độ và chính sách chuyển nhượng trước khi giữ chỗ.",
    ],
    [
      "mizuki-2pn-thue-01",
      "cho-thue",
      "published",
      "Mizuki Park",
      "Căn 2PN",
      "Liên hệ",
      "Tham khảo căn 2PN cho thuê tại Mizuki — phù hợp khách muốn ở thử khu compound Nam Sài Gòn.",
    ],
  ];

  sheet.getRange(2, 1, sampleRows.length + 1, LISTING_HEADERS.length).setValues(sampleRows);
  sheet.getRange(1, 1, sampleRows.length + 1, LISTING_HEADERS.length).setFontFamily("Arial").setFontSize(10);
  sheet.getRange(1, 1, 1, LISTING_HEADERS.length).setFontWeight("bold").setBackground("#f3efe6");

  SpreadsheetApp.getUi().alert(
    "Da tao tab Listings (co cot description) + 6 dong mau.\n\n" +
      "Anh: tha vao folder public/assets/listings/{id}/ tren site.\n" +
      "type: dang-ban | chuyen-nhuong | cho-thue",
  );
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({
      listings: getPublishedListings_(),
      fetchedAt: new Date().toISOString(),
      source: "saigonliving-listings-feed",
    }),
  ).setMimeType(ContentService.MimeType.JSON);
}

function previewListingsJson() {
  const listings = getPublishedListings_();
  SpreadsheetApp.getUi().alert(JSON.stringify({ count: listings.length, listings: listings.slice(0, 3) }, null, 2));
}

function getPublishedListings_() {
  const spreadsheet = SpreadsheetApp.openById(LISTINGS_CONFIG.SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(LISTINGS_CONFIG.SHEET_NAME);

  if (!sheet) {
    return [];
  }

  const values = sheet.getDataRange().getValues();
  if (values.length < 2) {
    return [];
  }

  const headers = values[0].map((header) => String(header).trim());
  const rows = values.slice(1);

  return rows
    .map((row) => rowToListing_(headers, row))
    .filter((listing) => listing && listing.status === "published");
}

function rowToListing_(headers, row) {
  const data = {};
  headers.forEach((header, index) => {
    data[header] = row[index];
  });

  if (!data.id || !data.type || !data.project || !data.unit_type || !data.price) {
    return null;
  }

  const project = String(data.project).trim();
  const images = ["image_1", "image_2", "image_3", "image_4", "image_5"]
    .map((key) => String(data[key] || "").trim())
    .filter(Boolean);

  return {
    id: String(data.id).trim(),
    type: String(data.type).trim(),
    status: String(data.status || "published").trim(),
    project: project,
    projectSlug: resolveProjectSlug_(project, data.project_slug),
    district: String(data.district || "TP.HCM").trim(),
    unitType: String(data.unit_type).trim(),
    area: String(data.area || "").trim() || undefined,
    price: String(data.price).trim(),
    priceNote: String(data.price_note || "").trim() || undefined,
    description: String(data.description || "").trim(),
    images: images,
    updatedAt: formatDate_(data.updated_at),
    featured: String(data.featured || "").toUpperCase() === "TRUE",
  };
}

function formatDate_(value) {
  if (!value) {
    return Utilities.formatDate(new Date(), LISTINGS_CONFIG.TIME_ZONE, "yyyy-MM-dd");
  }

  if (Object.prototype.toString.call(value) === "[object Date]") {
    return Utilities.formatDate(value, LISTINGS_CONFIG.TIME_ZONE, "yyyy-MM-dd");
  }

  return String(value).trim();
}
