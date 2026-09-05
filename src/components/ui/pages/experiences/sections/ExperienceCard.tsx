// =================================
//  IMPORTS
// =================================
import { ChevronRight } from "lucide-react";

// =================================
//  TYPES
// =================================
export interface Experience {
  period: string;
  role: string;
  company: string;
  technologies: string[];
  responsibilities?: string[];
  current?: boolean;
}

interface ExperienceCardProps {
  experience: Experience;
}

// =================================
//  COMPONENT
// =================================
export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="relative border-3 border-[var(--border-color)] bg-[var(--surface-muted-color)] p-5 shadow-[5px_5px_0px_var(--shadow-color)] sm:p-6">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <span className="border-2 border-[var(--border-color)] bg-[var(--surface-color)] px-3 py-1 font-sans text-sm font-black tracking-wide text-[var(--text-color)]">
          {experience.period}
        </span>
        {experience.current && (
          <span className="flex items-center gap-2 border-2 border-[var(--border-color)] bg-[var(--accent-color)] px-3 py-1 font-sans text-xs font-black tracking-wider text-white">
            <span className="size-2 rounded-full bg-white" />CURRENT
          </span>
        )}
      </div>

      <h3 className="m-0 font-sans text-2xl font-black leading-tight text-[var(--text-color)] sm:text-3xl">
        {experience.role}
      </h3>
      <p className="mb-6 mt-1 font-sans text-base font-bold text-[var(--text-color)]">
        {experience.company}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <span key={technology} className="border-2 border-[var(--border-color)] bg-[var(--surface-color)] px-2.5 py-1 font-sans text-xs font-black tracking-wider text-[var(--text-color)]">
            {technology}
          </span>
        ))}
      </div>

      {experience.responsibilities && (
        <div className="border-t-2 border-[var(--border-color)] pt-5">
          <p className="mb-3 flex items-center gap-1 font-sans text-sm font-black tracking-wide text-[var(--text-color)]">
            <ChevronRight size={18} strokeWidth={3} />
            {experience.current ? "WHAT I DO" : "WHAT I DID"}
          </p>
          <ul className="m-0 grid list-disc gap-2 pl-5 font-sans text-sm leading-relaxed text-[var(--text-color)]">
            {experience.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
          </ul>
        </div>
      )}
    </article>
  );
}
