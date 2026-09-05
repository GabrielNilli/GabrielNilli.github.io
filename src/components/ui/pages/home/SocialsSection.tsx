// =================================
//  IMPORTS
// =================================
import SocialCard from "./sections/socials-section/SocialCard";

// =================================
//  TYPES
// =================================
interface Social {
  id: number;
  name: string;
  icon: "github" | "linkedin";
  link: string;
}

// =================================
//  CONSTS
// =================================
const currentSocials: Social[] = [
  {
    id: 1,
    name: "GitHub",
    icon: "github",
    link: "https://github.com/GabrielNilli",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gabriel-nilli-b13b43362/",
  },
];

// =================================
//  COMPONENT
// =================================
export default function SocialSection() {
  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="h-[calc(100%-3px)] border-3 p-6 border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)]">
        <h2 className="mb-4 font-sans text-4xl font-extrabold leading-tight text-[var(--text-color)]">
          FIND ME ON...
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {currentSocials.map((social) => (
            <SocialCard
              key={social.id}
              title={social.name}
              icon={social.icon}
              link={social.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
