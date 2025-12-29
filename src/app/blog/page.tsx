"use client";

import Link from "next/link";
import { blogPosts } from "@/content/site";
import { useTheme } from "@/contexts/ThemeContext";
import { GradientCard } from "@/components/ui/GradientCard";

export default function BlogPage() {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "bg-[var(--background)] py-24 text-white" : "bg-[var(--sand-50)] py-24 text-[var(--ink-900)]"}>
      <section className="mx-auto max-w-4xl px-6 text-center">
        <p className={theme === "dark" ? "text-sm uppercase tracking-[0.3em] text-cyan-200" : "text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]"}>Blog</p>
        <h1 className="mt-6 text-4xl font-semibold">Hybrid delivery notes</h1>
        <p className={theme === "dark" ? "mt-4 text-gray-300" : "mt-4 text-[var(--muted-600)]"}>
          Thought leadership on commerce, hospitality, delivery, Gen AI/ML, data science, and the future RLHF bench.
        </p>
      </section>
      <div className="mx-auto mt-16 grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <GradientCard key={post.href}>
            <p className={theme === "dark" ? "text-xs uppercase tracking-[0.2em] text-cyan-200" : "text-xs uppercase tracking-[0.2em] text-[var(--muted-500)]"}>{post.tag}</p>
            <h3 className={theme === "dark" ? "mt-3 text-2xl text-white" : "mt-3 text-2xl text-[var(--ink-900)]"}>{post.title}</h3>
            <p className={theme === "dark" ? "mt-2 text-sm text-gray-300" : "mt-2 text-sm text-[var(--muted-600)]"}>{post.excerpt}</p>
            <Link href={post.href} className={theme === "dark" ? "mt-4 inline-flex text-sm text-cyan-400 hover:text-cyan-300" : "mt-4 inline-flex text-sm text-[var(--accent-600)]"}>
              Read article →
            </Link>
          </GradientCard>
        ))}
      </div>
    </div>
  );
}
