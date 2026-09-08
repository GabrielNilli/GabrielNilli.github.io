// =================================
//  IMPORTS
// =================================
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

// =================================
//  TYPES
// =================================
interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  icon?: LucideIcon;
  image?: string; // se presente, sostituisce l'icona come cover
  accent?: boolean;
  href?: string;
}

// =================================
//  COMPONENT
// =================================
export default function ProjectCard({
  title,
  description,
  tags = [],
  icon: Icon,
  image,
  accent = false,
  href,
}: ProjectCardProps) {
  const cardClassName = `
    box-border flex w-full flex-col gap-4 p-6 sm:flex-row
    border-[3px] border-[var(--border-color)] bg-[var(--surface-color)]
    shadow-[6px_6px_0px_var(--shadow-color)]
    transition-all duration-[120ms] ease-out
    ${
      href
        ? "cursor-pointer hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_var(--shadow-color)]"
        : "cursor-default opacity-100"
    }
  `;

  const content = (
    <>
      {/* Cover image OR icon */}
      <div
        className={`
          flex h-[100px] w-[100px] min-w-[100px] flex-shrink-0 items-center
          justify-center self-start overflow-hidden border-2 border-[var(--border-color)]
          shadow-[3px_3px_0px_var(--shadow-color)]
          sm:h-[150px] sm:w-[150px] sm:min-w-[150px]
          ${accent && !image ? "bg-[var(--accent-color)]" : "bg-[var(--surface-muted-color)]"}
        `}
      >
        {image ? (
          <img src={image} alt="" className="h-full w-full object-cover" />
        ) : (
          Icon && (
            <Icon
              size={28}
              strokeWidth={2.25}
              className={accent ? "text-white" : "text-[var(--text-color)]"}
            />
          )
        )}
      </div>

      {/* Content column: title, description, tags */}
      <div className="flex min-w-0 flex-1 flex-col items-start gap-2 text-start">
        <h3 className="m-0 font-sans text-xl font-extrabold leading-tight text-[var(--text-color)] sm:text-2xl">
          {title}
        </h3>

        <p className="m-0 font-sans text-base leading-relaxed text-[var(--text-color)]">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border-2 border-[var(--border-color)] bg-[var(--surface-muted-color)]
                           px-3 py-1 font-sans text-sm font-bold uppercase tracking-wide
                           text-[var(--text-color)] shadow-[2px_2px_0px_var(--shadow-color)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  // =================================
  //  RENDER
  // =================================
  if (href) {
    return (
      <Link to={href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}
