import React, { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { COMPANY } from "../layout/Header";
import BookingModal from "../ui/BookingModal";
import { getCopy, Locale } from "../../lib/i18n";

export default function Contact({ locale }: { locale: Locale }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = getCopy(locale).contact;
  return (
    <section id="contact" className="border-t border-brand-100 bg-brand-50">
      <BookingModal locale={locale} isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 md:py-20">
        <div>
          <h2 className="max-w-2xl font-heading text-3xl font-black leading-tight text-gray-950 md:text-5xl">{t.title}</h2>
          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-gray-700">{t.text}</p>
          <div className="mt-8 border-y border-brand-200 py-5"><div className="text-sm font-black text-brand-950">{t.include}</div><ul className="mt-4 grid gap-3 text-sm font-semibold text-gray-800 sm:grid-cols-3">{t.details.map((detail) => <li key={detail} className="flex items-start gap-2"><Send className="mt-1 h-4 w-4 shrink-0 text-brand-800" aria-hidden="true" /><span>{detail}</span></li>)}</ul></div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => setIsModalOpen(true)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-emerald-700 px-6 py-3 text-xs font-extrabold text-white transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 active:scale-[0.99]"><MessageCircle className="h-4 w-4" />{t.prepare}</button>
            <a href={`tel:${COMPANY.phone}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-brand-700 bg-white px-6 py-3 text-xs font-extrabold text-brand-950 transition hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 active:scale-[0.99]"><Phone className="h-4 w-4" />{t.call} <bdi>{COMPANY.displayPhone}</bdi></a>
          </div>
        </div>
        <aside className="rounded-md bg-white p-6 shadow-[0_8px_16px_rgba(59,12,10,0.1)] sm:p-8" aria-label={t.asideLabel}>
          <h3 className="text-2xl font-black text-gray-950">{t.direct}</h3><p className="mt-2 text-sm font-medium leading-6 text-gray-700">{t.directText}</p>
          <div className="mt-6 divide-y divide-brand-100 border-y border-brand-100">
            <a href={`tel:${COMPANY.phone}`} className="flex min-h-20 items-center gap-4 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"><span className="grid h-11 w-11 place-items-center rounded bg-brand-900 text-white"><Phone className="h-5 w-5" /></span><span><span className="block text-sm font-black text-gray-950">{t.call}</span><bdi className="text-sm font-medium text-gray-700">{COMPANY.displayPhone}</bdi></span></a>
            <a href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(t.message)}`} className="flex min-h-20 items-center gap-4 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"><span className="grid h-11 w-11 place-items-center rounded bg-emerald-700 text-white"><MessageCircle className="h-5 w-5" /></span><span><span className="block text-sm font-black text-gray-950">{t.whatsapp}</span><bdi className="text-sm font-medium text-gray-700">{COMPANY.displayPhone}</bdi></span></a>
            <a href={`mailto:${COMPANY.email}`} className="flex min-h-20 items-center gap-4 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"><span className="grid h-11 w-11 place-items-center rounded bg-brand-50 text-brand-900"><Mail className="h-5 w-5" /></span><span className="min-w-0"><span className="block text-sm font-black text-gray-950">{t.email}</span><bdi className="break-all text-sm font-medium text-gray-700">{COMPANY.email}</bdi></span></a>
            <div className="flex min-h-20 items-center gap-4 py-4"><span className="grid h-11 w-11 place-items-center rounded bg-brand-50 text-brand-900"><MapPin className="h-5 w-5" /></span><span><span className="block text-sm font-black text-gray-950">{t.office}</span><span className="text-sm font-medium text-gray-700">{getCopy(locale).brand.city}</span></span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}
