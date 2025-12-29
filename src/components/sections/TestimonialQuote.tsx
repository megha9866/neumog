"use client";

import { useTheme } from "@/contexts/ThemeContext";

interface TestimonialQuoteProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialQuote({ quote, author, role }: TestimonialQuoteProps) {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark"
      ? "rounded-[32px] border border-white/10 bg-white/5 px-10 py-12 text-center shadow-lg"
      : "rounded-[32px] border border-[var(--border-soft)] bg-gradient-to-br from-[#fff9f1] via-[#f2dfc3] to-[#f0cfa7] px-10 py-12 text-center shadow-[0_24px_80px_rgba(36,20,8,0.12)]"
    }>
      <p className={theme === "dark" ? "text-2xl text-white" : "text-2xl text-[var(--ink-900)]"}>“{quote}”</p>
      <p className={theme === "dark" ? "mt-6 text-sm font-semibold text-gray-200" : "mt-6 text-sm font-semibold text-[var(--ink-700)]"}>{author}</p>
      <p className={theme === "dark" ? "text-xs uppercase tracking-[0.2em] text-gray-400" : "text-xs uppercase tracking-[0.2em] text-[var(--muted-400)]"}>{role}</p>
    </div>
  );
}
