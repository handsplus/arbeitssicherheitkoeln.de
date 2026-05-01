import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { blogPosts } from "../src/data/blog";
import { siteConfig, canonicalUrl, absoluteUrl } from "../src/config/site";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(dateIso: string): string {
  return new Date(dateIso).toUTCString();
}

function main() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const channelTitle = `${siteConfig.name} – Blog & Ratgeber Arbeitssicherheit`;
  const channelDesc =
    "Ratgeber zu Arbeitssicherheit, Arbeitsschutz und SiFa in Köln – Artikel und Praxiswissen für Unternehmen.";
  const channelLink = canonicalUrl("/");
  const selfLink = absoluteUrl("/feed.xml");

  const itemsXml = sorted
    .map((post) => {
      const link = canonicalUrl(`/blog/${post.slug}`);
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${rfc822(post.date)}</pubDate>
      <description>${escapeXml(post.metaDescription)}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(channelTitle)}</title>
    <link>${escapeXml(channelLink)}</link>
    <description>${escapeXml(channelDesc)}</description>
    <language>de-de</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(selfLink)}" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>
`;

  const publicDir = join(process.cwd(), "public");
  mkdirSync(publicDir, { recursive: true });
  writeFileSync(join(publicDir, "feed.xml"), xml.trimStart(), "utf8");
  console.log("Wrote public/feed.xml");
}

main();
