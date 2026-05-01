import { canonicalUrl, siteConfig } from "@/config/site";

type PageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

type Props = {
  path: string;
  name: string;
  description: string;
  pageType?: PageType;
};

/** Zusätzliches WebPage-/Spezialseiten-JSON-LD für klare semantische Einordnung (ergänzt Breadcrumbs). */
export function JsonLdWebPageSchema({ path, name, description, pageType = "WebPage" }: Props) {
  const url = canonicalUrl(path);
  const schema = {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "de-DE",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    about: { "@type": "Thing", name: "Arbeitssicherheit und Arbeitsschutz" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
