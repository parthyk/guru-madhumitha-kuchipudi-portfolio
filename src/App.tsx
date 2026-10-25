import { useState } from "react";
import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { ArtForm } from "./components/ArtForm";
import { Commitment } from "./components/Commitment";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Marquee } from "./components/Marquee";
import { Natyalaya } from "./components/Natyalaya";
import { Programmes } from "./components/Programmes";
import { SacredStages } from "./components/SacredStages";
import { ScrollProgress } from "./components/ScrollProgress";
import { VisionMission } from "./components/VisionMission";
import { navItems } from "./data/site";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTION_IDS = navItems.map((item) => item.id);

export default function App() {
  const active = useActiveSection(SECTION_IDS);
  const [interest, setInterest] = useState("General enquiry");

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-5 focus:py-3 focus:text-[0.7rem] focus:font-semibold focus:uppercase focus:tracking-[0.16em] focus:text-ink-fixed"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Header active={active} />
      <main id="main-content">
        <Hero />
        <Marquee />
        <ArtForm />
        <About />
        <Journey />
        <Achievements />
        <SacredStages />
        <Natyalaya />
        <Programmes onSelect={setInterest} />
        <VisionMission />
        <Gallery />
        <Commitment />
        <Contact interest={interest} onInterestChange={setInterest} />
      </main>
      <Footer />
    </>
  );
}
