import VlastaImage from "./VlastaImage";
import { images } from "@/app/lib/vlasta-thong-tin/data";
import AnimateIn from "./ui/AnimateIn";

const projectFacts = [
  {
    label: "Chủ đầu tư",
    value: "Văn Phú - Invest (VPI)",
  },
  {
    label: "Vị trí",
    value: "Số 54 Đào Trí, P. Phú Thuận, TP.HCM",
  },
  {
    label: "Quy mô dự án",
    value: "9.016,5 m2 | 2 block cao 35 tầng | 2 hầm",
  },
  {
    label: "Cơ cấu sản phẩm",
    value: "738 sản phẩm (602 căn hộ, 136 TMDV)",
  },
  {
    label: "Pháp lý",
    value: "Sở hữu lâu dài | Quy hoạch 1/500 & GPXD hoàn chỉnh",
  },
  {
    label: "Tiện ích",
    value: "Bể bơi Panorama, Co-working 1.000m2, Sky Garden",
  },
];

export default function Intro() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:items-stretch">
          <AnimateIn>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] bg-charcoal shadow-xl shadow-charcoal/10">
              <VlastaImage
                src={images.heroPoster}
                mobileSrc={images.heroPosterMobile}
                alt="Phối cảnh tổng thể Vlasta Premier Phú Thuận"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />
            </div>
          </AnimateIn>

          <AnimateIn delay={120}>
            <div className="rounded-[2rem] border border-charcoal/10 bg-warm-white-dim p-5 shadow-sm md:p-8">
              <p className="mb-6 border-l-4 border-gold pl-5 text-xl font-bold uppercase tracking-wide text-tropical md:text-3xl">
                Thông tin Vlasta Premier Phú Thuận
              </p>
              {projectFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-2 border-b border-dashed border-charcoal/15 py-4 last:border-b-0 md:grid-cols-[180px_1fr] md:gap-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                    {fact.label}
                  </p>
                  <p className="text-base font-medium leading-relaxed text-charcoal md:text-lg">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
