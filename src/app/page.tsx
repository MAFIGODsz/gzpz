"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StripBanner from "@/components/StripBanner";
import HeroAuthority from "@/components/HeroAuthority";
import History from "@/components/History";
import Values from "@/components/Values";
import Diferenciais from "@/components/Diferenciais";
import Products from "@/components/Products";
import ProducaoGallery from "@/components/ProducaoGallery";
import PartnerCTA from "@/components/PartnerCTA";
import ActivePartners from "@/components/ActivePartners";
import RegionalActuation from "@/components/RegionalActuation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <>
      <Navbar />
      <main suppressHydrationWarning>
        <Hero />
        <StripBanner />
        <HeroAuthority />
        <History />
        <Values />
        <Diferenciais />
        <Products />
        <ProducaoGallery />
        <PartnerCTA />
        <ActivePartners />
        <RegionalActuation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
