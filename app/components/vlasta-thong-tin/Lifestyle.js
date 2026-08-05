import VlastaImage from "./VlastaImage";
import { lifestyleCards } from "@/app/lib/vlasta-thong-tin/data";
import SectionHeader from "./ui/SectionHeader";
import AnimateIn from "./ui/AnimateIn";

export default function Lifestyle() {
  return (
    <section className="section-padding bg-warm-white-dim">
      <SectionHeader
        eyebrow="Phong cách sống"
        title="Dành cho gia đình tinh hoa"
        description="Không chỉ là nơi ở — Vlasta Premier là hành trình wellness và kết nối đa thế hệ."
      />

      <div className="mx-auto max-w-7xl mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
        {lifestyleCards.map((card, i) => (
          <AnimateIn key={card.title} delay={i * 100}>
            <article className="group relative overflow-hidden rounded-3xl bg-warm-white shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="relative aspect-[4/5] overflow-hidden">
                <VlastaImage
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl text-warm-white font-light">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-warm-white/75 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
