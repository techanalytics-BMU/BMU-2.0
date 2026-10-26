// Converts every JPG/PNG/GIF/TIFF/AVIF in assets-raw/ to WebP in public/images/,
// keeping the same folder structure.  Usage: npm run images:webp
import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC_DIR = path.resolve('assets-raw');
const OUT_DIR = path.resolve('public/images');
const INPUT_EXT = new Set(['.jpg', '.jpeg', '.png', '.gif', '.tif', '.tiff', '.avif']);
const MAX_WIDTH = 2400;
const QUALITY = 80;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

async function run() {
  let converted = 0;

  for await (const file of walk(SRC_DIR)) {
    const ext = path.extname(file).toLowerCase();
    if (!INPUT_EXT.has(ext)) continue;

    const rel = path.relative(SRC_DIR, file);
    const outFile = path.join(OUT_DIR, rel.slice(0, -ext.length) + '.webp');

    // Skip if the webp is already newer than the source
    const outStat = await stat(outFile).catch(() => null);
    if (outStat && outStat.mtimeMs >= (await stat(file)).mtimeMs) continue;

    await mkdir(path.dirname(outFile), { recursive: true });
    await sharp(file)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outFile);

    converted++;
    console.log(`✔ ${rel} → ${path.relative(process.cwd(), outFile)}`);
  }

  console.log(`Done. ${converted} image(s) converted.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
