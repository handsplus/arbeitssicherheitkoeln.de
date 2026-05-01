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
  /** Weniger „Cannot find module ./xxx.js“ / fehlende Error-Chunks bei OneDrive + Windows-Dev */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;
