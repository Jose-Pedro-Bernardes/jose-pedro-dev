"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/nav-links";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between pt-4 px-20 pb-4">
      <div
        aria-hidden="true"
        className={`
          absolute inset-0 -z-10
          bg-[image:var(--header-bg)]
          border-b border-[var(--accent)]/20
          transition-opacity duration-500
          ${scrolled ? "opacity-100" : "opacity-0"}
        `}
      />
      <div className="w-full flex items-center gap-30">
        <Link href="/">
          <p className="text-[var(--text-primary)] font-bold text-[1.5rem]">
            JPD<span className="text-[var(--accent-soft)]">.</span>
          </p>
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="flex gap-15">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="
                    text-[0.9rem] text-[var(--text-primary)]/90 font-medium 
                    hover:text-[var(--accent1)] transition-colors"
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
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="
          flex items-center justify-center
          w-[60px] p-2.5
          rounded-xl border border-[var(--accent)]/25
          text-[var(--text-primary)]
          hover:bg-[var(--text-primary)]/10
          transition-colors
          cursor-pointer
        "
      >
        {mounted && theme === "light" ? (
          <Moon size={18} color="var(--accent)" />
        ) : (
          <Sun size={18} color="var(--accent)" />
        )}
      </button>
    </header>
  );
}