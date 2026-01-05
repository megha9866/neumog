import dynamic from "next/dynamic";
import { HeroMain } from "@/components/hero/HeroMain";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { testimonials } from "@/content/site";
import { Metadata } from "next";

// Page-specific SEO metadata
// Important: unique title + description for Google indexing
export const metadata: Metadata = {
  title: "Neumog | Product Development Services & Software Engineering",
  description: "Managed product delivery, not a marketplace. Trusted experts in product, engineering, data science, and AI/ML.",
  alternates: {
    canonical: "https://neumog.tech",
  },
};

const FeatureGrid = dynamic(() => import("@/components/sections/FeatureGrid").then((mod) => mod.FeatureGrid));
const FeatureWithMockup = dynamic(() => import("@/components/sections/FeatureWithMockup").then((mod) => mod.FeatureWithMockup));
const VerticalCards = dynamic(() => import("@/components/sections/VerticalCards").then((mod) => mod.VerticalCards));
const StatsStacked = dynamic(() => import("@/components/sections/StatsStacked").then((mod) => mod.StatsStacked));
const TestimonialsWall = dynamic(() => import("@/components/sections/TestimonialsWall").then((mod) => mod.TestimonialsWall));
const ProcessSteps = dynamic(() => import("@/components/sections/ProcessSteps").then((mod) => mod.ProcessSteps));
const TeamHighlight = dynamic(() => import("@/components/sections/TeamHighlight").then((mod) => mod.TeamHighlight));
const BlogTeaserGrid = dynamic(() => import("@/components/sections/BlogTeaserGrid").then((mod) => mod.BlogTeaserGrid));
const FaqSection = dynamic(() => import("@/components/sections/FaqSection").then((mod) => mod.FaqSection));
const CtaStrip = dynamic(() => import("@/components/sections/CtaStrip").then((mod) => mod.CtaStrip));
const TestimonialQuote = dynamic(() => import("@/components/sections/TestimonialQuote").then((mod) => mod.TestimonialQuote));

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HeroMain />
      <div id="clients"><LogoCloud /></div>
      <div id="guarantee" className="scroll-mt-20"><FeatureGrid /></div>
      <FeatureWithMockup />
      <VerticalCards />
      <StatsStacked />
      <div id="testimonials" className="scroll-mt-20">
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
      </div>
      <div id="process" className="scroll-mt-20"><ProcessSteps /></div>
      <TeamHighlight />
      <BlogTeaserGrid />
      <div id="faq" className="scroll-mt-20"><FaqSection /></div>
      <CtaStrip />
    </div>
  );
}
