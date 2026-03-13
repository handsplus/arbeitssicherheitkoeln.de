import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { branches } from "@/data/branchen";

export const metadata: Metadata = {
  title: "Branchen – Arbeitssicherheit für jede Branche in Köln",
  description:
    "Arbeitsschutz und Betreuung nach Branche: Handwerk, Büro, Produktion, Dienstleistung, Handel. Individuelle Lösungen für Unternehmen in Köln und Umgebung.",
  openGraph: {
    title: "Branchen | Arbeitssicherheit Köln",
    description: "Arbeitssicherheit und SiFa-Betreuung für Handwerk, Büro, Produktion und mehr in Köln.",
  },
  alternates: { canonical: "https://www.arbeitssicherheitkoeln.de/branchen" },
};

export default function BranchenPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Startseite", path: "/" }, { name: "Branchen", path: "/branchen" }]} />
      <article className="section-padding">
        <div className="container-tight">
          <header className="mx-auto max-w-2xl text-center">
            <h1 className="heading-section">
              Branchen – Arbeitssicherheit für jede Branche in Köln
            </h1>
            <p className="heading-section-sub">
              Ob Handwerk, Büro, Produktion, Handel oder soziale Einrichtung: Wir passen die Arbeitsschutzbetreuung an Ihre Branche und Ihre betrieblichen Gegebenheiten an.
            </p>
          </header>

          <nav className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Branchen auf dieser Seite">
            {branches.map((b) => (
              <a
                key={b.id}
                href={`#${b.id}`}
                className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                {b.title}
              </a>
            ))}
          </nav>

          <div className="mt-16 space-y-16">
            {branches.map((branch) => (
              <section key={branch.id} id={branch.id} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
                  {branch.title}
                </h2>
                <p className="mt-2 text-neutral-500">{branch.short}</p>
                {branch.highlights.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2" role="list">
                    {branch.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-700"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-6 space-y-4">
                  {branch.content.map((para, i) => (
                    <p key={i} className="text-neutral-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                <p className="mt-6">
                  <Link
                    href={`/branchen/${branch.id}`}
                    className="link-underline inline-flex items-center font-medium"
                  >
                    Mehr zu Arbeitssicherheit für {branch.title}
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </p>
              </section>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-primary-50 p-8 text-center">
            <h2 className="text-xl font-bold text-neutral-900">
              Ihre Branche ist dabei?
            </h2>
            <p className="mt-2 text-neutral-600">
              Wir erstellen Ihnen ein unverbindliches Angebot – passend zu Ihrer Branche und Betriebsgröße.
            </p>
            <Link href="/kontakt" className="btn-primary mt-6">
              Anfrage senden
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
