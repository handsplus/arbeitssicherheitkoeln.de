import { blogPosts } from "@/data/blog";
import { canonicalUrl, siteConfig } from "@/config/site";

/** CollectionPage + ItemList für die Blog-Übersicht – hilft Suchmaschinen und KI, Artikel zu inventarisieren. */
export function BlogIndexSchema() {
  const pageUrl = canonicalUrl("/blog");
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Blog & Ratgeber – Arbeitssicherheit und Arbeitsschutz Köln",
    description:
      "Ratgeberartikel zu Arbeitssicherheit, Arbeitsschutz, Gefährdungsbeurteilung, Unterweisungen und externer SiFa in Köln und Umgebung.",
    inLanguage: "de-DE",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: sorted.length,
      itemListElement: sorted.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.date,
          url: canonicalUrl(`/blog/${post.slug}`),
          inLanguage: "de-DE",
          publisher: { "@id": `${siteConfig.url}/#organization` },
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
