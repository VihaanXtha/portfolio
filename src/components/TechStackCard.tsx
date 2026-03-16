import BrutalCard from "./BrutalCard";
import { motion } from "framer-motion";

const techs = [
  { name: "MongoDB", icon: "🍃", color: "accent-green" },
  { name: "Express", icon: "Ex", color: "muted" },
  { name: "React", icon: "⚛️", color: "accent-blue" },
  { name: "Node.js", icon: "⬢", color: "accent-green" },
  { name: "Flutter", icon: "💙", color: "accent-blue" },
  { name: "Dart", icon: "🎯", color: "accent-yellow" },
  { name: "Figma", icon: "🎨", color: "accent-purple" },
  { name: "Adobe CC", icon: "Cc", color: "accent-red" },
];

const colorMap: Record<string, string> = {
  "accent-green": "hsl(var(--accent-green))",
  "accent-blue": "hsl(var(--accent-blue))",
  "accent-yellow": "hsl(var(--accent-yellow))",
  "accent-purple": "hsl(var(--accent-purple))",
  "accent-red": "hsl(var(--accent-red))",
  "muted": "hsl(var(--muted))",
};

const TechStackCard = () => {
  return (
    <BrutalCard className="md:col-span-2" delay={0.15}>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm font-black uppercase tracking-wider font-display">
          Tech Stack
        </h2>
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground font-display">
          8 tools
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2 stagger-children">
        {techs.map((tech) => (
          <motion.div
            key={tech.name}
            whileHover={{ scale: 1.05, y: -2 }}
            className="border-[2px] border-foreground p-3 flex flex-col items-center justify-center gap-1.5 text-center cursor-default"
            style={{ backgroundColor: colorMap[tech.color] + '20' }}
          >
            <span className="text-xl">{tech.icon}</span>
            <span className="text-[9px] font-bold uppercase font-display tracking-wider">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </BrutalCard>
  );
};

export default TechStackCard;
