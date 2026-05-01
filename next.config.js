/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  /**
   * Statischer Export nur beim Production-Build (NEXT_EXPORT=1).
   * Im Dev-Modus ohne "export" vermeidet das den Fehler
   * "missing required error components, refreshing…" (bekanntes Next.js-Verhalten).
   */
  ...(process.env.NEXT_EXPORT === "1" ? { output: "export" } : {}),
  trailingSlash: true,
};

module.exports = nextConfig;
