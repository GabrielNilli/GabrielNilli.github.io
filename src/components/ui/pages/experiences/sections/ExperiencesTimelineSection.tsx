// =================================
//  IMPORTS
// =================================
import ExperienceCard, { type Experience } from "./ExperienceCard";

// =================================
//  CONSTS
// =================================
const experiences: Experience[] = [
  {
    period: "2024 — NOW",
    role: "FULLSTACK DEVELOPER",
    company: "Orbital Waves",
    technologies: ["REACT", "VUE", "LARAVEL", "HUBSPOT", "PHP", "SQL", "NoSQL"],
    responsibilities: [
      "Developed advanced integrations with HubSpot using PHP and the Laravel framework.",
      "Built custom UI components for HubSpot leveraging React.",
      "Designed, modeled, and managed relational (MySQL, SQLite) and nonrelational (MongoDB) databases.",
      "Developed internal and external web applications using Filament.",
      "Livewire, React, and Vue.js for enhanced user experience.",
      "Managed containerized development environments via Docker and implemented version control using Git.",
      "Coordinated internal and external projects, managed tasks and priorities.",
      "communicated directly with clients to define technical requirements and feasibility.",
      "Utilized Waterfall methodologies alongside occasional Agile iterations.",
    ],
    current: true,
  },
  {
    period: "2022 — 2024",
    role: "WEB DEV STUDENT",
    company: "School",
    technologies: [
      "PHP",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "HTML",
      "CSS",
      "REACT",
      "SQL",
    ],
    responsibilities: ["Started exploring and studying this beautifull world"],
  },
];

// =================================
//  COMPONENT
// =================================
export default function ExperiencesTimelineSection() {
  return (
    <section className="pt-8">
      <h2 className="mb-8 font-sans text-2xl font-black tracking-wide text-[var(--text-color)] sm:text-3xl">
        MY PROFESSIONAL JOURNEY.
      </h2>
      <ol className="m-0 grid list-none gap-16 p-0">
        {experiences.map((experience, index) => (
          <li key={experience.period} className="relative">
            {index < experiences.length - 1 && (
              <div
                aria-hidden="true"
                className="absolute -bottom-16 left-5 h-16 w-[3px] bg-[var(--border-color)]"
              />
            )}
            <ExperienceCard experience={experience} />
            {index < experiences.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -bottom-[41px] left-[11px] z-10 flex size-[30px] items-center justify-center border-3 border-[var(--border-color)] bg-[var(--accent-color)]"
              >
                <span className="size-2 rounded-full bg-white" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
