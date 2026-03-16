import MainLayout from "@/layouts/MainLayout";
import HeroCard from "@/components/HeroCard";
import ExperienceCard from "@/components/ExperienceCard";
import TechStackCard from "@/components/TechStackCard";
import InternshipCard from "@/components/InternshipCard";
import EducationCard from "@/components/EducationCard";
import CommunityCard from "@/components/CommunityCard";
import Marquee from "@/components/Marquee";

const Index = () => {
  return (
    <MainLayout>
      <Marquee items={["MERN Stack", "Digital Media", "Flutter", "React", "Node.js", "UI/UX", "Open Source", "Social Impact"]} />
      <div className="p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <HeroCard />
            <ExperienceCard />
            <TechStackCard />
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
