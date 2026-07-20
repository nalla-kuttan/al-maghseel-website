import React from "react";
import { motion } from "framer-motion";
import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "../layout/Header";
import { getCopy, Locale } from "../../lib/i18n";

const fadeUp = { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.6 } };

export default function ServiceAreas({ locale }: { locale: Locale }) {
  const t = getCopy(locale).areas;
  return (
    <section id="areas" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-20">
        <motion.div {...fadeUp}>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-extrabold text-brand-900 ring-1 ring-brand-100"><MapPin className="h-3.5 w-3.5" />{t.label}</div>
          <h2 className="mt-5 max-w-xl text-3xl font-black leading-tight text-gray-950 md:text-5xl">{t.title}</h2>
          <p className="mt-4 max-w-xl text-base font-medium leading-7 text-gray-700">{t.text}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${COMPANY.phone}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-brand-900 px-5 py-3 text-xs font-extrabold text-white transition hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"><Phone className="h-4 w-4" />{t.call} <bdi>{COMPANY.displayPhone}</bdi></a>
            <a href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(t.message)}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-emerald-700 px-5 py-3 text-xs font-extrabold text-emerald-800 transition hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"><MessageCircle className="h-4 w-4" />{t.whatsapp}</a>
          </div>
        </motion.div>
        <motion.div className="border-y border-brand-100 py-3" {...fadeUp}>
          <ul className="grid divide-y divide-brand-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {t.names.map((name, idx) => <motion.li key={name} className="flex min-h-12 items-center justify-between px-1 py-3 text-sm font-extrabold text-gray-950 sm:px-5" initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.03 }}><span>{name}</span><MapPin className="h-4 w-4 text-brand-700" aria-hidden="true" /></motion.li>)}
          </ul>
          <div className="mt-6 grid gap-3 bg-brand-50 px-4 py-4">{t.highlights.map((item) => <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-gray-800"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-800" /><span>{item}</span></div>)}</div>
        </motion.div>
      </div>
    </section>
  );
}
