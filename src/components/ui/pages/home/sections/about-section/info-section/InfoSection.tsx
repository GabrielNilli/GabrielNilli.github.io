// =================================
//  IMPORTS
// =================================
import { useEffect, useState } from "react";

// =================================
//  COMPONENT
// =================================
export default function InfoSection() {
  // =================================
  //  CONSTS
  // =================================
  // -------------- Carousel --------------
  const phrases = [
    "a Fullstack developer",
    "always building",
    "always learning",
    "turning ideas into reality",
    "not afraid to break things",
    "an RPG fantasy enthusiast",
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // =================================
  //  EFFECTS
  // =================================
  // -------------- Carousel --------------
  useEffect(() => {
    const phrase = phrases[currentPhrase];
    if (!isDeleting && text === phrase) {
      const pause = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);

      return () => clearTimeout(pause);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setCurrentPhrase((current) => (current + 1) % phrases.length);

      return;
    }

    const timeout = setTimeout(
      () => {
        setText(
          isDeleting
            ? phrase.slice(0, text.length - 1)
            : phrase.slice(0, text.length + 1),
        );
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentPhrase]);

  // =================================
  //  RENDER
  // =================================
  return (
    <div className="flex flex-col items-center text-center gap-5 py-8">
      <div className="font-bold text-6xl">
        <span>
          GABRIEL
          <span className="text-[var(--accent-color)]"> NILLI</span>
        </span>
      </div>

      <div className="font-bold text-4xl">
        <span>I'M </span>
        <span className="text-[var(--accent-color)]">
          {text}
          <span className="animate-pulse">|</span>
        </span>
      </div>

      <div className="font-bold text-3xl">
        <span>
          I BUILD <span className="text-[var(--accent-color)]">INTERFACES</span>,
          <span className="text-[var(--accent-color)]"> APPLICATIONS</span> AND <br />
          <span className="text-[var(--accent-color)]">TINKER WITH SYSTEMS</span> THAT
          INSPIRE ME.
        </span>
      </div>
    </div>
  );
}
