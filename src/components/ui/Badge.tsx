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
        "inline-flex items-center gap-2 rounded-full border border-border-strong/70 bg-white/84 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-foreground/78 shadow-[0_10px_24px_rgba(80,59,43,0.08)] backdrop-blur-xl transition-shadow duration-200 hover:shadow-[0_12px_28px_rgba(80,59,43,0.10)] before:block before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-primary/70 before:content-['']",
        className,
      )}
    >
      {children}
    </span>
  );
}
