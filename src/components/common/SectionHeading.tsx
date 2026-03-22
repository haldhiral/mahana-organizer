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
      <h2 className="font-serif text-[2.15rem] leading-[1.06] text-balance text-foreground sm:text-[2.7rem] lg:text-[3.2rem]">
        {title}
      </h2>
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
