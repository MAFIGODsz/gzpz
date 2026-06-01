# GELZA Pizzas — Site Institucional B2B

Site institucional da GELZA Pizzas, empresa familiar de fornecimento de pizzas pré-assadas premium para supermercados, mercearias e pizzarias na Zona da Mata Mineira.

## Tecnologias

- **Next.js 16** com App Router e Turbopack
- **React 19**
- **Tailwind CSS v4**
- **TypeScript 5**

---

## Comandos

```bash
# Instalar dependências
npm install

# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção (após build)
npm start

# Lint
npm run lint
```

O servidor de desenvolvimento roda em `http://localhost:3000`.

---

## Estrutura principal

```
src/
  app/
    layout.tsx          ← Metadados SEO, fontes, JSON-LD
    page.tsx            ← Composição das seções da página
    globals.css         ← Tokens de design, animações, utilitários
  components/
    Navbar.tsx          ← Menu fixo com scroll
    Hero.tsx            ← Seção hero com logo animado
    StripBanner.tsx     ← Faixa de destaques (marquee)
    HeroAuthority.tsx   ← Estatísticas e gráfico de crescimento
    History.tsx         ← Seção "Nossa História" + foto da família
    Values.tsx          ← Valores da empresa
    Diferenciais.tsx    ← Diferenciais competitivos
    Products.tsx        ← Linha de produtos
    ProducaoGallery.tsx ← Galeria editorial de produção
    PartnerCTA.tsx      ← Chamada para parceria
    ActivePartners.tsx  ← Carrossel de parceiros
    RegionalActuation.tsx ← Mapa de atuação regional
    Contact.tsx         ← Formulário de contato via WhatsApp
    Footer.tsx          ← Rodapé com links e informações
  hooks/
    useReveal.ts        ← Animação de scroll (IntersectionObserver)
public/
  images/               ← Imagens do site (logos, fotos, parceiros)
  favicon.ico           ← Ícone do site
```

---

## Onde alterar conteúdo

| O que alterar | Onde |
|---|---|
| Título e metadados SEO | `src/app/layout.tsx` |
| Textos das seções | Componente correspondente em `src/components/` |
| Imagens dos produtos | `public/images/` + `Products.tsx` |
| Fotos da galeria de produção | `public/images/` + `ProducaoGallery.tsx` |
| Foto da família | `public/images/familia-gelza.jpg` |
| Logo | `public/images/logo.png` |
| Parceiros comerciais | `src/components/ActivePartners.tsx` |
| Horário de atendimento | `Contact.tsx` + `layout.tsx` |
| Número de WhatsApp | Pesquisar `5532984580899` no projeto |
| Cores e tokens de design | `src/app/globals.css` (bloco `@theme`) |

---

## Deploy

### Vercel (recomendado)

1. Faça push do projeto para um repositório GitHub
2. Importe o repositório em [vercel.com](https://vercel.com)
3. A Vercel detecta Next.js automaticamente — clique em **Deploy**
4. Configure o domínio personalizado nas configurações do projeto

### VPS / servidor próprio

```bash
npm run build
npm start    # Roda na porta 3000 por padrão
```

Use Nginx ou Apache como proxy reverso apontando para a porta 3000.

---

## Pendências antes de publicar

- **og-image**: Criar `public/images/og-image.jpg` (1200×630px) para compartilhamento em redes sociais. O arquivo está referenciado em `layout.tsx` mas ainda não existe.
- **Domínio**: A URL `gelzapizzas.com.br` está configurada em `layout.tsx`. Confirme o domínio definitivo e atualize antes de publicar.
- **WhatsApp**: O formulário monta a mensagem e envia via `wa.me`. Sem backend — tudo client-side.
