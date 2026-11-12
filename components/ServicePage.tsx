import Head from "next/head";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { JsonLd, pageMeta } from "./SEO";
import Header, { COMPANY } from "./layout/Header";
import Footer from "./layout/Footer";
import MobileCallBar from "./ui/MobileCallBar";
import { getCopy, Locale } from "../lib/i18n";
import { serviceSchema } from "../lib/schema";
import { getService, getServices } from "../lib/services";
import { homePath, servicePath } from "../lib/site";

const focus = "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2";

// A dedicated landing page for one service ("AC repair in Al Ain" …), in English or Arabic.
export default function ServicePage({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getCopy(locale);
  const service = getService(locale, slug);
  const isAr = locale === "ar";
  const home = homePath(locale);
  const Chevron = isAr ? ChevronLeft : ChevronRight;
  const DirectionArrow = isAr ? ArrowLeft : ArrowRight;
  const related = getServices(locale).filter((item) => item.slug !== slug);

  return <>
    <Head>{pageMeta({ locale, title: service.title, description: service.description, path: servicePath(locale, slug), enPath: servicePath("en", slug), arPath: servicePath("ar", slug) })}</Head>
    <div className={`text-gray-900 ${isAr ? "arabic-site" : ""}`} lang={isAr ? "ar-AE" : "en-AE"} dir={isAr ? "rtl" : "ltr"}>
      <a href="#main-content" className="sr-only z-[90] rounded bg-brand-900 px-4 py-3 text-sm font-extrabold text-white focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-200">{t.header.skip}</a>
      <JsonLd data={serviceSchema(locale, service)} /><Header locale={locale} onHome={false} />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 md:grid-cols-[1.1fr_0.9fr] md:py-16">
            <div>
              <nav aria-label={t.servicePage.breadcrumb} className="text-xs font-bold text-gray-600">
                <ol className="flex flex-wrap items-center gap-2">
                  <li><a href={home} className={`rounded-sm underline decoration-brand-200 underline-offset-4 hover:text-brand-800 ${focus}`}>{t.servicePage.home}</a></li>
                  <li aria-hidden="true"><Chevron className="h-3.5 w-3.5" /></li>
                  <li aria-current="page" className="text-gray-950">{service.h1}</li>
                </ol>
              </nav>
              <h1 className="mt-5 font-heading text-4xl font-black leading-[1.1] tracking-normal text-gray-950 sm:text-5xl lg:text-6xl">{service.h1}</h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-gray-700 md:text-lg">{service.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={COMPANY.whatsappUrl} className="inline-flex min-h-12 items-center justify-center gap-3 rounded bg-emerald-700 px-7 py-4 text-xs font-extrabold text-white shadow-[0_8px_16px_rgba(4,120,87,0.2)] transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">{t.hero.whatsapp} <DirectionArrow className="h-4 w-4" aria-hidden="true" /></a>
                <a href={`tel:${COMPANY.phone}`} className={`inline-flex min-h-12 items-center justify-center gap-3 rounded border border-brand-700 px-7 py-4 text-xs font-extrabold text-brand-900 transition hover:bg-brand-50 ${focus}`}><Phone className="h-4 w-4" aria-hidden="true" />{t.hero.call} <bdi>{COMPANY.displayPhone}</bdi></a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-sm font-extrabold text-brand-900">{t.about.chips.map((chip) => <span key={chip} className="rounded bg-brand-50 px-3 py-2">{chip}</span>)}</div>
            </div>
            <img src="/hvac-commercial-units-960.webp" srcSet="/hvac-commercial-units-640.webp 640w, /hvac-commercial-units-960.webp 960w, /hvac-commercial-units-1280.webp 1280w" sizes="(min-width: 1280px) 560px, 43vw" alt={t.about.imageAlt} width={960} height={640} loading="lazy" decoding="async" className="hidden aspect-[1.5/1] w-full rounded-md object-cover md:block" />
          </div>
        </section>

        <section className="border-t border-brand-100 bg-white">
          <div className="mx-auto max-w-7xl divide-y divide-brand-100 px-4">
            {service.sections.map((section) => (
              <div key={section.title} className="grid gap-5 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 md:py-14">
                <h2 className="max-w-md font-heading text-2xl font-black leading-tight text-gray-950 md:text-4xl">{section.title}</h2>
                <div>
                  {section.text && <p className="max-w-2xl text-base font-medium leading-7 text-gray-700">{section.text}</p>}
                  {section.items && <ul className={`${section.text ? "mt-5 " : ""}grid gap-3 text-sm font-semibold leading-6 text-gray-800`}>{section.items.map((item) => <li key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-800" aria-hidden="true" /><span>{item}</span></li>)}</ul>}
                  {section.note && <p className="mt-5 max-w-2xl text-sm font-medium leading-6 text-gray-700">{section.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-brand-50" aria-labelledby="service-faq-title">
          <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
            <h2 id="service-faq-title" className="font-heading text-2xl font-black text-brand-950 md:text-4xl">{t.servicePage.faqTitle}</h2>
            <div className="mt-6 divide-y divide-brand-200 border-y border-brand-200">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="group py-5" open>
                  <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-gray-950 ${focus}`}>
                    <h3>{faq.question}</h3>
                    <ChevronDown className="h-5 w-5 shrink-0 text-brand-800 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="mt-3 max-w-4xl text-sm font-medium leading-7 text-gray-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-brand-100 bg-white" aria-labelledby="related-services-title">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 md:py-20">
            <div>
              <h2 id="related-services-title" className="max-w-md font-heading text-2xl font-black leading-tight text-gray-950 md:text-4xl">{t.servicePage.relatedTitle}</h2>
              <p className="mt-4 max-w-md text-base font-medium leading-7 text-gray-700">{t.servicePage.relatedText}</p>
            </div>
            <ul className="divide-y divide-brand-100 border-y border-brand-100">
              {related.map((item) => (
                <li key={item.slug}><a href={servicePath(locale, item.slug)} className={`group flex min-h-16 items-center justify-between gap-4 px-1 py-4 text-lg font-black text-gray-950 transition-colors hover:bg-brand-50 sm:px-4 ${focus}`}><span>{item.label}</span><DirectionArrow className="h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /></a></li>
              ))}
              <li><a href={`${home}#areas`} className={`group flex min-h-16 items-center justify-between gap-4 px-1 py-4 text-lg font-black text-gray-950 transition-colors hover:bg-brand-50 sm:px-4 ${focus}`}><span>{t.servicePage.areasLink}</span><MapPin className="h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /></a></li>
            </ul>
          </div>
        </section>

        <section className="bg-brand-950 text-white" aria-labelledby="service-contact-title">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 md:py-20">
            <div>
              <h2 id="service-contact-title" className="max-w-xl font-heading text-3xl font-black leading-tight md:text-5xl">{t.servicePage.contactTitle}</h2>
              <p className="mt-5 max-w-xl text-base font-medium leading-7 text-white/75">{t.servicePage.contactText}</p>
              <p className="mt-5 flex max-w-xl items-start gap-3 text-sm font-medium leading-6 text-white/75"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-200" aria-hidden="true" /><a href={COMPANY.mapsUrl} className="rounded-sm underline hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100"><bdi>{COMPANY.address}</bdi></a></p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a href={COMPANY.whatsappUrl} className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-emerald-700 px-6 py-4 text-xs font-extrabold text-white transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"><MessageCircle className="h-4 w-4" aria-hidden="true" />{t.hero.whatsapp}</a>
              <a href={`tel:${COMPANY.phone}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-white px-6 py-4 text-xs font-extrabold text-brand-950 transition hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"><Phone className="h-4 w-4" aria-hidden="true" />{t.contact.call} <bdi>{COMPANY.displayPhone}</bdi></a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} onHome={false} /><MobileCallBar locale={locale} />
    </div>
  </>;
}
