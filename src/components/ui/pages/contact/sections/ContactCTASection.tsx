// =================================
//  IMPORTS
// =================================
import { ArrowRight } from "lucide-react";

// =================================
//  COMPONENT
// =================================
export default function ContactCTASection() {
  // =================================
  //  RENDER
  // =================================
  return (
    <section
      className="flex flex-col items-center gap-4 border-2 border-[var(--border-color)]
                 bg-[var(--surface-muted-color)] p-8 text-center
                 shadow-[6px_6px_0_var(--shadow-color)]"
    >
      <p className="text-xl font-black uppercase text-[var(--text-color)]">
        Got this far? You might as well say hello.
      </p>
      <a
        href="mailto:gabbonilli@gmail.com"
        className="flex items-center gap-2 border-2 border-[var(--border-color)]
                   bg-[var(--accent-color)] px-6 py-3 font-bold uppercase
                   text-[var(--button-text-color)] shadow-[4px_4px_0_var(--shadow-color)]
                   transition-transform duration-150 hover:-translate-y-0.5"
      >
        Contact Gabriel
        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      </a>
    </section>
  );
}
