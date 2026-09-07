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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4">
        <div className="order-2 md:order-none md:col-start-2 md:col-span-2">
          <InfoSection />
        </div>

        <div className="order-1 justify-self-center md:order-none md:col-start-4 md:justify-self-end">
          <ProfilePicSection />
        </div>
      </div>
    </>
  );
}
