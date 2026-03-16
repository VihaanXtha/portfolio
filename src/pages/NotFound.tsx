import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 — No route for:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "hsl(var(--background))" }}>
      <div className="text-center">
        <h1 className="text-[10rem] font-black leading-none font-display mb-2">404</h1>
        <p className="text-lg font-bold uppercase tracking-widest mb-8 font-display" style={{ color: "hsl(var(--muted-foreground))" }}>
          Page not found
        </p>
        <Link
          to="/"
          className="border-[3px] border-foreground px-8 py-4 text-xs font-black uppercase tracking-wider font-display inline-block hover:translate-x-1 hover:translate-y-1 transition-transform"
          style={{ backgroundColor: "hsl(var(--accent-yellow))" }}
        >
          Back to Home →
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
