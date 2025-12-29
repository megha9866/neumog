"use client";

import { useTheme } from "@/contexts/ThemeContext";

interface StatsStripProps {
  items: { label: string; value: string }[];
}

export function StatsStrip({ items }: StatsStripProps) {
  const { theme } = useTheme();

  return (
    <section className="border-y border-[var(--border-soft)] py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center sm:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className={theme === "dark" ? "text-4xl font-semibold text-white" : "text-4xl font-semibold text-[var(--ink-900)]"}>{item.value}</p>
            <p className={theme === "dark" ? "mt-2 text-sm text-gray-400" : "mt-2 text-sm text-[var(--muted-500)]"}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
