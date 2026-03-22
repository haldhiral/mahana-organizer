import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/common/CTASection";
import { PageIntro } from "@/components/common/PageIntro";
import { SectionHeading } from "@/components/common/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { ElegantImagePlaceholder } from "@/components/ui/ElegantImagePlaceholder";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { getWeddingOfferings } from "@/data/offerings";
import { isValidLocale } from "@/i18n/routing";
import type { AppLocale } from "@/i18n/routing";
import { buildMetadata, type BreadcrumbItem } from "@/lib/seo";
import { buildBreadcrumbSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata.about" });

  return buildMetadata({
    locale,
    pathname: "/about",
    title: t("title"),
    description: t("description"),
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <AboutPageContent locale={locale} />;
}

function AboutPageContent({ locale }: { locale: AppLocale }) {
  const offerings = getWeddingOfferings(locale);
  const t = useTranslations("aboutPage");
  const tNav = useTranslations("nav");

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: tNav("home"), pathname: "/" },
    { name: tNav("about"), pathname: "/about" },
  ];

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema({ locale, items: breadcrumbItems })} />

      <PageIntro
        breadcrumbItems={[
          { href: "/", label: tNav("home") },
          { href: "/about", label: tNav("about") },
        ]}
        eyebrow={t("intro.eyebrow")}
        title={t("intro.title")}
        description={t("intro.description")}
        aside={
          <ElegantImagePlaceholder
            alt={t("mission.title")}
            src="/images/about/founder.png"
            label={offerings.placeholderLabels.hero}
            title={t("mission.title")}
            note={t("mission.body")}
            ratio="portrait"
          />
        }
      />

      <section className="section-pad pt-0">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-5">
            <PremiumSectionShell className="rounded-[2.3rem] p-5 sm:p-8">
              <p className="eyebrow-label mb-4">{t("story.eyebrow")}</p>
              <h2 className="font-serif text-[2.25rem] leading-tight text-foreground sm:text-[2.7rem]">
                {t("story.title")}
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {t("story.body1")}
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {t("story.body2")}
              </p>
            </PremiumSectionShell>

            <div className="grid gap-4 lg:gap-5">
              <PremiumSectionShell tone="rose" className="rounded-[2rem] p-5 sm:p-8">
                <p className="font-serif text-[2rem] leading-tight text-foreground">
                  {t("mission.title")}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {t("mission.body")}
                </p>
              </PremiumSectionShell>
              <PremiumSectionShell className="rounded-[2rem] p-5 sm:p-8">
                <p className="font-serif text-[2rem] leading-tight text-foreground">
                  {t("approach.title")}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {t("approach.body")}
                </p>
              </PremiumSectionShell>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeading
            eyebrow={t("values.eyebrow")}
            title={t("values.title")}
            description={t("values.description")}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {["clarity", "care", "composure", "craft"].map((item, index) => (
              <PremiumSectionShell
                key={item}
                tone={index === 1 ? "rose" : "soft"}
                className="panel-hover rounded-[2rem] p-5 sm:p-6"
              >
                <h3 className="font-serif text-2xl text-foreground">
                  {t(`values.items.${item}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {t(`values.items.${item}.body`)}
                </p>
              </PremiumSectionShell>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeading
            eyebrow={t("trust.eyebrow")}
            title={t("trust.title")}
            description={t("trust.description")}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:gap-5">
            {["communication", "vendor", "onsite"].map((item, index) => (
              <PremiumSectionShell
                key={item}
                tone={index === 1 ? "rose" : "soft"}
                className="panel-hover rounded-[2rem] p-5 sm:p-6"
              >
                <h3 className="font-serif text-2xl text-foreground">
                  {t(`trust.items.${item}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {t(`trust.items.${item}.body`)}
                </p>
              </PremiumSectionShell>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeading
            eyebrow={t("team.eyebrow")}
            title={t("team.title")}
            description={t("team.description")}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:gap-5">
            {["leadPlanner", "coordinationLead", "guestExperience"].map((item, index) => (
              <PremiumSectionShell
                key={item}
                tone={index === 1 ? "rose" : "soft"}
                className="panel-hover rounded-[2rem] p-5 sm:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  {t(`team.items.${item}.role`)}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-foreground">
                  {t(`team.items.${item}.name`)}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {t(`team.items.${item}.body`)}
                </p>
              </PremiumSectionShell>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
      />
    </>
  );
}
