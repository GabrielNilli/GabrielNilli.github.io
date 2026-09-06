// =================================
//  IMPORTS
// =================================
import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";
import { Link } from "react-router";

// =================================
//  TYPE
// =================================
type GenericButtonVariant = "primary" | "secondary" | "ghost" | "inverted";

// =================================
//  VARIANTS
// =================================
const variantStyles: Record<
  GenericButtonVariant,
  { base: string; selected: string }
> = {
  primary: {
    base: `
      bg-[var(--accent-color)] border-[var(--border-color)] text-white
      shadow-[3px_3px_0px_var(--shadow-color)]
      hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--shadow-color)]
      active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_var(--shadow-color)]
    `,
    selected: `
      bg-[var(--text-color)] border-[var(--border-color)] text-[var(--on-ink-color)]
      translate-x-0.5 translate-y-0.5 shadow-[1px_1px_0px_var(--shadow-color)]
    `,
  },
  secondary: {
    base: `
      bg-[var(--surface-color)] border-[var(--border-color)] text-[var(--text-color)]
      shadow-[3px_3px_0px_var(--shadow-color)]
      hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--shadow-color)]
      active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_var(--shadow-color)]
    `,
    selected: `
      bg-[var(--accent-color)] border-[var(--border-color)] text-white
      translate-x-0.5 translate-y-0.5 shadow-[1px_1px_0px_var(--shadow-color)]
    `,
  },
  ghost: {
    base: `
      bg-transparent border-transparent text-[var(--text-color)]
      shadow-none
      hover:text-[var(--accent-color)]
      active:text-[var(--accent-color)]
    `,
    selected: `
      bg-transparent border-transparent text-[var(--accent-color)]
      shadow-none underline underline-offset-4
    `,
  },
  inverted: {
    base: `
      bg-[var(--text-color)] border-[var(--text-color)] text-[var(--on-ink-color)]
      shadow-[3px_3px_0px_var(--accent-color)]
      hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--accent-color)]
      active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_var(--accent-color)]
    `,
    selected: `
      bg-[var(--text-color)] border-[var(--accent-color)] text-[var(--accent-color)]
      translate-x-0.5 translate-y-0.5 shadow-[1px_1px_0px_var(--accent-color)]
    `,
  },
};

// =================================
//  HELPERS
// =================================
function isProtocolLink(href: string) {
  return /^(mailto:|tel:|https?:\/\/)/.test(href);
}

function buildClassName(
  variant: GenericButtonVariant,
  selected: boolean,
  className: string,
) {
  const styles = variantStyles[variant];

  const baseClasses = `
    inline-flex h-11 items-center justify-center rounded-none border-2
    px-5 py-2 font-sans font-black uppercase tracking-wider text-sm
    cursor-pointer select-none
    transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50
  `;

  return [baseClasses, selected ? styles.selected : styles.base, className]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

// =================================
//  INTERFACE
// =================================
interface GenericButtonBaseProps {
  children: ReactNode;
  variant?: GenericButtonVariant;
  selected?: boolean;
  className?: string;
  href?: string;
}

type GenericButtonProps = GenericButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href">;

// =================================
//  COMPONENT
// =================================
export default function GenericButton({
  children,
  variant = "primary",
  selected = false,
  className = "",
  href,
  type = "button",
  ...props
}: GenericButtonProps) {
  const combinedClassName = buildClassName(variant, selected, className);

  // Mailto / tel / external URL -> plain native anchor
  if (href && isProtocolLink(href)) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        target={isHttp ? "_blank" : undefined}
        rel={isHttp ? "noreferrer" : undefined}
        aria-pressed={selected}
        className={combinedClassName}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  // Internal route -> react-router Link
  if (href) {
    return (
      <Link
        to={href}
        aria-current={selected ? "page" : undefined}
        className={combinedClassName}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  // No href -> plain button, same as prima
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={combinedClassName}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
