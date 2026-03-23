"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useState } from "react";
import { useTranslations } from "next-intl";

import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/config/site";
import { navigationItems } from "@/config/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { LanguageSwitcher } from "./LanguageSwitcher";

function isActivePath(currentPath: string, href: string) {
  if (href === "/") {
    return currentPath === "/";
  }

  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");
  const tHeader = useTranslations("header");
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const syncScrolledState = useEffectEvent(() => {
    setIsScrolled(window.scrollY > 18);
  });

  useEffect(() => {
    const onScroll = () => syncScrolledState();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const solidHeader = pathname !== "/" || isScrolled || isMenuOpen;

  // Determine which logo variant to show:
  // - On dark hero (homepage top, not scrolled): always use light logo
  // - On solid header: use dark logo in light theme, light logo in dark theme
  const useLightLogo = !solidHeader || theme === "dark";
  const logoSrc = useLightLogo ? "/logo-mark-light.svg" : "/logo-mark-dark.svg";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        solidHeader
          ? "border-b border-border/60 bg-surface/88 shadow-[var(--shadow-soft)] backdrop-blur-2xl"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-[4.75rem] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <div className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
            solidHeader
              ? "surface-card-strong border-border/60"
              : "border border-hero-border bg-hero-bg-subtle/40 backdrop-blur-sm",
          )}>
            <Image
              src={logoSrc}
              alt={siteConfig.name}
              width={34}
              height={34}
              priority
            />
          </div>
          <span className={cn(
            "text-[1.02rem] font-bold tracking-[0.1em] transition-colors duration-300 sm:text-lg",
            solidHeader ? "text-foreground" : "text-hero-text",
          )}>
            MAHANA
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigationItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.92rem] font-medium tracking-[0.01em] transition-all duration-300",
                  active
                    ? solidHeader
                      ? "bg-contrast text-contrast-foreground shadow-[var(--shadow-soft)]"
                      : "bg-white/12 text-hero-text shadow-[0_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-sm"
                    : solidHeader
                      ? "text-foreground/75 hover:bg-surface/76 hover:text-foreground"
                      : "text-hero-text/70 hover:bg-white/8 hover:text-hero-text",
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-opacity",
                    active ? "bg-current opacity-80" : "opacity-0",
                    !solidHeader && !active && "bg-hero-accent/60",
                    solidHeader && !active && "bg-primary/60",
                  )}
                />
                {tNav(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <LanguageSwitcher compact />
          <Link
            href="/contact"
            className={cn(
              buttonStyles(),
              !solidHeader && "border-hero-accent/40 bg-[linear-gradient(135deg,var(--hero-accent)_0%,#A8893E_100%)] text-[#1A2536] shadow-[0_12px_32px_rgba(201,169,110,0.15)] hover:border-hero-accent/60 hover:shadow-[0_16px_40px_rgba(201,169,110,0.2)]",
            )}
          >
            {tCommon("consultationCta")}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300",
              solidHeader
                ? "surface-card-strong border-border/60"
                : "border-hero-border bg-hero-bg-subtle/40 backdrop-blur-sm",
            )}
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? tHeader("closeMenu") : tHeader("openMenu")}
          >
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 rounded-full transition-transform duration-300",
                  solidHeader ? "bg-foreground" : "bg-hero-text",
                  isMenuOpen && "translate-y-[7px] rotate-45 !bg-foreground",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[7px] h-0.5 w-5 rounded-full transition-opacity duration-300",
                  solidHeader ? "bg-foreground" : "bg-hero-text",
                  isMenuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[14px] h-0.5 w-5 rounded-full transition-transform duration-300",
                  solidHeader ? "bg-foreground" : "bg-hero-text",
                  isMenuOpen && "-translate-y-[7px] -rotate-45 !bg-foreground",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-border/40 bg-surface/95 backdrop-blur-2xl transition-all duration-400 ease-out lg:hidden",
          isMenuOpen
            ? "max-h-[calc(100svh-4.75rem)] opacity-100"
            : "max-h-0 border-t-transparent opacity-0",
        )}
      >
        <Container className="max-h-[calc(100svh-4.75rem)] overflow-y-auto">
          <nav className="flex flex-col gap-2 py-5" aria-label="Mobile navigation">
            {navigationItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "rounded-[1.4rem] px-4 py-3.5 text-base font-medium transition-colors",
                    active
                      ? "bg-contrast text-contrast-foreground shadow-[var(--shadow-soft)]"
                      : "text-foreground/80 hover:bg-surface-muted/80 hover:text-foreground",
                  )}
                >
                  {tNav(item.labelKey)}
                </Link>
              );
            })}

            <div className="mt-4 border-t border-border/40 pt-4">
              <LanguageSwitcher onSelect={() => setIsMenuOpen(false)} />
            </div>

            <div className="mt-2 flex flex-col gap-3 pb-5">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full bg-contrast px-6 py-3.5 text-center text-sm font-semibold text-contrast-foreground shadow-[var(--shadow-soft)] transition-all duration-200 hover:brightness-[1.02]"
              >
                {tCommon("consultationCta")}
              </Link>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
