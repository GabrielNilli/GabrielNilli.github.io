// =================================
//  IMPORTS
// =================================
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./../ui/Sidebar";

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
    <div className="flex min-h-screen w-full">
      <Sidebar
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
      />
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
