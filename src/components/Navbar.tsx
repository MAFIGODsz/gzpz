"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#historia", label: "Nossa História" },
  { href: "#produtos", label: "Produtos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#atuacao", label: "Atuação" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Show only after hero leaves viewport */
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        setVisible(!e.isIntersecting);
        if (e.isIntersecting) setMobileOpen(false);
      },
      { threshold: 0.05 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  /* Solidify background on deeper scroll */
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    /* Outer wrapper — full-width but transparent, provides the top margin */
    <div
      aria-hidden={!visible}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 transition-all duration-500 ease-in-out ${
        visible
          ? "pointer-events-auto opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 -translate-y-3"
      }`}
      style={{ paddingTop: "clamp(16px, 2.5vw, 28px)" }}
    >
      {/* Pill navbar */}
      <nav
        role="navigation"
        aria-label="Menu Principal"
        className={`w-full transition-all duration-500 ease-in-out rounded-2xl border ${
          scrolled
            ? "bg-[rgba(24,20,17,0.97)] border-[rgba(255,255,255,0.1)] backdrop-blur-2xl shadow-[0_8px_48px_rgba(0,0,0,0.55)]"
            : "bg-[rgba(28,25,23,0.78)] border-[rgba(255,255,255,0.07)] backdrop-blur-xl shadow-[0_4px_28px_rgba(0,0,0,0.35)]"
        }`}
        style={{ maxWidth: 1020 }}
      >
        {/* ── Main bar ── */}
        <div className="flex items-center justify-between gap-4 px-5 md:px-6 h-[54px] md:h-[58px]">

          {/* Logo mark */}
          <Link
            href="#hero"
            onClick={close}
            className="flex items-center gap-2.5 shrink-0 group no-underline"
            tabIndex={visible ? 0 : -1}
          >
            <Image
              src="/images/logo.png"
              alt="GELZA Pizzas"
              width={44}
              height={44}
              className="w-11 h-11 object-contain transition-opacity duration-200 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop links — centered */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                tabIndex={visible ? 0 : -1}
                className="relative px-3.5 py-2 condensed-font text-[12px] tracking-[0.1em] uppercase font-semibold text-text-secondary hover:text-warm-white transition-colors duration-200 rounded-xl hover:bg-[rgba(255,255,255,0.05)] group"
              >
                {label}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="#contato"
            tabIndex={visible ? 0 : -1}
            className="hidden md:inline-flex relative overflow-hidden shrink-0 items-center bg-crimson text-white px-5 py-2 rounded-xl condensed-font text-[12px] tracking-[0.14em] uppercase font-bold transition-all duration-200 hover:bg-crimson-light active:scale-[0.97] group"
          >
            <span className="relative z-10">Seja Parceiro</span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-[250%] skew-x-[-12deg] transition-transform duration-700 ease-in-out" style={{ background: "rgba(255,255,255,0.12)" }} />
          </Link>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-[5px] rounded-lg shrink-0 hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-200"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            tabIndex={visible ? 0 : -1}
          >
            <span
              className={`block w-[18px] h-[1.5px] bg-warm-white transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-[18px] h-[1.5px] bg-warm-white transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-[18px] h-[1.5px] bg-warm-white transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>

        {/* ── Mobile dropdown ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[rgba(255,255,255,0.07)] px-5 pt-3 pb-5 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={close}
                className="py-2.5 px-2 condensed-font text-[13px] tracking-[0.1em] uppercase font-semibold text-text-secondary hover:text-warm-white transition-colors duration-200 border-b border-[rgba(255,255,255,0.05)] last:border-0"
              >
                {label}
              </Link>
            ))}
            <Link
              href="#contato"
              onClick={close}
              className="mt-3 relative overflow-hidden bg-crimson text-white px-5 py-3 rounded-xl condensed-font text-[13px] tracking-[0.16em] uppercase font-bold text-center hover:bg-crimson-light active:scale-[0.97] transition-all duration-200 group"
            >
              <span className="relative z-10">Seja Parceiro</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-[250%] skew-x-[-12deg] transition-transform duration-700 ease-in-out" style={{ background: "rgba(255,255,255,0.12)" }} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
