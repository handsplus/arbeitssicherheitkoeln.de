import type { FAQItem } from "@/types/faq";

type Props = { items: FAQItem[]; pageUrl?: string };

export function FAQSchema({ items, pageUrl }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl ? { url: pageUrl, "@id": `${pageUrl}#faq` } : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
