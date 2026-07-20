import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building2, CalendarCheck, Home, MapPin } from "lucide-react";
import { COMPANY } from "../layout/Header";
import { getCopy, Locale } from "../../lib/i18n";

const fadeUp = { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.6 } };
const reasonIcons = [CalendarCheck, MapPin, Home, Building2];

export default function About({ locale }: { locale: Locale }) {
  const t = getCopy(locale).about;
  const DirectionArrow = locale === "ar" ? ArrowLeft : ArrowRight;
  return (
    <section id="about" className="bg-white">
      <div className="border-y border-brand-100 bg-brand-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-brand-200 px-4 py-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {t.reasons.map(({ title, text }, index) => { const Icon = reasonIcons[index]; return <div key={title} className="flex items-center justify-center gap-3 px-4 py-4"><Icon className="h-8 w-8 shrink-0 text-brand-800" /><div className="text-sm leading-tight"><div className="font-black text-brand-900">{title}</div><div className="font-semibold text-gray-700">{text}</div></div></div>; })}
        </div>
      </div>
      <motion.div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-[1.08fr_0.92fr]" {...fadeUp}>
        <div className="relative overflow-hidden rounded-md">
          <Image src="/hvac-commercial-units.jpg" alt={t.imageAlt} width={900} height={620} className="aspect-[1.55/1] w-full object-cover" />
          <div className="absolute bottom-8 start-8 grid h-28 w-28 place-items-center rounded-full bg-brand-900 text-center text-white shadow-xl ring-4 ring-white">
            <div><div className="text-[10px] font-bold">{t.since}</div><div className="text-3xl font-black"><bdi>{COMPANY.since}</bdi></div><div className="text-[9px] font-semibold">{t.established}</div></div>
          </div>
        </div>
        <div>
          <h2 className="max-w-lg font-heading text-4xl font-black leading-tight tracking-normal text-gray-950">{t.title}</h2>
          <div className="mt-4 flex max-w-xl flex-wrap gap-2 text-sm font-extrabold text-brand-900">{t.chips.map((chip) => <span key={chip} className="rounded bg-brand-50 px-3 py-2">{chip}</span>)}</div>
          <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-gray-700">{t.text}</p>
          <div className="mt-6 max-w-xl border-y border-brand-100 py-5 text-sm font-semibold leading-7 text-gray-800">{t.tip}</div>
          <a href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(t.message)}`} className="mt-8 inline-flex items-center gap-3 rounded bg-brand-900 px-6 py-4 text-xs font-extrabold text-white transition hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2">{t.cta} <DirectionArrow className="h-4 w-4" /></a>
        </div>
      </motion.div>
    </section>
  );
}
