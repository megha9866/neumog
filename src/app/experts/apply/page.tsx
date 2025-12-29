import { ExpertApplyForm } from "@/components/sections/ExpertApplyForm";

export default function ExpertApplyPage() {
  return (
    <div className="bg-[var(--sand-50)] py-24 text-[var(--ink-900)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]">Experts</p>
          <h1 className="text-4xl font-semibold">Apply to join the Neumog bench</h1>
          <p className="text-base text-[var(--muted-600)]">
            Tell us about your craft, availability, and typical engagement model. We curate squads across commerce, hospitality, delivery, and soon RLHF teams.
          </p>
          <ul className="space-y-3 text-sm text-[var(--muted-600)]">
            <li>- Paid per engagement with predictable cadence</li>
            <li>- Work alongside Neumog product, design, and engineering leads</li>
            <li>- Keep control of your schedule and project mix</li>
          </ul>
        </div>
        <ExpertApplyForm />
      </div>
    </div>
  );
}
