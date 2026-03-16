const Footer = () => {
  return (
    <footer className="border-t-[3px] border-foreground bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <a href="#" className="text-xs font-bold uppercase tracking-wide hover:text-accent-blue transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-xs font-bold uppercase tracking-wide hover:text-accent-blue transition-colors">
            GitHub
          </a>
          <a href="#" className="text-xs font-bold uppercase tracking-wide hover:text-accent-blue transition-colors">
            Dribbble
          </a>
        </div>
        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
          Status
        </p>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Copyright Vihaan Shrestha
        </p>
      </div>
    </footer>
  );
};

export default Footer;
