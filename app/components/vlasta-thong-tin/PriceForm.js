import { site } from "@/app/lib/vlasta-thong-tin/data";
import LeadForm from "./LeadForm";
import SectionHeader from "./ui/SectionHeader";
import AnimateIn from "./ui/AnimateIn";

export default function PriceForm() {
  return (
    <section id="lien-he" className="section-padding bg-warm-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Liên hệ"
              title={
                <>
                  Nhận bảng giá
                  <br />
                  Chiết khấu lên tới 12%
                  <br />
                  Hồ sơ pháp lý chi tiết
                </>
              }
              description="Để lại thông tin — Saigon Living sẽ liên hệ trong 15 phút với bảng giá và hồ sơ phù hợp."
            />

            <AnimateIn delay={120} className="mt-10 space-y-6">
              <ContactItem label="Hotline" value={site.hotline} href={`tel:${site.hotline.replace(/\s/g, "")}`} />
              <ContactItem label="Email" value={site.email} href={`mailto:${site.email}`} />
              <ContactItem label="Showroom" value={site.address} />
            </AnimateIn>
          </div>

          <AnimateIn delay={80}>
            <div className="rounded-3xl border border-charcoal/5 bg-warm-white-dim p-6 md:p-10 shadow-xl shadow-charcoal/5">
              <LeadForm
                formName="final_contact_form"
                submitLabel="Gửi yêu cầu nhận bảng giá & ưu đãi"
                showSelect={false}
                showNote={false}
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ label, value, href }) {
  const content = (
    <p className="text-base text-charcoal font-medium">{value}</p>
  );

  return (
    <div>
      <p className="text-xs tracking-[0.2em] uppercase text-gold-dark mb-1">
        {label}
      </p>
      {href ? (
        <a href={href} className="hover:text-gold transition-colors">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
