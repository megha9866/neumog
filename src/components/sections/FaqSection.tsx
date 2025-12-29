"use client";

import { useState } from "react";
import { faqItems as defaultFaqItems } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTheme } from "@/contexts/ThemeContext";

interface FAQItem {
  question: string;
  answer: React.ReactNode | string;
}

interface FaqSectionProps {
  items?: FAQItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function FaqSection({
  items = defaultFaqItems,
  eyebrow = "FAQ",
  title = "Questions we hear every week",
  description = "If you need more detail, email hello@neumog.com",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const { theme } = useTheme();

  return (
    <section className={theme === "dark" ? "py-24" : "bg-[var(--sand-50)] py-24"}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          alignment="center"
        />
        <div className={theme === "dark"
          ? "mx-auto mt-12 max-w-3xl divide-y divide-white/10 rounded-3xl border border-white/10 bg-[rgba(10,15,25,0.6)] shadow-[0_22px_70px_rgba(0,0,0,0.3)]"
          : "mx-auto mt-12 max-w-3xl divide-y divide-[var(--border-soft)] rounded-3xl border border-[var(--border-soft)] bg-[rgba(255,255,255,0.82)] shadow-[0_22px_70px_rgba(36,20,8,0.12)]"
        }>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={item.question}
                type="button"
                className="w-full px-6 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <div className="flex items-center justify-between">
                  <p className={theme === "dark" ? "text-base font-semibold text-white" : "text-base font-semibold text-[var(--ink-900)]"}>
                    {item.question}
                  </p>
                  <span className={theme === "dark" ? "text-xl text-cyan-200" : "text-xl text-[var(--accent-600)]"}>
                    {isOpen ? "-" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <p className={theme === "dark" ? "mt-3 text-sm text-gray-300" : "mt-3 text-sm text-[var(--muted-500)]"}>
                    {item.answer}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
