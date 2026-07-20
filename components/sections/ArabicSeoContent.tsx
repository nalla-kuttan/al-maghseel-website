import React from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { copy } from "../../lib/i18n";

export default function ArabicSeoContent() {
  const t = copy.ar.seoContent;

  return (
    <section className="border-t border-brand-100 bg-white" aria-labelledby="arabic-service-guide-title">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <h2 id="arabic-service-guide-title" className="max-w-lg font-heading text-3xl font-black leading-tight text-gray-950 md:text-5xl">
              {t.title}
            </h2>
            <p className="mt-5 max-w-xl text-base font-medium leading-8 text-gray-700">{t.intro}</p>
          </div>

          <div className="border-y border-brand-100">
            {t.services.map((service) => (
              <article key={service.title} className="grid gap-3 border-b border-brand-100 py-6 last:border-b-0 sm:grid-cols-[2.5rem_1fr]">
                <CheckCircle2 className="mt-1 h-6 w-6 text-brand-800" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-black text-gray-950">{service.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm font-medium leading-7 text-gray-700">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-brand-50 px-5 py-7 sm:px-8 sm:py-9">
          <h2 className="font-heading text-2xl font-black text-brand-950 md:text-3xl">{t.faqTitle}</h2>
          <div className="mt-5 divide-y divide-brand-200 border-y border-brand-200">
            {t.faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2">
                  <span>{faq.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-brand-800 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-3 max-w-4xl text-sm font-medium leading-7 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
