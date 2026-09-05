import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { Project } from "../data/projects";

interface WorkCardProps {
  project: Project;
}

export default function WorkCard({ project }: WorkCardProps) {
  return (
    <article className="border-3 border-[var(--border-color)] bg-[var(--surface-muted-color)] p-5 shadow-[5px_5px_0px_var(--shadow-color)] sm:p-6">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <h2 className="m-0 font-sans text-xl font-black leading-none text-[var(--text-color)] sm:text-2xl">
          <span className="mr-3 text-[var(--accent-color)]">
            [{project.number}]
          </span>
          {project.title}
        </h2>
        <span
          className={`flex items-center gap-2 border-2 border-[var(--border-color)] px-2.5 py-1 font-sans text-xs font-black tracking-wider ${project.status === "ACTIVE" ? "bg-[var(--accent-color)] text-white" : "bg-[var(--status-color)] text-[var(--text-color)]"}`}
        >
          <span
            className="size-2 rounded-full bg-white"
          />
          {project.status}
        </span>
      </div>
      <p className="mb-6 mt-0 font-sans text-base leading-relaxed text-[var(--text-color)]">
        {project.description}
      </p>
      <div className="flex flex-wrap items-end justify-between gap-5">
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
        <Link
          to={`/works/${project.id}`}
          className="inline-flex items-center gap-2 border-2 border-[var(--border-color)] bg-[var(--text-color)] px-3 py-2 font-sans text-xs font-black tracking-wider text-[var(--on-ink-color)] no-underline shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--shadow-color)]"
        >
          OPEN PROJECT <ArrowUpRight size={16} strokeWidth={2.75} />
        </Link>
      </div>
    </article>
  );
}
