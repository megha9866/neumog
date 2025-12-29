"use client";

import { whyNeumog } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTheme } from "@/contexts/ThemeContext";
import { GradientCard } from "@/components/ui/GradientCard";

export function FeatureGrid() {
  const { theme } = useTheme();

  return (
    <section className={theme === "dark" ? "bg-[var(--background)] py-24" : "bg-[var(--sand-50)] py-24"}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title={whyNeumog.heading}
          description="A simple managed model that snaps into any product org without hand-holding."
          alignment="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whyNeumog.features.map((feature) => (
            <GradientCard key={feature.title}>
              <h3 className={theme === "dark" ? "text-xl font-semibold text-white" : "text-xl font-semibold text-[var(--ink-900)]"}>
                {feature.title}
              </h3>
              <p className={theme === "dark" ? "mt-4 text-sm text-gray-300" : "mt-4 text-sm text-[var(--muted-500)]"}>
                {feature.body}
              </p>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
