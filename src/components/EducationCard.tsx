import BrutalCard from "./BrutalCard";

const EducationCard = () => {
  return (
    <BrutalCard delay={0.25}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
        Education
      </p>
      <h2 className="text-lg font-black uppercase leading-tight mb-2">
        Bachelor's in Computer Science
      </h2>
      <p className="text-sm font-bold">Pokhara University</p>
      <div className="mt-4 flex items-center gap-2">
        <span className="brutal-card-blue border-[2px] border-foreground px-3 py-1 text-xs font-bold uppercase">
          2024 — 2028
        </span>
      </div>
    </BrutalCard>
  );
};

export default EducationCard;
