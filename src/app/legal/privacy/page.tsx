export default function PrivacyPage() {
  return (
    <div className="bg-[var(--sand-50)] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-semibold text-[var(--ink-900)]">Privacy Policy</h1>
        <p className="mt-4 text-[var(--muted-500)]">
          Neumog collects lead info to staff projects and run RLHF waitlists. Replace with comprehensive policy before launch.
        </p>
        <div className="mt-10 space-y-6 text-sm text-[var(--muted-500)]">
          <section>
            <h2 className="text-xl text-[var(--ink-900)]">Data collected</h2>
            <p>Contact details, project briefs, expert skill data, and anonymized analytics.</p>
          </section>
          <section>
            <h2 className="text-xl text-[var(--ink-900)]">Usage</h2>
            <p>We use data to staff projects, pay experts, and communicate about RLHF programs.</p>
          </section>
          <section>
            <h2 className="text-xl text-[var(--ink-900)]">Security</h2>
            <p>Forms are transmitted over HTTPS, with secrets stored via environment variables.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
