import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";

import { Breadcrumbs } from "./Breadcrumbs";
import { SectionHeading } from "./SectionHeading";

type PageIntroProps = {
  breadcrumbItems: Array<{ href: string; label: string }>;
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageIntro({
  breadcrumbItems,
  eyebrow,
  title,
  description,
  aside,
}: PageIntroProps) {
  return (
    <section className="page-pad pb-12 sm:pb-16">
      <Container>
        <PremiumSectionShell
          tone="soft"
          className="hero-mesh rounded-[2.6rem] px-5 py-6 sm:px-7 sm:py-8 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-10 lg:px-10 lg:py-10"
        >
          <div>
            <Breadcrumbs items={breadcrumbItems} />
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              className="mt-5"
            />
          </div>
          {aside ? <div className="mt-8 lg:mt-2 lg:pl-2">{aside}</div> : null}
        </PremiumSectionShell>
      </Container>
    </section>
  );
}
