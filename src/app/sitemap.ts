import type { MetadataRoute } from "next";
import { absoluteUrl, canonicalUrl } from "@/config/site";
import { blogPosts } from "@/data/blog";
import { branches } from "@/data/branchen";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: canonicalUrl("/"), lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: canonicalUrl("/leistungen"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: canonicalUrl("/branchen"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: canonicalUrl("/blog"), lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: canonicalUrl("/ueber-uns"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: canonicalUrl("/faq"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: canonicalUrl("/kontakt"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    {
      url: absoluteUrl("/feed.xml"),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.55,
    },
    { url: canonicalUrl("/datenschutz"), lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: canonicalUrl("/impressum"), lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: canonicalUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const branchUrls: MetadataRoute.Sitemap = branches.map((branch) => ({
    url: canonicalUrl(`/branchen/${branch.id}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...blogUrls, ...branchUrls];
}
