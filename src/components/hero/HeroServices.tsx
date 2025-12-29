"use client";

import { Button } from "@/components/ui/Button";
import { useTheme } from "@/contexts/ThemeContext";

interface HeroServicesProps {
  title: string;
  description: string;
  stats: { label: string; value: string }[];
}

export function HeroServices({ title, description, stats }: HeroServicesProps) {
  const { theme } = useTheme();

  return (
    <section className={theme === "dark"
      ? "relative overflow-hidden bg-[var(--background)] py-24 text-white"
      : "relative overflow-hidden bg-[var(--sand-50)] py-24 text-[var(--ink-900)]"
    }>
      <div className={theme === "dark"
        ? "absolute inset-0 -z-10 bg-gradient-to-br from-[var(--background)] via-[var(--background)] to-[#101524]"
        : "absolute inset-0 -z-10 bg-gradient-to-br from-white via-[rgba(255,255,255,0.75)] to-[var(--sand-100)]"
      } />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row">
        <div className="flex-1 space-y-6">
          <p className={theme === "dark" ? "text-sm uppercase tracking-[0.3em] text-cyan-200" : "text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]"}>
            Services
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className={theme === "dark" ? "text-lg text-gray-300" : "text-lg text-[var(--muted-500)]"}>{description}</p>
          <div className="flex gap-4">
            <Button href="/start-project">Start project</Button>
            <Button href="/contact" variant="secondary">
              Book a call
            </Button>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={
                theme === "dark"
                  ? "rounded-3xl border border-white/[0.08] p-6 backdrop-blur-xl"
                  : "rounded-3xl border border-[var(--border-soft)] bg-white/85 p-6 shadow-[0_20px_60px_rgba(36,20,8,0.12)] backdrop-blur"
              }
              style={theme === "dark" ? {
                background: "linear-gradient(135deg, rgba(25, 30, 40, 0.7) 0%, rgba(15, 20, 30, 0.5) 50%, rgba(10, 15, 25, 0.6) 100%)",
                boxShadow: "0 0 60px rgba(6, 182, 212, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.06)"
              } : {}}
            >
              <p className={theme === "dark" ? "text-4xl font-semibold text-cyan-400" : "text-4xl font-semibold text-[var(--ink-900)]"}>{stat.value}</p>
              <p className={theme === "dark" ? "mt-2 text-sm uppercase tracking-[0.2em] text-gray-400" : "mt-2 text-sm uppercase tracking-[0.2em] text-[var(--muted-500)]"}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
