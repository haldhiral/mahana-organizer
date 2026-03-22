import type { MetadataRoute } from "next";

import { pageRoutes } from "@/config/navigation";
import { getLocalizedUrl } from "@/config/site";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routing.locales.flatMap((locale) =>
    pageRoutes.map((pathname) => ({
      url: getLocalizedUrl(locale, pathname),
      lastModified,
      changeFrequency: pathname === "/" ? "weekly" : "monthly",
      priority: pathname === "/" ? 1 : 0.8,
      alternates: {
        languages: {
          id: getLocalizedUrl("id", pathname),
          en: getLocalizedUrl("en", pathname),
        },
      },
    })),
  );
}
