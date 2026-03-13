# Build und Start – wichtige Hinweise

## Was wurde behoben (weißer Bildschirm / Hydration)

1. **Header** ist jetzt eine **Server-Komponente** (kein `usePathname`, kein `useState`). Das verhindert Hydration-Abstürze.
2. **Mobile-Menü** nutzt `<details>`/`<summary>` – funktioniert ohne JavaScript.
3. **FAQ und Kontaktformular** werden per `next/dynamic` mit `ssr: false` geladen – sie erscheinen nach dem ersten Laden und können den Rest der Seite nicht mehr zum Weißwerden bringen.

4. **Port 3001:** Wenn Port 3000 belegt ist (Fehler `EADDRINUSE`), starten Sie mit **`npm run start:3001`** – die Seite läuft dann unter **http://localhost:3001**.

## Wenn OneDrive den Build blockiert (EBUSY / 682.js)

Der Projektordner liegt unter **OneDrive**. OneDrive kann Dateien sperren und zu Fehlern wie  
`Cannot find module './682.js'` oder `EBUSY: resource busy or locked` führen.

### Option A: Projekt außerhalb von OneDrive nutzen (empfohlen)

1. Gesamten Ordner **Arbeitssicherheitkoeln.de** kopieren nach z. B.  
   `C:\Projekte\Arbeitssicherheitkoeln`
2. In einem **neuen Terminal**:
   ```bash
   cd C:\Projekte\Arbeitssicherheitkoeln
   npm install
   npm run build
   npm start
   ```
3. Im Browser: **http://localhost:3000**

### Option B: Im aktuellen Ordner (OneDrive)

1. **Cursor und alle Terminals schließen.**
2. In den **OneDrive-Einstellungen** den Ordner  
   `Arbeitssicherheitkoeln.de` auf **„Nur online“** stellen (nicht dauerhaft synchronisieren), oder OneDrive kurz pausieren.
3. **Neues Terminal** öffnen:
   ```bash
   cd "c:\Users\akork\OneDrive\Desktop\Cursor\Arbeitssicherheitkoeln.de"
   npm install
   npm run build
   npm start
   ```
4. Im Browser: **http://localhost:3000**

### Nach Änderungen am Code

- Im **OneDrive-Ordner**:  
  `npm run build` und danach `npm start` (kein `npm run dev` nötig).
- **Außerhalb von OneDrive**:  
  `npm run dev` oder `npm run build` + `npm start` – beides sollte stabil laufen.
