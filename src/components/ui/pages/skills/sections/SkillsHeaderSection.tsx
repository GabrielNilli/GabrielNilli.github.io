// =================================
//  TYPES
// =================================
interface SkillsHeaderSectionProps {
  totalSkills: number;
  totalCategories: number;
}

// =================================
//  COMPONENT
// =================================
export default function SkillsHeaderSection({
  totalSkills,
  totalCategories,
}: SkillsHeaderSectionProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <header className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-center">
      <div className="flex flex-col gap-3">
        <span className="text-sm font-bold uppercase tracking-wide text-[var(--accent-color)]">
          // Skills
        </span>
        <h1 className="text-4xl font-black text-[var(--text-color)]">
          WHAT I WORK WITH.
        </h1>
        <p className="max-w-xl text-[var(--text-color)]/80">
          I absolutely love the technologies and tools I use every day to turn
          ideas into working products! I get to use everything from front-end
          development to integration with external systems.
        </p>
      </div>

      <div
        className="flex flex-col items-center justify-center gap-1
                   border-2 border-[var(--border-color)]
                   bg-[var(--surface-muted-color)] px-6 py-4 text-center
                   shadow-[4px_4px_0_var(--shadow-color)]"
      >
        <span className="text-2xl font-black text-[var(--text-color)]">
          {totalSkills}
        </span>
        <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-color)]/70">
          skills · {totalCategories} areas
        </span>
      </div>
    </header>
  );
}
