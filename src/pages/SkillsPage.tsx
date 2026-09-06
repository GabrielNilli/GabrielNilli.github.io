// =================================
//  IMPORTS
// =================================
import { Code2, Server, Plug } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillCategories } from "../components/ui/pages/skills/data/skills";
import SkillsHeaderSection from "../components/ui/pages/skills/sections/SkillsHeaderSection";
import SkillsCategorySection from "../components/ui/pages/skills/sections/SkillsCategorySection";

// =================================
//  CONFIG
// =================================
const categoryIcons: Record<string, LucideIcon> = {
  "front-end": Code2,
  "back-end-tools": Server,
  integrations: Plug,
};

// =================================
//  COMPONENT
// =================================
export default function SkillsPage() {
  const totalSkills = skillCategories.reduce(
    (count, category) => count + category.skills.length,
    0,
  );

  // =================================
  //  RENDER
  // =================================
  return (
    <div className="flex flex-col gap-8">
      <SkillsHeaderSection
        totalSkills={totalSkills}
        totalCategories={skillCategories.length}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <SkillsCategorySection
            key={category.id}
            category={category}
            icon={categoryIcons[category.id]}
            className={category.layout === "full" ? "lg:col-span-2" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
