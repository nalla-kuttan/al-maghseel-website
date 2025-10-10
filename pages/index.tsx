import Head from "next/head";
import AlMaghseelSite from "../components/AlMaghseelSite";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta */}
        <title>AC Repair, Installation &amp; Maintenance in Al Ain | Al Maghseel Central Air Conditioner Est.</title>
        <meta
          name="description"
          content="Professional AC installation, repair & maintenance in Al Ain, Abu Dhabi, Dubai, and across the UAE. 24/7 emergency AC repair, certified technicians, and trusted HVAC service since 2006."
        />
        <meta
          name="keywords"
          content="AC repair Al Ain, AC installation Al Ain, AC maintenance UAE, central AC service Abu Dhabi, 24/7 AC repair UAE, emergency AC technician Al Ain, split AC installation Abu Dhabi, HVAC service UAE, compressor repair Al Ain, AC gas refill UAE, AC cleaning service Al Ain, AC maintenance near me, AC repair near me, thermostat repair UAE, coil cleaning Abu Dhabi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-al-maghseel.PNG" />
        <link rel="canonical" href="https://almaghseel.com/" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta name="theme-color" content="#7f1d1d" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Al Maghseel Central Air Conditioner Est." />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:title" content="AC Repair, Installation &amp; Maintenance in Al Ain | Al Maghseel" />
        <meta property="og:description" content="24/7 AC repair and HVAC services across the UAE. Fast response in Al Ain &amp; Abu Dhabi. Since 2006." />
        <meta property="og:url" content="https://almaghseel.com/" />
        <meta property="og:image" content="https://almaghseel.com/logo-al-maghseel.PNG" />
        <meta property="og:image:alt" content="Al Maghseel — AC repair &amp; HVAC services in Al Ain, UAE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AC Repair, Installation &amp; Maintenance in Al Ain | Al Maghseel" />
        <meta name="twitter:description" content="Professional AC installation, repair &amp; maintenance in Al Ain and across UAE. 24/7 emergency service." />
        <meta name="twitter:image" content="https://almaghseel.com/logo-al-maghseel.PNG" />

        {/* Arabic localized meta (temporary until /ar route exists) */}
        <meta
          name="description"
          lang="ar"
          content="خدمات احترافية لتركيب وصيانة وإصلاح المكيفات في العين وأبوظبي ودبي وجميع الإمارات. طوارئ 24/7، فنيون معتمدون، خبرة منذ 2006."
        />
        <meta
          name="keywords"
          lang="ar"
          content="تصليح مكيفات العين، تركيب مكيفات العين، صيانة مكيفات الإمارات، صيانة التكييف المركزي أبوظبي، فني تكييف 24/7 الإمارات، فني تكييف طارئ العين، تركيب سبليت أبوظبي، خدمة HVAC الإمارات، تعبئة غاز المكيف الإمارات، تنظيف لفائف المكيف أبوظبي"
        />

        {/* Hreflang (English - UAE) */}
        <link rel="alternate" hrefLang="en-ae" href="https://almaghseel.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://almaghseel.com/" />

        {/* Hreflang (Arabic - UAE) */}
        <link rel="alternate" hrefLang="ar-ae" href="https://almaghseel.com/ar/" />
        <meta property="og:locale:alternate" content="ar_AE" />

        {/* Preconnects (perf micro-boosts) */}
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Structured Data: HVACBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              "name": "Al Maghseel Central Air Conditioner Est.",
              "url": "https://almaghseel.com/",
              "image": "https://almaghseel.com/logo-al-maghseel.PNG",
              "telephone": "+971506734821",
              "email": "maghseel1971@gmail.com",
              "slogan": "Installation · Repair · Maintenance",
              "foundingDate": "2006-01-01",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Al Ain",
                "addressRegion": "Abu Dhabi",
                "addressCountry": "AE"
              },
              "areaServed": [
                "Al Ain",
                "Abu Dhabi",
                "Dubai",
                "Sharjah",
                "Ajman",
                "Ras Al Khaimah",
                "Umm Al Quwain",
                "Fujairah"
              ],
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" }
              ],
              "sameAs": [
                "https://www.facebook.com/p/Al-Maghseel-Central-Air-Conditioner-Est-100076006452976/",
                "https://www.instagram.com/maghseel/?hl=am-et"
              ],
              "makesOffer": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Repair & Maintenance", "description": "Emergency AC repair, fault diagnostics, and on-site maintenance across UAE." } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Installation & Commissioning", "description": "Professional AC unit installation and commissioning for split and central systems." } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Annual Maintenance Contracts", "description": "Scheduled AC servicing plans for homes, offices, and facilities." } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Central & HVAC Service", "description": "Full central AC/HVAC maintenance for commercial and industrial clients." } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Gas Refill & Leak Fixing", "description": "Refrigerant refill and precise leak detection to restore cooling performance." } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Cleaning & Coil Service", "description": "Coil and filter cleaning to improve airflow, hygiene, and efficiency." } }
              ],
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+971506734821",
                "contactType": "customer service",
                "availableLanguage": ["en", "ar"]
              }]
            })
          }}
        />

        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Al Maghseel Central Air Conditioner Est.",
              "url": "https://almaghseel.com/",
              "inLanguage": "en",
              "publisher": {
                "@type": "Organization",
                "name": "Al Maghseel Central Air Conditioner Est.",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://almaghseel.com/logo-al-maghseel.PNG"
                }
              }
            })
          }}
        />

        {/* Structured Data: WebSite (Arabic) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "المغسيل للتكييف المركزي",
              "alternateName": "Al Maghseel Central Air Conditioner Est.",
              "url": "https://almaghseel.com/ar/",
              "inLanguage": "ar",
              "publisher": {
                "@type": "Organization",
                "name": "المغسيل للتكييف المركزي",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://almaghseel.com/logo-al-maghseel.PNG"
                }
              }
            })
          }}
        />
      </Head>
      <AlMaghseelSite />
    </>
  );
}