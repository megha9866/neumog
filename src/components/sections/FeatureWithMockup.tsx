"use client";

import Image from "next/image";
import { transparencySection } from "@/content/site";
import { useTheme } from "@/contexts/ThemeContext";
import { GradientCard } from "@/components/ui/GradientCard";

export function FeatureWithMockup() {
  const { theme } = useTheme();

  return (
    <section className={theme === "dark" ? "bg-[var(--background)] py-24" : "bg-[var(--sand-50)] py-24"}>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row">
        <div className="flex-1 space-y-6">
          <p className={theme === "dark" ? "text-sm uppercase tracking-[0.3em] text-cyan-200" : "text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]"}>
            Visibility
          </p>
          <h2 className={theme === "dark" ? "text-3xl font-semibold text-white" : "text-3xl font-semibold text-[var(--ink-900)]"}>
            {transparencySection.title}
          </h2>
          <p className={theme === "dark" ? "text-base text-gray-300" : "text-base text-[var(--muted-500)]"}>
            {transparencySection.body}
          </p>
          <ul className={theme === "dark" ? "space-y-3 text-sm text-gray-300" : "space-y-3 text-sm text-[var(--ink-700)]"}>
            {transparencySection.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className={theme === "dark"
                  ? "mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500"
                  : "mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-[var(--accent-500)] to-[var(--accent-600)]"
                } />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-center lg:justify-end">
          <GradientCard className="inline-block p-6">
            <Image
              src={transparencySection.image}
              alt={transparencySection.title}
              width={900}
              height={600}
              className={theme === "dark"
                ? "h-auto max-w-full rounded-2xl border border-white/10 shadow-lg"
                : "h-auto max-w-full rounded-2xl border border-[var(--border-soft)] shadow-[0_20px_60px_rgba(36,20,8,0.12)]"
              }
            />
          </GradientCard>
        </div>
      </div>
    </section>
  );
}
