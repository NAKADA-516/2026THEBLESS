const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

/**
 * WebP Auto-Serve Middleware
 * If browser supports WebP (Accept: image/webp) and a .webp version exists,
 * transparently serve the WebP file instead of the original.
 */
app.use((req, res, next) => {
  const accept = req.headers.accept || '';
  if (!accept.includes('image/webp')) return next();
  if (!/\.(jpe?g|png)$/i.test(req.path)) return next();

  const webpPath = path.join(PUBLIC_DIR, req.path.replace(/\.(jpe?g|png)$/i, '.webp'));
  if (fs.existsSync(webpPath)) {
    res.setHeader('Content-Type', 'image/webp');
    res.setHeader('Vary', 'Accept');
    return res.sendFile(webpPath);
  }
  next();
});

app.use((req, res, next) => {
  if (req.path.endsWith('.html') || req.path === '/') {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
  }
  next();
});

app.use(express.static(PUBLIC_DIR));

app.get('/', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`THE BLESS AWAJI server running on port ${PORT}`);
  console.log(`WebP auto-serve: enabled`);
});
