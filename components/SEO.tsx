import React from "react";
import { COMPANY } from "./layout/Header";
import { SERVICES } from "./sections/Services"; // This requires exporting SERVICES from Services.tsx

// Need to update Services.tsx to export SERVICES or duplicate it. 
// For now, I'll assume I can export it.

export default function SEO() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "HVACBusiness",
                "@id": "https://almaghseel.com/#organization",
                name: COMPANY.name,
                url: "https://almaghseel.com/",
                logo: "https://almaghseel.com/logo-al-maghseel.PNG",
                image: "https://almaghseel.com/logo-al-maghseel.PNG",
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
                "@id": "https://almaghseel.com/#website",
                url: "https://almaghseel.com/",
                name: COMPANY.name,
                publisher: {
                    "@id": "https://almaghseel.com/#organization",
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
