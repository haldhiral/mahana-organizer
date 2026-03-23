import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["id", "en"],
  defaultLocale: "id",
  localePrefix: "as-needed",
  localeDetection: false,
});

export type AppLocale = (typeof routing.locales)[number];

export const localeLabels: Record<AppLocale, string> = {
  id: "ID",
  en: "EN",
};

export function isValidLocale(locale: string): locale is AppLocale {
  return (routing.locales as readonly string[]).includes(locale);
}
