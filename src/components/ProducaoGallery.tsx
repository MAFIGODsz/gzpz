import Image from "next/image";

interface Tile {
  src: string;
  alt: string;
  caption: string;
  tag: string;
  /* grid placement on large screens */
  area: string;
}

const tiles: Tile[] = [
  {
    src: "/images/producao-massas.jpg",
    alt: "Linha de produção de massas de pizza da GELZA Pizzas",
    caption: "Massas preparadas com cuidado",
    tag: "Produção",
    area: "lg:col-span-5 lg:row-span-2",
  },
  {
    src: "/images/bandejas-embaladas.jpg",
    alt: "Bandejas de pizzas pré-assadas GELZA embaladas para mercados",
    caption: "Bandejas prontas para comercialização",
    tag: "Embalagem",
    area: "lg:col-span-4 lg:row-span-1",
  },
  {
    src: "/images/produto-fachada.jpg",
    alt: "Produto embalado GELZA Pizzas pronto para parceiros comerciais",
    caption: "Produto pronto para o seu negócio",
    tag: "Entrega",
    area: "lg:col-span-3 lg:row-span-2",
  },
  {
    src: "/images/bandejas-grade.jpg",
    alt: "Escala de produção de bandejas de pizza GELZA",
    caption: "Escala com padrão artesanal",
    tag: "Escala",
    area: "lg:col-span-2 lg:row-span-1",
  },
  {
    src: "/images/produtos-sabores.jpg",
    alt: "Pizzas pré-assadas GELZA nos sabores presunto e calabresa",
    caption: "Dois sabores, mesmo padrão",
    tag: "Sabores",
    area: "lg:col-span-2 lg:row-span-1",
  },
];

export default function ProducaoGallery() {
  return (
    <section
      id="producao"
      className="bg-charcoal border-t border-border-dark py-[var(--section-pad)] relative overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 w-[520px] h-[520px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 10%, rgba(140,26,26,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-5 md:px-12 relative z-10">
        {/* ── Header ── */}
        <div className="max-w-[640px] mb-14 reveal">
          <div className="section-label">Da produção à entrega</div>
          <h2 className="display-font text-[clamp(36px,4vw,62px)] font-bold leading-[1.1] text-warm-white mb-5">
            Produção real,{" "}
            <em className="italic text-crimson-light">qualidade visível.</em>
          </h2>
          <p className="text-[17px] text-text-secondary leading-[1.75] font-light">
            Da massa à embalagem, a GELZA trabalha com processos organizados para
            entregar pizzas pré-assadas com padrão, praticidade e sabor aos seus
            parceiros comerciais.
          </p>
        </div>

        {/* ── Editorial bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[220px] lg:auto-rows-[230px]">
          {tiles.map((t, i) => (
            <figure
              key={t.src}
              className={`group relative overflow-hidden rounded border border-border-dark reveal ${
                i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : i >= 3 ? "reveal-delay-3" : ""
              } ${t.area}`}
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                style={
                  t.src === "/images/produto-fachada.jpg"
                    ? { objectPosition: "left 78%" }
                    : undefined
                }
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,8,8,0.82)_0%,rgba(15,8,8,0.15)_45%,transparent_70%)] transition-opacity duration-500 group-hover:opacity-90" />

              {/* Tag — top-left */}
              <figcaption className="absolute top-3.5 left-3.5 z-10">
                <span
                  className="condensed-font text-[9px] tracking-[0.24em] uppercase text-warm-white font-semibold px-2.5 py-1 rounded-sm"
                  style={{ background: "rgba(140,26,26,0.85)", backdropFilter: "blur(4px)" }}
                >
                  {t.tag}
                </span>
              </figcaption>

              {/* Caption — bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 z-10 flex items-center gap-2.5">
                <div className="w-4 h-px bg-crimson-light shrink-0 opacity-80" />
                <p className="condensed-font text-[12px] tracking-[0.06em] text-warm-white font-medium leading-snug">
                  {t.caption}
                </p>
              </div>
            </figure>
          ))}
        </div>

        {/* ── Footer micro-stats strip ── */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-border-dark border border-border-dark rounded overflow-hidden reveal">
          {[
            { v: "520g", l: "Bandeja padrão" },
            { v: "2", l: "Sabores clássicos" },
            { v: "100%", l: "Pré-assada" },
            { v: "B2B", l: "Fornecimento" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-charcoal-mid p-5 md:p-6 flex flex-col items-center text-center gap-1 hover:bg-charcoal-light transition-colors duration-200"
            >
              <div className="display-font text-[26px] md:text-[30px] font-bold text-amber-light leading-none">
                {s.v}
              </div>
              <div className="condensed-font text-[10px] tracking-[0.16em] uppercase text-text-secondary font-medium">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
