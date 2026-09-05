// =================================
//  IMPORTS
// =================================
import { Search, Lightbulb, Hammer, Wrench } from "lucide-react";

// =================================
//  CONSTS
// =================================
const steps = [
  {
    number: "01",
    title: "UNDERSTAND",
    text: "Start with the problem, the context and the people using it.",
    icon: Search,
  },
  {
    number: "02",
    title: "EXPLORE",
    text: "Look for the clearest, most practical way forward.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "BUILD",
    text: "Turn the idea into a real, testable experience.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "REFINE",
    text: "Break things, learn from them, then make them better.",
    icon: Wrench,
  },
];

// =================================
//  COMPONENT
// =================================
export default function HowIWorkSection() {
  // =================================
  //  RENDER
  // =================================
  return (
    <section className="h-full border-3 border-[var(--border-color)] bg-[var(--surface-color)] p-6 shadow-[6px_6px_0px_var(--shadow-color)]">
      <p className="mb-2 font-sans text-xs font-black tracking-[0.2em] text-[var(--accent-color)]">
        // PROCESS
      </p>
      <h2 className="mb-6 font-sans text-4xl font-black leading-none text-[var(--text-color)]">
        HOW I WORK.
      </h2>
      <ol className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
        {steps.map(({ number, title, text, icon: Icon }) => (
          <li
            key={number}
            className="border-2 border-[var(--border-color)] bg-[var(--surface-muted-color)] p-4 shadow-[3px_3px_0px_var(--shadow-color)]"
          >
            <div className="mb-4 flex items-start justify-between">
              <span className="font-sans text-xl font-black text-[var(--accent-color)]">
                {number}
              </span>
              <Icon
                size={20}
                strokeWidth={2.5}
                className="text-[var(--text-color)]"
              />
            </div>
            <h3 className="m-0 mb-1 font-sans text-base font-black tracking-wide text-[var(--text-color)]">
              {title}
            </h3>
            <p className="m-0 font-sans text-sm leading-relaxed text-[var(--text-color)]">
              {text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
