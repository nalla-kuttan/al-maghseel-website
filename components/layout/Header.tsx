import Image from "next/image";
import React, { useState } from "react";
import { Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";

export const COMPANY = {
  name: "Al Maghseel Central Air Conditioner Est.",
  tagline: "Installation · Repair · Maintenance",
  city: "Al Ain, Abu Dhabi",
  region: "All over UAE",
  years: 19,
  since: 2006,
  phone: "+971506734821",
  displayPhone: "050 673 4821",
  whatsappDigits: "00971506734821",
  email: "service@almaghseel.com",
  facebook:
    "https://www.facebook.com/p/Al-Maghseel-Central-Air-Conditioner-Est-100076006452976/",
  instagram: "https://www.instagram.com/maghseel/?hl=am-et",
  cta: "I need an A/C service quote.",
};

const navItems = [
  ["Home", "#"],
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Service Areas", "#areas"],
  ["Contact Us", "#contact"],
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-[0_8px_30px_rgba(64,16,16,0.08)]">
      <div className="hidden bg-brand-900 text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs font-semibold">
          <div className="flex items-center gap-7">
            <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" /> 24/7 Call Support
            </a>
            <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" /> {COMPANY.displayPhone}
            </a>
          </div>
          <div className="flex items-center gap-7">
            <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" /> {COMPANY.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> Al Ain, UAE
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo-al-maghseel.png"
            alt="Al Maghseel Logo"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
          <div className="leading-tight">
            <div className="max-w-[220px] text-sm font-extrabold uppercase tracking-wide text-brand-950 md:text-base">
              Al Maghseel
            </div>
            <div className="text-[11px] font-semibold text-gray-600 md:text-xs">{COMPANY.tagline}</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-[13px] font-bold text-gray-900 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="rounded-sm transition hover:text-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${COMPANY.whatsappDigits}?text=Hello%20Al%20Maghseel,%20I%27d%20like%20a%20quote.`}
            className="hidden items-center gap-2 rounded bg-brand-900 px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-white shadow-sm transition hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> Get Quote
          </a>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-brand-100 text-brand-900 transition hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-brand-100 bg-white lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3 text-sm font-extrabold text-gray-950">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded px-3 py-3 transition hover:bg-brand-50 hover:text-brand-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 pb-4">
            <a
              href={`tel:${COMPANY.phone}`}
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-brand-900 px-4 py-3 text-xs font-extrabold uppercase tracking-wide text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsappDigits}?text=Hello%20Al%20Maghseel,%20I%27d%20like%20a%20quote.`}
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-emerald-700 px-4 py-3 text-xs font-extrabold uppercase tracking-wide text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
