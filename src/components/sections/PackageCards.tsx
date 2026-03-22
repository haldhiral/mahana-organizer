import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import { buttonStyles } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { getWeddingOfferings } from "@/data/offerings";
import type { AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type PackageCardsProps = {
  preview?: boolean;
  className?: string;
};

export function PackageCards({ preview = false, className }: PackageCardsProps) {
  const locale = useLocale() as AppLocale;
  const offerings = getWeddingOfferings(locale);
  const featuredLabel =
    locale === "id" ? "Pilihan unggulan" : "Featured selection";
  const detailLabel =
    locale === "id" ? "Lihat detail lengkap" : "View full details";
  const contactLabel =
    locale === "id" ? "Diskusikan paket ini" : "Discuss this package";

  return (
    <div className={cn("grid gap-5 lg:grid-cols-3", className)}>
      {offerings.packagePreviews.map((plan, index) => (
        <PremiumSectionShell
          key={plan.id}
          tone={plan.featured ? "rose" : index === 0 ? "soft" : "champagne"}
          className={cn(
            "panel-hover relative flex h-full flex-col rounded-[2.2rem] p-6 transition-shadow duration-300 hover:shadow-[0_24px_52px_rgba(80,59,43,0.14)]",
            plan.featured && "ring-1 ring-primary/20 shadow-[0_20px_48px_rgba(80,59,43,0.10)]",
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <Badge className="self-start">{plan.badge}</Badge>
            {plan.featured ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary">
                <span className="h-1 w-1 rounded-full bg-primary" />
                {featuredLabel}
              </span>
            ) : null}
          </div>

          <h3 className="mt-5 font-serif text-[2rem] leading-tight text-foreground">
            {plan.title}
          </h3>
          <p className="mt-3 font-serif text-lg font-medium tracking-tight text-foreground/85">
            {plan.price}
          </p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            {plan.summary}
          </p>

          <ul className="mt-5 flex-1 grid gap-3 text-sm leading-6 text-foreground/82">
            {plan.highlights.slice(0, preview ? 3 : undefined).map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <div className="gold-divider mb-6" />
            <Link
              href={preview ? "/packages" : "/contact"}
              className={buttonStyles({ fullWidth: true })}
            >
              {preview ? detailLabel : contactLabel}
            </Link>
          </div>
        </PremiumSectionShell>
      ))}
    </div>
  );
}
