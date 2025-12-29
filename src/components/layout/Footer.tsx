import Link from "next/link";
import { footerLinks } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { CurrentYear } from "@/components/ui/CurrentYear";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--sand-50)]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-2xl font-semibold text-[var(--ink-900)]">neumog</p>
            <p className="text-sm font-medium text-[var(--muted-500)]">
              Hybrid Squads | Connected Solutions
            </p>
            <Button href="/start-project" variant="secondary" className="mt-4 inline-flex">
              Start project
            </Button>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted-400)]">
                {category}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted-500)]">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-[var(--ink-900)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--border-soft)] pt-8 text-sm text-[var(--muted-500)] sm:flex-row sm:items-center sm:justify-between">
          <p>© <CurrentYear /> Neumog. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/legal/privacy" className="hover:text-[var(--ink-900)]">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:text-[var(--ink-900)]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
