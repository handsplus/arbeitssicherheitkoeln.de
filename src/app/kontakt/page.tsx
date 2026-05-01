import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { canonicalUrl, siteConfig } from "@/config/site";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { JsonLdWebPageSchema } from "@/components/seo/JsonLdWebPageSchema";

export const metadata: Metadata = {
  title: "Kontakt – Arbeitssicherheit Köln",
  description:
    "Kontakt aufnehmen: Unverbindliche Anfrage für Arbeitssicherheit und Arbeitsschutz in Köln. Telefon, E-Mail oder Kontaktformular.",
  openGraph: {
    title: "Kontakt | Arbeitssicherheit Köln",
    description: "Anfrage für Betreuung, Gefährdungsbeurteilung oder Unterweisung in Köln.",
    url: canonicalUrl("/kontakt"),
  },
  alternates: { canonical: canonicalUrl("/kontakt") },
};

export default function KontaktPage() {
  return (
    <>
      <JsonLdWebPageSchema
        path="/kontakt"
        pageType="ContactPage"
        name="Kontakt – Arbeitssicherheit und Arbeitsschutz Köln"
        description="Kontakt für unverbindliche Anfragen zu SiFa-Betreuung, Gefährdungsbeurteilung, Unterweisungen und Arbeitsschutz in Köln."
      />
      <BreadcrumbSchema items={[{ name: "Startseite", path: "/" }, { name: "Kontakt", path: "/kontakt" }]} />
      <article className="section-padding">
        <div className="container-tight">
          <header className="mx-auto max-w-2xl text-center">
            <h1 className="heading-section">
              Kontakt – Wir freuen uns auf Ihre Anfrage
            </h1>
            <p className="heading-section-sub">
              Ob erste Fragen zur Arbeitssicherheit in Köln oder konkreter Betreuungswunsch: schreiben Sie uns oder rufen Sie an. Wir melden uns zeitnah.
            </p>
          </header>

          <div className="mx-auto mt-16 grid gap-12 lg:max-w-5xl lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-neutral-900">Kontaktdaten</h2>
              <address className="mt-4 space-y-4 not-italic text-neutral-600">
                <p>
                  <span className="font-medium text-neutral-800">{siteConfig.companyName}</span>
                  <br />
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </p>
                <p>
                  <strong className="text-neutral-800">Telefon:</strong>{" "}
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="link-underline">
                    {siteConfig.phone}
                  </a>
                </p>
                <p>
                  <strong className="text-neutral-800">E-Mail:</strong>{" "}
                  <a href={`mailto:${siteConfig.email}`} className="link-underline">
                    {siteConfig.email}
                  </a>
                </p>
                <p className="text-sm text-neutral-500">
                  {siteConfig.openingHours}
                </p>
              </address>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-neutral-900">Anfrage senden</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Beschreiben Sie kurz Ihr Anliegen (z. B. Betriebsgröße, Branche, gewünschte Leistungen). Wir antworten in der Regel innerhalb von 1–2 Werktagen.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
