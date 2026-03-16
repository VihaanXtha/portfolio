import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import avatar from "@/assets/avatar.png";

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className="brutal-card p-6 md:p-8 md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[400px]"
    >
      {/* Top section with avatar and name side by side */}
      <div className="flex items-start gap-6 mb-4">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-accent flex-shrink-0 border-[3px] border-foreground overflow-hidden">
          <img src={avatar} alt="Vihaan Shrestha" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight tracking-tight">
            Vihaan
            <br />
            Shrestha.
          </h2>
        </div>
      </div>

      {/* Large name */}
      <div className="mb-4">
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.85] tracking-tighter">
          Vihaan |
          <br />
          Shrestha.
        </h1>
        <p className="text-xs font-bold uppercase tracking-[0.15em] mt-3">
          MERN Stack & Digital Media Specialist
        </p>
      </div>

      {/* Description */}
      <p className="text-sm font-medium max-w-sm mb-6">
        I build full-stack apps & craft compelling digital narratives. Student at Pokhara University.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-3">
        <Link
          to="/work"
          className="brutal-card-yellow border-[2px] border-foreground px-5 py-2 text-xs font-black uppercase tracking-wide inline-flex items-center gap-2"
        >
          View Projects ↗
        </Link>
        <Link
          to="/contact"
          className="brutal-card border-[2px] border-foreground px-5 py-2 text-xs font-black uppercase tracking-wide inline-flex items-center gap-2"
        >
          Let's Connect 🔗
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroCard;
