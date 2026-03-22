import { useLocale, useTranslations } from "next-intl";

import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ElegantImagePlaceholder } from "@/components/ui/ElegantImagePlaceholder";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { getWeddingOfferings } from "@/data/offerings";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

export function HeroSection() {
  const locale = useLocale() as AppLocale;
  const offerings = getWeddingOfferings(locale);
  const t = useTranslations("home.hero");

  return (
    <section className="page-pad overflow-hidden pb-16 pt-32 sm:pb-22">
      <Container>
        <PremiumSectionShell
          tone="soft"
          className="hero-mesh overflow-hidden rounded-[3rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14"
        >
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div className="animate-fade-up">
              <Badge className="mb-5">{t("eyebrow")}</Badge>
              <h1 className="font-serif text-[2.6rem] leading-[0.96] tracking-[-0.01em] text-balance text-foreground sm:text-[4.2rem] lg:text-[5.2rem]">
                {t("title")}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {t("description", {
                  areas: siteConfig.serviceAreas.join(", "),
                })}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link href="/contact" className={buttonStyles({ size: "lg" })}>
                  {t("primaryCta")}
                </Link>
                <WhatsAppButton label={t("secondaryCta")} variant="outline" size="lg" />
              </div>

              <div className="relative mt-8 overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/72 p-5 shadow-[0_18px_40px_rgba(80,59,43,0.08)]">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-champagne/20 blur-2xl" />
                <p className="font-serif text-2xl leading-tight text-foreground">
                  {t("highlightTitle")}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {t("highlightBody")}
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["planning", "coordination", "coverage"].map((item) => (
                  <div
                    key={item}
                    className="glass-panel rounded-[1.5rem] border border-white/60 px-4 py-4 text-center text-sm leading-6 text-foreground/82"
                  >
                    <span className="mb-1 block text-xs text-primary/60">◆</span>
                    {t(`stats.${item}`)}
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up [animation-delay:150ms] lg:justify-self-end">
              <div className="grid gap-4 lg:grid-cols-[1.04fr_0.96fr]">
                <ElegantImagePlaceholder
                  alt={t("imageLabel")}
                  src={offerings.images.hero}
                  label={offerings.placeholderLabels.hero}
                  title={offerings.packagePreviews[1]?.badge ?? ""}
                  note={offerings.packagePreviews[1]?.summary}
                  ratio="portrait"
                  className="lg:row-span-2"
                  sizes="(min-width: 1280px) 28vw, (min-width: 1024px) 38vw, 100vw"
                />
                <div className="space-y-4">
                  {offerings.packagePreviews.slice(0, 2).map((preview) => (
                    <div
                      key={preview.id}
                      className="luxury-card rounded-[1.8rem] p-5 transition-shadow duration-300 hover:shadow-[0_20px_44px_rgba(80,59,43,0.12)]"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                        {preview.badge}
                      </p>
                      <p className="mt-3 font-serif text-2xl leading-tight text-foreground">
                        {preview.title}
                      </p>
                      <p className="mt-2 text-sm font-medium text-foreground/82">
                        {preview.price}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {preview.highlights[0]}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="section-shell rounded-[1.8rem] p-5 lg:col-start-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    {t("coverageLabel")}
                  </p>
                  <p className="mt-3 font-serif text-[1.7rem] leading-tight text-foreground">
                    {siteConfig.serviceAreas.join(" · ")}
                  </p>
                  <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
                    {offerings.packagePreviews.map((preview) => (
                      <li key={preview.id} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{preview.badge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </PremiumSectionShell>
      </Container>
    </section>
  );
}
