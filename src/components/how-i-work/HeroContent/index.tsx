"use client";

import { translations } from "@/lib/i18n/translations";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function HeroContent() {
  const { language } = useLanguage();
  const t = translations[language].howIWork;

  return (
    <div
      className="
        w-full
        h-full
        flex
        flex-col
        items-center
        justify-center
        gap-8
      "
    >
      <h1 className="text-4xl font-bold">
        {t.hero.title}
      </h1>

      <p>
        {t.hero.description}
      </p>
    </div>
  );
}