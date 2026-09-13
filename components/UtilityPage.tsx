import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import { COMPANY } from "./layout/Header";

export default function UtilityPage({ title, description, path, noindex = false, children }: { title: string; description: string; path: string; noindex?: boolean; children: ReactNode }) {
  const url = `https://www.almaghseel.com${path}`;
  return <>
    <Head>
      <title>{`${title} | Al Maghseel`}</title><meta name="description" content={description} />
      <link rel="canonical" href={url} /><meta name="robots" content={noindex ? "noindex,follow" : "index,follow"} />
      <meta property="og:type" content="website" /><meta property="og:title" content={`${title} | Al Maghseel`} /><meta property="og:description" content={description} /><meta property="og:url" content={url} /><meta property="og:image" content="https://www.almaghseel.com/hvac-hero-rooftop-service.jpg" /><meta property="og:image:alt" content="Rooftop air conditioning service" /><meta name="twitter:card" content="summary_large_image" />
    </Head>
    <div className="min-h-screen bg-brand-50 text-gray-900">
      <header className="border-b border-brand-100 bg-white px-6 py-6"><Link href="/" className="font-heading text-xl font-black text-brand-900">Al Maghseel</Link></header>
      <main className="mx-auto max-w-3xl px-6 py-14"><Link href="/" className="text-sm font-semibold text-brand-900 underline">Back to home</Link><h1 className="mt-8 font-heading text-4xl font-black">{title}</h1><div className="mt-8 space-y-6 text-base leading-7">{children}</div></main>
      <footer className="mx-auto flex max-w-3xl flex-wrap gap-5 border-t border-brand-200 px-6 py-8 text-sm"><Link href="/privacy/" className="underline">Privacy policy</Link><Link href="/terms/" className="underline">Terms & conditions</Link><a href={`mailto:${COMPANY.email}`} className="break-all underline">{COMPANY.email}</a></footer>
    </div>
  </>;
}
