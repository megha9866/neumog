"use client";

import { HeroServices } from "@/components/hero/HeroServices";
import { VerticalCards } from "@/components/sections/VerticalCards";
import { FeatureWithMockup } from "@/components/sections/FeatureWithMockup";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTheme } from "@/contexts/ThemeContext";
import { GradientCard } from "@/components/ui/GradientCard";

const serviceStats = [
  { label: "Commerce builds", value: "22" },
  { label: "Hospitality launches", value: "11" },
  { label: "Delivery fleets", value: "9" },
  { label: "Local marketplaces", value: "6" },
];

const platformFeatures = [
  {
    title: "Composable architecture",
    copy: "Packages for e-com, hospitality, and logistics to avoid greenfield waste.",
  },
  {
    title: "Ops visibility",
    copy: "Shared delivery workspace with staffing, financials, and QA gating.",
  },
  {
    title: "Future RLHF pods",
    copy: "Spin up annotation teams once platform lands funding (waitlist live).",
  },
];

export default function ServicesPage() {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "bg-[var(--background)] text-white" : "bg-[var(--sand-50)] text-[var(--ink-900)]"}>
      <HeroServices
        title="Product, AI/ML, and data science squads on demand"
        description="Composable accelerators, hybrid squads, and Gen AI/MLOps/data science delivery plus RLHF/annotation streams when you are ready."
        stats={serviceStats}
      />
      <VerticalCards />
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Platform"
            title="What's inside the Neumog delivery platform"
            description="The control center where clients, internal leads, and experts stay aligned."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {platformFeatures.map((feature) => (
              <GradientCard key={feature.title}>
                <h3 className={theme === "dark" ? "text-xl text-white" : "text-xl text-[var(--ink-900)]"}>
                  {feature.title}
                </h3>
                <p className={theme === "dark" ? "mt-3 text-sm text-gray-300" : "mt-3 text-sm text-[var(--muted-600)]"}>
                  {feature.copy}
                </p>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>
      <FeatureWithMockup />
      <CtaStrip />
    </div>
  );
}
