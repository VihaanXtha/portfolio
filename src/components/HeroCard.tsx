import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import avatar from "@/assets/avatar.png";

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
      className="brutal-card-static p-6 md:p-10 md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[450px] relative overflow-hidden"
      style={{ background: 'var(--hero-gradient)' }}
    >
      <div className="relative z-10">
        {/* Status indicator */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" style={{ backgroundColor: 'hsl(var(--accent-green))' }} />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground font-display">
            Available for opportunities
          </span>
        </div>

        {/* Avatar and intro */}
        <div className="flex items-start gap-5 mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[3px] border-foreground overflow-hidden flex-shrink-0 animate-float"
            style={{ backgroundColor: 'hsl(var(--accent-yellow))' }}
          >
            <img src={avatar} alt="Vihaan Shrestha" className="w-full h-full object-cover" />
          </motion.div>
          <div className="pt-2">
            <p className="text-sm font-semibold text-muted-foreground mb-1">Hello, I'm</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] tracking-tight font-display">
              Vihaan<br />Shrestha
            </h2>
          </div>
        </div>

        {/* Giant title */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-black uppercase leading-[0.8] tracking-[-0.04em] font-display mb-4"
        >
          Build.<br />
          <span style={{ WebkitTextStroke: '3px hsl(var(--foreground))', color: 'transparent' }}>
            Create.
          </span>
        </motion.h1>

        <p className="text-sm font-medium max-w-md mb-8 leading-relaxed">
          Full-stack developer & digital media specialist crafting bold web experiences.
          <span className="font-bold"> Currently studying CS at Pokhara University.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link
            to="/work"
            className="border-[3px] border-foreground px-6 py-3 text-xs font-black uppercase tracking-wider font-display inline-flex items-center gap-2 hover:translate-x-1 hover:translate-y-1 transition-transform"
            style={{ backgroundColor: 'hsl(var(--accent-yellow))' }}
          >
            View Projects ↗
          </Link>
          <Link
            to="/contact"
            className="border-[3px] border-foreground bg-foreground text-primary-foreground px-6 py-3 text-xs font-black uppercase tracking-wider font-display inline-flex items-center gap-2 hover:translate-x-1 hover:translate-y-1 transition-transform"
          >
            Let's Talk →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCard;
