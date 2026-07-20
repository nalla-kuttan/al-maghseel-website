import Head from "next/head";
import SEO from "./SEO";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import ServicePromise from "./sections/ServicePromise";
import ServiceAreas from "./sections/ServiceAreas";
import Contact from "./sections/Contact";
import MobileCallBar from "./ui/MobileCallBar";
import { getCopy, Locale } from "../lib/i18n";

export default function SitePage({ locale }: { locale: Locale }) {
  const t = getCopy(locale);
  const isAr = locale === "ar";
  const canonical = isAr ? "https://www.almaghseel.com/ar/" : "https://www.almaghseel.com/";
  return <>
    <Head>
      <title>{t.seo.title}</title><meta name="description" content={t.seo.description} /><meta name="keywords" content={t.seo.keywords} /><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="icon" href="/logo-al-maghseel.png" /><link rel="canonical" href={canonical} /><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" /><meta name="theme-color" content="#7f1d1d" />
      <meta property="og:type" content="website" /><meta property="og:site_name" content={t.brand.name} /><meta property="og:locale" content={isAr ? "ar_AE" : "en_AE"} /><meta property="og:title" content={t.seo.ogTitle} /><meta property="og:description" content={t.seo.ogDescription} /><meta property="og:url" content={canonical} /><meta property="og:image" content="https://www.almaghseel.com/logo-al-maghseel.png" /><meta property="og:image:alt" content={t.seo.imageAlt} />
      <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={t.seo.ogTitle} /><meta name="twitter:description" content={t.seo.ogDescription} /><meta name="twitter:image" content="https://www.almaghseel.com/logo-al-maghseel.png" />
      <link rel="alternate" hrefLang="en-ae" href="https://www.almaghseel.com/" /><link rel="alternate" hrefLang="ar-ae" href="https://www.almaghseel.com/ar/" /><link rel="alternate" hrefLang="x-default" href="https://www.almaghseel.com/" /><link rel="preconnect" href="https://wa.me" /><link rel="dns-prefetch" href="https://wa.me" />
    </Head>
    <main className={`text-gray-900 ${isAr ? "arabic-site" : ""}`} lang={isAr ? "ar-AE" : "en-AE"} dir={isAr ? "rtl" : "ltr"}>
      <SEO locale={locale} /><Header locale={locale} /><Hero locale={locale} /><Services locale={locale} /><About locale={locale} /><ServicePromise locale={locale} /><ServiceAreas locale={locale} /><Contact locale={locale} /><Footer locale={locale} /><MobileCallBar locale={locale} />
    </main>
  </>;
}
