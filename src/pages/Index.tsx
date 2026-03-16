import MainLayout from "@/layouts/MainLayout";
import HeroCard from "@/components/HeroCard";
import ExperienceCard from "@/components/ExperienceCard";
import TechStackCard from "@/components/TechStackCard";
import InternshipCard from "@/components/InternshipCard";
import EducationCard from "@/components/EducationCard";
import CommunityCard from "@/components/CommunityCard";

const Index = () => {
  return (
    <MainLayout>
      <div className="p-4 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Hero - spans 2 cols and 2 rows */}
            <HeroCard />

            {/* Experience */}
            <ExperienceCard />

            {/* Tech Stack - spans 2 cols */}
            <TechStackCard />

            {/* Bottom row: 3 equal cards */}
            <InternshipCard />
            <EducationCard />
            <CommunityCard />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
