// =================================
//  IMPORTS
// =================================
import ProjectSection from "../components/ui/pages/home/ProjectsSection";
import SocialsSection from "../components/ui/pages/home/SocialsSection";
import AboutSection from "../components/ui/pages/home/AboutSection";
import WIPSection from "../components/ui/pages/home/WIPSection";

// =================================
//  COMPONENT
// =================================
export default function HomePage() {
  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="home-page">
        <div className="home-page__content grid grid-rows-[auto_auto_auto] gap-8 md:h-full md:grid-rows-[auto_auto_minmax(0,1fr)]">
          <AboutSection />
          <ProjectSection />

          <div className="grid min-h-0 grid-cols-1 gap-4 md:grid-cols-4">
            <div className="md:h-full md:col-span-3">
              <WIPSection />
            </div>

            <div className="md:h-full md:col-span-1">
              <SocialsSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
