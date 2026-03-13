const trustItems = [
  "Qualifizierte Fachkraft für Arbeitssicherheit (SiFa)",
  "Erfahrung in verschiedenen Branchen und Betriebsgrößen",
  "Transparente Kommunikation und feste Ansprechpartner",
  "Dokumentation nach anerkannten Standards",
  "Orientierung an gesetzlichen und berufsgenossenschaftlichen Vorgaben",
];

export function Trust() {
  return (
    <section className="section-padding bg-white" aria-labelledby="vertrauen-heading">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="vertrauen-heading" className="heading-section">
            Vertrauen durch Kompetenz
          </h2>
          <p className="heading-section-sub">
            Arbeitssicherheit betrifft Menschen und Rechtssicherheit. Wir arbeiten nach klaren Standards und mit dem Anspruch, Ihr verlässlicher Partner zu sein.
          </p>
        </div>
        <ul className="mt-12 flex flex-wrap justify-center gap-4" role="list">
          {trustItems.map((item) => (
            <li
              key={item}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 text-sm font-medium text-neutral-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
