import { siteConfig } from "@/config/site";

/**
 * WebSite-Schema für bessere Auffindbarkeit: Sitelinks, Suche, Marken-Erkennung.
 */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    description:
      "Arbeitssicherheit und Arbeitsschutz in Köln: externe Fachkraft für Arbeitssicherheit, Gefährdungsbeurteilungen, Unterweisungen. Für Unternehmen in Köln und Umgebung.",
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "de-DE",
    potentialAction: {
      "@type": "ReadAction",
      target: { "@type": "EntryPoint", urlTemplate: siteConfig.url },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
