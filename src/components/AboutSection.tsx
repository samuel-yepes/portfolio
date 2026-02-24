import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/Avatar.png";
import { LightningDivider } from "./LightningBolt";
import ElectricBorder from "./ui/ElectricBorder";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
            SOBRE MÍ
          </h2>
          <LightningDivider className="w-48 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group max-w-sm mx-auto"
          >
            <ElectricBorder
              color="#eccd79"
              speed={1.4}
              chaos={0.12}
              borderRadius={8}
              className="w-full"
            >
              <div className="relative overflow-hidden rounded-[8px]">
                <img
                  src={profilePhoto}
                  alt="Foto de perfil"
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </ElectricBorder>

            <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-primary/50" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-primary/50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              Soy un apasionado desarrollador con experiencia en la creación de
              aplicaciones web modernas y funcionales. Me especializo en
              transformar ideas complejas en experiencias digitales elegantes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mi enfoque combina diseño innovador con código limpio y eficiente.
              Cada proyecto es una oportunidad para superar límites y crear algo
              extraordinario.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { value: "3+", label: "Años Exp." },
                { value: "Autodidacta", label: "Aprendizaje Constante" },
                { value: "Clean Code", label: "Buenas Prácticas" },
                { value: "100%", label: "Dedicación" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 bg-card border border-border/50 rounded-sm"
                >
                  <div className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
