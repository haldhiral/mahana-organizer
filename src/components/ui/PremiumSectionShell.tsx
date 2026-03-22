import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PremiumSectionShellProps = {
  children: ReactNode;
  className?: string;
  tone?: "soft" | "rose" | "champagne" | "contrast";
};

const toneClasses = {
  soft: "tone-soft",
  rose: "tone-rose",
  champagne: "tone-champagne",
  contrast: "tone-contrast",
} as const;

export function PremiumSectionShell({
  children,
  className,
  tone = "soft",
}: PremiumSectionShellProps) {
  return (
    <div
      className={cn(
        "section-shell rounded-[2.25rem] p-6 sm:p-8 lg:p-10",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}
