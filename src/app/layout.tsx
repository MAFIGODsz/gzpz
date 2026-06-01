import type { Metadata } from "next";
import { Cormorant_Garamond, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gelzapizzas.com.br"),
  title: "GELZA Pizzas — Fornecimento Industrial Premium",
  description:
    "Fornecimento de pizzas pré-assadas premium para supermercados, mercearias e pizzarias na Zona da Mata Mineira. Qualidade artesanal com escala industrial em Maripá de Minas.",
  keywords: [
    "pizzas pré-assadas",
    "GELZA Pizzas",
    "fornecedor de pizzas",
    "B2B",
    "pizzas para supermercados",
    "Zona da Mata Mineira",
    "Maripá de Minas",
  ],
  authors: [{ name: "GELZA Pizzas" }],
  creator: "GELZA Pizzas",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gelzapizzas.com.br",
    title: "GELZA Pizzas — Fornecimento Industrial Premium",
    description:
      "A parceira ideal para supermercados e mercearias da Zona da Mata Mineira que buscam pizzas pré-assadas com qualidade premium e atendimento B2B de excelência.",
    siteName: "GELZA Pizzas",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GELZA Pizzas Premium",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "GELZA Pizzas",
  image: "https://gelzapizzas.com.br/images/og-image.jpg",
  "@id": "https://gelzapizzas.com.br",
  url: "https://gelzapizzas.com.br",
  telephone: "+5532984580899",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua João Passos de Matos, 63",
    addressLocality: "Maripá de Minas",
    addressRegion: "MG",
    postalCode: "36606-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -21.7214,
    longitude: -43.0487,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "06:00",
    closes: "18:00",
  },
  sameAs: ["https://instagram.com/gelzapizzas"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${barlow.variable} ${cormorant.variable} ${barlowCondensed.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
        {children}
      </body>
    </html>
  );
}
