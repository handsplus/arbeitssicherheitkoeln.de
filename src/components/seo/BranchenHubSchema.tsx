import { branches } from "@/data/branchen";
import { canonicalUrl, siteConfig } from "@/config/site";

/** Branchen-Übersicht mit ItemList – ergänzt die Hub-Seite semantisch. */
export function BranchenHubSchema() {
  const pageUrl = canonicalUrl("/branchen");
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Branchen – Arbeitssicherheit und Arbeitsschutz in Köln",
    description:
      "Überblick über branchenspezifische Arbeitsschutzbetreuung und SiFa-Leistungen für Handwerk, Büro, Produktion, Handel und soziale Einrichtungen in Köln.",
    inLanguage: "de-DE",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: branches.length,
      itemListElement: branches.map((b, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "WebPage",
          name: b.title,
          description: b.metaDescription,
          url: canonicalUrl(`/branchen/${b.id}`),
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
