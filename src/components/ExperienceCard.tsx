import BrutalCard from "./BrutalCard";

const ExperienceCard = () => {
  return (
    <BrutalCard delay={0.1}>
      <h2 className="text-lg font-black uppercase leading-tight mb-4">
        Experience
      </h2>
      <div className="space-y-3">
        <div>
          <p className="text-sm font-bold">Recent Role:</p>
          <p className="text-sm font-bold">
            IT & Digital Media at Senior Citizen Rupandehi Center
          </p>
          <p className="text-xs text-muted-foreground font-medium">(2024 - Present)</p>
        </div>
        <div>
          <p className="text-sm font-bold">
            Intern at Smait Technology
          </p>
          <p className="text-xs text-muted-foreground font-medium">(2024)</p>
        </div>
      </div>
    </BrutalCard>
  );
};

export default ExperienceCard;
