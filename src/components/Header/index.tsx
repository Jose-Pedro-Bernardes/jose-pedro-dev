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
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        flex justify-between
        pt-4 px-20 pb-4
        transition-[background-color,backdrop-filter] duration-300
        ${
          scrolled
            ? "bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--accent)]/20"
            : "bg-transparent border-b border-transparent"
        }
      `}
    >
      <div className="flex items-center gap-30">
        <Link href="/">
          <p className="text-[var(--text-primary)] text-[1.5rem]">
            JPD<span className="text-[var(--accent)]">.</span>
          </p>
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="flex gap-15">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[1rem] text-[var(--text-primary)]/70 hover:text-[var(--text-primary)] transition-colors"
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
          rounded-xl border border-[var(--text-primary)]/25
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