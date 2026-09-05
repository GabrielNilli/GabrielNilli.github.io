// =================================
//  IMPORTS
// =================================
import AvatarSection from "../components/ui/pages/about/sections/AvatarSection";
import WhoAMISection from "../components/ui/pages/about/sections/WhoAMISection";
import HowIWorkSection from "../components/ui/pages/about/sections/HowIWorkSection";
import PersonalitySection from "../components/ui/pages/about/sections/PersonalitySection";
import JourneySection from "../components/ui/pages/about/sections/JourneySection";

// =================================
//  COMPONENT
// =================================
export default function AboutPage() {
  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="about-page">
        <div className="about-page__content grid gap-y-8 pb-2">
          <div className="grid min-h-0 grid-cols-1 gap-4 md:grid-cols-4">
            <div className="h-full md:col-span-1">
              <AvatarSection />
            </div>
            <div className="h-full md:col-span-3">
              <WhoAMISection />
            </div>
          </div>

          <div className="grid min-h-0 grid-cols-1 gap-4 md:grid-cols-4">
            <div className="h-full md:col-span-2">
              <HowIWorkSection />
            </div>
            <div className="h-full md:col-span-2">
              <PersonalitySection />
            </div>
          </div>

          <div className="h-full md:col-span-full">
            <JourneySection />
          </div>
        </div>
      </div>
    </>
  );
}
