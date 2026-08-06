export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Sobre", href: "/about" },
  { label: "Projetos", href: "/projects" },
  { label: "Processo", href: "/process" },
  { label: "Estudos", href: "/studies" },
  { label: "Contato", href: "/contact" },
];