// =================================
//  IMPORTS
// =================================
import { Route, Routes } from "react-router-dom";

import ExperiencesPage from "./pages/ExperiencesPage";
import PassionsPage from "./pages/PassionsPage";
import ContactPage from "./pages/ContactPage";
import SkillsPage from "./pages/SkillsPage";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import HomePage from "./pages/HomePage";

import Layout from "./components/layout/Layout";

// =================================
//  COMPONENT
// =================================
export default function App() {
  // =================================
  //  RENDER
  // =================================
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/passions" element={<PassionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
      </Route>
    </Routes>
  );
}
