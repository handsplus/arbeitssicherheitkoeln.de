# Checkliste: Online mit GitHub + Vercel

## Vor dem ersten Push

- [ ] Projekt **außerhalb von OneDrive** kopieren (z. B. `C:\Projekte\Arbeitssicherheitkoeln`), sonst können Build-Probleme entstehen.
- [ ] In der Kopie: `npm install` und `npm run build` ausführen – Build muss durchlaufen.

## GitHub

1. [ ] Auf GitHub einloggen (Account: handsplus).
2. [ ] **Create a new repository**
   - Repository name: **arbeitssicherheitkoeln.de**
   - Public
   - **Kein** README, .gitignore oder License hinzufügen.
3. [ ] Im **lokalen Projektordner** (der Kopie):

   ```bash
   git init
   git add .
   git commit -m "Initial commit – arbeitssicherheitkoeln.de"
   git branch -M main
   git remote add origin https://github.com/handsplus/arbeitssicherheitkoeln.de.git
   git push -u origin main
   ```

   (URL anpassen, falls anderer Owner/Reponame.)

## Vercel

1. [ ] [vercel.com](https://vercel.com) → Mit **GitHub** anmelden.
2. [ ] **Add New** → **Project** → Repository **arbeitssicherheitkoeln.de** auswählen → **Import**.
3. [ ] Einstellungen prüfen:
   - Framework: **Next.js**
   - Build Command: **npm run build**
   - Output Directory: **out** (bei statischem Export)
4. [ ] **Deploy** → warten bis Build grün.
5. [ ] Optional: Unter **Settings** → **Environment Variables** z. B. `NEXT_PUBLIC_FORMSPREE_FORM_ID` setzen, wenn Sie eine andere Formspree-ID als in `site.ts` nutzen wollen.
6. [ ] **Settings** → **Domains**: Domain **www.arbeitssicherheitkoeln.de** (oder arbeitssicherheitkoeln.de) hinzufügen und bei Ihrem Domain-Anbieter die angezeigten DNS-Einträge eintragen.

## Danach

- Änderungen: im Projekt `git add .` → `git commit -m "..."` → `git push` – Vercel baut und veröffentlicht automatisch neu.
