import HeroCard from "@/components/HeroCard";
import ExperienceCard from "@/components/ExperienceCard";
import TechStackCard from "@/components/TechStackCard";
import InternshipCard from "@/components/InternshipCard";
import EducationCard from "@/components/EducationCard";
import CommunityCard from "@/components/CommunityCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hero - spans 2 cols and 2 rows */}
          <HeroCard />

          {/* Experience */}
          <ExperienceCard />

          {/* Education */}
          <EducationCard />

          {/* Tech Stack - spans 2 cols */}
          <TechStackCard />

          {/* Internship */}
          <InternshipCard />

          {/* Community */}
          <CommunityCard />
        </div>

        {/* Footer */}
        <div className="mt-8 border-t-[3px] border-foreground pt-4 flex justify-between items-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            © 2024 Vihaan Shrestha
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Built with conviction
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
