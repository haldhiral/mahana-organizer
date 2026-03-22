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
    "border border-primary/70 bg-[linear-gradient(135deg,#9a7356_0%,#785338_100%)] text-primary-foreground shadow-[0_18px_38px_rgba(141,103,75,0.26)] hover:border-primary-strong hover:bg-[linear-gradient(135deg,#8d684c_0%,#68442b_100%)] hover:shadow-[0_24px_52px_rgba(109,74,48,0.24)]",
  secondary:
    "border border-foreground/80 bg-[linear-gradient(135deg,#3a2d26_0%,#221917_100%)] text-white shadow-[0_18px_34px_rgba(36,27,23,0.18)] hover:bg-[linear-gradient(135deg,#312620_0%,#1b1512_100%)] hover:shadow-[0_24px_46px_rgba(36,27,23,0.22)]",
  outline:
    "border border-border-strong/80 bg-white/80 text-foreground shadow-[0_12px_28px_rgba(80,59,43,0.08)] hover:border-primary/45 hover:bg-white hover:shadow-[0_20px_38px_rgba(80,59,43,0.12)]",
  ghost:
    "border border-transparent bg-transparent text-foreground/80 hover:bg-white/60 hover:text-foreground",
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
    "inline-flex items-center justify-center gap-2 rounded-full px-0 font-medium tracking-[0.01em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.98] active:translate-y-0 disabled:pointer-events-none disabled:translate-y-0 disabled:scale-100 disabled:opacity-50",
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
