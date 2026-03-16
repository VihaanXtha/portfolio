import MainLayout from "@/layouts/MainLayout";
import BrutalCard from "@/components/BrutalCard";
import avatar from "@/assets/avatar.png";

const About = () => {
  return (
    <MainLayout>
      <div className="p-4 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            About.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <BrutalCard className="md:col-span-2" delay={0}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-32 h-32 rounded-full bg-accent border-[3px] border-foreground overflow-hidden flex-shrink-0">
                  <img src={avatar} alt="Vihaan" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase mb-3">Vihaan Shrestha</h2>
                  <p className="text-sm font-medium mb-3">
                    I'm a Computer Science student at Pokhara University with a passion for building full-stack web applications and crafting digital media content.
                  </p>
                  <p className="text-sm font-medium mb-3">
                    Currently working at Senior Citizen Rupandehi Center handling IT infrastructure and digital media. I believe technology should serve communities.
                  </p>
                  <p className="text-sm font-medium">
                    When I'm not coding, I'm contributing to Code for Change — building tech for social impact.
                  </p>
                </div>
              </div>
            </BrutalCard>

            <BrutalCard variant="yellow" delay={0.1}>
              <h3 className="text-lg font-black uppercase mb-3">Skills</h3>
              <div className="space-y-2">
                {["MongoDB", "Express.js", "React", "Node.js", "Flutter", "Dart", "Figma", "Adobe CC", "Content Writing", "Social Media"].map((skill) => (
                  <span key={skill} className="inline-block border-[2px] border-foreground bg-card px-3 py-1 text-[10px] font-bold uppercase mr-2 mb-1">
                    {skill}
                  </span>
                ))}
              </div>
            </BrutalCard>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
