import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "surface-card-strong inline-flex max-w-full items-center gap-2 rounded-full px-3.5 py-2 text-[0.68rem] leading-[1.15] font-semibold uppercase tracking-[0.18em] text-foreground/78 transition-shadow duration-200 hover:shadow-[var(--shadow-card)] before:block before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-primary/70 before:content-[''] sm:px-4 sm:text-[0.72rem]",
        className,
      )}
    >
      {children}
    </span>
  );
}
