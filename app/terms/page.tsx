import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng",
  description:
    "Điều khoản sử dụng website Saigon Living, bao gồm phạm vi thông tin, cách sử dụng nội dung và điều kiện liên hệ tư vấn.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <main className="bg-[#fbf8f2] px-5 pb-24 pt-36 text-[#15110c] lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a2f]">
          Saigon Living
        </p>
        <h1 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
          Điều khoản sử dụng
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#5d554c]">
          Khi truy cập và sử dụng website, Anh/Chị đồng ý với các điều khoản dưới đây. Nếu không đồng ý, Anh/Chị có thể ngừng sử dụng website hoặc liên hệ để được giải thích thêm.
        </p>

        <section className="mt-10 space-y-6 text-[17px] leading-8 text-[#40382f]">
          <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-[#15110c]">
            Phạm vi thông tin
          </h2>
          <p>
            Nội dung trên website được biên soạn nhằm cung cấp thông tin tham khảo về bất động sản cao cấp Nam Sài Gòn, bao gồm dự án, vị trí, tiện ích, mặt bằng, chính sách bán hàng và các bài phân tích thị trường.
          </p>
          <p>
            Saigon Living không phải website đại diện pháp lý của chủ đầu tư. Các thông tin liên quan đến giá bán, chính sách, tiến độ, pháp lý và tiêu chuẩn bàn giao cần được kiểm tra theo hồ sơ chính thức tại thời điểm giao dịch.
          </p>

          <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-[#15110c]">
            Sử dụng nội dung
          </h2>
          <p>
            Anh/Chị có thể đọc, chia sẻ đường dẫn website và sử dụng thông tin cho mục đích tham khảo cá nhân. Việc sao chép, chỉnh sửa hoặc sử dụng lại nội dung cho mục đích thương mại cần có sự đồng ý trước bằng văn bản.
          </p>

          <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-[#15110c]">
            Gửi thông tin tư vấn
          </h2>
          <p>
            Khi gửi form, gọi điện hoặc nhắn tin, Anh/Chị đồng ý để Saigon Living liên hệ lại nhằm tư vấn theo nhu cầu đã cung cấp. Anh/Chị có thể yêu cầu dừng liên hệ bất cứ lúc nào.
          </p>

          <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-[#15110c]">
            Thay đổi điều khoản
          </h2>
          <p>
            Saigon Living có thể cập nhật điều khoản sử dụng để phù hợp với nội dung website, quy định quảng cáo và yêu cầu vận hành. Phiên bản mới sẽ có hiệu lực khi được đăng tải trên website.
          </p>
        </section>

        <div className="mt-10 border-t border-black/10 pt-6 text-sm text-[#6b6258]">
          <Link href="/privacy-policy" className="font-semibold text-[#8a6a2f] underline-offset-4 hover:underline">
            Xem Chính sách bảo mật
          </Link>
        </div>
      </article>
    </main>
  );
}
