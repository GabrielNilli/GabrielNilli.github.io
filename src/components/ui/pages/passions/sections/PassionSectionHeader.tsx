// =================================
//  TYPES
// =================================
interface PassionSectionHeaderProps {
  number: string;
  title: string;
  description: string;
}

// =================================
//  COMPONENT
// =================================
export default function PassionSectionHeader({
  number,
  title,
  description,
}: PassionSectionHeaderProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <div className="flex flex-col gap-2">
      <h2 className="flex items-baseline gap-3 text-2xl font-black uppercase text-[var(--text-color)]">
        <span className="text-[var(--accent-color)]">{number}</span>
        <span>—</span>
        <span>{title}</span>
      </h2>
      <p className="max-w-2xl text-[var(--text-color)]/80">{description}</p>
    </div>
  );
}
