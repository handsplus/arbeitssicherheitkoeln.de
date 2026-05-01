import Link from "next/link";
import dynamic from "next/dynamic";
import { homeFAQ } from "@/data/faq";

const FAQAccordion = dynamic(
  () => import("@/components/faq/FAQAccordion").then((m) => ({ default: m.FAQAccordion })),
  { ssr: false }
);

export function HomeFAQ() {
  return (
    <section className="section-padding bg-neutral-50" aria-labelledby="faq-heading">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="faq-heading" className="heading-section">
            Häufige Fragen zu Arbeitssicherheit und Arbeitsschutz in Köln
          </h2>
          <p className="heading-section-sub">
            Kurze Antworten zu externer SiFa, Arbeitsschutzbetreuung und unseren Leistungen.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion items={homeFAQ} />
        </div>
        <p className="mt-8 text-center">
          <Link href="/faq" className="link-underline font-medium">
            Alle FAQ ansehen
          </Link>
        </p>
      </div>
    </section>
  );
}
