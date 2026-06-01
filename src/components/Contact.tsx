"use client";

import { useState } from "react";

const inputClass =
  "w-full bg-charcoal border border-border-dark rounded-sm px-4 py-3 text-warm-white font-sans text-sm font-light outline-none transition-all duration-200 focus:border-[rgba(140,26,26,0.55)] focus:shadow-[0_0_0_2px_rgba(140,26,26,0.1)] placeholder:text-[rgba(255,255,255,0.2)]";

const labelClass =
  "condensed-font text-[11px] tracking-[0.15em] uppercase text-text-secondary font-semibold block mb-2";

const contactItems = [
  {
    icon: (
      <svg className="w-[18px] h-[18px] fill-none stroke-crimson-light stroke-[1.5] [stroke-linecap:round]" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "WhatsApp / Telefone",
    content: (
      <a href="tel:+5532984580899" className="no-underline text-inherit hover:text-crimson-light transition-colors duration-200">
        (32) 98458-0899
      </a>
    ),
  },
  {
    icon: (
      <svg className="w-[18px] h-[18px] fill-none stroke-crimson-light stroke-[1.5] [stroke-linecap:round]" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    label: "Instagram",
    content: (
      <a href="https://instagram.com/gelzapizzas" target="_blank" rel="noopener noreferrer" className="no-underline text-inherit hover:text-crimson-light transition-colors duration-200">
        @gelzapizzas
      </a>
    ),
  },
  {
    icon: (
      <svg className="w-[18px] h-[18px] fill-none stroke-crimson-light stroke-[1.5] [stroke-linecap:round]" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Endereço",
    content: (
      <>Rua João Passos de Matos, 63<br />Maripá de Minas — MG</>
    ),
  },
  {
    icon: (
      <svg className="w-[18px] h-[18px] fill-none stroke-crimson-light stroke-[1.5] [stroke-linecap:round]" viewBox="0 0 24 24">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    label: "Atendimento",
    content: <>Segunda a Sexta<br />06h às 18h</>,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    cidade: "",
    tipo: "",
    mensagem: "",
  });

  const generateWhatsAppUrl = () => {
    const { nome, whatsapp, cidade, tipo, mensagem } = formData;
    let text = `Olá! Tenho interesse em ser parceiro da GELZA Pizzas.`;
    if (nome) text += `\n*Nome:* ${nome}`;
    if (whatsapp) text += `\n*WhatsApp:* ${whatsapp}`;
    if (cidade) text += `\n*Cidade:* ${cidade}`;
    if (tipo) text += `\n*Tipo de estabelecimento:* ${tipo}`;
    if (mensagem) text += `\n*Mensagem:* ${mensagem}`;
    return `https://wa.me/5532984580899?text=${encodeURIComponent(text)}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contato" className="bg-charcoal py-[var(--section-pad)]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-12">
        <div className="mb-16 reveal">
          <div className="section-label">Contato Comercial</div>
          <h2 className="display-font text-[clamp(36px,4vw,62px)] font-bold leading-[1.1] text-warm-white mb-5">
            Vamos construir<br />
            uma <em className="italic text-crimson-light">parceria sólida.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — Contact Info */}
          <div className="reveal">
            <p className="text-[17px] text-text-secondary leading-[1.75] font-light max-w-[520px] mb-11">
              Entre em contato com nosso time comercial. Atendemos supermercados,
              mercearias e pizzarias com interesse em produtos de qualidade e
              fornecimento regular.
            </p>

            <div className="flex flex-col">
              {contactItems.map((item, i) => (
                <div key={i} className="flex gap-5 py-6 border-b border-border-dark items-start group">
                  <div className="w-10 h-10 bg-[rgba(140,26,26,0.08)] border border-[rgba(140,26,26,0.18)] rounded-sm flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-[rgba(140,26,26,0.15)]">
                    {item.icon}
                  </div>
                  <div>
                    <div className="condensed-font text-[11px] tracking-[0.15em] uppercase text-text-secondary font-semibold mb-1.5">
                      {item.label}
                    </div>
                    <div className="text-[15px] text-warm-white font-light leading-[1.6]">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal reveal-delay-1">
            <div className="bg-charcoal-mid border border-border-dark rounded p-7 md:p-11">
              <h3 className="display-font text-[26px] font-semibold text-warm-white mb-8 leading-snug">
                Solicite informações<br />comerciais
              </h3>

              <div className="space-y-5">
                <div>
                  <label className={labelClass}>Nome completo</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="Seu nome"
                    autoComplete="name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>WhatsApp</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder="(32) 99999-9999"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Cidade</label>
                    <input
                      type="text"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder="Sua cidade"
                      autoComplete="address-level2"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Tipo de estabelecimento</label>
                  <select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleInputChange}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="">Selecione...</option>
                    <option value="Supermercado">Supermercado</option>
                    <option value="Mercearia">Mercearia</option>
                    <option value="Pizzaria">Pizzaria</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Mensagem</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className={`${inputClass} resize-y min-h-[100px]`}
                    placeholder="Descreva seu interesse ou volume de pedido aproximado..."
                  />
                </div>
              </div>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 relative overflow-hidden bg-crimson text-white w-full text-center flex items-center justify-center p-[14px] rounded-sm condensed-font text-[13px] tracking-[0.18em] uppercase font-bold transition-all duration-200 hover:bg-crimson-light active:scale-[0.98] group"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  Enviar via WhatsApp
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-[250%] skew-x-[-12deg] transition-transform duration-700 ease-in-out" style={{ background: "rgba(255,255,255,0.12)" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
