export interface NavLinkItem {
  to: string;
  label: string;
}

export const navLinks: NavLinkItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experiences", label: "Experiences" },
  { to: "/works", label: "Works" },
  { to: "/skills", label: "Skills" },
  { to: "/passions", label: "Passions" },
  { to: "/contact", label: "Contact" },
];
