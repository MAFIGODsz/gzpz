"use client";

import { useEffect, useRef, useState } from "react";

const cities = [
  { name: "Maripá de Minas", label: "Sede Operacional", x: 46, y: 55, isHQ: true },
  { name: "Bicas", x: 86, y: 45, isHQ: false },
  { name: "Mar de Espanha", x: 82, y: 22, isHQ: false },
  { name: "São João Nepomuceno", x: 60, y: 75, isHQ: false },
  { name: "Pequeri", x: 22, y: 72, isHQ: false },
  { name: "Expansão", x: 22, y: 25, isHQ: false, isExpansion: true },
];

interface City {
  name: string;
  label?: string;
  x: number;
  y: number;
  isHQ: boolean;
  isExpansion?: boolean;
}

function MapPin({ city, visible, delay }: { city: City; visible: boolean; delay: number }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(t);
    }
  }, [visible, delay]);

  const cx = `${city.x}%`;
  const cy = `${city.y}%`;

  if (city.isHQ) {
    return (
      <g style={{ opacity: show ? 1 : 0, transition: "opacity 0.6s ease, transform 0.6s ease", transform: show ? "scale(1)" : "scale(0.4)", transformOrigin: `${city.x}% ${city.y}%` }}>
        {/* Pulse rings */}
        <circle cx={cx} cy={cy} r="18" fill="none" stroke="rgba(140,26,26,0.15)" strokeWidth="1">
          <animate attributeName="r" values="12;22;12" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r="8" fill="none" stroke="rgba(140,26,26,0.3)" strokeWidth="1">
          <animate attributeName="r" values="6;14;6" dur="3s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        {/* Main pin */}
        <circle cx={cx} cy={cy} r="7" fill="#8c1a1a" />
        <circle cx={cx} cy={cy} r="3.5" fill="#e05555" />
        {/* Sede Operacional label — above city name */}
        <text x={cx} y={`${city.y - 13}%`} textAnchor="middle" fill="rgba(181,41,41,0.75)" fontSize="3.5" fontFamily="'Barlow Condensed', sans-serif" letterSpacing="0.22em" style={{ textTransform: "uppercase" }}>
          {city.label}
        </text>
        {/* City name */}
        <text x={cx} y={`${city.y - 6}%`} textAnchor="middle" fill="rgba(245,240,232,0.9)" fontSize="6" fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" letterSpacing="0.1em" style={{ textTransform: "uppercase" }}>
          {city.name}
        </text>
      </g>
    );
  }

  if (city.isExpansion) {
    return (
      <g style={{ opacity: show ? 1 : 0, transition: `opacity 0.6s ease ${delay}ms` }}>
        <circle cx={cx} cy={cy} r="5" fill="none" stroke="rgba(176,125,60,0.5)" strokeWidth="1" strokeDasharray="2,2">
          <animate attributeName="r" values="4;8;4" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.15;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r="3" fill="rgba(176,125,60,0.3)" stroke="#b07d3c" strokeWidth="1" />
        <text x={cx} y={`${city.y - 4}%`} textAnchor="middle" fill="rgba(176,125,60,0.8)" fontSize="4.5" fontFamily="'Barlow Condensed', sans-serif" letterSpacing="0.1em" style={{ textTransform: "uppercase" }}>
          {city.name}
        </text>
      </g>
    );
  }

  return (
    <g style={{ opacity: show ? 1 : 0, transition: `opacity 0.6s ease, transform 0.6s ease`, transform: show ? "scale(1)" : "scale(0.3)", transformOrigin: `${city.x}% ${city.y}%` }}>
      <circle cx={cx} cy={cy} r="4" fill="rgba(140,26,26,0.6)" stroke="#8c1a1a" strokeWidth="1" />
      <circle cx={cx} cy={cy} r="2" fill="#b52929" />
      <text x={cx} y={`${city.y - 4}%`} textAnchor="middle" fill="rgba(245,240,232,0.7)" fontSize="4.5" fontFamily="'Barlow Condensed', sans-serif" letterSpacing="0.08em">
        {city.name}
      </text>
    </g>
  );
}

function ConnectorLine({ from, to, visible, delay }: { from: City; to: City; visible: boolean; delay: number }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(t);
    }
  }, [visible, delay]);

  return (
    <line
      x1={`${from.x}%`} y1={`${from.y}%`}
      x2={`${to.x}%`} y2={`${to.y}%`}
      stroke="rgba(140,26,26,0.25)"
      strokeWidth="0.5"
      strokeDasharray="3,4"
      style={{ opacity: show ? 1 : 0, transition: `opacity 0.8s ease ${delay}ms` }}
    />
  );
}

export default function RegionalActuation() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  const hq = cities[0];
  const secondaryCities = cities.slice(1);

  return (
    <section id="atuacao" className="bg-charcoal-mid border-t border-border-dark py-[var(--section-pad)]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: text + cities list */}
          <div className="reveal">
            <div className="section-label">Área de Atuação</div>
            <h2 className="display-font text-[clamp(36px,4vw,62px)] font-bold leading-[1.1] text-warm-white mb-5">
              Zona da Mata<br />
              <em className="italic text-crimson-light">Mineira.</em>
            </h2>
            <p className="text-[17px] text-text-secondary leading-[1.75] font-light max-w-[560px]">
              Presença ativa nas principais cidades da região, com logística própria, atendimento
              direto e entrega regular para todos os parceiros.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-dark border border-border-dark mt-10">
              {[
                { name: "Maripá de Minas", isExpansion: false },
                { name: "Bicas", isExpansion: false },
                { name: "Mar de Espanha", isExpansion: false },
                { name: "São João Nepomuceno", isExpansion: false },
                { name: "Pequeri", isExpansion: false },
                { name: "+ Região em expansão", isExpansion: true }
              ].map((item) => (
                <div key={item.name} className="bg-charcoal-mid p-5 px-6 flex items-center gap-3 transition-colors duration-300 hover:bg-charcoal-light">
                  <div className={`w-2 h-2 rounded-full ${item.isExpansion ? "bg-amber" : "bg-crimson"} shrink-0`} />
                  <span className={`text-sm font-medium ${item.isExpansion ? "text-text-secondary" : "text-warm-white"}`}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: premium map panel */}
          <div className="reveal reveal-delay-1" ref={mapRef}>

            {/* Sede card */}
            <div className="bg-charcoal border border-border-dark rounded p-8 sm:p-10 mb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="condensed-font text-[11px] tracking-[0.2em] uppercase text-text-secondary mb-3 sm:mb-4 font-medium">SEDE</div>
                <h3 className="display-font text-[24px] sm:text-[28px] font-bold text-warm-white mb-2 sm:mb-3 leading-[1.2]">
                  Maripá de Minas — MG
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-[1.6] sm:leading-[1.7] font-light">
                  Base operacional central da GELZA, de onde partem todas as produções e entregas para a região da Zona da Mata Mineira.
                </p>
              </div>
              
              <div className="w-12 h-12 rounded bg-[rgba(140,26,26,0.12)] border border-[rgba(140,26,26,0.25)] flex items-center justify-center shrink-0 self-start sm:self-auto">
                <svg className="w-6 h-6 fill-none stroke-crimson-light" strokeWidth="1.5" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
            </div>

            {/* Map panel */}
            <div className="bg-charcoal border border-border-dark rounded overflow-hidden relative" style={{ height: 300 }}>

              {/* Corner label */}
              <div className="absolute top-3 left-4 z-20 condensed-font text-[9px] tracking-[0.25em] uppercase text-text-secondary font-medium opacity-60">
                Painel Logístico · Zona da Mata MG
              </div>

              {/* SVG map */}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
                style={{ overflow: "visible" }}
              >
                {/* Grid */}
                {[10,20,30,40,50,60,70,80,90].map(v => (
                  <g key={v}>
                    <line x1={v} y1="0" x2={v} y2="100" stroke="white" strokeWidth="0.15" opacity="0.06" />
                    <line x1="0" y1={v} x2="100" y2={v} stroke="white" strokeWidth="0.15" opacity="0.06" />
                  </g>
                ))}

                {/* Connector lines from HQ to each city */}
                {secondaryCities.map((city, i) => (
                  <ConnectorLine key={city.name} from={hq} to={city} visible={visible} delay={400 + i * 150} />
                ))}

                {/* Secondary city pins */}
                {secondaryCities.map((city, i) => (
                  <MapPin key={city.name} city={city} visible={visible} delay={600 + i * 150} />
                ))}

                {/* HQ pin (rendered last so it's on top) */}
                <MapPin city={hq} visible={visible} delay={200} />
              </svg>

              {/* Bottom stats strip */}
              <div className="absolute bottom-0 inset-x-0 bg-[rgba(0,0,0,0.45)] border-t border-[rgba(255,255,255,0.06)] px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div>
                    <div className="condensed-font text-[9px] tracking-[0.2em] uppercase text-text-secondary font-medium">Cidades</div>
                    <div className="display-font text-[18px] font-bold text-crimson-light leading-none">6+</div>
                  </div>
                  <div className="w-px h-8 bg-border-dark" />
                  <div>
                    <div className="condensed-font text-[9px] tracking-[0.2em] uppercase text-text-secondary font-medium">Região</div>
                    <div className="condensed-font text-[11px] font-semibold text-warm-white leading-none tracking-wide">Zona da Mata MG</div>
                  </div>
                  <div className="w-px h-8 bg-border-dark" />
                  <div>
                    <div className="condensed-font text-[9px] tracking-[0.2em] uppercase text-text-secondary font-medium">Status</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0 relative">
                        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" style={{ animationDuration: "2s" }} />
                      </div>
                      <span className="condensed-font text-[10px] tracking-wide text-green-400 font-semibold uppercase">Em expansão</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
