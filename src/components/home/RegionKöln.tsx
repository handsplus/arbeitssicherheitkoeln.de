import Link from "next/link";

const regions = [
  "Köln Innenstadt",
  "Köln-Nord (Nippes, Chorweiler)",
  "Köln-Ost (Kalk, Mülheim)",
  "Köln-Süd (Lindenthal, Rodenkirchen)",
  "Köln-West (Ehrenfeld, Porz)",
  "Rhein-Erft-Kreis",
  "Rhein-Sieg-Kreis",
  "Leverkusen",
  "Bonn und Umgebung",
];

export function RegionKöln() {
  return (
    <section className="section-padding bg-white" aria-labelledby="region-heading">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="region-heading" className="heading-section">
            Arbeitssicherheit in Köln und Umgebung
          </h2>
          <p className="heading-section-sub">
            Unser Einsatzgebiet umfasst Köln und die Region: Von der Innenstadt über die Stadtbezirke bis in die angrenzenden Kreise. Vor-Ort-Termine, Begehungen und Unterweisungen bei Ihnen im Betrieb – kurze Wege und persönlicher Kontakt.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {regions.map((region) => (
            <span
              key={region}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700"
            >
              {region}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Link href="/kontakt" className="link-underline font-medium">
            Anfrage für Ihren Standort stellen →
          </Link>
          <Link href="/branchen" className="link-underline font-medium">
            Arbeitssicherheit nach Branche
          </Link>
        </div>
      </div>
    </section>
  );
}
