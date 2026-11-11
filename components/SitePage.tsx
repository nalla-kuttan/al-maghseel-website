import Head from "next/head";
import { JsonLd, pageMeta } from "./SEO";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import ServiceGuide from "./sections/ServiceGuide";
import About from "./sections/About";
import ServicePromise from "./sections/ServicePromise";
import ServiceAreas from "./sections/ServiceAreas";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import MobileCallBar from "./ui/MobileCallBar";
import { getCopy, Locale } from "../lib/i18n";
import { homeSchema } from "../lib/schema";
import { homePath } from "../lib/site";

export default function SitePage({ locale }: { locale: Locale }) {
  const t = getCopy(locale);
  const isAr = locale === "ar";
  return <>
    <Head>{pageMeta({ locale, title: t.seo.title, description: t.seo.description, ogTitle: t.seo.ogTitle, ogDescription: t.seo.ogDescription, path: homePath(locale), enPath: "/", arPath: "/ar/" })}</Head>
    <div className={`text-gray-900 ${isAr ? "arabic-site" : ""}`} lang={isAr ? "ar-AE" : "en-AE"} dir={isAr ? "rtl" : "ltr"}>
      <a href="#main-content" className="sr-only z-[90] rounded bg-brand-900 px-4 py-3 text-sm font-extrabold text-white focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-200">{t.header.skip}</a>
      <JsonLd data={homeSchema(locale)} /><Header locale={locale} />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero locale={locale} /><Services locale={locale} /><ServiceGuide locale={locale} /><About locale={locale} /><ServicePromise locale={locale} /><ServiceAreas locale={locale} /><Testimonials locale={locale} /><Contact locale={locale} />
      </main>
      <Footer locale={locale} /><MobileCallBar locale={locale} />
    </div>
  </>;
}
