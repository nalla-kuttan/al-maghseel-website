// pages/_app.tsx
import type { AppProps } from "next/app";
import { Inter, Noto_Kufi_Arabic, Outfit } from "next/font/google";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const notoKufiArabic = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-arabic" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-outfit: ${outfit.style.fontFamily};
          --font-arabic: ${notoKufiArabic.style.fontFamily};
        }
      `}</style>
      <div className={`${inter.variable} ${outfit.variable} ${notoKufiArabic.variable} font-sans`}>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  );
}
