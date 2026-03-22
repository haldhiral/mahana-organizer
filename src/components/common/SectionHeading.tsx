import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
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
      <h2 className="font-serif text-[2.45rem] leading-[1.06] text-balance text-foreground sm:text-[3rem] lg:text-[3.3rem]">
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-8 text-muted-foreground sm:text-lg", align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

