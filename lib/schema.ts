import { COMPANY } from "../components/layout/Header";
import { getCopy, Locale } from "./i18n";
import type { ServiceContent, ServiceFaq } from "./services";
import { getServices } from "./services";
import { absoluteUrl, homePath, servicePath, SITE_URL } from "./site";

const BUSINESS_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const HERO_IMAGE = `${SITE_URL}/hvac-hero-rooftop-service.jpg`;
const LOGO = `${SITE_URL}/logo-al-maghseel.png`;
const language = (locale: Locale) => (locale === "ar" ? "ar-AE" : "en-AE");

// One business entity, identified by the same @id on every page, so search engines and
// AI assistants resolve every page and service back to a single local business.
function businessNode(locale: Locale) {
  const t = getCopy(locale);
  const ar = locale === "ar";
  return {
    "@type": "HVACBusiness", "@id": BUSINESS_ID, name: COMPANY.name, alternateName: [getCopy("ar").brand.name, "Al Maghseel", "Al Maghseel Central A/C Est."],
    url: `${SITE_URL}/`, logo: LOGO, image: [HERO_IMAGE, LOGO],
    description: t.seo.description, telephone: COMPANY.phone, email: COMPANY.email, foundingDate: `${COMPANY.since}`,
    hasMap: COMPANY.mapsUrl, sameAs: [COMPANY.mapsUrl, COMPANY.facebook, COMPANY.instagram],
    address: { "@type": "PostalAddress", streetAddress: COMPANY.streetAddress, addressLocality: ar ? "العين" : "Al Ain", addressRegion: ar ? "أبوظبي" : "Abu Dhabi", addressCountry: "AE" },
    areaServed: t.areas.names.map((name) => ({ "@type": "Place", name })),
    knowsLanguage: ["ar", "en"], slogan: t.brand.tagline,
    knowsAbout: getServices(locale).map((service) => service.serviceType),
    hasOfferCatalog: {
      "@type": "OfferCatalog", name: ar ? "خدمات المكيفات" : "A/C services",
      itemListElement: getServices(locale).map((service) => ({ "@type": "Offer", itemOffered: { "@id": `${absoluteUrl(servicePath(locale, service.slug))}#service` } })),
    },
    contactPoint: { "@type": "ContactPoint", telephone: COMPANY.phone, contactType: "customer service", areaServed: "AE", availableLanguage: ["en", "ar"] },
  };
}

const websiteNode = () => ({
  "@type": "WebSite", "@id": WEBSITE_ID, url: `${SITE_URL}/`, name: COMPANY.name, alternateName: [getCopy("ar").brand.name, "Al Maghseel"],
  publisher: { "@id": BUSINESS_ID }, inLanguage: ["en-AE", "ar-AE"],
});

const serviceNode = (locale: Locale, service: ServiceContent) => {
  const url = absoluteUrl(servicePath(locale, service.slug));
  return {
    "@type": "Service", "@id": `${url}#service`, name: service.h1, serviceType: service.serviceType, description: service.description, url,
    provider: { "@id": BUSINESS_ID }, areaServed: { "@type": "City", name: locale === "ar" ? "العين" : "Al Ain" },
  };
};

const faqNode = (url: string, locale: Locale, faqs: readonly ServiceFaq[]) => ({
  "@type": "FAQPage", "@id": `${url}#faq`, inLanguage: language(locale),
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
});

export function homeSchema(locale: Locale) {
  const t = getCopy(locale);
  const url = absoluteUrl(homePath(locale));
  return {
    "@context": "https://schema.org",
    "@graph": [
      businessNode(locale), websiteNode(),
      ...getServices(locale).map((service) => serviceNode(locale, service)),
      {
        "@type": "WebPage", "@id": `${url}#webpage`, url, name: t.seo.title, description: t.seo.description, inLanguage: language(locale),
        isPartOf: { "@id": WEBSITE_ID }, about: { "@id": BUSINESS_ID }, mainEntity: { "@id": BUSINESS_ID },
        primaryImageOfPage: { "@type": "ImageObject", url: HERO_IMAGE, width: 1600, height: 1067, caption: t.seo.imageAlt },
      },
      faqNode(url, locale, t.seoContent.faqs),
    ],
  };
}

export function serviceSchema(locale: Locale, service: ServiceContent) {
  const t = getCopy(locale);
  const url = absoluteUrl(servicePath(locale, service.slug));
  return {
    "@context": "https://schema.org",
    "@graph": [
      businessNode(locale), websiteNode(),
      ...getServices(locale).map((item) => serviceNode(locale, item)),
      {
        "@type": "WebPage", "@id": `${url}#webpage`, url, name: service.title, description: service.description, inLanguage: language(locale),
        isPartOf: { "@id": WEBSITE_ID }, about: { "@id": `${url}#service` }, mainEntity: { "@id": `${url}#service` }, breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.servicePage.home, item: absoluteUrl(homePath(locale)) },
          { "@type": "ListItem", position: 2, name: service.h1, item: url },
        ],
      },
      faqNode(url, locale, service.faqs),
    ],
  };
}
