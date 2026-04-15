/**
 * Adds ?v=<single UUID> to relative image URLs in public/*.html (img src only).
 * Run: node scripts/apply-image-cache-version.js
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const publicDir = path.join(__dirname, "..", "public");
const extRe = /\.(webp|jpg|jpeg|png|gif|svg)$/i;

function transform(url, version) {
  if (!url || url.startsWith("http://") || url.startsWith("https://")) return url;
  const pathOnly = url.replace(/\?.*$/, "");
  if (!extRe.test(pathOnly)) return url;
  const base = url.replace(/(\.(?:webp|jpg|jpeg|png|gif|svg))\?.*$/i, "$1");
  return `${base}?v=${version}`;
}

function patchContent(s, version) {
  s = s.replace(/\bsrc="([^"]*)"/g, (_, u) => `src="${transform(u, version)}"`);
  s = s.replace(/\bsrc='([^']*)'/g, (_, u) => `src='${transform(u, version)}'`);
  return s;
}

const version = crypto.randomUUID();
const files = fs.readdirSync(publicDir).filter((f) => f.endsWith(".html")).sort();
for (const f of files) {
  const fp = path.join(publicDir, f);
  const text = fs.readFileSync(fp, "utf8");
  const next = patchContent(text, version);
  if (next !== text) {
    fs.writeFileSync(fp, next, "utf8");
    console.log("updated", f);
  }
}
console.log("UUID:", version);
