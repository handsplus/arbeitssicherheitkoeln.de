import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WebSiteSchema } from "@/components/seo/WebSiteSchema";

const CookieBanner = dynamic(
  () => import("@/components/CookieBanner").then((m) => ({ default: m.CookieBanner })),
  { ssr: false }
);

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const siteUrl = "https://www.arbeitssicherheitkoeln.de";

export const viewport: Viewport = {
  themeColor: "#0f201b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Arbeitssicherheit Köln",
  title: {
    default: "Arbeitssicherheit Köln | Fachkraft für Arbeitsschutz & Betreuung",
    template: "%s | Arbeitssicherheit Köln",
  },
  description:
    "Professionelle Arbeitssicherheit und Arbeitsschutz in Köln: externe Fachkraft für Arbeitssicherheit, Gefährdungsbeurteilungen, Unterweisungen und Betreuung für Unternehmen. Individuell und gesetzeskonform.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Arbeitssicherheit Köln",
    "Arbeitsschutz Köln",
    "Fachkraft für Arbeitssicherheit Köln",
    "externe Fachkraft Arbeitssicherheit Köln",
    "Gefährdungsbeurteilung Köln",
    "Arbeitsschutzbetreuung Köln",
    "Sicherheitsunterweisung Köln",
    "Arbeitsschutz Unternehmen Köln",
  ],
  authors: [{ name: "Arbeitssicherheit Köln", url: siteUrl }],
  creator: "Arbeitssicherheit Köln",
  publisher: "Arbeitssicherheit Köln",
  formatDetection: { email: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Arbeitssicherheit Köln",
    title: "Arbeitssicherheit Köln | Fachkraft für Arbeitsschutz & Betreuung",
    description:
      "Professionelle Arbeitssicherheit und Arbeitsschutz in Köln: externe Fachkraft, Gefährdungsbeurteilungen, Unterweisungen. Für Unternehmen in Köln und Umgebung.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Arbeitssicherheit Köln" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbeitssicherheit Köln | Fachkraft für Arbeitsschutz",
    description: "Professionelle Arbeitssicherheit in Köln: Betreuung, Gefährdungsbeurteilungen, Unterweisungen.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: siteUrl },
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
        <WebSiteSchema />
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
