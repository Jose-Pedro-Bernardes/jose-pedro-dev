"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/nav-links";
import Link from "next/link";
import { Moon } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<header
  className={`
    fixed top-0 left-0 w-full z-50
    flex justify-between
    pt-4 px-20 pb-4
    transition-[background-color,backdrop-filter] duration-300
    ${
      scrolled
        ? "bg-black/80 backdrop-blur-md border-b border-yellow-400/20"
        : "bg-transparent border-b border-transparent"
    }
  `}
>
      <div className="flex items-center gap-30">
        <Link href="/">
          <p className="text-white/95 text-[1.5rem]">
            JPD<span className="text-yellow-400">.</span>
          </p>
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="flex gap-15">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[1rem] text-white/70 hover:text-white transition-colors"
                >
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
        className="
          flex items-center justify-center
          w-[60px] p-2.5
          rounded-xl border border-[#FFFFFF]/25
          text-white
          hover:bg-white/10
          transition-colors
          cursor-pointer
        "
      >
        <Moon size={18} color="#ffea00b5" />
      </button>
    </header>
  );
}