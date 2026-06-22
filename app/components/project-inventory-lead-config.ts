export type ProjectInventoryContactVariant =
  | "vlasta-premier"
  | "mizuki-park"
  | "the-peak-garden"
  | "eco-retreat"
  | "vinhomes-binh-chanh"
  | "tt-genesis";

type ProjectInventoryContactConfig = {
  projectName: string;
  source: string;
  description: string;
  shellClassName: string;
  eyebrowClassName: string;
  titleClassName: string;
  bodyClassName: string;
  fieldClassName: string;
};

export const projectInventoryContactConfig: Record<ProjectInventoryContactVariant, ProjectInventoryContactConfig> = {
  "vlasta-premier": {
    projectName: "Vlasta Premier",
    source: "Vlasta Premier Bottom Contact Form",
    description:
      "Saigon Living sẽ gửi 5 căn Vlasta Premier có giá và chính sách tốt nhất trong giỏ hàng tuần này — lọc theo loại căn, tầng, view và ngân sách Anh/Chị đang cân nhắc.",
    shellClassName: "luxury-card rounded-[2rem] border border-[#d9c79f]/60 bg-white p-6 md:p-8",
    eyebrowClassName: "text-[#8a6a2f]",
    titleClassName: "text-[#15110c]",
    bodyClassName: "text-[#5d554c]",
    fieldClassName: "border-black/10 bg-[#fbf8f2] focus:border-[#c9a45d]",
  },
  "mizuki-park": {
    projectName: "Mizuki Park",
    source: "Mizuki Park Bottom Contact Form",
    description:
      "Saigon Living sẽ gửi 5 căn Mizuki Park — Trellia Cove có giá và chính sách tốt nhất trong giỏ hàng tuần này, lọc theo loại căn và ngân sách Anh/Chị đang cân nhắc.",
    shellClassName: "luxury-card rounded-[2rem] border border-[#d9c79f]/60 bg-white p-6 md:p-8",
    eyebrowClassName: "text-[#8a6a2f]",
    titleClassName: "text-[#15110c]",
    bodyClassName: "text-[#5d554c]",
    fieldClassName: "border-black/10 bg-[#fbf8f2] focus:border-[#c9a45d]",
  },
  "the-peak-garden": {
    projectName: "The Peak Garden",
    source: "The Peak Garden Bottom Contact Form",
    description:
      "Saigon Living sẽ gửi 5 căn The Peak Garden có giá và chính sách tốt nhất trong giỏ hàng tuần này — lọc theo tầng, view và ngân sách Anh/Chị đang cân nhắc.",
    shellClassName: "luxury-card rounded-[2rem] border border-[#d9c79f]/60 bg-white p-6 md:p-8",
    eyebrowClassName: "text-[#8a6a2f]",
    titleClassName: "text-[#15110c]",
    bodyClassName: "text-[#5d554c]",
    fieldClassName: "border-black/10 bg-[#fbf8f2] focus:border-[#c9a45d]",
  },
  "eco-retreat": {
    projectName: "Eco Retreat",
    source: "Eco Retreat Bottom Contact Form",
    description:
      "Saigon Living sẽ gửi 5 căn Eco Retreat có giá và chính sách tốt nhất trong giỏ hàng tuần này — từ căn hộ, nhà phố đến biệt thự theo ngân sách Anh/Chị đang cân nhắc.",
    shellClassName: "rounded-[2rem] border border-[#d9c79f]/60 bg-white p-6 shadow-[0_18px_60px_rgba(21,17,12,0.08)] md:p-8",
    eyebrowClassName: "text-[#6f7f3f]",
    titleClassName: "text-[#10251c]",
    bodyClassName: "text-[#5d554c]",
    fieldClassName: "border-[#d9c79f]/45 bg-[#fbf8f2] focus:border-[#6f7f3f]",
  },
  "vinhomes-binh-chanh": {
    projectName: "Vinhomes Bình Chánh",
    source: "Vinhomes Bình Chánh Bottom Contact Form",
    description:
      "Saigon Living sẽ gửi 5 phương án theo dõi sớm và giá tham khảo khi có giỏ hàng rõ hơn tại Vinhomes Bình Chánh — đúng lúc Anh/Chị đang cân nhắc khu đô thị Hưng Long 1.512 ha.",
    shellClassName: "luxury-card rounded-[2rem] border border-[#d9c79f]/60 bg-white p-6 md:p-8",
    eyebrowClassName: "text-[#8a6a2f]",
    titleClassName: "text-[#15110c]",
    bodyClassName: "text-[#5d554c]",
    fieldClassName: "border-black/10 bg-[#fbf8f2] focus:border-[#c9a45d]",
  },
  "tt-genesis": {
    projectName: "TT Genesis",
    source: "TT Genesis Bottom Contact Form",
    description:
      "Saigon Living sẽ gửi 5 căn TT Genesis có giá và chính sách tốt nhất trong giỏ hàng tuần này — lọc theo loại căn và ngân sách từ khoảng 2,8 tỷ.",
    shellClassName: "luxury-card rounded-[2rem] border border-[#d9c79f]/60 bg-white p-6 md:p-8",
    eyebrowClassName: "text-[#8a6a2f]",
    titleClassName: "text-[#15110c]",
    bodyClassName: "text-[#5d554c]",
    fieldClassName: "border-black/10 bg-[#fbf8f2] focus:border-[#c9a45d]",
  },
};

export function isProjectInventoryContactVariant(
  variant: string,
): variant is ProjectInventoryContactVariant {
  return variant in projectInventoryContactConfig;
}
