import BrutalCard from "./BrutalCard";

const techs = [
  { name: "MongoDB", variant: "yellow" as const },
  { name: "Express", variant: "blue" as const },
  { name: "React", variant: "yellow" as const },
  { name: "Node.js", variant: "blue" as const },
];

const TechStackCard = () => {
  return (
    <BrutalCard className="md:col-span-2" delay={0.15}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
        Tech Stack
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className={tech.variant === "yellow" ? "tech-box-yellow" : "tech-box-blue"}
          >
            <span className="text-base md:text-lg font-black uppercase tracking-tight">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </BrutalCard>
  );
};

export default TechStackCard;
