"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = "center",
  className,
}: SectionHeadingProps) {
  const { theme } = useTheme();

  return (
    <div className={cn(alignment === "center" ? "text-center mx-auto" : "text-left", className)}>
      {eyebrow && (
        <p className={theme === "dark" ? "text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200" : "text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-600)]"}>
          {eyebrow}
        </p>
      )}
      <h2 className={theme === "dark" ? "mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl" : "mt-4 text-3xl font-semibold leading-tight text-[var(--ink-900)] sm:text-4xl"}>{title}</h2>
      {description && <p className={cn(theme === "dark" ? "mt-4 text-base text-gray-300" : "mt-4 text-base text-[var(--muted-500)]", "max-w-2xl", alignment === "center" && "mx-auto")}>{description}</p>}
    </div>
  );
}
