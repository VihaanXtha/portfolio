const Marquee = ({ items, className = "" }: { items: string[]; className?: string }) => {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className={`overflow-hidden border-y-[3px] border-foreground bg-foreground text-primary-foreground ${className}`}>
      <div className="marquee-track py-3">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-4 text-xs font-bold uppercase tracking-[0.2em] font-display whitespace-nowrap">
            {item} <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
