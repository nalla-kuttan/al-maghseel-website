import { readFileSync } from "node:fs";
import path from "node:path";
import Head from "next/head";
import { Noto_Kufi_Arabic } from "next/font/google";
import SitePage from "../components/SitePage";

// Declared here rather than in _app so the 120 KB Arabic font is only fetched on /ar.
const notoKufiArabic = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-arabic" });

export default function ArabicHome({ fontPreloads }: { fontPreloads: string[] }) {
  return (
    <div className={notoKufiArabic.variable}>
      <Head>
        {fontPreloads.map((href) => <link key={href} rel="preload" href={href} as="font" type="font/woff2" crossOrigin="anonymous" />)}
      </Head>
      <SitePage locale="ar" />
    </div>
  );
}

// Next 16 (Turbopack) records page-level fonts in next-font-manifest.json but doesn't emit
// their preload tags for the Pages Router, so read the manifest at build time and emit them here.
export function getStaticProps() {
  let fontPreloads: string[] = [];
  try {
    const manifest = JSON.parse(readFileSync(path.join(process.cwd(), ".next/server/next-font-manifest.json"), "utf8"));
    fontPreloads = (manifest.pages?.["/ar"] ?? []).map((file: string) => `/_next/${file}`);
  } catch {}
  return { props: { fontPreloads } };
}
