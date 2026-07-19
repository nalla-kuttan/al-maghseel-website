import Head from "next/head";
import SEO from "../components/SEO";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Testimonials from "../components/sections/Testimonials";
import ServiceAreas from "../components/sections/ServiceAreas";
import Contact from "../components/sections/Contact";
import WhatsAppFAB from "../components/ui/WhatsAppFAB";
import MobileCallBar from "../components/ui/MobileCallBar";

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
        <link rel="icon" href="/logo-al-maghseel.png" />
        <link rel="canonical" href="https://www.almaghseel.com/" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta name="theme-color" content="#7f1d1d" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Al Maghseel Central Air Conditioner Est." />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:title" content="AC Repair, Installation &amp; Maintenance in Al Ain | Al Maghseel" />
        <meta property="og:description" content="24/7 AC repair and HVAC services across the UAE. Fast response in Al Ain &amp; Abu Dhabi. Since 2006." />
        <meta property="og:url" content="https://www.almaghseel.com/" />
        <meta property="og:image" content="https://www.almaghseel.com/logo-al-maghseel.png" />
        <meta property="og:image:alt" content="Al Maghseel — AC repair &amp; HVAC services in Al Ain, UAE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AC Repair, Installation &amp; Maintenance in Al Ain | Al Maghseel" />
        <meta name="twitter:description" content="Professional AC installation, repair &amp; maintenance in Al Ain and across UAE. 24/7 emergency service." />
        <meta name="twitter:image" content="https://www.almaghseel.com/logo-al-maghseel.png" />

        {/* Hreflang (English - UAE) */}
        <link rel="alternate" hrefLang="en-ae" href="https://www.almaghseel.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.almaghseel.com/" />

        {/* Preconnects (perf micro-boosts) */}
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </Head>
      <main className="font-sans text-gray-900">
        <SEO />
        <Header />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <ServiceAreas />
        <Contact />
        <Footer />
        <WhatsAppFAB />
        <MobileCallBar />
      </main>
    </>
  );
}
