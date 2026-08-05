import { agency, site } from "@/app/lib/vlasta-thong-tin/data";
import AnimateIn from "./ui/AnimateIn";

const policyItems = [
  {
    title: "Thông tin thu thập",
    content:
      "Họ tên, số điện thoại, email, nhu cầu tư vấn dự án, loại căn quan tâm và ghi chú do khách hàng chủ động cung cấp qua form hoặc kênh liên hệ.",
  },
  {
    title: "Mục đích sử dụng",
    content:
      "Liên hệ tư vấn dự án, gửi bảng giá, chính sách bán hàng, hồ sơ pháp lý, lịch tham quan và các cập nhật liên quan đến Vlasta Premier Phú Thuận.",
  },
  {
    title: "Phạm vi chia sẻ",
    content:
      `Thông tin chỉ được sử dụng bởi ${agency.name} và bộ phận tư vấn liên quan để phục vụ yêu cầu của khách hàng; không bán dữ liệu cá nhân cho bên thứ ba không liên quan.`,
  },
  {
    title: "Thời gian lưu trữ",
    content:
      "Dữ liệu được lưu trữ trong thời gian cần thiết để chăm sóc và tư vấn khách hàng, hoặc cho đến khi khách hàng yêu cầu chỉnh sửa, ngừng liên hệ hoặc xoá thông tin.",
  },
];

export default function PrivacyPolicy() {
  return (
    <section id="chinh-sach-bao-mat" className="bg-warm-white-dim px-5 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <div className="rounded-[2rem] border border-charcoal/5 bg-warm-white p-6 shadow-sm md:p-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
                Chính sách bảo mật
              </p>
              <h2 className="mt-4 font-display text-3xl font-light leading-tight text-charcoal md:text-5xl">
                Chính sách bảo mật thông tin khách hàng
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-charcoal/65 md:text-base">
                {agency.name} cam kết minh bạch trong việc thu thập, sử dụng và
                bảo vệ thông tin cá nhân của khách hàng khi đăng ký tư vấn dự án
                {` ${site.fullName}`}.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {policyItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-charcoal/5 bg-warm-white-dim p-5"
                >
                  <h3 className="font-display text-2xl font-medium text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                    {item.content}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/5 p-5 text-sm leading-relaxed text-charcoal/65">
              <p className="font-semibold text-charcoal">Yêu cầu hỗ trợ dữ liệu cá nhân</p>
              <p className="mt-2">
                Khách hàng có thể yêu cầu kiểm tra, cập nhật, ngừng liên hệ hoặc
                xoá thông tin cá nhân qua hotline{" "}
                <a href={`tel:${site.hotline.replace(/\s/g, "")}`} className="font-semibold text-gold-dark hover:text-gold">
                  {site.hotline}
                </a>{" "}
                hoặc email{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-gold-dark hover:text-gold">
                  {site.email}
                </a>
                .
              </p>
              <p className="mt-3">
                Đơn vị vận hành: {agency.name}. Hotline: {agency.hotline}. Địa
                chỉ: {agency.address}.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
