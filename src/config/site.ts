/**
 * Zentrale Konfiguration und Platzhalter für die Webseite.
 * Kontaktdaten und Firmenname bitte durch echte Angaben ersetzen.
 */

export const siteConfig = {
  name: "Arbeitssicherheit Köln",
  shortName: "AS Köln",
  /** Platzhalter: Bitte durch echte Domain ersetzen */
  url: "https://www.arbeitssicherheitkoeln.de",
  companyName: "Health and Safety +",
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
  /** Weitere Seiten (unauffällig in der Fußzeile) */
  otherSites: [
    { label: "Handsplus", href: "https://handsplus.de" },
    { label: "Arbeitssicherheit.NRW", href: "https://www.arbeitssicherheit.nrw" },
    { label: "Sigeko.Koeln", href: "https://sigeko.koeln" },
    { label: "BrandschutzKöln", href: "https://brandschutzkoeln.com" },
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
    { label: "Über uns", href: "/ueber-uns" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
} as const;
