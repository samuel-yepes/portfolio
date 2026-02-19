import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Dashboard Analytics",
    description: "Plataforma de análisis de datos en tiempo real con visualizaciones interactivas y reportes automatizados.",
    image: project1,
    tags: ["React", "TypeScript", "D3.js"],
  },
  {
    title: "App Móvil Fintech",
    description: "Aplicación financiera con interfaz intuitiva para gestión de inversiones y pagos digitales.",
    image: project2,
    tags: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    title: "Sistema de IA",
    description: "Red neuronal para análisis predictivo con integración de machine learning y procesamiento de datos.",
    image: project3,
    tags: ["Python", "TensorFlow", "FastAPI"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 relative bg-secondary/30">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-3">Mi Trabajo</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">PROYECTOS</h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative bg-card border border-border/50 rounded-sm overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                  <button className="p-3 bg-primary text-primary-foreground rounded-full hover:brightness-110 transition-all">
                    <ExternalLink size={18} />
                  </button>
                  <button className="p-3 border border-primary/50 text-primary rounded-full hover:bg-primary/10 transition-all">
                    <Github size={18} />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-sm font-display tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
