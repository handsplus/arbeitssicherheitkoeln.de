import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Über uns – Warum Arbeitssicherheit Köln",
  description:
    "Erfahren Sie, warum wir Ihr Partner für Arbeitssicherheit in Köln sind: Erfahrung, lokaler Bezug, individuelle Betreuung und hohe fachliche Standards.",
  openGraph: {
    title: "Über uns | Arbeitssicherheit Köln",
    description: "Ihr Partner für Arbeitssicherheit in Köln – Erfahrung, Lokalität, Vertrauen.",
  },
  alternates: { canonical: "https://www.arbeitssicherheitkoeln.de/ueber-uns" },
};

const values = [
  {
    title: "Fachliche Kompetenz",
    text: "Qualifizierte Fachkraft für Arbeitssicherheit mit fundierter Ausbildung und praktischer Erfahrung in verschiedenen Branchen. Wir arbeiten nach anerkannten Standards und bleiben fachlich am Ball.",
  },
  {
    title: "Lokaler Bezug zu Köln",
    text: "Köln und die Region sind unser Schwerpunkt. Vor-Ort-Termine, persönlicher Kontakt und die Kenntnis lokaler Gegebenheiten gehören für uns dazu – keine anonyme Ferndienstleistung.",
  },
  {
    title: "Individuelle Betreuung",
    text: "Jeder Betrieb ist anders. Wir passen Leistungsumfang, Betreuungsintensität und Kommunikation an Ihre Größe, Branche und Wünsche an – kein starres Einheitsprogramm.",
  },
  {
    title: "Transparenz und Verlässlichkeit",
    text: "Klare Absprachen, verständliche Erklärungen und nachvollziehbare Dokumentation. Sie wissen, was wir tun und was Sie erwarten können – ohne versteckte Kosten oder Überraschungen.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Startseite", path: "/" }, { name: "Über uns", path: "/ueber-uns" }]} />
    <article className="section-padding">
      <div className="container-tight">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="heading-section">
            Über uns – Ihr Partner für Arbeitssicherheit in Köln
          </h1>
          <p className="heading-section-sub">
            Wir unterstützen Unternehmen in Köln und Umgebung dabei, Arbeitssicherheit und Arbeitsschutz professionell umzusetzen – mit lokalem Bezug, fachlicher Tiefe und dem Anspruch, Ihr verlässlicher Partner zu sein.
          </p>
        </header>

        <div className="mx-auto mt-16 max-w-3xl space-y-8 text-neutral-600">
          <p className="text-lg leading-relaxed">
            Als externe Fachkraft für Arbeitssicherheit übernehmen wir die gesetzlich geforderte Betreuung von Betrieben, die keine eigene SiFa beschäftigen. Unser Fokus liegt auf kleinen und mittleren Unternehmen in Köln und der Region – von Handwerk über Dienstleistung bis zur Produktion.
          </p>
          <p className="leading-relaxed">
            Unser Ziel ist es, Sie zu entlasten und gleichzeitig Rechtssicherheit zu schaffen: durch Gefährdungsbeurteilungen, Unterweisungen, Betriebsanweisungen und eine strukturierte Dokumentation, die Behörden und Berufsgenossenschaften genügt. Dabei legen wir Wert auf verständliche Kommunikation und maßgeschneiderte Lösungen – nicht auf Bürokratie um ihrer selbst willen.
          </p>
        </div>

        <section className="mt-20" aria-labelledby="werte-heading">
          <h2 id="werte-heading" className="heading-section text-center">
            Was uns wichtig ist
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2" role="list">
            {values.map((v) => (
              <li key={v.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900">{v.title}</h3>
                <p className="mt-2 text-neutral-600">{v.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-20 text-center">
          <p className="text-neutral-600">
            Sie möchten mehr erfahren oder ein unverbindliches Gespräch führen?
          </p>
          <Link href="/kontakt" className="btn-primary mt-4">
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </article>
    </>
  );
}
