import { absoluteUrl, canonicalUrl, siteConfig } from "@/config/site";

/**
 * WebPage JSON-LD für die Startseite – verknüpft WebSite, Organisation und Hauptthema (Arbeitssicherheit/Arbeitsschutz).
 */
export function HomeWebPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl("/")}#webpage`,
    url: canonicalUrl("/"),
    name: "Arbeitssicherheit und Arbeitsschutz in Köln | Arbeitssicherheit Köln",
    description:
      "Externe Fachkraft für Arbeitssicherheit (SiFa) und Arbeitsschutzbetreuung in Köln: Gefährdungsbeurteilungen, Unterweisungen, Begehungen und Dokumentation für Unternehmen.",
    inLanguage: "de-DE",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: {
      "@type": "Thing",
      name: "Arbeitssicherheit und Arbeitsschutz",
      description:
        "Betrieblicher Arbeitsschutz, SiFa-Betreuung nach DGUV Vorschrift 2, Gefährdungsbeurteilung und Unterweisungen in Köln und Umgebung.",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.ogImagePath),
    },
    mainEntity: { "@id": `${siteConfig.url}/#organization` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
