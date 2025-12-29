"use client";

import { useTheme } from "@/contexts/ThemeContext";

interface TimelineItem {
  title: string;
  copy: string;
  caption: string;
}

interface ProcessTimelineProps {
  items: TimelineItem[];
}

export function ProcessTimeline({ items }: ProcessTimelineProps) {
  const { theme } = useTheme();

  return (
    <div className="space-y-6">
      {items.map((item, idx) => (
        <div key={item.title} className="card-surface rounded-3xl p-8">
          <div className={theme === "dark" ? "text-sm font-semibold text-cyan-200 mb-2" : "text-sm font-semibold text-[var(--accent-600)] mb-2"}>
            Phase {idx + 1}
          </div>
          <h3 className={theme === "dark" ? "text-2xl text-white" : "text-2xl text-[var(--ink-900)]"}>
            {item.title}
          </h3>
          <p className={theme === "dark" ? "mt-3 text-sm text-gray-300" : "mt-3 text-sm text-[var(--muted-500)]"}>
            {item.copy}
          </p>
          <div className={theme === "dark" ? "mt-6 text-xs font-medium uppercase tracking-widest text-gray-400" : "mt-6 text-xs font-medium uppercase tracking-widest text-[var(--muted-400)]"}>
            {item.caption}
          </div>
        </div>
      ))}
    </div>
  );
}
