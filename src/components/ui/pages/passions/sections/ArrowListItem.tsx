// =================================
//  TYPES
// =================================
interface ArrowListItemProps {
  label: string;
}

// =================================
//  COMPONENT
// =================================
export default function ArrowListItem({ label }: ArrowListItemProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <li
      className="flex items-center gap-2 border-b-2 border-[var(--border-color)]/30
                 py-2 font-mono text-[var(--text-color)] last:border-none"
    >
      <span className="text-[var(--accent-color)]">{">"}</span>
      {label}
    </li>
  );
}
