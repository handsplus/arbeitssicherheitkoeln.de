import Link from "next/link";
import { siteConfig, footerLinks } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-neutral-200 bg-neutral-50"
      role="contentinfo"
      aria-label="Seitenfuß"
    >
      <div className="container-tight py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 items-start lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-display text-xl font-bold text-primary-700 focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-500 transition-colors hover:text-primary-800"
              aria-label={`${siteConfig.name} – Startseite`}
            >
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-600">
              Ihr Partner für Arbeitssicherheit und Arbeitsschutz in Köln und Umgebung.
              Externe Fachkraft für Arbeitssicherheit, Gefährdungsbeurteilungen, Unterweisungen
              und betriebliche Betreuung – individuell und gesetzeskonform.
            </p>
            <address className="mt-6 not-italic text-sm text-neutral-600">
              <span className="font-medium text-neutral-800">{siteConfig.name}</span>
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
              <br />
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="link-underline mt-1 inline-block"
              >
                {siteConfig.phone}
              </a>
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="link-underline"
              >
                {siteConfig.email}
              </a>
            </address>
          </div>
          <nav aria-label="Footer Service">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-700">
              Service
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {footerLinks.service.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 transition-colors hover:text-primary-600 focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer Rechtliches">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-700">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 transition-colors hover:text-primary-600 focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-neutral-200 pt-6">
          <p className="text-center text-sm text-neutral-500">
            © {currentYear} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>
          <p className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-neutral-400">
            {siteConfig.otherSites.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-neutral-600 focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                {link.label}
                <span className="sr-only"> (öffnet in neuem Tab)</span>
              </a>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
