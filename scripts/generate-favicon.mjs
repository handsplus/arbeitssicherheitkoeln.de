/**
 * Erzeugt aus public/logo-source.png quadratische Favicons (weißer Rand).
 * Ausführung: node scripts/generate-favicon.mjs
 */
import sharp from "sharp";
import toIco from "to-ico";
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");
const appDir = join(root, "src", "app");
const src = join(publicDir, "logo-source.png");

async function main() {
  const img = sharp(src);
  const { width, height } = await img.metadata();
  const size = Math.max(width, height);

  // Quadrat mit weißem Hintergrund, Logo zentriert
  const squared = await img
    .extend({
      top: Math.max(0, Math.ceil((size - height) / 2)),
      bottom: Math.max(0, Math.floor((size - height) / 2)),
      left: Math.max(0, Math.ceil((size - width) / 2)),
      right: Math.max(0, Math.floor((size - width) / 2)),
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();

  const sizes = [16, 32, 48];
  const icoBuffers = await Promise.all(
    sizes.map((s) => sharp(squared).resize(s, s).png().toBuffer())
  );
  const ico = await toIco(icoBuffers);
  writeFileSync(join(publicDir, "favicon.ico"), ico);

  // PNG-Varianten für moderne Browser und App-Icon
  const pngSizes = [32, 192, 512];
  for (const s of pngSizes) {
    const buf = await sharp(squared).resize(s, s).png().toBuffer();
    writeFileSync(join(publicDir, `icon-${s}.png`), buf);
  }

  // Next.js App Router: icon.png + apple-icon.png in app
  const icon32 = await sharp(squared).resize(32, 32).png().toBuffer();
  writeFileSync(join(publicDir, "icon.png"), icon32);
  mkdirSync(appDir, { recursive: true });
  writeFileSync(join(appDir, "icon.png"), icon32);
  const appleIcon = await sharp(squared).resize(180, 180).png().toBuffer();
  writeFileSync(join(appDir, "apple-icon.png"), appleIcon);

  console.log("Favicons erzeugt: public/favicon.ico, public/icon*.png, src/app/icon.png, src/app/apple-icon.png");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
