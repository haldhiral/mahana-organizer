import { useTranslations } from "next-intl";

import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { LuxuryHeroStats } from "@/components/sections/LuxuryHeroStats";
import { Link } from "@/i18n/navigation";

export function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="luxury-hero">
      <div className="relative z-10 flex flex-col items-center px-4 pb-16 pt-32 text-center sm:px-6 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">
        <Container className="flex flex-col items-center">
          {/* Availability badge */}
          <div className="animate-fade-up">
            <AvailabilityBadge />
          </div>

          {/* Kicker */}
          <p className="animate-fade-up mt-6 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-hero-muted [animation-delay:80ms] sm:text-[0.78rem]">
            {t("kicker")}
          </p>

          {/* Headline */}
          <h1 className="animate-fade-up mx-auto mt-6 max-w-4xl font-serif text-[2.5rem] leading-[1.04] font-medium tracking-[-0.01em] text-balance text-hero-text [animation-delay:160ms] sm:text-[3.5rem] lg:text-[4.5rem]">
            {t("title")}
          </h1>

          {/* Description */}
          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-8 text-hero-muted [animation-delay:240ms] sm:text-lg sm:leading-8">
            {t("description")}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up mt-10 flex flex-col gap-3 [animation-delay:320ms] sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className={buttonStyles({
                size: "lg",
                className:
                  "w-full border-hero-accent/50 bg-[linear-gradient(135deg,var(--hero-accent)_0%,#b8956e_100%)] text-[#1a1210] shadow-[0_20px_50px_rgba(212,184,150,0.18)] hover:border-hero-accent/70 hover:shadow-[0_24px_60px_rgba(212,184,150,0.24)] sm:w-auto",
              })}
            >
              {t("primaryCta")}
            </Link>
            <WhatsAppButton
              label={t("secondaryCta")}
              variant="outline"
              size="lg"
              className="w-full border-hero-border bg-transparent text-hero-text hover:bg-hero-bg-subtle/80 sm:w-auto"
            />
          </div>

          {/* Stats row */}
          <div className="animate-fade-up mt-16 w-full max-w-3xl [animation-delay:400ms] sm:mt-20">
            <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-hero-border to-transparent" />
            <LuxuryHeroStats />
          </div>
        </Container>
      </div>
    </section>
  );
}
