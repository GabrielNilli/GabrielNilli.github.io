// =================================
//  TYPES
// =================================
export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: "mail" | "github" | "linkedin";
  external?: boolean;
}

// =================================
//  DATA
// =================================
export const contactMethods: ContactMethod[] = [
  {
    id: "email",
    label: "Email",
    value: "gabbonilli@gmail.com",
    href: "mailto:gabbonilli@gmail.com",
    icon: "mail",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/GabrielNilli",
    href: "https://github.com/GabrielNilli",
    icon: "github",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/...", // TODO
    href: "https://linkedin.com/in/...", // TODO
    icon: "linkedin",
    external: true,
  },
];

export const availabilityStatus = {
  heading: "Available for",
  items: ["Freelance", "Collaborations", "Projects"],
  location: "Italy · CET",
  responseTime: "Usually within 1–2 days",
};

export const currentStatus = {
  heading: "Open to",
  items: ["Interesting projects", "Collaborations", "New opportunities"],
};