import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "UI/UX Design", level: 88 },
  { name: "PostgreSQL", level: 82 },
  { name: "Docker / DevOps", level: 75 },
  { name: "Machine Learning", level: 70 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="max-w-4xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-3">Habilidades</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">SKILLS</h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium text-sm tracking-wide">{skill.name}</span>
                <span className="text-primary font-display text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-gold-dark via-primary to-gold-light"
                  style={{ boxShadow: "0 0 10px hsl(43 100% 50% / 0.4)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
