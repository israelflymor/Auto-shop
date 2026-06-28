import fs from 'fs';
import path from 'path';

// Define the website pages to index by search engines
const PAGES = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/sourcing', priority: '0.9', changefreq: 'weekly' },
  { url: '/fleet', priority: '0.9', changefreq: 'weekly' },
  { url: '/request', priority: '0.9', changefreq: 'daily' },
  { url: '/faq', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'monthly' },
  { url: '/terms', priority: '0.3', changefreq: 'monthly' },
];

const BASE_URL = 'https://www.crotteauautoparts.com';

function generateSitemap() {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write sitemap to public folder so Vite bundles it automatically
  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log('✓ sitemap.xml generated successfully in /public!');

  // Also write to dist if it has been built
  const distDir = path.resolve(process.cwd(), 'dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
    console.log('✓ sitemap.xml copied directly to /dist!');
  }
}

generateSitemap();
