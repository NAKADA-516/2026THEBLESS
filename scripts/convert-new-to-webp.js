/**
 * THE BLESS AWAJI — New Images WebP Converter
 * Run: npm run webp-new
 *
 * public/images/new/ 内の JPG/PNG を WebP に変換し、元ファイルを削除する。
 * 変換後の WebP は new/ フォルダ内に残るので、適切なサブフォルダへ移動して使用する。
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const NEW_DIR = path.join(__dirname, '../public/images/new');
const QUALITY = 85;

let converted = 0;
let skipped = 0;
let errors = 0;

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!/\.(jpg|jpeg|png|avif|heic|heif)$/i.test(ext)) {
    skipped++;
    return;
  }

  const webpPath = filePath.replace(/\.(jpg|jpeg|png|avif|heic|heif)$/i, '.webp');

  if (fs.existsSync(webpPath)) {
    fs.unlinkSync(filePath);
    console.log(`  SKIP  ${path.basename(filePath)} → webp 既存のため元ファイル削除`);
    skipped++;
    return;
  }

  try {
    await sharp(filePath)
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const origSize = fs.statSync(filePath).size;
    const webpSize = fs.statSync(webpPath).size;
    const ratio = ((1 - webpSize / origSize) * 100).toFixed(1);

    fs.unlinkSync(filePath);
    console.log(`  OK    ${path.basename(filePath)} → ${path.basename(webpPath)} (-${ratio}%, ${(origSize / 1024).toFixed(0)}KB → ${(webpSize / 1024).toFixed(0)}KB)`);
    converted++;
  } catch (err) {
    console.error(`  ERROR ${path.basename(filePath)}: ${err.message}`);
    errors++;
  }
}

(async () => {
  if (!fs.existsSync(NEW_DIR)) {
    fs.mkdirSync(NEW_DIR, { recursive: true });
    console.log(`✓ Created: public/images/new/`);
    console.log('  → JPG/PNG ファイルをこのフォルダに入れて再実行してください。');
    process.exit(0);
  }

  const files = fs.readdirSync(NEW_DIR).map(f => path.join(NEW_DIR, f)).filter(f => fs.statSync(f).isFile());

  if (files.length === 0) {
    console.log('public/images/new/ にファイルがありません。');
    process.exit(0);
  }

  console.log('THE BLESS AWAJI — WebP Converter (new folder)');
  console.log(`対象: public/images/new/ (${files.length} files)\n`);

  for (const file of files) {
    await processFile(file);
  }

  console.log(`\n✓ 完了 — 変換: ${converted}件, スキップ: ${skipped}件, エラー: ${errors}件`);
  console.log('変換済み WebP を public/images/ の適切なサブフォルダに移動してください。');
})();
