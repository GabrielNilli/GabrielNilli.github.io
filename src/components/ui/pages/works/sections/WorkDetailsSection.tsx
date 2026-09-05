import { ArrowLeft, ArrowUpRight, Check, Circle } from "lucide-react";
import { Link } from "react-router-dom";

import type { Project } from "../data/projects";

interface WorkDetailsSectionProps {
  project: Project;
}

export default function WorkDetailsSection({
  project,
}: WorkDetailsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-5xl border-3 border-[var(--border-color)] bg-[var(--surface-color)] p-6 shadow-[6px_6px_0px_var(--shadow-color)] sm:p-8">
      <Link
        to="/works"
        className="mb-8 inline-flex items-center gap-2 border-2 border-[var(--border-color)] bg-[var(--surface-muted-color)] px-3 py-2 font-sans text-xs font-black tracking-wider text-[var(--text-color)] no-underline shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--shadow-color)]"
      >
        <ArrowLeft size={16} strokeWidth={2.75} />
        ALL WORKS
      </Link>
      <header className="border-b-3 border-[var(--border-color)] pb-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="font-sans text-base font-black text-[var(--accent-color)]">
            [{project.number}] {project.category}
          </span>
          <span
            className={`flex items-center gap-2 border-2 border-[var(--border-color)] px-2.5 py-1 font-sans text-xs font-black tracking-wider ${project.status === "ACTIVE" ? "bg-[var(--accent-color)] text-white" : "bg-[var(--status-color)] text-[var(--text-color)]"}`}
          >
            <Circle size={8} fill="currentColor" />
            {project.status}
          </span>
        </div>
        <h1 className="m-0 font-sans text-4xl font-black leading-none text-[var(--text-color)] sm:text-6xl">
          {project.title}
        </h1>
      </header>
      <div className="grid gap-8 pt-8 md:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="mb-3 font-sans text-xs font-black tracking-[0.2em] text-[var(--accent-color)]">
            // OVERVIEW
          </p>
          <p className="m-0 font-sans text-lg leading-relaxed text-[var(--text-color)]">
            {project.overview}
          </p>
        </div>
        <div className="border-2 border-[var(--border-color)] bg-[var(--surface-muted-color)] p-5 shadow-[3px_3px_0px_var(--shadow-color)]">
          <p className="mb-4 font-sans text-sm font-black tracking-wide text-[var(--text-color)]">
            TECHNOLOGIES
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="border-2 border-[var(--border-color)] bg-[var(--surface-color)] px-2 py-1 font-sans text-xs font-black text-[var(--text-color)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 border-t-2 border-[var(--border-color)] pt-6">
        <p className="mb-4 font-sans text-xs font-black tracking-[0.2em] text-[var(--accent-color)]">
          // HIGHLIGHTS
        </p>
        <ul className="m-0 grid gap-3 p-0 md:grid-cols-3">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 border-2 border-[var(--border-color)] bg-[var(--surface-muted-color)] p-4 font-sans text-sm leading-relaxed text-[var(--text-color)]"
            >
              <Check
                size={18}
                className="shrink-0 text-[var(--accent-color)]"
                strokeWidth={3}
              />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {project.liveUrl && (
        <div className="mt-8 flex justify-end">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[var(--border-color)] bg-[var(--accent-color)] px-4 py-3 font-sans text-sm font-black tracking-wider text-white no-underline shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--shadow-color)]"
          >
            VISIT LIVE PROJECT <ArrowUpRight size={18} strokeWidth={2.75} />
          </a>
        </div>
      )}
    </section>
  );
}
