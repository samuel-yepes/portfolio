import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { LightningDivider } from "./LightningBolt";
import Lightning from "@/components/ui/Lightning";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Mensaje enviado! (Funcionalidad de demostración)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-6 relative overflow-hidden bg-background"
    >
      {/* ⚡ Lightning Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Lightning
          hue={42}
          speed={1}
          intensity={1.1}
          size={1.1}
        />
      </div>

      {/* Oscurecimiento elegante (no lavado) */}
      <div className="absolute inset-0 bg-background/70 z-10" />

      {/* Grid sutil */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-10" />

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
            CONTACTO
          </h2>
          <LightningDivider className="w-48 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y
              trabajar juntos para hacerlas realidad.
            </p>

            {[
              { icon: Mail, label: "Email", value: "syepesmolina@gmail.com" },
              { icon: Phone, label: "Teléfono", value: "+57 3162675918" },
              { icon: MapPin, label: "Ubicación", value: "Cartagena, Colombia" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30 rounded-sm bg-primary/5">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Nombre
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-card border border-border/50 rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-card border border-border/50 rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Mensaje
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border/50 rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase rounded-sm glow-gold hover:brightness-110 transition-all duration-300"
            >
              <Send size={16} />
              Enviar Mensaje
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
