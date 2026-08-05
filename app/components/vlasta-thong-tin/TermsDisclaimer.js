import { agency, site } from "@/app/lib/vlasta-thong-tin/data";
import AnimateIn from "./ui/AnimateIn";

const terms = [
  {
    title: "Tính chất thông tin",
    content:
      "Nội dung trên website nhằm mục đích cung cấp thông tin tư vấn ban đầu về dự án. Thông tin không thay thế tài liệu pháp lý, hợp đồng mua bán hoặc công bố chính thức từ chủ đầu tư.",
  },
  {
    title: "Giá bán, ưu đãi và chính sách",
    content:
      "Bảng giá, chiết khấu, ưu đãi, tiến độ thanh toán và chính sách ngân hàng có thể thay đổi theo từng thời điểm. Khách hàng cần xác nhận lại với Saigon Living và hồ sơ chính thức trước khi ra quyết định.",
  },
  {
    title: "Hình ảnh và phối cảnh",
    content:
      "Hình ảnh, phối cảnh, video và nội dung minh họa có thể được biên tập phục vụ truyền thông. Thiết kế, cảnh quan, tiện ích và thông số thực tế có thể điều chỉnh theo hồ sơ được phê duyệt.",
  },
  {
    title: "Vai trò của đơn vị vận hành",
    content:
      "Website này không phải trang web chính thức của Chủ đầu tư. Đây là trang thông tin tham khảo do Saigon Living — đơn vị tư vấn bất động sản độc lập — biên soạn và vận hành.",
  },
];

export default function TermsDisclaimer() {
  return (
    <section id="dieu-khoan-mien-tru" className="bg-warm-white px-5 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <div className="rounded-[2rem] border border-charcoal/5 bg-warm-white-dim p-6 md:p-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
                Điều khoản & miễn trừ trách nhiệm
              </p>
              <h2 className="mt-4 font-display text-3xl font-light leading-tight text-charcoal md:text-5xl">
                Thông tin minh bạch trước khi đăng ký tư vấn
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-charcoal/65 md:text-base">
                Các điều khoản dưới đây giúp khách hàng hiểu rõ phạm vi thông tin
                trên website {site.fullName} và vai trò của {agency.name}.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {terms.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-charcoal/5 bg-warm-white p-5"
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
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                {agency.disclaimerTitle}
              </p>
              <p className="mt-3">{agency.disclaimer}</p>
              <p className="mt-4">
                Khi để lại thông tin, khách hàng xác nhận đã đọc các nội dung minh
                bạch trên website và đồng ý để đơn vị quảng cáo liên hệ hỗ trợ theo
                nhu cầu đã đăng ký.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
