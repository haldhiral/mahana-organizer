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
              className="p-0 transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(80,59,43,0.08)]"
            >
              <details className="rounded-[2rem] p-6 open:bg-white/30">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left transition-colors duration-200">
                  <span className="text-lg font-medium leading-7 text-foreground">
                    {item.question}
                  </span>
                  <span className="accordion-icon mt-0.5 shrink-0">+</span>
                </summary>
                <span className="gold-divider mt-5 inline-block" aria-hidden="true" />
                <p className="mt-4 max-w-3xl pr-10 text-sm leading-7 text-muted-foreground sm:text-base">
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
