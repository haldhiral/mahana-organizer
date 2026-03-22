"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

import { localeLabels } from "@/i18n/routing";
import type { AppLocale } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
  compact?: boolean;
  onSelect?: () => void;
};

export function LanguageSwitcher({
  className,
  compact = false,
  onSelect,
}: LanguageSwitcherProps) {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchLocale(nextLocale: AppLocale) {
    if (nextLocale === locale) {
      return;
    }

    startTransition(() => {
      onSelect?.();
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div
      className={cn(
        "surface-card-strong inline-flex items-center gap-1 rounded-full p-1 text-sm",
        compact && "text-xs",
        isPending && "opacity-80",
        className,
      )}
      aria-label={t("label")}
      aria-busy={isPending}
    >
      {(Object.keys(localeLabels) as AppLocale[]).map((value) => {
        const active = value === locale;

        return (
          <button
            key={value}
            type="button"
            disabled={isPending}
            onClick={() => switchLocale(value)}
            className={cn(
              "rounded-full px-3 py-1.5 font-semibold uppercase tracking-[0.14em] transition-all duration-300 ease-out",
              compact && "px-2.5 py-1 text-[0.7rem]",
              active
                ? "bg-contrast text-contrast-foreground shadow-[var(--shadow-soft)]"
                : "text-foreground/70 hover:bg-surface-strong/92 hover:text-foreground hover:shadow-[var(--shadow-soft)]",
            )}
            aria-pressed={active}
          >
            <span className="sr-only">{t(value)}</span>
            {localeLabels[value]}
          </button>
        );
      })}
    </div>
  );
}
