import React from "react";
import { ArrowLeft, ArrowRight, CalendarCheck, Droplets, Fan, MessageCircle, Snowflake, Wrench } from "lucide-react";
import { COMPANY } from "../layout/Header";
import { getCopy, Locale } from "../../lib/i18n";

const pathIcons = [Snowflake, Droplets, Fan, CalendarCheck];

export default function Services({ locale }: { locale: Locale }) {
  const t = getCopy(locale).services;
  const DirectionArrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="border-t border-brand-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <h2 className="max-w-md font-heading text-3xl font-black leading-tight text-gray-950 md:text-5xl">{t.title}</h2>
            <p className="mt-5 max-w-md text-base font-medium leading-7 text-gray-700">{t.intro}</p>
            <a href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(t.askMessage)}`} className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded bg-emerald-700 px-6 py-3 text-xs font-extrabold text-white transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"><MessageCircle className="h-4 w-4" /> {t.ask}</a>
          </div>
          <div className="border-y border-brand-100">
            {t.paths.map(({ cue, scope }, index) => {
              const Icon = pathIcons[index];
              return (
                <a key={cue} href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(t.pathMessage(cue))}`} className="group grid min-h-28 grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-brand-100 px-1 py-5 last:border-b-0 sm:gap-6 sm:px-4">
                  <span className="grid h-11 w-11 place-items-center rounded bg-brand-900 text-white"><Icon className="h-5 w-5" /></span>
                  <span><span className="block text-lg font-black text-gray-950">{cue}</span><span className="mt-1 block max-w-2xl text-sm font-medium leading-6 text-gray-700">{scope}</span></span>
                  <DirectionArrow className="h-5 w-5 text-brand-700 transition-transform group-hover:scale-110" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-12 grid gap-8 border-y border-brand-100 py-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div><h3 className="text-2xl font-black leading-tight text-gray-950">{t.visitTitle}</h3><p className="mt-3 max-w-md text-sm font-medium leading-6 text-gray-700">{t.visitIntro}</p></div>
          <ol className="grid gap-6 sm:grid-cols-3">
            {t.steps.map((step, index) => <li key={step.title}><div className="text-sm font-black text-brand-800"><bdi>0{index + 1}</bdi></div><div className="mt-2 text-sm font-black text-gray-950">{step.title}</div><p className="mt-2 text-sm font-medium leading-6 text-gray-700">{step.text}</p></li>)}
          </ol>
        </div>
        <details className="mt-8 rounded-md bg-brand-50 px-5 py-4 text-gray-950">
          <summary className="cursor-pointer text-sm font-black focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2">{t.technicalSummary}</summary>
          <ul className="mt-5 grid gap-x-8 gap-y-3 border-t border-brand-100 pt-5 text-sm font-semibold leading-6 text-gray-700 sm:grid-cols-2">
            {t.technical.map((service) => <li key={service} className="flex items-start gap-3"><Wrench className="mt-1 h-4 w-4 shrink-0 text-brand-800" /><span>{service}</span></li>)}
          </ul>
        </details>
      </div>
    </section>
  );
}
