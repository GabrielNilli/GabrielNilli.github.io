// =================================
//  IMPORTS
// =================================
import ExperiencesHeaderSection from "../components/ui/pages/experiences/sections/ExperiencesHeaderSection";
import ExperiencesTimelineSection from "../components/ui/pages/experiences/sections/ExperiencesTimelineSection";

// =================================
//  COMPONENT
// =================================
export default function ExperiencesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl border-3 border-[var(--border-color)] bg-[var(--surface-color)] p-6 shadow-[6px_6px_0px_var(--shadow-color)] sm:p-8">
      <ExperiencesHeaderSection />
      <ExperiencesTimelineSection />
    </div>
  );
}
