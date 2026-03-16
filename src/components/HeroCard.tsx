import BrutalCard from "./BrutalCard";

const HeroCard = () => {
  return (
    <BrutalCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[300px]" delay={0}>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Portfolio / 2024
        </p>
      </div>
      <div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-6">
          VIHAAN
          <br />
          SHRESTHA
        </h1>
        <p className="text-sm md:text-base font-medium max-w-md">
          Student at Pokhara University | IT & Digital Media Specialist
        </p>
      </div>
      <div className="flex gap-3 mt-6">
        <span className="brutal-card-yellow border-[2px] border-foreground px-3 py-1 text-xs font-bold uppercase">
          MERN Stack
        </span>
        <span className="brutal-card-blue border-[2px] border-foreground px-3 py-1 text-xs font-bold uppercase">
          Digital Media
        </span>
      </div>
    </BrutalCard>
  );
};

export default HeroCard;
