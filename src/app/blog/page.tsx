import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { BlogIndexSchema } from "@/components/seo/BlogIndexSchema";
import { canonicalUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog & Ratgeber – Arbeitssicherheit & Arbeitsschutz Köln",
  description:
    "Ratgeber zu Arbeitssicherheit und Arbeitsschutz: Gefährdungsbeurteilung, Unterweisung, externe SiFa und mehr in Köln. Praxiswissen für Unternehmen.",
  openGraph: {
    title: "Blog | Arbeitssicherheit & Arbeitsschutz Köln",
    description: "Ratgeber zu Arbeitsschutz, Gefährdungsbeurteilung und Unterweisung in Köln.",
    url: canonicalUrl("/blog"),
  },
  alternates: { canonical: canonicalUrl("/blog") },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <BlogIndexSchema />
      <BreadcrumbSchema items={[{ name: "Startseite", path: "/" }, { name: "Blog & Ratgeber", path: "/blog" }]} />
      <article className="section-padding">
        <div className="container-tight">
          <header className="mx-auto max-w-2xl text-center">
            <h1 className="heading-section">
              Blog & Ratgeber – Arbeitssicherheit und Arbeitsschutz Köln
            </h1>
            <p className="heading-section-sub">
              Praxisnahe Artikel zu Gefährdungsbeurteilung, Unterweisungspflicht, externer Fachkraft für Arbeitssicherheit (SiFa) und betrieblichem Arbeitsschutz für Unternehmen in Köln und Umgebung.
            </p>
          </header>

          <ul className="mt-14 space-y-8" role="list">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                  <time dateTime={post.date} className="text-sm text-neutral-500">
                    {formatDate(post.date)}
                  </time>
                  <h2 className="mt-2 text-xl font-bold text-neutral-900 sm:text-2xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="after:absolute after:inset-0 focus-visible:rounded-lg focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-500 relative"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-neutral-600">{post.metaDescription}</p>
                  <p className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
                    <span>{post.readingMinutes} Min. Lesezeit</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="link-underline font-medium"
                    >
                      Artikel lesen →
                    </Link>
                  </p>
                </article>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-center">
            <Link href="/kontakt" className="btn-primary">
              Beratung anfragen
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
