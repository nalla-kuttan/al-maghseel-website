import React, { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Wrench,
  Fan,
  Thermometer,
  ShieldCheck,
  Clock,
  Facebook,
  Instagram,
  ArrowRight,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

import { motion } from "framer-motion";

/**
 * Al Maghseel Central Air Conditioner Est. — One-page site
 * TSX component for Next.js. Uses TailwindCSS and lucide-react.
 */

const COMPANY = {
  name: "Al Maghseel Central Air Conditioner Est.",
  tagline: "Installation · Repair · Maintenance",
  city: "Al Ain, Abu Dhabi",
  region: "All over UAE",
  years: 19,
  since: 2006,
  phone: "+971506734821",
  whatsappDigits: "00971506734821",
  email: "maghseel1971@gmail.com",
  facebook:
    "https://www.facebook.com/p/Al-Maghseel-Central-Air-Conditioner-Est-100076006452976/",
  instagram: "https://www.instagram.com/maghseel/?hl=am-et",
  cta: "Get a Free Quote in 1 Hour",
};

type Service = {
  icon: React.ReactNode;
  name: string;
  short: string;
  points: string[];
};

const SERVICES: Service[] = [
  {
    icon: <Wrench className="w-6 h-6" />,
    name: "AC Installation & Commissioning",
    short:
      "Complete supply, installation, and commissioning of new air conditioning units.",
    points: [
      "Includes unit selection and supply",
      "Professional installation with proper mounting and wiring",
      "System testing and performance verification",
      "Ensures compliance with safety and energy standards",
    ],
  },
  {
    icon: <Clock className="w-6 h-6" />,
    name: "Annual Maintenance Contracts",
    short:
      "Scheduled maintenance plans to keep AC systems running efficiently year-round.",
    points: [
      "Regular inspections and cleaning",
      "Priority support for breakdowns",
      "Cost-effective long-term upkeep",
      "Helps extend equipment life",
    ],
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    name: "On-Site AC Repair & Maintenance",
    short: "Mobile repair services for resolving any AC issues at your location.",
    points: [
      "Quick diagnostics and fixes",
      "Covers indoor and outdoor units",
      "Reduces downtime",
      "No need to uninstall system",
    ],
  },
  {
    icon: <Fan className="w-6 h-6" />,
    name: "Indoor & Outdoor Water Service",
    short:
      "Servicing water lines and components connected to split or duct AC units.",
    points: [
      "Water drainage check and cleaning",
      "Removal of clogs in pipes",
      "Prevents leakage and water damage",
      "Balances indoor humidity",
    ],
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    name: "Water Leak Fixing",
    short: "Identifying and repairing internal or external AC water leaks.",
    points: [
      "Drain pipe clearing",
      "Sealant application",
      "Water tray and hose inspection",
      "Prevents mold and water stains",
    ],
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    name: "Gas Leak Fixing",
    short: "Detection and repair of refrigerant gas leaks in AC systems.",
    points: [
      "Pressure test and leak detection",
      "Gas refill with correct refrigerant",
      "Valve and pipe repair",
      "Restores cooling efficiency",
    ],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    name: "Capacitor & Magnetic Conductor Fixing",
    short: "Repair or replacement of key electrical components inside the AC.",
    points: [
      "Faulty capacitor replacement",
      "Magnetic relay/contactor service",
      "Improves startup performance",
      "Fixes power supply issues",
    ],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    name: "Compressor Fixing",
    short:
      "Repair or servicing of the AC compressor, the system’s cooling engine.",
    points: [
      "Overheating and noise diagnostics",
      "Oil top-up or compressor replacement",
      "Increases cooling performance",
      "High-precision repair required",
    ],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    name: "PC Board Fixing",
    short: "Electronic board (PCB) troubleshooting and repair.",
    points: [
      "Resolves display or control issues",
      "Repair/replace burnt-out components",
      "Restores normal operation",
      "Involves micro-level testing",
    ],
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    name: "Electrical Connection Issues",
    short: "Rectification of wiring and power supply issues in the AC.",
    points: [
      "Loose or damaged wire replacement",
      "Voltage stability checks",
      "Ensures safe operation",
      "Prevents short circuits and power loss",
    ],
  },
  {
    icon: <Fan className="w-6 h-6" />,
    name: "Piping Works",
    short: "Installation and repair of copper and drainage piping for AC systems.",
    points: [
      "Leak-proof copper piping",
      "Drain pipe routing",
      "Insulation of lines",
      "Affects cooling efficiency directly",
    ],
  },
  {
    icon: <Fan className="w-6 h-6" />,
    name: "Fan Blade & Fan Motor",
    short:
      "Servicing or replacement of fan blade/motor in indoor or outdoor units.",
    points: [
      "Fixes noise and airflow issues",
      "Replacement of bent/damaged blades",
      "Lubrication and motor rewiring",
      "Essential for proper air circulation",
    ],
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    name: "Thermostat Repair",
    short: "Diagnosis and fixing of AC temperature control units.",
    points: [
      "Calibration and wiring checks",
      "Replacement of faulty sensors",
      "Accurate temperature regulation",
      "Supports energy efficiency",
    ],
  },
  {
    icon: <Fan className="w-6 h-6" />,
    name: "Condensing Coil Cleaning/Repair",
    short: "Maintenance or replacement of the external condensing coil.",
    points: [
      "Dirt/debris removal",
      "Improves heat dissipation",
      "Repairs corrosion or blockages",
      "Crucial for compressor performance",
    ],
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    name: "Filter Tray, Switch, Blower, etc.",
    short: "Servicing of miscellaneous internal AC components.",
    points: [
      "Filter tray cleaning",
      "Switch replacement",
      "Blower motor service",
      "Ensures clean air and smooth airflow",
    ],
  },
];

/** Animated Counter */
function Counter({ target, duration = 1.2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const total = Math.max(1, Math.floor(duration * 60));
    const step = () => {
      start++;
      const next = Math.round((start / total) * target);
      setCount(Math.min(target, next));
      if (start < total) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return <span>{count}</span>;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo-al-maghseel.PNG"
            alt="Al Maghseel Logo"
            className="h-14 w-14 object-contain rounded"
          />
          <div className="leading-tight">
            <div className="font-semibold text-lg">{COMPANY.name}</div>
            <div className="text-sm text-gray-600">{COMPANY.tagline}</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-red-700">Services</a>
          <a href="#about" className="hover:text-red-700">About</a>
          <a href="#areas" className="hover:text-red-700">Service Areas</a>
          <a href="#contact" className="hover:text-red-700">Contact</a>
          <a
            href={`https://wa.me/${COMPANY.whatsappDigits}?text=Hello%20Al%20Maghseel,%20I%27d%20like%20a%20quote.`}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-red-800 text-white"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <motion.section
      className="relative isolate overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-red-50"
      {...fadeUp}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-900 px-3 py-1 text-xs font-medium">
            Serving {COMPANY.region} · Since {COMPANY.since}
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            Reliable Central A/C Services in <span className="text-red-800">{COMPANY.city}</span>
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            From new installations to emergency repairs, our expert team keeps your cooling system running at peak performance. <Counter target={COMPANY.years} />+ years of trusted service.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-red-800 text-white px-5 py-3 shadow hover:shadow-md active:scale-[0.99] transition"
            >
              <Phone className="w-4 h-4" /> Call {COMPANY.phone}
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(`Hello Al Maghseel, ${COMPANY.cta}`)}`}
              className="inline-flex items-center gap-2 rounded-xl border border-red-800 text-red-800 px-5 py-3 hover:bg-red-50 active:scale-[0.99] transition"
            >
              <MessageCircle className="w-4 h-4" /> {COMPANY.cta}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Licensed & Experienced</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Fast Response</div>
            <div className="flex items-center gap-2"><Wrench className="w-4 h-4" /> Genuine Parts</div>
          </div>
        </motion.div>
        <motion.div className="relative" {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="w-full grid place-items-center p-4">
            <img
              src="/logo-al-maghseel.PNG"
              alt="Al Maghseel Central Air Conditioner Est. logo"
              className="mx-auto w-56 md:w-72 lg:w-96 object-contain rounded-3xl shadow"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2 className="text-3xl md:text-4xl font-bold" {...fadeUp}>Our Services</motion.h2>
        <motion.p className="mt-2 text-gray-700" {...fadeUp} transition={{ delay: 0.05 }}>End-to-end A/C solutions across the UAE.</motion.p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              data-testid="service-card"
              className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-red-50 text-red-900 p-2">{s.icon}</div>
                <h3 className="font-semibold text-lg">{s.name}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">{s.short}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-red-700" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <a
                  href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(`I am interested in: ${s.name}`)}`}
                  className="inline-flex items-center gap-1 text-red-800 font-medium hover:underline"
                >
                  Request this service <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <motion.section id="about" className="bg-neutral-50" {...fadeUp}>
      <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="mt-3 text-gray-700">
            We are a locally trusted A/C specialist headquartered in {COMPANY.city}. For over <Counter target={COMPANY.years} /> years, our technicians have supported homes, shops, and commercial spaces across {COMPANY.region}. We focus on safe installs, quick repairs, and honest advice.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {["Certified technicians", "Fast on-site response", "Clear pricing, no surprises", "Genuine parts & warranty"].map((b, i) => (
              <li key={i} className="flex items-center gap-2 bg-white border rounded-xl p-3">
                <CheckCircle className="w-4 h-4 text-red-700" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 grid place-items-center">
            <div className="text-center px-8">
              <div className="font-semibold">Fully Covered</div>
              <div className="text-3xl font-extrabold text-red-800">All Over UAE</div>
              <p className="mt-2 text-gray-600">Residential • Retail • Commercial • Industrial</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function ServiceAreas() {
  const areas = [
    "Al Ain",
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Ajman",
    "Ras Al Khaimah",
    "Umm Al Quwain",
    "Fujairah",
  ];
  return (
    <section id="areas" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2 className="text-3xl md:text-4xl font-bold" {...fadeUp}>Service Areas</motion.h2>
        <motion.p className="mt-2 text-gray-700" {...fadeUp}>We operate across the United Arab Emirates.</motion.p>
        <div className="mt-6 flex flex-wrap gap-2">
          {areas.map((c, idx) => (
            <motion.span
              key={c}
              className="px-3 py-1 rounded-full bg-red-50 text-red-900 border border-red-100 text-sm"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <motion.section id="contact" className="bg-neutral-50" {...fadeUp}>
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
            <p className="mt-2 text-gray-700">Speak directly with a technician for quick help or a same-day quote.</p>
            <div className="mt-6 space-y-4">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 p-4 rounded-xl bg-white border hover:shadow">
                <Phone className="w-5 h-5 text-red-800" />
                <div>
                  <div className="font-medium">Call</div>
                  <div className="text-sm text-gray-700">{COMPANY.phone}</div>
                </div>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 p-4 rounded-xl bg-white border hover:shadow">
                <Mail className="w-5 h-5 text-red-800" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-gray-700">{COMPANY.email}</div>
                </div>
              </a>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border">
                <MapPin className="w-5 h-5 text-red-800" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-gray-700">{COMPANY.city} · {COMPANY.region}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border">
                <ShieldCheck className="w-5 h-5 text-red-800" />
                <div>
                  <div className="font-medium">Years in Business</div>
                  <div className="text-sm text-gray-700"><Counter target={COMPANY.years} /> years (since {COMPANY.since})</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border">
                <Facebook className="w-5 h-5 text-red-800" />
                <a className="text-sm font-medium hover:underline" href={COMPANY.facebook} target="_blank" rel="noreferrer">Facebook</a>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border">
                <Instagram className="w-5 h-5 text-red-800" />
                <a className="text-sm font-medium hover:underline" href={COMPANY.instagram} target="_blank" rel="noreferrer">Instagram</a>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="rounded-3xl bg-white border p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Request a Quote</h3>
              <p className="mt-1 text-sm text-gray-600">Send us your details—expect a response within an hour.</p>
              <form
                className="mt-4 grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const name = (form.querySelector("#name") as HTMLInputElement).value;
                  const phone = (form.querySelector("#phone") as HTMLInputElement).value;
                  const service = (form.querySelector("#service") as HTMLInputElement).value;
                  const msg = `Hello Al Maghseel, I need help with ${service}. My name is ${name}. Phone: ${phone}.`;
                  if (typeof window !== "undefined") {
                    window.open(`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(msg)}`, "_blank");
                  }
                }}
              >
                <input id="name" className="w-full rounded-xl border px-4 py-3" placeholder="Your name" required />
                <input id="phone" className="w-full rounded-xl border px-4 py-3" placeholder="Phone number" required />
                <input id="service" className="w-full rounded-xl border px-4 py-3" placeholder="Service (e.g., Installation, Repair)" required />
                <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-red-800 text-white px-5 py-3 hover:shadow active:scale-[0.99]" type="submit">
                  <MessageCircle className="w-4 h-4" /> Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="bg-red-900 text-red-50">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-2 gap-8">
        <div>
          <div className="font-semibold">{COMPANY.name}</div>
          <div className="text-sm opacity-90">{COMPANY.tagline}</div>
          <div className="mt-3 text-sm opacity-90">© {new Date().getFullYear()} · All Rights Reserved</div>
        </div>
        <div className="text-sm md:text-right space-y-2">
          <div><a className="hover:underline" href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a></div>
          <div><a className="hover:underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
          <div className="opacity-90">Based in {COMPANY.city} · Serving {COMPANY.region}</div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsappDigits}?text=Hi%2C%20I%20need%20A%2FC%20service.`}
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 text-white p-4 shadow-lg hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

/** Mobile Call/WhatsApp sticky bar */
function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t md:hidden z-40">
      <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-3">
        <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-800 text-white py-3 shadow active:scale-[0.99]">
          <Phone className="w-4 h-4" /> Call
        </a>
        <a href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent("Hello Al Maghseel!")}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-800 text-red-800 py-3 active:scale-[0.99]">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}

function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: COMPANY.name,
    areaServed: "United Arab Emirates",
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.city,
      addressRegion: "Abu Dhabi",
      addressCountry: "AE",
    },
    url: "https://example.com/", // update on deploy
    telephone: COMPANY.phone,
    email: COMPANY.email,
    sameAs: [COMPANY.facebook, COMPANY.instagram],
    slogan: COMPANY.tagline,
    foundingDate: `${COMPANY.since}-01-01`,
    makesOffer: SERVICES.map((s) => ({
      "@type": "Offer",
      name: s.name,
      description: s.short,
    })),
  } as const;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/** Console-only smoke tests */
function SmokeTests() {
  useEffect(() => {
    const results: [string, boolean, string][] = [];

    const hasName = document.body.textContent?.includes(COMPANY.name) ?? false;
    results.push(["renders company name", hasName, COMPANY.name]);

    const cards = document.querySelectorAll('[data-testid="service-card"]').length;
    results.push(["renders all service cards", cards === SERVICES.length, `${cards}/${SERVICES.length}`]);

    const tel = document.querySelector(`a[href="tel:${COMPANY.phone}"]`);
    results.push(["has tel: link", !!tel, `tel:${COMPANY.phone}`]);

    const whats = document.querySelector(`a[href^="https://wa.me/${COMPANY.whatsappDigits}"]`);
    results.push(["has WhatsApp link", !!whats, COMPANY.whatsappDigits]);

    const allPass = results.every(([, ok]) => ok);
    console.groupCollapsed(allPass ? "✅ Smoke tests passed" : "❌ Smoke tests had failures");
    results.forEach(([name, ok, extra]) => console.log(ok ? "✅" : "❌", name, "-", extra));
    console.groupEnd();
  }, []);
  return null;
}

export default function AlMaghseelSite() {
  return (
    <main className="font-sans text-gray-900">
      <SEO />
      <Header />
      <Hero />
      <Services />
      <About />
      <ServiceAreas />
      <Contact />
      <Footer />
      <WhatsAppFAB />
      <MobileCallBar />
      <SmokeTests />
    </main>
  );
}