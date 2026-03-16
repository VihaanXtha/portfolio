import BrutalCard from "./BrutalCard";

const InternshipCard = () => {
  return (
    <BrutalCard variant="yellow" delay={0.2}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-60">
        Internship
      </p>
      <h2 className="text-xl font-black uppercase leading-tight mb-3">
        Smait Technology
      </h2>
      <div className="flex gap-2 mt-3">
        <span className="border-[2px] border-foreground bg-card px-3 py-1 text-xs font-bold uppercase">
          Dart
        </span>
        <span className="border-[2px] border-foreground bg-card px-3 py-1 text-xs font-bold uppercase">
          Flutter
        </span>
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest mt-4 opacity-50">
        Mobile App Development
      </p>
    </BrutalCard>
  );
};

export default InternshipCard;
