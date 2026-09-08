// =================================
//  IMPORTS
// =================================
import { Link } from "react-router-dom";

// =================================
//  TYPES
// =================================
interface WIPCardProps {
  title: string;
  href?: string;
}

// =================================
//  COMPONENT
// =================================
export default function WIPCard({ title, href }: WIPCardProps) {
  const cardClassName = `
    block items-start border-2 border-[var(--border-color)] bg-[var(--surface-muted-color)]
    px-3 py-1 text-start font-sans text-lg font-bold uppercase tracking-wide
    text-[var(--text-color)] shadow-[4px_4px_0px_var(--shadow-color)]
    transition-all duration-[120ms] ease-out
  `;

  // =================================
  //  RENDER
  // =================================
  if (href) {
    return (
      <Link to={href} className={cardClassName}>
        {title}
      </Link>
    );
  }

  return <div className={cardClassName}>{title}</div>;
}
