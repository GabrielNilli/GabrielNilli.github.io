// =================================
//  TYPES
// =================================
interface StatusPanelProps {
  title: string;
  heading: string;
  items: string[];
  itemsLayout?: "inline" | "list";
  location?: string;
  responseTime?: string;
}

// =================================
//  COMPONENT
// =================================
export default function StatusPanel({
  title,
  heading,
  items,
  itemsLayout = "list",
  location,
  responseTime,
}: StatusPanelProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <section
      className="flex flex-col gap-4 border-2 border-[var(--border-color)]
                 bg-[var(--surface-color)] p-5 shadow-[4px_4px_0_var(--shadow-color)]"
    >
      <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-color)]/60">
        {title}
      </span>

      <div className="flex flex-col gap-2">
        <span className="flex items-center gap-2 font-bold uppercase text-[var(--text-color)]">
          <span className="h-2 w-2 rounded-full bg-[var(--status-color)]" />
          {heading}
        </span>
        {itemsLayout === "inline" ? (
          <span className="text-[var(--text-color)]/80">
            {items.join(" · ")}
          </span>
        ) : (
          <ul className="flex flex-col gap-1 text-[var(--text-color)]/80">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      {location && (
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-color)]/60">
            Location
          </span>
          <span className="text-[var(--text-color)]">{location}</span>
        </div>
      )}

      {responseTime && (
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-color)]/60">
            Response time
          </span>
          <span className="text-[var(--text-color)]">{responseTime}</span>
        </div>
      )}
    </section>
  );
}
