import { useState } from "react";

import WorksHeaderSection from "../components/ui/pages/works/sections/WorksHeaderSection";
import WorksListSection from "../components/ui/pages/works/sections/WorksListSection";
import {
  projects,
  type ProjectCategory,
  type ProjectScope,
  type ProjectStatus,
} from "../components/ui/pages/works/data/projects";

type Filter = "ALL" | ProjectCategory;
type StatusFilter = "ALL" | ProjectStatus;
type ScopeFilter = "ALL" | ProjectScope;

const statusCycle: StatusFilter[] = ["ALL", "ACTIVE", "COMPLETED"];
const scopeCycle: ScopeFilter[] = ["ALL", "PROFESSIONAL", "PERSONAL"];

function next<T>(cycle: T[], current: T): T {
  return cycle[(cycle.indexOf(current) + 1) % cycle.length];
}

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("ALL");
  const [activeStatus, setActiveStatus] = useState<StatusFilter>("ALL");
  const [activeScope, setActiveScope] = useState<ScopeFilter>("ALL");

  const filteredProjects = projects.filter(
    (project) =>
      (activeFilter === "ALL" || project.category === activeFilter) &&
      (activeStatus === "ALL" || project.status === activeStatus) &&
      (activeScope === "ALL" || project.scope === activeScope),
  );

  return (
    <div className="mx-auto w-full max-w-5xl border-3 border-[var(--border-color)] bg-[var(--surface-color)] p-6 shadow-[6px_6px_0px_var(--shadow-color)] sm:p-8">
      <WorksHeaderSection
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        activeStatus={activeStatus}
        onStatusCycle={() =>
          setActiveStatus((current) => next(statusCycle, current))
        }
        activeScope={activeScope}
        onScopeCycle={() =>
          setActiveScope((current) => next(scopeCycle, current))
        }
      />
      <WorksListSection projects={filteredProjects} />
    </div>
  );
}
