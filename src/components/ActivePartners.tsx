"use client";

import { useRef } from "react";
import Image from "next/image";

interface Partner {
  name: string;
  category: string;
  logo: string;
  url: string;
  isWhiteBg?: boolean;
}

const partners: Partner[] = [
  {
    name: "Rede Triângulo",
    category: "Rede de Supermercados",
    logo: "/images/rede-triangulo.jpg",
    url: "https://www.instagram.com/triangulosupermercado/",
  },
  {
    name: "Rocha Supermercado",
    category: "Supermercado Regional",
    logo: "/images/rocha-supermercado.jpg",
    url: "https://www.instagram.com/rochasupermercados.maripa/",
  },
  {
    name: "Viva Alimentos",
    category: "Distribuição Alimentícia",
    logo: "/images/viva-alimentos.jpg",
    url: "https://www.instagram.com/viva_alimentosoficial/",
  },
  {
    name: "Supermercado Magela",
    category: "Supermercado Regional",
    logo: "/images/mercado-magela.jpg",
    url: "https://www.instagram.com/mercadomagela/",
    isWhiteBg: true,
  },
];

// 4 copies so the track is always wider than any viewport — -25% = exactly 1 set
const quadrupled = [...partners, ...partners, ...partners, ...partners];

export default function ActivePartners() {
  const trackRef = useRef<HTMLDivElement>(null);

  const pause = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const resume = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  return (
    <section
      id="parceiros"
      className="bg-charcoal-mid border-t border-border-dark py-[var(--section-pad)] relative overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,240,232,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.012,
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[320px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 85% 0%, rgba(140,26,26,0.05) 0%, transparent 70%)",
        }}
      />

      {/* ── Header ── */}
      <div className="max-w-[1360px] mx-auto px-5 md:px-12 mb-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 reveal">
          <div>
            <div className="section-label">Parceiros Comerciais</div>
            <h2
              className="display-font font-bold leading-[1.08] text-warm-white"
              style={{ fontSize: "clamp(34px,4vw,60px)" }}
            >
              Redes que{" "}
              <em className="italic text-crimson-light">confiam na GELZA.</em>
            </h2>
          </div>
          <div className="lg:text-right lg:shrink-0 lg:max-w-[320px]">
            <p className="text-[15px] text-text-secondary leading-[1.75] font-light mb-4">
              Parcerias construídas com base em qualidade consistente, entrega
              pontual e relacionamento próximo.
            </p>
            <div className="flex items-center gap-3 lg:justify-end">
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  background: "#4ade80",
                  boxShadow: "0 0 6px rgba(74,222,128,0.45)",
                }}
              />
              <span className="condensed-font text-[11px] tracking-[0.2em] uppercase text-text-secondary font-medium">
                4 Parceiros Ativos · Zona da Mata Mineira
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Marquee strip ── */}
      <div
        className="relative w-full"
        style={{
          overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(0,0,0,0.18)",
        }}
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-28 md:w-48 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, var(--color-charcoal-mid) 0%, transparent 100%)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-28 md:w-48 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(270deg, var(--color-charcoal-mid) 0%, transparent 100%)",
          }}
        />

        {/* Track — animation via inline style, guaranteed to apply */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            width: "max-content",
            animation: "partnersScroll 48s linear infinite",
          }}
        >
          {quadrupled.map((partner, i) => (
            <a
              key={`${partner.name}-${i}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver parceiro ${partner.name}`}
              className="group/card w-[290px] shrink-0 flex items-center gap-5 px-8 py-9 border-r border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.02)] transition-colors duration-500 cursor-pointer"
            >
              {/* Logo */}
              <div
                className={`w-[72px] h-[72px] rounded-lg shrink-0 overflow-hidden flex items-center justify-center border border-[rgba(255,255,255,0.07)] transition-opacity duration-300 group-hover/card:opacity-80 ${
                  partner.isWhiteBg ? "bg-white" : "bg-[rgba(255,255,255,0.03)]"
                }`}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={72}
                  height={72}
                  className={`w-full h-full ${
                    partner.isWhiteBg ? "object-contain p-2" : "object-cover"
                  }`}
                  draggable={false}
                />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <div className="display-font text-[17px] font-semibold text-warm-white leading-snug truncate">
                  {partner.name}
                </div>
                <div className="condensed-font text-[10px] tracking-[0.18em] uppercase text-crimson-light font-medium mt-1">
                  {partner.category}
                </div>
                <div className="flex items-center gap-1 mt-2 opacity-0 group-hover/card:opacity-40 transition-opacity duration-200">
                  <svg
                    className="w-3 h-3 text-text-secondary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span className="condensed-font text-[9px] tracking-[0.12em] uppercase text-text-secondary">
                    Ver perfil
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Footer tagline ── */}
      <div className="max-w-[1360px] mx-auto px-5 md:px-12 mt-10 relative z-10 reveal">
        <p className="condensed-font text-[11px] tracking-[0.2em] uppercase text-text-secondary font-medium flex items-center gap-3">
          <span className="w-5 h-px bg-[rgba(255,255,255,0.12)]" />
          Parcerias regionais em constante expansão
          <span className="w-5 h-px bg-[rgba(255,255,255,0.12)]" />
        </p>
      </div>
    </section>
  );
}
