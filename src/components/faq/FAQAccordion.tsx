"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <div className="space-y-3" role="region" aria-labelledby="faq-heading">
      {items.map((item, index) => {
        const isOpen = openId === index;
        const id = `faq-${index}`;
        const answerId = `faq-answer-${index}`;
        return (
          <div
            key={index}
            className="rounded-xl border border-neutral-200 bg-white overflow-hidden"
          >
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-neutral-900 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                aria-expanded={isOpen}
                aria-controls={answerId}
                id={id}
                onClick={() => setOpenId(isOpen ? null : index)}
              >
                {item.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600">
                  <svg
                    className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={answerId}
              role="region"
              aria-labelledby={id}
              className={`overflow-hidden transition-all ${isOpen ? "max-h-96" : "max-h-0"}`}
            >
              <div className="border-t border-neutral-200 px-5 py-4 text-neutral-600">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
