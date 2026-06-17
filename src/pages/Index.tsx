import { lazy, Suspense, useState } from "react";
import CurtainAnimation from "@/components/CurtainAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Secciones below-the-fold: se cargan de forma diferida para aligerar el
// bundle inicial y acelerar el primer render del Hero.
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [curtainDone, setCurtainDone] = useState(false);

  return (
    <div className="bg-background min-h-screen overflow-hidden">
      <CurtainAnimation onComplete={() => setCurtainDone(true)} />
      <div className={`transition-opacity duration-500 ${curtainDone ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <main>
          <HeroSection />
          <Suspense fallback={null}>
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
