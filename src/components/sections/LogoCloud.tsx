"use client";

import { logoCloud } from "@/content/site";
import { useTheme } from "@/contexts/ThemeContext";

export function LogoCloud() {
  const { theme } = useTheme();

  return (
    <section className={theme === "dark"
      ? "border-y border-white/10 bg-[var(--background)] backdrop-blur"
      : "border-y border-[var(--border-soft)] bg-[radial-gradient(circle_at_20%_35%,#fffaf2,#f2e5d6_38%,#e5d8c8)] backdrop-blur"
    }>
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className={theme === "dark" ? "text-sm uppercase tracking-[0.3em] text-cyan-200" : "text-sm uppercase tracking-[0.3em] text-[var(--muted-400)]"}>
          {logoCloud.heading}
        </p>
        <p className={theme === "dark" ? "mt-3 text-base text-gray-300" : "mt-3 text-base text-[var(--muted-500)]"}>
          {logoCloud.supportingText}
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {logoCloud.logos.map((logo) => (
            <div
              key={logo}
              className={theme === "dark"
                ? "rounded-3xl border border-white/10 bg-white/5 py-6 text-lg font-semibold text-white shadow-md backdrop-blur-sm"
                : "rounded-3xl border border-[var(--border-soft)] bg-white/90 py-6 text-lg font-semibold text-[var(--ink-900)] shadow-[0_16px_50px_rgba(36,20,8,0.08)]"
              }
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
