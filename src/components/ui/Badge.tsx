"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const { theme } = useTheme();

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]",
        theme === "dark"
          ? variant === "default"
            ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-100"
            : "border border-white/20 text-gray-300"
          : variant === "default"
            ? "bg-gradient-to-r from-[#f7d7ad] via-[#e9b57b] to-[#d0813f] text-[var(--ink-900)] shadow-[0_10px_26px_rgba(208,129,63,0.18)]"
            : "pill-border text-[var(--ink-700)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
