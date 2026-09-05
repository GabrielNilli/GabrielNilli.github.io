import { RefreshCw } from "lucide-react";

import type {
  ProjectCategory,
  ProjectScope,
  ProjectStatus,
} from "../data/projects";

type Filter = "ALL" | ProjectCategory;
type StatusFilter = "ALL" | ProjectStatus;
type ScopeFilter = "ALL" | ProjectScope;

interface WorksHeaderSectionProps {
  activeFilter: Filter;
  onFilterChange: (filter: Filter) => void;
  activeStatus: StatusFilter;
  onStatusCycle: () => void;
  activeScope: ScopeFilter;
  onScopeCycle: () => void;
}

const filters: Filter[] = ["ALL", "WEB", "APPS", "SYSTEMS"];

function cycleButtonClasses(value: string) {
  if (value === "ACTIVE" || value === "PROFESSIONAL") {
    return "bg-[var(--accent-color)] text-white shadow-[3px_3px_0px_var(--shadow-color)]";
  }
  if (value === "COMPLETED" || value === "PERSONAL") {
    return "bg-[var(--status-color)] text-[var(--text-color)] shadow-[3px_3px_0px_var(--shadow-color)]";
  }
  return "bg-[var(--surface-muted-color)] text-[var(--text-color)] hover:bg-[var(--surface-color)]";
}

export default function WorksHeaderSection({
  activeFilter,
  onFilterChange,
  activeStatus,
  onStatusCycle,
  activeScope,
  onScopeCycle,
}: WorksHeaderSectionProps) {
  return (
    <header className="mb-8 border-b-3 border-[var(--border-color)] pb-6">
      <p className="mb-5 font-sans text-xl font-black leading-tight text-[var(--text-color)] sm:text-2xl">
        A COLLECTION OF THINGS I&apos;VE BUILT.
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => onFilterChange(filter)}
              className={`cursor-pointer border-2 border-[var(--border-color)] px-3 py-1.5 font-sans text-xs font-black tracking-wider transition-all duration-150 ${activeFilter === filter ? "bg-[var(--accent-color)] text-white shadow-[3px_3px_0px_var(--shadow-color)]" : "bg-[var(--surface-muted-color)] text-[var(--text-color)] hover:bg-[var(--surface-color)]"}`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="ml-auto flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onStatusCycle}
            className={`inline-flex cursor-pointer items-center gap-2 border-2 border-[var(--border-color)] px-3 py-1.5 font-sans text-xs font-black tracking-wider transition-all duration-150 ${cycleButtonClasses(activeStatus)}`}
          >
            <RefreshCw size={12} strokeWidth={2.75} />
            {activeStatus === "ALL" ? "STATUS: ALL" : activeStatus}
          </button>
          <button
            type="button"
            onClick={onScopeCycle}
            className={`inline-flex cursor-pointer items-center gap-2 border-2 border-[var(--border-color)] px-3 py-1.5 font-sans text-xs font-black tracking-wider transition-all duration-150 ${cycleButtonClasses(activeScope)}`}
          >
            <RefreshCw size={12} strokeWidth={2.75} />
            {activeScope === "ALL" ? "SCOPE: ALL" : activeScope}
          </button>
        </div>
      </div>
    </header>
  );
}
