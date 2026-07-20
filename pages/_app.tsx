// pages/_app.tsx
import type { AppProps } from "next/app";
import { Inter, Outfit } from "next/font/google";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-outfit: ${outfit.style.fontFamily};
        }
      `}</style>
      <div className={`${inter.variable} ${outfit.variable} font-sans`}>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  );
}
