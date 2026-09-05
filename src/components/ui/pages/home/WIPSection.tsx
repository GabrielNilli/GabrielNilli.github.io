// =================================
//  IMPORTS
// =================================
import WIPCard from "./sections/wip-section/WIPCard";

// =================================
//  TYPES
// =================================
interface WIP {
  id: number;
  name: string;
}

// =================================
//  CONSTS
// =================================
const currentWIP: WIP[] = [
  {
    id: 1,
    name: "WoodBits",
  },
  {
    id: 2,
    name: "ScanDex",
  },
  {
    id: 3,
    name: "Nameless note App",
  },
  {
    id: 4,
    name: "More Ideas Incoming...",
  },
];

// =================================
//  COMPONENT
// =================================
export default function WIPSection() {
  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="h-[calc(100%-3px)] border-3 p-6 border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)]">
        <h2 className="mb-10 font-sans text-4xl font-extrabold leading-tight text-[var(--text-color)]">
          CURRENTLY WORKING ON...
        </h2>

        <div className="grid grid-cols-4 gap-4">
          {currentWIP.map((wip) => (
            <WIPCard key={wip.id} title={wip.name} />
          ))}
        </div>
      </div>
    </>
  );
}
