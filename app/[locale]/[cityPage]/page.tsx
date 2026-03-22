import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/common/CTASection";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { PageIntro } from "@/components/common/PageIntro";
import { SectionHeading } from "@/components/common/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import {
  cityLandingPages,
  getCityLandingPage,
} from "@/data/cityLandingPages";
import { Link } from "@/i18n/navigation";
import { isValidLocale } from "@/i18n/routing";
import type { AppLocale } from "@/i18n/routing";
import { buildMetadata, type BreadcrumbItem } from "@/lib/seo";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
} from "@/lib/schema";

type PageProps = {
  params: Promise<{ locale: string; cityPage: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return cityLandingPages.map((page) => ({ cityPage: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, cityPage } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const page = getCityLandingPage(cityPage);

  if (!page) {
    notFound();
  }

  return buildMetadata({
    locale,
    pathname: `/${page.slug}`,
    title: page.metadataTitle,
    description: page.content.metadataDescription,
    keywords: [
      `wedding organizer ${page.city.toLowerCase()}`,
      `jasa wedding organizer ${page.city.toLowerCase()}`,
      `wedding planner ${page.city.toLowerCase()}`,
      `mahana organizer ${page.city.toLowerCase()}`,
      "mahana organizer",
    ],
  });
}

export default async function CityLandingPage({ params }: PageProps) {
  const { locale, cityPage } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const page = getCityLandingPage(cityPage);

  if (!page) {
    notFound();
  }

  setRequestLocale(locale);

  return <CityLandingPageContent locale={locale} cityPage={page.slug} />;
}

function CityLandingPageContent({
  locale,
  cityPage,
}: {
  locale: AppLocale;
  cityPage: string;
}) {
  const page = getCityLandingPage(cityPage);
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");

  if (!page) {
    notFound();
  }

  const content = page.content;
  const pageLabel = page.metadataTitle.replace(" | Mahana Organizer", "");
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: tNav("home"), pathname: "/" },
    { name: pageLabel, pathname: `/${page.slug}` },
  ];
  const resourceLinks = [
    {
      href: "/services",
      label: tNav("services"),
      body:
        locale === "id"
          ? `Pelajari format support Mahana Organizer untuk vendor coordination, timeline control, dan consultation planning di ${page.city}.`
          : `Review how Mahana Organizer structures vendor coordination, timeline control, and planning consultation for weddings in ${page.city}.`,
    },
    {
      href: "/packages",
      label: tNav("packages"),
      body:
        locale === "id"
          ? "Bandingkan paket wedding organizer dan planner yang paling cocok untuk skala acara, venue, dan kebutuhan keluarga Anda."
          : "Compare the wedding organizer and planning packages that best fit your event scale, venue, and family needs.",
    },
    {
      href: "/portfolio",
      label: tNav("portfolio"),
      body:
        locale === "id"
          ? "Lihat referensi pernikahan Mahana Organizer untuk ballroom, garden, intimate wedding, dan acara keluarga yang tertata."
          : "Browse Mahana Organizer wedding references across ballroom, garden, intimate, and family-centered celebrations.",
    },
    {
      href: "/testimonials",
      label: tNav("testimonials"),
      body:
        locale === "id"
          ? "Baca pengalaman pasangan yang merasakan komunikasi tenang, eksekusi rapi, dan guest flow yang lebih nyaman bersama tim kami."
          : "Read how couples describe calmer communication, cleaner execution, and a smoother guest experience with our team.",
    },
    {
      href: "/contact",
      label: tNav("contact"),
      body:
        locale === "id"
          ? `Mulai konsultasi untuk membahas tanggal, venue, dan support Mahana Organizer yang paling relevan untuk wedding di ${page.city}.`
          : `Start a consultation to discuss your date, venue, and the Mahana Organizer support that best fits a wedding in ${page.city}.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema({ locale, items: breadcrumbItems }),
          buildLocalBusinessSchema({
            locale,
            description: content.metadataDescription,
            pathname: `/${page.slug}`,
            areaServed: [page.city],
          }),
          buildServiceSchema({
            locale,
            name: pageLabel,
            description: content.metadataDescription,
            pathname: `/${page.slug}`,
            areaServed: [page.city],
          }),
          buildFaqSchema(content.faq.items),
        ]}
      />

      <PageIntro
        breadcrumbItems={[
          { href: "/", label: tNav("home") },
          { href: `/${page.slug}`, label: pageLabel },
        ]}
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        aside={
          <PremiumSectionShell tone="rose" className="rounded-[2rem] p-5 sm:p-6">
            <p className="eyebrow-label mb-4">{content.hero.snapshotLabel}</p>
            <p className="font-serif text-[1.95rem] leading-tight text-foreground">
              {content.hero.snapshotTitle}
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              {content.hero.snapshotBody}
            </p>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {content.hero.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className={buttonStyles({ className: "w-full sm:w-auto" })}
              >
                {tCommon("consultationCta")}
              </Link>
              <Link
                href="/services"
                className={buttonStyles({
                  variant: "outline",
                  className: "w-full sm:w-auto",
                })}
              >
                {tNav("services")}
              </Link>
            </div>
          </PremiumSectionShell>
        }
      />

      <section className="section-pad pt-0">
        <Container>
          <SectionHeading
            eyebrow={content.whyChoose.eyebrow}
            title={content.whyChoose.title}
            description={content.whyChoose.description}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:gap-5">
            {content.whyChoose.items.map((item, index) => (
              <PremiumSectionShell
                key={item.title}
                tone={index === 1 ? "rose" : "soft"}
                className="panel-hover rounded-[2rem] p-5 sm:p-6"
              >
                <h2 className="font-serif text-2xl text-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {item.body}
                </p>
              </PremiumSectionShell>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:gap-6">
            <PremiumSectionShell tone="soft" className="rounded-[2.3rem] p-5 sm:p-8">
              <p className="eyebrow-label mb-4">{content.coverage.eyebrow}</p>
              <h2 className="font-serif text-[2rem] leading-tight text-foreground">
                {content.coverage.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {content.coverage.description}
              </p>
              <div className="mt-8 grid gap-3">
                {content.coverage.points.map((item) => (
                  <div key={item} className="surface-card rounded-[1.6rem] p-4">
                    <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </PremiumSectionShell>

            <div>
              <SectionHeading
                eyebrow={content.venueContext.eyebrow}
                title={content.venueContext.title}
                description={content.venueContext.description}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-3 lg:gap-5">
                {content.venueContext.items.map((item, index) => (
                  <PremiumSectionShell
                    key={item.title}
                    tone={index === 1 ? "rose" : "soft"}
                    className="panel-hover rounded-[2rem] p-5 sm:p-6"
                  >
                    <h2 className="font-serif text-2xl text-foreground">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                      {item.body}
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
              eyebrow={content.resources.eyebrow}
              title={content.resources.title}
              description={content.resources.description}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5 xl:gap-5">
              {resourceLinks.map((item, index) => (
                <PremiumSectionShell
                  key={item.href}
                  tone={index === 4 ? "champagne" : "soft"}
                  className="panel-hover rounded-[1.8rem] p-0"
                >
                  <Link href={item.href} className="block h-full p-5 sm:p-6">
                    <h2 className="font-serif text-[1.6rem] leading-tight text-foreground">
                      {item.label}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.body}
                    </p>
                    <span className="mt-6 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary/80">
                      {tCommon("learnMore")}
                    </span>
                  </Link>
                </PremiumSectionShell>
              ))}
            </div>
          </PremiumSectionShell>
        </Container>
      </section>

      <FAQAccordion
        eyebrow={content.faq.eyebrow}
        title={content.faq.title}
        description={content.faq.description}
        items={content.faq.items}
      />

      <CTASection
        eyebrow={content.cta.eyebrow}
        title={content.cta.title}
        description={content.cta.description}
      />
    </>
  );
}
