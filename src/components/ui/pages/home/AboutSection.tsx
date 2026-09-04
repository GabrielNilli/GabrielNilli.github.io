// =================================
//  IMPORTS
// =================================
import ProfilePicSection from "./sections/about-section/profie/ProfilePicSection";
import InfoSection from "./sections/about-section/info-section/InfoSection";

// =================================
//  COMPONENT
// =================================
export default function AboutSection() {
  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-start-2 col-span-2">
          <InfoSection />
        </div>

        <div className="col-start-4 justify-self-end">
          <ProfilePicSection />
        </div>
      </div>
    </>
  );
}
