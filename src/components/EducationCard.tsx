import BrutalCard from "./BrutalCard";

const EducationCard = () => {
  return (
    <BrutalCard delay={0.25}>
      <h2 className="text-lg font-black uppercase leading-tight mb-3">
        Education
      </h2>
      <p className="text-sm font-bold">
        B.Sc. in Computer Science
      </p>
      <p className="text-xs text-muted-foreground font-medium">
        (Pokhara University, 2024-2028)
      </p>
    </BrutalCard>
  );
};

export default EducationCard;
