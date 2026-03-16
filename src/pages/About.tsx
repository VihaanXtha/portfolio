import MainLayout from "@/layouts/MainLayout";
import BrutalCard from "@/components/BrutalCard";
import Marquee from "@/components/Marquee";
import avatar from "@/assets/avatar.png";
import { motion } from "framer-motion";

const values = [
  { title: "Community First", desc: "Tech should empower people and solve real problems.", icon: "🌍" },
  { title: "Clean Code", desc: "Readable, maintainable, and well-tested code matters.", icon: "✨" },
  { title: "Always Learning", desc: "Constantly exploring new technologies and methodologies.", icon: "📚" },
];

const About = () => {
  return (
    <MainLayout>
      <Marquee items={["About Me", "Who I Am", "My Story", "Values"]} />
      <div className="p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-[-0.04em] font-display leading-[0.85] mb-12"
          >
            About<br />
            <span style={{ WebkitTextStroke: '3px hsl(var(--foreground))', color: 'transparent' }}>
              Me.
            </span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Bio card */}
            <BrutalCard className="md:col-span-2" delay={0}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-36 h-36 rounded-full border-[3px] border-foreground overflow-hidden flex-shrink-0" style={{ backgroundColor: 'hsl(var(--accent-yellow))' }}>
                  <img src={avatar} alt="Vihaan" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-black uppercase font-display mb-3">Vihaan Shrestha</h2>
                  <div className="space-y-3">
                    <p className="text-sm font-medium leading-relaxed">
                      I'm a Computer Science student at Pokhara University with a passion for building full-stack web applications and crafting digital media content that makes an impact.
                    </p>
                    <p className="text-sm font-medium leading-relaxed">
                      Currently leading IT & Digital Media at Senior Citizen Rupandehi Center — because technology should serve communities, not just corporations.
                    </p>
                    <p className="text-sm font-medium leading-relaxed">
                      When I'm not coding, I'm contributing to <strong>Code for Change</strong> — building tech for social impact, one commit at a time.
                    </p>
                  </div>
                </div>
              </div>
            </BrutalCard>

            {/* Skills */}
            <BrutalCard variant="yellow" delay={0.1}>
              <h3 className="text-sm font-black uppercase tracking-wider font-display mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-1.5">
                {["MongoDB", "Express.js", "React", "Node.js", "Flutter", "Dart", "Figma", "Adobe CC", "Content Writing", "Social Media", "SEO", "Git"].map((skill) => (
                  <span key={skill} className="border-[2px] border-foreground bg-card px-3 py-1.5 text-[9px] font-bold uppercase font-display tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
            </BrutalCard>

            {/* Values */}
            {values.map((v, i) => (
              <BrutalCard key={v.title} variant={i === 1 ? "blue" : "default"} delay={0.15 + i * 0.05}>
                <span className="text-3xl mb-3 block">{v.icon}</span>
                <h3 className="text-sm font-black uppercase tracking-wider font-display mb-2">{v.title}</h3>
                <p className="text-xs font-medium opacity-70 leading-relaxed">{v.desc}</p>
              </BrutalCard>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
