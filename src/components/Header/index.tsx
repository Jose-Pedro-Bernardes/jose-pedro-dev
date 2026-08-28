"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/nav-links";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Background do Header continua ocupando a viewport inteira */}
      <div
        aria-hidden="true"
        className={`
          absolute inset-0 -z-10
          bg-[image:var(--header-bg)]
          border-b border-[var(--accent)]/20

          transition-none
          lg:transition-opacity
          lg:duration-500

          ${scrolled ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Conteúdo limitado a 1400px */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]

          flex
          items-center
          justify-between

          pt-3
          px-5
          pb-3

          lg:pt-4
          lg:px-20
          lg:pb-4
        "
      >

        {/* Logo + Navegação */}
        <div className="flex items-center gap-6 lg:gap-30">

          <Link href="/">
            <p
              className="
                text-[var(--text-primary)]
                font-display
                font-bold
                text-[1.3rem]

                lg:text-[1.5rem]
              "
            >
              JPD<span className="text-[var(--accent-soft)]">.</span>
            </p>
          </Link>

          {/* Navegação Desktop */}
          <nav
            className="hidden lg:flex"
            aria-label="Navegação principal"
          >
            <ul className="flex gap-15">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="
                      inline-block
                      text-[0.9rem]
                      text-[var(--text-primary)]/90
                      font-medium
                      font-dm-sans
                      transition-all
                      duration-200
                      ease-out
                      hover:text-[var(--accent1)]
                      hover:scale-110
                      origin-center
                    "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Ações */}
        <div className="flex items-center gap-2 lg:gap-3">

          {/* Hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex
              items-center
              justify-center

              lg:hidden

              cursor-pointer
              opacity-90
            "
          >
            <Image
              src="/assets/hamburger.png"
              alt=""
              width={32}
              height={32}
            />
          </button>

          {/* Theme */}
          <button
            type="button"
            aria-label="Alternar tema"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="
              flex
              items-center
              justify-center

              w-[48px]
              p-2

              rounded-xl
              border
              border-[var(--accent)]/25

              text-[var(--text-primary)]

              hover:bg-[var(--text-primary)]/10

              transition-colors
              cursor-pointer

              lg:w-[60px]
              lg:p-2.5
            "
          >
            {mounted && theme === "light" ? (
              <Moon size={18} color="var(--accent)" />
            ) : (
              <Sun size={18} color="var(--accent)" />
            )}
          </button>

        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav
          className="
            lg:hidden
            border-t
            border-[var(--accent)]/20
            bg-[image:var(--header-bg)]
            px-5
            py-5
          "
          aria-label="Navegação mobile"
        >
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block
                    font-dm-sans
                    text-[1rem]
                    font-medium
                    text-[var(--text-primary)]/90
                    transition-colors
                    duration-200
                    hover:text-[var(--accent1)]
                  "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}