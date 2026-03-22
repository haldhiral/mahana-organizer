import { useLocale, useTranslations } from "next-intl";

import { testimonialEntries } from "@/data/testimonials";
import { getWeddingOfferings } from "@/data/offerings";
import { Badge } from "@/components/ui/Badge";
import { ElegantImagePlaceholder } from "@/components/ui/ElegantImagePlaceholder";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import type { AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type TestimonialCardsProps = {
  limit?: number;
  featuredOnly?: boolean;
  className?: string;
};

export function TestimonialCards({
  limit,
  featuredOnly = false,
  className,
}: TestimonialCardsProps) {
  const locale = useLocale() as AppLocale;
  const offerings = getWeddingOfferings(locale);
  const tPage = useTranslations("testimonialsPage");
  const tTags = useTranslations("taxonomy.tags");
  const items = testimonialEntries
    .filter((entry) => (featuredOnly ? entry.featured : true))
    .slice(0, limit);

  return (
    <div className={cn("grid gap-4 lg:grid-cols-2 lg:gap-5", className)}>
      {items.map((item, index) => (
        <PremiumSectionShell
          key={item.id}
          tone={index % 2 === 0 ? "soft" : "rose"}
          className="panel-hover flex h-full flex-col rounded-[2rem] p-5 sm:p-7"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
            <ElegantImagePlaceholder
              alt={tPage(`items.${item.id}.name`)}
              src={item.image}
              label={offerings.placeholderLabels.couple}
              title={tPage(`items.${item.id}.name`)}
              ratio="square"
              className="w-20 shrink-0 sm:w-24"
              sizes="96px"
            />
            <div>
              <p className="font-medium text-foreground">{tPage(`items.${item.id}.name`)}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {tPage(`items.${item.id}.context`)}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tagIds.map((tagId) => (
                  <Badge key={tagId}>{tTags(tagId)}</Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex-1">
            <span className="quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="-mt-4 font-serif text-[1.45rem] leading-[1.32] text-foreground sm:text-[1.7rem]">
              {tPage(`items.${item.id}.quote`)}
            </blockquote>
          </div>

          <span className="gold-divider mt-8" aria-hidden="true" />
        </PremiumSectionShell>
      ))}
    </div>
  );
}
