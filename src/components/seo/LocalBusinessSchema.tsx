import { siteConfig } from "@/config/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.companyName,
    description:
      "Externe Fachkraft für Arbeitssicherheit in Köln: Betreuung von Unternehmen, Gefährdungsbeurteilungen, Unterweisungen, Arbeitsschutzberatung für Köln und Umgebung.",
    url: siteConfig.url,
    telephone: siteConfig.phone.replace(/\s/g, ""),
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.zip,
      addressRegion: siteConfig.address.region,
      addressCountry: "DE",
    },
    areaServed: [
      { "@type": "City", name: "Köln" },
      { "@type": "State", name: "Nordrhein-Westfalen" },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.9375,
      longitude: 6.9603,
      addressLocality: "Köln",
      addressCountry: "DE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    priceRange: "€€",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
