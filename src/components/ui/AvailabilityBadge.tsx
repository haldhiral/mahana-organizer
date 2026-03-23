import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

type AvailabilityBadgeProps = {
  className?: string;
};

export function AvailabilityBadge({ className }: AvailabilityBadgeProps) {
  const t = useTranslations("home.hero");

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-hero-border bg-hero-bg-subtle/60 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-hero-accent backdrop-blur-sm sm:text-[0.76rem]",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hero-accent opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-hero-accent" />
      </span>
      {t("availability")}
    </span>
  );
}
