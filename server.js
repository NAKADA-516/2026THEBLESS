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
  if (req.path.endsWith('.html') || req.path === '/' || req.path.endsWith('.js') || req.path.endsWith('.css')) {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
  }
  next();
});

app.use(express.static(PUBLIC_DIR, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
    }
  }
}));

app.get('/',        (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/dining',  (req, res) => res.sendFile(path.join(__dirname, 'public/dining.html')));
app.get('/stay',    (req, res) => res.sendFile(path.join(__dirname, 'public/stay.html')));
app.get('/spa',     (req, res) => res.sendFile(path.join(__dirname, 'public/spa.html')));
app.get('/gallery', (req, res) => res.sendFile(path.join(__dirname, 'public/gallery.html')));
app.get('/about',   (req, res) => res.sendFile(path.join(__dirname, 'public/about.html')));
app.get('/group',   (req, res) => res.sendFile(path.join(__dirname, 'public/group.html')));
app.get('/faq',     (req, res) => res.sendFile(path.join(__dirname, 'public/faq.html')));
app.get('/terms',   (req, res) => res.sendFile(path.join(__dirname, 'public/terms.html')));
app.get('/privacy', (req, res) => res.sendFile(path.join(__dirname, 'public/privacy.html')));
app.get('/legal',   (req, res) => res.sendFile(path.join(__dirname, 'public/legal.html')));

app.listen(PORT, () => {
  console.log(`THE BLESS AWAJI server running on port ${PORT}`);
  console.log(`WebP auto-serve: enabled`);
});
