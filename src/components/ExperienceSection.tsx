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
    date: "2026 - Presente",
    title: "Desarrollador de Software",
    company:
      "Tecnologico Comfenalco / Centro de Innovación y Desarrollo Tecnológico",
    description:
      "Diseño y desarrollo de aplicaciones web escalables utilizando Laravel y PostgresSQL ,integración de APIs REST y gestión de bases de datos SQL. Participación en mejoras de arquitectura, optimización de rendimiento y mantenimiento evolutivo de sistemas institucionales.",
  },
  {
    date: "2025 - 2026 Trabajo por temporadas",
    title: "Asesor Comercial",
    company: "Experiencia Independiente",
    description:
      "Apoyo en temporadas altas en ventas y atención al cliente, incluyendo control operativo en parqueadero (registro de vehículos y manejo de pagos). Experiencia en servicio al cliente, organización y resolución de situaciones en entornos dinámicos.",
  },
  {
    date: "2025",
    title: "Desarrollador Full Stack",
    company: "Caja de Compensación Comfenalco",
    description:
      "Desarrollo de soluciones web completas trabajando frontend y backend, construcción de interfaces modernas con React, Typescript, Tailwind CSS, implementación de lógica de negocio en .Net y conexión con bases de datos. Enfoque en experiencia de usuario y rendimiento.",
  },
  {
    date: "2024",
    title: "Expositor de Proyecto Tecnológico",
    company: "Expoferia – Tecnologico Comfenalco",
    description:
      "Desarrollo y presentación de un ecommerce de tienda femenina, seleccionado para feria institucional. Integró funcionalidades completas y una propuesta innovadora de búsqueda de productos por voz.",
  },
  {
    date: "2023 - 2024",
    title: "Freelance Web Developer",
    company: "Independiente",
    description:
      "Desarrollo de sitios web personalizados para clientes, creación de componentes reutilizables y optimización de rendimiento. Gestión directa con clientes y levantamiento de requerimientos.",
  },
  {
    date: "2021 - 2024",
    title: "Tecnologo en desarrollo de software",
    company: "Tecnologico Comfenalco",
    description:
      "Formación académica enfocada en análisis, diseño y desarrollo de software. Participación en proyectos académicos aplicando metodologías ágiles, bases de datos relacionales y no relacionales, desarrollo web y buenas prácticas de programación.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-5 relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
            EXPERIENCIA
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical SIEMPRE visible */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px]
            bg-gradient-to-b from-transparent via-primary/60 to-transparent
            md:-translate-x-1/2"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="relative flex items-start md:items-center"
                >
                  {/* Nodo */}
                  <div
                    className="absolute left-6 md:left-1/2 w-12 h-12
                    -translate-x-1/2 rounded-full border-2 border-primary/60
                    bg-background flex items-center justify-center glow-gold z-10"
                  >
                    <Briefcase size={18} className="text-primary" />
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-1/2 pl-16 md:pl-0
                      ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}
                  >
                    <div
                      className="relative group p-6 border border-primary/20
                      bg-card/80 backdrop-blur-sm rounded-md
                      hover:border-primary/50 transition-all duration-300"
                    >
                      {/* Fecha */}
                      <div
                        className={`flex items-center gap-2 mb-2
                        ${isLeft ? "md:justify-end" : ""}`}
                      >
                        <Zap
                          size={12}
                          className="text-primary"
                          fill="currentColor"
                        />
                        <span className="font-display text-xs tracking-[0.2em] uppercase text-primary">
                          {exp.date}
                        </span>
                      </div>

                      {/* Título */}
                      <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>

                      {/* Empresa */}
                      <p className="text-primary/70 text-sm font-medium mb-3">
                        {exp.company}
                      </p>

                      {/* Divider */}
                      <div
                        className="h-[1px] w-10 bg-primary/30 mb-3
                        mx-auto md:mx-0"
                      />

                      {/* Descripción */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Glow */}
                      <div
                        className="absolute inset-0 rounded-md opacity-0
                        group-hover:opacity-100 transition-opacity duration-500
                        pointer-events-none
                        shadow-[0_0_35px_-8px_hsl(var(--primary)/0.15)]"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
