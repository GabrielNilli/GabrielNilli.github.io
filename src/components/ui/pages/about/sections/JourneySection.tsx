// =================================
//  INTERFACE
// =================================
interface JourneyItem {
  year: string;
  title: string;
  description: string;
  current?: boolean;
}

// =================================
//  CONSTS
// =================================
const journey: JourneyItem[] = [
  {
    year: "2020",
    title: "FIRST INTERESTS",
    description:
      "I started exploring programming and the logic behind it, and then I became totally and utterly passionate about this world.",
  },
  {
    year: "2022",
    title: "A TIME OF CHANGE",
    description:
      "I started out as a self-taught artist, and then I took the leap and quit my job to pursue my true passion.",
  },
  {
    year: "2024",
    title: "THE BIG STEP",
    description:
      "I am so excited to be embarking on my first experience in a company!",
  },
  {
    year: "NOW",
    title: "KEEPING THE MOMENTUM...",
    description:
      "Learning, making and looking for the next interesting problem to solve!",
    current: true,
  },
];

// =================================
//  COMPONENT
// =================================
export default function JourneySection() {
  // =================================
  //  RENDER
  // =================================
  return (
    <section className="border-3 border-[var(--border-color)] bg-[var(--surface-color)] p-6 shadow-[6px_6px_0px_var(--shadow-color)]">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-2 font-sans text-xs font-black tracking-[0.2em] text-[var(--accent-color)]">
            // TIMELINE
          </p>
          <h2 className="m-0 font-sans text-4xl font-black leading-none text-[var(--text-color)]">
            MY JOURNEY SO FAR.
          </h2>
        </div>
        <p className="m-0 border-2 border-[var(--border-color)] bg-[var(--surface-muted-color)] px-3 py-1 font-sans text-xs font-black tracking-wider text-[var(--text-color)]">
          STILL IN PROGRESS
        </p>
      </div>
      <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-4">
        {journey.map(({ year, title, description, current }) => (
          <li
            key={year}
            className="relative border-2 border-[var(--border-color)] bg-[var(--surface-muted-color)] p-5 shadow-[3px_3px_0px_var(--shadow-color)]"
          >
            <span
              className={`mb-8 flex size-10 items-center justify-center border-2 border-[var(--border-color)] font-sans text-xs font-black ${current ? "bg-[var(--accent-color)] text-white" : "bg-[var(--surface-color)] text-[var(--text-color)]"}`}
            >
              {year}
            </span>
            <div
              className={`absolute left-5 top-[58px] h-3 w-3 border-2 border-[var(--border-color)] ${current ? "bg-[var(--accent-color)]" : "bg-[var(--surface-color)]"}`}
            />
            <h3 className="m-0 mb-2 font-sans text-lg font-black leading-tight text-[var(--text-color)]">
              {title}
            </h3>
            <p className="m-0 font-sans text-sm leading-relaxed text-[var(--text-color)]">
              {description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
