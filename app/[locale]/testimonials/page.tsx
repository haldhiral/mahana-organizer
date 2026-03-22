import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/common/CTASection";
import { PageIntro } from "@/components/common/PageIntro";
import { SectionHeading } from "@/components/common/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { TestimonialCards } from "@/components/sections/TestimonialCards";
import { Container } from "@/components/ui/Container";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
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

  const t = await getTranslations({ locale, namespace: "metadata.testimonials" });

  return buildMetadata({
    locale,
    pathname: "/testimonials",
    title: t("title"),
    description: t("description"),
  });
}

export default async function TestimonialsPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <TestimonialsPageContent locale={locale} />;
}

function TestimonialsPageContent({ locale }: { locale: AppLocale }) {
  const t = useTranslations("testimonialsPage");
  const tNav = useTranslations("nav");

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: tNav("home"), pathname: "/" },
    { name: tNav("testimonials"), pathname: "/testimonials" },
  ];

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema({ locale, items: breadcrumbItems })} />

      <PageIntro
        breadcrumbItems={[
          { href: "/", label: tNav("home") },
          { href: "/testimonials", label: tNav("testimonials") },
        ]}
        eyebrow={t("intro.eyebrow")}
        title={t("intro.title")}
        description={t("intro.description")}
      />

      <section className="section-pad pt-0">
        <Container>
          <TestimonialCards />
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
            {["clarity", "calm", "hospitality"].map((item, index) => (
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

      <CTASection
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
      />
    </>
  );
}
