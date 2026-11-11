// Writes public/sitemap.xml from the route list, so new pages can never be left out.
// Runs automatically before `next build` (npm "prebuild").
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const SITE = "https://www.almaghseel.com";
const { services } = JSON.parse(readFileSync(new URL("../lib/routes.json", import.meta.url), "utf8"));

let lastmod = new Date().toISOString().slice(0, 10);
try { lastmod = execSync("git log -1 --format=%cs", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim() || lastmod; } catch {}

// Each bilingual page lists both language versions (hreflang) in the sitemap as well as in its <head>.
const bilingual = ["", ...services.map((slug) => `${slug}/`)];
const entry = (loc, en, ar) => `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="en-ae" href="${en}" />
    <xhtml:link rel="alternate" hreflang="ar-ae" href="${ar}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />
    <lastmod>${lastmod}</lastmod>
  </url>`;

const urls = bilingual.flatMap((path) => {
  const en = `${SITE}/${path}`;
  const ar = `${SITE}/ar/${path}`;
  return [entry(en, en, ar), entry(ar, en, ar)];
});
for (const path of ["privacy/", "terms/"]) urls.push(`  <url>\n    <loc>${SITE}/${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`);

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`);
console.log(`sitemap.xml: ${urls.length} URLs, lastmod ${lastmod}`);
