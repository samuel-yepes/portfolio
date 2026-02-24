import { motion } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { FloatingLightning } from "./LightningBolt";
import Antigravity from "@/components/ui/Antigravity";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Antigravity Effect */}
      <div className="absolute inset-0 z-10">
        <Antigravity
          count={250}
          magnetRadius={12}
          ringRadius={9}
          waveSpeed={2}
          waveAmplitude={1}
          particleSize={1}
          lerpSpeed={0.05}
          color="#FFC300"
          particleVariance={0.6}
          rotationSpeed={0.15}
          depthFactor={0.8}
          pulseSpeed={1.5}
          particleShape="capsule"
          fieldStrength={6}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 lightning-flash pointer-events-none" />
      <FloatingLightning className="inset-0 w-full h-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-primary w-4 h-4" fill="currentColor" />
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase">
              Bienvenido a mi universo digital
            </p>
            <Zap className="text-primary w-4 h-4" fill="currentColor" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">SOY </span>
          <span className="text-gradient-gold glow-gold-text">SAMUEL </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.8 }}
          className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Desarrollador Full Stack — Creando experiencias digitales que
          trascienden lo convencional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase rounded-sm glow-gold hover:brightness-110 transition-all duration-300"
          >
            Ver Proyectos
          </button>
          <a
            href="/Hoja_de_vida.pdf"
            download="Samuel_Yepes_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary/50 text-primary 
            font-display text-sm tracking-wider uppercase rounded-sm 
            hover:bg-primary/10 transition-all duration-300 
            inline-flex items-center justify-center gap-2"
          >
            Descargar CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
