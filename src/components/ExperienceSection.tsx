import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Briefcase } from "lucide-react";
import { LightningDivider } from "./LightningBolt";

interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
}

const experiences: Experience[] = [
  {
    date: "2024 - Presente",
    title: "Desarrollador Full Stack",
    company: "Empresa Ejemplo",
    description:
      "Desarrollo de aplicaciones web con React, Node.js y bases de datos SQL/NoSQL.",
  },
  {
    date: "2023 - 2024",
    title: "Desarrollador Frontend",
    company: "Startup Tech",
    description:
      "Creación de interfaces modernas y responsivas con React y Tailwind CSS.",
  },
  {
    date: "2022 - 2023",
    title: "Practicante de Desarrollo",
    company: "Agencia Digital",
    description:
      "Apoyo en proyectos web, maquetación y desarrollo de componentes reutilizables.",
  },
  {
    date: "2021 - 2022",
    title: "Freelancer",
    company: "Independiente",
    description:
      "Diseño y desarrollo de sitios web para pequeños negocios y emprendedores.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-6 relative overflow-hidden bg-background"
    >
      {/* Grid sutil */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
            EXPERIENCIA
          </h2>
          <LightningDivider className="w-48 mx-auto mt-4" />
        </motion.div>

        {/* Timeline horizontal scrollable */}
        <div
          ref={scrollRef}
          className="overflow-x-auto pb-8 scrollbar-hide"
        >
          <div className="relative min-w-max flex items-start gap-0 px-4">
            {/* Línea horizontal */}
            <div className="absolute top-[28px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="relative flex flex-col items-center w-[280px] md:w-[320px] flex-shrink-0"
              >
                {/* Nodo del timeline */}
                <div className="relative z-10 w-14 h-14 rounded-full border-2 border-primary/60 bg-background flex items-center justify-center glow-gold mb-6">
                  <Briefcase size={20} className="text-primary" />
                </div>

                {/* Card */}
                <div className="w-full mx-4 p-5 border border-primary/20 bg-card/80 backdrop-blur-sm rounded-sm relative group hover:border-primary/50 transition-all duration-300">
                  {/* Línea conectora vertical */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-primary/30" />

                  {/* Fecha */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <Zap size={12} className="text-primary" fill="currentColor" />
                    <span className="font-display text-xs tracking-[0.2em] uppercase text-primary">
                      {exp.date}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="font-display text-base font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>

                  {/* Empresa */}
                  <p className="text-primary/70 text-sm font-medium mb-3">
                    {exp.company}
                  </p>

                  {/* Descripción */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Glow en hover */}
                  <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_30px_-5px_hsl(var(--primary)/0.15)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hint de scroll en mobile */}
        <p className="text-center text-muted-foreground/50 text-xs mt-2 md:hidden font-display tracking-wider uppercase">
          ← Desliza para ver más →
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;
