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
      <div className="h-auto border-3 p-4 border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)] md:h-[calc(100%-3px)] md:p-6">
        <h2 className="mb-6 font-sans text-2xl font-extrabold leading-tight text-[var(--text-color)] sm:text-3xl md:mb-10 md:text-4xl">
          CURRENTLY WORKING ON...
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {currentWIP.map((wip) => (
            <WIPCard key={wip.id} title={wip.name} />
          ))}
        </div>
      </div>
    </>
  );
}
