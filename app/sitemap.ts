import type { MetadataRoute } from "next";

import { pageRoutes } from "@/config/navigation";
import { getLanguageAlternates, getLocalizedUrl } from "@/config/site";
import { routing } from "@/i18n/routing";

type SitemapChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

const routeSettings: Record<
  string,
  { changeFrequency: SitemapChangeFrequency; priority: number }
> = {
  "/": { changeFrequency: "weekly", priority: 1 },
  "/about": { changeFrequency: "monthly", priority: 0.7 },
  "/services": { changeFrequency: "weekly", priority: 0.9 },
  "/packages": { changeFrequency: "weekly", priority: 0.9 },
  "/portfolio": { changeFrequency: "monthly", priority: 0.8 },
  "/testimonials": { changeFrequency: "monthly", priority: 0.8 },
  "/contact": { changeFrequency: "monthly", priority: 0.9 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routing.locales.flatMap((locale) =>
    pageRoutes.map((pathname) => {
      const settings = routeSettings[pathname] ?? {
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };

      return {
        url: getLocalizedUrl(locale, pathname),
        lastModified,
        changeFrequency: settings.changeFrequency,
        priority: settings.priority,
        alternates: {
          languages: getLanguageAlternates(pathname),
        },
      };
    }),
  );
}
