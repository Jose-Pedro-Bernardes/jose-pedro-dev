export interface NavLink {
  key: "home" | "projects" | "howIWork";
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { key: "home", href: "/" },
  { key: "projects", href: "/projects" },
  { key: "howIWork", href: "/how-i-work" },
];