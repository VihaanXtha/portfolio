import MainLayout from "@/layouts/MainLayout";
import BrutalCard from "@/components/BrutalCard";

const Resume = () => {
  return (
    <MainLayout>
      <div className="p-4 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            Resume.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <BrutalCard delay={0}>
              <h2 className="text-xl font-black uppercase mb-4">Education</h2>
              <div className="border-l-[3px] border-foreground pl-4 space-y-4">
                <div>
                  <h3 className="text-sm font-black uppercase">B.Sc. Computer Science</h3>
                  <p className="text-xs font-bold text-muted-foreground">Pokhara University • 2024 — 2028</p>
                </div>
              </div>
            </BrutalCard>

            <BrutalCard delay={0.05}>
              <h2 className="text-xl font-black uppercase mb-4">Experience</h2>
              <div className="border-l-[3px] border-foreground pl-4 space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-black uppercase">Senior Citizen Rupandehi Center</h3>
                    <span className="badge-active text-[8px]">Active</span>
                  </div>
                  <p className="text-xs font-bold text-muted-foreground">IT & Digital Media • 2024 — Present</p>
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase">Smait Technology</h3>
                  <p className="text-xs font-bold text-muted-foreground">Mobile Dev Intern • 2024</p>
                </div>
              </div>
            </BrutalCard>

            <BrutalCard variant="yellow" delay={0.1}>
              <h2 className="text-xl font-black uppercase mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-2">
                {["MongoDB", "Express", "React", "Node.js", "Flutter", "Dart", "Figma", "Adobe CC"].map((s) => (
                  <div key={s} className="border-[2px] border-foreground bg-card px-3 py-2 text-xs font-bold uppercase text-center">
                    {s}
                  </div>
                ))}
              </div>
            </BrutalCard>

            <BrutalCard variant="blue" delay={0.15}>
              <h2 className="text-xl font-black uppercase mb-4">Community</h2>
              <div className="border-l-[3px] border-current pl-4">
                <h3 className="text-sm font-black uppercase">Code for Change</h3>
                <p className="text-xs font-bold opacity-70">Member • Social Impact Tech</p>
              </div>
            </BrutalCard>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Resume;
