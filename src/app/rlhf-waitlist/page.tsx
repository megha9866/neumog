import { RlhfWaitlistForm } from "@/components/sections/RlhfWaitlistForm";

export default function RlhfWaitlistPage() {
  return (
    <div className="bg-[var(--sand-50)] py-24 text-[var(--ink-900)]">
      <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]">RLHF & data annotation</p>
          <h1 className="text-4xl font-semibold">Join the Neumog waitlist</h1>
          <p className="text-base text-[var(--muted-600)]">
            We are assembling pods of annotation leads, linguists, labelers, and quality reviewers for Reinforcement Learning from Human Feedback and SFT work. Share your details and we will reach out as soon as projects open up.
          </p>
          <ul className="space-y-3 text-sm text-[var(--muted-600)]">
            <li>- Paid hourly with clear QA rubrics</li>
            <li>- Remote-friendly, async collaboration</li>
            <li>- Transparent expectations before each batch</li>
          </ul>
        </div>
        <RlhfWaitlistForm />
      </div>
    </div>
  );
}
