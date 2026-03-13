import { siteConfig } from "@/config/site";
import type { BlogPost } from "@/data/blog";

type Props = { post: BlogPost };

/**
 * Article-Schema (JSON-LD) für Blog-Beiträge – unterstützt Rich Results und bessere Auffindbarkeit.
 */
export function ArticleSchema({ post }: Props) {
  const url = `${siteConfig.url}/blog/${post.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    inLanguage: "de-DE",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
