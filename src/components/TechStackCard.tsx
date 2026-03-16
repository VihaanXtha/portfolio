import BrutalCard from "./BrutalCard";

const techs = [
  { name: "MongoDB", variant: "default" },
  { name: "Express", variant: "default" },
  { name: "React", variant: "default" },
  { name: "Node.js", variant: "default" },
  { name: "Flutter", variant: "default" },
  { name: "Dart", variant: "default" },
  { name: "Figma", variant: "default" },
  { name: "Adobe CC", variant: "default" },
];

const TechStackCard = () => {
  return (
    <BrutalCard className="md:col-span-2" delay={0.15}>
      <h2 className="text-lg font-black uppercase leading-tight mb-4">
        Tech Stack
      </h2>
      <div className="grid grid-cols-4 gap-2">
        {techs.map((tech, i) => (
          <div
            key={tech.name}
            className={`border-[2px] border-foreground p-3 flex flex-col items-center justify-center gap-1 text-center ${
              i % 2 === 0 ? "bg-card" : "bg-muted"
            }`}
          >
            <span className="text-lg font-black">
              {tech.name === "MongoDB" && "🍃"}
              {tech.name === "Express" && "Ex"}
              {tech.name === "React" && "⚛️"}
              {tech.name === "Node.js" && "⬢"}
              {tech.name === "Flutter" && "💙"}
              {tech.name === "Dart" && "🎯"}
              {tech.name === "Figma" && "🎨"}
              {tech.name === "Adobe CC" && "Cc"}
            </span>
            <span className="text-[10px] font-bold uppercase">{tech.name}</span>
          </div>
        ))}
      </div>
    </BrutalCard>
  );
};

export default TechStackCard;
