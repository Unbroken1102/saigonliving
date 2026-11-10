import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Chính sách bảo mật",
  description:
    "Chính sách bảo mật của Saigon Living về việc thu thập, sử dụng và bảo vệ thông tin người dùng khi tư vấn bất động sản.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#fbf8f2] px-5 pb-24 pt-36 text-[#15110c] lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a2f]">
          Saigon Living
        </p>
        <h1 className="font-display mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
          Chính sách bảo mật
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#5d554c]">
          Chính sách này giải thích cách Saigon Living thu thập và sử dụng thông tin khi Anh/Chị để lại nhu cầu tư vấn, gọi điện, nhắn Zalo hoặc tương tác với website.
        </p>

        <section className="mt-10 space-y-6 text-[17px] leading-8 text-[#40382f]">
          <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-[#15110c]">
            Thông tin được thu thập
          </h2>
          <p>
            Website có thể thu thập họ tên, số điện thoại, nhu cầu mua, ngân sách dự kiến, ghi chú tư vấn và các thông tin Anh/Chị chủ động gửi qua form, điện thoại, Zalo, WhatsApp hoặc email.
          </p>
          <p>
            Website cũng có thể ghi nhận dữ liệu kỹ thuật cơ bản như trang đã xem, nguồn truy cập, thiết bị, trình duyệt và thời gian truy cập nhằm đo lường hiệu quả nội dung và cải thiện trải nghiệm.
          </p>

          <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-[#15110c]">
            Mục đích sử dụng
          </h2>
          <p>
            Thông tin được dùng để liên hệ tư vấn, gửi bảng giá, mặt bằng, chính sách thanh toán, nội dung so sánh dự án và các cập nhật liên quan đến nhu cầu Anh/Chị đã cung cấp.
          </p>
          <p>
            Saigon Living không bán dữ liệu cá nhân cho bên thứ ba. Trong một số trường hợp, thông tin có thể được chia sẻ với đơn vị tư vấn hoặc bộ phận liên quan để phục vụ đúng yêu cầu của Anh/Chị.
          </p>

          <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-[#15110c]">
            Quyền của người dùng
          </h2>
          <p>
            Anh/Chị có thể yêu cầu cập nhật, chỉnh sửa hoặc ngừng nhận tư vấn bằng cách liên hệ qua email{" "}
            <a className="font-semibold text-[#8a6a2f] underline-offset-4 hover:underline" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            .
          </p>

          <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-[#15110c]">
            Liên hệ
          </h2>
          <p>
            Nếu có câu hỏi về quyền riêng tư hoặc cách xử lý dữ liệu, Anh/Chị có thể liên hệ Saigon Living qua số{" "}
            <a className="font-semibold text-[#8a6a2f] underline-offset-4 hover:underline" href={`tel:${siteConfig.contact.phoneTel}`}>
              {siteConfig.contact.phone}
            </a>
            .
          </p>
        </section>

        <div className="mt-10 border-t border-black/10 pt-6 text-sm text-[#6b6258]">
          <Link href="/" className="font-semibold text-[#8a6a2f] underline-offset-4 hover:underline">
            Quay về trang chủ
          </Link>
        </div>
      </article>
    </main>
  );
}
