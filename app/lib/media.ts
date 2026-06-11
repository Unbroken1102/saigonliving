const asset = (path: string) => encodeURI(path);

export const media = {
  video: {
    hero: "/assets/Video/hero.mp4",
    locationEmbed: "https://www.youtube.com/embed/hgcSRJMupjc?autoplay=1&rel=0&modestbranding=1",
    locationYoutube: "https://www.youtube.com/watch?v=hgcSRJMupjc",
  },
  images: {
    hero: "/assets/optimized/hero.jpg",
    marina: "/assets/optimized/marina.jpg",
    balcony: "/assets/optimized/balcony.jpg",
    poolDaybed: "/assets/optimized/pool-daybed.jpg",
    pool: "/assets/optimized/pool.jpg",
    poolBar: "/assets/optimized/pool-bar.jpg",
    skyAmenity: "/assets/optimized/sky-amenity.jpg",
    location: "/assets/optimized/location.jpg",
    progress: "/assets/tiendo.jpg",
    progressRecent: "/assets/tiendo5.jpg",
    planA2Br: "/assets/optimized/plan-a-2br.jpg",
    planA3Br: "/assets/optimized/plan-a-3br.jpg",
    planB1Br: "/assets/optimized/plan-b-1br.jpg",
    planB2Br: "/assets/optimized/plan-b-2br.jpg",
  },
  gallery: [
    {
      src: "/assets/optimized/hero.jpg",
      alt: "Toàn cảnh dự án Vlasta Premier",
    },
    {
      src: "/assets/optimized/marina.jpg",
      alt: "Không gian bến thuyền và cảnh quan ven sông",
    },
    {
      src: "/assets/optimized/pool-daybed.jpg",
      alt: "Ghế thư giãn và không gian nghỉ dưỡng",
    },
    {
      src: "/assets/optimized/pool.jpg",
      alt: "Bể bơi trung tâm phong cách resort",
    },
    {
      src: "/assets/optimized/balcony.jpg",
      alt: "Ban công căn hộ với tầm nhìn thoáng",
    },
    {
      src: "/assets/optimized/pool-bar.jpg",
      alt: "Pool bar và tiện ích nghỉ dưỡng",
    },
  ],
  overviewVisuals: [
    {
      title: "Tổng thể tháp đôi",
      src: "/assets/optimized/overview-towers.jpg",
      alt: "Tổng thể tháp đôi Vlasta Premier Phú Thuận",
      description: "Phối cảnh tổng thể giúp khách hàng hình dung quy mô, kiến trúc và cảnh quan chính của dự án.",
    },
    {
      title: "Mặt tiền Đào Trí",
      src: "/assets/optimized/overview-dao-tri.jpg",
      alt: "Phối cảnh Vlasta Premier nhìn từ đường Đào Trí",
      description: "Góc nhìn từ trục Đào Trí thể hiện vị thế cửa ngõ Nam Sài Gòn và kết nối quanh dự án.",
    },
    {
      title: "Không gian ven nước",
      src: "/assets/optimized/overview-marina.jpg",
      alt: "Không gian ven nước và cảnh quan Vlasta Premier",
      description: "Cảnh quan ven nước tạo cảm giác nghỉ dưỡng, cân bằng giữa nhịp sống đô thị và trải nghiệm riêng tư.",
    },
    {
      title: "View ban công",
      src: "/assets/optimized/overview-balcony.jpg",
      alt: "View ban công căn hộ Vlasta Premier",
      description: "Tầm nhìn từ căn hộ là yếu tố quan trọng khi so sánh tầng, hướng, view và giá trị sử dụng lâu dài.",
    },
  ],
  amenityVisuals: [
    {
      title: "Bể bơi Panorama",
      src: "/assets/optimized/amenity-pool.jpg",
      alt: "Bể bơi Panorama tại Vlasta Premier",
      description: "Không gian hồ bơi trung tâm theo tinh thần nghỉ dưỡng, phù hợp gia đình và cư dân cần trải nghiệm thư giãn hằng ngày.",
    },
    {
      title: "Business Lounge",
      src: "/assets/optimized/amenity-business-lounge.jpg",
      alt: "Business Lounge tại Vlasta Premier",
      description: "Không gian tiếp khách và kết nối riêng tư, mang tinh thần lounge sang trọng trong khối tiện ích.",
    },
    {
      title: "Co-Working Space",
      src: "/assets/optimized/amenity-coworking.jpg",
      alt: "Co-Working Space tại Vlasta Premier",
      description: "Không gian làm việc hơn 1.000m2, phù hợp cư dân cần một môi trường làm việc linh hoạt ngay trong nội khu.",
    },
    {
      title: "Gym & Wellness",
      src: "/assets/optimized/amenity-gym.jpg",
      alt: "Phòng gym tại Vlasta Premier",
      description: "Khu fitness hiện đại, hỗ trợ nhịp sống năng động và chăm sóc sức khỏe hằng ngày.",
    },
    {
      title: "Yoga Studio",
      src: "/assets/optimized/amenity-yoga.jpg",
      alt: "Phòng yoga tại Vlasta Premier",
      description: "Không gian yoga ấm áp, tĩnh tại, phù hợp cho thiền, kéo giãn và tái tạo năng lượng.",
    },
    {
      title: "Golf 3D",
      src: "/assets/optimized/amenity-golf.jpg",
      alt: "Phòng Golf 3D tại Vlasta Premier",
      description: "Golf simulator lounge dành cho cư dân yêu thể thao, luyện tập và giải trí trong không gian riêng biệt.",
    },
  ],
  amenityCards: [
    {
      title: "Bể bơi Panorama tầng 5",
      src: "/assets/optimized/amenity-pool.jpg",
      alt: "Bể bơi Panorama tầng 5 Vlasta Premier",
    },
    {
      title: "Business Lounge",
      src: "/assets/optimized/amenity-business-lounge.jpg",
      alt: "Không gian Business Lounge phong cách cao cấp tại Vlasta Premier",
    },
    {
      title: "Co-Working Space hơn 1.000m2",
      src: "/assets/optimized/amenity-coworking.jpg",
      alt: "Không gian co-working và tiện ích cao tầng Vlasta Premier",
    },
    {
      title: "Phòng gym",
      src: "/assets/optimized/amenity-gym.jpg",
      alt: "Không gian wellness và thư giãn tại Vlasta Premier",
    },
    {
      title: "Phòng yoga",
      src: "/assets/optimized/amenity-yoga.jpg",
      alt: "Không gian yoga và chăm sóc sức khỏe Vlasta Premier",
    },
    {
      title: "Phòng Golf 3D",
      src: "/assets/optimized/amenity-golf.jpg",
      alt: "Tiện ích giải trí cao cấp tại Vlasta Premier",
    },
    {
      title: "Phòng phim mini",
      src: "/assets/optimized/amenity-cinema.jpg",
      alt: "Không gian giải trí riêng tư tại Vlasta Premier",
    },
    {
      title: "Phòng thư viện",
      src: "/assets/optimized/amenity-library.jpg",
      alt: "Không gian đọc sách và thư giãn tại Vlasta Premier",
    },
  ],
  floorLayouts: [
    {
      title: "Tháp A - căn 2PN",
      src: "/assets/optimized/plan-a-2br.jpg",
      alt: "Mặt bằng căn 2 phòng ngủ tháp A Vlasta Premier",
      note: "Layout tham khảo cho nhóm khách cần căn hộ cân bằng giữa ở thực và thanh khoản.",
    },
    {
      title: "Tháp A - căn 3PN",
      src: "/assets/optimized/plan-a-3br.jpg",
      alt: "Mặt bằng căn 3 phòng ngủ tháp A Vlasta Premier",
      note: "Layout phù hợp gia đình cần không gian rộng hơn, ưu tiên công năng và tầm nhìn.",
    },
    {
      title: "Tháp B - căn 1PN",
      src: "/assets/optimized/plan-b-1br.jpg",
      alt: "Mặt bằng căn 1 phòng ngủ tháp B Vlasta Premier",
      note: "Layout gọn cho khách độc thân, chuyên gia hoặc mục tiêu cho thuê.",
    },
    {
      title: "Tháp B - căn 2PN",
      src: "/assets/optimized/plan-b-2br.jpg",
      alt: "Mặt bằng căn 2 phòng ngủ tháp B Vlasta Premier",
      note: "Layout phổ biến cho gia đình trẻ hoặc khách mua giữ tài sản tại Nam Sài Gòn.",
    },
  ],
  towerFloorPlans: [
    {
      title: "Mặt bằng tầng điển hình",
      src: asset("/assets/mat bang tang.jpg"),
      alt: "Mặt bằng tầng điển hình Vlasta Premier",
      note: "Tổng quan cách tổ chức mặt bằng tầng, lõi thang, hành lang và vị trí các căn hộ.",
    },
    {
      title: "Mặt bằng tầng 2",
      src: asset("/assets/mat bang tang 2.jpg"),
      alt: "Mặt bằng tầng 2 Vlasta Premier",
      note: "Tham khảo cách bố trí tầng thấp, khu vực chức năng và luồng di chuyển trong tòa nhà.",
    },
    {
      title: "Mặt bằng tầng tháp B",
      src: asset("/assets/mat bang tang thap b.jpg"),
      alt: "Mặt bằng tầng tháp B Vlasta Premier",
      note: "Mặt bằng riêng tháp B giúp khách mua so sánh vị trí căn, hướng nhìn và khoảng cách tới lõi thang.",
    },
  ],
};
