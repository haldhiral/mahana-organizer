"use client";

import { useTranslations } from "next-intl";

import { useTheme, type Theme } from "@/components/providers/ThemeProvider";
import { MoonStarsIcon, SunIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

const themeOptions: Array<{
  value: Theme;
  icon: typeof SunIcon;
}> = [
  { value: "light", icon: SunIcon },
  { value: "dark", icon: MoonStarsIcon },
];

export function ThemeToggle({ className }: ThemeToggleProps) {
  const t = useTranslations("theme");
  const { mounted, theme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "inline-flex h-11 w-[5.75rem] rounded-full border border-border/60 bg-surface/80 shadow-[var(--shadow-soft)] backdrop-blur-xl",
          className,
        )}
      />
    );
  }

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border/70 bg-surface/80 p-1 shadow-[var(--shadow-soft)] backdrop-blur-xl",
        className,
      )}
    >
      {themeOptions.map(({ value, icon: Icon }) => {
        const active = theme === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-pressed={active}
            aria-label={active ? t("current", { theme: t(value) }) : t(`switchTo.${value}`)}
            className={cn(
              "inline-flex min-h-9 items-center justify-center gap-2 rounded-full px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-3.5",
              active
                ? "bg-contrast text-contrast-foreground shadow-[var(--shadow-soft)]"
                : "text-foreground/72 hover:bg-surface-strong/88 hover:text-foreground",
            )}
          >
            <Icon className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden sm:inline">{t(value)}</span>
          </button>
        );
      })}
    </div>
  );
}
