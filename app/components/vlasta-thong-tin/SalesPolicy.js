import AnimateIn from "./ui/AnimateIn";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";

const earlyPaymentPolicies = [
  {
    title: "Ưu đãi thanh toán sớm",
    subtitle: "Áp dụng với phương án thanh toán sớm",
    discount: "11%",
    unit: "/ GTSP",
    note: "Số tiền này phải thanh toán 95% GT HĐMB trong vòng 15 ngày kể từ khi ký HĐMB.",
  },
  {
    title: "Ưu đãi thanh toán sớm từng đợt",
    subtitle: "Áp dụng với phương án thanh toán đúng tiến độ",
    discount: "10%",
    unit: "/ năm",
    note: "Tính trên số tiền/số ngày thanh toán sớm. Số tiền này phải thanh toán ít nhất trước 15 ngày đến hạn của từng đợt thanh toán và tối thiểu 100 triệu đồng.",
  },
];

const bonusPolicies = [
  {
    title: "Ưu đãi tiên phong",
    value: "1%",
    unit: "GTSP trước VAT",
    note: "Áp dụng cho 100 sản phẩm đầu tiên",
  },
  {
    title: "Tặng ngay",
    value: "iPhone 17PRM",
    unit: "Trị giá 35.000.000 VNĐ",
    note: "Áp dụng cho 100 khách hàng đầu tiên",
  },
  {
    title: "Ưu đãi thân thiết",
    value: "1%",
    unit: "GTSP trước VAT",
    note: "Áp dụng cho căn thứ 2 trở lên",
  },
  {
    title: "Ưu đãi đồng hành",
    value: "3 năm",
    unit: "Miễn phí quản lý vận hành",
    note: "Tối ưu chi phí an cư trong giai đoạn đầu",
  },
];

export default function SalesPolicy() {
  return (
    <section id="uu-dai" className="section-padding overflow-hidden bg-charcoal text-warm-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          light
          eyebrow="Chính sách bán hàng"
          title="Ngập tràn ưu đãi"
          description="Các chính sách ưu đãi nổi bật dành cho khách hàng đăng ký tư vấn và nhận bảng giá cập nhật."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {earlyPaymentPolicies.map((item, index) => (
            <AnimateIn key={item.title} delay={index * 90}>
              <article className="h-full rounded-[2rem] border border-gold/25 bg-warm-white p-6 text-center text-charcoal shadow-2xl shadow-charcoal/20 md:p-8">
                <p className="font-display text-3xl font-light leading-tight text-wood md:text-4xl">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-charcoal/55">{item.subtitle}</p>
                <div className="mx-auto mt-8 max-w-md rounded-[2rem] border-2 border-wood/80 px-5 py-8">
                  <p className="font-display text-3xl font-light text-wood">
                    Chiết khấu ngay
                  </p>
                  <div className="mt-3 flex items-end justify-center gap-2">
                    <span className="font-display text-7xl font-medium leading-none text-wood md:text-8xl">
                      {item.discount}
                    </span>
                    <span className="pb-3 text-sm font-semibold uppercase tracking-wide text-charcoal/60">
                      {item.unit}
                    </span>
                  </div>
                  <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-charcoal/60">
                    {item.note}
                  </p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={220}>
          <div className="mt-8 rounded-[2rem] border border-gold/20 bg-[radial-gradient(circle_at_top_left,rgba(212,184,122,0.20),transparent_35%),linear-gradient(135deg,#55261f,#2b1815)] p-5 md:p-8">
            <div className="grid gap-5 lg:grid-cols-2">
              {bonusPolicies.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[1.75rem] bg-warm-white p-6 text-charcoal ${
                    index < 2 ? "lg:col-span-1" : ""
                  }`}
                >
                  <p className="font-display text-3xl font-light text-wood md:text-4xl">
                    {item.title}
                  </p>
                  <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-1">
                    <span className="font-display text-5xl font-medium leading-none text-wood md:text-6xl">
                      {item.value}
                    </span>
                    <span className="pb-2 text-sm font-semibold uppercase tracking-wide text-charcoal/55">
                      {item.unit}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
                    {item.note}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={250}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs italic leading-relaxed text-warm-white/45 md:text-sm">
            (Áp dụng có điều kiện theo chính sách bán hàng của Chủ đầu tư tại thời điểm ký HĐMB)
          </p>
        </AnimateIn>

        <AnimateIn delay={280}>
          <div className="mt-10 flex justify-center">
            <Button href="#lien-he" variant="primary">
              Đăng ký nhận ưu đãi
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
