import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[88rem] px-5 sm:px-7 lg:px-10 xl:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
