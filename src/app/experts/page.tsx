"use client";

import { HeroExperts } from "@/components/hero/HeroExperts";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialQuote } from "@/components/sections/TestimonialQuote";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { useTheme } from "@/contexts/ThemeContext";
import { GradientCard } from "@/components/ui/GradientCard";

const expertBenefits = [
  {
    title: "Serious products",
    body: "Enterprise-level challenges across commerce, hospitality, and logistics—not task scraps.",
  },
  {
    title: "Fair rates",
    body: "We publish rate bands per role and align on scope before you join.",
  },
  {
    title: "No admin drag",
    body: "Neumog handles contracts, invoicing, and rituals so you focus on building.",
  },
];

const onboarding = [
  {
    title: "Apply with your superpower",
    copy: "Showcase domain expertise, past roles, and availability (weekend-only is fine).",
    caption: ""
  },
  {
    title: "Pair with internal leads",
    copy: "We match you with a Neumog PM or architect who keeps context steady and clients confident.",
    caption: ""
  },
  {
    title: "Drop into squads",
    copy: "Join sprints, RLHF pods, or specialized tiger teams—opt in per engagement.",
    caption: ""
  },
];

const expertFaq = [
  {
    question: "Is this full-time?",
    answer: "No. Most experts contribute 10–25 hours/week alongside other work, but we also support full-time contracts when both sides want it.",
  },
  {
    question: "How do payments work?",
    answer: "Monthly payouts via Deel or Wise, with Neumog handling client invoicing and currency conversion.",
  },
  {
    question: "Can I pick projects?",
    answer: "Yes. We send briefs that match your skills, and you confirm interest before onboarding.",
  },
];

export default function ExpertsPage() {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "bg-[var(--background)] text-white" : "bg-[var(--sand-50)] text-[var(--ink-900)]"}>
      <HeroExperts
        title="Connecting senior builders with hybrid squads"
        description="Plug into serious product, data, and Gen AI/ML programs led by Neumog's internal team. Flexible hours, real impact, zero gig chaos."
      />
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Benefits"
            title="Why experts stick with Neumog"
            description="You get the good parts of independent life with the structure of an in-house team."
            alignment="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {expertBenefits.map((benefit) => (
              <GradientCard key={benefit.title}>
                <h3 className={theme === "dark" ? "text-xl text-white" : "text-xl text-[var(--ink-900)]"}>{benefit.title}</h3>
                <p className={theme === "dark" ? "mt-3 text-sm text-gray-300" : "mt-3 text-sm text-[var(--muted-600)]"}>{benefit.body}</p>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Onboarding"
            title="How the Expert Collective works"
            description="Three steps to go from intro call to embedded contributor."
            alignment="left"
          />
          <div className="mt-12">
            <ProcessTimeline items={onboarding} />
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <TestimonialQuote
            quote="Neumog lets me keep my day job but still join ambitious launches a few hours a week. Everything is organized."
            author="Carlos Mendes"
            role="Product Designer"
          />
        </div>
      </section>
      <FaqSection items={expertFaq} title="Expert Collective FAQs" eyebrow="Experts" />
      <CtaStrip />
    </div>
  );
}
