"use client";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();

  return (
    <section className={theme === "dark" ? "min-h-screen flex items-center justify-center bg-[#010205] px-4" : "min-h-screen flex items-center justify-center bg-[var(--sand-50)] px-4"}>
      <div className={theme === "dark" ? "w-full max-w-md rounded-2xl bg-black/50 border border-white/10 shadow-xl p-8 flex flex-col items-center backdrop-blur" : "w-full max-w-md rounded-2xl bg-white shadow-xl p-8 flex flex-col items-center"}>
        <span className={theme === "dark" ? "text-xs font-semibold tracking-widest text-cyan-200 mb-2" : "text-xs font-semibold tracking-widest text-[var(--accent-600)] mb-2"}>
          EMPLOYEE PORTAL
        </span>
        <h1 className={theme === "dark" ? "text-2xl font-bold text-white mb-2 text-center" : "text-2xl font-bold text-[var(--ink-900)] mb-2 text-center"}>
          Neumog internal login
        </h1>
        <p className={theme === "dark" ? "text-sm text-gray-400 mb-8 text-center" : "text-sm text-[var(--muted-500)] mb-8 text-center"}>
          Product managers, delivery leads, and administrators log in here to run hybrid squads, review staffing, and approve expert invoices.
        </p>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={e => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            type="email"
            required
            placeholder="Email"
            className={theme === "dark"
              ? "w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              : "w-full rounded-lg border border-[var(--border-soft)] px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[var(--accent-200)]"
            }
          />
          <input
            type="password"
            required
            placeholder="Password"
            className={theme === "dark"
              ? "w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              : "w-full rounded-lg border border-[var(--border-soft)] px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[var(--accent-200)]"
            }
          />
          <button
            type="submit"
            className={theme === "dark"
              ? "w-full mt-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg py-2 hover:from-cyan-400 hover:to-purple-500 transition"
              : "w-full mt-2 bg-[var(--accent-600)] text-white font-semibold rounded-lg py-2 hover:bg-[var(--accent-700)] transition"
            }
          >
            Login
          </button>
        </form>
        {submitted && (
          <div className={theme === "dark" ? "mt-4 text-xs text-gray-400 text-center" : "mt-4 text-xs text-[var(--muted-400)] text-center"}>
            You need access to view this portal. Contact your Neumog admin.
          </div>
        )}
      </div>
    </section>
  );
}
