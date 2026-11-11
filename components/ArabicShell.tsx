import Head from "next/head";
import { Noto_Kufi_Arabic } from "next/font/google";
import { ReactNode } from "react";

// Declared here rather than in _app so the 120 KB Arabic font is only fetched on Arabic pages.
const notoKufiArabic = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-arabic" });

export default function ArabicShell({ fontPreloads, children }: { fontPreloads: string[]; children: ReactNode }) {
  return (
    <div className={notoKufiArabic.variable}>
      <Head>
        {fontPreloads.map((href) => <link key={href} rel="preload" href={href} as="font" type="font/woff2" crossOrigin="anonymous" />)}
      </Head>
      {children}
    </div>
  );
}
