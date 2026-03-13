import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Angaben gemäß § 5 TMG für arbeitssicherheitkoeln.de.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.arbeitssicherheitkoeln.de/impressum" },
};

export default function ImpressumPage() {
  return (
    <article className="section-padding">
      <div className="container-tight max-w-3xl">
        <header>
          <h1 className="heading-section">Impressum</h1>
          <p className="mt-2 text-neutral-600">
            Angaben gemäß § 5 Telemediengesetz (TMG)
          </p>
        </header>

        <div className="prose prose-neutral mt-12 space-y-8 text-neutral-600">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Anbieter</h2>
            <p>
              {siteConfig.companyName}
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Kontakt</h2>
            <p>
              Telefon: {siteConfig.phone}
              <br />
              E-Mail: {siteConfig.email}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
              <br />
              [USt-IdNr. – sofern vorhanden eintragen]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Fachkraft für Arbeitssicherheit, Sicherheits- und Gesundheitsschutzkoordinator (SiGeKo) sowie weitere Tätigkeiten im Arbeitsschutz und Brandschutz gemäß den jeweils geltenden Vorschriften.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              {siteConfig.contactPerson}
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="link-underline">
                https://ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter. Auf die Inhalte dieser verlinkten Seiten haben wir keinen Einfluss; für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Für die Inhalte der verlinkten Seiten wird keine Gewähr übernommen.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
