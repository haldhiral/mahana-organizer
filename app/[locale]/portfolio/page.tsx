import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/common/CTASection";
import { PageIntro } from "@/components/common/PageIntro";
import { JsonLd } from "@/components/seo/JsonLd";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { ElegantImagePlaceholder } from "@/components/ui/ElegantImagePlaceholder";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { portfolioEntries } from "@/data/portfolio";
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

  const t = await getTranslations({ locale, namespace: "metadata.portfolio" });

  return buildMetadata({
    locale,
    pathname: "/portfolio",
    title: t("title"),
    description: t("description"),
  });
}

export default async function PortfolioPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <PortfolioPageContent locale={locale} />;
}

function PortfolioPageContent({ locale }: { locale: AppLocale }) {
  const offerings = getWeddingOfferings(locale);
  const t = useTranslations("portfolioPage");
  const tNav = useTranslations("nav");
  const tTags = useTranslations("taxonomy.tags");
  const featuredEntry = portfolioEntries.find(
    (entry) => entry.id === t("featured.entry"),
  );

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: tNav("home"), pathname: "/" },
    { name: tNav("portfolio"), pathname: "/portfolio" },
  ];

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema({ locale, items: breadcrumbItems })} />

      <PageIntro
        breadcrumbItems={[
          { href: "/", label: tNav("home") },
          { href: "/portfolio", label: tNav("portfolio") },
        ]}
        eyebrow={t("intro.eyebrow")}
        title={t("intro.title")}
        description={t("intro.description")}
      />

      {featuredEntry ? (
        <section className="section-pad pt-0">
          <Container>
            <PremiumSectionShell className="rounded-[2.8rem] p-6 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-8 lg:p-8">
              <ElegantImagePlaceholder
                alt={t(`entries.${featuredEntry.id}.title`)}
                src={featuredEntry.image}
                label={offerings.placeholderLabels.portfolio}
                title={t(`entries.${featuredEntry.id}.title`)}
                note={t("featured.description")}
                ratio="portrait"
              />
              <div className="mt-8 lg:mt-0 lg:self-center">
                <Badge>{t("featured.eyebrow")}</Badge>
                <h2 className="mt-5 font-serif text-[2.6rem] leading-[1.04] text-balance text-foreground">
                  {t("featured.title")}
                </h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {t("featured.description")}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredEntry.tagIds.map((tag) => (
                    <Badge key={tag}>{tTags(tag)}</Badge>
                  ))}
                </div>
              </div>
            </PremiumSectionShell>
          </Container>
        </section>
      ) : null}

      <section className="section-pad">
        <Container>
          <PortfolioGrid />
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
