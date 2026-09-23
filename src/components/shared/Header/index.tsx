"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { NAV_LINKS } from "@/components/shared/Header/links/nav-links";
import { translations } from "@/lib/i18n/translations";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { language, setLanguage } = useLanguage();
  const t = translations[language].shared;

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
          hero:transition-opacity
          hero:duration-500

          ${scrolled || menuOpen ? "opacity-100" : "opacity-0"}
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

          hero:pt-4
          hero:px-20
          hero:pb-4
        "
      >

        <div className="flex items-center gap-6 hero:gap-30">

          <Link href="/">
            <p
              className="
                text-[var(--text-primary)]
                font-display
                font-bold
                text-xl

                hero:text-2xl
              "
            >
              JPD<span className="text-[var(--accent-soft)]">.</span>
            </p>
          </Link>

          {/* Navegação Desktop */}
          <nav
            className="hidden hero:flex"
            aria-label={t.header.accessibility.mainNavigation}
          >
            <ul className="flex gap-15">
              {NAV_LINKS.map(({ key, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="
                      inline-block
                      text-sm
                      text-[var(--text-primary)]/90
                      font-medium
                      font-geist-sans
                      transition-all
                      duration-200
                      ease-out
                      hover:text-[var(--accent1)]
                      hover:scale-110
                      origin-center
                    "
                  >
                    {t.header.navigation[key]}
                  </Link>
                </li>
              ))}

              <li>
                <a
                  href="https://drive.google.com/drive/folders/1CNYPpSB25YrZbOtQIhhbB6jLGVG2auhX?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    text-sm
                    text-[var(--text-primary)]/90
                    font-medium
                    font-geist-sans
                    transition-all
                    duration-200
                    ease-out
                    hover:text-[var(--accent1)]
                    hover:scale-110
                    origin-center
                  "
                >
                  {t.header.navigation.resume}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Ações */}
        <div className="flex items-center gap-3 hero:gap-3">

          {/* Hamburger */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? t.header.accessibility.closeMenu
                : t.header.accessibility.openMenu
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex
              items-center
              justify-center

              hero:hidden

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

          {/* Idioma */}
          <button
            type="button"
            aria-label={t.header.accessibility.changeLanguage}
            onClick={() =>
              setLanguage(language === "en" ? "pt-BR" : "en")
            }
            className="
              hidden
              hero:flex
              items-center
              justify-center
              gap-2

              min-w-[48px]
              h-[40px]
              px-2

              rounded-xl
              border
              border-[var(--accent)]/25

              text-[var(--text-primary)]

              font-geist-sans
              font-bold
              text-sm

              hover:bg-[var(--text-primary)]/10

              transition-colors
              cursor-pointer

              hero:min-w-[60px]
              hero:px-3
            "
          >
            <span>{language === "en" ? "EN" : "PT"}</span>

            <Image
              src={
                language === "en"
                  ? "/assets/flags/us.png"
                  : "/assets/flags/br.png"
              }
              alt=""
              width={20}
              height={14}
            />
          </button>

          {/* Let's chat */}
          <a
            href="https://linktr.ee/josepedrodev"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              hero:flex
              items-center
              justify-center
              gap-2

              min-w-[48px]
              h-[40px]
              px-2

              bg-yellow-400
              rounded-xl

              text-[var(--text-secondary)]

              font-geist-sans
              font-bold
              text-sm

              transition-all
              duration-300
              hover:bg-yellow-300
              hover:scale-105
              hover:shadow-lg
              hover:shadow-[#E3AD28]/30

              cursor-pointer

              hero:min-w-[60px]
              hero:px-3
            "
          >
            {t.header.navigation.letsChat}
          </a>

        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav
          className="
            hero:hidden
            border-t
            border-[var(--accent)]/20
            bg-[image:var(--header-bg)]
            px-5
            py-5
          "
          aria-label={t.header.accessibility.mobileNavigation}
        >
          <ul className="flex flex-col gap-5">

            {NAV_LINKS.map(({ key, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block
                    font-dm-sans
                    text-base
                    font-medium
                    text-[var(--text-primary)]/90
                    transition-colors
                    duration-200
                    hover:text-[var(--accent1)]
                  "
                >
                  {t.header.navigation[key]}
                </Link>
              </li>
            ))}

            <li>
              <a
                href="https://drive.google.com/drive/folders/1CNYPpSB25YrZbOtQIhhbB6jLGVG2auhX?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  font-dm-sans
                  text-base
                  font-medium
                  text-[var(--text-primary)]/90
                  transition-colors
                  duration-200
                  hover:text-[var(--accent1)]
                "
              >
                {t.header.navigation.resume}
              </a>
            </li>

          </ul>

          {/* Ações no mobile */}
          <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[var(--accent)]/20">

            {/* Idioma */}
            <button
              type="button"
              aria-label={t.header.accessibility.changeLanguage}
              onClick={() =>
                setLanguage(language === "en" ? "pt-BR" : "en")
              }
              className="
                flex
                items-center
                justify-center
                gap-2

                min-w-[48px]
                h-[40px]
                px-3

                rounded-xl
                border
                border-[var(--accent)]/25

                text-[var(--text-primary)]

                font-geist-sans
                font-bold
                text-sm

                hover:bg-[var(--text-primary)]/10

                transition-colors
                cursor-pointer
              "
            >
              <span>{language === "en" ? "EN" : "PT"}</span>

              <Image
                src={
                  language === "en"
                    ? "/assets/flags/us.png"
                    : "/assets/flags/br.png"
                }
                alt=""
                width={20}
                height={14}
                loading="eager"
                priority
              />
            </button>

            {/* Let's chat */}
            <a
              href="https://linktr.ee/josepedrodev"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1
                flex
                items-center
                justify-center
                gap-2
                max-w-[150px]

                h-[40px]
                px-3

                bg-yellow-400
                rounded-xl

                text-[var(--text-secondary)]

                font-geist-sans
                font-bold
                text-sm

                transition-all
                duration-300
                hover:bg-yellow-300
                hover:scale-105
                hover:shadow-lg
                hover:shadow-[#E3AD28]/30

                cursor-pointer
              "
            >
              {t.header.navigation.letsChat}
            </a>

          </div>
        </nav>
      )}
    </header>
  );
}