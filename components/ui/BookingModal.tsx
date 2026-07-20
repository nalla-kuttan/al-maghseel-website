import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, MessageCircle } from "lucide-react";
import { COMPANY } from "../layout/Header";
import { getCopy, Locale } from "../../lib/i18n";

type BookingModalProps = { isOpen: boolean; closeModal: () => void; initialService?: string; locale: Locale };

export default function BookingModal({ isOpen, closeModal, initialService, locale }: BookingModalProps) {
  const [formData, setFormData] = useState({ name: "", location: "", service: initialService || "", issue: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [handoffError, setHandoffError] = useState(false);
  const t = getCopy(locale).modal;

  const updateField = (field: keyof typeof formData, value: string) => { setFormData((current) => ({ ...current, [field]: value })); setErrors((current) => { const next = { ...current }; delete next[field]; return next; }); setHandoffError(false); };
  const validate = () => { const nextErrors: Record<string, string> = {}; if (!formData.service.trim()) nextErrors.service = t.errors.service; if (!formData.name.trim()) nextErrors.name = t.errors.name; if (!formData.location.trim()) nextErrors.location = t.errors.location; setErrors(nextErrors); return Object.keys(nextErrors).length === 0; };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (!validate()) return; const msg = encodeURIComponent(t.message(formData.name, formData.location, formData.service, formData.issue || t.notSpecified)); const handoff = window.open(`https://wa.me/${COMPANY.whatsappDigits}?text=${msg}`, "_blank", "noopener,noreferrer"); if (handoff) { closeModal(); return; } setHandoffError(true); };
  const inputClass = "mt-1 block w-full rounded-lg border-slate-300 bg-slate-50 px-3 py-2.5 text-sm focus:border-brand-700 focus:ring-brand-700";
  const errorClass = "mt-1 text-xs font-semibold text-red-700";
  const helpText = t.help.replace("{phone}", COMPANY.displayPhone).replace("{email}", COMPANY.email);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 font-sans" onClose={closeModal} dir={locale === "ar" ? "rtl" : "ltr"}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"><div className="fixed inset-0 bg-black/25 backdrop-blur-sm" /></Transition.Child>
        <div className="fixed inset-0 overflow-y-auto"><div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-5 text-start align-middle shadow-xl transition-all sm:p-6">
              <div className="mb-4 flex items-center justify-between"><Dialog.Title as="h3" className="font-heading text-lg font-medium leading-6 text-navy-900">{t.title}</Dialog.Title><button type="button" aria-label={t.close} onClick={closeModal} className="grid h-11 w-11 place-items-center rounded text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"><X className="h-5 w-5" /></button></div>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div><label htmlFor="booking-service" className="block text-sm font-medium text-slate-700">{t.serviceLabel} <span className="text-red-700">*</span></label><select id="booking-service" aria-invalid={Boolean(errors.service)} aria-required="true" aria-describedby={errors.service ? "booking-service-error" : undefined} className={inputClass} value={formData.service} onChange={(e) => updateField("service", e.target.value)}><option value="">{t.select}</option>{t.services.map((service) => <option key={service} value={service}>{service}</option>)}</select>{errors.service && <p id="booking-service-error" className={errorClass}>{errors.service}</p>}</div>
                <div><label htmlFor="booking-issue" className="block text-sm font-medium text-slate-700">{t.issueLabel}</label><textarea id="booking-issue" className={inputClass} rows={2} placeholder={t.issuePlaceholder} value={formData.issue} onChange={(e) => updateField("issue", e.target.value)} /><p className="mt-1 text-xs text-slate-600">{t.issueHelp}</p></div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div><label htmlFor="booking-name" className="block text-sm font-medium text-slate-700">{t.nameLabel} <span className="text-red-700">*</span></label><input id="booking-name" type="text" autoComplete="name" className={inputClass} placeholder={t.namePlaceholder} value={formData.name} onChange={(e) => updateField("name", e.target.value)} aria-invalid={Boolean(errors.name)} aria-required="true" aria-describedby={errors.name ? "booking-name-error" : undefined} />{errors.name && <p id="booking-name-error" className={errorClass}>{errors.name}</p>}</div>
                  <div><label htmlFor="booking-location" className="block text-sm font-medium text-slate-700">{t.locationLabel} <span className="text-red-700">*</span></label><input id="booking-location" type="text" autoComplete="address-level2" className={inputClass} placeholder={t.locationPlaceholder} value={formData.location} onChange={(e) => updateField("location", e.target.value)} aria-invalid={Boolean(errors.location)} aria-required="true" aria-describedby={errors.location ? "booking-location-error" : undefined} />{errors.location && <p id="booking-location-error" className={errorClass}>{errors.location}</p>}</div>
                </div>
                <div className="mt-6">
                  {handoffError && <div className="mb-3 rounded-md bg-red-50 p-3 text-sm font-semibold leading-6 text-red-900 ring-1 ring-red-100">{t.openError} <a className="underline" href={`tel:${COMPANY.phone}`}><bdi>{COMPANY.displayPhone}</bdi></a> {t.orEmail} <a className="underline" href={`mailto:${COMPANY.email}`}><bdi>{COMPANY.email}</bdi></a>.</div>}
                  <button type="submit" className="inline-flex w-full justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"><MessageCircle className="h-5 w-5" />{t.submit}</button>
                  <p className="mt-2 text-center text-xs leading-5 text-slate-600">{helpText}</p>
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div></div>
      </Dialog>
    </Transition>
  );
}
