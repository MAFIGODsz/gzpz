"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#historia", label: "Nossa História" },
  { href: "#produtos", label: "Produtos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#atuacao", label: "Atuação" },
];

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`;

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let raf: number;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let targetTiltX = 0, targetTiltY = 0;
    let currentTiltX = 0, currentTiltY = 0;

    const handleMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const nx = (e.clientX - cx) / cx;
      const ny = (e.clientY - cy) / cy;
      targetX = nx * 9;
      targetY = ny * 6;
      targetTiltX = ny * -5;
      targetTiltY = nx * 6;
    };

    const tick = () => {
      const ease = 0.07;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      currentTiltX += (targetTiltX - currentTiltX) * ease;
      currentTiltY += (targetTiltY - currentTiltY) * ease;

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX * 2.2}px, ${currentY * 2.2}px)`;
      }
      if (tiltRef.current) {
        tiltRef.current.style.transform =
          `perspective(900px) rotateX(${currentTiltX}deg) rotateY(${currentTiltY}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Background stack ── */}

      {/* Base */}
      <div className="absolute inset-0" style={{ background: "#131110" }} />

      {/* Deep radial — bottom warmth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(94,15,15,0.28) 0%, transparent 65%)",
        }}
      />

      {/* Centre bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 46%, rgba(140,26,26,0.09) 0%, transparent 70%)",
        }}
      />

      {/* Ambient mouse-tracking glow */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 900,
          height: 900,
          top: "50%",
          left: "50%",
          marginLeft: -450,
          marginTop: -450,
          background:
            "radial-gradient(circle, rgba(140,26,26,0.14) 0%, rgba(140,26,26,0.05) 45%, transparent 70%)",
          transition: "transform 0.1s linear",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: GRAIN_SVG,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
          opacity: 0.038,
          mixBlendMode: "overlay",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,240,232,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          opacity: 0.018,
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_120%_100%_at_50%_50%,transparent_45%,rgba(0,0,0,0.65)_100%)]" />

      {/* Top crimson accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(140,26,26,0.9)_30%,rgba(181,41,41,1)_50%,rgba(140,26,26,0.9)_70%,transparent)]" />

      {/* Animated SVG rings layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 900 900"
          className="absolute"
          style={{ width: "min(900px, 100vw)", height: "min(900px, 100vw)", opacity: 0.55 }}
          aria-hidden
        >
          {/* Outer dashed ring */}
          <circle
            cx="450" cy="450" r="390"
            fill="none"
            stroke="rgba(140,26,26,0.12)"
            strokeWidth="1"
            strokeDasharray="6 18"
            className="svg-ring-1"
          />
          {/* Mid ring */}
          <circle
            cx="450" cy="450" r="310"
            fill="none"
            stroke="rgba(140,26,26,0.09)"
            strokeWidth="1"
            strokeDasharray="3 24"
            className="svg-ring-2"
          />
          {/* Inner thin ring */}
          <circle
            cx="450" cy="450" r="230"
            fill="none"
            stroke="rgba(181,41,41,0.07)"
            strokeWidth="0.75"
            strokeDasharray="2 30"
            className="svg-ring-3"
          />
          {/* Crosshair lines */}
          <line x1="450" y1="60" x2="450" y2="140" stroke="rgba(140,26,26,0.15)" strokeWidth="1" />
          <line x1="450" y1="760" x2="450" y2="840" stroke="rgba(140,26,26,0.15)" strokeWidth="1" />
          <line x1="60" y1="450" x2="140" y2="450" stroke="rgba(140,26,26,0.15)" strokeWidth="1" />
          <line x1="760" y1="450" x2="840" y2="450" stroke="rgba(140,26,26,0.15)" strokeWidth="1" />
          {/* Corner marks */}
          <path d="M100 80 L80 80 L80 100" fill="none" stroke="rgba(140,26,26,0.2)" strokeWidth="1" />
          <path d="M800 80 L820 80 L820 100" fill="none" stroke="rgba(140,26,26,0.2)" strokeWidth="1" />
          <path d="M100 820 L80 820 L80 800" fill="none" stroke="rgba(140,26,26,0.2)" strokeWidth="1" />
          <path d="M800 820 L820 820 L820 800" fill="none" stroke="rgba(140,26,26,0.2)" strokeWidth="1" />
        </svg>
      </div>

      {/* ── Floating ambient cards (desktop only) ── */}

      {/* 2002 — top-left */}
      <div
        className="hero-card-2002 hidden lg:flex absolute flex-col gap-1 select-none"
        style={{ top: "22%", left: "6%" }}
      >
        <div
          className="px-4 py-3 rounded-lg flex flex-col gap-0.5"
          style={{
            background: "rgba(28,25,23,0.72)",
            border: "1px solid rgba(140,26,26,0.22)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <div className="display-font text-[26px] font-bold text-amber-light leading-none">2002</div>
          <div className="condensed-font text-[9px] tracking-[0.2em] uppercase text-text-secondary font-medium">
            Fundação Familiar
          </div>
        </div>
      </div>

      {/* 22+ anos — bottom-left */}
      <div
        className="hero-card-22 hidden lg:flex absolute flex-col gap-1 select-none"
        style={{ bottom: "26%", left: "5%" }}
      >
        <div
          className="px-4 py-3 rounded-lg"
          style={{
            background: "rgba(28,25,23,0.72)",
            border: "1px solid rgba(140,26,26,0.18)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <div className="display-font text-[26px] font-bold text-warm-white leading-none">
            22<span className="text-crimson-light text-[18px]">+</span>
          </div>
          <div className="condensed-font text-[9px] tracking-[0.2em] uppercase text-text-secondary font-medium mt-0.5">
            Anos de Tradição
          </div>
        </div>
      </div>

      {/* B2B Ativo — top-right */}
      <div
        className="hero-card-b2b hidden lg:flex absolute flex-col gap-1 select-none"
        style={{ top: "20%", right: "6%" }}
      >
        <div
          className="px-4 py-3 rounded-lg flex items-center gap-2.5"
          style={{
            background: "rgba(28,25,23,0.72)",
            border: "1px solid rgba(140,26,26,0.18)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: "#4ade80", boxShadow: "0 0 8px rgba(74,222,128,0.5)" }}
          />
          <div>
            <div className="condensed-font text-[10px] tracking-[0.18em] uppercase text-warm-white font-semibold">
              Fornecimento B2B
            </div>
            <div className="condensed-font text-[9px] tracking-[0.14em] uppercase text-text-secondary font-medium">
              Ativo · Zona da Mata
            </div>
          </div>
        </div>
      </div>

      {/* Location — bottom-right */}
      <div
        className="hero-card-loc hidden lg:flex absolute select-none"
        style={{ bottom: "28%", right: "5%" }}
      >
        <div
          className="px-4 py-3 rounded-lg"
          style={{
            background: "rgba(28,25,23,0.72)",
            border: "1px solid rgba(140,26,26,0.18)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <div className="condensed-font text-[10px] tracking-[0.18em] uppercase text-warm-white font-semibold">
            Maripá de Minas
          </div>
          <div className="condensed-font text-[9px] tracking-[0.14em] uppercase text-text-secondary font-medium mt-0.5">
            MG · Brasil
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl mx-auto">

        {/* Eyebrow label */}
        <div className="hero-eyebrow condensed-font text-[11px] tracking-[0.32em] uppercase text-crimson-light font-semibold mb-10 flex items-center gap-3">
          <span className="w-6 h-px bg-crimson-light opacity-60" />
          Fornecimento Industrial · B2B
          <span className="w-6 h-px bg-crimson-light opacity-60" />
        </div>

        {/* Logo — 3D tilt + parallax wrapper */}
        <div ref={parallaxRef} className="mb-8" style={{ willChange: "transform" }}>
          <div
            ref={tiltRef}
            style={{ willChange: "transform", transformStyle: "preserve-3d" }}
          >
            <div className="hero-logo-wrap relative" style={{ willChange: "transform" }}>
              {/* Outer pulsing ring */}
              <div
                className="hero-ring absolute rounded-full border border-[rgba(140,26,26,0.18)] pointer-events-none"
                style={{ inset: "-48px" }}
              />
              {/* Mid ring */}
              <div
                className="hero-ring absolute rounded-full border border-[rgba(140,26,26,0.08)] pointer-events-none"
                style={{ inset: "-88px", animationDelay: "1.5s" }}
              />
              {/* Outer-most ring */}
              <div
                className="hero-ring absolute rounded-full border border-[rgba(140,26,26,0.05)] pointer-events-none"
                style={{ inset: "-136px", animationDelay: "3s" }}
              />
              {/* Glow halo */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: "-40px",
                  background:
                    "radial-gradient(circle, rgba(140,26,26,0.26) 0%, rgba(140,26,26,0.08) 55%, transparent 75%)",
                }}
              />

              {/* Logo image */}
              <div
                className="relative z-10 select-none"
                style={{
                  width: "clamp(280px, 40vw, 420px)",
                  height: "clamp(280px, 40vw, 420px)",
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="GELZA Pizzas — Fornecimento Industrial Premium"
                  fill
                  priority
                  className="object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 20px 60px rgba(0,0,0,0.8)) drop-shadow(0 0 100px rgba(140,26,26,0.25))",
                  }}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sub-label */}
        <div className="hero-tagline condensed-font text-[11px] tracking-[0.28em] uppercase text-text-secondary font-medium mb-10">
          Pizzas Pré-Assadas Premium
        </div>

        {/* Thin divider */}
        <div
          className="hero-divider mb-10"
          style={{
            width: 64,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(140,26,26,0.7), transparent)",
          }}
        />

        {/* ── Navigation ── */}
        <nav
          aria-label="Navegação principal"
          className="hero-nav flex flex-col items-center gap-3 mb-14"
        >
          {/* Links row */}
          <div className="flex flex-wrap justify-center items-center gap-x-1 gap-y-1">
            {navLinks.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                className="group relative px-4 py-2.5 condensed-font text-[13px] tracking-[0.12em] uppercase font-semibold text-text-secondary hover:text-warm-white transition-colors duration-200"
                style={{ animationDelay: `${1.4 + i * 0.1}s` }}
              >
                <span className="relative z-10">{label}</span>
                <span className="absolute inset-0 rounded-sm bg-transparent group-hover:bg-[rgba(255,255,255,0.04)] transition-colors duration-200" />
                <span
                  className="absolute bottom-1.5 left-4 right-4 bg-crimson origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                  style={{ height: 1 }}
                />
              </Link>
            ))}
          </div>

          {/* CTA — centered below links, shimmer on hover */}
          <Link
            href="#contato"
            className="relative overflow-hidden bg-crimson text-white px-8 py-3 rounded-sm condensed-font text-[13px] tracking-[0.18em] uppercase font-bold transition-all duration-200 hover:bg-crimson-light active:scale-[0.97] group"
          >
            <span className="relative z-10">Seja Parceiro</span>
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-[250%] skew-x-[-12deg] transition-transform duration-700 ease-in-out"
              style={{ background: "rgba(255,255,255,0.12)" }}
            />
          </Link>
        </nav>

        {/* Scroll indicator */}
        <div className="hero-scroll flex flex-col items-center gap-2">
          <div
            className="animate-[scrollPulse_2s_infinite]"
            style={{
              width: 1,
              height: 52,
              background:
                "linear-gradient(180deg, var(--color-crimson), transparent)",
            }}
          />
          <span className="condensed-font text-[10px] tracking-[0.28em] uppercase text-text-secondary">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
