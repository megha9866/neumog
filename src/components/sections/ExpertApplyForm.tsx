"use client";

import { FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function ExpertApplyForm() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'EXPERTS', ...data }),
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        event.currentTarget.reset();
      } else {
        const error = await response.json();
        alert('Error: ' + (error.error || 'Submission failed'));
      }
    } catch (err) {
      console.error(err);
      alert('An unexpected error occurred.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-[32px] border border-[var(--border-soft)] bg-[var(--card-surface)] p-8 shadow-[0_18px_60px_rgba(36,20,8,0.1)]"
    >
      <div>
        <label htmlFor="name" className="text-sm text-[var(--muted-600)]">
          Full name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--sand-50)] px-4 py-3 text-[var(--ink-900)] placeholder:text-[var(--muted-400)]"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm text-[var(--muted-600)]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--sand-50)] px-4 py-3 text-[var(--ink-900)] placeholder:text-[var(--muted-400)]"
        />
      </div>
      <div>
        <label htmlFor="skills" className="text-sm text-[var(--muted-600)]">
          Core skills
        </label>
        <input
          id="skills"
          name="skills"
          placeholder="e.g. Product design, Android, MLOps"
          required
          className="mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--sand-50)] px-4 py-3 text-[var(--ink-900)] placeholder:text-[var(--muted-400)]"
        />
      </div>
      <div>
        <label htmlFor="hours" className="text-sm text-[var(--muted-600)]">
          Weekly availability
        </label>
        <input
          id="hours"
          name="hours"
          placeholder="10 hrs/week"
          className="mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--sand-50)] px-4 py-3 text-[var(--ink-900)] placeholder:text-[var(--muted-400)]"
        />
      </div>
      <div>
        <label htmlFor="portfolio" className="text-sm text-[var(--muted-600)]">
          Portfolio / LinkedIn / GitHub
        </label>
        <input
          id="portfolio"
          name="portfolio"
          className="mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--sand-50)] px-4 py-3 text-[var(--ink-900)] placeholder:text-[var(--muted-400)]"
        />
      </div>
      <div>
        <label htmlFor="notes" className="text-sm text-[var(--muted-600)]">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--sand-50)] px-4 py-3 text-[var(--ink-900)] placeholder:text-[var(--muted-400)]"
        />
      </div>
      <Button type="submit" className="w-full">
        Submit application
      </Button>
    </form>
  );
}
