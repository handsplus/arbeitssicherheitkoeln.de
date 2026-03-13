import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getAllSlugs } from "@/data/blog";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { siteConfig } from "@/config/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artikel nicht gefunden" };
  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema
        items={[
          { name: "Startseite", path: "/" },
          { name: "Blog & Ratgeber", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <article className="section-padding">
        <div className="container-tight max-w-3xl">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-600" role="list">
              <li>
                <Link href="/" className="link-underline">Startseite</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/blog" className="link-underline">Blog</Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-neutral-900" aria-current="page">{post.title}</li>
            </ol>
          </nav>

          <header>
            <time dateTime={post.date} className="text-sm text-neutral-500">
              {formatDate(post.date)}
            </time>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-neutral-600">{post.metaDescription}</p>
            <p className="mt-2 text-sm text-neutral-500">{post.readingMinutes} Min. Lesezeit</p>
          </header>

          <div className="prose prose-neutral mt-10 space-y-10">
            {post.sections.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="text-xl font-semibold text-neutral-900 sm:text-2xl">
                    {section.heading}
                  </h2>
                )}
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((para, j) => (
                    <p key={j} className="text-neutral-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="mt-14 border-t border-neutral-200 pt-10" aria-label="Weitere Artikel">
            <h2 className="text-lg font-semibold text-neutral-900">Weitere Artikel</h2>
            <ul className="mt-4 space-y-3" role="list">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="link-underline font-medium">
                      {p.title}
                    </Link>
                  </li>
                ))}
            </ul>
            <p className="mt-4">
              <Link href="/blog" className="link-underline font-medium">
                ← Alle Artikel
              </Link>
            </p>
          </aside>

          <footer className="mt-10 flex flex-col gap-6 border-t border-neutral-200 pt-10">
            <Link href="/leistungen" className="link-underline font-medium">
              Alle Leistungen
            </Link>
            <Link href="/kontakt" className="btn-primary w-fit">
              Unverbindliche Beratung anfragen
            </Link>
          </footer>
        </div>
      </article>
    </>
  );
}
