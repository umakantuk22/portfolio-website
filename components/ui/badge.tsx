import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent" | "outline";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium tracking-wide transition-colors";

  const variants = {
    default: "bg-zinc-800/80 text-zinc-300 border border-zinc-700/50",
    accent: "bg-accent/15 text-violet-300 border border-violet-500/30",
    outline: "border border-zinc-800 text-zinc-400",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
