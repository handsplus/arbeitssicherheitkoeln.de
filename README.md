# Arbeitssicherheit Köln – Webseite

Webseite für **arbeitssicherheitkoeln.de**: Arbeitssicherheit und Arbeitsschutz in Köln – Next.js 14, TypeScript, App Router, statischer Export, SEO-optimiert, Formspree, Cookie-Hinweis.

## Voraussetzungen

- Node.js 18+
- npm

## Installation & lokaler Build

```bash
npm install
npm run build
npm run serve
```

Die Seite läuft unter [http://localhost:3001](http://localhost:3001) (statischer Ordner `out/`).

## Entwicklung (mit Hot-Reload)

```bash
npm run dev
```

Unter [http://localhost:3000](http://localhost:3000).

---

## Online gehen: GitHub + Vercel

### 1. Repository auf GitHub anlegen

- Auf GitHub: **Create a new repository**
- Owner: z. B. **handsplus**
- Repository name: **arbeitssicherheitkoeln.de**
- Sichtbarkeit: **Public**
- **Kein** README, .gitignore oder Lizenz hinzufügen (Projekt hat bereits .gitignore)
- Auf **Create repository** klicken

### 2. Projekt zu GitHub pushen

Im Projektordner (ohne OneDrive-Pfad, z. B. Kopie unter `C:\Projekte\Arbeitssicherheitkoeln`):

```bash
git init
git add .
git commit -m "Initial commit – arbeitssicherheitkoeln.de"
git branch -M main
git remote add origin https://github.com/handsplus/arbeitssicherheitkoeln.de.git
git push -u origin main
```

(URL anpassen, wenn anderer Owner/Reponame.)

### 3. Auf Vercel deployen

1. Auf [vercel.com](https://vercel.com) gehen und mit GitHub anmelden.
2. **Add New** → **Project** → Repository **arbeitssicherheitkoeln.de** auswählen → **Import**.
3. **Framework Preset:** Next.js (wird erkannt). **Root Directory** leer lassen. **Build Command:** `npm run build`. **Output Directory:** `out` (bei statischem Export).
4. Unter **Environment Variables** optional eintragen:
   - `NEXT_PUBLIC_FORMSPREE_FORM_ID` = Ihre Formspree-Form-ID (falls anders als in `site.ts`).
5. **Deploy** klicken. Nach dem Build liefert Vercel eine URL wie `arbeitssicherheitkoeln-de.vercel.app`.
6. **Domain:** Unter Project → **Settings** → **Domains** die Domain **www.arbeitssicherheitkoeln.de** (oder arbeitssicherheitkoeln.de) hinzufügen und bei Ihrem Domain-Anbieter die angezeigten DNS-Einträge (CNAME/A) setzen.

### Wichtig

- **Statischer Export:** Das Projekt nutzt `output: "export"`. Vercel führt `next build` aus und hostet den Inhalt von `out/`.
- **Keine API-Routes:** Kontaktformular läuft über Formspree (Frontend).
- **Secrets:** Keine Zugangsdaten ins Repo. Formspree-ID steht in `src/config/site.ts`; für eine andere ID nur die Umgebungsvariable auf Vercel setzen.

---

## Konfiguration

- **`src/config/site.ts`** – Firma, Kontakt, Navigation, Formspree-ID, weitere Seiten
- **Impressum & Datenschutz** – rechtlich prüfen und ggf. anpassen

## Struktur

- `src/app/` – Seiten (Startseite, Leistungen, Branchen, Blog, Über uns, Kontakt, FAQ, Datenschutz, Impressum)
- `src/components/` – Layout, Home-Sektionen, Kontaktformular, Cookie-Banner, SEO-Schema
- Statischer Export → `out/` nach `npm run build`

## Lizenz

Projektintern. Alle Rechte vorbehalten.
