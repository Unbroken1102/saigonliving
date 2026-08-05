"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/app/lib/vlasta-thong-tin/data";
import { COMPLIANCE_BAR_OFFSET_CLASS } from "./ComplianceNoticeBar";
import Button from "./ui/Button";

export default function Navbar({ stackedBelowCompliance = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const telHref = `tel:${site.hotline.replace(/\s/g, "")}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 border-b transition-all duration-500 ${
          stackedBelowCompliance ? COMPLIANCE_BAR_OFFSET_CLASS : "top-0"
        } ${
          scrolled || menuOpen
            ? "border-charcoal/10 bg-[#faf6f0]/96 py-3 shadow-[0_8px_30px_rgba(28,27,25,0.08)] backdrop-blur-xl"
            : "glass-hero border-gold/10 py-3.5 md:py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10 lg:px-16">
          <a href="#tong-quan" className="group flex flex-col" aria-label="Vlasta Premier — Tổng quan">
            <span
              className={`font-display text-2xl font-medium tracking-tight transition-colors ${
                scrolled || menuOpen ? "text-charcoal" : "text-warm-white"
              }`}
            >
              Vlasta
              <span className="text-gradient-gold"> Premier</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  scrolled || menuOpen ? "text-charcoal" : "text-warm-white/85"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={telHref}
              className={`inline-flex items-center justify-center rounded-full border px-4 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 hover:border-gold hover:text-gold ${
                scrolled || menuOpen
                  ? "border-charcoal/20 text-charcoal"
                  : "border-warm-white/25 text-warm-white/85 backdrop-blur-sm"
              }`}
            >
              Gọi {site.hotline}
            </a>
            <a
              href={site.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0068ff] px-4 py-2.5 text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#2d83ff] hover:shadow-lg hover:shadow-[#0068ff]/25"
            >
              Zalo
            </a>
            <Button href="#lien-he" variant={scrolled ? "primary" : "white"}>
              Bảng giá
            </Button>
          </div>

          <button
            type="button"
            aria-label="Menu"
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                menuOpen
                  ? "rotate-45 translate-y-2 bg-charcoal"
                  : scrolled
                    ? "bg-charcoal"
                    : "bg-warm-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                menuOpen
                  ? "opacity-0"
                  : scrolled
                    ? "bg-charcoal"
                    : "bg-warm-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                menuOpen
                  ? "-rotate-45 -translate-y-2 bg-charcoal"
                  : scrolled
                    ? "bg-charcoal"
                    : "bg-warm-white"
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#faf6f0]/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center gap-8 h-full">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-charcoal hover:text-gold transition-colors"
              style={{
                transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={telHref}
              onClick={() => setMenuOpen(false)}
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium tracking-wide text-warm-white transition-colors hover:bg-charcoal-soft"
            >
              Gọi {site.hotline}
            </a>
            <a
              href={site.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#0068ff] px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#2d83ff]"
            >
              Chat Zalo
            </a>
            <Button
              href="#lien-he"
              variant="primary"
              onClick={() => setMenuOpen(false)}
            >
              Nhận bảng giá
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
