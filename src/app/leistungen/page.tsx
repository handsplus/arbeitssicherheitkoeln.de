import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { LeistungenServiceSchema } from "@/components/seo/LeistungenServiceSchema";
import { JsonLdWebPageSchema } from "@/components/seo/JsonLdWebPageSchema";
import { canonicalUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Leistungen – Arbeitssicherheit & Arbeitsschutz Köln",
  description:
    "Leistungen für Arbeitssicherheit und Arbeitsschutz in Köln: externe Fachkraft für Arbeitssicherheit (SiFa), Gefährdungsbeurteilungen, Unterweisungen, Betriebsanweisungen, Begehungen und Beratung. Individuell für Ihr Unternehmen.",
  openGraph: {
    title: "Leistungen | Arbeitssicherheit & Arbeitsschutz Köln",
    description:
      "Externe SiFa, Gefährdungsbeurteilungen, Unterweisungen, Dokumentation – Ihr Leistungsspektrum für Arbeitsschutz in Köln.",
    url: canonicalUrl("/leistungen"),
  },
  alternates: { canonical: canonicalUrl("/leistungen") },
};

const sections = [
  {
    id: "fachkraft",
    title: "Externe Fachkraft für Arbeitssicherheit (SiFa)",
    content: `Als externe Fachkraft für Arbeitssicherheit übernehmen wir die gesetzlich geforderte Betreuung Ihres Unternehmens. Nach DGUV Vorschrift 2 müssen Betriebe eine Fachkraft für Arbeitssicherheit bestellen – wir erfüllen diese Rolle für Sie und entlasten Sie von der fachlichen Verantwortung im Arbeitsschutz.

      Unsere Betreuung umfasst die Beratung von Arbeitgeber und Führungskräften, die Mitwirkung bei der Gefährdungsbeurteilung, Unterweisungen, Begehungen und die Dokumentation. Sie erhalten einen festen Ansprechpartner, der Ihre betrieblichen Gegebenheiten kennt und Sie rechtssicher begleitet.`,
  },
  {
    id: "gefaehrdungsbeurteilung",
    title: "Gefährdungsbeurteilungen",
    content: `Die Gefährdungsbeurteilung ist das zentrale Instrument des Arbeitsschutzes und gesetzlich verpflichtend (§ 5 ArbSchG). Wir ermitteln und bewerten systematisch alle relevanten Gefährdungen in Ihrem Betrieb – physisch, psychisch und organisatorisch.

      Auf dieser Grundlage leiten wir konkrete Maßnahmen ab und dokumentieren alles nachvollziehbar. So erfüllen Sie Ihre Pflichten und schaffen eine solide Basis für sicheres Arbeiten. Wir passen die Gefährdungsbeurteilung an Ihre Branche, Arbeitsplätze und Tätigkeiten an.`,
  },
  {
    id: "unterweisungen",
    title: "Unterweisungen und Sicherheitsschulungen",
    content: `Unterweisungen sind gesetzlich vorgeschrieben und müssen regelmäßig sowie bei neuen Gefährdungen durchgeführt werden. Wir führen Sicherheitsunterweisungen für Ihre Mitarbeiter durch – praxisnah, verständlich und rechtssicher dokumentiert.

      Ob Ersteinweisung, Wiederholungsunterweisung oder themenspezifische Schulung: Wir gestalten die Inhalte passend zu Ihrem Betrieb und Ihren Risiken. So sind Ihre Beschäftigten informiert und Sie haben den Nachweis für Behörden und Berufsgenossenschaften.`,
  },
  {
    id: "betriebsanweisungen",
    title: "Betriebsanweisungen und Dokumentation",
    content: `Betriebsanweisungen müssen für gefährliche Tätigkeiten und Arbeitsmittel vorliegen und für die Beschäftigten zugänglich sein. Wir erstellen und aktualisieren Ihre Betriebsanweisungen nach anerkannten Standards und passen sie an Ihre Arbeitsabläufe an.

      Darüber hinaus unterstützen wir Sie bei der strukturierten Dokumentation des Arbeitsschutzes: Gefährdungsbeurteilungen, Unterweisungsnachweise, Begehungsprotokolle und weitere Nachweise, die bei Prüfungen oder Audits gefordert werden.`,
  },
  {
    id: "begehungen",
    title: "Sicherheitsbegehungen",
    content: `Regelmäßige Begehungen in Ihrem Betrieb helfen, Gefährdungen früh zu erkennen und den Stand des Arbeitsschutzes zu überprüfen. Wir führen Begehungen durch, dokumentieren Befunde und leiten konkrete Handlungsempfehlungen ab.

      So bleiben Sie proaktiv und vermeiden Mängel, bevor sie zu Beanstandungen oder Unfällen führen. Die Begehungen sind Teil einer kontinuierlichen Betreuung und können mit Unterweisungen oder Gefährdungsbeurteilungen verzahnt werden.`,
  },
  {
    id: "beratung",
    title: "Beratung und Unterstützung bei gesetzlichen Anforderungen",
    content: `Das Arbeitsschutzrecht ist vielfältig: ArbSchG, DGUV Vorschriften, Gefahrstoffverordnung, Arbeitsstättenverordnung und weitere Vorschriften können für Ihren Betrieb relevant sein. Wir beraten Sie zu Ihren Pflichten und unterstützen Sie bei der Umsetzung.

      Ob Einmalberatung oder laufende Betreuung – wir erklären Anforderungen verständlich und zeigen praxisnahe Lösungen. So bleiben Sie auf der sicheren Seite und können sich auf Ihr Kerngeschäft konzentrieren.`,
  },
];

export default function LeistungenPage() {
  return (
    <>
      <LeistungenServiceSchema />
      <JsonLdWebPageSchema
        path="/leistungen"
        name="Leistungen für Arbeitssicherheit und Arbeitsschutz in Köln"
        description="Externe SiFa, Gefährdungsbeurteilungen, Unterweisungen, Betriebsanweisungen, Begehungen und Arbeitsschutzberatung für Unternehmen in Köln und Umgebung."
      />
      <BreadcrumbSchema items={[{ name: "Startseite", path: "/" }, { name: "Leistungen", path: "/leistungen" }]} />
    <article className="section-padding">
      <div className="container-tight">
        <header className="mx-auto max-w-3xl text-center" style={{ minHeight: "12rem" }}>
          <h1 className="heading-section">
            Leistungen für Arbeitssicherheit und Arbeitsschutz in Köln
          </h1>
          <p className="heading-section-sub">
            Von der externen Fachkraft für Arbeitssicherheit über Gefährdungsbeurteilungen und Unterweisungen bis zur vollständigen Arbeitsschutz-Dokumentation: unser Leistungsspektrum für Unternehmen in Köln und Umgebung.
          </p>
        </header>

        <nav className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Inhalte dieser Seite">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              {s.title}
            </a>
          ))}
        </nav>

        <div className="mt-16 space-y-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-neutral-600 [&>p]:leading-relaxed">
                {section.content.split("\n\n").map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6">
            <h2 className="text-lg font-semibold text-neutral-900">
              Nach Branche
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Ob Handwerk, Büro, Produktion oder Handel: Wir passen die Betreuung an Ihre Branche an.
            </p>
            <Link href="/branchen" className="link-underline mt-4 inline-flex font-medium">
              Branchen ansehen →
            </Link>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6">
            <h2 className="text-lg font-semibold text-neutral-900">
              Ratgeber & Wissen
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Artikel zu Gefährdungsbeurteilung, Unterweisung, SiFa und mehr – für Köln und Umgebung.
            </p>
            <Link href="/blog" className="link-underline mt-4 inline-flex font-medium">
              Zum Blog →
            </Link>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-primary-50 p-8 text-center">
          <h2 className="text-xl font-bold text-neutral-900">
            Individuelles Angebot für Ihr Unternehmen
          </h2>
          <p className="mt-2 text-neutral-600">
            Wir passen Leistungsumfang und Betreuungsintensität an Ihre Branche, Größe und Ziele an.
          </p>
          <Link href="/kontakt" className="btn-primary mt-6">
            Unverbindliche Anfrage senden
          </Link>
        </div>
      </div>
    </article>
    </>
  );
}
