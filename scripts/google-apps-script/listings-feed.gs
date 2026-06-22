const LISTINGS_CONFIG = {
  SPREADSHEET_ID: "1_Jt2sT3B8lfSoFlPPExybT41fGNjYPNh7wPoI6vDGGg",
  SHEET_NAME: "Listings",
  TIME_ZONE: "Asia/Ho_Chi_Minh",
};

const LISTING_HEADERS = [
  "id",
  "type",
  "status",
  "project",
  "project_slug",
  "district",
  "unit_type",
  "area",
  "price",
  "price_note",
  "description",
  "image_1",
  "image_2",
  "image_3",
  "image_4",
  "image_5",
  "featured",
  "updated_at",
];

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Saigon Living")
    .addItem("Setup Listings sheet", "setupListingsSheet")
    .addItem("Preview listings JSON", "previewListingsJson")
    .addToUi();
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

  const sampleRows = [
    [
      "tt-genesis-1pn-01",
      "dang-ban",
      "published",
      "TT Genesis",
      "/tt-genesis",
      "Nhà Bè",
      "Căn 1PN",
      "~50m²",
      "Từ ~2,9 tỷ",
      "Chưa VAT, tùy tầng và view",
      "Dòng 1PN giai đoạn đầu, phù hợp khách ngân sách 3 tỷ.",
      "https://saigonliving.net/assets/tt-genesis/tt-genesis-phoi-canh-2026.jpg",
      "",
      "",
      "",
      "",
      "TRUE",
      "2026-06-20",
    ],
    [
      "mizuki-trellia-2pn-01",
      "dang-ban",
      "published",
      "Mizuki Park",
      "/mizuki-park",
      "Bình Chánh",
      "Căn 2PN",
      "~68m² thông thủy",
      "~5,25 tỷ",
      "Trellia Cove",
      "Compound đã hình thành, phù hợp gia đình trẻ.",
      "https://saigonliving.net/assets/mizuki-park/mizuki-park-can-ho-hien-huu.jpg",
      "",
      "",
      "",
      "",
      "TRUE",
      "2026-06-20",
    ],
  ];

  sheet.getRange(2, 1, sampleRows.length, LISTING_HEADERS.length).setValues(sampleRows);
  SpreadsheetApp.getUi().alert("Da tao sheet Listings voi header va 2 dong mau.");
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
  SpreadsheetApp.getUi().alert(JSON.stringify({ count: listings.length, listings: listings.slice(0, 2) }, null, 2));
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

  if (!data.id || !data.type || !data.project) {
    return null;
  }

  const images = ["image_1", "image_2", "image_3", "image_4", "image_5"]
    .map((key) => String(data[key] || "").trim())
    .filter(Boolean);

  return {
    id: String(data.id).trim(),
    type: String(data.type).trim(),
    status: String(data.status || "published").trim(),
    project: String(data.project).trim(),
    projectSlug: String(data.project_slug || "").trim() || undefined,
    district: String(data.district || "TP.HCM").trim(),
    unitType: String(data.unit_type || "").trim(),
    area: String(data.area || "").trim() || undefined,
    price: String(data.price || "").trim(),
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
