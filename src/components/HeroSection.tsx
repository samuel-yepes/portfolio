import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/hero-humanoid.mp4";
import { FloatingLightning } from "./LightningBolt";
import cv from "@/assets/hoja_de_vida.pdf";

// three.js es pesado: se carga de forma diferida tras el primer render.
const Antigravity = lazy(() => import("@/components/ui/Antigravity"));

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video & Fallback - 1080p High Definition */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover opacity-90 md:opacity-95 contrast-[1.12] brightness-[1.05] saturate-[1.1] transition-opacity duration-700"
        >
          <source src={heroVideo} type="video/mp4" />
          <img
            src={heroBg}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-80"
          />
        </video>

        {/* Gradiente perimetral para fundir suavemente con los bordes sin tapar el centro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)] pointer-events-none" />
      </div>

      {/* Antigravity Effect - Partículas sutiles que complementan el video */}
      <div className="absolute inset-0 z-10 pointer-events-none md:pointer-events-auto">
        <Suspense fallback={null}>
          <Antigravity
            count={130}
            magnetRadius={10}
            ringRadius={8}
            waveSpeed={1.8}
            waveAmplitude={0.8}
            particleSize={0.8}
            lerpSpeed={0.05}
            color="#FFC300"
            particleVariance={0.5}
            rotationSpeed={0.12}
            depthFactor={0.7}
            pulseSpeed={1.2}
            particleShape="capsule"
            fieldStrength={5}
          />
        </Suspense>
      </div>

      {/* Grid & Lighting overlays sutiles */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-10" />
      <div className="absolute inset-0 lightning-flash opacity-30 pointer-events-none z-10" />
      <FloatingLightning className="inset-0 w-full h-full pointer-events-none z-10 opacity-70" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        
        {/* Main Title: SOY SAMUEL */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">SOY </span>
          <span className="text-gradient-gold glow-gold-text drop-shadow-[0_0_35px_rgba(255,195,0,0.5)]">
            SAMUEL
          </span>
        </motion.h1>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 0.8 }}
          className="text-zinc-100 font-normal text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
        >
          Creando experiencias digitales que trascienden lo convencional.
        </motion.p>

        {/* Original Action Buttons with enhanced colors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase rounded-sm glow-gold hover:brightness-110 transition-all duration-300 font-semibold shadow-[0_0_25px_rgba(255,195,0,0.5)]"
          >
            Ver Proyectos
          </button>
          
          <a
            href={cv}
            download="Samuel_Yepes_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-primary bg-black/60 text-primary font-display text-sm tracking-wider uppercase rounded-sm hover:bg-primary hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,195,0,0.3)] backdrop-blur-sm font-semibold"
          >
            Descargar CV
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;


