// =================================
//  IMPORTS
// =================================
import type { TagPassion } from "../data/passions";
import PassionSectionHeader from "./PassionSectionHeader";
import TagBadge from "./TagBadge";
import ArrowListItem from "./ArrowListItem";

// =================================
//  TYPES
// =================================
interface TagListSectionProps {
  passion: TagPassion;
}

// =================================
//  COMPONENT
// =================================
export default function TagListSection({ passion }: TagListSectionProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <section
      id={passion.id}
      className="flex scroll-mt-6 flex-col gap-5 border-2 border-[var(--border-color)]
                 bg-[var(--surface-color)] p-6 shadow-[6px_6px_0_var(--shadow-color)]"
    >
      <PassionSectionHeader
        number={passion.number}
        title={passion.title}
        description={passion.description}
      />

      {passion.tagStyle === "arrow" ? (
        <ul className="flex flex-col">
          {passion.tags.map((tag) => (
            <ArrowListItem key={tag} label={tag} />
          ))}
        </ul>
      ) : (
        <div className="flex flex-wrap gap-3">
          {passion.tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>
      )}
    </section>
  );
}
