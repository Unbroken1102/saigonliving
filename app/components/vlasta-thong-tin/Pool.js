import VlastaImage from "./VlastaImage";
import { images } from "@/app/lib/vlasta-thong-tin/data";
import AnimateIn from "./ui/AnimateIn";
import Button from "./ui/Button";

export default function Pool() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <VlastaImage
        src={images.poolRooftop}
        alt="Infinity Sky Pool — Vlasta Premier"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/50 to-transparent" />

      <div className="relative z-10 section-padding w-full">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-turquoise-light mb-4">
              Signature Amenity
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-warm-white leading-[1.1]">
              Panorama Pool
              <br />
              <span className="italic text-gradient-gold">khối đế tiện ích</span>
            </h2>
            <p className="mt-6 text-lg text-warm-white/75 leading-relaxed max-w-lg">
              Tại Vlasta Premier - Phú Thuận, cụm tiện ích wellbeing được bố trí
              theo triết lý sống cân bằng với bể bơi panorama hướng sông, pool
              bar, gym và yoga.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Bể bơi panorama kết nối cảnh quan ven sông",
                "Gym, yoga và không gian tái tạo năng lượng",
                "Vườn thiền, vườn yoga tại tầng 15 và 20",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-warm-white/80 text-sm md:text-base"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-turquoise/30 text-turquoise-light text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="#lien-he" variant="turquoise">
                Đặt lịch tham quan
              </Button>
            </div>
          </AnimateIn>

          <AnimateIn delay={150} className="hidden lg:block">
            <div className="relative aspect-square max-w-md ml-auto">
              <div className="absolute -inset-4 rounded-3xl border border-gold/20" />
              <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl">
                <VlastaImage
                  src={images.poolDaybed}
                  alt="Pool deck daybed sang trọng"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-dark rounded-2xl px-6 py-4 border border-gold/20">
                <p className="font-display text-3xl text-gold-light">15 / 20</p>
                <p className="text-xs text-warm-white/60 tracking-widest uppercase">
                  Vườn thiền - yoga
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
