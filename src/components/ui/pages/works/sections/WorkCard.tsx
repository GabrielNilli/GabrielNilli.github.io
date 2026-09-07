import { ArrowUpRight, Globe, Server, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

import type { Project, ProjectCategory } from "../data/projects";

interface WorkCardProps {
  project: Project;
}

const categoryIcons: Record<ProjectCategory, LucideIcon> = {
  WEB: Globe,
  APPS: Smartphone,
  SYSTEMS: Server,
};

export default function WorkCard({ project }: WorkCardProps) {
  const CategoryIcon = categoryIcons[project.category];
  const statusClasses =
    project.status === "ACTIVE"
      ? "bg-[var(--accent-color)] text-white"
      : "bg-[var(--status-color)] text-[var(--text-color)]";

  return (
    <article className="border-3 border-[var(--border-color)] bg-[var(--surface-muted-color)] p-5 shadow-[5px_5px_0px_var(--shadow-color)] sm:p-6">
      {/* Mobile-only icon + meta row */}
      <div className="mb-4 flex items-center gap-3 sm:hidden">
        <span className="flex size-9 shrink-0 items-center justify-center border-2 border-[var(--border-color)] bg-[var(--surface-color)] text-[var(--text-color)]">
          <CategoryIcon size={18} strokeWidth={2.5} />
        </span>
        <p className="m-0 font-sans text-xs font-black uppercase tracking-wider text-[var(--text-color)]">
          {project.category} · {project.scope}
        </p>
      </div>

      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <h2 className="m-0 font-sans text-xl font-black leading-none text-[var(--text-color)] sm:text-2xl">
          <span className="mr-3 text-[var(--accent-color)]">
            [{project.number}]
          </span>
          {project.title}
        </h2>
        <span
          className={`hidden items-center gap-2 border-2 border-[var(--border-color)] px-2.5 py-1 font-sans text-xs font-black tracking-wider sm:flex ${statusClasses}`}
        >
          <span className="size-2 rounded-full bg-white" />
          {project.status}
        </span>
      </div>
      <p className="mb-6 mt-0 font-sans text-base leading-relaxed text-[var(--text-color)]">
        {project.description}
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-5">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="border-2 border-[var(--border-color)] bg-[var(--surface-color)] px-2.5 py-1 font-sans text-xs font-black tracking-wider text-[var(--text-color)]"
            >
              [{technology}]
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between gap-3 sm:contents">
          <span
            className={`flex items-center gap-2 border-2 border-[var(--border-color)] px-2.5 py-1 font-sans text-xs font-black tracking-wider sm:hidden ${statusClasses}`}
          >
            <span className="size-2 rounded-full bg-white" />
            {project.status}
          </span>
          <Link
            to={`/works/${project.id}`}
            className="inline-flex items-center gap-2 border-2 border-[var(--border-color)] bg-[var(--text-color)] px-3 py-2 font-sans text-xs font-black tracking-wider text-[var(--on-ink-color)] no-underline shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--shadow-color)]"
          >
            OPEN PROJECT <ArrowUpRight size={16} strokeWidth={2.75} />
          </Link>
        </div>
      </div>
    </article>
  );
}
