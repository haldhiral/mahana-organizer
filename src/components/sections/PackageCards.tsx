import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";
import { buttonStyles } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckIcon, SparklesIcon } from "@/components/ui/icons";
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
    <div className={cn("grid gap-4 lg:grid-cols-3 lg:gap-5", className)}>
      {offerings.packagePreviews.map((plan, index) => (
        <PremiumSectionShell
          key={plan.id}
          tone={plan.featured ? "rose" : index === 0 ? "soft" : "champagne"}
          className={cn(
            "panel-hover relative flex h-full flex-col rounded-[2.2rem] p-5 transition-shadow duration-300 hover:shadow-[0_24px_52px_rgba(80,59,43,0.14)] sm:p-6",
            plan.featured && "ring-1 ring-primary/20 shadow-[0_20px_48px_rgba(80,59,43,0.10)]",
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <Badge className="self-start">{plan.badge}</Badge>
            {plan.featured ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-soft-bg)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary">
                <SparklesIcon className="h-3 w-3" />
                {featuredLabel}
              </span>
            ) : null}
          </div>

          <h3 className="mt-5 font-serif text-[1.85rem] leading-tight text-foreground sm:text-[2rem]">
            {plan.title}
          </h3>
          <p className="mt-3 font-serif text-lg font-medium tracking-tight text-foreground/85">
            {plan.price}
          </p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            {plan.summary}
          </p>

          <ul className="mt-5 grid flex-1 gap-3 text-sm leading-6 text-foreground/82">
            {plan.highlights.slice(0, preview ? 3 : undefined).map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
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
