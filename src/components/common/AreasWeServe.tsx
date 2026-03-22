import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { cityLandingPages } from "@/data/cityLandingPages";

import { SectionHeading } from "./SectionHeading";

type AreasWeServeProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function AreasWeServe({
  eyebrow,
  title,
  description,
}: AreasWeServeProps) {
  const t = useTranslations("areasSection");
  const tCommon = useTranslations("common");

  return (
    <section className="section-pad">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-3 2xl:grid-cols-5">
          {cityLandingPages.map((page, index) => (
            <PremiumSectionShell
              key={page.slug}
              tone={index === 1 || index === 3 ? "rose" : "soft"}
              className="panel-hover h-full rounded-[2rem] p-5 sm:p-6"
            >
              <p className="eyebrow-label mb-4">{t("coverageLabel")}</p>
              <h3 className="font-serif text-[1.85rem] leading-tight text-foreground">
                <Link
                  href={`/${page.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {page.city}
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-[0.98rem]">
                {t(`cities.${page.key}.copy`)}
              </p>
              <Link
                href={`/${page.slug}`}
                className="mt-5 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                {tCommon("learnMore")}
              </Link>
            </PremiumSectionShell>
          ))}
        </div>
      </Container>
    </section>
  );
}
