// =================================
//  IMPORTS
// =================================
import type { Skill } from "../data/skills";

// =================================
//  TYPES
// =================================
interface SkillCardProps {
  skill: Skill;
}

// =================================
//  COMPONENT
// =================================
export default function SkillCard({ skill }: SkillCardProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <div
      className="flex min-w-[120px] items-center justify-center border-2
                 border-[var(--border-color)] bg-[var(--surface-color)]
                 px-5 py-4 text-center shadow-[4px_4px_0_var(--shadow-color)]
                 transition-transform duration-150 hover:-translate-y-1
                 hover:shadow-[6px_6px_0_var(--shadow-color)]"
    >
      <span className="text-base font-bold text-[var(--text-color)]">
        {skill.name}
      </span>
    </div>
  );
}
