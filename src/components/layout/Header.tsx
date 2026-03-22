"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useState } from "react";
import { useTranslations } from "next-intl";

import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        solidHeader
          ? "border-b border-border/60 bg-white/90 shadow-[0_6px_24px_rgba(80,59,43,0.08)] backdrop-blur-2xl"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-[4.75rem] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/75 bg-white/80 shadow-[0_14px_28px_rgba(74,53,36,0.12)]">
            <Image
              src="/logo-mark.svg"
              alt={siteConfig.name}
              width={34}
              height={34}
              priority
            />
          </div>
          <span className="text-[1.02rem] font-bold tracking-[0.08em] text-foreground sm:text-lg">
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
                  "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.95rem] font-medium transition-all duration-200",
                  active
                    ? "bg-white text-foreground shadow-[0_12px_24px_rgba(46,33,24,0.08)]"
                    : "text-foreground/75 hover:bg-white/60 hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-opacity",
                    active ? "bg-primary opacity-100" : "bg-primary/60 opacity-0",
                  )}
                />
                {tNav(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher compact />
          <Link href="/contact" className={buttonStyles()}>
            {tCommon("consultationCta")}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong/60 bg-white/82 shadow-[0_10px_24px_rgba(80,59,43,0.08)] lg:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? tHeader("closeMenu") : tHeader("openMenu")}
        >
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-foreground transition-transform duration-300",
                isMenuOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-foreground transition-opacity duration-300",
                isMenuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-foreground transition-transform duration-300",
                isMenuOpen && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-border/40 bg-white/95 backdrop-blur-2xl transition-all duration-400 ease-out lg:hidden",
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
                      ? "bg-foreground text-white shadow-[0_14px_28px_rgba(36,27,23,0.14)]"
                      : "text-foreground/80 hover:bg-surface-muted/60 hover:text-foreground",
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
                className="rounded-full bg-foreground px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0_10px_20px_rgba(36,27,23,0.18)] transition-all duration-200 hover:bg-primary-strong"
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
