import BrutalCard from "./BrutalCard";

const CommunityCard = () => {
  return (
    <BrutalCard variant="blue" delay={0.3}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-60">
        Community
      </p>
      <h2 className="text-xl font-black uppercase leading-tight mb-3">
        Code for Change
      </h2>
      <p className="text-sm font-medium opacity-80">Member</p>
      <div className="mt-4 flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-80">
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <circle cx="5" cy="8" r="2" fill="currentColor" />
          <circle cx="19" cy="8" r="2" fill="currentColor" />
          <circle cx="5" cy="16" r="2" fill="currentColor" />
          <circle cx="19" cy="16" r="2" fill="currentColor" />
          <line x1="12" y1="12" x2="5" y2="8" stroke="currentColor" strokeWidth="1.5" />
          <line x1="12" y1="12" x2="19" y2="8" stroke="currentColor" strokeWidth="1.5" />
          <line x1="12" y1="12" x2="5" y2="16" stroke="currentColor" strokeWidth="1.5" />
          <line x1="12" y1="12" x2="19" y2="16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
          Social Impact Network
        </span>
      </div>
    </BrutalCard>
  );
};

export default CommunityCard;
