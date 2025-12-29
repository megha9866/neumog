import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FeatureWithMockup } from "@/components/sections/FeatureWithMockup";
import { TestimonialQuote } from "@/components/sections/TestimonialQuote";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { testimonials } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const timeline = [
	{
		title: "Intake + squad design",
		copy: "We unpack objectives, map gaps, and assemble a draft squad with internal PM/architect plus specialist experts.",
		caption: "Week 0",
	},
	{
		title: "Build loops",
		copy: "Two-week increments with shared rituals, async updates, and stakeholder demos. Internal leads own consistency.",
		caption: "Weeks 1-8",
	},
	{
		title: "Launch + operate",
		copy: "We ship to production, lock SLAs, and keep core leads while rotating specialist capacity as needed.",
		caption: "Weeks 8+",
	},
];

const statsRow = [
	{ label: "Avg. kickoff", value: "5 days" },
	{ label: "Expert collective", value: "160+" },
	{ label: "Retention", value: "92%" },
	{ label: "Time zones", value: "3" },
];

export default function HowItWorksPage() {
	return (
		<div className="bg-[var(--sand-50)] text-[var(--ink-900)]">
			<section className="py-24">
				<div className="mx-auto max-w-5xl px-6 text-center">
					<p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]">
						Process
					</p>
					<h1 className="mt-6 text-4xl font-semibold">
						How Neumog orchestrates hybrid delivery
					</h1>
					<p className="mt-4 text-lg text-[var(--muted-600)]">
						Internal product, design, data, and engineering leads blend with senior experts to ship faster across web, mobile, and Gen AI/ML without losing context.
					</p>
				</div>
			</section>
			<div className="mx-auto max-w-6xl px-6">
				<StatsStrip items={statsRow} />
			</div>
			<ProcessSteps />
			<section className="py-24">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeading
						eyebrow="Timeline"
						title="From handshake to live product"
						description="Every phase is transparent in the delivery workspace so clients, employees, and experts stay aligned."
						alignment="left"
					/>
					<div className="mt-12">
						<ProcessTimeline items={timeline} />
					</div>
				</div>
			</section>
			<FeatureWithMockup />
			<section className="py-24">
				<div className="mx-auto max-w-5xl px-6">
					<TestimonialQuote
						quote={testimonials.featured.quote}
						author={testimonials.featured.author}
						role={testimonials.featured.role}
					/>
				</div>
			</section>
			<FaqSection
				title="Process & operations"
				description="Custom SOWs available on request."
			/>
			<CtaStrip />
		</div>
	);
}
