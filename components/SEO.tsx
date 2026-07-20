import React from "react";
import { COMPANY } from "./layout/Header";
import { getCopy, Locale } from "../lib/i18n";

export default function SEO({ locale }: { locale: Locale }) {
  const t = getCopy(locale);
  const url = locale === "ar" ? "https://www.almaghseel.com/ar/" : "https://www.almaghseel.com/";
  const language = locale === "ar" ? "ar-AE" : "en-AE";
  const businessId = "https://www.almaghseel.com/#organization";
  const websiteId = "https://www.almaghseel.com/#website";
  const heroImage = "https://www.almaghseel.com/hvac-hero-rooftop-service.jpg";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HVACBusiness", "@id": businessId, name: COMPANY.name, alternateName: getCopy("ar").brand.name,
        url: "https://www.almaghseel.com/", logo: "https://www.almaghseel.com/logo-al-maghseel.png", image: [heroImage, "https://www.almaghseel.com/logo-al-maghseel.png"],
        description: t.seo.description, telephone: COMPANY.phone, email: COMPANY.email,
        address: { "@type": "PostalAddress", addressLocality: locale === "ar" ? "العين" : "Al Ain", addressRegion: locale === "ar" ? "أبوظبي" : "Abu Dhabi", addressCountry: "AE" },
        areaServed: t.areas.names.map((name) => ({ "@type": "Place", name })), sameAs: [COMPANY.facebook, COMPANY.instagram], foundingDate: `${COMPANY.since}-01-01`,
        knowsLanguage: ["ar", "en"], slogan: t.brand.tagline,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: locale === "ar" ? "خدمات المكيفات" : "A/C services",
          itemListElement: t.services.offerings.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service.name, description: service.description, provider: { "@id": businessId }, areaServed: { "@type": "City", name: locale === "ar" ? "العين" : "Al Ain" } },
          })),
        },
        contactPoint: { "@type": "ContactPoint", telephone: COMPANY.phone, contactType: "customer service", availableLanguage: ["en", "ar"] },
      },
      { "@type": "WebSite", "@id": websiteId, url: "https://www.almaghseel.com/", name: COMPANY.name, alternateName: getCopy("ar").brand.name, publisher: { "@id": businessId }, inLanguage: ["en-AE", "ar-AE"] },
      {
        "@type": "WebPage", "@id": `${url}#webpage`, url, name: t.seo.title, description: t.seo.description, inLanguage: language,
        isPartOf: { "@id": websiteId }, about: { "@id": businessId }, mainEntity: { "@id": businessId },
        primaryImageOfPage: { "@type": "ImageObject", url: heroImage, width: 1600, height: 1067, caption: t.seo.imageAlt },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
