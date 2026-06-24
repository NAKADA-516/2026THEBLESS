const fs = require('fs');
const path = require('path');
const uuid = '5c940710-2bfb-451b-a689-648c8ecab2ad';
const dir = path.join(__dirname, '..', 'public');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
let total = 0;
files.forEach(file => {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');
  // src="images/..." または srcset="images/..."
  const updated = content.replace(
    /(src|srcset)="(images\/[^"]+?\.(webp|jpg|jpeg|png|gif|svg))(\?v=[^"]*)?"([^>])/g,
    (m, attr, imgPath, ext, oldV, after) => {
      total++;
      return `${attr}="${imgPath}?v=${uuid}"${after}`;
    }
  );
  fs.writeFileSync(fp, updated, 'utf8');
  console.log('Updated:', file);
});
console.log('Total image refs updated:', total);
