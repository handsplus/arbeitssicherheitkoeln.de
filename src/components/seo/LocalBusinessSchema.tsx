import { absoluteUrl, canonicalUrl, siteConfig } from "@/config/site";

export function LocalBusinessSchema() {
  const sameAs = [siteConfig.social.linkedIn, siteConfig.social.xing].filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.companyName,
    alternateName: ["Arbeitsschutz Köln", "SiFa Köln", "Arbeitssicherheit Köln – externe Fachkraft"],
    description:
      "Arbeitssicherheit und Arbeitsschutz in Köln: externe Fachkraft für Arbeitssicherheit (SiFa), Gefährdungsbeurteilungen, Sicherheitsunterweisungen, Betriebsanweisungen und vollständige Arbeitsschutzbetreuung für Unternehmen in Köln und Umgebung.",
    slogan: "Ihr Partner für Arbeitssicherheit und Arbeitsschutz in Köln",
    url: canonicalUrl("/"),
    telephone: siteConfig.phone.replace(/\s/g, ""),
    email: siteConfig.email,
    image: absoluteUrl(siteConfig.ogImagePath),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logoPath),
    },
    knowsAbout: [
      "Arbeitssicherheit",
      "Arbeitsschutz",
      "Fachkraft für Arbeitssicherheit",
      "SiFa",
      "Gefährdungsbeurteilung",
      "Sicherheitsunterweisung",
      "DGUV Vorschrift 2",
      "ArbSchG",
      "betrieblicher Arbeitsschutz",
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
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
      { "@type": "AdministrativeArea", name: "Rhein-Erft-Kreis" },
      { "@type": "AdministrativeArea", name: "Rhein-Sieg-Kreis" },
      { "@type": "City", name: "Leverkusen" },
      { "@type": "City", name: "Bonn" },
      { "@type": "State", name: "Nordrhein-Westfalen" },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.9395,
      longitude: 6.991,
    },
    founder: {
      "@type": "Person",
      name: siteConfig.contactPerson,
      jobTitle: "Fachkraft für Arbeitssicherheit",
      worksFor: { "@id": `${siteConfig.url}/#organization` },
      url: canonicalUrl("/ueber-uns"),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone.replace(/\s/g, ""),
        email: siteConfig.email,
        contactType: "customer service",
        areaServed: "DE",
        availableLanguage: ["de"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    priceRange: "€€",
    hasMap:
      "https://www.openstreetmap.org/?mlat=50.9395&mlon=6.9910#map=16/50.9395/6.9910",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
