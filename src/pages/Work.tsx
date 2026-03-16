import MainLayout from "@/layouts/MainLayout";
import BrutalCard from "@/components/BrutalCard";

const projects = [
  {
    title: "Senior Citizen Rupandehi Center",
    description: "IT infrastructure and digital media management for the center. Built web presence and managed social media channels.",
    tags: ["Web Dev", "Social Media", "Content"],
    variant: "default" as const,
  },
  {
    title: "Smait Technology — Mobile App",
    description: "Developed mobile applications using Dart and Flutter during internship. Focused on clean UI/UX and performance.",
    tags: ["Flutter", "Dart", "Mobile"],
    variant: "yellow" as const,
  },
  {
    title: "Code for Change Projects",
    description: "Community-driven tech projects aimed at social impact. Collaborated with fellow developers to create solutions.",
    tags: ["Community", "MERN", "Social Impact"],
    variant: "blue" as const,
  },
];

const Work = () => {
  return (
    <MainLayout>
      <div className="p-4 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            Work.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <BrutalCard key={project.title} variant={project.variant} delay={i * 0.1}>
                <h2 className="text-xl font-black uppercase mb-3">{project.title}</h2>
                <p className="text-sm font-medium mb-4 opacity-80">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border-[2px] border-current px-3 py-1 text-[10px] font-bold uppercase">
                      {tag}
                    </span>
                  ))}
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
