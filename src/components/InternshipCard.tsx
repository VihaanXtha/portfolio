import BrutalCard from "./BrutalCard";

const InternshipCard = () => {
  return (
    <BrutalCard variant="default" delay={0.2}>
      <h2 className="text-lg font-black uppercase leading-tight mb-4">
        Internship
      </h2>
      <div className="space-y-3">
        <div>
          <p className="text-sm font-bold">Internship:</p>
          <p className="text-sm font-bold">
            Mobile Dev Intern at Smait Technology
          </p>
          <p className="text-xs text-muted-foreground font-medium">(2024)</p>
        </div>
        <div className="flex gap-2 mt-2">
          <span className="border-[2px] border-foreground bg-muted px-3 py-1 text-[10px] font-bold uppercase">
            Dart
          </span>
          <span className="border-[2px] border-foreground bg-muted px-3 py-1 text-[10px] font-bold uppercase">
            Flutter
          </span>
        </div>
      </div>
    </BrutalCard>
  );
};

export default InternshipCard;
