import Link from "next/link";
import { siteConfig } from "@/config/site";

const phoneTel = siteConfig.phone.replace(/\s/g, "").replace(/^0/, "+49");

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-16 sm:py-20 lg:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="container-tight relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            <span className="block">Arbeitssicherheit</span>
            <span className="block text-primary-700">in Köln – Ihr Partner</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
            Externe Fachkraft für Arbeitssicherheit: professionelle Betreuung Ihrer Betriebe,
            Gefährdungsbeurteilungen, Unterweisungen und Arbeitsschutzberatung – individuell,
            gesetzeskonform und mit starkem Fokus auf Köln und Umgebung.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link
              href="/kontakt"
              className="btn-primary w-full sm:w-auto"
              aria-label="Jetzt unverbindliche Anfrage senden"
            >
              Unverbindliche Anfrage
            </Link>
            <Link
              href="/leistungen"
              className="btn-secondary w-full sm:w-auto"
              aria-label="Alle Leistungen ansehen"
            >
              Leistungen ansehen
            </Link>
          </div>

          {/* Kontakt: Telefon, E-Mail, WhatsApp – ohne Kasten, nur Icons + Text */}
          <div className="mt-8 flex flex-nowrap items-center justify-center gap-6 sm:gap-8" role="group" aria-label="Direkt kontaktieren">
            <a
              href={`tel:${phoneTel}`}
              className="flex min-w-0 items-center gap-2 text-neutral-700 transition-colors hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded"
              aria-label="Telefon: Anrufen"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white" aria-hidden>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span className="truncate text-sm font-medium">{siteConfig.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex min-w-0 items-center gap-2 text-neutral-700 transition-colors hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded"
              aria-label="E-Mail: Nachricht senden"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white" aria-hidden>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="truncate text-sm font-medium">{siteConfig.email}</span>
            </a>
            <a
              href={siteConfig.whatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 shrink-0 items-center gap-2 text-neutral-700 transition-colors hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded"
              aria-label="WhatsApp: Chat starten"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white" aria-hidden>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" role="list" aria-label="Kurzüberblick Nutzen">
          <li className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700" aria-hidden>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            <div>
              <h2 className="font-semibold text-neutral-900">Gesetzeskonform</h2>
              <p className="mt-1 text-sm text-neutral-600">Sicherstellung aller gesetzlichen Anforderungen im Arbeitsschutz.</p>
            </div>
          </li>
          <li className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700" aria-hidden>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <div>
              <h2 className="font-semibold text-neutral-900">Lokal in Köln</h2>
              <p className="mt-1 text-sm text-neutral-600">Vor-Ort-Betreuung und Beratung in Köln und der Region.</p>
            </div>
          </li>
          <li className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700" aria-hidden>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </span>
            <div>
              <h2 className="font-semibold text-neutral-900">Individuelle Betreuung</h2>
              <p className="mt-1 text-sm text-neutral-600">Maßgeschneidert für kleine und mittlere Unternehmen.</p>
            </div>
          </li>
          <li className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700" aria-hidden>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div>
              <h2 className="font-semibold text-neutral-900">Entlastung für Sie</h2>
              <p className="mt-1 text-sm text-neutral-600">Professionelle Übernahme der Arbeitsschutzpflichten.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
