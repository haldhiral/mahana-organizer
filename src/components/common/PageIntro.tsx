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
    <section className="page-pad pb-14 sm:pb-18">
      <Container>
        <PremiumSectionShell
          tone="soft"
          className="hero-mesh lg:grid lg:grid-cols-[1.28fr_0.72fr] lg:items-start lg:gap-14"
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
          {aside ? <div className="mt-8 lg:mt-2 lg:pl-4">{aside}</div> : null}
        </PremiumSectionShell>
      </Container>
    </section>
  );
}
