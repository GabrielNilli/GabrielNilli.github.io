// =================================
//  IMPORTS
// =================================
import { NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

import { navLinks } from "./navLinks";

import { availabilityStatus } from "./pages/contact/data/contact";

// =================================
//  COMPONENT
// =================================
interface MobileNavProps {
  theme: "light" | "dark";
  onThemeToggle: () => void;
}

export default function MobileNav({ theme, onThemeToggle }: MobileNavProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <header className="sticky top-0 z-50 flex flex-col gap-3 border-b-4 border-[var(--border-color)] bg-[var(--bg-color)] p-4 md:hidden">
      {/* Brand row */}
      <div className="flex items-center justify-between gap-3">
        <p className="m-0 font-sans text-xl font-black uppercase leading-none tracking-tight text-[var(--text-color)]">
          Gabriel <span className="text-[var(--accent-color)]">Nilli</span>
        </p>
        <button
          type="button"
          onClick={onThemeToggle}
          aria-label="Change theme"
          className="flex size-10 shrink-0 cursor-pointer items-center justify-center border-2 border-[var(--border-color)] bg-[var(--surface-color)] text-[var(--text-color)] shadow-[3px_3px_0px_var(--shadow-color)] transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_var(--shadow-color)]"
        >
          {theme === "light" ? (
            <Moon size={18} aria-hidden="true" />
          ) : (
            <Sun size={18} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Sub row */}
      <div className="flex items-center justify-between gap-3">
        <span className="font-sans text-xs font-black uppercase tracking-[0.2em] text-[var(--text-color)]">
          Menu
        </span>
        <span className="border-2 border-[var(--border-color)] bg-[var(--accent-color)] px-2.5 py-1 font-sans text-[11px] font-black uppercase tracking-wider text-white shadow-[2px_2px_0px_var(--shadow-color)]">
          {availabilityStatus.heading} {availabilityStatus.items[0]}
        </span>
      </div>

      {/* Tab row */}
      <nav className="mobile-tabs -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className="block shrink-0 no-underline"
          >
            {({ isActive }) => (
              <span
                className={`inline-flex h-9 cursor-pointer select-none items-center justify-center whitespace-nowrap border-2 border-[var(--border-color)] px-3 font-sans text-xs font-black uppercase tracking-wider transition-all duration-150 ${
                  isActive
                    ? "translate-x-0.5 translate-y-0.5 bg-[var(--text-color)] text-[var(--on-ink-color)] shadow-[1px_1px_0px_var(--shadow-color)]"
                    : "bg-[var(--accent-color)] text-white shadow-[3px_3px_0px_var(--shadow-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_var(--shadow-color)]"
                }`}
              >
                {link.label}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
