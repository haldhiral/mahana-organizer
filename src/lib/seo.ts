import type { Metadata } from "next";

import { getAbsoluteUrl, getLocalizedUrl, siteConfig } from "@/config/site";
import type { AppLocale } from "@/i18n/routing";

const openGraphLocaleMap: Record<AppLocale, string> = {
  id: "id_ID",
  en: "en_US",
};

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

  return {
    metadataBase: new URL(siteConfig.domain),
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "id-ID": getLocalizedUrl("id", pathname),
        "en-US": getLocalizedUrl("en", pathname),
        "x-default": getLocalizedUrl(siteConfig.defaultLocale, pathname),
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: openGraphLocaleMap[locale],
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
    },
  };
}
