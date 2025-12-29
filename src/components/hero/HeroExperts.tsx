"use client";

import { Button } from "@/components/ui/Button";
import { useTheme } from "@/contexts/ThemeContext";

interface HeroExpertsProps {
  title: string;
  description: string;
  stats?: { label: string; value: string }[]; // Optionalstats if generic hero reused
}

export function HeroExperts({ title, description }: HeroExpertsProps) {
  const { theme } = useTheme();

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className={theme === "dark" ? "text-sm uppercase tracking-[0.3em] text-cyan-200" : "text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]"}>
          For experts
        </p>
        <h1 className={theme === "dark" ? "mt-6 text-4xl font-semibold text-white sm:text-5xl" : "mt-6 text-4xl font-semibold text-[var(--ink-900)] sm:text-5xl"}>
          {title}
        </h1>
        <p className={theme === "dark" ? "mt-4 text-lg text-gray-300" : "mt-4 text-lg text-[var(--muted-600)]"}>
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/experts/apply">Join the network</Button>
          <Button href="/contact" variant="secondary">
            Talk with delivery team
          </Button>
        </div>
      </div>
    </section>
  );
}
