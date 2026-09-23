"use client";

import { MessageCircleMore } from "lucide-react";
import { ImersiveBG } from "@/components/home/HeroContent/ImersiveBG";
import { translations } from "@/lib/i18n/translations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

export function HeroContent() {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <div
      className="
        relative
        z-0
        flex flex-col
        hero:flex-row-reverse
        items-center
        justify-center

        font-geist-sans
        mt-10
        mb-35
        px-5

        hero:mb-0
        hero:gap-1
        hero:items-center
        hero:justify-center
        hero:mt-25
        hero:px-20
      "
    >
      <ImersiveBG />

      <div
        className="
          flex flex-col
          gap-[20px]

          items-center
          text-center

          hero:items-start
          hero:text-left
        "
      >
        {/* Título */}
        <h1
          className="
            text-[1.8rem]
            leading-tight
            font-semibold
            text-[var(--text-primary)]

            sm:text-[2.1rem]
            hero:text-[2.2rem]
          "
        >
          {"{"}
          <span className="text-[var(--accent1)]">
            {t.hero.title.code}
          </span>
          {"}"}
          {t.hero.title.line1}

          <span className="relative text-[var(--accent1)]">
            .
          </span>

          <br />

          {t.hero.title.line2}
          <span className="text-[var(--accent1)]">.</span>
        </h1>

        {/* Nome / Cargo */}
        <h2
          className="
            font-dm-sans
            text-[0.95rem]
            font-bold

            sm:text-[1.3rem]
            hero:text-[1.2rem]
          "
        >
          <span className="text-[var(--text-primary)]">
            José Pedro Bernardes
          </span>

          <span className="text-[var(--accent-soft)]">
            {" "}· {t.hero.role}
          </span>
        </h2>

        {/* Descrição */}
        <p
          className="
            max-w-[400px]
            text-[0.85rem]
            leading-relaxed
            text-[var(--text-primary)]

            sm:text-[0.95rem]
            hero:text-[1rem]
          "
        >
          {t.hero.description.before}

          <span className="text-[var(--accent-soft)]">
            {t.hero.description.highlight}
          </span>

          {t.hero.description.after}
        </p>

        <div
          className="
            w-full
            max-w-[400px]
            sm:w-auto

            flex
            flex-col
            items-center

            gap-4
            mt-3

            sm:flex-row
            sm:gap-4
          "
        >
          {/* See My Work */}
          <a
            href="/projects"
            className="
              group
              flex
              items-center
              justify-center
              gap-4

              w-[300px]
              sm:w-[190px]

              h-[55px]

              rounded-[15px]
              bg-yellow-400
              border-yellow-400

              font-bold
              text-[0.9rem]
              text-black

              transition-all
              duration-300

              hero:w-full

              hover:bg-yellow-300
              hover:scale-105
              hover:shadow-lg
              hover:shadow-[#E3AD28]/30

              cursor-pointer
            "
          >
            <span>{t.hero.buttons.seeMyWork}</span>

            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:scale-160
              "
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Contact Me + GitHub */}
          <div className="flex items-center gap-3">
            <a
              href="https://linktr.ee/josepedrodev"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                justify-center

                w-[180px]
                sm:w-[150px]

                h-[55px]
                gap-2

                rounded-[15px]
                border
                border-[1.5px]
                border-[var(--text-primary)]/80

                bg-transparent

                font-bold
                text-[0.9rem]
                text-[var(--text-primary)]/80

                transition-all
                duration-300

                hover:bg-white/90
                hover:text-black
                hover:border-white
                hover:scale-105
                hover:shadow-lg
                hover:shadow-white/20

                cursor-pointer
              "
            >
              {t.hero.buttons.contactMe}

              <MessageCircleMore
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:scale-160
                "
              />
            </a>

            <div className="relative group">
              {/* Balão */}
              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-full
                  left-1/2
                  mb-3
                  -translate-x-1/2
                  translate-y-2
                  opacity-0
                  scale-90

                  whitespace-nowrap
                  rounded-lg
                  bg-white
                  px-3
                  py-1.5

                  text-sm
                  font-bold
                  text-black

                  shadow-lg

                  transition-all
                  duration-200

                  group-hover:translate-y-0
                  group-hover:opacity-100
                  group-hover:scale-100

                  after:absolute
                  after:left-1/2
                  after:top-full
                  after:-translate-x-1/2
                  after:border-[6px]
                  after:border-transparent
                  after:border-t-white
                "
              >
                {t.hero.github.tooltip}
              </span>

              {/* Botão GitHub */}
              <a
                href="https://github.com/Jose-Pedro-Bernardes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.github.ariaLabel}
                className="
                  group/button
                  flex
                  items-center
                  justify-center
                  shrink-0

                  w-[50px]
                  h-[50px]

                  rounded-[15px]
                  border
                  border-[1.5px]
                  border-[var(--text-primary)]/80

                  bg-transparent

                  text-[var(--text-primary)]/80

                  transition-all
                  duration-300

                  hover:bg-white/90
                  hover:text-black
                  hover:border-white
                  hover:scale-105
                  hover:shadow-lg
                  hover:shadow-white/20

                  cursor-pointer
                "
              >
                <Image
                  src="/assets/githu.png"
                  alt={t.hero.github.ariaLabel}
                  width={30}
                  height={30}
                  className="
                    opacity-70
                    transition-all
                    duration-300
                    group-hover/button:invert
                    group-hover/button:opacity-100
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="
          absolute
          bottom-[-15%]
          hero:bottom-[-20%]
          left-1/2
          -translate-x-1/2

          flex
          items-center
          justify-center

          animate-bounce-subtle

          text-[var(--text-primary)]/50
        "
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={t.hero.scroll.ariaLabel}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}