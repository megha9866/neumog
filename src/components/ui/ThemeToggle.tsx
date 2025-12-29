"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full pill-border",
                "text-[var(--ink-900)] transition-all duration-300 hover:scale-105",
                "focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)] focus:ring-offset-2"
            )}
            aria-label={`Switch to ${theme === "bright" ? "dark" : "bright"} theme`}
            title={`Switch to ${theme === "bright" ? "dark" : "bright"} theme`}
        >
            <div className="relative h-5 w-5">
                <Sun
                    className={cn(
                        "absolute inset-0 h-5 w-5 transition-all duration-300",
                        theme === "bright"
                            ? "rotate-0 scale-100 opacity-100"
                            : "rotate-90 scale-0 opacity-0"
                    )}
                />
                <Moon
                    className={cn(
                        "absolute inset-0 h-5 w-5 transition-all duration-300",
                        theme === "dark"
                            ? "rotate-0 scale-100 opacity-100"
                            : "-rotate-90 scale-0 opacity-0"
                    )}
                />
            </div>
        </button>
    );
}
