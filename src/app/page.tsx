import { HeroMain } from "@/components/hero/HeroMain";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { FeatureWithMockup } from "@/components/sections/FeatureWithMockup";
import { VerticalCards } from "@/components/sections/VerticalCards";
import { StatsStacked } from "@/components/sections/StatsStacked";
import { TestimonialsWall } from "@/components/sections/TestimonialsWall";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TeamHighlight } from "@/components/sections/TeamHighlight";
import { BlogTeaserGrid } from "@/components/sections/BlogTeaserGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { testimonials } from "@/content/site";
import { TestimonialQuote } from "@/components/sections/TestimonialQuote";

export default function Home() {
  return (
    <div>
      <HeroMain />
      <LogoCloud />
      <FeatureGrid />
      <FeatureWithMockup />
      <VerticalCards />
      <StatsStacked />
      <TestimonialsWall />
      <section className="bg-[var(--sand-50)] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <TestimonialQuote
            quote={testimonials.featured.quote}
            author={testimonials.featured.author}
            role={testimonials.featured.role}
          />
        </div>
      </section>
      <ProcessSteps />
      <TeamHighlight />
      <BlogTeaserGrid />
      <FaqSection />
      <CtaStrip />
    </div>
  );
}
