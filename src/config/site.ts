/**
 * Zentrale Konfiguration und Platzhalter für die Webseite.
 * Kontaktdaten und Firmenname bitte durch echte Angaben ersetzen.
 */

export const siteConfig = {
  name: "Arbeitssicherheit Köln",
  shortName: "AS Köln",
  /** Platzhalter: Bitte durch echte Domain ersetzen */
  url: "https://www.arbeitssicherheitkoeln.de",
  /** Relativ zur Domain – für Open Graph / JSON-LD (Datei unter public/) */
  ogImagePath: "/og-image.png",
  logoPath: "/icon-512.png",
  companyName: "Arbeitssicherheit Köln",
  contactPerson: "Amin Korkae",
  phone: "0152 282 61619",
  email: "kontakt@handsplus.de",
  address: {
    street: "Barcelona-Allee 12",
    zip: "51103",
    city: "Köln",
    region: "Nordrhein-Westfalen",
  },
  /** Öffnungszeiten für Local SEO (optional anpassen) */
  openingHours: "Mo–Fr 8:00–17:00 Uhr",
  /** WhatsApp: wa.me-Link (z. B. https://wa.me/4915228261619) */
  whatsApp: "https://wa.me/4915228261619",
  /** Formspree: Form-ID aus https://formspree.io (E-Mails gehen an kontakt@handsplus.de) */
  formspreeFormId: "mzdjvrbl",
  social: {
    linkedIn: "",
    xing: "",
  },
  /** Schwester- und Partnerseiten – in der Fußzeile absichtlich sehr dezent verlinkt */
  otherSites: [
    { label: "www.sigeko.koeln", href: "https://www.sigeko.koeln" },
    { label: "www.handsplus.de", href: "https://www.handsplus.de" },
    { label: "www.arbeitssicherheit.nrw", href: "https://www.arbeitssicherheit.nrw" },
    { label: "www.brandschutzkoeln.com", href: "https://www.brandschutzkoeln.com" },
  ],
} as const;

export const navigation = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Branchen", href: "/branchen" },
  { label: "Blog", href: "/blog" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const footerLinks = {
  service: [
    { label: "Leistungen", href: "/leistungen" },
    { label: "Branchen", href: "/branchen" },
    { label: "Blog", href: "/blog" },
    { label: "RSS-Feed", href: "/feed.xml" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
} as const;

/** Volle URL zu einem Pfad (ohne trailing slash außer bei der Wurzel). */
export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/**
 * Kanonische URL – konsistent mit next.config `trailingSlash: true`
 * (Unterseiten enden mit /, die Startseite ist die Domain mit /).
 */
export function canonicalUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p.endsWith("/") ? p : `${p}/`}`;
}
