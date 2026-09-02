// =================================
//  IMPORTS
// =================================
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ExperiencePage from "./pages/ExperiencePage";
// import ProjectsPage from "./pages/ProjectsPage";
// import SkillPage from "./pages/SkillPage";
// import ContactsPage from "./pages/ContactsPage";
// import WIPPage from "./pages/WIPPage";
// import BasePortfolioPage from "./pages/BasePortfolioPage";

// =================================
//  COMPONENT
// =================================
export default function App() {
  // =================================
  //  RENDER
  // =================================
  return (
    <Routes>
      <Route path="/pages/HomePage" element={<HomePage />} />
      {/* <Route path="/pages/about" element={<AboutPage />} />
      <Route path="/pages/experience" element={<ExperiencePage />} />
      <Route path="/pages/projects" element={<ProjectsPage />} />
      <Route path="/pages/skills" element={<SkillPage />} />
      <Route path="/pages/contacts" element={<ContactsPage />} />
      <Route path="/pages/wip" element={<WIPPage />} />
      <Route path="/pages/base-portfolio" element={<BasePortfolioPage />} /> */}

      <Route path="*" element={<Navigate to="/pages/HomePage" replace />} />
    </Routes>
  );
}