"use client";

import { ctaStrip } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/contexts/ThemeContext";

export function CtaStrip() {
  const { theme } = useTheme();

  return (
    <section className="py-20">
      <div
        className={
          theme === "dark"
            ? "mx-auto max-w-5xl rounded-[36px] border border-white/10 bg-gradient-to-r from-cyan-600/20 via-transparent to-purple-600/20 px-10 py-14 text-center"
            : "mx-auto max-w-5xl rounded-[36px] border border-[var(--border-soft)] bg-gradient-to-r from-[#fff5ea] via-[#f2ddc1] to-[#f3c999] px-10 py-14 text-center shadow-[0_26px_80px_rgba(36,20,8,0.14)]"
        }
      >
        <p className={theme === "dark" ? "text-sm uppercase tracking-[0.3em] text-cyan-200" : "text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]"}>
          Ready?
        </p>
        <h2 className={theme === "dark" ? "mt-4 text-3xl font-semibold text-white" : "mt-4 text-3xl font-semibold text-[var(--ink-900)]"}>
          {ctaStrip.heading}
        </h2>
        <p className={theme === "dark" ? "mt-3 text-base text-gray-300" : "mt-3 text-base text-[var(--muted-500)]"}>{ctaStrip.body}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href={ctaStrip.primaryCta.href}>{ctaStrip.primaryCta.label}</Button>
          <Button href={ctaStrip.secondaryCta.href} variant="secondary">
            {ctaStrip.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
