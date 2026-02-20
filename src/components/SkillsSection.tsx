import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LightningDivider } from "./LightningBolt";
import SkillsCarousel from "./ui/SkillsCarousel";

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold tracking-tight">
            SKILLS
          </h2>

          <LightningDivider className="w-56 mx-auto mt-6" />

          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Tecnologías y herramientas que utilizo para construir soluciones
            modernas, escalables y de alto rendimiento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative py-16"
        >
          <SkillsCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;