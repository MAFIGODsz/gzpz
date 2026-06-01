export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-charcoal py-[var(--section-pad)]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-[72px] gap-6 lg:gap-0">
          <div>
            <div className="section-label reveal">Por que escolher a GELZA</div>
            <h2 className="display-font text-[clamp(36px,4vw,62px)] font-bold leading-[1.1] text-warm-white reveal">
              O que nos torna<br />
              <em className="italic text-crimson-light">diferentes.</em>
            </h2>
          </div>
          <div className="max-w-[380px] reveal">
            <p className="text-[17px] text-text-secondary leading-[1.75] font-light">
              Não somos uma pizzaria. Somos uma indústria alimentícia regional que entrega qualidade
              artesanal em escala industrial.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-dark border border-border-dark">
          {/* Card 1 (Featured) */}
          <div className="relative overflow-hidden bg-crimson-deep p-10 md:p-12 reveal before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-amber-light group hover:before:scale-y-100 before:scale-y-0 before:origin-bottom before:transition-transform before:duration-[400ms]">
            <div className="display-font text-[64px] font-bold leading-none text-[rgba(255,255,255,0.06)] absolute top-5 right-6">
              01
            </div>
            <div className="w-[52px] h-[52px] rounded-sm bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center mb-7">
              <svg
                className="w-6 h-6 fill-none stroke-[rgba(255,255,255,0.8)] stroke-[1.5] [stroke-linecap:round]"
                viewBox="0 0 24 24"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                <path d="M8 12l2.5 2.5L16 9" />
              </svg>
            </div>
            <h3 className="display-font text-[22px] font-semibold text-white mb-3 relative z-10">
              Industrial sem perder<br />
              a essência artesanal
            </h3>
            <p className="text-sm text-[rgba(255,255,255,0.65)] leading-[1.7] font-light relative z-10">
              Processos modernos e padronizados que preservam o sabor, a textura e a identidade de
              uma produção feita com cuidado.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden bg-charcoal hover:bg-charcoal-mid transition-colors duration-[400ms] p-10 md:p-12 reveal reveal-delay-1 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-crimson group hover:before:scale-y-100 before:scale-y-0 before:origin-bottom before:transition-transform before:duration-[400ms]">
            <div className="display-font text-[64px] font-bold leading-none text-[rgba(245,240,232,0.04)] absolute top-5 right-6">
              02
            </div>
            <div className="w-[52px] h-[52px] rounded-sm bg-[rgba(140,26,26,0.1)] border border-[rgba(140,26,26,0.2)] flex items-center justify-center mb-7">
              <svg
                className="w-5.5 h-5.5 fill-none stroke-crimson-light stroke-[1.5] [stroke-linecap:round]"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="display-font text-[22px] font-semibold text-warm-white mb-3 relative z-10">
              Empresa familiar<br />
              consolidada
            </h3>
            <p className="text-sm text-text-secondary leading-[1.7] font-light relative z-10">
              22 anos de história e confiança. Uma relação de parceria que vai além do simples
              fornecimento comercial.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden bg-charcoal hover:bg-charcoal-mid transition-colors duration-[400ms] p-10 md:p-12 reveal reveal-delay-2 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-crimson group hover:before:scale-y-100 before:scale-y-0 before:origin-bottom before:transition-transform before:duration-[400ms]">
            <div className="display-font text-[64px] font-bold leading-none text-[rgba(245,240,232,0.04)] absolute top-5 right-6">
              03
            </div>
            <div className="w-[52px] h-[52px] rounded-sm bg-[rgba(140,26,26,0.1)] border border-[rgba(140,26,26,0.2)] flex items-center justify-center mb-7">
              <svg
                className="w-5.5 h-5.5 fill-none stroke-crimson-light stroke-[1.5] [stroke-linecap:round]"
                viewBox="0 0 24 24"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <h3 className="display-font text-[22px] font-semibold text-warm-white mb-3 relative z-10">
              Padronização<br />
              de produção
            </h3>
            <p className="text-sm text-text-secondary leading-[1.7] font-light relative z-10">
              Cada pizza segue o mesmo rigoroso padrão. Mesma qualidade, mesmo sabor, em todos os
              pedidos.
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative overflow-hidden bg-charcoal hover:bg-charcoal-mid transition-colors duration-[400ms] p-10 md:p-12 reveal before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-crimson group hover:before:scale-y-100 before:scale-y-0 before:origin-bottom before:transition-transform before:duration-[400ms]">
            <div className="display-font text-[64px] font-bold leading-none text-[rgba(245,240,232,0.04)] absolute top-5 right-6">
              04
            </div>
            <div className="w-[52px] h-[52px] rounded-sm bg-[rgba(140,26,26,0.1)] border border-[rgba(140,26,26,0.2)] flex items-center justify-center mb-7">
              <svg
                className="w-5.5 h-5.5 fill-none stroke-crimson-light stroke-[1.5] [stroke-linecap:round]"
                viewBox="0 0 24 24"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="display-font text-[22px] font-semibold text-warm-white mb-3 relative z-10">
              Atendimento regional<br />
              próximo
            </h3>
            <p className="text-sm text-text-secondary leading-[1.7] font-light relative z-10">
              Presença ativa nas cidades atendidas. Comunicação direta, logística ágil e relacionamento personalizado.
            </p>
          </div>

          {/* Card 5 */}
          <div className="relative overflow-hidden bg-charcoal hover:bg-charcoal-mid transition-colors duration-[400ms] p-10 md:p-12 reveal reveal-delay-1 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-crimson group hover:before:scale-y-100 before:scale-y-0 before:origin-bottom before:transition-transform before:duration-[400ms]">
            <div className="display-font text-[64px] font-bold leading-none text-[rgba(245,240,232,0.04)] absolute top-5 right-6">
              05
            </div>
            <div className="w-[52px] h-[52px] rounded-sm bg-[rgba(140,26,26,0.1)] border border-[rgba(140,26,26,0.2)] flex items-center justify-center mb-7">
              <svg
                className="w-5.5 h-5.5 fill-none stroke-crimson-light stroke-[1.5] [stroke-linecap:round]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="display-font text-[22px] font-semibold text-warm-white mb-3 relative z-10">
              Praticidade para<br />
              seu negócio
            </h3>
            <p className="text-sm text-text-secondary leading-[1.7] font-light relative z-10">
              Pizza pré-assada pronta para finalizar. Reduza tempo de preparo, mão de obra e
              desperdício no seu estabelecimento.
            </p>
          </div>

          {/* Card 6 */}
          <div className="relative overflow-hidden bg-charcoal hover:bg-charcoal-mid transition-colors duration-[400ms] p-10 md:p-12 reveal reveal-delay-2 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-crimson group hover:before:scale-y-100 before:scale-y-0 before:origin-bottom before:transition-transform before:duration-[400ms]">
            <div className="display-font text-[64px] font-bold leading-none text-[rgba(245,240,232,0.04)] absolute top-5 right-6">
              06
            </div>
            <div className="w-[52px] h-[52px] rounded-sm bg-[rgba(140,26,26,0.1)] border border-[rgba(140,26,26,0.2)] flex items-center justify-center mb-7">
              <svg
                className="w-5.5 h-5.5 fill-none stroke-crimson-light stroke-[1.5] [stroke-linecap:round]"
                viewBox="0 0 24 24"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className="display-font text-[22px] font-semibold text-warm-white mb-3 relative z-10">
              Sabor que faz<br />
              a diferença
            </h3>
            <p className="text-sm text-text-secondary leading-[1.7] font-light relative z-10">
              O cliente final percebe a qualidade. Produto que fideliza o consumidor e valoriza o
              estabelecimento parceiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
