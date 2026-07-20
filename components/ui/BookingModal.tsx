import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, MessageCircle } from "lucide-react";
import { COMPANY } from "../layout/Header";

type BookingModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    initialService?: string;
};

export default function BookingModal({ isOpen, closeModal, initialService }: BookingModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        service: initialService || "",
        issue: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [handoffError, setHandoffError] = useState(false);

    const updateField = (field: keyof typeof formData, value: string) => {
        setFormData((current) => ({ ...current, [field]: value }));
        setErrors((current) => {
            const next = { ...current };
            delete next[field];
            return next;
        });
        setHandoffError(false);
    };

    const validate = () => {
        const nextErrors: Record<string, string> = {};

        if (!formData.service.trim()) {
            nextErrors.service = "Choose the service you need.";
        }
        if (!formData.name.trim()) {
            nextErrors.name = "Add the name we should ask for.";
        }
        if (!formData.location.trim()) {
            nextErrors.location = "Add your emirate or building area.";
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }

        const msg = encodeURIComponent(
            `Hello *Al Maghseel*,\n\nI would like to book a service.\n\nName: ${formData.name}\nLocation: ${formData.location}\nService: ${formData.service}\nIssue: ${formData.issue || "Not specified"}`
        );
        const handoff = window.open(`https://wa.me/${COMPANY.whatsappDigits}?text=${msg}`, "_blank", "noopener,noreferrer");

        if (handoff) {
            closeModal();
            return;
        }

        setHandoffError(true);
    };

    const inputClass =
        "mt-1 block w-full rounded-lg border-slate-300 bg-slate-50 px-3 py-2.5 text-sm focus:border-brand-700 focus:ring-brand-700";
    const errorClass = "mt-1 text-xs font-semibold text-red-700";

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50 font-sans" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all sm:p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-heading font-medium leading-6 text-navy-900"
                                    >
                                        Book a Service
                                    </Dialog.Title>
                                    <button
                                        type="button"
                                        aria-label="Close booking form"
                                        onClick={closeModal}
                                        className="grid h-11 w-11 place-items-center rounded text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                    <div>
                                        <label htmlFor="booking-service" className="block text-sm font-medium text-slate-700">
                                            What service do you need? <span className="text-red-700">*</span>
                                        </label>
                                        <select
                                            id="booking-service"
                                            aria-invalid={Boolean(errors.service)}
                                            aria-required="true"
                                            aria-describedby={errors.service ? "booking-service-error" : undefined}
                                            className={inputClass}
                                            value={formData.service}
                                            onChange={(e) => updateField("service", e.target.value)}
                                        >
                                            <option value="">Select a service...</option>
                                            <option value="AC Installation">AC Installation</option>
                                            <option value="Repair & Maintenance">Repair & Maintenance</option>
                                            <option value="Gas Leak/Refill">Gas Leak/Refill</option>
                                            <option value="Water Leakage">Water Leakage</option>
                                            <option value="Compressor/Parts">Compressor/Parts Replacement</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.service && (
                                            <p id="booking-service-error" className={errorClass}>
                                                {errors.service}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="booking-issue" className="block text-sm font-medium text-slate-700">Describe the issue (optional)</label>
                                        <textarea
                                            id="booking-issue"
                                            className={inputClass}
                                            rows={2}
                                            placeholder="e.g. AC is not cooling or water is leaking"
                                            value={formData.issue}
                                            onChange={(e) => updateField("issue", e.target.value)}
                                        />
                                        <p className="mt-1 text-xs text-slate-600">
                                            Add model, room count or urgency if you know it.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="booking-name" className="block text-sm font-medium text-slate-700">
                                                Your name <span className="text-red-700">*</span>
                                            </label>
                                            <input
                                                id="booking-name"
                                                type="text"
                                                autoComplete="name"
                                                className={inputClass}
                                                placeholder="Full name"
                                                value={formData.name}
                                                onChange={(e) => updateField("name", e.target.value)}
                                                aria-invalid={Boolean(errors.name)}
                                                aria-required="true"
                                                aria-describedby={errors.name ? "booking-name-error" : undefined}
                                            />
                                            {errors.name && (
                                                <p id="booking-name-error" className={errorClass}>
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="booking-location" className="block text-sm font-medium text-slate-700">
                                                Location <span className="text-red-700">*</span>
                                            </label>
                                            <input
                                                id="booking-location"
                                                type="text"
                                                autoComplete="address-level2"
                                                className={inputClass}
                                                placeholder="Al Ain, Dubai..."
                                                value={formData.location}
                                                onChange={(e) => updateField("location", e.target.value)}
                                                aria-invalid={Boolean(errors.location)}
                                                aria-required="true"
                                                aria-describedby={errors.location ? "booking-location-error" : undefined}
                                            />
                                            {errors.location && (
                                                <p id="booking-location-error" className={errorClass}>
                                                    {errors.location}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        {handoffError && (
                                            <div className="mb-3 rounded-md bg-red-50 p-3 text-sm font-semibold leading-6 text-red-900 ring-1 ring-red-100">
                                                WhatsApp did not open. Please call{" "}
                                                <a className="underline" href={`tel:${COMPANY.phone}`}>
                                                    {COMPANY.displayPhone}
                                                </a>{" "}
                                                or email{" "}
                                                <a className="underline" href={`mailto:${COMPANY.email}`}>
                                                    {COMPANY.email}
                                                </a>
                                                .
                                            </div>
                                        )}
                                        <button
                                            type="submit"
                                            className="inline-flex w-full justify-center rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
                                        >
                                            <MessageCircle className="mr-2 h-5 w-5" />
                                            Continue to WhatsApp
                                        </button>
                                        <p className="mt-2 text-center text-xs leading-5 text-slate-600">
                                            We will open WhatsApp with your details pre-filled. If it does
                                            not open, call {COMPANY.displayPhone} or email {COMPANY.email}.
                                        </p>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
