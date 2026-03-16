import MainLayout from "@/layouts/MainLayout";
import BrutalCard from "@/components/BrutalCard";
import Marquee from "@/components/Marquee";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Senior Citizen Rupandehi Center",
    role: "IT & Digital Media Lead",
    description: "Built complete web presence, managed social media channels, and handled IT infrastructure for the center. Increased digital engagement by creating compelling content strategies.",
    tags: ["Web Dev", "Social Media", "Content Strategy", "IT Ops"],
    variant: "default" as const,
    number: "01",
  },
  {
    title: "Smait Technology — Mobile App",
    role: "Mobile Development Intern",
    description: "Developed cross-platform mobile applications using Dart and Flutter. Focused on clean UI/UX patterns, performance optimization, and modern mobile architecture.",
    tags: ["Flutter", "Dart", "Mobile", "UI/UX"],
    variant: "yellow" as const,
    number: "02",
  },
  {
    title: "Code for Change Projects",
    role: "Active Community Member",
    description: "Community-driven tech initiatives aimed at social impact. Collaborated with fellow developers to create accessible solutions for underserved communities.",
    tags: ["Community", "MERN", "Social Impact", "Open Source"],
    variant: "blue" as const,
    number: "03",
  },
];

const Work = () => {
  return (
    <MainLayout>
      <Marquee items={["Projects", "Case Studies", "Real Work", "Impact Driven"]} />
      <div className="p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-[-0.04em] font-display leading-[0.85]">
              Selected<br />
              <span style={{ WebkitTextStroke: '3px hsl(var(--foreground))', color: 'transparent' }}>
                Work.
              </span>
            </h1>
            <p className="text-sm font-medium text-muted-foreground mt-4 max-w-md">
              A collection of projects that showcase my skills across development, design, and digital media.
            </p>
          </motion.div>

          <div className="space-y-5">
            {projects.map((project, i) => (
              <BrutalCard key={project.title} variant={project.variant} delay={i * 0.1} className="!p-0">
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-0">
                  <div className="border-b-[3px] md:border-b-0 md:border-r-[3px] border-current p-6 flex items-center justify-center">
                    <span className="text-4xl font-black font-display opacity-20">{project.number}</span>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                      <div>
                        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight font-display">
                          {project.title}
                        </h2>
                        <p className="text-xs font-bold uppercase tracking-wider opacity-60 mt-1">{project.role}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium opacity-70 mb-5 max-w-xl leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="border-[2px] border-current px-3 py-1 text-[9px] font-bold uppercase font-display tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </BrutalCard>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Work;
