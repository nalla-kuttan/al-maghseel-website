import { readFileSync } from "node:fs";
import path from "node:path";

// Next 16 (Turbopack) records page-level fonts in next-font-manifest.json but doesn't emit
// their preload tags for the Pages Router, so read the manifest at build time and emit them.
// Call from getStaticProps only; `page` is the route key, e.g. "/ar" or "/ar/[service]".
export function getFontPreloads(page: string): string[] {
  try {
    const manifest = JSON.parse(readFileSync(path.join(process.cwd(), ".next/server/next-font-manifest.json"), "utf8"));
    return (manifest.pages?.[page] ?? []).map((file: string) => `/_next/${file}`);
  } catch {
    return [];
  }
}
