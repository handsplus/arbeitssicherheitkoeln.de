"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="de">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Fehler</h1>
        <p style={{ color: "#666", marginBottom: "1.5rem" }}>
          Die Anwendung konnte nicht geladen werden.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            background: "#0f201b",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Erneut versuchen
        </button>
      </body>
    </html>
  );
}
