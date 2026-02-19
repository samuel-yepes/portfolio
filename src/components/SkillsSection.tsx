import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LightningDivider } from "./LightningBolt";
import LogoLoop from "./ui/LogoLoop";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiPython />, title: "Python" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiDocker />, title: "Docker" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Fondo técnico sutil */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
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

        {/* Contenedor elegante */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative border border-border/40 rounded-2xl py-16 px-10 bg-card/40 backdrop-blur-sm"
        >
          {/* Línea decorativa superior */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="h-[120px] relative overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={60}
              gap={80}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="var(--background)"
              ariaLabel="Technologies"
            />
          </div>

          {/* Línea decorativa inferior */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
