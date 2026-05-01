/** Entfernt den Next.js-Build-Cache (.next) – hilft bei „Cannot find module './xxx.js'“ im Dev-Modus. */
const fs = require("node:fs");
const path = require("node:path");

const dir = path.join(__dirname, "..", ".next");

function sleepBusy(ms) {
  const t = Date.now() + ms;
  while (Date.now() < t) {}
}

let lastErr;
for (let i = 0; i < 5; i++) {
  try {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log("OK: .next entfernt.");
    process.exit(0);
  } catch (e) {
    lastErr = e;
    if (e.code === "ENOENT") {
      console.log("OK: .next war nicht vorhanden.");
      process.exit(0);
    }
    if ((e.code === "EBUSY" || e.code === "EPERM") && i < 4) {
      if (i === 0) {
        console.warn(
          "Hinweis: .next ist gesperrt (oft: „npm run dev“ läuft noch). Beenden Sie den Dev-Server (Strg+C), es wird kurz erneut versucht…"
        );
      }
      sleepBusy(600);
      continue;
    }
    throw e;
  }
}

console.error("Konnte .next nicht löschen. Dev-Server, Vorschau und OneDrive-Sync beenden, dann: npm run clean");
console.error(lastErr?.message || lastErr);
process.exit(1);
