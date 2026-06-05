import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { RegionKöln } from "@/components/home/RegionKöln";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { JsonLdWebPageSchema } from "@/components/seo/JsonLdWebPageSchema";
import { SifaServiceSchema } from "@/components/seo/SifaServiceSchema";
import { sifaPageFAQ } from "@/data/sifa-faq";
import { canonicalUrl, sifaPagePath } from "@/config/site";

export const metadata: Metadata = {
  title: "Externe Fachkraft für Arbeitssicherheit Köln | SiFa-Betreuung",
  description:
    "Externe Fachkraft für Arbeitssicherheit (SiFa) in Köln: DGUV-konforme Betreuung, Gefährdungsbeurteilungen, Unterweisungen und Begehungen – feste Ansprechpartner vor Ort.",
  openGraph: {
    title: "Externe Fachkraft für Arbeitssicherheit Köln | SiFa-Betreuung",
    description:
      "SiFa-Betreuung in Köln: gesetzeskonform, individuell und mit festem Ansprechpartner – Gefährdungsbeurteilung, Unterweisungen, Dokumentation.",
    url: canonicalUrl(sifaPagePath),
  },
  alternates: { canonical: canonicalUrl(sifaPagePath) },
};

const leistungen = [
  {
    title: "Gefährdungsbeurteilungen",
    text: "Systematische Ermittlung und Bewertung aller relevanten Gefährdungen – Grundlage für wirksame Schutzmaßnahmen und rechtssichere Nachweise.",
    href: "/leistungen#gefaehrdungsbeurteilung",
  },
  {
    title: "Sicherheitsbegehungen",
    text: "Regelmäßige Begehungen in Ihrem Betrieb mit dokumentierten Befunden und konkreten Handlungsempfehlungen.",
    href: "/leistungen#begehungen",
  },
  {
    title: "Sicherheitsunterweisungen",
    text: "Praxisnahe Unterweisungen für Ihre Beschäftigten – rechtssicher durchgeführt und vollständig dokumentiert.",
    href: "/leistungen#unterweisungen",
  },
  {
    title: "Betriebsanweisungen",
    text: "Erstellung und Aktualisierung von Betriebsanweisungen für Arbeitsmittel, Gefahrstoffe und Tätigkeiten.",
    href: "/leistungen#betriebsanweisungen",
  },
  {
    title: "ASA-Sitzungen",
    text: "Vorbereitung und Mitwirkung bei Arbeitsschutzausschuss-Sitzungen – inklusive Protokollierung.",
    href: "/leistungen#beratung",
  },
  {
    title: "Arbeitsschutzberatung",
    text: "Beratung zu ArbSchG, ASiG, DGUV-Vorschriften und weiteren Anforderungen – verständlich und umsetzbar.",
    href: "/leistungen#beratung",
  },
];

const risikogruppen = [
  { gruppe: "Gruppe I (hohes Risiko)", stunden: "2,5 Stunden", beispiel: "Bau, Metall, Chemie" },
  { gruppe: "Gruppe II (mittleres Risiko)", stunden: "1,5 Stunden", beispiel: "Handwerk, Pflege, Logistik" },
  { gruppe: "Gruppe III (geringes Risiko)", stunden: "0,5 Stunden", beispiel: "Büro, Verwaltung, IT" },
];

const ablauf = [
  {
    num: "1",
    title: "Erstgespräch",
    text: "Kostenloses, unverbindliches Kennenlernen: Wir klären Ihren Betrieb, Ihre Branche und den Betreuungsbedarf.",
  },
  {
    num: "2",
    title: "Angebot & Planung",
    text: "Transparentes Angebot nach DGUV Vorschrift 2 – mit klar definiertem Leistungsumfang und Betreuungsmodell.",
  },
  {
    num: "3",
    title: "Onboarding",
    text: "Bestandsaufnahme Ihrer Arbeitsschutz-Dokumentation, Erstbegehung und Festlegung der Betreuungsroutine.",
  },
  {
    num: "4",
    title: "Laufende Betreuung",
    text: "Regelmäßige Termine, Gefährdungsbeurteilungen, Unterweisungen und Dokumentation – ein fester Ansprechpartner.",
  },
];

const vorteile = [
  {
    title: "Echter Standort in Köln",
    text: "Vor-Ort-Termine, Begehungen und Unterweisungen in Köln und der Region – kurze Wege, persönlicher Kontakt, keine anonyme Ferndienstleistung.",
  },
  {
    title: "Fester Ansprechpartner",
    text: "Sie arbeiten mit einer qualifizierten Fachkraft für Arbeitssicherheit, die Ihren Betrieb und Ihre Abläufe kennt – nicht mit wechselnden Beratern.",
  },
  {
    title: "Individuell statt Standard",
    text: "Leistungsumfang und Betreuungsintensität richten wir an Ihrer Branche, Betriebsgröße und Gefährdungsgruppe aus – kein Einheitsprogramm.",
  },
  {
    title: "Rechtssicher dokumentiert",
    text: "Alle Leistungen werden nachvollziehbar dokumentiert – Sie sind für Berufsgenossenschaften, Behörden und Audits bestens vorbereitet.",
  },
];

const zielgruppen = [
  "Kleine und mittlere Unternehmen ohne eigene SiFa",
  "Handwerksbetriebe, Büros, Produktion und Dienstleistung",
  "Betriebe, die ihre bisherige SiFa-Betreuung wechseln möchten",
  "Unternehmen mit neuen Gefährdungen oder wachsender Belegschaft",
];

export default function SifaLandingPage() {
  return (
    <>
      <SifaServiceSchema />
      <JsonLdWebPageSchema
        path={sifaPagePath}
        name="Externe Fachkraft für Arbeitssicherheit in Köln"
        description="DGUV-konforme SiFa-Betreuung für Unternehmen in Köln: Gefährdungsbeurteilungen, Unterweisungen, Begehungen und vollständige Arbeitsschutz-Dokumentation."
      />
      <FAQSchema items={sifaPageFAQ} pageUrl={canonicalUrl(sifaPagePath)} />
      <BreadcrumbSchema
        items={[
          { name: "Startseite", path: "/" },
          { name: "Fachkraft für Arbeitssicherheit Köln", path: sifaPagePath },
        ]}
      />

      <article>
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-primary-50 to-white" aria-labelledby="sifa-heading">
          <div className="container-tight">
            <div className="mx-auto max-w-3xl text-center">
              <h1 id="sifa-heading" className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                Externe Fachkraft für Arbeitssicherheit{" "}
                <span className="text-primary-700">in Köln</span>
              </h1>
              <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
                Als externe SiFa übernehmen wir die gesetzlich geforderte sicherheitstechnische Betreuung Ihres
                Unternehmens in Köln und Umgebung – DGUV-konform, individuell und mit festem Ansprechpartner vor Ort.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/kontakt" className="btn-primary w-full sm:w-auto">
                  Unverbindliches Erstgespräch
                </Link>
                <Link href="/leistungen" className="btn-secondary w-full sm:w-auto">
                  Alle Leistungen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Was ist eine SiFa */}
        <section className="section-padding bg-white" aria-labelledby="was-ist-sifa">
          <div className="container-tight mx-auto max-w-3xl">
            <h2 id="was-ist-sifa" className="heading-section text-center">
              Was ist eine Fachkraft für Arbeitssicherheit?
            </h2>
            <div className="mt-8 space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Die <strong className="font-medium text-neutral-800">Fachkraft für Arbeitssicherheit (SiFa)</strong>{" "}
                berät den Arbeitgeber in allen Fragen des Arbeitsschutzes. Nach dem Arbeitssicherheitsgesetz (ASiG) und
                der <strong className="font-medium text-neutral-800">DGUV Vorschrift 2</strong> muss jeder Betrieb mit
                Beschäftigten eine SiFa und einen Betriebsarzt bestellen – unabhängig von der Unternehmensgröße.
              </p>
              <p>
                Die SiFa unterstützt Sie bei der Gefährdungsbeurteilung, bei Unterweisungen, Begehungen und der
                Dokumentation des Arbeitsschutzes. Sie berät Arbeitgeber und Führungskräfte und wirkt bei der Umsetzung
                von Schutzmaßnahmen mit. Für die meisten kleinen und mittleren Unternehmen in Köln ist die{" "}
                <strong className="font-medium text-neutral-800">externe Beauftragung</strong> die wirtschaftlichste und
                praktikabelste Lösung.
              </p>
            </div>
          </div>
        </section>

        {/* Intern vs. extern */}
        <section className="section-padding bg-neutral-50" aria-labelledby="intern-extern">
          <div className="container-tight">
            <h2 id="intern-extern" className="heading-section text-center">
              Interne oder externe SiFa – was passt zu Ihrem Betrieb?
            </h2>
            <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900">Interne SiFa</h3>
                <p className="mt-3 text-neutral-600 leading-relaxed">
                  Sinnvoll für größere Betriebe mit eigener qualifizierter Fachkraft und ausreichend Kapazität. Erfordert
                  Ausbildung, Fortbildung und Vertretungsregelung bei Abwesenheit.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-primary-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary-800">Externe SiFa (unser Angebot)</h3>
                <p className="mt-3 text-neutral-600 leading-relaxed">
                  Die übliche Lösung für KMU in Köln: Sie erhalten fachkundige Betreuung ohne eigene Einstellung, mit
                  festem Ansprechpartner und skalierbarem Leistungsumfang – rechtssicher und kalkulierbar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leistungspaket */}
        <section className="section-padding bg-white" aria-labelledby="leistungen-sifa">
          <div className="container-tight">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="leistungen-sifa" className="heading-section">
                Leistungen Ihrer externen Fachkraft für Arbeitssicherheit
              </h2>
              <p className="heading-section-sub">
                Umfassende sicherheitstechnische Betreuung in Köln – von der Gefährdungsbeurteilung bis zur
                vollständigen Dokumentation.
              </p>
            </div>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {leistungen.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 flex-1 text-neutral-600">{item.text}</p>
                  <Link href={item.href} className="link-underline mt-4 inline-flex text-sm font-medium">
                    Details →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Zielgruppe */}
        <section className="section-padding bg-neutral-50" aria-labelledby="fuer-wen">
          <div className="container-tight mx-auto max-w-3xl">
            <h2 id="fuer-wen" className="heading-section text-center">
              Für wen eignet sich unsere SiFa-Betreuung in Köln?
            </h2>
            <ul className="mt-8 space-y-3" role="list">
              {zielgruppen.map((item) => (
                <li key={item} className="flex items-start gap-3 text-neutral-600">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center">
              <Link href="/branchen" className="link-underline font-medium">
                Arbeitssicherheit nach Branche ansehen →
              </Link>
            </p>
          </div>
        </section>

        {/* Kosten */}
        <section className="section-padding bg-white" aria-labelledby="kosten-sifa">
          <div className="container-tight mx-auto max-w-3xl">
            <h2 id="kosten-sifa" className="heading-section text-center">
              Kosten: Betreuungsumfang nach DGUV Vorschrift 2
            </h2>
            <p className="heading-section-sub">
              Die Grundbetreuung richtet sich nach der Gefährdungsgruppe Ihres Betriebs. Zusätzliche Leistungen wie
              Gefährdungsbeurteilungen, Unterweisungen oder Begehungen kommen darüber hinaus.
            </p>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-neutral-200">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <th scope="col" className="px-4 py-3 font-semibold text-neutral-900">
                      Gefährdungsgruppe
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold text-neutral-900">
                      Grundbetreuung pro Beschäftigtem/Jahr
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold text-neutral-900">
                      Typische Branchen
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {risikogruppen.map((row) => (
                    <tr key={row.gruppe}>
                      <td className="px-4 py-3 text-neutral-800">{row.gruppe}</td>
                      <td className="px-4 py-3 font-medium text-primary-800">{row.stunden}</td>
                      <td className="px-4 py-3 text-neutral-600">{row.beispiel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-sm text-neutral-600">
              <strong className="font-medium text-neutral-800">Beispiel:</strong> Ein Kölner Dienstleistungsbetrieb mit
              40 Beschäftigten (Gruppe III) hat eine jährliche Grundbetreuung von 20 Stunden (40 × 0,5 h).
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/blog/externe-sifa-kosten-vorteile" className="link-underline font-medium">
                Ratgeber: Kosten & Vorteile externer SiFa →
              </Link>
              <Link href="/faq" className="link-underline font-medium">
                FAQ zu SiFa-Kosten →
              </Link>
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section className="section-padding bg-neutral-50" aria-labelledby="ablauf-sifa">
          <div className="container-tight">
            <h2 id="ablauf-sifa" className="heading-section text-center">
              So starten Sie mit Ihrer externen SiFa in Köln
            </h2>
            <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" role="list">
              {ablauf.map((step) => (
                <li key={step.num} className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white"
                    aria-hidden
                  >
                    {step.num}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900">{step.title}</h3>
                  <p className="mt-2 flex-1 text-neutral-600">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Warum wir */}
        <section className="section-padding bg-white" aria-labelledby="warum-sifa">
          <div className="container-tight">
            <h2 id="warum-sifa" className="heading-section text-center">
              Warum Arbeitssicherheit Köln als Ihre externe SiFa?
            </h2>
            <ul className="mt-14 grid gap-8 sm:grid-cols-2" role="list">
              {vorteile.map((item) => (
                <li key={item.title} className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6">
                  <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-neutral-600">{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-center">
              <Link href="/ueber-uns" className="link-underline font-medium">
                Mehr über uns erfahren →
              </Link>
            </p>
          </div>
        </section>

        <RegionKöln />

        {/* FAQ */}
        <section className="section-padding bg-neutral-50" aria-labelledby="faq-sifa">
          <div className="container-tight">
            <header className="mx-auto max-w-2xl text-center">
              <h2 id="faq-sifa" className="heading-section">
                Häufige Fragen zur Fachkraft für Arbeitssicherheit in Köln
              </h2>
              <p className="heading-section-sub">
                Antworten zu SiFa-Pflicht, Kosten, Betreuungsumfang und dem Unterschied zwischen interner und externer
                Betreuung.
              </p>
            </header>
            <div className="mx-auto mt-12 max-w-3xl">
              <FAQAccordion items={sifaPageFAQ} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary-50" aria-labelledby="cta-sifa">
          <div className="container-tight text-center">
            <h2 id="cta-sifa" className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Externe Fachkraft für Arbeitssicherheit in Köln anfragen
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-600">
              Vereinbaren Sie ein unverbindliches Erstgespräch. Wir besprechen Ihren Betrieb, klären den
              Betreuungsbedarf und erstellen ein transparentes Angebot.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/kontakt" className="btn-primary">
                Jetzt Kontakt aufnehmen
              </Link>
              <Link href="/leistungen#fachkraft" className="btn-secondary">
                SiFa im Leistungsüberblick
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
