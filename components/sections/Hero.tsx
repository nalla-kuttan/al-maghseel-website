import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock3, Phone, MapPin, Building2, CalendarCheck } from "lucide-react";
import { COMPANY } from "../layout/Header";
import { getCopy, Locale } from "../../lib/i18n";

const trustIcons = [Clock3, MapPin, Building2, CalendarCheck];

export default function Hero({ locale }: { locale: Locale }) {
  const t = getCopy(locale).hero;
  const isAr = locale === "ar";
  const DirectionArrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className={`absolute inset-y-0 hidden w-[53%] md:block ${isAr ? "left-0" : "right-0"}`}>
        <Image src="/hvac-hero-rooftop-service.jpg" alt={t.imageAlt} fill className="object-cover" priority />
        <div className={`absolute inset-0 ${isAr ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-white via-white/35 to-transparent`} />
        <div className={`absolute inset-y-0 w-28 ${isAr ? "right-0 bg-gradient-to-l" : "left-0 bg-gradient-to-r"} from-white to-transparent`} />
      </div>
      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center px-4 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-heading text-[42px] font-black leading-[1.08] tracking-normal text-gray-950 sm:text-6xl lg:text-7xl">{t.title}</h1>
          <p className="mt-6 max-w-xl text-base font-medium leading-7 text-gray-700 md:text-lg">{t.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(t.whatsappMessage)}`} className="inline-flex items-center justify-center gap-3 rounded bg-emerald-700 px-7 py-4 text-xs font-extrabold text-white shadow-[0_8px_16px_rgba(4,120,87,0.2)] transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
              {t.whatsapp} <DirectionArrow className="h-4 w-4" />
            </a>
            <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center justify-center gap-3 rounded border border-brand-700 px-7 py-4 text-xs font-extrabold text-brand-900 transition hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2">
              {t.call} <Phone className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-9 grid max-w-3xl grid-cols-2 gap-2 rounded-md bg-white p-3 shadow-[0_14px_40px_rgba(36,6,6,0.12)] ring-1 ring-black/5 sm:grid-cols-4">
            {t.trust.map((label, index) => {
              const Icon = trustIcons[index];
              return <div key={label} className="flex items-center gap-2 border-brand-100 px-2 py-2 text-[11px] font-extrabold text-gray-800 sm:border-e last:border-e-0"><Icon className="h-5 w-5 shrink-0 text-brand-800" /><span>{label}</span></div>;
            })}
          </div>
        </div>
        <div className="relative mt-10 md:mt-0">
          <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded md:hidden"><Image src="/hvac-hero-rooftop-service.jpg" alt={t.imageAlt} fill className="object-cover" priority /></div>
          <div className={`absolute bottom-6 hidden w-60 rounded-md bg-white p-6 shadow-[0_18px_45px_rgba(36,6,6,0.18)] md:block ${isAr ? "left-5" : "right-5"}`}>
            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-900 text-white"><Phone className="h-6 w-6" /></div>
              <div><div className="text-xl font-black text-brand-900">{t.urgentTitle}</div><div className="text-sm font-extrabold text-gray-950">{t.urgentAction}</div><p className="mt-2 text-xs font-medium leading-5 text-gray-600">{t.urgentText}</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
