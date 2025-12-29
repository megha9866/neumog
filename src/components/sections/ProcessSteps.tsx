"use client";

import { processSteps } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTheme } from "@/contexts/ThemeContext";
import { GradientCard } from "@/components/ui/GradientCard";

export function ProcessSteps() {
  const { theme } = useTheme();

  return (
    <section className={theme === "dark" ? "bg-[var(--background)] py-24" : "bg-[var(--sand-50)] py-24"}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Process"
          title="How we can help you"
          description="Clear steps to get your hybrid squad staffed, building, and shipping without losing context."
          alignment="left"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, idx) => (
            <GradientCard key={step.title}>
              <div className={theme === "dark" ? "text-sm font-semibold text-cyan-200" : "text-sm font-semibold text-[var(--accent-600)]"}>Step {idx + 1}</div>
              <h3 className={theme === "dark" ? "mt-4 text-xl text-white" : "mt-4 text-xl text-[var(--ink-900)]"}>{step.title}</h3>
              <p className={theme === "dark" ? "mt-2 text-sm text-gray-300" : "mt-2 text-sm text-[var(--muted-500)]"}>{step.body}</p>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
