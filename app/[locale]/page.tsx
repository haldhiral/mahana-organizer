import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { AreasWeServe } from "@/components/common/AreasWeServe";
import { CTASection } from "@/components/common/CTASection";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { HeroSection } from "@/components/sections/HeroSection";
import { PackageCards } from "@/components/sections/PackageCards";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { TestimonialCards } from "@/components/sections/TestimonialCards";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ElegantImagePlaceholder } from "@/components/ui/ElegantImagePlaceholder";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { portfolioEntries } from "@/data/portfolio";
import { getWeddingOfferings } from "@/data/offerings";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { isValidLocale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import {
  buildFaqSchema,
  buildOrganizationSchema,
} from "@/lib/schema";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return buildMetadata({
    locale,
    pathname: "/",
    title: t("title"),
    description: t("description"),
    keywords: [
      "wedding organizer jakarta",
      "wedding organizer bogor",
      "wedding organizer depok",
      "wedding organizer bekasi",
      "wedding organizer tangerang",
      "mahana organizer",
      "wedding planning",
    ],
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <HomePageContent locale={locale} />;
}

function HomePageContent({ locale }: { locale: AppLocale }) {
  const offerings = getWeddingOfferings(locale);
  const tWhyChoose = useTranslations("home.whyChoose");
  const tHome = useTranslations("home");
  const tMeta = useTranslations("metadata.home");
  const tPortfolio = useTranslations("portfolioPage");
  const tTags = useTranslations("taxonomy.tags");
  const faqItems = offerings.faq.slice(0, 4);
  const featuredPortfolio = portfolioEntries.slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          buildOrganizationSchema({
            locale,
            description: tMeta("description"),
          }),
          buildFaqSchema(faqItems),
        ]}
      />

      <HeroSection />

      {/* Transition from dark hero to light content */}
      <div
        className="pointer-events-none h-24 sm:h-32"
        style={{
          background: "linear-gradient(180deg, var(--hero-bg) 0%, var(--background) 100%)",
        }}
      />

      <section className="section-pad pt-0">
        <Container>
          <SectionHeading
            eyebrow={tWhyChoose("eyebrow")}
            title={tWhyChoose("title")}
            description={tWhyChoose("description")}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {["strategy", "taste", "control", "hospitality"].map((item, index) => (
              <PremiumSectionShell
                key={item}
                tone={index === 1 ? "rose" : "soft"}
                className="panel-hover rounded-[2rem] p-6"
              >
                <h3 className="font-serif text-2xl text-foreground">
                  {tWhyChoose(`items.${item}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {tWhyChoose(`items.${item}.body`)}
                </p>
              </PremiumSectionShell>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={tHome("services.eyebrow")}
              title={tHome("services.title")}
              description={tHome("services.description")}
            />
            <Link href="/services" className={buttonStyles({ variant: "outline" })}>
              {tHome("services.cta")}
            </Link>
          </div>
          <ServiceCards />
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={tHome("packages.eyebrow")}
              title={tHome("packages.title")}
              description={tHome("packages.description")}
            />
            <Link href="/packages" className={buttonStyles({ variant: "outline" })}>
              {tHome("packages.cta")}
            </Link>
          </div>
          <PackageCards preview />
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={tHome("portfolio.eyebrow")}
              title={tHome("portfolio.title")}
              description={tHome("portfolio.description")}
            />
            <Link href="/portfolio" className={buttonStyles({ variant: "outline" })}>
              {tHome("portfolio.cta")}
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {featuredPortfolio.map((entry, index) => (
              <article
                key={entry.id}
                className="luxury-card panel-hover overflow-hidden rounded-[2rem]"
              >
                <ElegantImagePlaceholder
                  alt={tPortfolio(`entries.${entry.id}.title`)}
                  src={entry.image}
                  label={offerings.placeholderLabels.portfolio}
                  title={tPortfolio(`entries.${entry.id}.title`)}
                  note={tPortfolio(`entries.${entry.id}.type`)}
                  ratio={index === 1 ? "portrait" : "landscape"}
                  className="rounded-none border-0 bg-transparent p-4 shadow-none"
                />
                <div className="px-6 pb-6">
                  <Badge>{tPortfolio(`entries.${entry.id}.type`)}</Badge>
                  <h3 className="mt-4 font-serif text-2xl text-foreground">
                    {tPortfolio(`entries.${entry.id}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {tPortfolio(`entries.${entry.id}.description`)}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {entry.tagIds.map((tag) => (
                      <Badge key={tag}>{tTags(tag)}</Badge>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={tHome("testimonials.eyebrow")}
              title={tHome("testimonials.title")}
              description={tHome("testimonials.description")}
            />
            <Link href="/testimonials" className={buttonStyles({ variant: "outline" })}>
              {tHome("testimonials.cta")}
            </Link>
          </div>
          <TestimonialCards limit={3} featuredOnly className="lg:grid-cols-3" />
        </Container>
      </section>

      <AreasWeServe
        eyebrow={tHome("areasSection.eyebrow")}
        title={tHome("areasSection.title")}
        description={tHome("areasSection.description")}
      />

      <FAQAccordion
        eyebrow={tHome("faq.eyebrow")}
        title={tHome("faq.title")}
        description={tHome("faq.description")}
        items={faqItems}
      />

      <CTASection
        eyebrow={tHome("finalCta.eyebrow")}
        title={tHome("finalCta.title")}
        description={tHome("finalCta.description")}
      />
    </>
  );
}
