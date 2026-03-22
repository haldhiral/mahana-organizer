import { useTranslations } from "next-intl";

import { Container } from "@/components/ui/Container";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { siteConfig } from "@/config/site";

import { SectionHeading } from "./SectionHeading";

type AreasWeServeProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const areaKeys = ["jakarta", "bogor", "depok", "bekasi", "tangerang"] as const;

export function AreasWeServe({
  eyebrow,
  title,
  description,
}: AreasWeServeProps) {
  const t = useTranslations("areasSection");

  return (
    <section className="section-pad">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {areaKeys.map((areaKey, index) => (
            <PremiumSectionShell
              key={areaKey}
              tone={index === 1 || index === 3 ? "rose" : "soft"}
              className="panel-hover h-full rounded-[2rem] p-6"
            >
              <p className="eyebrow-label mb-4">
                {t("coverageLabel")}
              </p>
              <h3 className="font-serif text-[2rem] text-foreground">
                {siteConfig.serviceAreas[index]}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {t(`cities.${areaKey}.copy`)}
              </p>
            </PremiumSectionShell>
          ))}
        </div>
      </Container>
    </section>
  );
}

