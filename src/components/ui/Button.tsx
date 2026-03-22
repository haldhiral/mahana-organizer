import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

type ButtonStyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-primary/70 bg-[linear-gradient(135deg,var(--primary)_0%,var(--primary-strong)_100%)] text-primary-foreground shadow-[var(--shadow-card)] hover:border-primary-strong hover:brightness-[1.02] hover:shadow-[var(--shadow-elevated)]",
  secondary:
    "border border-contrast/20 bg-contrast text-contrast-foreground shadow-[var(--shadow-card)] hover:brightness-[1.02] hover:shadow-[var(--shadow-elevated)]",
  outline:
    "border border-border-strong/80 bg-surface/80 text-foreground shadow-[var(--shadow-soft)] hover:border-primary/45 hover:bg-surface-strong/92 hover:shadow-[var(--shadow-card)]",
  ghost:
    "border border-transparent bg-transparent text-foreground/80 hover:bg-surface/72 hover:text-foreground",
  whatsapp:
    "border border-[#1f6f54]/85 bg-[linear-gradient(135deg,#2a8667_0%,#1f6f54_100%)] text-white shadow-[0_16px_34px_rgba(31,111,84,0.24)] hover:bg-[linear-gradient(135deg,#24785d_0%,#195944_100%)] hover:shadow-[0_22px_42px_rgba(31,111,84,0.28)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-5 text-sm sm:text-[0.96rem]",
  lg: "min-h-14 px-6 text-base",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
}: ButtonStyleOptions = {}) {
  return cn(
    "inline-flex min-w-0 items-center justify-center gap-2 rounded-full px-0 text-center font-medium tracking-[0.01em] whitespace-normal transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.98] active:translate-y-0 disabled:pointer-events-none disabled:translate-y-0 disabled:scale-100 disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export function Button({
  className,
  variant,
  size,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({ variant, size, className, fullWidth })}
      {...props}
    />
  );
}
