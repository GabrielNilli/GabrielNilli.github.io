// =================================
//  IMPORTS
// =================================
import { NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

import GenericButton from "./GenericButton";

import BasePortfolio from "./../../files/base-portfolio/base-portfolio.pdf";

// =================================
//  CONSTS
// =================================
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experiences", label: "Experiences" },
  { to: "/works", label: "Works" },
  { to: "/skills", label: "Skills" },
  { to: "/passions", label: "Passions" },
  { to: "/contact", label: "Contact" },
];

// =================================
//  COMPONENT
// =================================
interface SidebarProps {
  theme: "light" | "dark";
  onThemeToggle: () => void;
}

export default function Sidebar({ theme, onThemeToggle }: SidebarProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <aside className="fixed inset-y-0 left-0 z-50 flex h-screen w-64 flex-col justify-between border-r-4 border-[var(--border-color)] bg-[var(--bg-color)] p-4">
      {/* Nav buttons */}
      <nav className="flex flex-col gap-6">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className="block w-full no-underline"
          >
            {({ isActive }) => (
              <GenericButton
                variant="primary"
                selected={isActive}
                className="w-full justify-start"
              >
                {link.label}
              </GenericButton>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Sidebar bottom button */}
      <div className="mt-auto pt-6 flex flex-col gap-4">
        <GenericButton
          variant="secondary"
          className="w-full"
          onClick={onThemeToggle}
        >
          {theme === "light" ? (
            <Moon size={18} aria-hidden="true" />
          ) : (
            <Sun size={18} aria-hidden="true" />
          )}
          <span className="ml-2">Change Theme</span>
        </GenericButton>
        <a
          href={BasePortfolio}
          download="Gabriel Nilli Portfolio"
          target="_blank"
        >
          <GenericButton
            variant="primary"
            className="w-full h-auto py-3 px-3 text-xs leading-tight whitespace-normal text-center group relative overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center gap-1 font-black">
              <span>CLICK HERE FOR THE</span>

              {/* BORING brutalist effect */}
              <span className="relative inline-block my-0.5 px-2 py-0.5 bg-[var(--text-color)] text-[var(--accent-color)] -rotate-2 select-none">
                BORING
                {/* Censoring bar */}
                <span className="absolute inset-x-0 top-1/2 h-[3px] bg-[var(--button-text-color)] -translate-y-1/2 rotate-6" />
              </span>

              <span>BASE PORTFOLIO</span>
            </div>
          </GenericButton>
        </a>
      </div>
    </aside>
  );
}
