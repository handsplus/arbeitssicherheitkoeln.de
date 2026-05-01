import { absoluteUrl, canonicalUrl, siteConfig } from "@/config/site";
import type { BlogPost } from "@/data/blog";
import { countWordsInPost } from "@/lib/blog-utils";

type Props = { post: BlogPost };

/**
 * Article-Schema (JSON-LD) für Blog-Beiträge – unterstützt Rich Results und bessere Auffindbarkeit.
 */
export function ArticleSchema({ post }: Props) {
  const url = canonicalUrl(`/blog/${post.slug}`);
  const wordCount = countWordsInPost(post);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    wordCount,
    articleSection: "Arbeitssicherheit und Arbeitsschutz",
    keywords: "Arbeitssicherheit, Arbeitsschutz, Köln, SiFa, Gefährdungsbeurteilung, Unterweisung",
    image: absoluteUrl(siteConfig.ogImagePath),
    author: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: canonicalUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: canonicalUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logoPath),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["article h1", "article header p"],
      },
    },
    url,
    inLanguage: "de-DE",
    about: [
      { "@type": "Thing", name: "Arbeitssicherheit" },
      { "@type": "Thing", name: "Arbeitsschutz" },
      { "@type": "Place", name: "Köln" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
