import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { buttonStyles } from "@/components/ui/Button";
import { MapPinIcon, SparklesIcon, WhatsAppIcon } from "@/components/ui/icons";

type CTASectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  primaryHref = "/contact",
  primaryLabel,
  secondaryLabel,
}: CTASectionProps) {
  const tCommon = useTranslations("common");
  const trustPoints = [
    {
      icon: SparklesIcon,
      label: tCommon("consultationCta"),
    },
    {
      icon: WhatsAppIcon,
      label: tCommon("whatsappCta"),
    },
    {
      icon: MapPinIcon,
      label: siteConfig.serviceAreas.join(" / "),
    },
  ];

  return (
    <section className="section-pad">
      <Container>
        <PremiumSectionShell
          tone="rose"
          className="hero-mesh overflow-hidden rounded-[2.8rem] px-6 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-16"
        >
          <div className="relative max-w-3xl">
            <div className="absolute -left-20 -top-4 h-32 w-32 rounded-full bg-champagne/20 blur-3xl" />
            <div className="absolute right-0 top-10 h-28 w-28 rounded-full bg-rose/28 blur-3xl" />
            <p className="eyebrow-label mb-4">{eyebrow}</p>
            <h2 className="font-serif text-[2.25rem] leading-[1.03] tracking-[-0.015em] text-balance sm:text-[3.15rem] lg:text-[3.6rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link href={primaryHref} className={buttonStyles({ className: "w-full sm:w-auto" })}>
                {primaryLabel ?? tCommon("consultationCta")}
              </Link>
              <WhatsAppButton label={secondaryLabel} className="w-full sm:w-auto" />
            </div>
            <div className="gold-divider mt-9" />
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {trustPoints.map((item) => {
                const Icon = item.icon;

                return (
                <span
                  key={item.label}
                  className="surface-card inline-flex min-w-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm text-foreground/78"
                >
                  <span className="icon-chip h-7 w-7 shrink-0">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {item.label}
                </span>
                );
              })}
            </div>
          </div>
        </PremiumSectionShell>
      </Container>
    </section>
  );
}
