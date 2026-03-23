import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: HeadingTag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-[44rem]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <>
          <p className="eyebrow-label mb-3">
            {eyebrow}
          </p>
          <span className="gold-divider mb-5 inline-block" aria-hidden="true" />
        </>
      ) : null}
      <HeadingTag className="font-serif text-[2.25rem] leading-[1.05] tracking-[-0.015em] text-balance text-foreground sm:text-[2.85rem] lg:text-[3.4rem]">
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-[40rem] text-[0.98rem] leading-8 text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
