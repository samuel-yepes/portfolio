import { Zap } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300"
          />
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
