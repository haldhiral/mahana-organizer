import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

type LuxuryHeroStatsProps = {
  className?: string;
};

export function LuxuryHeroStats({ className }: LuxuryHeroStatsProps) {
  const t = useTranslations("home.hero.trustStats");

  const stats = [
    { value: t("couples.value"), label: t("couples.label") },
    { value: t("experience.value"), label: t("experience.label") },
    { value: t("rating.value"), label: t("rating.label") },
    { value: t("cities.value"), label: t("cities.label") },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-6 sm:gap-0 sm:grid-cols-4",
        className,
      )}
    >
      {stats.map((stat, index) => (
        <div key={stat.label} className="contents">
          {index > 0 && (
            <div className="luxury-stat-divider hidden sm:block" />
          )}
          <div className={cn(
            "luxury-stat px-2 sm:px-4 lg:px-6",
            index > 0 && "sm:col-start-auto",
          )}>
            <span className="font-serif text-2xl font-semibold tracking-tight text-hero-text sm:text-3xl lg:text-[2.25rem]">
              {stat.value}
            </span>
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-hero-muted sm:text-[0.76rem]">
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
