import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { branches, getBranchById, getAllBranchIds } from "@/data/branchen";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { siteConfig } from "@/config/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBranchIds().map((id) => ({ slug: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const branch = getBranchById(slug);
  if (!branch) return { title: "Branche nicht gefunden" };
  return {
    title: branch.title,
    description: branch.metaDescription,
    openGraph: {
      title: branch.title,
      description: branch.metaDescription,
    },
    alternates: {
      canonical: `${siteConfig.url}/branchen/${branch.id}`,
    },
  };
}

export default async function BranchPage({ params }: Props) {
  const { slug } = await params;
  const branch = getBranchById(slug);
  if (!branch) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Startseite", path: "/" },
          { name: "Branchen", path: "/branchen" },
          { name: branch.title, path: `/branchen/${branch.id}` },
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
                <Link href="/branchen" className="link-underline">Branchen</Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-neutral-900" aria-current="page">{branch.title}</li>
            </ol>
          </nav>

          <header>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {branch.title}
            </h1>
            <p className="mt-2 text-neutral-500">{branch.short}</p>
          </header>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-neutral-900">Themenschwerpunkte</h2>
              <ul className="mt-4 flex flex-wrap gap-3" role="list">
                {branch.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-primary-200 bg-primary-50/50 px-4 py-2 text-sm text-neutral-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="space-y-4">
                {branch.content.map((para, i) => (
                  <p key={i} className="text-neutral-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-14 rounded-2xl border border-primary-200 bg-primary-50/50 p-6">
            <h2 className="text-lg font-semibold text-neutral-900">
              Passende Betreuung für Ihre Branche
            </h2>
            <p className="mt-2 text-neutral-600">
              Wir erstellen Ihnen ein unverbindliches Angebot – zugeschnitten auf {branch.title.toLowerCase()}.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary">
                Anfrage senden
              </Link>
              <Link href="/leistungen" className="btn-secondary">
                Alle Leistungen
              </Link>
            </div>
          </div>

          <nav className="mt-12 border-t border-neutral-200 pt-10" aria-label="Weitere Branchen">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Weitere Branchen
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3" role="list">
              {branches
                .filter((b) => b.id !== branch.id)
                .map((b) => (
                  <li key={b.id}>
                    <Link href={`/branchen/${b.id}`} className="link-underline text-sm font-medium">
                      {b.title}
                    </Link>
                  </li>
                ))}
            </ul>
            <p className="mt-4">
              <Link href="/branchen" className="link-underline font-medium">
                ← Alle Branchen
              </Link>
            </p>
          </nav>
        </div>
      </article>
    </>
  );
}
