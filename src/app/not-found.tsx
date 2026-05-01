import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="section-padding"
      style={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1 className="heading-section">Seite nicht gefunden</h1>
      <p className="mt-4 max-w-md text-neutral-600">
        Diese Adresse gibt es nicht oder wurde verschoben.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Zur Startseite
      </Link>
    </div>
  );
}
