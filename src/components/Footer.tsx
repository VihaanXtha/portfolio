import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-foreground bg-card mt-20 relative overflow-hidden">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-12 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="md:col-span-2">
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight font-display mb-6 text-foreground">
            Let's build<br />
            <span className="bg-accent text-foreground px-2 inline-block -rotate-2 border-[3px] border-foreground shadow-brutal-sm mt-2">
              something great.
            </span>
          </h3>
          <p className="text-base font-medium max-w-sm text-foreground/80 mt-6">
            Open to freelance, collaboration, and full-time opportunities.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] font-display mb-6 border-b-[3px] border-foreground pb-2 inline-block">Pages</h4>
          <div className="space-y-4">
            {["Home", "Work", "About", "Contact", "Resume"].map((page) => (
              <Link
                key={page}
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                className="block text-base font-bold text-foreground hover:text-accent-blue hover:translate-x-2 transition-transform w-fit"
              >
                {page}
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] font-display mb-6 border-b-[3px] border-foreground pb-2 inline-block">Connect</h4>
          <div className="space-y-4">
            {[
              { label: "LinkedIn", url: "#" },
              { label: "GitHub", url: "#" },
              { label: "Dribbble", url: "#" },
              { label: "Email", url: "mailto:hello@vshrestha.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="block text-base font-bold text-foreground hover:text-accent-purple hover:translate-x-2 transition-transform w-fit"
              >
                {link.label} <span className="text-xs ml-1">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative large text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0 overflow-hidden">
        <span className="text-[20vw] font-black font-display whitespace-nowrap">V.SHRESTHA</span>
      </div>

      {/* Bottom bar */}
      <div className="border-t-[3px] border-foreground bg-accent py-5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-black uppercase tracking-[0.2em] font-display text-foreground">
            © {year} Vihaan Shrestha.
          </p>
          <div className="flex items-center gap-3 border-[3px] border-foreground bg-card px-4 py-2 shadow-brutal-sm">
            <span className="w-3 h-3 rounded-full animate-pulse border-2 border-foreground" style={{ backgroundColor: 'hsl(var(--accent-green))' }} />
            <span className="text-xs font-black uppercase tracking-[0.1em] font-display text-foreground">
              Available for work
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
