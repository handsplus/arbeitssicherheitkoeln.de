import { canonicalUrl, siteConfig, sifaPagePath } from "@/config/site";

/** Service-Schema für die dedizierte SiFa-Landingpage – stärkt semantische Einordnung für Rich Results. */
export function SifaServiceSchema() {
  const url = canonicalUrl(sifaPagePath);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: "Externe Fachkraft für Arbeitssicherheit in Köln",
    alternateName: ["Externe SiFa Köln", "SiFa-Betreuung Köln", "Sicherheitsfachkraft Köln"],
    description:
      "Externe Fachkraft für Arbeitssicherheit (SiFa) in Köln: DGUV-konforme Arbeitsschutzbetreuung, Gefährdungsbeurteilungen, Unterweisungen, Begehungen und vollständige Dokumentation für Unternehmen in Köln und Umgebung.",
    serviceType: "Sicherheitstechnische Betreuung nach DGUV Vorschrift 2",
    url,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: [
      { "@type": "City", name: "Köln" },
      { "@type": "AdministrativeArea", name: "Rhein-Erft-Kreis" },
      { "@type": "AdministrativeArea", name: "Rhein-Sieg-Kreis" },
      { "@type": "City", name: "Leverkusen" },
      { "@type": "City", name: "Bonn" },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Kleine und mittlere Unternehmen in Köln",
    },
    knowsAbout: [
      "Fachkraft für Arbeitssicherheit",
      "DGUV Vorschrift 2",
      "Arbeitssicherheitsgesetz",
      "Gefährdungsbeurteilung",
      "Sicherheitsunterweisung",
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: { "@type": "City", name: "Köln" },
      description: "Unverbindliches Erstgespräch und individuelles Angebot nach Betriebsgröße und Gefährdungsgruppe.",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
