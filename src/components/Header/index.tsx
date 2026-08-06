import { NAV_LINKS } from "@/lib/nav-links";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header>
        <Link href="/">
            <Image src="/assets/logo.png" alt="Logo Dev bernardes" width={182} height={20} />
        </Link>
        <nav aria-label="Navegação principal">
            <ul>
            {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                <Link href={href}>{label}</Link>
                </li>
            ))} 
            </ul>
        </nav>
    </header>
  );
}
