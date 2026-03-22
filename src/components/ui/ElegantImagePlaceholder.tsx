import { EditorialImage } from "@/components/ui/EditorialImage";
import { cn } from "@/lib/utils";

type ElegantImagePlaceholderProps = {
  alt: string;
  label: string;
  title: string;
  note?: string;
  ratio?: "portrait" | "landscape" | "wide" | "square" | "tall";
  src?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

export function ElegantImagePlaceholder({
  alt,
  label,
  title,
  note,
  ratio = "landscape",
  src,
  className,
  imageClassName,
  sizes,
}: ElegantImagePlaceholderProps) {
  return (
    <EditorialImage
      alt={alt}
      src={src}
      label={label}
      ratio={ratio}
      className={className}
      imageClassName={imageClassName}
      sizes={sizes}
      overlay={
        <div className="image-frost absolute inset-x-4 bottom-4 rounded-[1.5rem] px-5 py-4">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-primary">
            {label}
          </p>
          <p className="mt-2 font-serif text-xl leading-tight text-foreground">{title}</p>
          {note ? (
            <p
              className={cn(
                "mt-2 text-sm leading-6 text-foreground/72",
                ratio === "square" && "max-w-[18rem]",
              )}
            >
              {note}
            </p>
          ) : null}
        </div>
      }
    />
  );
}
