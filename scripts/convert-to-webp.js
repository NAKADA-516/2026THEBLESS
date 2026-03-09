/**
 * THE BLESS AWAJI — WebP Conversion Script
 * Run: npm run webp
 *
 * Converts all JPG/JPEG/PNG images in public/images to WebP (quality 85).
 * Deletes the original file after successful conversion.
 * Already-converted files are skipped (and their originals deleted if webp exists).
 * HEIC/GIF/SVG/WEBP files are skipped entirely.
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const QUALITY = 85;
const SKIP_EXTENSIONS = ['.webp', '.gif', '.svg', '.heic', '.heif', '.mp4', '.mov'];

let converted = 0;
let skipped = 0;
let deleted = 0;
let errors = 0;

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (SKIP_EXTENSIONS.includes(ext)) return;
  if (!/\.(jpg|jpeg|png)$/i.test(filePath)) return;

  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  // Already has webp — just delete original
  if (fs.existsSync(webpPath)) {
    try {
      const origSize = fs.statSync(filePath).size;
      const webpSize = fs.statSync(webpPath).size;
      fs.unlinkSync(filePath);
      console.log(`  DEL   ${path.basename(filePath)} (webp exists, saved ${((origSize - webpSize)/1024/1024).toFixed(1)}MB)`);
      deleted++;
    } catch (err) {
      console.error(`  ERROR deleting ${path.basename(filePath)}: ${err.message}`);
      errors++;
    }
    return;
  }

  // Convert to webp then delete original
  try {
    await sharp(filePath)
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const origSize = fs.statSync(filePath).size;
    const webpSize = fs.statSync(webpPath).size;
    const ratio = ((1 - webpSize / origSize) * 100).toFixed(1);

    fs.unlinkSync(filePath);
    console.log(`  OK    ${path.basename(filePath)} → ${path.basename(webpPath)} (-${ratio}%, ${(origSize/1024/1024).toFixed(1)}MB → ${(webpSize/1024).toFixed(0)}KB)`);
    converted++;
  } catch (err) {
    console.error(`  ERROR ${path.basename(filePath)}: ${err.message}`);
    errors++;
  }
}

async function walkDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      console.log(`\n[${path.relative(IMAGES_DIR, fullPath)}]`);
      await walkDir(fullPath);
    } else {
      await processFile(fullPath);
    }
  }
}

(async () => {
  console.log('THE BLESS AWAJI — WebP Converter (auto-delete originals)');
  console.log(`Source: ${IMAGES_DIR}`);
  console.log(`Quality: ${QUALITY}\n`);
  console.log('[root]');

  await walkDir(IMAGES_DIR);

  console.log(`\n✓ Done — Converted: ${converted}, Deleted originals: ${deleted + converted}, Skipped: ${skipped}, Errors: ${errors}`);
})();
