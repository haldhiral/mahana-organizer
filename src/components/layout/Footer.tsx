import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/ui/Container";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { navigationItems } from "@/config/navigation";
import { getMailtoUrl, getWhatsAppUrl, siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/ui/icons";

type ContactItem = {
  icon: typeof PhoneIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

export function Footer() {
  const locale = useLocale() as AppLocale;
  const tFooter = useTranslations("footer");
  const tNav = useTranslations("nav");
  const currentYear = new Date().getFullYear();
  const areasStr = siteConfig.serviceAreas.join(", ");
  const contactItems: ContactItem[] = [
    {
      icon: PhoneIcon,
      label: tFooter("whatsapp"),
      value: siteConfig.phoneDisplay,
      href: getWhatsAppUrl(locale),
      external: true,
    },
    {
      icon: MailIcon,
      label: tFooter("email"),
      value: siteConfig.email,
      href: getMailtoUrl(),
    },
    {
      icon: ClockIcon,
      label: tFooter("hoursLabel"),
      value: siteConfig.responseHours,
    },
    {
      icon: MapPinIcon,
      label: tFooter("coverageLabel"),
      value: areasStr,
    },
  ];

  return (
    <footer className="section-pad pb-8">
      <Container>
        <PremiumSectionShell tone="soft" className="rounded-[2.8rem] p-6 sm:p-8 lg:p-12">
          <span className="gold-divider mb-10 inline-block" aria-hidden="true" />
          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[1.25fr_0.8fr_1fr]">
            <div>
              <p className="text-lg font-bold tracking-[0.08em] text-foreground">MAHANA</p>
              <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground sm:text-[0.98rem]">
                {tFooter("description", { areas: areasStr })}
              </p>
              <div className="mt-6">
                <WhatsAppButton label={tFooter("ctaButton")} className="w-full sm:w-auto" />
              </div>
            </div>

            <div>
              <p className="eyebrow-label mb-5">{tFooter("quickLinks")}</p>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-col gap-2.5">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="inline-flex rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:bg-surface/72 hover:text-foreground"
                      >
                        {tNav(item.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <p className="eyebrow-label mb-5">{tFooter("contact")}</p>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground sm:text-[0.98rem]">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="icon-chip mt-0.5 h-9 w-9 shrink-0">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground/58">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="mt-1 block break-all text-foreground transition-colors hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="mt-1 block text-foreground">{item.value}</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <p className="eyebrow-label mb-4 mt-8">{tFooter("social")}</p>
              <div className="flex flex-wrap gap-3">
                {Object.entries(siteConfig.socialLinks).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/70 transition-all duration-200 hover:border-primary/40 hover:text-foreground"
                    aria-label={name}
                  >
                    {name}
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground/58">
                  {tFooter("theme")}
                </p>
                <ThemeToggle />
              </div>
            </div>
          </div>

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
