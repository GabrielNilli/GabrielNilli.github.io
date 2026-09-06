// =================================
//  TYPES
// =================================
interface TagBadgeProps {
  label: string;
}

// =================================
//  COMPONENT
// =================================
export default function TagBadge({ label }: TagBadgeProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <span
      className="border-2 border-[var(--border-color)] bg-[var(--surface-color)]
                 px-3 py-1.5 text-sm font-bold uppercase text-[var(--text-color)]
                 shadow-[3px_3px_0_var(--shadow-color)]"
    >
      {label}
    </span>
  );
}
