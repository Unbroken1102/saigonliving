import { agency, developer, navLinks, site } from "@/app/lib/vlasta-thong-tin/data";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white/60 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
        <div className="grid gap-10 border-b border-warm-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl text-warm-white">
              Saigon <span className="text-gradient-gold">Living</span>
            </p>
            <p className="text-xs tracking-[0.2em] uppercase text-gold-light mt-6 mb-4">
              {agency.role}
            </p>
            <div className="space-y-2 text-sm leading-relaxed">
              <p className="font-semibold text-warm-white">{agency.name}</p>
              <p>Chuyên gia phụ trách: {agency.advisor}</p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold-light mb-4">
              Điều hướng
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold-light mb-4">
              Liên hệ
            </p>
            <ul className="space-y-2 text-sm">
              <li>{site.hotline}</li>
              <li>{site.email}</li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold-light mb-4">
              Chủ đầu tư dự án
            </p>
            <div className="space-y-2 text-sm leading-relaxed">
              <p className="font-semibold text-warm-white">{developer.name}</p>
              <p>Thương hiệu: {site.developer}</p>
              <p>Dự án: {site.fullName}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs md:flex-row md:items-start md:justify-between">
          <div className="space-y-2 text-warm-white/50">
            <p>© 2026 {agency.name}. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="/privacy-policy"
                className="inline-flex text-warm-white/60 transition-colors hover:text-gold"
              >
                Chính sách bảo mật
              </a>
              <a
                href="/disclaimer"
                className="inline-flex text-warm-white/60 transition-colors hover:text-gold"
              >
                Miễn trừ trách nhiệm
              </a>
              <a
                href={site.pillarUrl}
                className="inline-flex text-warm-white/60 transition-colors hover:text-gold"
              >
                Trang phân tích đầy đủ
              </a>
            </div>
          </div>
          <div className="max-w-3xl space-y-2 leading-relaxed text-warm-white/40 md:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-warm-white/50">
              {agency.disclaimerTitle}
            </p>
            <p>{agency.disclaimer}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
