import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { AreasWeServe } from "@/components/common/AreasWeServe";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { PageIntro } from "@/components/common/PageIntro";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getWeddingOfferings } from "@/data/offerings";
import {
  getMailtoUrl,
  getTelUrl,
  getWhatsAppUrl,
  siteConfig,
} from "@/config/site";
import { isValidLocale } from "@/i18n/routing";
import type { AppLocale } from "@/i18n/routing";
import { buildMetadata, type BreadcrumbItem } from "@/lib/seo";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/ui/icons";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata.contact" });

  return buildMetadata({
    locale,
    pathname: "/contact",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <ContactPageContent locale={locale} />;
}

function ContactPageContent({ locale }: { locale: AppLocale }) {
  const offerings = getWeddingOfferings(locale);
  const t = useTranslations("contactPage");
  const tNav = useTranslations("nav");
  const faqItems = offerings.faq.slice(1);
  const touchpoints = [
    { key: "whatsapp", icon: PhoneIcon },
    { key: "email", icon: MailIcon },
    { key: "hours", icon: ClockIcon },
    { key: "coverage", icon: MapPinIcon },
  ] as const;

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: tNav("home"), pathname: "/" },
    { name: tNav("contact"), pathname: "/contact" },
  ];

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema({ locale, items: breadcrumbItems }),
          buildFaqSchema(faqItems),
        ]}
      />

      <PageIntro
        breadcrumbItems={[
          { href: "/", label: tNav("home") },
          { href: "/contact", label: tNav("contact") },
        ]}
        eyebrow={t("intro.eyebrow")}
        title={t("intro.title")}
        description={t("intro.description")}
        aside={
          <PremiumSectionShell tone="rose" className="rounded-[2rem] p-5 sm:p-6">
            <p className="font-serif text-2xl text-foreground">
              {t("touchpoints.whatsapp.title")}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {t("touchpoints.whatsapp.body")}
            </p>
            <div className="mt-5">
              <WhatsAppButton fullWidth />
            </div>
          </PremiumSectionShell>
        }
      />

      <section className="section-pad pt-0">
        <Container>
          <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {touchpoints.map(({ key: item, icon: Icon }, index) => (
              <PremiumSectionShell
                key={item}
                tone={index === 0 ? "rose" : "soft"}
                className="panel-hover rounded-[2rem] p-5 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="icon-chip h-10 w-10 shrink-0">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h2 className="font-serif text-2xl text-foreground">
                    {t(`touchpoints.${item}.title`)}
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {t(`touchpoints.${item}.body`)}
                </p>
                {item === "whatsapp" ? (
                  <div className="mt-4 space-y-3">
                    <a
                      href={getWhatsAppUrl(locale)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                    <a
                      href={getTelUrl()}
                      className="inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
                    >
                      {siteConfig.phoneNumber}
                    </a>
                  </div>
                ) : null}
                {item === "email" ? (
                  <a
                    href={getMailtoUrl()}
                    className="mt-4 block break-all text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                ) : null}
                {item === "hours" ? (
                  <p className="mt-4 text-sm font-medium text-foreground">
                    {siteConfig.responseHours}
                  </p>
                ) : null}
                {item === "coverage" ? (
                  <p className="mt-4 text-sm font-medium text-foreground">
                    {siteConfig.serviceAreas.join(", ")}
                  </p>
                ) : null}
              </PremiumSectionShell>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:gap-8">
            <PremiumSectionShell tone="soft" className="rounded-[2.2rem] p-5 sm:p-8">
              <p className="eyebrow-label mb-4">{t("form.eyebrow")}</p>
              <h2 className="font-serif text-[2rem] leading-tight text-foreground">
                {t("form.title")}
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {t("form.description")}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={getWhatsAppUrl(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-card inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <PhoneIcon className="h-4 w-4 text-primary" />
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={getMailtoUrl()}
                  className="surface-card inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <MailIcon className="h-4 w-4 text-primary" />
                  {siteConfig.email}
                </a>
              </div>
              <ul className="mt-8 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                {offerings.contactHighlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </PremiumSectionShell>

            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <PremiumSectionShell tone="rose" className="rounded-[2.4rem] p-5 sm:p-8">
            <p className="eyebrow-label mb-4">{t("response.eyebrow")}</p>
            <h2 className="font-serif text-[2.35rem] leading-tight text-balance text-foreground">
              {t("response.title")}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
              {t("response.description")}
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3 lg:gap-5">
              {["review", "followUp", "consultation"].map((item) => (
                <div
                  key={item}
                  className="surface-card rounded-[1.6rem] p-5"
                >
                  <h3 className="font-serif text-2xl text-foreground">
                    {t(`response.items.${item}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {t(`response.items.${item}.body`)}
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

      <FAQAccordion
        eyebrow={t("faq.eyebrow")}
        title={t("faq.title")}
        description={t("faq.description")}
        items={faqItems}
      />
    </>
  );
}
