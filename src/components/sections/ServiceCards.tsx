import { useLocale } from "next-intl";

import { Badge } from "@/components/ui/Badge";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { getWeddingOfferings } from "@/data/offerings";
import type { AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type ServiceCardsProps = {
  detailed?: boolean;
  limit?: number;
  className?: string;
};

export function ServiceCards({
  detailed = false,
  limit,
  className,
}: ServiceCardsProps) {
  const locale = useLocale() as AppLocale;
  const offerings = getWeddingOfferings(locale);
  const items = limit
    ? offerings.serviceSummaries.slice(0, limit)
    : offerings.serviceSummaries;

  return (
    <div className={cn("grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5", className)}>
      {items.map((service, index) => {
        const tones = ["soft", "rose", "champagne", "soft"] as const;
        return (
          <PremiumSectionShell
            key={service.id}
            tone={tones[index % tones.length]}
            className="panel-hover flex h-full flex-col rounded-[2rem] p-5 transition-shadow duration-300 hover:shadow-[0_20px_48px_rgba(80,59,43,0.12)] sm:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/8 text-xs font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Badge className="self-start">{service.badge}</Badge>
            </div>
            <h3 className="font-serif text-[1.8rem] leading-tight text-foreground sm:text-[1.95rem]">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {service.summary}
            </p>

            <ul className="mt-5 grid gap-3 text-sm leading-6 text-foreground/82">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {detailed ? (
              <>
                <div className="gold-divider my-5" />
                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                  {service.detail}
                </p>
              </>
            ) : null}
          </PremiumSectionShell>
        );
      })}
    </div>
  );
}
