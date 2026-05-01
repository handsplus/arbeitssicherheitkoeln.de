import { canonicalUrl, siteConfig } from "@/config/site";

const services: { name: string; description: string; anchor: string }[] = [
  {
    anchor: "fachkraft",
    name: "Externe Fachkraft für Arbeitssicherheit (SiFa)",
    description:
      "Gesetzliche Arbeitsschutzbetreuung nach DGUV Vorschrift 2 für Unternehmen in Köln – Beratung, Begehungen, Dokumentation.",
  },
  {
    anchor: "gefaehrdungsbeurteilung",
    name: "Gefährdungsbeurteilung und Arbeitssicherheit",
    description:
      "Systematische Gefährdungsbeurteilung als Kern des Arbeitsschutzes – Ermittlung, Bewertung und Maßnahmenplanung.",
  },
  {
    anchor: "unterweisungen",
    name: "Sicherheitsunterweisungen und Arbeitsschutzschulungen",
    description:
      "Unterweisungen für Beschäftigte – rechtssicher dokumentiert, praxisnah für Ihren Betrieb in Köln.",
  },
  {
    anchor: "betriebsanweisungen",
    name: "Betriebsanweisungen und Arbeitsschutzdokumentation",
    description:
      "Erstellung und Pflege von Betriebsanweisungen sowie strukturierte Nachweise für Behörden und Berufsgenossenschaften.",
  },
  {
    anchor: "begehungen",
    name: "Sicherheitsbegehungen Arbeitsschutz",
    description:
      "Regelmäßige Begehungen zur Identifikation von Gefährdungen und Verbesserung der Arbeitssicherheit.",
  },
  {
    anchor: "beratung",
    name: "Arbeitsschutzberatung für Unternehmen",
    description:
      "Beratung zu ArbSchG, DGUV, Arbeitsstättenverordnung und weiteren Anforderungen des betrieblichen Arbeitsschutzes.",
  },
];

/** ItemList mit Service-Bezug – ergänzt die Leistungsseite für Rich Results und semantische Klarheit. */
export function LeistungenServiceSchema() {
  const base = canonicalUrl("/leistungen");
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Leistungen Arbeitssicherheit und Arbeitsschutz Köln",
    description:
      "Leistungsspektrum: SiFa, Gefährdungsbeurteilung, Unterweisungen, Betriebsanweisungen, Begehungen und Beratung.",
    numberOfItems: services.length,
    itemListElement: services.map((s, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: { "@type": "City", name: "Köln" },
        url: `${base}#${s.anchor}`,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
