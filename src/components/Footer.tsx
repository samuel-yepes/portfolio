const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm text-gradient-gold tracking-widest">PORTFOLIO</p>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
