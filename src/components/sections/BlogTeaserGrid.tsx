"use client";

import Link from "next/link";
import { blogPosts } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTheme } from "@/contexts/ThemeContext";
import { GradientCard } from "@/components/ui/GradientCard";

export function BlogTeaserGrid() {
  const { theme } = useTheme();

  return (
    <section className={theme === "dark" ? "bg-[var(--background)] py-24" : "bg-[var(--sand-50)] py-24"}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Insights"
          title="Some tips from our blog"
          description="Playbooks on hybrid product delivery, domain insights, and our RLHF roadmap."
          alignment="left"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <GradientCard key={post.href}>
              <p className={theme === "dark" ? "text-xs uppercase tracking-[0.2em] text-cyan-200" : "text-xs uppercase tracking-[0.2em] text-[var(--muted-400)]"}>
                {post.tag}
              </p>
              <h3 className={theme === "dark" ? "mt-4 text-2xl text-white" : "mt-4 text-2xl text-[var(--ink-900)]"}>
                {post.title}
              </h3>
              <p className={theme === "dark" ? "mt-2 text-sm text-gray-300" : "mt-2 text-sm text-[var(--muted-500)]"}>
                {post.excerpt}
              </p>
              <Link
                href={post.href}
                className={theme === "dark"
                  ? "mt-4 inline-flex text-sm text-cyan-400 hover:text-white"
                  : "mt-4 inline-flex text-sm text-[var(--accent-600)] hover:text-[var(--ink-900)]"
                }
              >
                Read article →
              </Link>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
