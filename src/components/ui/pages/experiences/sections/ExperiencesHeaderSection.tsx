// =================================
//  IMPORTS
// =================================
import { BriefcaseBusiness } from "lucide-react";

// =================================
//  COMPONENT
// =================================
export default function ExperiencesHeaderSection() {
  return (
    <header className="border-b-3 border-[var(--border-color)] pb-6">
      <div className="mb-8 flex items-center gap-3 text-[var(--accent-color)]">
        <BriefcaseBusiness size={22} strokeWidth={2.5} />
        <span className="font-sans text-xs font-black tracking-[0.2em]">
          // CAREER
        </span>
      </div>
      <h1 className="m-0 font-sans text-5xl font-black leading-none text-[var(--text-color)] sm:text-6xl">
        EXPERIENCES.
      </h1>
    </header>
  );
}
