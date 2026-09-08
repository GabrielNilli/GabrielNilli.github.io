// =================================
//  IMPORTS
// =================================
import ProjectCard from "./sections/projects-section/ProjectCard";

import { Server, Trophy, Dices, LucideIcon, NotebookPen } from "lucide-react";

import KnucleBonesCover from "./../../../../images/projects/knucklebones/KnucleBonesCover.webp";
import TrophyLabAchievements from "./../../../../images/projects/trophy-lab/TrophyLabAchievements.png";

// =================================
//  TYPES
// =================================
interface Project {
  id: number;
  name: string;
  description: string;
  icon: LucideIcon;
  image?: string; // opzionale: sostituisce l'icona come cover se presente
  tags: string[];
  href?: string;
}

// =================================
//  CONSTS
// =================================
const currentProjects: Project[] = [
  {
    id: 1,
    name: "Home Server",
    description: "A small server for my personal project made with a BananaPi.",
    icon: Server,
    tags: ["LINUX", "DOCKER", "SQL"],
    href: "/works/home-server",
  },
  {
    id: 2,
    name: "Trophy Lab",
    description:
      "A PWA designed to help you out getting every achievements for your Steam games.",
    icon: Trophy,
    image: TrophyLabAchievements,
    tags: ["REACT", "INERTIA", "LARAVEL", "PHP", "API"],
    href: "/works/trophy-lab",
  },
  {
    id: 3,
    name: "Knucklebones",
    description:
      "An app inspired by the in-game dice game of Cult of the Lamb.",
    icon: Dices,
    image: KnucleBonesCover,
    tags: ["REACT", "TS"],
    href: "/works/knucklebones",
  },
  {
    id: 4,
    name: "More to come...",
    description:
      "I have plenty of sources of inspiration that will be added to the projects over time.",
    icon: NotebookPen,
    tags: ["MISTERY", "STAY TUNED"],
  },
];

// =================================
//  COMPONENT
// =================================
export default function ProjectSection() {
  // =================================
  //  RENDER
  // =================================
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {currentProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.name}
          description={project.description}
          tags={project.tags}
          icon={project.icon}
          image={project.image}
          href={project.href}
        />
      ))}
    </div>
  );
}
