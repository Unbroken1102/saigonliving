import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Miễn trừ trách nhiệm",
  description:
    "Tuyên bố miễn trừ trách nhiệm của Saigon Living về thông tin dự án, giá bán, chính sách, pháp lý và nội dung tư vấn.",
  alternates: {
    canonical: `${siteConfig.url}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  return (
    <main className="bg-[#fbf8f2] px-5 pb-24 pt-36 text-[#15110c] lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a2f]">
          Saigon Living
        </p>
        <h1 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
          Miễn trừ trách nhiệm
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#5d554c]">
          Trang này làm rõ phạm vi trách nhiệm của Saigon Living khi cung cấp thông tin tư vấn và nội dung tham khảo trên website.
        </p>

        <section className="mt-10 space-y-6 text-[17px] leading-8 text-[#40382f]">
          <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-[#15110c]">
            Không phải website chủ đầu tư
          </h2>
          <p>
            Saigon Living là kênh tư vấn và tổng hợp thông tin bất động sản độc lập. Website không phải trang đại diện pháp lý của chủ đầu tư, sàn giao dịch hoặc đơn vị phân phối được nêu trong từng dự án, trừ khi có thông báo riêng bằng văn bản.
          </p>

          <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-[#15110c]">
            Thông tin có thể thay đổi
          </h2>
          <p>
            Giá bán, giỏ hàng, chính sách thanh toán, ưu đãi, tiến độ, pháp lý, phí vận hành, tiêu chuẩn bàn giao, hình ảnh minh họa và các thông tin liên quan có thể thay đổi theo từng thời điểm.
          </p>
          <p>
            Trước khi đặt cọc, ký văn bản thỏa thuận hoặc hợp đồng mua bán, Anh/Chị cần kiểm tra hồ sơ pháp lý, tài liệu bán hàng, hợp đồng và thông báo chính thức từ các bên có thẩm quyền.
          </p>

          <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-[#15110c]">
            Không cam kết lợi nhuận
          </h2>
          <p>
            Các nội dung phân tích tiềm năng, so sánh dự án hoặc nhận định thị trường không phải là cam kết lợi nhuận, cam kết tăng giá hoặc lời khuyên đầu tư bắt buộc. Quyết định mua bán cần dựa trên nhu cầu, tài chính và khả năng chấp nhận rủi ro của từng khách hàng.
          </p>

          <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-[#15110c]">
            Liên hệ xác minh
          </h2>
          <p>
            Nếu cần kiểm tra thông tin mới nhất, Anh/Chị có thể liên hệ Saigon Living qua số{" "}
            <a className="font-semibold text-[#8a6a2f] underline-offset-4 hover:underline" href={`tel:${siteConfig.contact.phoneTel}`}>
              {siteConfig.contact.phone}
            </a>{" "}
            hoặc email{" "}
            <a className="font-semibold text-[#8a6a2f] underline-offset-4 hover:underline" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </section>

        <div className="mt-10 border-t border-black/10 pt-6 text-sm text-[#6b6258]">
          <Link href="/terms" className="font-semibold text-[#8a6a2f] underline-offset-4 hover:underline">
            Xem Điều khoản sử dụng
          </Link>
        </div>
      </article>
    </main>
  );
}
