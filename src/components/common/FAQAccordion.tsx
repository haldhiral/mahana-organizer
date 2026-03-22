import { Container } from "@/components/ui/Container";
import { PremiumSectionShell } from "@/components/ui/PremiumSectionShell";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

type FAQAccordionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: Array<{ question: string; answer: string }>;
  className?: string;
};

export function FAQAccordion({
  eyebrow,
  title,
  description,
  items,
  className,
}: FAQAccordionProps) {
  return (
    <section className={cn("section-pad", className)}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid gap-4">
          {items.map((item) => (
            <PremiumSectionShell
              key={item.question}
              className="overflow-hidden p-0 transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(80,59,43,0.08)]"
            >
              <details className="rounded-[2rem] bg-white/24 p-5 transition-colors duration-300 open:bg-white/40 sm:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left transition-colors duration-200 sm:gap-6">
                  <span className="pr-2 text-base font-medium leading-7 text-foreground sm:text-lg">
                    {item.question}
                  </span>
                  <span className="accordion-icon mt-0.5 shrink-0">+</span>
                </summary>
                <span className="gold-divider mt-5 inline-block" aria-hidden="true" />
                <p className="mt-4 max-w-3xl pb-1 text-sm leading-7 text-muted-foreground sm:pr-10 sm:text-base">
                  {item.answer}
                </p>
              </details>
            </PremiumSectionShell>
          ))}
        </div>
      </Container>
    </section>
  );
}
