import dynamic from "next/dynamic";
import { siteConfig } from "@/config/site";

const ContactForm = dynamic(
  () => import("@/components/contact/ContactForm").then((m) => ({ default: m.ContactForm })),
  { ssr: false }
);

export function CTASection() {
  return (
    <section className="section-padding bg-primary-900 text-white" aria-labelledby="cta-heading">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Jetzt unverbindlich anfragen
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Sie möchten Arbeitssicherheit und Arbeitsschutz in Köln professionell umsetzen?
              Schreiben Sie uns – wir melden uns zeitnah bei Ihnen und besprechen Ihre Möglichkeiten.
            </p>
            <div className="mt-8 space-y-4">
              <p className="flex items-center gap-3 text-primary-100">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10" aria-hidden>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4 hover:text-white focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-white">
                  {siteConfig.email}
                </a>
              </p>
              <p className="flex items-center gap-3 text-primary-100">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10" aria-hidden>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="underline underline-offset-4 hover:text-white focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-white">
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-primary-700 bg-white p-6 shadow-xl sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
