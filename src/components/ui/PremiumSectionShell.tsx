import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PremiumSectionShellProps = {
  children: ReactNode;
  className?: string;
  tone?: "soft" | "rose" | "champagne" | "contrast";
};

const toneClasses = {
  soft: "bg-[linear-gradient(180deg,rgba(255,253,250,0.9),rgba(252,244,236,0.82))]",
  rose: "bg-[linear-gradient(180deg,rgba(255,251,249,0.94),rgba(248,236,232,0.86))]",
  champagne:
    "bg-[linear-gradient(180deg,rgba(255,253,248,0.92),rgba(248,238,222,0.84))]",
  contrast:
    "bg-[linear-gradient(180deg,rgba(52,39,33,0.96),rgba(31,24,21,0.94))] text-white",
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
