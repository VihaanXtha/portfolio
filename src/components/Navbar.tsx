import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Resume", path: "/resume" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="border-b-[3px] border-foreground bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-xl font-black uppercase tracking-tight">V.Shrestha</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            MERN | Digital Media
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                  isActive
                    ? "underline underline-offset-4 decoration-[2px] decoration-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden border-[2px] border-foreground p-2 font-bold text-xs uppercase">
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
