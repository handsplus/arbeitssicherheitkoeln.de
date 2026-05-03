import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WebSiteSchema } from "@/components/seo/WebSiteSchema";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { absoluteUrl, canonicalUrl, siteConfig } from "@/config/site";

const CookieBanner = dynamic(
  () => import("@/components/CookieBanner").then((m) => ({ default: m.CookieBanner })),
  { ssr: false }
);

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const siteUrl = siteConfig.url;

export const viewport: Viewport = {
  themeColor: "#0f201b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Arbeitssicherheit Köln",
  title: {
    default:
      "Arbeitssicherheit & Arbeitsschutz Köln | Externe SiFa & Fachkraft für Arbeitssicherheit",
    template: "%s | Arbeitssicherheit & Arbeitsschutz Köln",
  },
  description:
    "Arbeitssicherheit Köln: externe SiFa, Gefährdungsbeurteilungen, Unterweisungen – Arbeitsschutz für Betriebe in Köln und Umgebung.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Arbeitssicherheit",
    "Arbeitsschutz",
    "Arbeitssicherheit Köln",
    "Arbeitsschutz Köln",
    "Fachkraft für Arbeitssicherheit Köln",
    "externe Fachkraft Arbeitssicherheit Köln",
    "externe SiFa Köln",
    "SiFa Köln",
    "Arbeitsschutzbetreuung Köln",
    "betrieblicher Arbeitsschutz Köln",
    "Gefährdungsbeurteilung Köln",
    "Sicherheitsunterweisung Köln",
    "DGUV Vorschrift 2 Betreuung",
    "Arbeitsschutz kleine Unternehmen",
  ],
  authors: [{ name: "Arbeitssicherheit Köln", url: siteUrl }],
  creator: "Arbeitssicherheit Köln",
  publisher: "Arbeitssicherheit Köln",
  formatDetection: { email: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: canonicalUrl("/"),
    siteName: "Arbeitssicherheit Köln",
    title: "Arbeitssicherheit & Arbeitsschutz Köln | Externe SiFa & Betreuung",
    description:
      "SiFa & Arbeitssicherheit in Köln: Gefährdungsbeurteilung, Unterweisungen, externe Betreuung – gesetzeskonform vor Ort.",
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Arbeitssicherheit Köln – Arbeitsschutz und SiFa-Betreuung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbeitssicherheit & Arbeitsschutz Köln | Externe SiFa",
    description:
      "Externe SiFa Köln: Arbeitssicherheit, Gefährdungsbeurteilung, Unterweisungen, Arbeitsschutz – Betreuung vor Ort.",
    images: [siteConfig.ogImagePath],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: canonicalUrl("/"),
    languages: { "de-DE": canonicalUrl("/") },
    types: { "application/rss+xml": absoluteUrl("/feed.xml") },
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body
        className={`${sourceSans.variable} min-h-screen flex flex-col font-sans bg-white text-neutral-800 antialiased`}
        style={{ margin: 0, minHeight: "100vh" }}
      >
        <noscript>
          <div style={{ padding: "1rem", background: "#0f201b", color: "#fff", textAlign: "center" }}>
            Arbeitssicherheit Köln – Ihr Partner für Arbeitsschutz.{" "}
            <a href="/" style={{ color: "#88bca6" }}>Zur Startseite</a>
          </div>
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border-2 focus:border-primary-600 focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-700 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
        >
          Zum Inhalt springen
        </a>
        <WebSiteSchema />
        <LocalBusinessSchema />
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
