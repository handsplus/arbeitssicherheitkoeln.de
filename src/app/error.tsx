"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Etwas ist schiefgelaufen</h1>
      <p style={{ color: "#666", marginBottom: "1.5rem" }}>
        Die Seite konnte nicht geladen werden. Bitte versuchen Sie es erneut.
      </p>
      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
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
        <a
          href="/"
          style={{
            display: "inline-block",
            border: "1px solid #ccc",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            color: "#333",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Zur Startseite
        </a>
      </div>
    </div>
  );
}
