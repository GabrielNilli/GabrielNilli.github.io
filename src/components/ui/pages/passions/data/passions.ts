// =================================
//  TYPES
// =================================
export interface GamingPassion {
  number: string;
  title: string;
  description: string;
  favouriteTags: string[];
  influentialGames: string[];
  favouriteGenres: string[];
  currentlyPlaying?: string;
}

export interface TagPassion {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  tagStyle: "arrow" | "pill";
}

// =================================
//  DATA
// =================================
export const gamingPassion: GamingPassion = {
  number: "01",
  title: "Gaming",
  description:
    "I absolutely love games! Not only do I enjoy playing them, but I also have a real passion for understanding how systems, mechanics and interactions are designed.",
  favouriteTags: ["Games", "Mechanics", "Systems", "Strategy"],
  influentialGames: ["Warframe", "We Were Here (saga)", "Horripilant", "Satisfactory"],
  favouriteGenres: ["Action", "RPG", "Strategy", "Automation", "Board Games"],
  currentlyPlaying: "Whatever has Steam achievements",
};

export const tagPassions: TagPassion[] = [
  {
    id: "tinkering",
    number: "02",
    title: "Tinkering",
    description:
      "I love nothing more than figuring out how things work! If there's something that can be opened, modified, connected or automated, I'll definitely get to grips with it and see what's possible.",
    tags: ["Linux", "Home Server", "Hardware", "Arduino", "Self-hosting", "Networking"],
    tagStyle: "arrow",
  },
  {
    id: "hardware",
    number: "03",
    title: "Hardware & Systems",
    description: "I love understanding what happens behind the interface.",
    tags: ["Microcontrollers", "Self-hosting", "Linux", "Networking", "Homelab"],
    tagStyle: "pill",
  },
  {
    id: "making",
    number: "04",
    title: "Making",
    description: "Not everything needs a screen.",
    tags: ["Wood", "DIY Electronics", "Building", "Repairing"],
    tagStyle: "pill",
  },
  {
    id: "currently-exploring",
    number: "05",
    title: "Always Learning",
    description: "I like learning things simply because I don't know them yet.",
    tags: ["Programming", "Linux", "Networking", "New Technologies", "Random Deep Dives"],
    tagStyle: "pill",
  },
];