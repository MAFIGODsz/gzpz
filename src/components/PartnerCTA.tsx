import Link from "next/link";

export default function PartnerCTA() {
  return (
    <section id="parceiro" className="bg-charcoal-mid border-t border-border-dark py-[var(--section-pad)]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-12">
        <div className="bg-[linear-gradient(135deg,var(--color-crimson-deep)_0%,#7A1212_100%)] rounded relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_auto] gap-10 md:gap-15 items-center p-11 md:p-20 reveal before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] before:bg-[size:40px_40px]">
          <div className="relative z-10 w-full">
            <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.25em] uppercase text-[rgba(255,255,255,0.6)] font-semibold mb-5 condensed-font before:content-[''] before:w-7 before:h-px before:bg-[rgba(255,255,255,0.4)]">
              Oportunidade Comercial
            </div>
            <h2 className="display-font text-[clamp(32px,3.5vw,54px)] font-bold leading-[1.1] text-white mb-5">
              Seu negócio merece um fornecedor <em className="italic text-crimson-light">de verdade.</em>
            </h2>
            <p className="text-[17px] text-[rgba(255,255,255,0.65)] leading-[1.75] font-light max-w-[480px]">
              Supermercados, mercearias e pizzarias que buscam um parceiro confiável, com produto
              padronizado, entrega regular e atendimento próximo. A GELZA está pronta para crescer com você.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-4 items-start w-full md:w-auto">
            <Link
              href="https://wa.me/5532984580899?text=Olá! Tenho interesse em ser parceiro da GELZA Pizzas."
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-white text-crimson-deep px-10 py-4 rounded-sm text-[13px] tracking-[0.15em] uppercase font-bold transition-all duration-200 inline-block whitespace-nowrap condensed-font hover:-translate-y-0.5 hover:bg-warm-off active:scale-[0.97] text-center w-full md:w-auto group"
            >
              <span className="relative z-10">Falar pelo WhatsApp</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-[250%] skew-x-[-12deg] transition-transform duration-700 ease-in-out" style={{ background: "rgba(0,0,0,0.06)" }} />
            </Link>
            <a
              href="#contato"
              className="relative overflow-hidden border border-[rgba(255,255,255,0.35)] text-[rgba(255,255,255,0.7)] px-8 py-3.5 rounded-sm text-[13px] tracking-[0.15em] uppercase font-semibold transition-all duration-200 inline-block whitespace-nowrap condensed-font hover:bg-[rgba(255,255,255,0.08)] hover:text-white hover:border-[rgba(255,255,255,0.5)] text-center w-full md:w-auto group"
            >
              <span className="relative z-10">Preencher Formulário</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-[250%] skew-x-[-12deg] transition-transform duration-700 ease-in-out" style={{ background: "rgba(255,255,255,0.08)" }} />
            </a>
            <p className="text-[12px] text-[rgba(255,255,255,0.4)] tracking-[0.08em] font-light mt-1 w-full text-center md:text-left">
              Atendimento regional personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
