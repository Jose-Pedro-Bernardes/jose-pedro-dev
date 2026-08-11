import { NAV_LINKS } from "@/lib/nav-links";
import Image from "next/image";
import Link from "next/link";
import { Moon } from "lucide-react";

export function Header() {
  return (
    <header className="flex justify-between pt-4 px-20">
      <div className="flex items-center gap-30">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Logo Dev Bernardes"
            width={182}
            height={20}
            className="h-auto w-auto"
          />
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="flex gap-15">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="text-[1rem] text-white/70 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <button
        type="button"
        aria-label="Alternar tema"
        className="flex items-center justify-center rounded-xl border border-[#FFFFFF]/25 p-2.5 w-[60px] text-white hover:bg-white/10 transition-colors cursor-pointer"
      >
        <Moon size={18} color="#ffea00b5" />
      </button>
    </header>
  );
}