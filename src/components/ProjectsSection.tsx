import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { LightningDivider, FloatingLightning } from "./LightningBolt";
import project1 from "@/assets/FireLogic.png";
import project2 from "@/assets/Prevencion-Bullying.png";
import project3 from "@/assets/Votaciones.png";
import project4 from "@/assets/RaceX.png";
import project5 from "@/assets/ClimaTrack.png";
import project6 from "@/assets/CrudStudent.png";
import project7 from "@/assets/Invitacion.png";
import project8 from "@/assets/JuegoPrevencion.png";
import project9 from "@/assets/scrapeflow.png";
import project10 from "@/assets/empathix.png";

const GithubIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ITEMS_PER_PAGE = 6;

type FilterKey = "all" | "web" | "backend" | "game" | "otros";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: FilterKey[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
};

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "web", label: "Web" },
  { key: "backend", label: "Backend" },
  { key: "game", label: "Juegos" },
  { key: "otros", label: "Otros" },
];

const projects: Project[] = [
  {
    title: "Empathix",
    description:
      "Plataforma de apoyo emocional con IA que ofrece actividades dinámicas y un asistente especializado en prevención del bullying.",
    image: project10,
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Groq"],
    category: ["web"],
    featured: true,
    demoUrl: "https://empathix.vercel.app/",
    codeUrl: "https://github.com/samuel-yepes/empathetic-shield.git",
  },
  {
    title: "Scrapeflow",
    description:
      "Automatiza la extracción y visualización de información de portátiles ThinkPad mediante web scraping y análisis con IA.",
    image: project9,
    tags: ["React", "Playwright", "Node.js", "MongoDB", "Python", "Groq"],
    category: ["web","backend"],
    featured: true,
    demoUrl: "https://scrapeflowapp.vercel.app/",
    codeUrl: "https://github.com/samuel-yepes/portfolio.git",
  },
  {
    title: "Simulador de Firewall",
    description:
      "Aprende a proteger redes configurando reglas de seguridad y filtrado de datos en tiempo real.",
    image: project1,
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    category: ["web"],
    demoUrl: "https://simulador-firewall.vercel.app/",
    codeUrl: "https://github.com/samuel-yepes/Simulador-Firewall",
  },
  {
    title: "Prevención de Bullying",
    description:
      "Recursos y guías prácticas para identificar el acoso y fomentar una convivencia escolar basada en el respeto.",
    image: project2,
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    category: ["web"],
    demoUrl: "https://prevencion-del-bullying.vercel.app/",
    codeUrl: "https://github.com/samuel-yepes/Prevencion-del-bullying",
  },
  {
    title: "Sistema de Votaciones",
    description:
      "Administración de votaciones electrónicas con enfoque en seguridad del sufragio y eficiencia en el procesamiento de resultados.",
    image: project3,
    tags: ["Java", "MySQL", "Java Swing"],
    category: ["backend"],
    codeUrl: "https://github.com/samuel-yepes/Registradur-a",
  },
  {
    title: "Gestión de Estudiantes",
    description:
      "Sistema CRUD completo para administrar información académica: crear, leer, actualizar y eliminar registros de estudiantes.",
    image: project6,
    tags: ["Laravel", "PostgreSQL", "PHP"],
    category: ["backend"],
    codeUrl: "https://github.com/samuel-yepes/Crud-estudiantes",
  },
  {
    title: "Kindness Quest",
    description:
      "Juego educativo interactivo para prevenir el bullying con escenarios y actividades que fomentan el respeto y la empatía.",
    image: project8,
    tags: ["TypeScript", "React", "Next.js"],
    category: ["game", "web"],
    codeUrl: "https://github.com/samuel-yepes/kindness-quest",
    demoUrl: "https://kindness-quest-two.vercel.app/",
  },
  {
    title: "Race X",
    description:
      "Domina las pistas y salta hacia la victoria en este emocionante juego de motos diseñado para jugadores de todas las edades.",
    image: project4,
    tags: ["JavaScript", "HTML", "CSS"],
    category: ["game"],
    codeUrl: "https://github.com/samuel-yepes/Race-X",
    demoUrl: "https://race-x-9ob2.vercel.app/",
  },
  {
    title: "ClimaTrack",
    description:
      "Aplicación para consultar información meteorológica actualizada de diferentes ciudades del mundo.",
    image: project5,
    tags: ["JavaScript", "TypeScript"],
    category: ["otros"],
    codeUrl: "https://github.com/samuel-yepes/ClimaTrack",
    demoUrl: "https://clima-track-nine.vercel.app/",
  },
  {
    title: "Invitación de Aniversario",
    description:
      "Invitación digital interactiva con diseño personalizado y animaciones para celebrar un aniversario especial.",
    image: project7,
    tags: ["Tailwind CSS", "TypeScript", "React"],
    category: ["web"],
    codeUrl: "https://github.com/samuel-yepes/anniversary-rendezvous",
    demoUrl: "https://invitacionaniversario.vercel.app/",
  },
];

// ─── Pagination helper ────────────────────────────────────────────────────────
function buildPageList(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, "…", total];
  if (current >= total - 3) return [1, "…", total - 4, total - 3, total - 2, total - 1, total];
  return [1, "…", current - 1, current, current + 1, "…", total];
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}) => {
  if (totalPages <= 1) return null;

  const pages = buildPageList(currentPage, totalPages);

  const btnBase =
    "flex items-center justify-center font-display text-xs tracking-wider transition-all duration-200 border rounded-sm";
  const btnSize = "w-9 h-9";
  const btnActive = "bg-primary text-primary-foreground border-primary glow-gold";
  const btnIdle =
    "bg-card/60 text-muted-foreground border-border/50 hover:border-primary/50 hover:text-primary";
  const btnDisabled = "opacity-30 cursor-not-allowed pointer-events-none";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-4 mt-12"
    >
      <div className="flex items-center gap-1.5">
        {/* Prev */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Página anterior"
          className={`${btnBase} ${btnSize} ${currentPage === 1 ? btnDisabled : btnIdle}`}
        >
          <ChevronLeft size={14} />
        </button>

        {/* Page numbers */}
        {pages.map((p, i) =>
          p === "…" ? (
            <span
              key={`ellipsis-${i}`}
              className="flex items-center justify-center w-9 h-9 text-muted-foreground/50 text-sm select-none"
            >
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p as number)}
              aria-label={`Página ${p}`}
              aria-current={currentPage === p ? "page" : undefined}
              className={`${btnBase} ${btnSize} ${currentPage === p ? btnActive : btnIdle}`}
            >
              {p}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Página siguiente"
          className={`${btnBase} ${btnSize} ${currentPage === totalPages ? btnDisabled : btnIdle}`}
        >
          <ChevronRight size={14} />
        </button>
      </div>

      {/* Page indicator */}
      <p className="text-muted-foreground/50 font-display text-[10px] tracking-[0.2em] uppercase">
        Página {currentPage} de {totalPages}
      </p>
    </motion.div>
  );
};

// ─── Card ─────────────────────────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const ProjectCard = ({
  project,
  index,
  globalIndex,
}: {
  project: Project;
  index: number;
  globalIndex: number;
}) => (
  <motion.article
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    custom={index}
    className="
      group relative flex flex-col
      bg-card border border-border/50 rounded-xl overflow-hidden
      hover:border-primary/50
      hover:shadow-[0_8px_40px_hsl(43_100%_50%/0.12)]
      transition-all duration-500
    "
  >
    {/* Left accent bar */}
    <div className="
      absolute left-0 top-0 bottom-0 w-[2px] z-10
      bg-gradient-to-b from-primary/0 via-primary to-primary/0
      scale-y-0 group-hover:scale-y-100 origin-top
      transition-transform duration-500 ease-out
    " />

    {/* Image */}
    <div className="relative h-48 flex-shrink-0 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />

      {/* Featured badge */}
      {project.featured && (
        <div className="
          absolute top-3 left-3 flex items-center gap-1 z-10
          font-display text-[9px] tracking-wider uppercase
          bg-primary text-primary-foreground rounded px-2 py-1
        ">
          <Star size={8} fill="currentColor" />
          Destacado
        </div>
      )}

      {/* Project number */}
      <div className="
        absolute top-3 right-3 z-10
        font-display text-[10px] tracking-widest text-primary
        bg-card/85 backdrop-blur-sm border border-primary/30 rounded px-2 py-1
      ">
        {String(globalIndex + 1).padStart(2, "0")}
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5">
      <h3 className="
        font-display text-sm font-semibold mb-2 leading-tight
        group-hover:text-primary transition-colors duration-300
      ">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-full"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="text-xs px-2 py-0.5 text-muted-foreground/60 border border-border/40 rounded-full">
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      {(project.demoUrl || project.codeUrl) && (
        <div className="flex gap-5 mt-auto pt-1 border-t border-border/30">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors duration-200"
            >
              <ExternalLink
                size={13}
                className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
              Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <GithubIcon size={13} />
              Código
            </a>
          )}
        </div>
      )}
    </div>
  </motion.article>
);

// ─── Section ──────────────────────────────────────────────────────────────────
const ProjectsSection = () => {
  const ref = useRef(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  const getCount = (key: FilterKey) =>
    key === "all"
      ? projects.length
      : projects.filter((p) => p.category.includes(key)).length;

  const handleFilterChange = (key: FilterKey) => {
    setActiveFilter(key);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
            PROYECTOS
          </h2>
          <LightningDivider className="w-48 mx-auto mt-4 mb-4" />
        </motion.div>

        {/* FILTER TABS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map((f) => {
            const count = getCount(f.key);
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => handleFilterChange(f.key)}
                className={`
                  relative font-display text-xs tracking-wider uppercase
                  px-5 py-2.5 rounded-sm border flex items-center gap-2
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary glow-gold"
                      : "bg-card/60 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-primary"
                  }
                `}
              >
                {f.label}
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-sans ${
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-primary/10 text-primary/70"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* RESULTS INFO + SCROLL ANCHOR */}
        <div ref={gridRef} className="scroll-mt-24">

          {/* PROJECTS GRID */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${currentPage}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paginated.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={i}
                  globalIndex={projects.indexOf(project)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* EMPTY STATE */}
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground font-display text-sm tracking-wider py-20"
            >
              No hay proyectos en esta categoría aún.
            </motion.p>
          )}

          {/* PAGINATION */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
