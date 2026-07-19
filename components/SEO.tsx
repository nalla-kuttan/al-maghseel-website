import React from "react";
import { COMPANY } from "./layout/Header";
import { SERVICES } from "./sections/Services";

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
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: 24.2075, // Approximate Al Ain coords
                    longitude: 55.7447,
                },
                areaServed: [
                    "Al Ain",
                    "Abu Dhabi",
                    "Dubai",
                    "Sharjah",
                    "Ajman",
                    "Ras Al Khaimah",
                    "Umm Al Quwain",
                    "Fujairah",
                ],
                openingHoursSpecification: [
                    {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                            "Sunday",
                        ],
                        opens: "00:00",
                        closes: "23:59",
                    },
                ],
                sameAs: [COMPANY.facebook, COMPANY.instagram],
                foundingDate: `${COMPANY.since}-01-01`,
                priceRange: "$$",
                makesOffer: SERVICES.map((s) => ({
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: s.name,
                        description: s.short,
                    },
                })),
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: COMPANY.phone,
                    contactType: "customer service",
                    availableLanguage: ["en", "ar"]
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
