# So starten Sie die Webseite zuverlässig

Die Seite wird als **statische Website** gebaut (nur HTML/CSS/JS). Kein Node-Server nötig zum Anzeigen – dadurch weniger Fehlerquellen.

---

## Schritt 1: Projekt außerhalb von OneDrive nutzen

Arbeiten Sie in **C:\Projekte\Arbeitssicherheitkoeln** (nicht im OneDrive-Ordner).

- Entweder das Skript **`Projekt-ausserhalb-OneDrive-starten.ps1`** ausführen (Rechtsklick → Mit PowerShell ausführen),  
- oder den Ordner **Arbeitssicherheitkoeln.de** manuell nach **C:\Projekte\Arbeitssicherheitkoeln** kopieren (ohne `node_modules` und `.next`).

---

## Schritt 2: Im Terminal

```powershell
cd C:\Projekte\Arbeitssicherheitkoeln
npm install
npm run build
npm run serve
```

- **npm run build** erzeugt den Ordner **out/** mit allen HTML-, CSS- und JS-Dateien.  
- **npm run serve** startet einen kleinen Webserver nur für diese Dateien (Port 3001).

---

## Schritt 3: Im Browser

**http://localhost:3001** öffnen.

Die Seite läuft dann aus statischen Dateien – kein Next.js-Prozess, der abstürzen oder „weiß“ anzeigen kann.

---

## Wenn Port 3001 belegt ist

```powershell
npm run serve -- -l 3002
```

Dann im Browser **http://localhost:3002** aufrufen.

---

## Nach Änderungen am Code

1. **npm run build** erneut ausführen  
2. **npm run serve** neu starten (vorher mit Strg+C beenden)  
3. Seite im Browser mit F5 aktualisieren

---

## Ordner „out“ anders nutzen

Der Ordner **out/** enthält die fertige Website. Sie können:

- **out** auf einen beliebigen Webhoster hochladen (z. B. Netlify, Vercel, eigener Server),
- oder lokal mit einem anderen Programm die Dateien in **out** anzeigen.

Es wird **kein Node.js** auf dem Server benötigt.
