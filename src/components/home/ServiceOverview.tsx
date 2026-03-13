import Link from "next/link";

const services = [
  {
    title: "Externe Fachkraft für Arbeitssicherheit",
    description: "Rechtssichere Betreuung als externe SiFa: wir übernehmen die gesetzlich geforderte Fachkraft-Funktion für Ihr Unternehmen.",
    href: "/leistungen#fachkraft",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Gefährdungsbeurteilungen",
    description: "Systematische Ermittlung und Bewertung von Gefährdungen – Grundlage für einen wirksamen Arbeitsschutz in Ihrem Betrieb.",
    href: "/leistungen#gefaehrdungsbeurteilung",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Unterweisungen & Schulungen",
    description: "Rechtssichere Sicherheitsunterweisungen für Ihre Mitarbeiter – praxisnah und verständlich.",
    href: "/leistungen#unterweisungen",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Betriebsanweisungen & Dokumentation",
    description: "Vollständige und aktuelle Betriebsanweisungen sowie strukturierte Dokumentation für Behörden und Audits.",
    href: "/leistungen#betriebsanweisungen",
    icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Sicherheitsbegehungen",
    description: "Regelmäßige Begehungen in Ihrem Betrieb zur Identifikation von Risiken und Verbesserungspotenzial.",
    href: "/leistungen#begehungen",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  },
  {
    title: "Beratung & gesetzliche Anforderungen",
    description: "Unterstützung bei der Umsetzung des Arbeitsschutzgesetzes und weiterer Vorschriften – transparent und praxisnah.",
    href: "/leistungen#beratung",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];

export function ServiceOverview() {
  return (
    <section className="section-padding bg-white" aria-labelledby="leistungen-heading">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="leistungen-heading" className="heading-section">
            Leistungen für Arbeitssicherheit in Köln
          </h2>
          <p className="heading-section-sub">
            Von der externen Fachkraft für Arbeitssicherheit über Gefährdungsbeurteilungen bis zur Unterweisung: wir unterstützen Unternehmen in Köln und Umgebung mit dem kompletten Spektrum des Arbeitsschutzes.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.href}
              className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700" aria-hidden>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </span>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                <Link href={service.href} className="after:absolute after:inset-0 focus-visible:rounded-xl focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-500 relative">
                  {service.title}
                </Link>
              </h3>
              <p className="mt-2 flex-1 text-neutral-600">{service.description}</p>
              <Link
                href={service.href}
                className="link-underline mt-4 inline-flex items-center text-sm font-medium"
              >
                Mehr erfahren
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/leistungen" className="btn-primary">
            Alle Leistungen im Überblick
          </Link>
          <Link href="/branchen" className="btn-secondary">
            Nach Branche
          </Link>
        </p>
      </div>
    </section>
  );
}
