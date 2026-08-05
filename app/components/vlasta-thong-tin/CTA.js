import Button from "./ui/Button";
import AnimateIn from "./ui/AnimateIn";
import { images, site } from "@/app/lib/vlasta-thong-tin/data";
import VlastaImage from "./VlastaImage";

export default function CTA() {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0">
        <VlastaImage
          src={images.buildingCity}
          alt="Toàn cảnh dự án về đêm"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="absolute inset-0 bg-gradient-to-tr from-charcoal via-charcoal/60 to-gold/20" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <AnimateIn>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-light mb-6">
            VLASTA PREMIER - PHÚ THUẬN
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-warm-white leading-[1.05]">
            Đăng ký nhận
            <br />
            <span className="italic text-gradient-gold">
              hồ sơ dự án
            </span>
          </h2>
          <p className="mt-6 text-lg text-warm-white/70 max-w-xl mx-auto leading-relaxed">
            Nhận thông tin mặt bằng căn hộ, tiến độ và chính sách bán hàng mới nhất qua Saigon Living.
          </p>
        </AnimateIn>

        <AnimateIn delay={150}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#lien-he" variant="primary" className="min-w-[220px]">
              Đăng ký tư vấn
            </Button>
            <Button
              href={`tel:${site.hotline.replace(/\s/g, "")}`}
              variant="outline"
              className="min-w-[220px] border-warm-white/25 text-warm-white hover:bg-warm-white/10"
            >
              Gọi hotline ngay
            </Button>
          </div>
        </AnimateIn>

        <AnimateIn delay={250}>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-warm-white/50 text-sm">
            <span>✦ 602 căn hộ ở</span>
            <span>✦ 136 căn TMDV</span>
            <span>✦ Bàn giao dự kiến 2027</span>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
