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
  className,
  imageClassName,
  sizes = "(min-width: 1280px) 32vw, (min-width: 768px) 46vw, 100vw",
  overlay,
}: EditorialImageProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/72 bg-white/82 p-3 shadow-[0_24px_58px_rgba(80,59,43,0.12)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.5rem] bg-background-alt",
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
              imageClassName,
            )}
          />
        ) : (
          <div className="image-placeholder absolute inset-0 animate-shimmer">
            {ratio === "portrait" || ratio === "tall" ? (
              <>
                <div className="absolute left-[8%] top-[10%] h-28 w-28 rounded-[2rem] border border-white/70 bg-white/30 blur-[1px]" />
                <div className="absolute bottom-[20%] right-[10%] h-20 w-20 rounded-full border border-white/60 bg-white/18" />
                <div className="absolute inset-x-[12%] bottom-[12%] h-12 rounded-[1.75rem] border border-white/60 bg-white/28" />
                <div className="absolute right-[18%] top-[24%] h-6 w-16 rounded-full border border-white/50 bg-white/32" />
              </>
            ) : ratio === "square" ? (
              <>
                <div className="absolute left-[18%] top-[18%] h-16 w-16 rounded-full border border-white/70 bg-white/30 blur-[1px]" />
                <div className="absolute bottom-[22%] right-[18%] h-14 w-14 rounded-[1.2rem] border border-white/60 bg-white/20" />
                <div className="absolute inset-x-[20%] bottom-[16%] h-10 rounded-full border border-white/60 bg-white/26" />
                <div className="absolute left-[28%] top-[36%] h-8 w-8 rotate-6 rounded-lg border border-white/50 bg-white/18" />
              </>
            ) : (
              <>
                <div className="absolute left-[10%] top-[12%] h-20 w-20 rounded-[1.5rem] border border-white/70 bg-white/36 blur-[1px]" />
                <div className="absolute bottom-[18%] right-[14%] h-24 w-24 rounded-full border border-white/60 bg-white/14" />
                <div className="absolute inset-x-[16%] bottom-[14%] h-14 rounded-[1.75rem] border border-white/60 bg-white/32" />
                <div className="absolute right-[14%] top-[18%] h-7 w-20 rounded-full border border-white/60 bg-white/36" />
                <div className="absolute left-[20%] top-[40%] h-10 w-10 rotate-12 rounded-lg border border-white/50 bg-white/20" />
              </>
            )}
          </div>
        )}

        <div className="image-overlay absolute inset-0" />
        <div className="pointer-events-none absolute inset-[12px] rounded-[calc(1.5rem-2px)] border border-white/45" />

        {label ? (
          <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/78 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/78 shadow-[0_10px_22px_rgba(64,47,34,0.12)] backdrop-blur-xl">
            {label}
          </div>
        ) : null}

        {caption ? (
          <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/55 bg-white/70 px-4 py-3 shadow-[0_18px_36px_rgba(62,44,31,0.12)] backdrop-blur-xl">
            <p className="text-sm leading-6 text-foreground/78">{caption}</p>
          </div>
        ) : null}

        {overlay}
      </div>
    </div>
  );
}
