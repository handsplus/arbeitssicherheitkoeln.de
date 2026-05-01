import type { Metadata } from "next";
import { canonicalUrl, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Webseite arbeitssicherheitkoeln.de – Informationen zur Verarbeitung personenbezogener Daten.",
  robots: { index: false, follow: true },
  alternates: { canonical: canonicalUrl("/datenschutz") },
};

export default function DatenschutzPage() {
  return (
    <article className="section-padding">
      <div className="container-tight max-w-3xl">
        <header>
          <h1 className="heading-section">Datenschutzerklärung</h1>
          <p className="mt-2 text-neutral-600">
            Stand: {new Date().toLocaleDateString("de-DE")} – Platzhalter: Bitte durch rechtlich geprüfte Fassung ersetzen.
          </p>
        </header>

        <div className="prose prose-neutral mt-12 space-y-8 text-neutral-600">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900">1. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Webseite ist:
            </p>
            <p className="mt-2">
              {siteConfig.companyName}
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
              <br />
              E-Mail: {siteConfig.email}
              <br />
              Telefon: {siteConfig.phone}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Beim Aufruf dieser Webseite werden durch den eingesetzten Server bzw. den Browser automatisch Informationen erfasst (u. a. IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, Browsertyp). Diese Daten dienen der Bereitstellung und Sicherheit der Webseite und werden nur im erforderlichen Umfang und nur so lange gespeichert, wie es gesetzlich vorgesehen oder technisch nötig ist.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">3. Kontaktformular und E-Mail-Kontakt</h2>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail ansprechen, werden die von Ihnen angegebenen Daten (z. B. Name, E-Mail, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet und gespeichert. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung bzw. zur Durchführung vorvertraglicher Maßnahmen. Eine Weitergabe an Dritte erfolgt nicht, sofern nicht gesetzlich erforderlich. Die Daten werden gelöscht, sobald sie für die Erfüllung des Zwecks nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">4. Cookies und Einwilligung</h2>
            <p>
              Beim ersten Besuch dieser Webseite erscheint ein Hinweis zu Cookies. Sie können Ihre Einwilligung zur Verwendung technisch notwendiger Cookies erteilen („Akzeptieren“) oder verweigern („Ablehnen“). Ihre Wahl wird lokal im Browser gespeichert, damit der Hinweis nicht bei jedem Besuch erneut erscheint. Wir setzen nur Cookies ein, die für den Betrieb der Webseite erforderlich sind bzw. für die Sie eine Einwilligung erteilt haben.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">5. Ihre Rechte</h2>
            <p>
              Sie haben gegenüber dem Verantwortlichen u. a. das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie das Recht, sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Sofern die Verarbeitung auf Einwilligung beruht, haben Sie das Recht, die Einwilligung jederzeit zu widerrufen, ohne dass die Rechtmäßigkeit der bisherigen Verarbeitung davon berührt wird.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">6. Hosting</h2>
            <p>
              Diese Webseite wird bei einem externen Dienstleister (Hoster) gehostet. Die dabei verarbeiteten personenbezogenen Daten umfassen u. a. IP-Adressen und Zugriffszeiten. Der Einsatz des Hosters erfolgt im berechtigten Interesse an einer sicheren und effizienten Bereitstellung der Webseite (Art. 6 Abs. 1 lit. f DSGVO). Es kann ein Auftragsverarbeitungsvertrag geschlossen sein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900">7. Änderungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslage oder Webseitenfunktionen anzupassen. Die jeweils aktuelle Version finden Sie auf dieser Seite.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
