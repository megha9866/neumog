"use client";

import { teamSection } from "@/content/site";
import {
  Target,
  CalendarCheck,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const roleIcons = {
  "Product Leadership": Target,
  "Delivery Management": CalendarCheck,
  "Design & Experience": LayoutDashboard,
  "Engineering Oversight": ShieldCheck,
};

export function TeamHighlight() {
  const { theme } = useTheme();

  return (
    <section className={theme === "dark" ? "py-24" : "bg-[var(--sand-50)] py-24"}>
      <div className="mx-auto max-w-6xl px-6">
        <div className={theme === "dark"
          ? "rounded-[32px] border border-white/10 bg-[rgba(10,15,25,0.6)] p-12 text-center shadow-[0_24px_70px_rgba(0,0,0,0.3)]"
          : "rounded-[32px] border border-[var(--border-soft)] bg-[var(--card-muted)] p-12 text-center shadow-[0_24px_70px_rgba(36,20,8,0.12)]"
        }>
          <p className={theme === "dark" ? "text-sm uppercase tracking-[0.3em] text-cyan-200" : "text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]"}>
            Remote-first core
          </p>
          <h2 className={theme === "dark" ? "mt-4 text-3xl font-semibold text-white" : "mt-4 text-3xl font-semibold text-[var(--ink-900)]"}>
            {teamSection.headline}
          </h2>
          <p className={theme === "dark" ? "mt-3 text-base text-gray-300" : "mt-3 text-base text-[var(--muted-500)]"}>
            {teamSection.subheading}
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:grid-rows-2">
            {teamSection.roles.map((role) => {
              const Icon = roleIcons[role.label as keyof typeof roleIcons];
              return (
                <div
                  key={role.label}
                  className={theme === "dark"
                    ? "flex flex-col items-center justify-center bg-[rgba(20,25,38,0.8)] rounded-2xl shadow-md p-6 h-full"
                    : "flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 h-full"
                  }
                >
                  <span className="pt-2 group">
                    {Icon && <Icon className={theme === "dark" ? "h-8 w-8 text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors" : "h-8 w-8 text-[var(--accent-500)] mb-3 group-hover:text-[var(--accent-600)] transition-colors"} />}
                  </span>
                  <p className={theme === "dark" ? "text-lg font-semibold text-white mb-2 text-center" : "text-lg font-semibold text-[var(--ink-900)] mb-2 text-center"}>
                    {role.label}
                  </p>
                  <p className={theme === "dark" ? "text-sm text-gray-300 text-center" : "text-sm text-[var(--muted-500)] text-center"}>
                    {role.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
