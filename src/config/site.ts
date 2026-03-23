import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

const whatsappDefaultMessage = {
  id: "Halo Mahana Organizer, saya ingin menjadwalkan konsultasi untuk pernikahan saya.",
  en: "Hello Mahana Organizer, I would like to schedule a consultation for my wedding.",
} satisfies Record<AppLocale, string>;

export const siteConfig = {
  name: "Mahana Organizer",
  shortName: "Mahana",
  domain: "https://mahanaorganizer.com",
  category: "Wedding Organizer / Event Planner",
  defaultLocale: routing.defaultLocale,
  locales: routing.locales,
  tagline: {
    id: "Wedding organizer elegan untuk perayaan yang hangat dan tertata.",
    en: "An elegant wedding organizer for warm, beautifully orchestrated celebrations.",
  } satisfies Record<AppLocale, string>,
  phoneDisplay: "0813-1800-6962",
  phoneNumber: "+6281318006962",
  whatsappNumber: "6281318006962",
  whatsappDefaultMessage,
  email: "mahanaorganizer3@gmail.com",
  responseHours: "Daily, 09.00 - 20.00 WIB",
  serviceAreas: ["Jakarta", "Bogor", "Depok", "Bekasi", "Tangerang"] as const,
  logoPath: "/logo-mark.svg",
  ogImagePath: "/opengraph-image",
  theme: {
    lightColor: "#f8f1ea",
    darkColor: "#1b1513",
    backgroundColor: "#fff8f0",
    themeColor: "#2c3e50",
  },
  icon: {
    background: "#fff8f0",
    surface: "rgba(255, 253, 249, 0.82)",
    foreground: "#1c2a3a",
    accent: "#c9a96e",
    border: "#ddd5cc",
  },
  socialLinks: {
    instagram: "https://instagram.com/mahanaorganizer",
    tiktok: "https://tiktok.com/@mahanaorganizer",
    pinterest: "https://pinterest.com/mahanaorganizer",
  },
  address: {
    streetAddress: "Studio consultation by appointment",
    locality: "Jakarta",
    region: "DKI Jakarta",
    postalCode: "10110",
    country: "ID",
  },
} as const;

function normalizePathname(pathname = "/") {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withLeadingSlash.replace(/\/+$/, "") || "/";
}

export function getAbsoluteUrl(pathname = "/") {
  return new URL(normalizePathname(pathname), siteConfig.domain).toString();
}

export function getLocalizedPathname(locale: AppLocale, pathname = "/") {
  const normalizedPath = normalizePathname(pathname);

  if (locale === siteConfig.defaultLocale) {
    return normalizedPath;
  }

  return normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;
}

export function getLocalizedUrl(locale: AppLocale, pathname = "/") {
  return getAbsoluteUrl(getLocalizedPathname(locale, pathname));
}

type LanguageAlternates = Record<AppLocale, string> & {
  "x-default": string;
};

export function getLanguageAlternates(pathname = "/"): LanguageAlternates {
  const localizedAlternates = Object.fromEntries(
    routing.locales.map((locale) => [locale, getLocalizedUrl(locale, pathname)]),
  ) as Record<AppLocale, string>;

  return {
    ...localizedAlternates,
    "x-default": getLocalizedUrl(siteConfig.defaultLocale, pathname),
  };
}

export function getWhatsAppUrl(locale: AppLocale, customMessage?: string) {
  const text = encodeURIComponent(
    customMessage ?? siteConfig.whatsappDefaultMessage[locale],
  );

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function getMailtoUrl(subject?: string) {
  if (!subject) {
    return `mailto:${siteConfig.email}`;
  }

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;
}

export function getTelUrl() {
  return `tel:${siteConfig.phoneNumber}`;
}
