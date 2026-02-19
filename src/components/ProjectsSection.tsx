import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { LightningDivider, FloatingLightning } from "./LightningBolt";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Dashboard Analytics",
    description:
      "Plataforma de análisis de datos en tiempo real con visualizaciones interactivas.",
    image: project1,
    tags: ["React", "TypeScript", "D3.js"],
  },
  {
    title: "App Móvil Fintech",
    description:
      "Aplicación financiera para gestión de inversiones y pagos digitales.",
    image: project2,
    tags: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    title: "Sistema de IA",
    description:
      "Red neuronal para análisis predictivo con machine learning.",
    image: project3,
    tags: ["Python", "TensorFlow", "FastAPI"],
  },
  {
    title: "Dashboard Analytics",
    description:
      "Plataforma de análisis de datos en tiempo real con visualizaciones interactivas.",
    image: project1,
    tags: ["React", "TypeScript", "D3.js"],
  },
  {
    title: "App Móvil Fintech",
    description:
      "Aplicación financiera para gestión de inversiones y pagos digitales.",
    image: project2,
    tags: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    title: "Sistema de IA",
    description:
      "Red neuronal para análisis predictivo con machine learning.",
    image: project3,
    tags: ["Python", "TensorFlow", "FastAPI"],
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
    <section id="projects" className="py-24 px-6 relative bg-secondary/30">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <FloatingLightning className="inset-0 w-full h-full" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
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

        {/* Carousel */}
        <div className="overflow-hidden">
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
                className="min-w-[280px] md:min-w-[320px] lg:min-w-[350px]
                bg-card border border-border/50 rounded-xl overflow-hidden
                hover:border-primary/50 transition-all duration-500 hover:scale-[1.03]"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="text-primary hover:underline flex items-center gap-1 text-sm">
                      <ExternalLink size={16} /> Demo
                    </button>
                    <button className="text-primary hover:underline flex items-center gap-1 text-sm">
                      <Github size={16} /> Código
                    </button>
                  </div>
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
