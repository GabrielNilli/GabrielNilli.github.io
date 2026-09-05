export type ProjectCategory = "WEB" | "APPS" | "SYSTEMS";
export type ProjectStatus = "ACTIVE" | "COMPLETED";
export type ProjectScope = "PROFESSIONAL" | "PERSONAL";

export interface Project {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  scope: ProjectScope;
  description: string;
  overview: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "hubspot-ui-extension-enterprise",
    number: "01",
    title: "HUBSPOT UI EXTENSION — ENTERPRISE",
    category: "WEB",
    status: "COMPLETED",
    scope: "PROFESSIONAL",
    description: "A custom HubSpot extension built for an enterprise client.",
    overview: "Part of a team that developed one of the first HubSpot UI Extensions worldwide. My work focused on designing, developing and customising the React interface, then integrating it into the HubSpot ecosystem.",
    technologies: ["HUBSPOT UI EXTENSIONS", "REACT", "LARAVEL", "PHP"],
    highlights: ["Custom React interface for the HubSpot ecosystem.", "Backend built with Laravel and PHP.", "Delivered as part of a cross-functional team."],
  },
  {
    id: "hubspot-ui-extension-food-beverage",
    number: "02",
    title: "HUBSPOT CONFIGURATOR",
    category: "WEB",
    status: "COMPLETED",
    scope: "PROFESSIONAL",
    description: "Holiday gift-basket configurator and order-receipt workflow.",
    overview: "A custom HubSpot UI Extension with an iframe-based configurator for managing holiday gift basket orders. The project included a tailored configurator website and automated PDF receipt generation.",
    technologies: ["HUBSPOT UI EXTENSIONS", "REACT", "LARAVEL", "PHP", "SHEAFUI", "PDF"],
    highlights: ["Dynamic interface generated with SheafUI.", "Automated PDF generation and download.", "Built around the client requirements and incoming data."],
  },
  {
    id: "hubspot-teamsystem-integration",
    number: "03",
    title: "HUBSPOT × TEAMSYSTEM",
    category: "SYSTEMS",
    status: "COMPLETED",
    scope: "PROFESSIONAL",
    description: "Custom workflow actions connecting HubSpot and TeamSystem.",
    overview: "Developed multiple integrations between HubSpot and TeamSystem using Custom Workflow Actions, designed to automate internal processes and streamline data management.",
    technologies: ["HUBSPOT", "CUSTOM WORKFLOW ACTIONS", "API", "AUTOMATION", "LARAVEL", "PHP"],
    highlights: ["Reduced repetitive manual operations.", "Improved communication with internal systems.", "Maintained custom workflow automation."],
  },
  {
    id: "automotive-warranty-integration",
    number: "04",
    title: "AUTOMOTIVE WARRANTY PORTAL",
    category: "SYSTEMS",
    status: "COMPLETED",
    scope: "PROFESSIONAL",
    description: "HubSpot integration for chassis data and warranty creation.",
    overview: "A custom integration that checks motorcycle chassis numbers and automatically creates warranties for the associated vehicle and customer. It also includes a portal for CSV imports.",
    technologies: ["HUBSPOT", "API", "FILAMENT", "CSV"],
    highlights: ["Automatic chassis-number validation.", "Warranty creation workflow.", "Dedicated CSV import portal for database updates."],
  },
  {
    id: "internal-erp",
    number: "05",
    title: "INTERNAL ERP",
    category: "WEB",
    status: "COMPLETED",
    scope: "PROFESSIONAL",
    description: "A shared ERP for project, team, client and revenue management.",
    overview: "A complex internal ERP built with a team using Filament. The platform centralises projects, tasks, individual work items, teams, clients and revenue, with Solidtime API integration for time tracking.",
    technologies: ["LARAVEL", "FILAMENT", "PHP", "SOLIDTIME API", "REST API"],
    highlights: ["Centralised project and business management.", "Solidtime time-tracking synchronisation.", "Customised Filament interface and components."],
  },
  {
    id: "trophy-lab",
    number: "06",
    title: "TROPHY LAB",
    category: "APPS",
    status: "COMPLETED",
    scope: "PERSONAL",
    description: "A PWA for tracking Steam achievements and game completion.",
    overview: "A Progressive Web App that connects to a Steam library through a Steam ID. Users can browse games, inspect achievements and completion status, sort their data, and open a dedicated YouTube guide for each achievement.",
    technologies: ["REACT", "TYPESCRIPT", "PWA", "STEAM API", "YOUTUBE"],
    highlights: ["Steam library and achievement tracking.", "Sorting options for games and achievements.", "Mobile-friendly opening of YouTube guides."],
    liveUrl: "https://steamtrophiesapp.onrender.com",
  },
  {
    id: "knucklebones",
    number: "07",
    title: "KNUCKLEBONES",
    category: "APPS",
    status: "COMPLETED",
    scope: "PERSONAL",
    description: "A mobile-first web adaptation of Cult of the Lamb's dice game.",
    overview: "A local multiplayer Progressive Web App inspired by Knucklebones. Players place dice, build combinations and score points while trying to outplay their opponent.",
    technologies: ["REACT", "TYPESCRIPT", "PWA", "RESPONSIVE DESIGN"],
    highlights: ["Playable local multiplayer game loop.", "Dedicated rules page.", "Designed primarily for mobile and fully responsive on desktop."],
    liveUrl: "https://knucklebones-rasx.onrender.com",
  },
  {
    id: "scandex",
    number: "08",
    title: "SCANDEX",
    category: "APPS",
    status: "ACTIVE",
    scope: "PERSONAL",
    description: "A React Native app for scanning and cataloguing Pokémon cards.",
    overview: "A personal mobile tool created for a Pokémon card collector. It scans a card, identifies it with a dedicated API and stores the relevant information to build a practical digital collection.",
    technologies: ["REACT NATIVE", "TYPESCRIPT", "REST API", "SQL"],
    highlights: ["Card scanning and API-based identification.", "Personal collection data storage.", "Built from a real-world collecting need."],
  },
  {
    id: "woodbits",
    number: "09",
    title: "WOODBITS",
    category: "APPS",
    status: "ACTIVE",
    scope: "PERSONAL",
    description: "A mobile collection of traditional wooden games.",
    overview: "A React Native collection designed to bring games such as Mancala and Shut the Box into a single digital environment while preserving their identity and simple mechanics.",
    technologies: ["REACT NATIVE", "TYPESCRIPT"],
    highlights: ["Multiple traditional games in one app.", "Focus on intuitive mobile interaction.", "Exploration of physical mechanics in a digital format."],
  },
  {
    id: "home-server",
    number: "10",
    title: "HOME SERVER",
    category: "SYSTEMS",
    status: "ACTIVE",
    scope: "PERSONAL",
    description: "A Banana Pi home server for self-hosting personal projects.",
    overview: "A self-hosted Linux environment for deploying and managing personal projects independently of third-party hosting platforms and managed services.",
    technologies: ["LINUX", "BANANA PI", "SELF-HOSTING", "NETWORKING", "SERVER ADMINISTRATION"],
    highlights: ["Lightweight personal infrastructure.", "Application deployment and online access.", "Hands-on server administration and networking."],
  },
  {
    id: "nameless-note-app",
    number: "11",
    title: "NAMELESS NOTE APP",
    category: "APPS",
    status: "ACTIVE",
    scope: "PERSONAL",
    description: "TODO — descrizione breve del progetto.",
    overview: "TODO — overview estesa del progetto.",
    technologies: ["TODO"],
    highlights: ["TODO", "TODO", "TODO"],
  },
];