"use client";

import { FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function RlhfWaitlistForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.info("RLHF waitlist submission", Object.fromEntries(formData));
    event.currentTarget.reset();
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
        <label htmlFor="focus" className="text-sm text-[var(--muted-600)]">
          Primary expertise (RLHF / SFT / QA)
        </label>
        <input
          id="focus"
          name="focus"
          required
          className="mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--sand-50)] px-4 py-3 text-[var(--ink-900)] placeholder:text-[var(--muted-400)]"
        />
      </div>
      <div>
        <label htmlFor="hours" className="text-sm text-[var(--muted-600)]">
          Availability (hours per week)
        </label>
        <input
          id="hours"
          name="hours"
          type="number"
          min={1}
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
        Join waitlist
      </Button>
    </form>
  );
}
