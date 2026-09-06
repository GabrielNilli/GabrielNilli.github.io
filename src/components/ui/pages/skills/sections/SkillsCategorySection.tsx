// =================================
//  IMPORTS
// =================================
import type { LucideIcon } from "lucide-react";
import type { SkillCategory } from "../data/skills";
import SkillCard from "./SkillCard";

// =================================
//  TYPES
// =================================
interface SkillsCategorySectionProps {
  category: SkillCategory;
  icon: LucideIcon;
  className?: string;
}

// =================================
//  COMPONENT
// =================================
export default function SkillsCategorySection({
  category,
  icon: Icon,
  className,
}: SkillsCategorySectionProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <section
      className={`flex flex-col border-2 border-[var(--border-color)]
                  bg-[var(--surface-color)] shadow-[6px_6px_0_var(--shadow-color)]
                  ${className ?? ""}`}
    >
      <div
        className="flex items-center justify-between border-b-2
                   border-[var(--border-color)] bg-[var(--surface-muted-color)]
                   px-5 py-3"
      >
        <h2 className="text-lg font-bold uppercase tracking-wide text-[var(--text-color)]">
          {category.title}
        </h2>
        <Icon
          className="h-5 w-5 text-[var(--accent-color)]"
          strokeWidth={2.5}
        />
      </div>

      <div className="flex flex-wrap gap-3 p-5">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
