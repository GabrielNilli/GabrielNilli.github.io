// =================================
//  IMPORTS
// =================================
import { Outlet } from "react-router-dom";

import Sidebar from "./../ui/Sidebar";

// =================================
//  COMPONENT
// =================================
export default function Layout() {
  // =================================
  //  RENDER
  // =================================
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
