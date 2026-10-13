// pages/_app.tsx
import type { AppProps } from "next/app";
import { Inter, Outfit } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";
import PrivacyControls from "../components/ui/PrivacyControls";
import RouteLoading from "../components/ui/RouteLoading";

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
        <Head><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" /><link rel="apple-touch-icon" href="/apple-touch-icon.png" /><meta name="theme-color" content="#7f1d1d" /></Head>
        <RouteLoading />
        <Component {...pageProps} />
        <PrivacyControls />
      </div>
    </>
  );
}
