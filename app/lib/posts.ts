import type { ComponentType } from "react";
import { project } from "@/app/lib/site";
import ArticleOne, { post as articleOne } from "@/app/content/posts/vlasta-premier-co-dang-dau-tu-khong.mdx";
import ArticleTwo, { post as articleTwo } from "@/app/content/posts/so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden.mdx";
import ArticleThree, { post as articleThree } from "@/app/content/posts/review-vi-tri-vlasta-premier.mdx";
import ArticleFour, { post as articleFour } from "@/app/content/posts/du-an-phu-hop-gia-dinh-tre-nam-sai-gon.mdx";
import ArticleFive, { post as articleFive } from "@/app/content/posts/vlasta-premier-co-tiem-nang-tang-gia-khong.mdx";
import ArticleSix, { post as articleSix } from "@/app/content/posts/so-sanh-mizuki-vlasta-premier-the-peak-garden.mdx";
import ArticleEight, { post as articleEight } from "@/app/content/posts/so-sanh-vlasta-premier-mizuki-park.mdx";
import ArticleNine, { post as articleNine } from "@/app/content/posts/so-sanh-vlasta-premier-the-peak-garden.mdx";
import ArticleTen, { post as articleTen } from "@/app/content/posts/so-sanh-vlasta-premier-sunshine-sky-city.mdx";
import ArticleEleven, { post as articleEleven } from "@/app/content/posts/so-sanh-vlasta-premier-sunshine-diamond-river.mdx";
import ArticleTwelve, { post as articleTwelve } from "@/app/content/posts/phap-ly-vlasta-premier-van-phu.mdx";
import ArticleThirteen, { post as articleThirteen } from "@/app/content/posts/gia-vlasta-premier-2026.mdx";
import ArticleFourteen, { post as articleFourteen } from "@/app/content/posts/gia-can-1pn-vlasta-premier-2026.mdx";
import ArticleFifteen, { post as articleFifteen } from "@/app/content/posts/vlasta-premier-co-so-hong-khong.mdx";
import ArticleSixteen, { post as articleSixteen } from "@/app/content/posts/vlasta-premier-co-nen-mua-de-o-khong.mdx";
import ArticleSeventeen, { post as articleSeventeen } from "@/app/content/posts/thanh-toan-vlasta-premier-20-den-khi-nhan-nha.mdx";
import ArticleEighteen, { post as articleEighteen } from "@/app/content/posts/co-2-ty-nen-mua-mizuki-72m2-hay-vlasta-premier.mdx";
import ArticleNineteen, { post as articleNineteen } from "@/app/content/posts/co-1-2-ty-mua-can-ho-sai-gon-2026.mdx";
import ArticleTwenty, { post as articleTwenty } from "@/app/content/posts/cac-yeu-to-chon-can-ho-phu-hop-hien-nay.mdx";
import ArticleTwentyOne, { post as articleTwentyOne } from "@/app/content/posts/ha-tang-bung-no-gia-tang-lai-suat-co-nen-mua-bat-dong-san.mdx";
import ArticleTwentyTwo, { post as articleTwentyTwo } from "@/app/content/posts/chan-dung-khach-hang-mua-bat-dong-san-khi-lai-suat-cao.mdx";
import ArticleTwentyThree, { post as articleTwentyThree } from "@/app/content/posts/vinhomes-binh-chanh-doc-quy-hoach-hung-long-1512ha.mdx";
import ArticleTwentyFour, { post as articleTwentyFour } from "@/app/content/posts/den-bu-tai-dinh-cu-vinhomes-binh-chanh-dong-tien-di-ve-dau.mdx";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  keywords: string[];
  toc: Array<{
    id: string;
    heading: string;
  }>;
};

export type BlogPost = BlogPostMeta & {
  Content: ComponentType;
};

export type FaqItem = {
  question: string;
  answer: string;
};

const registry: Array<{ meta: BlogPostMeta; Content: ComponentType }> = [
  { meta: articleTwentyFour, Content: ArticleTwentyFour },
  { meta: articleTwentyThree, Content: ArticleTwentyThree },
  { meta: articleTwentyTwo, Content: ArticleTwentyTwo },
  { meta: articleTwentyOne, Content: ArticleTwentyOne },
  { meta: articleTwenty, Content: ArticleTwenty },
  { meta: articleNineteen, Content: ArticleNineteen },
  { meta: articleEighteen, Content: ArticleEighteen },
  { meta: articleFourteen, Content: ArticleFourteen },
  { meta: articleFifteen, Content: ArticleFifteen },
  { meta: articleSixteen, Content: ArticleSixteen },
  { meta: articleSeventeen, Content: ArticleSeventeen },
  { meta: articleThirteen, Content: ArticleThirteen },
  { meta: articleTwelve, Content: ArticleTwelve },
  { meta: articleOne, Content: ArticleOne },
  { meta: articleTwo, Content: ArticleTwo },
  { meta: articleThree, Content: ArticleThree },
  { meta: articleFour, Content: ArticleFour },
  { meta: articleFive, Content: ArticleFive },
  { meta: articleSix, Content: ArticleSix },
  { meta: articleEight, Content: ArticleEight },
  { meta: articleNine, Content: ArticleNine },
  { meta: articleTen, Content: ArticleTen },
  { meta: articleEleven, Content: ArticleEleven },
];

export const blogPosts: BlogPost[] = registry.map(({ meta, Content }) => ({
  ...meta,
  Content,
}));

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return blogPosts
    .filter((item) => item.slug !== post.slug)
    .map((item) => {
      const sharedKeywords = item.keywords.filter((keyword) =>
        post.keywords.some(
          (postKeyword) =>
            postKeyword.toLowerCase().includes(keyword.toLowerCase()) ||
            keyword.toLowerCase().includes(postKeyword.toLowerCase()),
        ),
      ).length;

      const categoryScore = item.category === post.category ? 4 : 0;
      const titleScore = item.title.includes("Vlasta Premier") ? 1 : 0;

      return {
        post: item,
        score: categoryScore + sharedKeywords + titleScore,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

export function getArticleFaqs(post: BlogPost): FaqItem[] {
  const customFaqMap: Record<string, FaqItem[]> = {
    "vinhomes-binh-chanh-doc-quy-hoach-hung-long-1512ha": [
      {
        question: "Thông tin khu đô thị 1.500 ha được cho là của Vinhomes ở Bình Chánh đã chính thức chưa?",
        answer:
          "Chưa nên xem là thông tin giao dịch chính thức. Bài viết dùng ngôn ngữ dự kiến/được cho là, dựa trên ảnh quy hoạch và tín hiệu thị trường; người mua cần đối chiếu với công bố chính thức, pháp lý, giá bán và chính sách tại thời điểm giao dịch.",
      },
      {
        question: "Quy mô khu đô thị tại Hưng Long - Bình Chánh dự kiến khoảng bao nhiêu?",
        answer:
          "Theo ảnh quy hoạch đang được phân tích, khu vực Hưng Long - Bình Chánh có quy mô khoảng 1.512,7 ha. Con số này cần được đối chiếu lại với hồ sơ/công bố chính thức khi dự án có thông tin đầy đủ hơn.",
      },
      {
        question: "Thời gian triển khai dự kiến là khi nào?",
        answer:
          "Thông tin hiện tại được ghi nhận theo hướng dự kiến là năm 2027. Mốc này có thể thay đổi theo pháp lý, tiến độ chuẩn bị dự án và thông báo chính thức từng giai đoạn.",
      },
      {
        question: "Có nên đặt cọc khi thông tin còn sớm không?",
        answer:
          "Không nên chuyển tiền hoặc đặt cọc chỉ dựa trên tin đồn hoặc ảnh quy hoạch. Giai đoạn này phù hợp để theo dõi, khảo sát thực địa, chuẩn bị dòng tiền và chờ thông tin pháp lý, sản phẩm, giá bán rõ ràng.",
      },
    ],
    "chan-dung-khach-hang-mua-bat-dong-san-khi-lai-suat-cao": [
      {
        question: "Lãi suất cao thì ai vẫn đang mua bất động sản?",
        answer:
          "Nhóm vẫn mua thường là người mua ở thật có dòng tiền ổn định, nhà đầu tư có tiền mặt mạnh, nhà đầu tư tin vào chu kỳ hạ tầng, khách muốn giữ tài sản dài hạn và người chọn sản phẩm có nhu cầu thuê thật.",
      },
      {
        question: "Nhà đầu tư tin vào hạ tầng có nên xuống tiền lúc này không?",
        answer:
          "Có thể cân nhắc nếu tài sản có vị trí hưởng lợi thật, pháp lý rõ, nhu cầu ở hoặc thuê thật, giá còn hợp lý và nhà đầu tư có đủ dòng tiền để giữ tài sản trong 3-5 năm.",
      },
      {
        question: "Lãi suất cao có làm thị trường bất động sản đứng lại không?",
        answer:
          "Không hoàn toàn. Lãi suất cao làm thị trường chọn lọc hơn, khiến nhóm vay quá sức hoặc mua lướt sóng chậm lại, nhưng nhóm có nhu cầu thật, vốn tốt và chiến lược rõ vẫn tiếp tục mua chọn lọc.",
      },
      {
        question: "Người mua nên kiểm tra gì trước khi xuống tiền trong giai đoạn này?",
        answer:
          "Nên kiểm tra dòng tiền sau ưu đãi lãi suất, quỹ dự phòng, pháp lý dự án, giá so với khu vực, khả năng cho thuê hoặc bán lại và kế hoạch giữ tài sản trong vài năm tới.",
      },
    ],
    "ha-tang-bung-no-gia-tang-lai-suat-co-nen-mua-bat-dong-san": [
      {
        question: "Hạ tầng bùng nổ có nên mua bất động sản ngay không?",
        answer:
          "Không nên mua chỉ vì thông tin hạ tầng. Người mua cần xem giá hiện tại đã phản ánh kỳ vọng hạ tầng chưa, khu vực có nhu cầu ở thật không, pháp lý có rõ không và dòng tiền có đủ an toàn để giữ tài sản dài hạn không.",
      },
      {
        question: "Lãi suất cao có nên vay mua nhà không?",
        answer:
          "Vẫn có thể vay nếu tỷ lệ vay vừa phải, thu nhập ổn định và đã tính được khoản trả sau ưu đãi. Nếu phải vay quá sâu hoặc chưa có quỹ dự phòng 6-12 tháng, người mua nên chậm lại để tránh áp lực dòng tiền.",
      },
      {
        question: "Ai phù hợp mua bất động sản trong giai đoạn này?",
        answer:
          "Nhóm phù hợp là người mua để ở thật, có vốn sẵn tốt, vay vừa phải, chọn dự án pháp lý rõ, vị trí có nhu cầu thật và có kế hoạch giữ tài sản từ 3-5 năm trở lên.",
      },
      {
        question: "Rủi ro lớn nhất khi mua theo câu chuyện hạ tầng là gì?",
        answer:
          "Rủi ro lớn nhất là giá đã tăng trước kỳ vọng, người mua vay quá sức và không giữ được tài sản đủ lâu để hưởng lợi từ hạ tầng. Vì vậy cần ưu tiên dòng tiền và biên an toàn thay vì FOMO.",
      },
    ],
    "cac-yeu-to-chon-can-ho-phu-hop-hien-nay": [
      {
        question: "Khi chọn căn hộ hiện nay cần xem những yếu tố nào?",
        answer:
          "Người mua nên xem dòng tiền, vị trí theo lịch sống thật, pháp lý, loại căn, chính sách thanh toán, tiện ích sử dụng thật và khả năng giữ tài sản hoặc cho thuê sau này.",
      },
      {
        question: "Có nên chọn căn hộ chỉ vì giá rẻ không?",
        answer:
          "Không nên. Giá rẻ chỉ là một phần của quyết định mua. Cần so thêm layout, tầng, view, pháp lý, tiến độ thanh toán, chi phí sau nhận nhà và khả năng giữ tài sản trong dài hạn.",
      },
      {
        question: "Dòng tiền khi mua căn hộ nên tính như thế nào?",
        answer:
          "Nên tính vốn ban đầu, khoản vay ngân hàng, lãi suất sau ưu đãi, chi phí nội thất, phí quản lý và quỹ dự phòng ít nhất 6 tháng để tránh bị áp lực sau khi ký hợp đồng.",
      },
      {
        question: "Nên chọn căn 1PN, 2PN hay 3PN?",
        answer:
          "Căn 1PN và 1PN+ phù hợp vốn gọn hoặc cho thuê; căn 2PN cân bằng cho gia đình trẻ; căn 3PN phù hợp gia đình cần không gian rộng và có ngân sách khỏe hơn.",
      },
    ],
    "co-1-2-ty-mua-can-ho-sai-gon-2026": [
      {
        question: "Có 1-2 tỷ tiền mặt còn mua được căn hộ Sài Gòn không?",
        answer:
          "Vẫn có thể mua, nhưng người mua thường cần dùng thêm vay ngân hàng, chọn căn diện tích nhỏ hơn hoặc chấp nhận đi xa hơn. Với mặt bằng giá 75-90 triệu/m2, căn hộ trong TP.HCM thường đã ở vùng tổng giá 4-6 tỷ.",
      },
      {
        question: "Vì sao căn hộ 3-4 tỷ ở TP.HCM ngày càng khó tìm?",
        answer:
          "Do mặt bằng giá căn hộ đã tăng, quỹ đất nội đô hạn chế và chi phí phát triển dự án cao hơn. Muốn tổng giá 3-4 tỷ, người mua thường phải chọn khu xa hơn như Bình Dương, Long An hoặc các khu ven.",
      },
      {
        question: "Vì sao Mizuki, The Peak Garden và Vlasta Premier vẫn có nhu cầu?",
        answer:
          "Mizuki mạnh ở quần thể xanh và cộng đồng cư dân; The Peak Garden mạnh ở vị trí gần Phú Mỹ Hưng và tổng giá dễ tiếp cận hơn; Vlasta Premier mạnh ở sản phẩm mới, thiết kế cao cấp, tiện ích khác biệt và chính sách thanh toán nhẹ.",
      },
    ],
    "co-2-ty-nen-mua-mizuki-72m2-hay-vlasta-premier": [
      {
        question: "Có 2 tỷ nên mua Mizuki 72m2 hay Vlasta Premier 50-58m2?",
        answer:
          "Nếu ưu tiên ở ngay và cần diện tích rộng, Mizuki 72m2 giá khoảng 4 tỷ hợp lý hơn. Nếu ưu tiên giữ dòng tiền trong bối cảnh lãi suất vay 11-14%/năm, mua sản phẩm mới và chỉ muốn trả trước khoảng 900 triệu, Vlasta Premier 50-58m2 đáng cân nhắc hơn.",
      },
      {
        question: "Vlasta Premier nhỏ hơn Mizuki thì có đáng mua không?",
        answer:
          "Vlasta Premier nhỏ hơn về diện tích trong cùng bài toán ngân sách, nhưng có lợi thế về sản phẩm mới, thiết kế cao cấp, tiện ích khác biệt và lịch thanh toán nhẹ hơn. Quyết định phụ thuộc vào việc người mua ưu tiên diện tích hay dòng tiền.",
      },
      {
        question: "Có nên dùng hết 2 tỷ để giảm khoản vay khi mua căn hộ không?",
        answer:
          "Không nên dùng hết vốn nếu chưa có quỹ dự phòng, nhất là khi lãi suất vay có thể ở mức 11-14%/năm. Người mua nên giữ lại một khoản tiền mặt đủ cho 6-12 tháng chi phí sinh hoạt, trả nợ và các khoản phát sinh sau khi mua nhà.",
      },
    ],
    "gia-can-1pn-vlasta-premier-2026": [
      {
        question: "Giá căn 1PN Vlasta Premier 2026 khoảng bao nhiêu?",
        answer:
          "Theo bảng giá dự kiến hiện có, căn 1PN và 1PN+ Vlasta Premier có diện tích khoảng 50.03-58.72m2, tổng giá dự kiến khoảng 4.35-5.74 tỷ tùy tầng, view, hướng và chính sách từng thời điểm.",
      },
      {
        question: "Căn 1PN Vlasta Premier phù hợp với ai?",
        answer:
          "Căn 1PN phù hợp khách độc thân, chuyên gia, vợ chồng trẻ hoặc nhà đầu tư cần sản phẩm tổng giá gọn hơn để cho thuê hoặc giữ tài sản tại khu Nam Sài Gòn.",
      },
      {
        question: "Khi chọn căn 1PN Vlasta Premier nên xem gì?",
        answer:
          "Nên xem layout, tầng, view, hướng, vị trí lõi thang, tiêu chuẩn bàn giao, chính sách thanh toán và tổng vốn thực tế thay vì chỉ chọn căn có giá thấp nhất.",
      },
    ],
    "vlasta-premier-co-so-hong-khong": [
      {
        question: "Vlasta Premier có sổ hồng không?",
        answer:
          "Với dự án đang triển khai, câu hỏi này nên được hiểu là kiểm tra nền tảng pháp lý để tiến tới cấp giấy chứng nhận sau khi dự án hoàn thành, nghiệm thu và bàn giao. Người mua nên xem giấy phép xây dựng, quy hoạch 1/500, nghĩa vụ tài chính, bảo lãnh ngân hàng và điều khoản sở hữu trong hợp đồng.",
      },
      {
        question: "Tên pháp lý của Vlasta Premier là gì?",
        answer:
          "Tên pháp lý chính thức của dự án là Khu chung cư thương mại và dịch vụ hỗn hợp New Tech. Vlasta Premier là tên thương mại được sử dụng trong truyền thông và tư vấn bán hàng.",
      },
      {
        question: "Cần kiểm tra giấy tờ nào trước khi mua Vlasta Premier?",
        answer:
          "Nên kiểm tra giấy phép xây dựng, quy hoạch 1/500, hồ sơ nghĩa vụ tài chính đất, bảo lãnh ngân hàng, tiến độ và hợp đồng mua bán cập nhật tại thời điểm giao dịch.",
      },
    ],
    "vlasta-premier-co-nen-mua-de-o-khong": [
      {
        question: "Vlasta Premier có nên mua để ở không?",
        answer:
          "Vlasta Premier đáng cân nhắc để ở nếu người mua ưu tiên khu Nam Sài Gòn, thiết kế căn hộ cao cấp, tiện ích khác biệt, môi trường sống riêng tư và lịch thanh toán nhẹ hơn giai đoạn đầu.",
      },
      {
        question: "Điểm mạnh khi mua ở Vlasta Premier là gì?",
        answer:
          "Điểm mạnh gồm thiết kế kính full-height, tiện ích như golf giả lập, hồ bơi muối điện phân, coworking khoảng 1.000m2, vị trí Phú Thuận và khả năng kết nối về Phú Mỹ Hưng, Quận 7, Nhà Bè.",
      },
      {
        question: "Ai nên cân nhắc kỹ trước khi mua Vlasta Premier để ở?",
        answer:
          "Khách có ngân sách quá sát hoặc chỉ muốn tìm căn giá thấp nhất khu vực nên so thêm các dự án khác, vì Vlasta Premier phù hợp hơn với nhóm ưu tiên chất lượng sống và trải nghiệm căn hộ.",
      },
    ],
    "thanh-toan-vlasta-premier-20-den-khi-nhan-nha": [
      {
        question: "Thanh toán Vlasta Premier chỉ đóng 20% đến khi nhận nhà là gì?",
        answer:
          "Đây là chính sách dự kiến giúp khách mua chỉ cần đóng khoảng 20% trước thời điểm nhận nhà. Khi nhận nhà vào quý IV/2027, khách hàng chỉ đóng thêm khoảng 10%, phần còn lại theo tiến độ và điều kiện cụ thể tại thời điểm ký.",
      },
      {
        question: "Ngân hàng hỗ trợ lãi suất Vlasta Premier trong bao lâu?",
        answer:
          "Theo chính sách bán hàng, ngân hàng có thể hỗ trợ lãi suất đủ 24 tháng kể từ khi ký hợp đồng mua bán. Nếu nhận nhà vào quý IV/2027, khách hàng vẫn còn khoảng 9 tháng sau nhận nhà được hỗ trợ theo điều kiện chương trình.",
      },
      {
        question: "Sau khi nhận nhà có thể ở hoặc cho thuê trong thời gian hỗ trợ lãi suất không?",
        answer:
          "Có. Trong thời gian còn hỗ trợ lãi suất sau khi nhận nhà, khách hàng có thể về ở hoặc khai thác cho thuê để tạo dòng tiền, trong khi chưa phải chịu thêm áp lực tài chính lớn từ khoản vay.",
      },
      {
        question: "Chính sách thanh toán nhẹ có phải lý do duy nhất để mua không?",
        answer:
          "Không. Chính sách thanh toán là lợi thế dòng tiền, nhưng người mua vẫn cần chọn đúng căn, đúng giá, đúng layout, đúng khả năng tài chính và kiểm tra pháp lý trước khi quyết định.",
      },
    ],
    "so-sanh-vlasta-premier-mizuki-park": [
      {
        question: "Nên mua Vlasta Premier hay Mizuki Park?",
        answer:
          "Nếu ưu tiên không gian xanh, quần thể lớn và giá dễ tiếp cận hơn, Mizuki Park là lựa chọn đáng xem. Nếu ưu tiên thiết kế căn hộ cao cấp, chất lượng bàn giao, tiện ích khác biệt và lịch thanh toán giãn, Vlasta Premier phù hợp hơn.",
      },
      {
        question: "Vlasta Premier có đắt hơn Mizuki Park không?",
        answer:
          "Vlasta Premier thường có mức giá cao hơn tùy loại căn, tầng và chính sách từng thời điểm. Khoản chênh cần được so với chất lượng bàn giao, thiết kế, tiện ích và lợi thế dòng tiền thanh toán.",
      },
      {
        question: "Mizuki Park mạnh hơn Vlasta Premier ở điểm nào?",
        answer:
          "Mizuki Park mạnh ở không gian xanh, quy mô quần thể, cảnh quan và môi trường sống yên tĩnh. Đây là lợi thế rõ với gia đình thích khu đô thị lớn và nhiều mảng xanh.",
      },
    ],
    "so-sanh-vlasta-premier-the-peak-garden": [
      {
        question: "Nên mua Vlasta Premier hay The Peak Garden?",
        answer:
          "The Peak Garden phù hợp với khách ưu tiên gần Phú Mỹ Hưng, ngân sách dễ tiếp cận và kỳ vọng hạ tầng tương lai. Vlasta Premier phù hợp hơn nếu ưu tiên thiết kế, chất lượng bàn giao, tiện ích cao cấp và lịch thanh toán giãn.",
      },
      {
        question: "The Peak Garden có lợi thế gì so với Vlasta Premier?",
        answer:
          "The Peak Garden có lợi thế về vị trí gần Phú Mỹ Hưng và mức giá thường dễ tiếp cận hơn. Tuy nhiên, khách mua nên kiểm tra kỹ layout, độ thoáng và chất lượng hoàn thiện thực tế.",
      },
      {
        question: "Vlasta Premier khác The Peak Garden ở điểm nào?",
        answer:
          "Vlasta Premier nổi bật ở định vị cao cấp hơn, hệ kính full-height, tiện ích khác biệt và lịch thanh toán nhẹ hơn giai đoạn đầu. Đây là lựa chọn hợp với khách đặt nặng trải nghiệm căn hộ.",
      },
    ],
    "so-sanh-vlasta-premier-sunshine-sky-city": [
      {
        question: "Vlasta Premier và Sunshine Sky City khác nhau ở điểm nào?",
        answer:
          "Sunshine Sky City mạnh ở vị trí gần Phú Mỹ Hưng và hệ tiện ích khu vực đã hình thành. Vlasta Premier mạnh ở thiết kế căn hộ, cảm giác riêng tư hơn, tiện ích khác biệt và chính sách thanh toán nhẹ hơn.",
      },
      {
        question: "Ai phù hợp với Sunshine Sky City hơn?",
        answer:
          "Sunshine Sky City phù hợp với khách muốn ở gần Phú Mỹ Hưng, ưu tiên tiện ích Quận 7 và chấp nhận quy mô cư dân lớn hơn.",
      },
      {
        question: "Ai phù hợp với Vlasta Premier hơn?",
        answer:
          "Vlasta Premier phù hợp với khách muốn dự án chọn lọc hơn, thiết kế đẹp, bàn giao chất lượng và có lịch thanh toán hỗ trợ dòng tiền tốt hơn.",
      },
    ],
    "so-sanh-vlasta-premier-sunshine-diamond-river": [
      {
        question: "Nên chọn Vlasta Premier hay Sunshine Diamond River?",
        answer:
          "Sunshine Diamond River phù hợp với khách thích khu phức hợp ven sông quy mô lớn và chấp nhận mặt bằng giá cao khoảng 110 triệu/m2. Vlasta Premier phù hợp hơn nếu ưu tiên yếu tố Đào Trí ven sông, căn hộ cao cấp, thiết kế đẹp, tiện ích hiếm và lịch thanh toán giãn.",
      },
      {
        question: "Sunshine Diamond River mạnh hơn ở điểm nào?",
        answer:
          "Sunshine Diamond River mạnh ở yếu tố cảnh quan ven sông, quy mô khu phức hợp, hệ sinh thái lớn và định vị giá cao khoảng 110 triệu/m2. Đây là điểm cộng với khách thích không gian rộng và chấp nhận ngân sách lớn.",
      },
      {
        question: "Vlasta Premier có lợi thế gì khi so với Sunshine Diamond River?",
        answer:
          "Vlasta Premier có lợi thế về vị trí trên trục Đào Trí ven sông, cảm giác chọn lọc, thiết kế căn hộ, kính full-height, tiện ích như golf 3D, hồ bơi muối, coworking và lịch thanh toán nhẹ hơn giai đoạn đầu.",
      },
    ],
    "phap-ly-vlasta-premier-van-phu": [
      {
        question: "Tên pháp lý chính thức của Vlasta Premier là gì?",
        answer:
          "Tên pháp lý chính thức của dự án là Khu chung cư thương mại và dịch vụ hỗn hợp New Tech. Vlasta Premier là tên thương mại được dùng trong truyền thông và tư vấn bán hàng.",
      },
      {
        question: "Vlasta Premier đã có giấy phép xây dựng chưa?",
        answer:
          "Theo bộ hồ sơ pháp lý, dự án đã được Sở Xây dựng TP.HCM cấp Giấy phép xây dựng số 17/GPXD ngày 15/5/2024 cho Công ty Cổ phần Đầu tư Xây dựng New Tech.",
      },
      {
        question: "Văn Phú - Invest đã hoàn tất tiền sử dụng đất chưa?",
        answer:
          "Theo bộ hồ sơ hiện có, Văn Phú - Invest đã hoàn tất việc đóng tiền sử dụng đất, tạo nền tảng pháp lý tốt hơn cho quỹ đất sạch và thủ tục sổ hồng sau này.",
      },
      {
        question: "Vlasta Premier có tài liệu bảo lãnh ngân hàng không?",
        answer:
          "Trong bộ hồ sơ có tài liệu VPBank cam kết phát hành bảo lãnh. Người mua nên yêu cầu bản cập nhật tại thời điểm ký để kiểm tra phạm vi bảo lãnh theo đúng căn và hợp đồng.",
      },
    ],
    "gia-vlasta-premier-2026": [
      {
        question: "Giá Vlasta Premier 2026 khoảng bao nhiêu?",
        answer:
          "Theo bảng giá dự kiến hiện có, căn 1PN và 1PN+ khoảng 4.35-5.74 tỷ, căn 2PN khoảng 6.36-8.24 tỷ và căn 3PN khoảng 8.15-9.57 tỷ. Giá thực tế cần kiểm tra theo giỏ hàng và thời điểm tư vấn.",
      },
      {
        question: "Giá Vlasta Premier đã gồm VAT và nội thất chưa?",
        answer:
          "Theo bảng giá dự kiến hiện có, mức giá đã gồm VAT và full nội thất cao cấp. Người mua vẫn nên kiểm tra thêm phí bảo trì, chính sách thanh toán và ưu đãi tại thời điểm giao dịch.",
      },
      {
        question: "Nên chọn căn 1PN, 2PN hay 3PN tại Vlasta Premier?",
        answer:
          "Căn 1PN và 1PN+ phù hợp ngân sách gọn hoặc cho thuê. Căn 2PN cân bằng hơn cho gia đình trẻ và thanh khoản. Căn 3PN phù hợp khách mua ở lâu dài, cần không gian rộng và trải nghiệm cao cấp hơn.",
      },
    ],
    "so-sanh-mizuki-vlasta-premier-the-peak-garden": [
      {
        question: "Trong 3 dự án Mizuki, The Peak Garden và Vlasta Premier, dự án nào phù hợp mua ở?",
        answer:
          "Mizuki phù hợp với gia đình thích không gian xanh và yên tĩnh. The Peak Garden phù hợp với khách ưu tiên gần Phú Mỹ Hưng. Vlasta Premier phù hợp với khách muốn căn hộ cao cấp, thiết kế đẹp và lịch thanh toán giãn.",
      },
      {
        question: "Dự án nào có lịch thanh toán tốt hơn?",
        answer:
          "Vlasta Premier có lợi thế về lịch thanh toán khi khách mua chỉ cần đóng một phần trước khi nhận nhà và có chính sách hỗ trợ ngân hàng theo từng thời điểm. Khách mua vẫn cần kiểm tra chính sách mới nhất trước khi quyết định.",
      },
      {
        question: "Dự án nào có giá dễ tiếp cận hơn?",
        answer:
          "Mizuki Park và The Peak Garden thường dễ tiếp cận hơn về giá so với Vlasta Premier. Vlasta Premier phù hợp hơn với khách chấp nhận trả thêm để lấy thiết kế, bàn giao và trải nghiệm sống cao cấp hơn.",
      },
    ],
    "so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden": [
      {
        question: "Bài so sánh nhiều dự án nên đọc như thế nào?",
        answer:
          "Nên đọc bài này như một bản tổng quan để xác định dự án phù hợp theo nhu cầu. Sau đó, khách mua nên đọc thêm bài so sánh từng cặp để kiểm tra kỹ hơn giữa Vlasta Premier và từng dự án cụ thể.",
      },
      {
        question: "Vlasta Premier có lợi thế gì trong nhóm so sánh?",
        answer:
          "Vlasta Premier có lợi thế ở thiết kế căn hộ, yếu tố Đào Trí ven sông, tiện ích khác biệt như golf 3D, hồ bơi muối, coworking lớn và lịch thanh toán giãn hơn. Khi so với Sunshine Diamond River, giá Vlasta không nhất thiết cao hơn vì Sunshine Diamond River có thể ở khoảng 110 triệu/m2.",
      },
      {
        question: "Có nên chỉ so giá bán giữa các dự án không?",
        answer:
          "Không nên chỉ so giá bán. Khách mua nên so thêm vị trí, mật độ, layout, chất lượng bàn giao, tiện ích, lịch thanh toán và mục tiêu mua ở hay đầu tư.",
      },
    ],
    "vlasta-premier-co-dang-dau-tu-khong": [
      {
        question: "Vlasta Premier có phù hợp để đầu tư không?",
        answer:
          "Vlasta Premier phù hợp với nhà đầu tư ưu tiên sản phẩm cao cấp, tiện ích khác biệt và lịch thanh toán nhẹ giai đoạn đầu. Tuy nhiên, hiệu quả đầu tư phụ thuộc vào giá vào, loại căn, tầng, view và chiến lược nắm giữ.",
      },
      {
        question: "Điểm mạnh đầu tư của Vlasta Premier là gì?",
        answer:
          "Điểm mạnh gồm thiết kế căn hộ đẹp, tiện ích hiếm, yếu tố Đào Trí ven sông, vị trí khu Nam, chính sách thanh toán giãn và hỗ trợ ngân hàng theo từng thời điểm.",
      },
      {
        question: "Rủi ro khi đầu tư Vlasta Premier là gì?",
        answer:
          "Rủi ro thường nằm ở việc chọn sai căn, mua giá chênh quá cao, dùng đòn bẩy quá mạnh hoặc kỳ vọng tăng giá trong thời gian quá ngắn.",
      },
    ],
    "vlasta-premier-co-tiem-nang-tang-gia-khong": [
      {
        question: "Vlasta Premier có tiềm năng tăng giá không?",
        answer:
          "Dự án có nền tảng giữ giá nhờ thiết kế, tiện ích khác biệt, yếu tố Đào Trí ven sông, vị trí khu Nam và lịch thanh toán tốt. Tuy nhiên, không nên xem đây là cam kết tăng giá vì kết quả còn phụ thuộc thị trường và giá mua ban đầu.",
      },
      {
        question: "Tiện ích có ảnh hưởng tới giá trị dự án không?",
        answer:
          "Có. Những tiện ích hiếm như golf 3D, hồ bơi muối và coworking lớn giúp dự án dễ tạo nhận diện hơn khi khách mua hoặc thuê so sánh với các dự án khác.",
      },
      {
        question: "Nên chọn căn nào để tối ưu tiềm năng giữ giá?",
        answer:
          "Nên ưu tiên căn có layout tốt, view thoáng, tầng hợp lý, mức chênh vừa phải và phù hợp nhu cầu ở thật hoặc cho thuê trong tương lai.",
      },
    ],
    "du-an-phu-hop-gia-dinh-tre-nam-sai-gon": [
      {
        question: "Vlasta Premier có phù hợp gia đình trẻ không?",
        answer:
          "Có, nếu gia đình trẻ ưu tiên căn hộ sáng, layout dễ ở, tiện ích nội khu đa dạng và lịch thanh toán giúp giảm áp lực vốn trước khi nhận nhà.",
      },
      {
        question: "Gia đình trẻ nên chọn loại căn nào tại Vlasta Premier?",
        answer:
          "Gia đình trẻ nên so kỹ căn 1PN+, 2PN và 3PN theo ngân sách, số thành viên, nhu cầu làm việc tại nhà, hướng view và khả năng nâng cấp trong vài năm tới.",
      },
      {
        question: "Tiện ích nào quan trọng với gia đình trẻ?",
        answer:
          "Các tiện ích đáng chú ý gồm hồ bơi muối, coworking space, khu thể thao, không gian thư giãn và hệ an ninh nhiều lớp.",
      },
    ],
    "review-vi-tri-vlasta-premier": [
      {
        question: "Vị trí Vlasta Premier có thuận tiện không?",
        answer:
          "Vlasta Premier nằm tại Phú Thuận trên trục Đào Trí ven sông, thuận kết nối về Phú Mỹ Hưng, Nguyễn Văn Linh và các tiện ích khu Nam. Khách mua nên khảo sát thực tế vào giờ cao điểm để đánh giá đúng nhu cầu di chuyển.",
      },
      {
        question: "Vị trí có phải yếu tố quan trọng nhất khi mua Vlasta Premier không?",
        answer:
          "Vị trí rất quan trọng, nhưng không nên tách khỏi chất lượng căn hộ, tiện ích nội khu, pháp lý, giá bán và lịch thanh toán.",
      },
      {
        question: "Nên kiểm tra gì khi đi thực địa vị trí dự án?",
        answer:
          "Nên kiểm tra thời gian di chuyển vào giờ cao điểm, tuyến đường thường dùng, tiện ích xung quanh, mức độ kết nối về Phú Mỹ Hưng và cảm giác khu vực vào ban ngày lẫn buổi tối.",
      },
    ],
  };

  const customFaqs = customFaqMap[post.slug];

  if (customFaqs) {
    return customFaqs;
  }

  const faqMap: Record<string, string[]> = {
    "vlasta-premier-co-dang-dau-tu-khong": [
      "Vlasta Premier phù hợp mua ở hay đầu tư?",
      "Dự án có ngân hàng bảo lãnh không?",
      "Thời gian bàn giao dự kiến là khi nào?",
      "Phí quản lý vận hành dự kiến bao nhiêu?",
    ],
    "so-sanh-vlasta-premier-sunshine-sky-city-sunshine-diamond-river-the-peak-garden": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Dự án có bao nhiêu sản phẩm và loại căn nào?",
      "Đơn vị quản lý vận hành dự án là đơn vị nào?",
      "Các tiện ích nổi bật của dự án là gì?",
    ],
    "review-vi-tri-vlasta-premier": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Các kết nối vùng nổi bật quanh dự án là gì?",
      "Các tiện ích nổi bật của dự án là gì?",
      "Hệ thống an ninh của dự án gồm mấy lớp?",
    ],
    "du-an-phu-hop-gia-dinh-tre-nam-sai-gon": [
      "Dự án có bao nhiêu sản phẩm và loại căn nào?",
      "Các tiện ích nổi bật của dự án là gì?",
      "Hệ thống an ninh của dự án gồm mấy lớp?",
      "Phí quản lý vận hành dự kiến bao nhiêu?",
    ],
    "vlasta-premier-co-tiem-nang-tang-gia-khong": [
      "Chủ đầu tư và đơn vị phát triển dự án là ai?",
      "Dự án có ngân hàng bảo lãnh không?",
      "Có được chuyển nhượng hợp đồng mua bán không?",
      "Thời gian bàn giao dự kiến là khi nào?",
    ],
    "so-sanh-mizuki-vlasta-premier-the-peak-garden": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Dự án có bao nhiêu sản phẩm và loại căn nào?",
      "Các tiện ích nổi bật của dự án là gì?",
      "Thời gian bàn giao dự kiến là khi nào?",
    ],
    "so-sanh-vlasta-premier-mizuki-park": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Các tiện ích nổi bật của dự án là gì?",
      "Thời gian bàn giao dự kiến là khi nào?",
    ],
    "so-sanh-vlasta-premier-the-peak-garden": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Dự án có bao nhiêu sản phẩm và loại căn nào?",
      "Các tiện ích nổi bật của dự án là gì?",
    ],
    "so-sanh-vlasta-premier-sunshine-sky-city": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Các tiện ích nổi bật của dự án là gì?",
      "Phí quản lý vận hành dự kiến bao nhiêu?",
    ],
    "so-sanh-vlasta-premier-sunshine-diamond-river": [
      "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
      "Các tiện ích nổi bật của dự án là gì?",
      "Thời gian bàn giao dự kiến là khi nào?",
    ],
  };

  const selectedQuestions = faqMap[post.slug] || [
    "Tên đầy đủ và định vị của dự án là gì?",
    "Vị trí chính xác của Vlasta Premier Phú Thuận ở đâu?",
    "Dự án có bao nhiêu sản phẩm và loại căn nào?",
  ];

  return selectedQuestions
    .map((question) => project.faqs.find((faq) => faq.question === question))
    .filter((faq): faq is FaqItem => Boolean(faq));
}
