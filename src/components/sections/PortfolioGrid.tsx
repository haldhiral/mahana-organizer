"use client";

import { useDeferredValue, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";

import { portfolioEntries, portfolioFilters } from "@/data/portfolio";
import type { PortfolioFilter } from "@/data/portfolio";
import { getWeddingOfferings } from "@/data/offerings";
import { Badge } from "@/components/ui/Badge";
import { ElegantImagePlaceholder } from "@/components/ui/ElegantImagePlaceholder";
import { cn } from "@/lib/utils";
import type { AppLocale } from "@/i18n/routing";

export function PortfolioGrid() {
  const locale = useLocale() as AppLocale;
  const offerings = getWeddingOfferings(locale);
  const tPage = useTranslations("portfolioPage");
  const tTags = useTranslations("taxonomy.tags");
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("all");
  const deferredFilter = useDeferredValue(activeFilter);
  const [, startTransition] = useTransition();

  const filteredEntries = portfolioEntries.filter((entry) => {
    if (deferredFilter === "all") {
      return true;
    }

    return entry.filters.some((filter) => filter === deferredFilter);
  });

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2.5">
        {portfolioFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => startTransition(() => setActiveFilter(filter))}
            className={cn(
              "rounded-full border px-4 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ease-out sm:text-sm",
              activeFilter === filter
                ? "scale-[1.02] border-contrast/20 bg-contrast text-contrast-foreground shadow-[var(--shadow-soft)]"
                : "surface-card border-border-strong text-foreground/80 hover:bg-surface-strong/92 hover:text-foreground hover:shadow-[var(--shadow-card)]",
            )}
          >
            {tPage(`filters.${filter}`)}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
        {filteredEntries.map((entry, index) => (
          <article
            key={entry.id}
            className="luxury-card panel-hover overflow-hidden rounded-[2rem] transition-shadow duration-300 hover:shadow-[0_22px_48px_rgba(80,59,43,0.13)]"
          >
            <ElegantImagePlaceholder
              alt={tPage(`entries.${entry.id}.title`)}
              src={entry.image}
              label={offerings.placeholderLabels.portfolio}
              title={tPage(`entries.${entry.id}.title`)}
              note={tPage(`entries.${entry.id}.type`)}
              ratio={index % 3 === 0 ? "portrait" : "landscape"}
              className="rounded-none border-0 bg-transparent p-4 shadow-none"
            />
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                {tPage(`entries.${entry.id}.type`)}
              </p>
              <h3 className="mt-3 font-serif text-2xl leading-snug text-foreground">
                {tPage(`entries.${entry.id}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                {tPage(`entries.${entry.id}.description`)}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {entry.tagIds.map((tagId) => (
                  <Badge key={tagId}>{tTags(tagId)}</Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
