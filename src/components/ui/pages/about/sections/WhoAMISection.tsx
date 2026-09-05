// =================================
//  IMPORTS
// =================================
import { Code2, Sparkles } from "lucide-react";

// =================================
//  COMPONENT
// =================================
export default function WhoAMISection() {
  // =================================
  //  RENDER
  // =================================
  return (
    <section className="h-full border-3 border-[var(--border-color)] bg-[var(--surface-color)] p-6 shadow-[6px_6px_0px_var(--shadow-color)]">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mb-2 font-sans text-xs font-black tracking-[0.2em] text-[var(--accent-color)]">
            // WHO AM I
          </p>
          <h1 className="m-0 font-sans text-4xl font-black leading-none text-[var(--text-color)] sm:text-5xl">
            HI, I&apos;M GABRIEL.
          </h1>
        </div>
        <span className="flex size-11 items-center justify-center border-2 border-[var(--border-color)] bg-[var(--accent-color)] text-white shadow-[3px_3px_0px_var(--shadow-color)]">
          <Code2 size={23} strokeWidth={2.5} />
        </span>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.5fr_0.9fr]">
        <p className="m-0 max-w-2xl font-sans text-lg leading-relaxed text-[var(--text-color)]">
          I&apos;m a developer who enjoys turning ideas into useful, working
          things. <br /> I like the point where a rough concept or an idea
          becomes an interface, an application, or a small system that people
          can actually use.
        </p>
        <div className="border-2 border-[var(--border-color)] bg-[var(--surface-muted-color)] p-4 shadow-[3px_3px_0px_var(--shadow-color)]">
          <Sparkles
            size={19}
            className="mb-2 text-[var(--accent-color)]"
            strokeWidth={2.5}
          />
          <p className="m-0 font-sans text-sm font-bold leading-relaxed text-[var(--text-color)]">
            Always learning, always building, always curious about what&apos;s
            next.
          </p>
        </div>
      </div>
    </section>
  );
}
