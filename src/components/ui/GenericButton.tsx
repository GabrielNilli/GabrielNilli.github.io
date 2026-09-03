// =================================
//  IMPORTS
// =================================
import type { ButtonHTMLAttributes, ReactNode } from "react";

// =================================
//  TYPE
// =================================
type GenericButtonVariant = "primary" | "secondary" | "ghost" | "inverted";

// =================================
//  INTERFACE
// =================================
interface GenericButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: GenericButtonVariant;
  selected?: boolean;
}

// =================================
//  VARIANTS
// =================================
const variantStyles: Record<
  GenericButtonVariant,
  { base: string; selected: string }
> = {
  primary: {
    base: `
      bg-[#D32F2F] border-[#121212] text-white
      shadow-[3px_3px_0px_#121212]
      hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#121212]
      active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212]
    `,
    selected: `
      bg-[#F4EFE6] border-[#121212] text-black
      translate-x-0.5 translate-y-0.5 shadow-[1px_1px_0px_#121212]
    `,
  },
  secondary: {
    base: `
      bg-[#F4EFE6] border-[#121212] text-[#121212]
      shadow-[3px_3px_0px_#121212]
      hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#121212]
      active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212]
    `,
    selected: `
      bg-[#D32F2F] border-[#121212] text-white
      translate-x-0.5 translate-y-0.5 shadow-[1px_1px_0px_#121212]
    `,
  },
  ghost: {
    base: `
      bg-transparent border-transparent text-[#121212]
      shadow-none
      hover:text-[#D32F2F]
      active:text-[#D32F2F]
    `,
    selected: `
      bg-transparent border-transparent text-[#D32F2F]
      shadow-none underline underline-offset-4
    `,
  },
  inverted: {
    base: `
      bg-[#121212] border-[#121212] text-[#F4EFE6]
      shadow-[3px_3px_0px_#D32F2F]
      hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#D32F2F]
      active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#D32F2F]
    `,
    selected: `
      bg-[#121212] border-[#D32F2F] text-[#D32F2F]
      translate-x-0.5 translate-y-0.5 shadow-[1px_1px_0px_#D32F2F]
    `,
  },
};

// =================================
//  COMPONENT
// =================================
export default function GenericButton({
  children,
  variant = "primary",
  selected = false,
  className = "",
  type = "button",
  ...props
}: GenericButtonProps) {
  const styles = variantStyles[variant];

  const baseClasses = `
    inline-flex h-11 items-center justify-center rounded-none border-2
    px-5 py-2 font-sans font-black uppercase tracking-wider text-sm
    cursor-pointer select-none
    transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50
  `;

  const combinedClassName = [
    baseClasses,
    selected ? styles.selected : styles.base,
    className,
  ]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  // =================================
  //  RENDER
  // =================================
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
}
