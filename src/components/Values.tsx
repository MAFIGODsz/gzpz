export default function Values() {
  return (
    <section id="valores" className="bg-charcoal-mid border-y border-border-dark py-[var(--section-pad)]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border-dark">
          {/* Missão */}
          <div className="bg-charcoal-mid p-10 md:p-13 hover:bg-charcoal-light transition-colors duration-200 reveal">
            <div className="w-12 h-12 bg-[rgba(140,26,26,0.15)] border border-[rgba(140,26,26,0.3)] rounded-sm flex items-center justify-center mb-6">
              <svg className="w-5.5 h-5.5 fill-none stroke-crimson-light stroke-[1.5] [stroke-linecap:round]" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <div className="condensed-font text-[11px] tracking-[0.2em] uppercase text-crimson-light font-semibold mb-3">
              Missão
            </div>
            <h3 className="display-font text-[26px] font-bold text-warm-white mb-3.5">
              Sabor que simplifica.
            </h3>
            <p className="text-sm text-text-secondary leading-[1.7] font-light">
              Entregar pizzas saborosas, práticas e com alto padrão de qualidade para nossos parceiros comerciais, fortalecendo seus negócios com produtos confiáveis.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-charcoal-mid p-10 md:p-13 hover:bg-charcoal-light transition-colors duration-200 reveal reveal-delay-1">
            <div className="w-12 h-12 bg-[rgba(140,26,26,0.15)] border border-[rgba(140,26,26,0.3)] rounded-sm flex items-center justify-center mb-6">
              <svg className="w-5.5 h-5.5 fill-none stroke-crimson-light stroke-[1.5] [stroke-linecap:round]" viewBox="0 0 24 24">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="condensed-font text-[11px] tracking-[0.2em] uppercase text-crimson-light font-semibold mb-3">
              Visão
            </div>
            <h3 className="display-font text-[26px] font-bold text-warm-white mb-3.5">
              Liderança regional.
            </h3>
            <p className="text-sm text-text-secondary leading-[1.7] font-light">
              Ser a maior e mais reconhecida empresa de pizzas da região, referência em qualidade, confiança e parceria comercial sustentável.
            </p>
          </div>

          {/* Propósito */}
          <div className="bg-charcoal-mid p-10 md:p-13 hover:bg-charcoal-light transition-colors duration-200 reveal reveal-delay-2">
            <div className="w-12 h-12 bg-[rgba(140,26,26,0.15)] border border-[rgba(140,26,26,0.3)] rounded-sm flex items-center justify-center mb-6">
              <svg className="w-5.5 h-5.5 fill-none stroke-crimson-light stroke-[1.5] [stroke-linecap:round]" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="condensed-font text-[11px] tracking-[0.2em] uppercase text-crimson-light font-semibold mb-3">
              Propósito
            </div>
            <h3 className="display-font text-[26px] font-bold text-warm-white mb-3.5">
              Tradição com futuro.
            </h3>
            <p className="text-sm text-text-secondary leading-[1.7] font-light">
              Unir o saber-fazer familiar a processos industriais modernos, criando um produto que respeita a origem e abraça o crescimento.
            </p>
          </div>
        </div>

        {/* 4 Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-dark mt-px">
          <div className="bg-charcoal-mid p-8 md:p-10 hover:bg-charcoal-light transition-colors duration-200 reveal">
            <div className="display-font text-[42px] font-light text-[rgba(140,26,26,0.25)] leading-none mb-2">
              01
            </div>
            <div className="condensed-font text-lg font-semibold tracking-[0.08em] uppercase text-warm-white mb-2">
              Qualidade
            </div>
            <div className="text-[13px] text-text-secondary font-light leading-[1.6]">
              Ingredientes selecionados e processo padronizado que garantem produto consistente em cada entrega.
            </div>
          </div>

          <div className="bg-charcoal-mid p-8 md:p-10 hover:bg-charcoal-light transition-colors duration-200 reveal reveal-delay-1">
            <div className="display-font text-[42px] font-light text-[rgba(140,26,26,0.25)] leading-none mb-2">
              02
            </div>
            <div className="condensed-font text-lg font-semibold tracking-[0.08em] uppercase text-warm-white mb-2">
              Eficiência
            </div>
            <div className="text-[13px] text-text-secondary font-light leading-[1.6]">
              Produção industrial organizada para atender demandas com agilidade e pontualidade.
            </div>
          </div>

          <div className="bg-charcoal-mid p-8 md:p-10 hover:bg-charcoal-light transition-colors duration-200 reveal reveal-delay-2">
            <div className="display-font text-[42px] font-light text-[rgba(140,26,26,0.25)] leading-none mb-2">
              03
            </div>
            <div className="condensed-font text-lg font-semibold tracking-[0.08em] uppercase text-warm-white mb-2">
              Transparência
            </div>
            <div className="text-[13px] text-text-secondary font-light leading-[1.6]">
              Relacionamento honesto com parceiros, preços claros e comprometimento em cada negociação.
            </div>
          </div>

          <div className="bg-charcoal-mid p-8 md:p-10 hover:bg-charcoal-light transition-colors duration-200 reveal reveal-delay-3">
            <div className="display-font text-[42px] font-light text-[rgba(140,26,26,0.25)] leading-none mb-2">
              04
            </div>
            <div className="condensed-font text-lg font-semibold tracking-[0.08em] uppercase text-warm-white mb-2">
              Foco no Cliente
            </div>
            <div className="text-[13px] text-text-secondary font-light leading-[1.6]">
              Atendimento próximo, flexível e orientado às necessidades reais de cada parceiro comercial.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
