// =================================
//  TYPES
// =================================
interface WIPCardProps {
  title: string;
}

// =================================
//  COMPONENT
// =================================
export default function WIPCard({ title }: WIPCardProps) {
  return (
    <button
      className="bg-[var(--surface-muted-color)] border-2 border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)] px-3 py-1 text-lg font-bold tracking-wide uppercase text-[var(--text-color)] font-sans transition-all duration-[120ms] ease-out
        hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_var(--shadow-color)] cursor-pointer items-start text-start"
    >
      {title}
    </button>
  );
}
