import { canonicalUrl } from "@/config/site";

type BreadcrumbItem = { name: string; path: string };

/**
 * BreadcrumbList-Schema für Unterseiten – kann Breadcrumbs in den Suchergebnissen auslösen.
 */
export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? canonicalUrl("/") : canonicalUrl(item.path),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
