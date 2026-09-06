// =================================
//  IMPORTS
// =================================
import {
  gamingPassion,
  tagPassions,
} from "../components/ui/pages/passions/data/passions";
import GamingSection from "../components/ui/pages/passions/sections/GamingSection";
import TagListSection from "../components/ui/pages/passions/sections/TagListSection";

// =================================
//  COMPONENT
// =================================
export default function PassionsPage() {
  // =================================
  //  RENDER
  // =================================
  return (
    <div className="flex flex-col gap-8">
      <GamingSection passion={gamingPassion} />

      {tagPassions.map((passion) => (
        <TagListSection key={passion.id} passion={passion} />
      ))}
    </div>
  );
}
