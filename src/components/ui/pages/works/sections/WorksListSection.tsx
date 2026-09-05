import WorkCard from "./WorkCard";

import type { Project } from "../data/projects";

interface WorksListSectionProps {
  projects: Project[];
}

export default function WorksListSection({ projects }: WorksListSectionProps) {
  return (
    <section aria-label="Projects" className="grid gap-6">
      {projects.map((project) => <WorkCard key={project.id} project={project} />)}
    </section>
  );
}
