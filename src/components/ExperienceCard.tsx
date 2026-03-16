import BrutalCard from "./BrutalCard";

const ExperienceCard = () => {
  return (
    <BrutalCard delay={0.1}>
      <div className="flex items-start justify-between mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Experience
        </p>
        <span className="badge-active">Active</span>
      </div>
      <h2 className="text-lg font-black uppercase leading-tight mb-2">
        Senior Citizen Rupandehi Center
      </h2>
      <p className="text-xs font-medium text-muted-foreground">
        IT Support & Digital Media Management
      </p>
      <div className="mt-4 border-t-[2px] border-foreground pt-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Social Media • Content • Web
        </p>
      </div>
    </BrutalCard>
  );
};

export default ExperienceCard;
