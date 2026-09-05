// =================================
//  IMPORTS
// =================================
import { Brain, Construction, CircleHelp } from "lucide-react";

// =================================
//  CONSTS
// =================================
const traits = [
  {
    title: "CURIOUS",
    text: "I enjoy understanding how things work, from the initial concept to the final detail.",
    icon: Brain,
  },
  {
    title: "BUILDER",
    text: "It's so exciting when ideas leave the notebook and start to exist!",
    icon: Construction,
  },
  {
    title: "PROBLEM SOLVER",
    text: "If something doesn't work, I'm all about understanding why and making improvements.",
    icon: CircleHelp,
  },
];

// =================================
//  COMPONENT
// =================================
export default function PersonalitySection() {
  // =================================
  //  RENDER
  // =================================
  return (
    <section className="h-full border-3 border-[var(--border-color)] bg-[var(--surface-color)] p-6 shadow-[6px_6px_0px_var(--shadow-color)]">
      <p className="mb-2 font-sans text-xs font-black tracking-[0.2em] text-[var(--accent-color)]">
        // MINDSET
      </p>
      <h2 className="mb-6 font-sans text-4xl font-black leading-none text-[var(--text-color)]">
        A LITTLE ABOUT ME.
      </h2>
      <div className="grid gap-3">
        {traits.map(({ title, text, icon: Icon }, index) => (
          <article
            key={title}
            className="flex gap-4 border-2 border-[var(--border-color)] bg-[var(--surface-muted-color)] p-4 shadow-[3px_3px_0px_var(--shadow-color)]"
          >
            <span
              className={`flex size-10 shrink-0 items-center justify-center border-2 border-[var(--border-color)] ${index === 1 ? "bg-[var(--accent-color)] text-white" : "bg-[var(--surface-color)] text-[var(--text-color)]"}`}
            >
              <Icon size={20} strokeWidth={2.5} />
            </span>
            <div>
              <h3 className="m-0 mb-1 font-sans text-base font-black tracking-wide text-[var(--text-color)]">
                {title}
              </h3>
              <p className="m-0 font-sans text-sm leading-relaxed text-[var(--text-color)]">
                {text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
