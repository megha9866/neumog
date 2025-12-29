export default function TermsPage() {
  return (
    <div className="bg-[var(--sand-50)] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-semibold text-[var(--ink-900)]">Terms of Service</h1>
        <p className="mt-4 text-[var(--muted-500)]">
          These placeholder terms describe how Neumog engages clients, expert partners, and future RLHF contributors. Replace with real legal copy.
        </p>
        <div className="mt-10 space-y-6 text-sm text-[var(--muted-500)]">
          <section>
            <h2 className="text-xl text-[var(--ink-900)]">1. Engagement</h2>
            <p>Work begins after mutual SOW signature and deposit.</p>
          </section>
          <section>
            <h2 className="text-xl text-[var(--ink-900)]">2. IP Ownership</h2>
            <p>All delivered work transfers to the client upon payment, excluding reusable accelerators.</p>
          </section>
          <section>
            <h2 className="text-xl text-[var(--ink-900)]">3. Confidentiality</h2>
            <p>Mutual NDAs cover client data, expert partner details, and product roadmaps.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
