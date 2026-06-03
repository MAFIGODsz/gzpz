import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal-mid border-t border-border-dark relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(140,26,26,0.5)_30%,rgba(181,41,41,0.7)_50%,rgba(140,26,26,0.5)_70%,transparent)]" />

      <div className="max-w-[1360px] mx-auto px-5 md:px-12">
        <div className="pt-[72px] pb-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-15">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="mb-5">
              <Link href="#" className="inline-flex items-center no-underline group">
                <Image
                  src="/images/logo.png"
                  alt="GELZA Logo"
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain shrink-0 transition-opacity duration-200 group-hover:opacity-80"
                />
              </Link>
            </div>
            <p className="text-sm text-text-secondary leading-[1.8] font-light max-w-[280px]">
              Empresa familiar fundada em 2002, formalizada em 2024. Fornecimento
              de pizzas pré-assadas premium para supermercados, mercearias e
              pizzarias parceiras da Zona da Mata Mineira.
            </p>
            <div className="flex gap-2.5 mt-7">
              <a
                href="https://instagram.com/gelzapizzas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[rgba(255,255,255,0.04)] border border-border-dark rounded-sm flex items-center justify-center text-text-secondary transition-all duration-200 hover:bg-crimson hover:border-crimson hover:text-white"
                title="Instagram"
                aria-label="GELZA no Instagram"
              >
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/5532984580899"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[rgba(255,255,255,0.04)] border border-border-dark rounded-sm flex items-center justify-center text-text-secondary transition-all duration-200 hover:bg-crimson hover:border-crimson hover:text-white"
                title="WhatsApp"
                aria-label="GELZA no WhatsApp"
              >
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav column */}
          <div className="flex flex-col">
            <h5 className="condensed-font text-[11px] tracking-[0.2em] uppercase text-crimson-light font-semibold mb-5">
              Navegação
            </h5>
            <ul className="list-none flex flex-col gap-2.5">
              {[
                { href: "#historia", label: "Nossa História" },
                { href: "#diferenciais", label: "Diferenciais" },
                { href: "#produtos", label: "Produtos" },
                { href: "#parceiros", label: "Parceiros" },
                { href: "#atuacao", label: "Atuação" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-text-secondary no-underline font-light transition-colors duration-200 hover:text-warm-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products column */}
          <div className="flex flex-col">
            <h5 className="condensed-font text-[11px] tracking-[0.2em] uppercase text-crimson-light font-semibold mb-5">
              Produtos
            </h5>
            <ul className="list-none flex flex-col gap-2.5">
              {["Massa 20cm", "Massa 30cm", "Massa 35cm", "Sabor Presunto", "Sabor Calabresa"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#produtos"
                      className="text-sm text-text-secondary no-underline font-light transition-colors duration-200 hover:text-warm-white"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 flex flex-col">
            <h5 className="condensed-font text-[11px] tracking-[0.2em] uppercase text-crimson-light font-semibold mb-5">
              Contato
            </h5>
            <ul className="list-none flex flex-col gap-2.5">
              <li>
                <a
                  href="tel:+5532984580899"
                  className="text-sm text-text-secondary no-underline font-light transition-colors duration-200 hover:text-warm-white"
                >
                  (32) 98458-0899
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/gelzapizzas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary no-underline font-light transition-colors duration-200 hover:text-warm-white"
                >
                  @gelzapizzas
                </a>
              </li>
              <li>
                <span className="text-sm text-text-secondary font-light">
                  Maripá de Minas — MG
                </span>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-sm text-text-secondary no-underline font-light transition-colors duration-200 hover:text-warm-white"
                >
                  Seja um Parceiro
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-border-dark flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
          <div className="flex flex-col gap-1.5 w-full sm:w-auto">
            <p className="text-xs text-text-secondary font-light m-0">
              © 2026 GELZA Pizzas. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-[rgba(255,255,255,0.35)] font-light m-0">
              Desenvolvido por{" "}
              <a
                href="https://instagram.com/thepixeloo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(255,255,255,0.5)] hover:text-crimson-light transition-colors duration-200 no-underline"
              >
                Pixeloo
              </a>
            </p>
          </div>
          <span className="display-font text-xs italic text-text-secondary m-0">
            Tradição desde 2002 · Indústria desde 2024
          </span>
          <span className="condensed-font text-xs tracking-[0.15em] uppercase text-crimson-light font-semibold m-0">
            GELZA · B2B
          </span>
        </div>
      </div>
    </footer>
  );
}
