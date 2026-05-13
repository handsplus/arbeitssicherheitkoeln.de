import type { Metadata } from "next";
import Link from "next/link";
import { canonicalUrl } from "@/config/site";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Hinweis – Inhalt verschoben",
  description:
    "Der frühere Bereich „E-Learning“ wird auf dieser Website nicht mehr geführt. Unterweisungen und Betreuung finden Sie unter Leistungen und Kontakt.",
  robots: { index: false, follow: true },
  alternates: { canonical: canonicalUrl("/e-learning") },
};

/**
 * Platzhalter für die alte URL /e-learning/ (Bookmarks, Suchmaschinen).
 * Kein E-Learning-Angebot mehr auf dieser statischen Seite – Inhalt bewusst minimal.
 */
export default function ElearningLegacyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Startseite", path: "/" },
          { name: "Hinweis", path: "/e-learning" },
        ]}
      />
      <article className="section-padding">
        <div className="container-tight mx-auto max-w-2xl text-center">
          <h1 className="heading-section">Dieser Bereich wird hier nicht mehr geführt</h1>
          <p className="heading-section-sub mt-4">
            Die frühere Seite „E-Learning“ gibt es in dieser Form nicht mehr. Wenn Sie Unterweisungen,
            Schulungen oder Betreuung anfragen möchten, nutzen Sie bitte die folgenden Seiten.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/leistungen#unterweisungen" className="btn-primary">
              Zu Unterweisungen (Leistungen)
            </Link>
            <Link href="/kontakt" className="btn-secondary">
              Kontakt
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
