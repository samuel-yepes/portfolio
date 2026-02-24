import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { LightningDivider, FloatingLightning } from "./LightningBolt";
import project1 from "@/assets/FireLogic.png";
import project2 from "@/assets/Prevencion-Bullying.png";
import project3 from "@/assets/Votaciones.png";
import project4 from "@/assets/RaceX.png";
import project5 from "@/assets/ClimaTrack.png";
import project6 from "@/assets/CrudStudent.png";
import project7 from "@/assets/Invitacion.png";
import project8 from "@/assets/JuegoPrevencion.png";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
};

const projects: Project[] = [
  {
    title: "Simulador de Firewall",
    description:
      "Aprende a proteger redes configurando reglas de seguridad y filtrado de datos en tiempo real.",
    image: project1,
    tags: ["React", "TypeScript", "next.js", "Tailwind CSS"],
    demoUrl: "https://simulador-firewall.vercel.app/",
    codeUrl: "https://github.com/samuel-yepes/Simulador-Firewall",
  },
  {
    title: "Prevencion de Bullying",
    description:
      "Recursos y guías prácticas para identificar el acoso y fomentar una convivencia escolar basada en el respeto.",
    image: project2,
    tags: ["React", "TypeScript", "next.js", "Tailwind CSS"],
    demoUrl: "https://prevencion-del-bullying.vercel.app/",
    codeUrl: "https://github.com/samuel-yepes/Prevencion-del-bullying",
  },
  {
    title: "Sistema de Votaciones",
    description:
      "Sistema para la administración de votaciones electrónicas, enfocada en la seguridad del sufragio y la eficiencia en el procesamiento de resultados",
    image: project3,
    tags: ["Java", "Mysql", "JavaSwing"],
    codeUrl: "https://github.com/samuel-yepes/Registradur-a",
  },
  {
    title: "Gestion de Estudiantes",
    description:
      "Sistema de gestión de estudiantes con funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) para administrar información académica.",
    image: project6,
    tags: ["Laravel", "PostgreSQL", "PHP"],
    codeUrl: "https://github.com/samuel-yepes/Crud-estudiantes",
  },
  {
    title: "Juego para la prevencion del bullying",
    description:
      "Juego educativo interactivo para prevenir el acoso escolar, con escenarios y actividades que fomentan el respeto y la empatía.",
    image: project8,
    tags: ["TypeScript", "React", "next.js"],
    codeUrl: "https://github.com/samuel-yepes/kindness-quest",
    demoUrl: "https://kindness-quest-two.vercel.app/",
  },
  {
    title: "Juego sencillo de Moto",
    description:
      "Domina las pistas y salta hacia la victoria en este emocionante juego de motos diseñado para jugadores de todas las edades",
    image: project4,
    tags: ["JavaScript", "HTML", "CSS"],
    codeUrl: "https://github.com/samuel-yepes/Race-X",
    demoUrl: "https://race-x-9ob2.vercel.app/",
  },
  {
    title: "Api de Clima",
    description:
      "Api para obtener información del clima de diferentes ciudades del mundo",
    image: project5,
    tags: ["JavaScript", "TypeScript"],
    codeUrl: "https://github.com/samuel-yepes/ClimaTrack",
    demoUrl: "https://clima-track-nine.vercel.app/",
  },
  {
    title: "Invitacion de Aniversario",
    description:
      "Invitación digital interactiva para celebrar un aniversario especial, con diseño personalizado",
    image: project7,
    tags: ["Tailwind CSS", "TypeScript", "React"],
    codeUrl: "https://github.com/samuel-yepes/anniversary-rendezvous",
    demoUrl: "https://invitacionaniversario.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, []);

  return (
    <section
      id="projects"
      className="py-24 px-6 relative bg-secondary/30 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <FloatingLightning className="inset-0 w-full h-full" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-3">
            Mi Trabajo
          </p>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
            PROYECTOS
          </h2>

          <LightningDivider className="w-48 mx-auto mt-4" />
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            dragElastic={0.08}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="
                  min-w-[280px] md:min-w-[320px] lg:min-w-[350px]
                  bg-card border border-border/50 rounded-xl overflow-hidden
                  hover:border-primary/50 transition-all duration-500 hover:scale-[1.03]
                "
              >
                {/* IMAGE */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col h-[260px]">
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* SPACER */}
                  <div className="flex-1" />

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          text-xs px-3 py-1
                          bg-primary/10 text-primary
                          border border-primary/20
                          rounded-full
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  {(project.demoUrl || project.codeUrl) && (
                    <div className="flex gap-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            text-primary hover:text-primary/80
                            flex items-center gap-1 text-sm
                            transition-colors
                          "
                        >
                          <ExternalLink size={16} /> Demo
                        </a>
                      )}

                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            text-primary hover:text-primary/80
                            flex items-center gap-1 text-sm
                            transition-colors
                          ">
                          <Github size={16} /> Código
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
