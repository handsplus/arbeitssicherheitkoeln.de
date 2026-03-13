"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

type Status = "idle" | "sending" | "success" | "error";

const FORMSPREE_FORM_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? siteConfig.formspreeFormId ?? "";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    const { name, email, phone, message } = data;

    try {
      if (FORMSPREE_FORM_ID) {
        // Genau wie Formspree es erwartet: FormData mit name-Attributen
        const payload = new FormData();
        payload.set("name", name);
        payload.set("email", email);
        payload.set("phone", phone || "(nicht angegeben)");
        payload.set("message", message);
        payload.set("_subject", `Kontaktanfrage arbeitssicherheitkoeln.de: ${name}`);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);

        const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: payload,
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        const result = await res.json().catch(() => ({}));

        if (!res.ok) {
          const msg =
            (result as { error?: string }).error ??
            (result as { errors?: Array<{ message?: string }> }).errors?.[0]?.message ??
            "Sendefehler";
          throw new Error(msg);
        }
      } else {
        const subject = encodeURIComponent(`Kontaktanfrage: ${name}`);
        const body = encodeURIComponent(
          `${message}\n\n---\nName: ${name}\nE-Mail: ${email}\nTelefon: ${phone || "-"}`
        );
        window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
        setStatus("success");
        form.reset();
        return;
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Unbekannter Fehler";
      const isTimeout = err instanceof Error && err.name === "AbortError";
      setErrorMessage(
        isTimeout
          ? "Die Anfrage hat zu lange gedauert. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut."
          : msg === "Sendefehler" || msg === "Unbekannter Fehler"
            ? "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns per E-Mail oder Telefon."
            : msg
      );
    }
  }

  const formAction = FORMSPREE_FORM_ID
    ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
    : undefined;

  return (
    <form
      action={formAction}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
      aria-label="Kontaktformular"
    >
      {FORMSPREE_FORM_ID && (
        <input type="hidden" name="_subject" value="Kontaktanfrage arbeitssicherheitkoeln.de" />
      )}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700">
            Name / Firma <span className="text-neutral-500">(Pflicht)</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 shadow-sm placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
            placeholder="Ihr Name oder Firmenname"
            disabled={status === "sending"}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700">
            E-Mail <span className="text-neutral-500">(Pflicht)</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 shadow-sm placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
            placeholder="ihre@email.de"
            disabled={status === "sending"}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-neutral-700">
          Telefon
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 shadow-sm placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
          placeholder="+49 221 …"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700">
          Nachricht <span className="text-neutral-500">(Pflicht)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 shadow-sm placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
          placeholder="Ihr Anliegen (z. B. gewünschte Leistungen, Betriebsgröße, Branche)"
          disabled={status === "sending"}
        />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="btn-primary w-full sm:w-auto"
          disabled={status === "sending"}
          aria-busy={status === "sending"}
        >
          {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
        </button>
        {status === "success" && (
          <p className="text-sm font-medium text-primary-700" role="status">
            Vielen Dank. Ihre Nachricht wurde gesendet. Wir melden uns in Kürze.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-600" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
