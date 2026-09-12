export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "How I Work", href: "/how-i-work" },
  { label: "Resume / CV", href: "/resume" },
];