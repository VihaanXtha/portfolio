import MainLayout from "@/layouts/MainLayout";
import BrutalCard from "@/components/BrutalCard";
import Marquee from "@/components/Marquee";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <MainLayout>
      <Marquee items={["Curriculum Vitae", "Experience", "Education", "Skills"]} />
      <div className="p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-[-0.04em] font-display leading-[0.85]">
              Résumé<span style={{ color: 'hsl(var(--accent-yellow))' }}>.</span>
            </h1>
            <a
              href="#"
              className="mt-4 md:mt-0 border-[3px] border-foreground px-6 py-3 text-xs font-black uppercase tracking-wider font-display hover:translate-x-1 hover:translate-y-1 transition-transform inline-block"
              style={{ backgroundColor: 'hsl(var(--accent-yellow))' }}
            >
              Download PDF ↓
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Education */}
            <BrutalCard delay={0}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🎓</span>
                <h2 className="text-sm font-black uppercase tracking-wider font-display">Education</h2>
              </div>
              <div className="border-l-[3px] border-foreground pl-5 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[23px] top-1 w-3 h-3 border-[2px] border-foreground bg-accent" />
                  <h3 className="text-base font-black uppercase font-display">B.Sc. Computer Science</h3>
                  <p className="text-xs font-bold text-muted-foreground mt-1">Pokhara University</p>
                  <p className="text-[10px] font-bold text-muted-foreground font-display">2024 — 2028</p>
                  <p className="text-xs font-medium mt-2 leading-relaxed text-muted-foreground">
                    Focus on full-stack development, algorithms, and software engineering principles.
                  </p>
                </div>
              </div>
            </BrutalCard>

            {/* Experience */}
            <BrutalCard delay={0.05}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">💼</span>
                <h2 className="text-sm font-black uppercase tracking-wider font-display">Experience</h2>
              </div>
              <div className="border-l-[3px] border-foreground pl-5 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[23px] top-1 w-3 h-3 border-[2px] border-foreground" style={{ backgroundColor: 'hsl(var(--accent-green))' }} />
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-black uppercase font-display">Senior Citizen Rupandehi</h3>
                    <span className="badge-active text-[7px]">Active</span>
                  </div>
                  <p className="text-xs font-bold text-muted-foreground mt-1">IT & Digital Media Lead</p>
                  <p className="text-[10px] font-bold text-muted-foreground font-display">2024 — Present</p>
                  <p className="text-xs font-medium mt-2 leading-relaxed text-muted-foreground">
                    Managing web presence, social media strategy, and IT infrastructure.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[23px] top-1 w-3 h-3 border-[2px] border-foreground bg-muted" />
                  <h3 className="text-base font-black uppercase font-display">Smait Technology</h3>
                  <p className="text-xs font-bold text-muted-foreground mt-1">Mobile Dev Intern</p>
                  <p className="text-[10px] font-bold text-muted-foreground font-display">2024</p>
                  <p className="text-xs font-medium mt-2 leading-relaxed text-muted-foreground">
                    Built cross-platform mobile apps with Flutter and Dart.
                  </p>
                </div>
              </div>
            </BrutalCard>

            {/* Skills */}
            <BrutalCard variant="yellow" delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">⚡</span>
                <h2 className="text-sm font-black uppercase tracking-wider font-display">Technical Skills</h2>
              </div>
              <div className="space-y-4">
                {[
                  { category: "Frontend", skills: ["React", "HTML/CSS", "Tailwind", "Flutter"] },
                  { category: "Backend", skills: ["Node.js", "Express", "MongoDB", "REST APIs"] },
                  { category: "Tools", skills: ["Git", "Figma", "Adobe CC", "VS Code"] },
                ].map((group) => (
                  <div key={group.category}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] font-display mb-2 opacity-60">{group.category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((s) => (
                        <span key={s} className="border-[2px] border-foreground bg-card px-3 py-1.5 text-[9px] font-bold uppercase font-display tracking-wider">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </BrutalCard>

            {/* Community */}
            <BrutalCard variant="blue" delay={0.15}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🌍</span>
                <h2 className="text-sm font-black uppercase tracking-wider font-display">Community & Impact</h2>
              </div>
              <div className="border-l-[3px] border-current pl-5">
                <div className="relative">
                  <div className="absolute -left-[23px] top-1 w-3 h-3 border-[2px] border-current" style={{ backgroundColor: 'hsl(var(--accent-yellow))' }} />
                  <h3 className="text-base font-black uppercase font-display">Code for Change</h3>
                  <p className="text-xs font-bold opacity-70 mt-1">Active Member</p>
                  <p className="text-xs font-medium mt-2 leading-relaxed opacity-60">
                    Contributing to community-driven tech projects focused on social impact and accessibility.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t-[2px] border-current opacity-40">
                <p className="text-[10px] font-bold uppercase tracking-wider font-display">
                  Open Source · Social Good · Collaboration
                </p>
              </div>
            </BrutalCard>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Resume;
