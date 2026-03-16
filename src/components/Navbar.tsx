import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
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

  return (
    <>
      <nav className="border-b-[3px] border-foreground bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-[3px] border-foreground bg-accent flex items-center justify-center font-display font-black text-sm group-hover:bg-foreground group-hover:text-primary-foreground transition-colors">
              VS
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight font-display">V.Shrestha</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Developer & Creator
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all font-display ${
                    isActive
                      ? "bg-foreground text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden border-[3px] border-foreground p-2 font-display font-black text-xs uppercase hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[65px] left-0 right-0 z-40 bg-background border-b-[3px] border-foreground overflow-hidden"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider font-display border-[2px] border-foreground transition-all ${
                      isActive
                        ? "bg-foreground text-primary-foreground"
                        : "bg-card hover:bg-accent hover:translate-x-1"
                    }`}
                  >
                    {link.label} →
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
