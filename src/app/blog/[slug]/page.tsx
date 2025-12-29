import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/content/site";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.href.endsWith(slug));


  if (!post) {
    return (
      <article className="bg-[var(--sand-50)] py-24 text-[var(--ink-900)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="mt-6 text-3xl font-semibold">Article Not Available</h1>
          <p className="mt-4 text-lg text-[var(--muted-600)]">
            This article is not published on our site. For more insights, visit our official LinkedIn page for the latest articles and news.
          </p>
          <div className="mt-12 border-t border-[var(--border-soft)] pt-6 text-sm text-[var(--muted-600)]">
            <a href="https://www.linkedin.com/company/neumog/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-600)] underline">View on LinkedIn</a>
            <br />
            <Link href="/blog" className="text-[var(--accent-600)] block mt-4">
              ← Back to all posts
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-[var(--sand-50)] py-24 text-[var(--ink-900)]">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]">{post.tag}</p>
        <h1 className="mt-6 text-4xl font-semibold">{post.title}</h1>
        <p className="mt-4 text-lg text-[var(--muted-600)]">{post.excerpt}</p>
        <div className="mt-12 space-y-6 text-[var(--muted-600)]">
          <p>
            Placeholder article body for {post.title}. Replace this with MDX content once the CMS is wired up. For now, we outline the key talking points clients and experts should see.
          </p>
          <p>
            1. Context of the problem we solved.
            2. The hybrid squad assembled.
            3. Outcomes and metrics delivered.
          </p>
          <p>
            When we launch RLHF/data-annotation, these posts will also cover tooling, QA loops, and compensation patterns so experts know what to expect.
          </p>
        </div>
        <div className="mt-12 border-t border-[var(--border-soft)] pt-6 text-sm text-[var(--muted-600)]">
          <Link href="/blog" className="text-[var(--accent-600)]">
            ← Back to all posts
          </Link>
        </div>
      </div>
    </article>
  );
}
