# Projekt kopieren, bauen und als STATISCHE Website starten (Port 3001).
# Kein Next.js-Server – nur statische Dateien = sehr stabil.

$Ziel = "C:\Projekte\Arbeitssicherheitkoeln"
$Quelle = $PSScriptRoot

Write-Host "Kopiere Projekt nach $Ziel ..." -ForegroundColor Cyan
if (-not (Test-Path "C:\Projekte")) { New-Item -ItemType Directory -Path "C:\Projekte" -Force | Out-Null }

if (Test-Path $Ziel) {
    Remove-Item -Recurse -Force $Ziel -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 2
}

$ausschluss = @("node_modules", ".next", "out", ".git")
$items = Get-ChildItem -Path $Quelle -Force
foreach ($item in $items) {
    if ($item.Name -in $ausschluss) { continue }
    $zielPath = Join-Path $Ziel $item.Name
    Copy-Item -Path $item.FullName -Destination $zielPath -Recurse -Force -ErrorAction SilentlyContinue
}

Set-Location $Ziel
Write-Host "`nInstalliere Abhängigkeiten (npm install) ..." -ForegroundColor Cyan
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "Fehler bei npm install." -ForegroundColor Red
    pause
    exit 1
}

Write-Host "`nBaue statische Website (npm run build) ..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Fehler bei npm run build." -ForegroundColor Red
    pause
    exit 1
}

$url = "http://localhost:3001"
Write-Host "`nStarte statischen Server: $url" -ForegroundColor Green
Write-Host "Projektordner: $Ziel" -ForegroundColor Yellow
Write-Host "Siehe ANLEITUNG-START.md fuer Details.`n" -ForegroundColor Gray
Start-Process $url
npm run serve
