import type { Metadata } from "next";
import Link from "next/link";
import { canonicalUrl, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung für arbeitssicherheitkoeln.de – Informationen zur Verarbeitung personenbezogener Daten durch Health and Safety +.",
  alternates: { canonical: canonicalUrl("/datenschutz") },
};

export default function DatenschutzPage() {
  return (
    <article className="section-padding">
      <div className="container-tight max-w-3xl">
        <header>
          <h1 className="heading-section">Datenschutzerklärung</h1>
          <p className="mt-2 text-neutral-600">Stand: Juni 2026</p>
        </header>

        <div className="prose prose-neutral mt-12 space-y-8 text-neutral-600">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900">1. Datenschutz auf einen Blick</h2>

            <h3 className="mt-6 text-lg font-semibold text-neutral-900">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen entnehmen Sie der nachfolgenden
              Datenschutzerklärung.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-neutral-900">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
              Sie dem Abschnitt „Verantwortliche Stelle“ in dieser Datenschutzerklärung sowie dem{" "}
              <Link href="/impressum" className="link-underline">
                Impressum
              </Link>{" "}
              entnehmen.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-neutral-900">Wie erfassen wir Ihre Daten?</h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen – zum Beispiel über das
              Kontaktformular. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
              durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
              Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <h3 className="mt-6 text-lg font-semibold text-neutral-900">Wofür nutzen wir Ihre Daten?</h3>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Daten aus
              dem Kontaktformular nutzen wir zur Bearbeitung Ihrer Anfrage.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-neutral-900">Welche Rechte haben Sie?</h3>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung oder
              Löschung dieser Daten. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese
              jederzeit widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
              Verarbeitung zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">2. Verantwortliche Stelle</h2>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-2">
              {siteConfig.legalName}
              <br />
              {siteConfig.legalOwner}
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
              <br />
              Telefon: {siteConfig.phone}
              <br />
              E-Mail: {siteConfig.email}
            </p>
            <p className="mt-3">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
              über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">3. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet (Vercel Inc.). Beim Aufruf der Seiten werden
              personenbezogene Daten (u. a. IP-Adresse, Zugriffszeitpunkt) in Server-Logfiles verarbeitet. Die
              Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
              sicheren und effizienten Bereitstellung). Mit dem Hoster besteht ein Auftragsverarbeitungsvertrag.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">4. Kontaktformular und E-Mail-Kontakt</h2>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail ansprechen, werden die von Ihnen übermittelten Daten (z. B.
              Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet. Das Kontaktformular wird über
              den Dienst Formspree (Formspree Inc., USA) technisch bereitgestellt. Die Übermittlung erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden gelöscht, sobald sie für die
              Erfüllung des Zwecks nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">5. Cookies und Einwilligung</h2>
            <p>
              Beim ersten Besuch erscheint ein Hinweis zu Cookies. Sie können Ihre Einwilligung erteilen („Akzeptieren“)
              oder verweigern („Ablehnen“). Ihre Wahl wird lokal im Browser gespeichert, damit der Hinweis nicht bei
              jedem Besuch erneut erscheint. Wir setzen nur Cookies ein, die für den Betrieb der Website erforderlich
              sind bzw. für die Sie eine Einwilligung erteilt haben.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">6. Speicherdauer</h2>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung widerrufen, werden Ihre Daten gelöscht,
              sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung haben.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">7. Ihre Rechte nach der DSGVO</h2>
            <p>
              Sie haben gegenüber dem Verantwortlichen das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16
              DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit
              (Art. 20 DSGVO) sowie Widerspruch gegen die Verarbeitung (Art. 21 DSGVO). Sofern die Verarbeitung auf
              Einwilligung beruht, können Sie diese jederzeit widerrufen. Sie haben zudem das Recht, sich bei einer
              Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">8. Änderungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslage oder
              Website-Funktionen anzupassen. Die jeweils aktuelle Version finden Sie auf dieser Seite.
            </p>
          </section>

          <p className="pt-4">
            <Link href="/impressum" className="link-underline font-medium">
              ← Zum Impressum
            </Link>
            {" · "}
            <Link href="/" className="link-underline font-medium">
              Zurück zur Startseite
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
