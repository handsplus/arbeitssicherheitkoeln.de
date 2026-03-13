import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description:
      "Professionelle Arbeitssicherheit und Arbeitsschutz in Köln: externe Fachkraft für Arbeitssicherheit, Gefährdungsbeurteilungen, Unterweisungen und Betreuung. Individuell und gesetzeskonform.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f201b",
    lang: "de",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon", purpose: "any" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
