import React from "react";
import { COMPANY } from "./layout/Header";
import { getCopy, Locale } from "../lib/i18n";

export default function SEO({ locale }: { locale: Locale }) {
  const t = getCopy(locale);
  const url = locale === "ar" ? "https://www.almaghseel.com/ar/" : "https://www.almaghseel.com/";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HVACBusiness", "@id": "https://www.almaghseel.com/#organization", name: t.brand.name, alternateName: getCopy(locale === "ar" ? "en" : "ar").brand.name,
        url: "https://www.almaghseel.com/", logo: "https://www.almaghseel.com/logo-al-maghseel.png", image: "https://www.almaghseel.com/logo-al-maghseel.png",
        description: t.seo.description, telephone: COMPANY.phone, email: COMPANY.email,
        address: { "@type": "PostalAddress", addressLocality: locale === "ar" ? "العين" : "Al Ain", addressRegion: locale === "ar" ? "أبوظبي" : "Abu Dhabi", addressCountry: "AE" },
        areaServed: locale === "ar" ? "العين" : "Al Ain", sameAs: [COMPANY.facebook, COMPANY.instagram], foundingDate: `${COMPANY.since}-01-01`,
        makesOffer: t.services.offerings.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.name, description: service.description } })),
        contactPoint: { "@type": "ContactPoint", telephone: COMPANY.phone, contactType: "customer service", availableLanguage: ["en", "ar"] },
      },
      { "@type": "WebSite", "@id": `${url}#website`, url, name: t.brand.name, publisher: { "@id": "https://www.almaghseel.com/#organization" }, inLanguage: locale === "ar" ? "ar-AE" : "en-AE" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
