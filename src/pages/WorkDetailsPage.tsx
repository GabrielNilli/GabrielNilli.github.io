import { Navigate, useParams } from "react-router-dom";

import WorkDetailsSection from "../components/ui/pages/works/sections/WorkDetailsSection";
import { projects } from "../components/ui/pages/works/data/projects";

export default function WorkDetailsPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) return <Navigate to="/works" replace />;

  return <WorkDetailsSection project={project} />;
}
