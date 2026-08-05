/** Map desktop asset paths to pre-generated mobile variants. */
export function getMobileImageSrc(src) {
  if (!src || typeof src !== "string") {
    return undefined;
  }

  if (src.includes("/assets/vlasta-thong-tin/renders/")) {
    return src.replace("/renders/", "/renders/mobile/");
  }

  if (src.includes("/assets/vlasta-thong-tin/mat-bang/")) {
    return src.replace("/mat-bang/", "/mat-bang/mobile/");
  }

  if (src === "/assets/tiendo5.jpg") {
    return "/assets/vlasta-thong-tin/mobile/tiendo5.jpg";
  }

  return undefined;
}

export function getMobileImageWebpSrc(src) {
  const mobile = getMobileImageSrc(src);
  if (!mobile) {
    return undefined;
  }

  if (/\.jpe?g$/i.test(mobile)) {
    return mobile.replace(/\.jpe?g$/i, ".webp");
  }

  return undefined;
}
