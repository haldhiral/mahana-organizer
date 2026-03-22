import type { Metadata } from "next";

import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedUrl,
  siteConfig,
} from "@/config/site";
import type { AppLocale } from "@/i18n/routing";

const openGraphLocaleMap: Record<AppLocale, string> = {
  id: "id_ID",
  en: "en_US",
};

export function getOpenGraphLocale(locale: AppLocale) {
  return openGraphLocaleMap[locale];
}

type MetadataInput = {
  locale: AppLocale;
  pathname: string;
  title: string;
  description: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
};

export type BreadcrumbItem = {
  name: string;
  pathname: string;
};

export function buildMetadata({
  locale,
  pathname,
  title,
  description,
  keywords,
  type = "website",
  image = siteConfig.ogImagePath,
}: MetadataInput): Metadata {
  const canonicalUrl = getLocalizedUrl(locale, pathname);
  const socialImage = image.startsWith("http") ? image : getAbsoluteUrl(image);
  const resolvedTitle = title.includes(siteConfig.name)
    ? { absolute: title }
    : title;

  return {
    metadataBase: new URL(siteConfig.domain),
    title: resolvedTitle,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: getLanguageAlternates(pathname),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: getOpenGraphLocale(locale),
      type,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}
