const Marquee = ({ items, className = "" }: { items: string[]; className?: string }) => {
  const repeated = [...items, ...items, ...items, ...items, ...items, ...items];
  return (
    <div className={`overflow-hidden border-y-[3px] border-foreground bg-accent text-foreground ${className}`}>
      <div className="marquee-track py-4 md:py-6">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 text-sm md:text-xl font-black uppercase tracking-[0.2em] font-display whitespace-nowrap">
            {item} <span className="text-foreground/40 text-lg">＊</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
