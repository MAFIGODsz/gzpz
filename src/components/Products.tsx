const sizes = [
  {
    label: "20cm",
    name: "Massa Individual",
    desc: "Tamanho ideal para porção individual. Perfeita para mercearias, padarias e estabelecimentos com cardápio variado.",
    badge: "Individual",
    badgeClass: "bg-crimson",
    circleSize: "w-[88px] h-[88px]",
    revealDelay: "",
  },
  {
    label: "30cm",
    name: "Massa Familiar",
    desc: "O tamanho mais versátil. Atende supermercados, pizzarias e estabelecimentos com alto volume de vendas.",
    badge: "Mais Vendida",
    badgeClass: "bg-crimson",
    circleSize: "w-[114px] h-[114px]",
    revealDelay: "reveal-delay-1",
  },
  {
    label: "35cm",
    name: "Massa Premium",
    desc: "Tamanho especial para pizzarias parceiras. Alta margem, produto nobre, resultado superior para o consumidor final.",
    badge: "Premium",
    badgeClass: "bg-amber",
    circleSize: "w-[134px] h-[134px]",
    revealDelay: "reveal-delay-2",
  },
];

function HamIcon() {
  return (
    <svg viewBox="0 0 44 44" className="w-9 h-9" fill="none" aria-hidden>
      {/* Outer rind — bold, confident oval */}
      <ellipse
        cx="22" cy="22" rx="18" ry="12.5"
        stroke="rgba(245,240,232,0.68)"
        strokeWidth="1.6"
      />
      {/* Inner lean zone */}
      <ellipse
        cx="22" cy="22" rx="11" ry="7.5"
        stroke="rgba(245,240,232,0.32)"
        strokeWidth="1.1"
        strokeDasharray="3 5"
        strokeLinecap="round"
      />
      {/* Bone — large amber accent, the unmistakable presunto signature */}
      <ellipse
        cx="22" cy="22" rx="3.8" ry="2.7"
        fill="rgba(176,125,60,1)"
      />
      <ellipse
        cx="22" cy="22" rx="3.8" ry="2.7"
        stroke="rgba(212,162,87,0.6)"
        strokeWidth="1"
      />
    </svg>
  );
}

function CalabresaIcon() {
  // 4 cardinal dots — bolder, more readable than 6
  const cardinalDots: [number, number][] = [
    [22, 12.5],  // N
    [31.5, 22],  // E
    [22, 31.5],  // S
    [12.5, 22],  // W
  ];
  return (
    <svg viewBox="0 0 44 44" className="w-9 h-9" fill="none" aria-hidden>
      {/* Outer casing — bold ring */}
      <circle
        cx="22" cy="22" r="18"
        stroke="rgba(245,240,232,0.65)"
        strokeWidth="1.6"
      />
      {/* Inner texture ring — subtle */}
      <circle
        cx="22" cy="22" r="12"
        stroke="rgba(245,240,232,0.15)"
        strokeWidth="0.8"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />
      {/* Fat/spice cardinal dots — bold and clear */}
      {cardinalDots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.2" fill="rgba(245,240,232,0.52)" />
      ))}
      {/* Centre — large crimson accent */}
      <circle cx="22" cy="22" r="3.5" fill="rgba(140,26,26,0.96)" />
      <circle cx="22" cy="22" r="3.5" stroke="rgba(181,41,41,0.5)" strokeWidth="1" />
    </svg>
  );
}

const tags = [
  { label: "Presunto" },
  { label: "Calabresa" },
  { label: "Bandeja 10un" },
];

export default function Products() {
  return (
    <section
      id="produtos"
      className="bg-charcoal-mid border-t border-border-dark py-[var(--section-pad)]"
    >
      <div className="max-w-[1360px] mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="text-center max-w-[620px] mx-auto mb-[72px] reveal">
          <div className="section-label justify-center before:hidden">
            Linha de Produtos
          </div>
          <h2 className="display-font text-[clamp(36px,4vw,62px)] font-bold leading-[1.1] text-warm-white mb-5">
            Massas{" "}
            <em className="italic text-crimson-light">para todo formato</em>
            <br />
            de negócio.
          </h2>
          <p className="text-[17px] text-text-secondary leading-[1.75] font-light max-w-[520px] mx-auto">
            Três tamanhos, dois sabores, uma qualidade. Produtos desenvolvidos
            para atender supermercados, mercearias e pizzarias com eficiência e
            consistência.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sizes.map((s) => (
            <div key={s.label} className={`prod-card reveal ${s.revealDelay}`}>
              {/* Visual Area */}
              <div className="h-[200px] bg-[linear-gradient(160deg,#2D2420,#3D2A24)] flex items-center justify-center relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_40%,var(--color-charcoal)_100%)]">
                {/* Decorative pizza circle */}
                <div
                  className={`${s.circleSize} rounded-full bg-[radial-gradient(circle_at_35%_35%,#6B2F1A,#3A1608)] border-[1.5px] border-[rgba(107,47,26,0.5)] relative z-10`}
                />
                {/* Size badge */}
                <div
                  className={`absolute top-4 right-4 z-20 ${s.badgeClass} text-white rounded-sm condensed-font text-[11px] tracking-[0.18em] uppercase font-bold px-2.5 py-[5px]`}
                >
                  {s.badge}
                </div>
                {/* Size label bottom-left */}
                <div className="absolute bottom-[52px] left-5 z-20 condensed-font text-[11px] tracking-[0.15em] uppercase text-[rgba(255,255,255,0.3)] font-semibold">
                  {s.label}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 pt-5 relative z-30">
                <h3 className="display-font text-[22px] font-semibold text-warm-white mb-2 leading-snug">
                  {s.name}
                </h3>
                <p className="text-[13px] text-text-secondary leading-[1.7] font-light mb-5">
                  {s.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {tags.map((t) => (
                    <span
                      key={t.label}
                      className="condensed-font text-[11px] tracking-[0.1em] uppercase px-2.5 py-[5px] rounded-sm bg-[rgba(255,255,255,0.03)] border border-border-dark text-text-secondary font-medium"
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sabores */}
        <div className="mt-16 reveal">
          <div className="mb-8">
            <div className="section-label">Sabores Disponíveis</div>
            <h3 className="display-font text-[clamp(28px,3vw,42px)] font-bold text-warm-white">
              Dois clássicos,{" "}
              <em className="italic text-crimson-light">produção constante.</em>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Presunto */}
            <div className="bg-charcoal border border-border-dark rounded p-7 md:p-8 flex items-center gap-6 sabor-card cursor-default">
              <div className="w-[68px] h-[68px] rounded-xl shrink-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,rgba(60,35,20,0.7),rgba(22,17,14,0.9))", border: "1px solid rgba(176,125,60,0.2)" }}>
                <HamIcon />
              </div>
              <div>
                <h4 className="display-font text-xl font-semibold text-warm-white mb-1.5">
                  Presunto
                </h4>
                <p className="text-[13px] text-text-secondary font-light leading-[1.65]">
                  Cobertura generosa, sabor suave e cremoso. O favorito das
                  famílias em toda a região.
                </p>
              </div>
            </div>

            {/* Calabresa */}
            <div className="bg-charcoal border border-border-dark rounded p-7 md:p-8 flex items-center gap-6 sabor-card cursor-default">
              <div className="w-[68px] h-[68px] rounded-xl shrink-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,rgba(50,14,14,0.75),rgba(22,14,14,0.9))", border: "1px solid rgba(140,26,26,0.22)" }}>
                <CalabresaIcon />
              </div>
              <div>
                <h4 className="display-font text-xl font-semibold text-warm-white mb-1.5">
                  Calabresa
                </h4>
                <p className="text-[13px] text-text-secondary font-light leading-[1.65]">
                  O sabor marcante que todo cliente conhece e pede. Produção
                  constante para atender alta demanda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
