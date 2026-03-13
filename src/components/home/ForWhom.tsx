const audiences = [
  "Kleine und mittlere Unternehmen (KMU) in Köln und Umgebung",
  "Handwerksbetriebe",
  "Dienstleister und Büros",
  "Produzierende Betriebe",
  "Unternehmen ohne eigene Fachkraft für Arbeitssicherheit",
  "Betriebe, die ihre Arbeitsschutzbetreuung wechseln oder ergänzen möchten",
];

export function ForWhom() {
  return (
    <section className="section-padding bg-primary-50/50" aria-labelledby="fuer-wen-heading">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="fuer-wen-heading" className="heading-section">
            Für wen eignet sich unsere Betreuung?
          </h2>
          <p className="heading-section-sub">
            Wir betreuen Betriebe jeder Größe und Branche – besonders dort, wo eine externe Fachkraft für Arbeitssicherheit die sinnvollste Lösung ist.
          </p>
        </div>
        <ul className="mt-12 mx-auto max-w-2xl space-y-4" role="list">
          {audiences.map((item) => (
            <li key={item} className="flex items-center gap-3 rounded-xl border border-primary-100 bg-white px-5 py-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white" aria-hidden>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-neutral-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
