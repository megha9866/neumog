"use client";

import { industries } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTheme } from "@/contexts/ThemeContext";
import { GradientCard } from "@/components/ui/GradientCard";

export function VerticalCards() {
  const { theme } = useTheme();

  return (
    <section className={theme === "dark" ? "bg-[var(--background)] py-24" : "bg-[var(--sand-50)] py-24"}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Industries"
          title="Where Neumog already delivers"
          description="Targeted accelerators for the markets we know best, plus a clear path into RLHF/data annotation."
          alignment="left"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <GradientCard key={industry.title}>
              <p className={theme === "dark" ? "text-xs uppercase tracking-[0.3em] text-cyan-200" : "text-xs uppercase tracking-[0.3em] text-[var(--muted-400)]"}>
                {industry.pill}
              </p>
              <h3 className={theme === "dark" ? "mt-4 text-2xl text-white" : "mt-4 text-2xl text-[var(--ink-900)]"}>
                {industry.title}
              </h3>
              <p className={theme === "dark" ? "mt-2 text-sm text-gray-300" : "mt-2 text-sm text-[var(--muted-500)]"}>
                {industry.body}
              </p>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
