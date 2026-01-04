"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Search as SearchIcon } from "lucide-react";
import { SearchModal } from "@/components/ui/SearchModal";

export function Header() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme } = useTheme();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const loginLinks = [
    {
      label: "Core Team",
      href: "/login/employee",
    },
    {
      label: "Expert Network",
      href: "/login/expert",
    },
  ];

  return (
    <>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <header
        className={
          theme === "dark"
            ? "sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-2xl"
            : "sticky top-0 z-50 border-b border-white/10 bg-white/70 text-[var(--ink-900)] backdrop-blur-xl backdrop-saturate-150"
        }
      >
        <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-8">
            {/* Restored Original Logo + Text Layout */}
            <Link href="/" className={theme === "dark" ? "flex items-center gap-3 text-white" : "flex items-center gap-3 text-[var(--ink-900)]"}>
              <Logo className="h-8 w-8" />
              <span className="text-xl font-semibold tracking-tight">neumog</span>
            </Link>

            <nav className={theme === "dark" ? "hidden items-center gap-7 text-sm text-gray-300 lg:flex" : "hidden items-center gap-7 text-sm text-[var(--muted-500)] lg:flex"}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={theme === "dark" ? "transition hover:text-white" : "transition hover:text-[var(--ink-900)]"}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className={cn(
                "group flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110",
                theme === "dark"
                  ? "border-white/10 text-gray-400 bg-white/5 shadow-[0_0_10px_-1px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_-2px_rgba(124,58,237,0.8)] hover:text-white hover:border-white/30"
                  : "border-[var(--border-soft)] bg-white text-gray-500 shadow-[0_0_15px_-3px_rgba(234,88,12,0.2)] hover:shadow-[0_0_25px_-4px_rgba(234,88,12,0.6)] hover:text-[var(--ink-900)] hover:border-[#fed7aa]"
              )}
              aria-label="Search"
            >
              <SearchIcon className="h-4 w-4" />
            </button>

            <div className="relative">
              <button
                className={
                  theme === "dark"
                    ? "inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white"
                    : "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[var(--ink-900)] pill-border"
                }
                onClick={() => setLoginOpen((prev) => !prev)}
                aria-expanded={loginOpen ? true : false}
              >
                Login
                <svg
                  className={cn("h-3.5 w-3.5 transition-transform", loginOpen && "rotate-180")}
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 4l3 3 3-3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {loginOpen && (
                <div
                  className={
                    theme === "dark"
                      ? "absolute right-0 mt-3 w-64 rounded-2xl border border-white/10 bg-black/90 p-3 shadow-lg"
                      : "absolute right-0 mt-3 w-64 rounded-2xl border border-[var(--border-soft)] bg-[rgba(255,255,255,0.95)] p-3 shadow-[0_16px_60px_rgba(36,20,8,0.12)]"
                  }
                >
                  {loginLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={
                        theme === "dark"
                          ? "block rounded-xl px-4 py-3 text-left text-sm text-gray-200 hover:bg-white/5"
                          : "block rounded-xl px-4 py-3 text-left text-sm text-[var(--ink-700)] hover:bg-[rgba(240,225,206,0.7)]"
                      }
                      onClick={() => setLoginOpen(false)}
                    >
                      <p className={theme === "dark" ? "font-medium text-white" : "font-medium text-[var(--ink-900)]"}>{link.label}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <ThemeToggle />
            <Button href="/start-project">Start project</Button>
          </div>
          <button
            className={
              theme === "dark"
                ? "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
                : "flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] text-[var(--ink-900)] bg-white/80 lg:hidden"
            }
            onClick={() => {
              setOpen((prev) => !prev);
              setLoginOpen(false);
            }}
            aria-label="Toggle navigation"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              className="h-5 w-5"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "absolute left-0 top-full w-full h-[calc(100vh-73px)] overflow-y-auto lg:hidden",
            theme === "dark" ? "bg-black border-t border-white/10" : "bg-white border-t border-gray-100",
            open ? "block" : "hidden"
          )}
        >
          <div className="px-6 py-6 pb-24">
            <div className="flex flex-col">
              {/* Mobile Search Button */}
              <div className="mb-6">
                <button
                  onClick={() => { setOpen(false); setSearchOpen(true); }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                    theme === "dark" ? "border-white/10 bg-white/5 text-gray-400 hover:bg-white/10" : "border-gray-200 bg-gray-50 text-[var(--muted-500)] hover:bg-gray-100"
                  )}
                >
                  <SearchIcon className="h-4 w-4" />
                  <span>Search content...</span>
                </button>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={theme === "dark"
                    ? "group flex items-center justify-between border-b border-white/10 py-5 text-lg font-medium text-white transition-colors hover:text-[var(--accent-400)]"
                    : "group flex items-center justify-between border-b border-gray-100 py-5 text-lg font-medium text-[var(--ink-900)] transition-colors hover:text-[var(--accent-600)]"
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <svg className={theme === "dark" ? "h-5 w-5 text-gray-500 group-hover:text-white" : "h-5 w-5 text-gray-400 group-hover:text-[var(--ink-900)]"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}

              {/* Login Section */}
              <div className={theme === "dark" ? "mt-8 border-b border-white/10 pb-4" : "mt-8 border-b border-gray-100 pb-4"}>
                <p className={theme === "dark" ? "mb-2 text-xs uppercase tracking-[0.2em] text-gray-500" : "mb-2 text-xs uppercase tracking-[0.2em] text-[var(--muted-400)]"}>
                  Log In
                </p>
                {loginLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={theme === "dark"
                      ? "flex items-center justify-between py-4 text-base text-gray-300 hover:text-white"
                      : "flex items-center justify-between py-4 text-base text-[var(--ink-700)] hover:text-[var(--ink-900)]"
                    }
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className={theme === "dark" ? "text-sm text-gray-400" : "text-sm text-[var(--muted-500)]"}>Switch Theme</span>
                <ThemeToggle />
              </div>

              <div className="mt-10">
                <Button href="/start-project" className="w-full justify-center text-center" onClick={() => setOpen(false)}>
                  Start project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
