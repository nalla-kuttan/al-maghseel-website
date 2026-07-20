import React from "react";
import { COMPANY } from "./layout/Header";
import { SERVICE_OFFERINGS } from "./sections/Services";

export default function SEO() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "HVACBusiness",
                "@id": "https://www.almaghseel.com/#organization",
                name: COMPANY.name,
                url: "https://www.almaghseel.com/",
                logo: "https://www.almaghseel.com/logo-al-maghseel.png",
                image: "https://www.almaghseel.com/logo-al-maghseel.png",
                description: COMPANY.tagline,
                telephone: COMPANY.phone,
                email: COMPANY.email,
                address: {
                    "@type": "PostalAddress",
                    addressLocality: COMPANY.city,
                    addressRegion: "Abu Dhabi",
                    addressCountry: "AE",
                },
                areaServed: "Al Ain",
                sameAs: [COMPANY.facebook, COMPANY.instagram],
                foundingDate: `${COMPANY.since}-01-01`,
                makesOffer: SERVICE_OFFERINGS.map((service) => ({
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: service.name,
                        description: service.description,
                    },
                })),
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: COMPANY.phone,
                    contactType: "customer service",
                    availableLanguage: ["en"]
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://www.almaghseel.com/#website",
                url: "https://www.almaghseel.com/",
                name: COMPANY.name,
                publisher: {
                    "@id": "https://www.almaghseel.com/#organization",
                },
                inLanguage: "en",
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
