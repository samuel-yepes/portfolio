import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Zap className="text-primary w-4 h-4" fill="currentColor" />
          <p className="font-display text-sm text-gradient-gold tracking-widest">PORTFOLIO</p>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
