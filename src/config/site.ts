import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

const whatsappDefaultMessage = {
  id: "Halo Mahana Organizer, saya ingin menjadwalkan konsultasi untuk pernikahan saya.",
  en: "Hello Mahana Organizer, I would like to schedule a consultation for my wedding.",
} satisfies Record<AppLocale, string>;

export const siteConfig = {
  name: "Mahana Organizer",
  shortName: "Mahana",
  domain: "https://www.mahanaorganizer.com",
  category: "Wedding Organizer / Event Planner",
  defaultLocale: routing.defaultLocale,
  locales: routing.locales,
  tagline: {
    id: "Wedding organizer elegan untuk perayaan yang hangat dan tertata.",
    en: "An elegant wedding organizer for warm, beautifully orchestrated celebrations.",
  } satisfies Record<AppLocale, string>,
  phoneDisplay: "+62 896-2970-2997",
  phoneNumber: "+6289629702997",
  whatsappNumber: "6289629702997",
  whatsappDefaultMessage,
  email: "[EMAIL_ADDRESS]",
  responseHours: "Daily, 09.00 - 20.00 WIB",
  serviceAreas: ["Jakarta", "Bogor", "Depok", "Bekasi", "Tangerang"] as const,
  logoPath: "/logo-mark.svg",
  ogImagePath: "/opengraph-image",
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

export function getAbsoluteUrl(pathname = "/") {
  return new URL(pathname, siteConfig.domain).toString();
}

export function getLocalizedUrl(locale: AppLocale, pathname = "/") {
  const normalizedPath = pathname === "/" ? "" : pathname;
  return getAbsoluteUrl(`/${locale}${normalizedPath}`);
}

export function getWhatsAppUrl(locale: AppLocale, customMessage?: string) {
  const text = encodeURIComponent(
    customMessage ?? siteConfig.whatsappDefaultMessage[locale],
  );

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
