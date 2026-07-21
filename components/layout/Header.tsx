import Image from "next/image";
import React, { useState } from "react";
import { Languages, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { getCopy, Locale } from "../../lib/i18n";

export const COMPANY = {
  name: "Al Maghseel Central Air Conditioner Est.",
  tagline: "Supply & Installation · A/C Service",
  city: "Al Ain, Abu Dhabi",
  region: "UAE coverage by confirmation",
  years: 19,
  since: 2006,
  phone: "+971506734821",
  displayPhone: "050 673 4821",
  whatsappDigits: "00971506734821",
  email: "service@almaghseel.com",
  facebook: "https://www.facebook.com/p/Al-Maghseel-Central-Air-Conditioner-Est-100076006452976/",
  instagram: "https://www.instagram.com/maghseel/?hl=am-et",
};

export default function Header({ locale }: { locale: Locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = getCopy(locale);
  const whatsappHref = `https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(t.header.whatsappMessage)}`;

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-[0_8px_30px_rgba(64,16,16,0.08)]">
      <div className="hidden bg-brand-900 text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs font-semibold">
          <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" /> {t.header.urgent} · <bdi>{COMPANY.displayPhone}</bdi>
          </a>
          <div className="flex items-center gap-7">
            <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" /> <bdi>{COMPANY.email}</bdi>
            </a>
            <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> {t.brand.location}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <a href={locale === "ar" ? "/ar/" : "/"} className="flex items-center gap-3">
          <Image src="/logo-al-maghseel.png" alt={t.header.logoAlt} width={64} height={64} className="object-contain" priority />
          <div className="leading-tight">
            <div className="max-w-[220px] text-sm font-extrabold text-brand-950 md:text-base">{t.brand.shortName}</div>
            <div className="text-[11px] font-semibold text-gray-600 md:text-xs">{t.brand.tagline}</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-[13px] font-bold text-gray-900 lg:flex" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}>
          {t.header.nav.map(([label, href]) => (
            <a key={label} href={href} className="rounded-sm transition hover:text-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2">{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <a href={t.language.href} hrefLang={locale === "ar" ? "en-AE" : "ar-AE"} lang={locale === "ar" ? "en" : "ar"} aria-label={t.language.aria} className="inline-flex min-h-11 items-center gap-2 rounded border border-brand-100 px-3 text-xs font-extrabold text-brand-950 transition hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2">
            <Languages className="h-4 w-4" /> <span>{t.language.label}</span>
          </a>
          <a href={whatsappHref} className="hidden items-center gap-2 rounded bg-emerald-700 px-5 py-3 text-xs font-extrabold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 md:inline-flex">
            <MessageCircle className="h-4 w-4" /> {t.header.quote}
          </a>
          <button type="button" aria-label={isMenuOpen ? t.header.closeMenu : t.header.openMenu} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center rounded border border-brand-100 text-brand-900 transition hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 lg:hidden">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-brand-100 bg-white lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3 text-sm font-extrabold text-gray-950">
            {t.header.nav.map(([label, href]) => <a key={label} href={href} onClick={() => setIsMenuOpen(false)} className="rounded px-3 py-3 transition hover:bg-brand-50 hover:text-brand-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700">{label}</a>)}
          </nav>
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 pb-4">
            <a href={`tel:${COMPANY.phone}`} onClick={() => setIsMenuOpen(false)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-brand-900 px-4 py-3 text-xs font-extrabold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"><Phone className="h-4 w-4" /> {t.header.call}</a>
            <a href={whatsappHref} onClick={() => setIsMenuOpen(false)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-emerald-700 px-4 py-3 text-xs font-extrabold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"><MessageCircle className="h-4 w-4" /> {t.header.whatsapp}</a>
          </div>
        </div>
      )}
    </header>
  );
}
