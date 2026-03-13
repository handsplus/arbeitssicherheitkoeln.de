const points = [
  {
    title: "Erfahrene Fachkraft für Arbeitssicherheit",
    text: "Qualifizierte externe SiFa mit fundierter Praxis in Betrieben unterschiedlicher Branchen – Sie erhalten fachlich fundierte Beratung und Betreuung.",
  },
  {
    title: "Fokus auf Köln und Umgebung",
    text: "Lokale Präsenz: Vor-Ort-Termine, Begehungen und Unterweisungen in Köln und der Region – kurze Wege und persönlicher Kontakt.",
  },
  {
    title: "Maßgeschneiderte Betreuung",
    text: "Kein Einheitsprogramm: Wir richten Leistungsumfang und Frequenz an Ihrer Branche, Betriebsgröße und Ihren Zielen aus.",
  },
  {
    title: "Rechtssicher und dokumentiert",
    text: "Alle Leistungen werden nachvollziehbar dokumentiert – Sie sind für Behörden, Berufsgenossenschaften und Audits bestens vorbereitet.",
  },
];

export function WhyUs() {
  return (
    <section className="section-padding bg-neutral-50" aria-labelledby="warum-heading">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="warum-heading" className="heading-section">
            Warum Arbeitssicherheit mit uns in Köln?
          </h2>
          <p className="heading-section-sub">
            Wir verbinden fachliche Kompetenz mit lokalem Bezug und einem serviceorientierten Ansatz – für Unternehmen, die Arbeitsschutz ernst nehmen und entlastet werden wollen.
          </p>
        </div>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2" role="list">
          {points.map((item, index) => (
            <li key={index} className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white" aria-hidden>
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-neutral-600">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
