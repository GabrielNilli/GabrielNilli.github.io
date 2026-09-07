// =================================
//  IMPORTS
// =================================
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./../ui/Sidebar";
import MobileNav from "./../ui/MobileNav";

// =================================
//  COMPONENT
// =================================
export default function Layout() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // =================================
  //  RENDER
  // =================================
  return (
    <div className="min-h-screen w-full">
      <Sidebar
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
      />
      <MobileNav
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
      />
      <main className="min-h-screen p-4 md:ml-64 md:p-6">
        <Outlet />
      </main>
    </div>
  );
}
