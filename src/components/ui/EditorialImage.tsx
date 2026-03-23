import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type EditorialImageRatio = "portrait" | "landscape" | "wide" | "square" | "tall";

type EditorialImageProps = {
  alt: string;
  src?: string;
  label?: string;
  caption?: string;
  ratio?: EditorialImageRatio;
  priority?: boolean;
  variant?: "default" | "bare";
  className?: string;
  imageClassName?: string;
  sizes?: string;
  overlay?: ReactNode;
};

const ratioClasses: Record<EditorialImageRatio, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
  tall: "aspect-[3/4]",
};

export function EditorialImage({
  alt,
  src,
  label,
  caption,
  ratio = "landscape",
  priority = false,
  variant = "default",
  className,
  imageClassName,
  sizes = "(min-width: 1280px) 32vw, (min-width: 768px) 46vw, 100vw",
  overlay,
}: EditorialImageProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        variant === "default" ? "surface-card-strong rounded-[2rem] p-3" : "rounded-full",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-background-alt",
          variant === "default" ? "rounded-[1.5rem]" : "rounded-full",
          ratioClasses[ratio],
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={cn(
              "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
              variant === "bare" && "group-hover:scale-100",
              imageClassName,
            )}
          />
        ) : (
          <div className="image-placeholder absolute inset-0 animate-shimmer">
            {ratio === "portrait" || ratio === "tall" ? (
              <>
                <div className="absolute left-[8%] top-[10%] h-28 w-28 rounded-[2rem] border border-border/40 bg-surface-strong/30 blur-[1px]" />
                <div className="absolute bottom-[20%] right-[10%] h-20 w-20 rounded-full border border-border/35 bg-surface-strong/18" />
                <div className="absolute inset-x-[12%] bottom-[12%] h-12 rounded-[1.75rem] border border-border/35 bg-surface-strong/28" />
                <div className="absolute right-[18%] top-[24%] h-6 w-16 rounded-full border border-border/30 bg-surface-strong/32" />
              </>
            ) : ratio === "square" ? (
              <>
                <div className="absolute left-[18%] top-[18%] h-16 w-16 rounded-full border border-border/40 bg-surface-strong/30 blur-[1px]" />
                <div className="absolute bottom-[22%] right-[18%] h-14 w-14 rounded-[1.2rem] border border-border/35 bg-surface-strong/20" />
                <div className="absolute inset-x-[20%] bottom-[16%] h-10 rounded-full border border-border/35 bg-surface-strong/26" />
                <div className="absolute left-[28%] top-[36%] h-8 w-8 rotate-6 rounded-lg border border-border/30 bg-surface-strong/18" />
              </>
            ) : (
              <>
                <div className="absolute left-[10%] top-[12%] h-20 w-20 rounded-[1.5rem] border border-border/40 bg-surface-strong/36 blur-[1px]" />
                <div className="absolute bottom-[18%] right-[14%] h-24 w-24 rounded-full border border-border/35 bg-surface-strong/14" />
                <div className="absolute inset-x-[16%] bottom-[14%] h-14 rounded-[1.75rem] border border-border/35 bg-surface-strong/32" />
                <div className="absolute right-[14%] top-[18%] h-7 w-20 rounded-full border border-border/35 bg-surface-strong/36" />
                <div className="absolute left-[20%] top-[40%] h-10 w-10 rotate-12 rounded-lg border border-border/30 bg-surface-strong/20" />
              </>
            )}
          </div>
        )}

        {variant === "default" ? <div className="image-overlay absolute inset-0" /> : null}
        {variant === "default" ? (
          <div className="pointer-events-none absolute inset-[12px] rounded-[calc(1.5rem-2px)] border border-border/40" />
        ) : null}

        {label ? (
          <div className="image-frost absolute left-4 top-4 rounded-full px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/78">
            {label}
          </div>
        ) : null}

        {caption ? (
          <div className="image-frost absolute inset-x-4 bottom-4 rounded-[1.5rem] px-4 py-3">
            <p className="text-sm leading-6 text-foreground/78">{caption}</p>
          </div>
        ) : null}

        {overlay}
      </div>
    </div>
  );
}
