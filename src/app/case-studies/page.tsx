import { TestimonialQuote } from "@/components/sections/TestimonialQuote";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { testimonials, stats } from "@/content/site";

const placeholderStats = stats.metrics;

export default function CaseStudiesPage() {
  return (
    <div className="bg-[var(--sand-50)] py-24 text-[var(--ink-900)]">
      <section className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]">Case studies</p>
        <h1 className="mt-6 text-4xl font-semibold">Stories coming soon</h1>
        <p className="mt-4 text-[var(--muted-600)]">
          While we wrap up NDAs and visual polish, here are the proof points and quotes you can reference.
        </p>
      </section>
      <div className="mx-auto mt-16 max-w-5xl px-6">
        <StatsStrip items={placeholderStats} />
      </div>
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-4xl">
          <TestimonialQuote
            quote={testimonials.featured.quote}
            author={testimonials.featured.author}
            role={testimonials.featured.role}
          />
        </div>
      </section>
      <div className="mt-16">
        <CtaStrip />
      </div>
    </div>
  );
}
