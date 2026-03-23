import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/common/CTASection";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { PageIntro } from "@/components/common/PageIntro";
import { SectionHeading } from "@/components/common/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ElegantImagePlaceholder } from "@/components/ui/ElegantImagePlaceholder";
import { CheckIcon, PlusIcon, SparklesIcon } from "@/components/ui/icons";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getWeddingOfferings } from "@/data/offerings";
import { Link } from "@/i18n/navigation";
import { isValidLocale } from "@/i18n/routing";
import type { AppLocale } from "@/i18n/routing";
import { buildMetadata, type BreadcrumbItem } from "@/lib/seo";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata.packages" });

  return buildMetadata({
    locale,
    pathname: "/packages",
    title: t("title"),
    description: t("description"),
  });
}

export default async function PackagesPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <PackagesPageContent locale={locale} />;
}

function PackagesPageContent({ locale }: { locale: AppLocale }) {
  const offerings = getWeddingOfferings(locale);
  const tPage = useTranslations("packagesPage");
  const tNav = useTranslations("nav");
  const featuredLabel = tPage("featuredLabel");

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: tNav("home"), pathname: "/" },
    { name: tNav("packages"), pathname: "/packages" },
  ];

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema({ locale, items: breadcrumbItems }),
          buildFaqSchema(offerings.faq),
        ]}
      />

      <PageIntro
        breadcrumbItems={[
          { href: "/", label: tNav("home") },
          { href: "/packages", label: tNav("packages") },
        ]}
        eyebrow={tPage("intro.eyebrow")}
        title={tPage("intro.title")}
        description={tPage("intro.description")}
        aside={
          <PremiumSectionShell tone="rose" className="rounded-[2rem] p-6">
            <p className="eyebrow-label mb-4">{tPage("customization.eyebrow")}</p>
            <p className="font-serif text-[1.9rem] leading-tight text-foreground">
              {tPage("customization.title")}
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              {tPage("customization.description")}
            </p>
          </PremiumSectionShell>
        }
      />

      <section className="section-pad pt-0">
        <Container>
          <SectionHeading
            eyebrow={offerings.onTheDay.eyebrow}
            title={offerings.onTheDay.title}
            description={offerings.onTheDay.description}
          />
          <PremiumSectionShell tone="champagne" className="mt-8 rounded-[2rem] p-5 sm:p-6">
            <p className="eyebrow-label mb-4">{tPage("customization.eyebrow")}</p>
            <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              {tPage("comparisonNote")}
            </p>
          </PremiumSectionShell>
          <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:gap-5">
            {offerings.onTheDay.cards.map((card, index) => (
              <PremiumSectionShell
                key={card.id}
                tone={card.featured ? "rose" : "soft"}
                className="panel-hover flex h-full flex-col rounded-[2.2rem] p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge>{card.name}</Badge>
                    {card.featured ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-soft-bg)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary">
                        <SparklesIcon className="h-3 w-3" />
                        {featuredLabel}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm font-semibold text-foreground/82">{card.price}</p>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-primary-foreground">
                    {card.tierLabel}
                  </span>
                  <span className="text-sm font-medium text-foreground/78">
                    {card.tierSize}
                  </span>
                </div>

                <ElegantImagePlaceholder
                  alt={card.name}
                  src={card.imageSrc}
                  label={card.imageLabel}
                  title={card.name}
                  note={card.summary}
                  ratio={index === 1 ? "portrait" : "landscape"}
                  className="surface-card mt-5 rounded-[1.8rem]"
                />

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    card.crewLabel,
                    card.durationLabel,
                    card.paxLabel,
                  ].map((item) => (
                    <div
                      key={item}
                      className="surface-card rounded-[1.3rem] px-4 py-3 text-sm leading-6 text-foreground/82"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted-foreground">
                  {card.features.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link href="/contact" className={buttonStyles({ fullWidth: true })}>
                    {locale === "id" ? "Diskusikan paket ini" : "Discuss this package"}
                  </Link>
                </div>
              </PremiumSectionShell>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.76fr_1.24fr] lg:items-start lg:gap-6">
            <ElegantImagePlaceholder
              alt={offerings.planner.title}
              src={offerings.planner.imageSrc}
              label={offerings.placeholderLabels.planner}
              title={offerings.planner.supportWindow}
              note={offerings.planner.personalizedNote}
              ratio="portrait"
              className="h-full"
            />

            <PremiumSectionShell tone="rose" className="rounded-[2.4rem] p-6 sm:p-8">
              <SectionHeading
                eyebrow={offerings.planner.eyebrow}
                title={offerings.planner.title}
                description={offerings.planner.description}
              />

              <div className="mt-6 flex flex-wrap gap-3">
                <Badge>{offerings.planner.price}</Badge>
                <Badge>{offerings.planner.supportWindow}</Badge>
              </div>

              <div className="mt-8 grid gap-4 xl:grid-cols-2 xl:gap-5">
                {offerings.planner.featureGroups.map((group) => (
                  <div
                    key={group.title}
                    className="surface-card rounded-[1.8rem] p-5"
                  >
                    <p className="font-serif text-[1.6rem] leading-tight text-foreground">
                      {group.title}
                    </p>
                    <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {offerings.planner.timelineNotes.map((item) => (
                  <div
                    key={item}
                    className="glass-panel rounded-[1.5rem] px-4 py-4 text-sm leading-6 text-foreground/82"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </PremiumSectionShell>
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <PremiumSectionShell tone="soft" className="rounded-[2.8rem] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
              <div>
                <SectionHeading
                  eyebrow={offerings.exclusive.eyebrow}
                  title={offerings.exclusive.title}
                  description={offerings.exclusive.description}
                />
                <div className="mt-6 flex flex-wrap gap-3">
                  <Badge>{offerings.exclusive.price}</Badge>
                  {offerings.exclusive.categoryLabels.map((label) => (
                    <Badge key={label}>{label}</Badge>
                  ))}
                </div>
                <ElegantImagePlaceholder
                  alt={offerings.exclusive.title}
                  src={offerings.exclusive.imageSrc}
                  label={offerings.placeholderLabels.exclusive}
                  title={offerings.exclusive.categoryLabels.join(" / ")}
                  note={offerings.exclusive.description}
                  ratio="portrait"
                  className="mt-8"
                />
              </div>

              <div className="grid gap-4">
                {offerings.exclusive.sections.map((section, index) => (
                  <details
                    key={section.id}
                    open={index === 0}
                    className="rounded-[1.9rem] border border-border/70 bg-surface/76 p-5 transition-colors duration-200 open:bg-surface-strong/80"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span className="font-serif text-[1.55rem] leading-tight text-foreground sm:text-[1.7rem]">
                        {section.title}
                      </span>
                      <span className="accordion-icon shrink-0">
                        <PlusIcon className="h-4 w-4" />
                      </span>
                    </summary>
                    <span className="gold-divider mt-5 inline-block" aria-hidden="true" />
                    <div className="mt-4 grid gap-5 xl:grid-cols-[0.72fr_1.28fr]">
                      <ElegantImagePlaceholder
                        alt={section.title}
                        src={section.imageSrc}
                        label={section.imageLabel}
                        title={section.title}
                        ratio="square"
                      />
                      <div>
                        <ul className="grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                          {section.details.map((item) => (
                            <li key={item} className="flex gap-3">
                              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        {section.note ? (
                          <p className="mt-4 rounded-[1.4rem] border border-border/70 bg-background px-4 py-4 text-sm leading-7 text-muted-foreground">
                            {section.note}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </details>
                ))}

                <div className="surface-card rounded-[1.8rem] p-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  {offerings.exclusive.organizerInclusion}
                </div>
              </div>
            </div>
          </PremiumSectionShell>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <ElegantImagePlaceholder
              alt={offerings.catering.title}
              src={offerings.catering.imageSrc}
              label={offerings.placeholderLabels.package}
              title={offerings.catering.eyebrow}
              note={offerings.catering.description}
              ratio="landscape"
            />

            <PremiumSectionShell tone="rose" className="rounded-[2.4rem] p-6 sm:p-8">
              <SectionHeading
                eyebrow={offerings.catering.eyebrow}
                title={offerings.catering.title}
                description={offerings.catering.description}
              />
              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                {offerings.catering.note}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className={buttonStyles({ className: "w-full sm:w-auto" })}>
                  {offerings.catering.ctaLabel}
                </Link>
                <WhatsAppButton variant="outline" className="w-full sm:w-auto" />
              </div>
            </PremiumSectionShell>
          </div>
        </Container>
      </section>

      <FAQAccordion
        eyebrow={locale === "id" ? "FAQ paket" : "Package FAQ"}
        title={
          locale === "id"
            ? "Pertanyaan yang paling sering muncul sebelum memilih paket."
            : "The questions couples most often ask before choosing a package."
        }
        description={
          locale === "id"
            ? "Kami menempatkan jawaban ini di halaman paket agar perbandingan dan konsultasi awal terasa lebih jelas."
            : "We keep these answers on the packages page so early comparison and consultation feel clearer."
        }
        items={offerings.faq}
      />

      <CTASection
        eyebrow={tPage("cta.eyebrow")}
        title={tPage("cta.title")}
        description={tPage("cta.description")}
      />
    </>
  );
}
