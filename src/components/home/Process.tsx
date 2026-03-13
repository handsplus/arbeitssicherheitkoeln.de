import Link from "next/link";

const steps = [
  { num: "1", title: "Erstgespräch", text: "Kostenloses, unverbindliches Kennenlernen: Wir besprechen Ihren Bedarf, Ihre Branche und Ihre Ziele." },
  { num: "2", title: "Angebot", text: "Transparentes Angebot mit Leistungsumfang und Betreuungsmodell – maßgeschneidert für Ihr Unternehmen." },
  { num: "3", title: "Betreuung", text: "Regelmäßige Termine, Gefährdungsbeurteilungen, Unterweisungen und Dokumentation – Sie haben einen festen Ansprechpartner." },
  { num: "4", title: "Entlastung", text: "Sie erfüllen Ihre gesetzlichen Pflichten, wir übernehmen die fachliche Arbeit und sorgen für Rechtssicherheit." },
];

export function Process() {
  return (
    <section className="section-padding bg-white" aria-labelledby="ablauf-heading">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="ablauf-heading" className="heading-section">
            So läuft die Zusammenarbeit
          </h2>
          <p className="heading-section-sub">
            Von der ersten Kontaktaufnahme bis zur laufenden Betreuung: klare Schritte, klare Kommunikation.
          </p>
        </div>
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {steps.map((step) => (
            <li key={step.num} className="relative flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white" aria-hidden>
                {step.num}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{step.title}</h3>
              <p className="mt-2 flex-1 text-neutral-600">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-center">
          <Link href="/kontakt" className="btn-primary">
            Erstgespräch vereinbaren
          </Link>
        </p>
      </div>
    </section>
  );
}
