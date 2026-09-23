export const languages = {
  "pt-BR": {
    label: "Português",
    flag: "/assets/flags/br.png",
  },
  en: {
    label: "English",
    flag: "/assets/flags/us.png",
  },
} as const;

export type Language = keyof typeof languages;