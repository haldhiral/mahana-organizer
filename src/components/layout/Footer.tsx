import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/ui/Container";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { navigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

export function Footer() {
  const locale = useLocale() as AppLocale;
  const tFooter = useTranslations("footer");
  const tNav = useTranslations("nav");
  const currentYear = new Date().getFullYear();
  const areasStr = siteConfig.serviceAreas.join(", ");

  return (
    <footer className="section-pad pb-8">
      <Container>
        <PremiumSectionShell
          tone="soft"
          className="rounded-[2.8rem] p-8 sm:p-10 lg:p-14"
        >
          <span className="gold-divider mb-10 inline-block" aria-hidden="true" />
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
            {/* Brand column */}
            <div>
              <p className="text-lg font-bold tracking-[0.08em] text-foreground">
                MAHANA
              </p>
              <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                {tFooter("description", { areas: areasStr })}
              </p>
              <div className="mt-6">
                <WhatsAppButton
                  label={tFooter("ctaButton")}
                />
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="eyebrow-label mb-5">{tFooter("quickLinks")}</p>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-col gap-2.5">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      >
                        {tNav(item.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact & Social */}
            <div>
              <p className="eyebrow-label mb-5">{tFooter("contact")}</p>
              <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
                <li>{tFooter("hours", { hours: siteConfig.responseHours })}</li>
                <li>{tFooter("coverage", { areas: areasStr })}</li>
                <li>{siteConfig.email}</li>
              </ul>

              <p className="eyebrow-label mb-4 mt-8">{tFooter("social")}</p>
              <div className="flex gap-3">
                {Object.entries(siteConfig.socialLinks).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border/60 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/70 transition-all duration-200 hover:border-primary/40 hover:bg-white hover:text-foreground"
                    aria-label={name}
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-border/50 pt-6">
            <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
              <p>{tFooter("copyright", { year: currentYear })}</p>
              <p>{tFooter("locale", { locale: locale.toUpperCase() })}</p>
            </div>
          </div>
        </PremiumSectionShell>
      </Container>
    </footer>
  );
}
