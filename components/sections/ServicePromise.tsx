import React from "react";
import { CheckCircle2, MapPin, MessageSquareText, Wrench } from "lucide-react";
import { getCopy, Locale } from "../../lib/i18n";

const icons = [MapPin, MessageSquareText, Wrench];

export default function ServicePromise({ locale }: { locale: Locale }) {
  const t = getCopy(locale).promise;
  return (
    <section className="bg-brand-950 text-white" aria-labelledby="service-promise-title">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div><CheckCircle2 className="h-8 w-8 text-brand-200" aria-hidden="true" /><h2 id="service-promise-title" className="mt-5 max-w-md font-heading text-3xl font-black leading-tight md:text-5xl">{t.title}</h2><p className="mt-5 max-w-md text-base font-medium leading-7 text-white/75">{t.intro}</p></div>
          <ol className="divide-y divide-white/15 border-y border-white/15">
            {t.items.map(({ title, text }, index) => { const Icon = icons[index]; return <li key={title} className="grid gap-4 py-6 sm:grid-cols-[3rem_1fr] sm:items-start"><span className="grid h-11 w-11 place-items-center rounded bg-white text-brand-950"><Icon className="h-5 w-5" aria-hidden="true" /></span><div><div className="text-sm font-black text-brand-200">{t.confirmation} <bdi>{index + 1}</bdi></div><h3 className="mt-1 text-xl font-black">{title}</h3><p className="mt-2 max-w-2xl text-sm font-medium leading-6 text-white/75">{text}</p></div></li>; })}
          </ol>
        </div>
      </div>
    </section>
  );
}
