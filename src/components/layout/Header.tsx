import Link from "next/link";
import { siteConfig, navigation } from "@/config/site";

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90"
      role="banner"
    >
      <div className="container-tight flex h-16 items-center justify-between sm:h-18 lg:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-bold text-neutral-900 focus-visible:rounded-lg focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          aria-label={`${siteConfig.name} – Startseite`}
        >
          <span className="text-primary-700">{siteConfig.shortName}</span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Hauptnavigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="btn-primary ml-2"
            aria-label="Kontakt aufnehmen"
          >
            Anfrage senden
          </Link>
        </nav>

        <details className="relative md:hidden" aria-label="Mobile Menü">
          <summary
            className="inline-flex h-10 w-10 list-none items-center justify-center rounded-lg text-neutral-600 hover:bg-neutral-100 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-500 [&::-webkit-details-marker]:hidden"
            aria-label="Menü öffnen"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <div className="absolute right-0 top-full z-50 mt-0 w-48 rounded-b-lg border border-t-0 border-neutral-200 bg-white py-2 shadow-lg">
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-base font-medium text-neutral-700 hover:bg-neutral-50"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/kontakt" className="btn-primary mx-4 mt-2 text-center">
                Anfrage senden
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
