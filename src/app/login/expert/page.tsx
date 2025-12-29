"use client";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/contexts/ThemeContext";

export default function ExpertLoginPage() {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "bg-[#010205] py-24 text-white" : "bg-[var(--sand-50)] py-24 text-[var(--ink-900)]"}>
      <div className={theme === "dark"
        ? "mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-black/50 px-8 py-16 text-center backdrop-blur"
        : "mx-auto max-w-4xl rounded-[32px] border border-[var(--border-soft)] bg-[var(--card-surface)] px-8 py-16 text-center shadow-[0_18px_60px_rgba(36,20,8,0.1)]"
      }>
        <p className={theme === "dark" ? "text-sm uppercase tracking-[0.3em] text-cyan-200" : "text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]"}>Expert collective</p>
        <h1 className={theme === "dark" ? "mt-6 text-4xl font-semibold text-white" : "mt-6 text-4xl font-semibold"}>Expert & RLHF portal</h1>
        <p className={theme === "dark" ? "mt-4 text-base text-gray-400" : "mt-4 text-base text-[var(--muted-600)]"}>
          Approved experts can access project briefs, time tracking, and RLHF task queues here. Request access if you have not received onboarding credentials yet.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/experts/apply">Join the collective</Button>
          <Button href="/contact" variant="secondary">
            Request access
          </Button>
        </div>
      </div>
    </div>
  );
}
