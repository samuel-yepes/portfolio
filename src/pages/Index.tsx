import { useState } from "react";
import CurtainAnimation from "@/components/CurtainAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [curtainDone, setCurtainDone] = useState(false);

  return (
    <div className="bg-background min-h-screen overflow-hidden">
      <CurtainAnimation onComplete={() => setCurtainDone(true)} />
      <div className={`transition-opacity duration-500 ${curtainDone ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
