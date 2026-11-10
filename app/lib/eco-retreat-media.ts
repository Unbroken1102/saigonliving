/** Eco Retreat — YouTube & thumbnail (cập nhật videoId sau khi đăng lên kênh Saigon Living) */
export const ecoRetreatMedia = {
  youtube: {
    /** Kênh Saigon Living — playlist: Eco Retreat · Giá & chuyển nhượng */
    channelUrl: "https://www.youtube.com/channel/UCpqhjhtWanKwiLmbb-cF_LA",
    progressVideoId: "lzovYpjLJv8",
    /** Điền sau khi upload video giá CN — ví dụ: "abc123xyz" */
    transferPriceVideoId: "" as string,
  },
  transferPriceVideo: {
    title: "Giá chuyển nhượng Eco Retreat tháng 8/2026 | Sky Retreat & 2PN Vườn Mây",
    caption:
      "Tóm tắt giá chuyển nhượng Sky Retreat (studio 1,9 tỷ · 1PN 2 tỷ · 2PN 3,8 tỷ) và 2PN Vườn Mây ~4,4 tỷ — giá đang rao, cần đối chiếu mã căn.",
    thumbnail: "/assets/eco-retreat/sky-retreat/mat-bang-tang-s1.png",
    blogHref: "/blog/eco-retreat-cap-nhat-gia-chuyen-nhuong-2026",
    inventoryHref: "/gio-hang/eco-retreat?loai=chuyen-nhuong",
  },
} as const;

export function ecoRetreatYoutubeEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
}

export function ecoRetreatYoutubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}
