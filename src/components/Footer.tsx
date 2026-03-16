import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-foreground bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top section */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black uppercase tracking-tight font-display mb-3">
              Let's build<br />something great.
            </h3>
            <p className="text-sm opacity-60 max-w-sm">
              Open to freelance, collaboration, and full-time opportunities.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 font-display mb-4">Pages</h4>
            <div className="space-y-2">
              {["Home", "Work", "About", "Contact", "Resume"].map((page) => (
                <Link
                  key={page}
                  to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  className="block text-sm font-semibold hover:text-accent transition-colors"
                >
                  {page}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 font-display mb-4">Connect</h4>
            <div className="space-y-2">
              {[
                { label: "LinkedIn", url: "#" },
                { label: "GitHub", url: "#" },
                { label: "Dribbble", url: "#" },
                { label: "Email", url: "mailto:hello@vshrestha.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="block text-sm font-semibold hover:text-accent transition-colors"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 font-display">
            © {year} Vihaan Shrestha. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'hsl(var(--accent-green))' }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 font-display">
              Available for work
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
