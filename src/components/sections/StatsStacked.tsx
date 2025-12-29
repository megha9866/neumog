"use client";

import { stats } from "@/content/site";
import { useTheme } from "@/contexts/ThemeContext";
import { GradientCard } from "@/components/ui/GradientCard";

export function StatsStacked() {
  const { theme } = useTheme();

  return (
    <section className={theme === "dark" ? "bg-[var(--background)] py-24" : "bg-[var(--sand-50)] py-24"}>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row">
        <div className="flex-1 space-y-4">
          <p className={theme === "dark" ? "text-sm uppercase tracking-[0.3em] text-cyan-200" : "text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]"}>
            {stats.eyebrow}
          </p>
          <h2 className={theme === "dark" ? "text-3xl font-semibold text-white" : "text-3xl font-semibold text-[var(--ink-900)]"}>
            {stats.heading}
          </h2>
          <p className={theme === "dark" ? "text-base text-gray-300" : "text-base text-[var(--muted-500)]"}>{stats.description}</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-6">
          {stats.metrics.map((metric) => (
            <GradientCard key={metric.label}>
              <p className={theme === "dark" ? "text-4xl font-semibold text-white" : "text-4xl font-semibold text-[var(--ink-900)]"}>{metric.value}</p>
              <p className={theme === "dark" ? "mt-2 text-xs uppercase tracking-[0.2em] text-gray-400" : "mt-2 text-xs uppercase tracking-[0.2em] text-[var(--muted-400)]"}>
                {metric.label}
              </p>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
