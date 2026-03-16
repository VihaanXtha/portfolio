import BrutalCard from "./BrutalCard";

const InternshipCard = () => {
  return (
    <BrutalCard variant="yellow" delay={0.2}>
      <h2 className="text-sm font-black uppercase tracking-wider font-display mb-4">
        Internship
      </h2>
      <div className="space-y-3">
        <div>
          <h3 className="text-base font-black uppercase leading-tight">
            Smait Technology
          </h3>
          <p className="text-xs font-semibold mt-1">Mobile Dev Intern</p>
          <p className="text-[10px] font-bold opacity-70 font-display">2024</p>
        </div>
        <div className="flex gap-2 mt-3">
          <span className="border-[2px] border-foreground bg-card px-3 py-1 text-[9px] font-bold uppercase font-display">
            🎯 Dart
          </span>
          <span className="border-[2px] border-foreground bg-card px-3 py-1 text-[9px] font-bold uppercase font-display">
            💙 Flutter
          </span>
        </div>
      </div>
    </BrutalCard>
  );
};

export default InternshipCard;
