// =================================
//  TYPES
// =================================
export interface Skill {
  name: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  layout: "full" | "half";
  skills: Skill[];
}

// =================================
//  DATA
// =================================
export const skillCategories: SkillCategory[] = [
  {
    id: "front-end",
    title: "Front-End",
    layout: "full",
    skills: [
      { name: "React" },
      { name: "React Native" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind" },
      { name: "Filament" },
      { name: "Vue" },
    ],
  },
  {
    id: "back-end-tools",
    title: "Back-End & Tools",
    layout: "half",
    skills: [
      { name: "Laravel" },
      { name: "Filament" },
      { name: "SQL" },
      { name: "REST APIs" },
      { name: "Git" },
      { name: "GitHub" },
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    layout: "half",
    skills: [
      { name: "HubSpot" },
      { name: "HubSpot UI Extensions" },
      { name: "API Integrations" },
    ],
  },
];