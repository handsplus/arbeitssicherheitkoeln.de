import Link from "next/link";
import { blogPosts } from "@/data/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogTeaser() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-neutral-50" aria-labelledby="blog-heading">
      <div className="container-tight">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 id="blog-heading" className="heading-section">
              Ratgeber – Wissen zu Arbeitssicherheit Köln
            </h2>
            <p className="heading-section-sub mt-2 max-w-xl">
              Praxisnahe Artikel zu Gefährdungsbeurteilung, Unterweisung, externer SiFa und Arbeitsschutz für Unternehmen in Köln.
            </p>
          </div>
          <Link href="/blog" className="btn-secondary shrink-0">
            Alle Artikel
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {latest.map((post) => (
            <li key={post.slug}>
              <article className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                <time dateTime={post.date} className="text-sm text-neutral-500">
                  {formatDate(post.date)}
                </time>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="after:absolute after:inset-0 focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-500 relative hover:text-primary-700"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm text-neutral-600 line-clamp-3">
                  {post.metaDescription}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="link-underline mt-4 inline-flex text-sm font-medium"
                >
                  Weiterlesen
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
