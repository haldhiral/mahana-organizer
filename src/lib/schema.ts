import { getAbsoluteUrl, getLocalizedUrl, siteConfig } from "@/config/site";
import type { AppLocale } from "@/i18n/routing";
import type { BreadcrumbItem } from "@/lib/seo";

type JsonLdObject = Record<string, unknown>;

function getAreaServed() {
  return siteConfig.serviceAreas.map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
  }));
}

export function buildOrganizationSchema({
  locale,
  description,
}: {
  locale: AppLocale;
  description: string;
}): JsonLdObject {
  const sameAs = Object.values(siteConfig.socialLinks);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.domain}#organization`,
    name: siteConfig.name,
    description,
    url: siteConfig.domain,
    logo: getAbsoluteUrl(siteConfig.logoPath),
    areaServed: getAreaServed(),
    inLanguage: locale,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: siteConfig.phoneNumber,
      email: siteConfig.email,
      availableLanguage: ["Indonesian", "English"],
      areaServed: siteConfig.serviceAreas,
    },
  };
}

export function buildLocalBusinessSchema({
  locale,
  description,
}: {
  locale: AppLocale;
  description: string;
}): JsonLdObject {
  const sameAs = Object.values(siteConfig.socialLinks);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.domain}#localbusiness`,
    name: siteConfig.name,
    description,
    url: siteConfig.domain,
    image: getAbsoluteUrl(siteConfig.ogImagePath),
    telephone: siteConfig.phoneNumber,
    email: siteConfig.email,
    areaServed: getAreaServed(),
    inLanguage: locale,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildServiceSchema({
  locale,
  name,
  description,
  pathname,
}: {
  locale: AppLocale;
  name: string;
  description: string;
  pathname: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "Wedding planning and wedding organizer service",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: getLocalizedUrl(locale),
      telephone: siteConfig.phoneNumber,
    },
    areaServed: getAreaServed(),
    url: getLocalizedUrl(locale, pathname),
  };
}

export function buildBreadcrumbSchema({
  locale,
  items,
}: {
  locale: AppLocale;
  items: BreadcrumbItem[];
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getLocalizedUrl(locale, item.pathname),
    })),
  };
}

export function buildFaqSchema(
  items: Array<{ question: string; answer: string }>,
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
