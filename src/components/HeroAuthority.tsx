"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";

const metrics = [
  { end: 22, suffix: "+", label: "Anos de Tradição" },
  { end: 4,  suffix: "+", label: "Redes Parceiras" },
  { end: 6,  suffix: "+", label: "Cidades Atendidas" },
];

const bars = [
  { h: "38%", color: "var(--color-charcoal-light)", delay: "0.1s" },
  { h: "55%", color: "var(--color-charcoal-light)", delay: "0.2s" },
  { h: "44%", color: "var(--color-charcoal-light)", delay: "0.3s" },
  { h: "78%", color: "var(--color-crimson)",        delay: "0.4s" },
  { h: "100%",color: "var(--color-crimson-light)",  delay: "0.5s" },
];

function BarChart({ active }: { active: boolean }) {
  return (
    <div>
      <div className="condensed-font text-[10px] tracking-[0.2em] uppercase text-text-secondary mb-3 font-medium">
        Crescimento Regional
      </div>
      <div className="flex gap-2 items-end" style={{ height: 56 }}>
        {bars.map((b, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm origin-bottom"
            style={{
              backgroundColor: b.color,
              height: active ? b.h : "0%",
              transition: `height 0.7s cubic-bezier(0.22,1,0.36,1) ${b.delay}`,
            }}
          />
        ))}
      </div>
      <div className="condensed-font text-[10px] text-text-secondary mt-2 font-light">
        2020 → 2024+
      </div>
    </div>
  );
}

export default function HeroAuthority() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [barsActive, setBarsActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setBarsActive(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="autoridade"
      className="bg-charcoal border-t border-border-dark py-[var(--section-pad)] relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(140,26,26,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-5 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: tagline + description ── */}
          <div className="reveal">
            <div className="section-label">A GELZA</div>

            <h2
              className="display-font font-bold leading-[1.08] text-warm-white mb-7"
              style={{ fontSize: "clamp(36px, 4.5vw, 68px)" }}
            >
              Qualidade<br />
              <em className="italic text-crimson-light">artesanal,</em>
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(245,240,232,0.28)" }}
              >
                escala
              </span>{" "}
              industrial.
            </h2>

            <div
              className="mb-8"
              style={{
                width: 56,
                height: 2,
                background:
                  "linear-gradient(90deg, var(--color-crimson), transparent)",
              }}
            />

            <p className="text-[17px] leading-[1.78] text-text-secondary font-light max-w-[500px] mb-10">
              A GELZA fornece{" "}
              <strong className="text-warm-white font-medium">
                pizzas pré-assadas premium
              </strong>{" "}
              para supermercados, mercearias e pizzarias parceiras em toda a
              Zona da Mata Mineira. Produção padronizada, sabor genuíno, entrega
              confiável.
            </p>

            <Link
              href="#contato"
              className="relative overflow-hidden inline-flex items-center gap-2.5 bg-crimson text-white px-8 py-3.5 rounded-sm condensed-font text-[13px] tracking-[0.16em] uppercase font-bold transition-all duration-200 hover:bg-crimson-light active:scale-[0.97] group"
            >
              <span className="relative z-10">Quero Ser Parceiro</span>
              <svg className="w-4 h-4 shrink-0 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-[250%] skew-x-[-12deg] transition-transform duration-700 ease-in-out" style={{ background: "rgba(255,255,255,0.12)" }} />
            </Link>
          </div>

          {/* ── Right: metrics + chart ── */}
          <div className="reveal reveal-delay-1">
            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-px bg-border-dark border border-border-dark mb-5 rounded overflow-hidden">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-charcoal-mid p-6 md:p-8 flex flex-col items-center text-center gap-1.5 hover:bg-charcoal-light transition-colors duration-200"
                >
                  <div className="display-font font-bold leading-none text-warm-white" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                    <AnimatedCounter end={m.end} duration={2000} />
                    <span className="text-crimson-light">{m.suffix}</span>
                  </div>
                  <div className="condensed-font text-[11px] tracking-[0.12em] uppercase text-text-secondary font-medium">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Growth chart card */}
            <div className="bg-charcoal-mid border border-border-dark rounded p-7 md:p-8">
              <BarChart active={barsActive} />
            </div>

            {/* Founding badge */}
            <div className="mt-5 flex items-center gap-4 bg-[linear-gradient(135deg,rgba(94,15,15,0.35),rgba(140,26,26,0.2))] border border-[rgba(140,26,26,0.2)] rounded px-6 py-4">
              <div className="display-font text-[38px] font-bold text-amber-light leading-none">
                2002
              </div>
              <div>
                <div className="condensed-font text-[11px] tracking-[0.15em] uppercase text-[rgba(255,255,255,0.5)] font-medium">
                  Fundação familiar
                </div>
                <div className="condensed-font text-[12px] tracking-[0.1em] uppercase text-warm-muted font-semibold">
                  Formalizada em 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
