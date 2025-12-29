"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientCard({ children, className }: GradientCardProps) {
  const { theme } = useTheme();

  return (
    <div className="relative">
      <div
        className={
          theme === "dark"
            ? "absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-70"
            : "absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#f1cfa6]/60 via-white/85 to-[#ead6bd]/70 blur-[0.5px]"
        }
        aria-hidden
      />
      <div
        className={cn(
          theme === "dark"
            ? "relative rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.06),_rgba(0,0,0,0.7))] p-8"
            : "relative rounded-3xl border border-[var(--border-soft)] bg-[radial-gradient(circle_at_22%_10%,_rgba(255,255,255,0.96),_var(--card-surface))] p-8 shadow-[0_24px_80px_rgba(36,20,8,0.12)] backdrop-blur-[2px]",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
