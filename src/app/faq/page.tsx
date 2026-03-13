import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { faqPageFAQ } from "@/data/faq";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "FAQ – Häufige Fragen zur Arbeitssicherheit Köln",
  description:
    "Antworten auf häufige Fragen: externe Fachkraft für Arbeitssicherheit, Kosten, Gefährdungsbeurteilung, Unterweisungen und Betreuung in Köln.",
  openGraph: {
    title: "FAQ | Arbeitssicherheit Köln",
    description: "Häufige Fragen zu Arbeitssicherheit und Arbeitsschutz in Köln.",
  },
  alternates: { canonical: "https://www.arbeitssicherheitkoeln.de/faq" },
};

export default function FAQPage() {
  return (
    <>
      <FAQSchema items={faqPageFAQ} />
      <BreadcrumbSchema items={[{ name: "Startseite", path: "/" }, { name: "FAQ", path: "/faq" }]} />
      <article className="section-padding">
        <div className="container-tight">
          <header className="mx-auto max-w-2xl text-center">
            <h1 className="heading-section">
              Häufige Fragen zur Arbeitssicherheit in Köln
            </h1>
            <p className="heading-section-sub">
              Kurze Antworten auf typische Fragen zu externer Fachkraft, Betreuung, Gefährdungsbeurteilung und Unterweisungen.
            </p>
          </header>

          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqPageFAQ} />
          </div>

          <p className="mt-12 text-center">
            <Link href="/kontakt" className="btn-primary">
              Persönliche Anfrage stellen
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
