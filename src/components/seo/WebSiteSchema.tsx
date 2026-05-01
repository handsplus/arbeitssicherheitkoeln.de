import { absoluteUrl, canonicalUrl, siteConfig } from "@/config/site";

/**
 * WebSite-Schema für bessere Auffindbarkeit: Marke, Synonyme (Arbeitsschutz), Verknüpfung zur Organisation.
 */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: [
      "Arbeitsschutz Köln",
      "Fachkraft für Arbeitssicherheit Köln",
      "Externe SiFa Köln",
      "Arbeitssicherheitkoeln.de",
    ],
    description:
      "Arbeitssicherheit und Arbeitsschutz in Köln: externe Fachkraft für Arbeitssicherheit (SiFa), Gefährdungsbeurteilungen, Sicherheitsunterweisungen und Betreuung nach DGUV Vorschrift 2. Für Unternehmen in Köln und Umgebung.",
    url: canonicalUrl("/"),
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "de-DE",
    about: {
      "@type": "Thing",
      name: "Arbeitssicherheit und betrieblicher Arbeitsschutz",
    },
    potentialAction: {
      "@type": "ReadAction",
      target: { "@type": "EntryPoint", urlTemplate: canonicalUrl("/") },
    },
    image: absoluteUrl(siteConfig.ogImagePath),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
