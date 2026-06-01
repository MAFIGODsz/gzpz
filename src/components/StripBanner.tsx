export default function StripBanner() {
  const items = [
    "Produção Artesanal",
    "Qualidade Industrial",
    "Empresa Familiar",
    "Fornecimento B2B",
    "Zona da Mata Mineira",
    "Desde 2002",
    "Formalizada em 2024",
    "Atendimento Regional",
  ];

  return (
    <div
      className="bg-crimson-deep border-y border-[rgba(255,255,255,0.06)] overflow-hidden p-0 group"
      role="marquee"
      aria-label="Destaques GELZA"
    >
      <div className="flex w-max animate-[marquee_32s_linear_infinite] group-hover:[animation-play-state:paused] py-[14px]">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-5 px-6 md:px-10 whitespace-nowrap condensed-font text-[12px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.65)] font-semibold"
          >
            {item}
            <span className="text-[rgba(255,255,255,0.25)] text-[10px]" aria-hidden="true">{"///"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
