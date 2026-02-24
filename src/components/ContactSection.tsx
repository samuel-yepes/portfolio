import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { LightningDivider } from "./LightningBolt";
import Lightning from "@/components/ui/Lightning";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const gmailUrl =
    "https://mail.google.com/mail/?view=cm&to=syepesmolina@gmail.com&su=Contacto%20desde%20tu%20Portafolio&body=Hola%20Samuel%2C%20me%20gustar%C3%ADa%20comunicarme%20contigo%20para%20hablar%20sobre%20un%20proyecto.";

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-6 relative overflow-hidden bg-background"
    >
      {/* ⚡ Lightning Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Lightning hue={42} speed={1} intensity={1.1} size={1.1} />
      </div>

      {/* Oscurecimiento elegante */}
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
          {/* Info + CTA */}
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

            {/* Gmail CTA */}
            <div className="pt-4">
              <p className="text-foreground font-display text-sm tracking-wider uppercase mb-4">
                ¿Quieres comunicarte conmigo?
              </p>
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase rounded-sm glow-gold hover:brightness-110 transition-all duration-300"
              >
                <Mail size={16} />
                Enviar Correo
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full h-[400px] border border-primary/20 rounded-sm overflow-hidden"
          >
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125182.63953975885!2d-75.5711!3d10.3910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f993e37a2b3%3A0x43d0edc70a5e1b5e!2sCartagena%2C%20Bol%C3%ADvar%2C%20Colombia!5e0!3m2!1ses!2s!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
