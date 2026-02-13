import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, MessageCircle, CheckCircle, Calendar, Wrench } from "lucide-react";
import { COMPANY } from "../layout/Header";

type BookingModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    initialService?: string;
};

export default function BookingModal({ isOpen, closeModal, initialService }: BookingModalProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        service: initialService || "",
        issue: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `Hello *Al Maghseel*,%0A%0AI would like to book a service.%0A%0A👤 *Name:* ${formData.name}%0A📍 *Location:* ${formData.location}%0A🔧 *Service:* ${formData.service}%0A📝 *Issue:* ${formData.issue}`;
        window.open(`https://wa.me/${COMPANY.whatsappDigits}?text=${msg}`, "_blank");
        closeModal();
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className="flex justify-between items-center mb-4">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-heading font-medium leading-6 text-navy-900"
                                    >
                                        Book a Service
                                    </Dialog.Title>
                                    <button onClick={closeModal} className="text-slate-400 hover:text-slate-600">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700">What service do you need?</label>
                                        <select
                                            className="mt-1 block w-full rounded-lg border-slate-300 bg-slate-50 py-2.5 px-3 text-sm focus:border-red-500 focus:ring-red-500"
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            required
                                        >
                                            <option value="">Select a service...</option>
                                            <option value="AC Installation">AC Installation</option>
                                            <option value="Repair & Maintenance">Repair & Maintenance</option>
                                            <option value="Gas Leak/Refill">Gas Leak/Refill</option>
                                            <option value="Water Leakage">Water Leakage</option>
                                            <option value="Compressor/Parts">Compressor/Parts Replacement</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700">Describe the issue (optional)</label>
                                        <textarea
                                            className="mt-1 block w-full rounded-lg border-slate-300 bg-slate-50 py-2.5 px-3 text-sm focus:border-red-500 focus:ring-red-500"
                                            rows={2}
                                            placeholder="e.g. AC is not cooling, making noise..."
                                            value={formData.issue}
                                            onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700">Your Name</label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-lg border-slate-300 bg-slate-50 py-2.5 px-3 text-sm focus:border-red-500 focus:ring-red-500"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700">Location</label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-lg border-slate-300 bg-slate-50 py-2.5 px-3 text-sm focus:border-red-500 focus:ring-red-500"
                                                placeholder="Al Ain, ..."
                                                value={formData.location}
                                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            className="inline-flex w-full justify-center rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white hover:bg-[#20bd5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                                        >
                                            <MessageCircle className="mr-2 h-5 w-5" />
                                            Continue to WhatsApp
                                        </button>
                                        <p className="mt-2 text-center text-xs text-slate-500">
                                            We will open WhatsApp with your details pre-filled.
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
