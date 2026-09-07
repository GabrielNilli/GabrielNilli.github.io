// =================================
//  IMPORTS
// =================================
import { Mail, ArrowUpRight } from "lucide-react";
import GithubIcon from "../../../icons/GithubIcon";
import LinkedinIcon from "../../../icons/LinkedinIcon";
import type { ContactMethod } from "../data/contact";

const icons = { mail: Mail, github: GithubIcon, linkedin: LinkedinIcon };

// =================================
//  TYPES
// =================================
interface ContactMethodCardProps {
  method: ContactMethod;
}

// =================================
//  COMPONENT
// =================================
export default function ContactMethodCard({ method }: ContactMethodCardProps) {
  const Icon = icons[method.icon];

  // =================================
  //  RENDER
  // =================================
  return (
    <a
      href={method.href}
      target={method.external ? "_blank" : undefined}
      rel={method.external ? "noreferrer" : undefined}
      className="group flex items-center justify-between gap-4 border-2
                 border-[var(--border-color)] bg-[var(--surface-color)]
                 px-5 py-4 shadow-[4px_4px_0_var(--shadow-color)]
                 transition-transform duration-150 hover:-translate-y-0.5
                 hover:shadow-[6px_6px_0_var(--shadow-color)]"
    >
      <span className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-[var(--accent-color)]" />
        <span className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-color)]/60">
            {method.label}
          </span>
          <span className="font-mono text-sm font-bold text-[var(--text-color)]">
            {method.value}
          </span>
        </span>
      </span>
      <ArrowUpRight
        className="h-5 w-5 text-[var(--text-color)] transition-transform
                   duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
