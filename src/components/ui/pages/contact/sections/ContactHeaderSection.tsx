// =================================
//  COMPONENT
// =================================
export default function ContactHeaderSection() {
  // =================================
  //  RENDER
  // =================================
  return (
    <header className="flex flex-col gap-2">
      <span className="text-sm font-bold uppercase tracking-wide text-[var(--accent-color)]">
        // Contact
      </span>
      <h1 className="text-4xl font-black text-[var(--text-color)]">
        HAVE A PROJECT IN MIND? LET&apos;S TALK.
      </h1>
      <p className="max-w-xl text-[var(--text-color)]/80">
        Whether it&apos;s a project, an idea, or just a question — feel free to
        reach out.
      </p>
    </header>
  );
}
