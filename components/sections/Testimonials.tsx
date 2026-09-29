import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { COMPANY } from "../layout/Header";
import { getCopy, Locale } from "../../lib/i18n";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export default function Testimonials({ locale }: { locale: Locale }) {
  const t = getCopy(locale).testimonials;
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = {
    initial: { opacity: 1, y: prefersReducedMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: prefersReducedMotion ? 0 : 0.7, ease: EASE_OUT_EXPO },
  };
  return (
    <section id="testimonials" className="border-t border-brand-100 bg-white">
      <motion.div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-16 md:py-20" {...fadeUp}>
        <div>
          <h2 className="max-w-md font-heading text-3xl font-black leading-tight text-gray-950 md:text-5xl">{t.title}</h2>
          <p className="mt-4 max-w-md text-base font-medium leading-7 text-gray-700">{t.intro}</p>
          <div className="mt-7 flex items-center gap-1 text-brand-800" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-black text-gray-950">{t.rating}</span>
            <span className="text-sm font-semibold text-gray-700">{t.ratingText}</span>
          </div>
          <a href={COMPANY.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-sm text-sm font-extrabold text-brand-800 underline decoration-brand-200 underline-offset-4 transition hover:text-brand-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2">
            {t.linkLabel} <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <ul className="divide-y divide-brand-100 border-y border-brand-100">
          {t.quotes.map((quote) => (
            <li key={quote.name} className="py-6">
              <p className="max-w-2xl text-base font-medium leading-7 text-gray-800"><q>{quote.text}</q></p>
              <div className="mt-3 text-sm font-black text-gray-950">{quote.name}</div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
