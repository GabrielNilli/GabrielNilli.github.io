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
      <div className="grid gap-8">
        <AboutSection />
        <ProjectSection />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3 border-2 border-black">
            <WIPSection />
          </div>

          <div className="md:col-span-1 border-2 border-black">
            <SocialsSection />
          </div>
        </div>
      </div>
    </>
  );
}
