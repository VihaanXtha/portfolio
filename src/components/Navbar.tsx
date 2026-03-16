import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Resume", path: "/resume" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    setIsDark(theme === 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <>
      <nav className="border-b-[3px] border-foreground bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 border-[3px] border-foreground bg-accent flex items-center justify-center font-display font-black text-lg text-foreground shadow-brutal-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
              VS
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="text-xl font-black tracking-tight font-display">V.Shrestha</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Developer & Creator
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-black uppercase tracking-wider transition-all font-display border-[3px] ${
                    isActive
                      ? "border-foreground bg-foreground text-background shadow-brutal-sm translate-x-[-2px] translate-y-[-2px]"
                      : "border-transparent text-foreground hover:border-foreground hover:bg-accent hover:-translate-y-1 hover:shadow-brutal-sm z-10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 border-[3px] border-foreground bg-card flex items-center justify-center font-display font-black text-sm shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden px-4 h-10 border-[3px] border-foreground bg-accent flex items-center justify-center font-display font-black text-sm uppercase text-foreground shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[83px] left-0 right-0 z-40 bg-background border-b-[3px] border-foreground overflow-hidden"
          >
            <div className="p-4 space-y-3 bg-muted/30">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-5 py-4 text-lg font-black uppercase tracking-wider font-display border-[3px] border-foreground transition-all ${
                      isActive
                        ? "bg-foreground text-background shadow-brutal-sm translate-x-[-2px] translate-y-[-2px]"
                        : "bg-card hover:bg-accent text-foreground shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                    }`}
                  >
                    {link.label} {isActive ? "✦" : "→"}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
