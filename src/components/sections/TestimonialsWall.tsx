"use client";

import { testimonials } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTheme } from "@/contexts/ThemeContext";
import { GradientCard } from "@/components/ui/GradientCard";

export function TestimonialsWall() {
  const { theme } = useTheme();

  return (
    <section className={theme === "dark" ? "py-24" : "bg-[var(--sand-50)] py-24"}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title={testimonials.wallHeading}
          description="Client sponsors and experts tell the story until case studies go live."
          alignment="left"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.quotes.map((quote) => (
            <GradientCard key={quote.quote}>
              <p className={theme === "dark" ? "text-sm text-gray-300" : "text-sm text-[var(--ink-700)]"}>
                “{quote.quote}”
              </p>
              <p className={theme === "dark" ? "mt-4 text-sm font-semibold text-white" : "mt-4 text-sm font-semibold text-[var(--ink-900)]"}>
                {quote.author}
              </p>
              <p className={theme === "dark" ? "text-xs uppercase tracking-[0.2em] text-gray-400" : "text-xs uppercase tracking-[0.2em] text-[var(--muted-400)]"}>
                {quote.role}
              </p>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
