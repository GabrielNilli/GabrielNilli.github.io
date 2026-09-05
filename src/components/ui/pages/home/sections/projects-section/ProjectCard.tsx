// =================================
//  IMPORTS
// =================================
import { LucideIcon } from "lucide-react";

// =================================
//  TYPES
// =================================
interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  icon?: LucideIcon;
  accent?: boolean;
}

// =================================
//  COMPONENT
// =================================
export default function ProjectCard({
  title,
  description,
  tags = [],
  icon: Icon,
  accent = false,
}: ProjectCardProps) {
  return (
    // Card
    <button
      className="
        w-full box-border p-6 flex gap-4 cursor-default
        bg-[var(--surface-color)] border-[3px] border-[var(--border-color)] shadow-[6px_6px_0px_var(--shadow-color)]
        transition-all duration-[120ms] ease-out
        hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_var(--shadow-color)]
        cursor-pointer
      "
    >
      {/* Icon */}
      <div
        className={`
          w-[150px] h-[150px] min-w-[150px] flex-shrink-0 self-start
          flex items-center justify-center
          border-2 border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)]
          ${accent ? "bg-[var(--accent-color)]" : "bg-[var(--surface-muted-color)]"}
        `}
      >
        {Icon && (
          <Icon
            size={28}
            strokeWidth={2.25}
            className={accent ? "text-white" : "text-[var(--text-color)]"}
          />
        )}
      </div>

      {/* Content column: title, description, tags */}
      <div className="flex flex-col items-start gap-2 flex-1 text-start">
        <h3 className="m-0 text-2xl font-extrabold leading-tight text-[var(--text-color)] font-sans">
          {title}
        </h3>

        <p className="m-0 text-base leading-relaxed text-[var(--text-color)] font-sans">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  bg-[var(--surface-muted-color)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)]
                  px-3 py-1 text-sm font-bold tracking-wide uppercase text-[var(--text-color)] font-sans
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
}
