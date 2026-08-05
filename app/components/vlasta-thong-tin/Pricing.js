import { pricingPlans } from "@/app/lib/vlasta-thong-tin/data";
import VlastaImage from "./VlastaImage";
import SectionHeader from "./ui/SectionHeader";
import AnimateIn from "./ui/AnimateIn";
import Button from "./ui/Button";

function getPlanCtaLabel(planType) {
  if (planType.includes("1PN")) return "Xem 3 căn 1PN giá tốt nhất";
  if (planType.includes("2PN")) return "Xem 3 căn 2PN giá tốt nhất";
  if (planType.includes("3PN")) return "Xem 3 căn 3PN giá tốt nhất";
  if (/duplex/i.test(planType)) return "Xem 3 căn Duplex giá tốt nhất";
  return "Xem giá tốt nhất";
}

export default function Pricing() {
  return (
    <section id="bang-gia" className="section-padding bg-warm-white-dim">
      <SectionHeader
        eyebrow="Mặt bằng căn hộ"
        title="Danh mục sản phẩm"
        description="Các loại hình căn hộ nổi bật tại Vlasta Premier Phú Thuận. Vui lòng liên hệ để nhận chính sách bán hàng cập nhật."
      />

      <div className="mx-auto max-w-7xl mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {pricingPlans.map((plan, i) => {
          const ctaLabel = getPlanCtaLabel(plan.type);

          return (
          <AnimateIn key={plan.type} delay={i * 80}>
            <article
              className={`relative flex flex-col h-full rounded-3xl p-6 md:p-8 transition-all duration-500 ${
                plan.highlight
                  ? "bg-charcoal text-warm-white shadow-2xl shadow-charcoal/20 scale-[1.02] ring-2 ring-gold/50"
                  : "bg-warm-white border border-charcoal/5 hover:border-gold/30 hover:shadow-lg"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-charcoal">
                  Phổ biến nhất
                </span>
              )}

              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl border border-charcoal/10">
                <VlastaImage
                  src={plan.image}
                  alt={`Mặt bằng ${plan.type}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <p
                className={`text-xs tracking-[0.2em] uppercase ${
                  plan.highlight ? "text-gold-light" : "text-gold-dark"
                }`}
              >
                {plan.area}
              </p>
              <h3
                className={`mt-2 font-display text-2xl font-medium ${
                  plan.highlight ? "text-warm-white" : "text-charcoal"
                }`}
              >
                {plan.type}
              </h3>

              <div className="mt-6 mb-8">
                <span
                  className={`font-display text-4xl md:text-5xl font-light ${
                    plan.highlight ? "text-gradient-gold" : "text-tropical"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`ml-1 text-lg ${
                    plan.highlight ? "text-warm-white/70" : "text-charcoal/50"
                  }`}
                >
                  {plan.unit}
                </span>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-sm ${
                      plan.highlight ? "text-warm-white/75" : "text-charcoal/65"
                    }`}
                  >
                    <span className="text-gold mt-0.5">◆</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                href="#lien-he"
                data-lead-modal-title={ctaLabel}
                data-lead-context={ctaLabel}
                variant={plan.highlight ? "primary" : "outline"}
                className="w-full text-center"
              >
                {ctaLabel}
              </Button>
            </article>
          </AnimateIn>
          );
        })}
      </div>
    </section>
  );
}
