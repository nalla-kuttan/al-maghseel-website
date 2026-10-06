import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "./Header";
import { getCopy, Locale } from "../../lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const all = getCopy(locale);
  const t = all.footer;
  return (
    <footer className="bg-[#1f1513] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.15fr_1fr_1fr] md:py-14">
        <div><div className="flex items-center gap-3"><Image src="/logo.webp" alt={all.header.logoAlt} width={64} height={64} className="object-contain" /><div><div className="text-lg font-black leading-tight">{all.brand.shortName}</div><div className="text-xs font-semibold text-brand-100">{all.brand.tagline}</div></div></div><p className="mt-5 max-w-sm text-sm font-medium leading-6 text-white/75">{t.text}</p><p className="mt-3 max-w-sm text-xs font-semibold leading-5 text-white/60">{t.availability}</p></div>
        <div className="grid grid-cols-2 gap-8">
          <div><h3 className="text-sm font-black">{t.explore}</h3><ul className="mt-4 space-y-3 text-sm text-white/75">{t.links.map(([label, href]) => <li key={label}><a href={href} className="rounded-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100">{label}</a></li>)}</ul></div>
          <div><h3 className="text-sm font-black">{t.common}</h3><ul className="mt-4 space-y-3 text-sm text-white/75">{t.needs.map((item) => <li key={item}><a href="#services" className="rounded-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100">{item}</a></li>)}</ul></div>
        </div>
        <div><h3 className="text-sm font-black">{t.contact}</h3><div className="mt-4 space-y-4 text-sm text-white/75">
          <a href={`tel:${COMPANY.phone}`} className="flex gap-3 rounded-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-100" aria-hidden="true" /><span><strong className="block text-white"><bdi>{COMPANY.displayPhone}</bdi></strong>{t.urgent}</span></a>
          <a href={COMPANY.whatsappUrl} className="flex gap-3 rounded-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100"><MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-100" aria-hidden="true" /><span><strong className="block text-white">{t.whatsapp}</strong><bdi>{COMPANY.displayPhone}</bdi></span></a>
          <a href={`mailto:${COMPANY.email}`} className="flex gap-3 rounded-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-100" aria-hidden="true" /><span className="min-w-0 break-all"><strong className="block text-white">{t.email}</strong><bdi>{COMPANY.email}</bdi></span></a>
          <div className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-100" aria-hidden="true" /><span><strong className="block text-white">{t.office}</strong><a href={COMPANY.mapsUrl} className="rounded-sm underline transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100"><bdi>{COMPANY.address}</bdi></a></span></div>
        </div></div>
      </div>
      <nav aria-label={locale === "ar" ? "روابط قانونية" : "Legal"} className="mx-auto flex max-w-7xl flex-wrap gap-6 px-4 pb-6 text-sm text-white/75"><Link href="/privacy/" className="rounded-sm underline transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100">{locale === "ar" ? "سياسة الخصوصية (بالإنجليزية)" : "Privacy policy"}</Link><Link href="/terms/" className="rounded-sm underline transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100">{locale === "ar" ? "الشروط والأحكام (بالإنجليزية)" : "Terms & conditions"}</Link></nav>
      <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl px-4 py-5 text-xs text-white/60"><div>© <bdi suppressHydrationWarning>{new Date().getFullYear()}</bdi> {all.brand.name}. {t.rights}</div></div></div>
    </footer>
  );
}
