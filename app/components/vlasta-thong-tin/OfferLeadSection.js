import LeadForm from "./LeadForm";
import AnimateIn from "./ui/AnimateIn";

const viewOptions = [
  "View sông Sài Gòn",
  "View hồ bơi và nội khu",
  "View Phú Mỹ Hưng",
  "View công viên Mũi Đèn Đỏ",
];

const unitOptions = ["1PN", "2PN", "3PN", "Duplex"];

export default function OfferLeadSection() {
  return (
    <section className="section-padding bg-charcoal text-warm-white">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <div className="grid items-center gap-8 rounded-[2.25rem] border border-gold/25 bg-[radial-gradient(circle_at_top_left,rgba(212,184,122,0.22),transparent_34%),linear-gradient(135deg,#4b211b,#1f1c1a)] p-6 shadow-2xl shadow-charcoal/30 md:p-8 lg:grid-cols-[1.05fr_0.75fr] lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
                Đăng ký tư vấn
              </p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-6xl">
                15 suất ưu đãi
                <br />
                <span className="italic text-gradient-gold">
                  thanh toán chỉ 20%
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-warm-white/72 md:text-lg">
                Nhận tư vấn chính sách thanh toán chỉ 20% đến khi nhận nhà, ưu
                đãi quà tặng iPhone 17 Pro Max và bảng giá cập nhật theo từng căn.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-gold/25 bg-warm-white p-5 text-charcoal shadow-xl shadow-charcoal/20 md:p-6">
              <p className="mb-4 hidden font-display text-2xl font-light md:block">
                Đăng ký giữ suất ưu đãi
              </p>
              <LeadForm
                compact
                formName="quick_offer_form"
                submitLabel="Gửi yêu cầu"
                showSelect={false}
                showNote={false}
              />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export function PriceCheckLeadSection() {
  return (
    <section className="section-padding bg-warm-white-dim">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimateIn>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
              Chọn căn theo nhu cầu
            </p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-charcoal md:text-6xl">
              Kiểm tra bảng giá dự án
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/65 md:text-lg">
              Chọn tầng, view và loại căn mong muốn — Saigon Living sẽ gửi bảng giá
              phù hợp nhất với nhu cầu của anh/chị.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={120}>
          <div className="rounded-[2.25rem] border border-gold/25 bg-warm-white p-6 text-charcoal shadow-2xl shadow-charcoal/10 md:p-8 lg:p-10">
            <LeadForm
              formName="price_floor_check_form"
              submitLabel="Kiểm tra bảng giá dự án"
              showSelect={false}
              contactPosition="afterSelects"
              showNote={false}
              extraSelects={[
                {
                  name: "view",
                  label: "Chọn view quan tâm",
                  placeholder: "Chọn view quan tâm",
                  options: viewOptions,
                },
                {
                  name: "unitType",
                  label: "Chọn loại căn",
                  placeholder: "Chọn loại căn",
                  options: unitOptions,
                },
              ]}
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
