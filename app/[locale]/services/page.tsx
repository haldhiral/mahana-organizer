import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { AreasWeServe } from "@/components/common/AreasWeServe";
import { CTASection } from "@/components/common/CTASection";
import { PageIntro } from "@/components/common/PageIntro";
import { SectionHeading } from "@/components/common/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { getWeddingOfferings } from "@/data/offerings";
import { Link } from "@/i18n/navigation";
import { isValidLocale } from "@/i18n/routing";
import type { AppLocale } from "@/i18n/routing";
import { buildMetadata, type BreadcrumbItem } from "@/lib/seo";
import { buildBreadcrumbSchema, buildServiceSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata.services" });

  return buildMetadata({
    locale,
    pathname: "/services",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <ServicesPageContent locale={locale} />;
}

function ServicesPageContent({ locale }: { locale: AppLocale }) {
  const offerings = getWeddingOfferings(locale);
  const t = useTranslations("servicesPage");
  const tNav = useTranslations("nav");
  const tMeta = useTranslations("metadata.services");

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: tNav("home"), pathname: "/" },
    { name: tNav("services"), pathname: "/services" },
  ];

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema({ locale, items: breadcrumbItems }),
          buildServiceSchema({
            locale,
            name: tNav("services"),
            description: tMeta("description"),
            pathname: "/services",
          }),
        ]}
      />

      <PageIntro
        breadcrumbItems={[
          { href: "/", label: tNav("home") },
          { href: "/services", label: tNav("services") },
        ]}
        eyebrow={t("intro.eyebrow")}
        title={t("intro.title")}
        description={t("intro.description")}
        aside={
          <PremiumSectionShell tone="rose" className="rounded-[2rem] p-5 sm:p-6">
            <p className="font-serif text-[2rem] leading-tight text-foreground">
              {t("snapshot.title")}
            </p>
          </PremiumSectionShell>
        }
      />

      <section className="section-pad pt-0">
        <Container>
          <ServiceCards detailed />
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[0.86fr_1.14fr] lg:gap-5">
            <PremiumSectionShell tone="soft" className="rounded-[2rem] p-5 sm:p-8">
              <p className="eyebrow-label mb-4">{t("consultation.title")}</p>
              <p className="font-serif text-[2rem] leading-tight text-foreground">
                {t("coverage.title")}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {t("coverage.body")}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {offerings.serviceSummaries.map((item) => (
                  <Badge key={item.id}>{item.title}</Badge>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/packages"
                  className={buttonStyles({ className: "w-full sm:w-auto" })}
                >
                  {locale === "id" ? "Lihat detail paket" : "View package details"}
                </Link>
              </div>
            </PremiumSectionShell>

            <div>
              <SectionHeading
                eyebrow={t("process.eyebrow")}
                title={t("process.title")}
                description={t("process.description")}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-3 lg:gap-5">
                {["discover", "structure", "deliver"].map((item, index) => (
                  <PremiumSectionShell
                    key={item}
                    tone={index === 1 ? "rose" : "soft"}
                    className="panel-hover rounded-[2rem] p-5 sm:p-6"
                  >
                    <h3 className="font-serif text-2xl text-foreground">
                      {t(`process.items.${item}.title`)}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                      {t(`process.items.${item}.body`)}
                    </p>
                  </PremiumSectionShell>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <PremiumSectionShell tone="rose" className="rounded-[2.4rem] p-5 sm:p-8">
            <SectionHeading
              eyebrow={locale === "id" ? "Ringkasan layanan" : "Service snapshot"}
              title={t("consultation.title")}
              description={t("consultation.body")}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
              {offerings.serviceSummaries.map((item) => (
                <div
                  key={item.id}
                  className="surface-card rounded-[1.6rem] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    {item.badge}
                  </p>
                  <p className="mt-3 font-serif text-[1.6rem] leading-tight text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </PremiumSectionShell>
        </Container>
      </section>

      <AreasWeServe
        eyebrow={t("areasSection.eyebrow")}
        title={t("areasSection.title")}
        description={t("areasSection.description")}
      />

      <CTASection
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
      />
    </>
  );
}
