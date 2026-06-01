import Image from "next/image";

export default function History() {
  return (
    <section id="historia" className="bg-charcoal py-[var(--section-pad)]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[100px] items-center">

          {/* ── Left: text + timeline ── */}
          <div className="reveal">
            <div className="section-label">Nossa História</div>
            <h2 className="display-font text-[clamp(36px,4vw,62px)] font-bold leading-[1.1] text-warm-white mb-5">
              Uma família,<br />
              <em className="italic text-crimson-light">duas décadas</em><br />
              de sabor.
            </h2>
            <p className="text-[17px] text-text-secondary max-w-[560px] leading-[1.75] font-light mb-4">
              A história da GELZA começa em <strong className="text-warm-white font-medium">2002</strong>, quando
              a família deu seus primeiros passos no universo das pizzas com dedicação, receitas
              próprias e amor pelo que fazia.
            </p>
            <p className="text-[17px] text-text-secondary max-w-[560px] leading-[1.75] font-light">
              Em <strong className="text-warm-white font-medium">2024</strong>, esse legado se transformou em empresa
              formal — com estrutura industrial, padronização de produção e visão de crescimento
              regional. Sem abrir mão da essência que tornou o produto especial.
            </p>

            {/* ── Mobile-only family photo ── */}
            <div className="lg:hidden mt-10 reveal">
              <div
                className="relative rounded overflow-hidden border border-border-dark"
                style={{ height: 260 }}
              >
                <Image
                  src="/images/familia-gelza.jpg"
                  alt="Família proprietária da GELZA Pizzas"
                  fill
                  className="object-cover object-top"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,8,8,0.72)_0%,rgba(20,8,8,0.1)_55%,transparent_100%)]" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 flex items-center gap-3">
                  <div className="w-4 h-px bg-crimson-light opacity-60 shrink-0" />
                  <p className="condensed-font text-[10px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.65)] font-medium">
                    Família GELZA · tradição desde 2002
                  </p>
                </div>
              </div>
            </div>

            {/* ── Timeline ── */}
            <div className="mt-12 relative before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-[linear-gradient(180deg,var(--color-crimson),transparent_90%)]">
              <div className="flex gap-8 mb-9 pl-12 relative reveal reveal-delay-1 before:content-[''] before:absolute before:left-[9px] before:top-1.5 before:w-[15px] before:h-[15px] before:rounded-full before:border-2 before:border-crimson before:bg-crimson">
                <div className="condensed-font text-[13px] tracking-[0.1em] font-bold text-crimson-light min-w-[50px] pt-0.5">
                  2002
                </div>
                <div>
                  <h4 className="display-font text-xl font-semibold text-warm-white mb-1.5">
                    Origem Familiar
                  </h4>
                  <p className="text-sm text-text-secondary leading-[1.65] font-light">
                    A família começa a produzir pizzas com receitas próprias, cultivando um produto de sabor único e atendimento próximo à comunidade local.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 mb-9 pl-12 relative reveal reveal-delay-2 before:content-[''] before:absolute before:left-[9px] before:top-1.5 before:w-[15px] before:h-[15px] before:rounded-full before:border-2 before:border-crimson before:bg-charcoal">
                <div className="condensed-font text-[13px] tracking-[0.1em] font-bold text-crimson-light min-w-[50px] pt-0.5">
                  2002–2023
                </div>
                <div>
                  <h4 className="display-font text-xl font-semibold text-warm-white mb-1.5">
                    22 Anos de Tradição
                  </h4>
                  <p className="text-sm text-text-secondary leading-[1.65] font-light">
                    Duas décadas de produção, aprimoramento de processos, fidelização de clientes e consolidação do sabor que hoje define a marca GELZA.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 mb-9 pl-12 relative reveal reveal-delay-3 before:content-[''] before:absolute before:left-[9px] before:top-1.5 before:w-[15px] before:h-[15px] before:rounded-full before:border-2 before:border-crimson before:bg-charcoal">
                <div className="condensed-font text-[13px] tracking-[0.1em] font-bold text-crimson-light min-w-[50px] pt-0.5">
                  2024
                </div>
                <div>
                  <h4 className="display-font text-xl font-semibold text-warm-white mb-1.5">
                    Expansão Profissional
                  </h4>
                  <p className="text-sm text-text-secondary leading-[1.65] font-light">
                    Formalização da empresa, estruturação industrial, novos parceiros comerciais e início da expansão regional na Zona da Mata Mineira.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 mb-9 pl-12 relative reveal reveal-delay-4 before:content-[''] before:absolute before:left-[9px] before:top-1.5 before:w-[15px] before:h-[15px] before:rounded-full before:border-2 before:border-crimson before:bg-charcoal">
                <div className="condensed-font text-[13px] tracking-[0.1em] font-bold text-crimson-light min-w-[50px] pt-0.5">
                  Hoje
                </div>
                <div>
                  <h4 className="display-font text-xl font-semibold text-warm-white mb-1.5">
                    Crescimento Consolidado
                  </h4>
                  <p className="text-sm text-text-secondary leading-[1.65] font-light">
                    Redes parceiras em múltiplas cidades, produção padronizada e o objetivo claro de se tornar a maior empresa de pizzas da região.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: family photo editorial composition (desktop only) ── */}
          <div className="hidden lg:block reveal">
            <div className="relative h-[580px]">

              {/* ── Main photo panel ── */}
              <div className="absolute rounded w-full h-[400px] top-0 overflow-hidden border border-border-dark">
                <Image
                  src="/images/familia-gelza.jpg"
                  alt="Família proprietária da GELZA Pizzas"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 15%" }}
                />

                {/* Subtle crimson tint at the very bottom — creates space for caption */}
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,8,8,0.78)_0%,rgba(20,8,8,0.12)_50%,transparent_100%)]" />

                {/* Top-left corner accent */}
                <div
                  className="absolute top-4 left-4 flex items-center gap-2.5 px-2.5 py-1.5 rounded-sm"
                  style={{ background: "rgba(20,8,8,0.55)", backdropFilter: "blur(6px)" }}
                >
                  <div className="w-5 h-px bg-crimson-light shrink-0" />
                  <span className="condensed-font text-[9px] tracking-[0.28em] uppercase text-white font-semibold">
                    Nossa Família
                  </span>
                </div>

                {/* Caption at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                  <p className="condensed-font text-[11px] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.65)] font-medium mb-1">
                    Família GELZA — tradição em pizzas desde 2002
                  </p>
                  <div className="w-8 h-px bg-crimson-light opacity-50" />
                </div>
              </div>

              {/* ── Overlapping stat card: 22 anos ── */}
              <div className="absolute rounded w-[60%] h-[160px] top-[415px] left-[40%] bg-[linear-gradient(135deg,#231E1B,#2D2522)] border border-border-dark p-6 pl-14 lg:pl-[72px] flex flex-col justify-center overflow-hidden z-10 shadow-xl">
                <div className="display-font text-4xl font-bold text-amber-light leading-none">
                  22
                </div>
                <div className="text-[12px] tracking-[0.12em] uppercase text-text-secondary font-medium mt-1.5">
                  Anos de tradição
                </div>
              </div>

              {/* ── Overlapping stat card: 2024 ── */}
              <div className="absolute rounded w-[48%] h-[90px] top-[445px] left-0 border border-[rgba(140,26,26,0.3)] bg-crimson-deep px-5 flex flex-col justify-center overflow-hidden z-20 shadow-2xl">
                <p className="text-[11px] tracking-[0.15em] uppercase text-[rgba(255,255,255,0.5)] font-medium">
                  Formalizada em
                </p>
                <strong className="display-font text-xl text-white font-semibold">
                  2024
                </strong>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
