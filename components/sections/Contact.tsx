import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "../layout/Header";
import BookingModal from "../ui/BookingModal";

const fadeUp = {
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
};

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <motion.section id="contact" className="bg-brand-50" {...fadeUp}>
            <BookingModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />

            <div className="border-y border-brand-100 bg-white">
                <div className="mx-auto grid max-w-7xl gap-5 px-4 py-7 md:grid-cols-[1fr_1fr_1fr_1fr] md:items-center">
                    <h2 className="font-heading text-2xl font-black leading-tight text-gray-950">
                        Need A/C Help?<br />
                        We&apos;re Just One Call Away!
                    </h2>
                    <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-4 border-brand-100 md:border-l md:pl-7">
                        <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-900 text-white"><Phone className="h-5 w-5" /></span>
                        <span><span className="block text-xs font-black uppercase text-gray-600">Call</span><span className="text-xl font-black text-brand-900">{COMPANY.displayPhone}</span></span>
                    </a>
                    <a href={`https://wa.me/${COMPANY.whatsappDigits}`} className="flex items-center gap-4 border-brand-100 md:border-l md:pl-7">
                        <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald-700 text-white"><MessageCircle className="h-5 w-5" /></span>
                        <span><span className="block text-xs font-black uppercase text-gray-600">WhatsApp</span><span className="text-xl font-black text-brand-900">{COMPANY.displayPhone}</span></span>
                    </a>
                    <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 border-brand-100 md:border-l md:pl-7">
                        <span className="grid h-11 w-11 place-items-center rounded-full border border-brand-800 text-brand-900"><Mail className="h-5 w-5" /></span>
                        <span><span className="block text-xs font-black uppercase text-gray-600">Email Us</span><span className="text-sm font-black text-brand-900">{COMPANY.email}</span></span>
                    </a>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-950">Contact Us</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Speak directly with a technician for quick help or a same-day quote.
                            Our team is ready to assist you anywhere in {COMPANY.region}.
                        </p>

                        <div className="mt-8 space-y-4">
                            <a href={`tel:${COMPANY.phone}`} className="group flex items-center gap-4 rounded-md border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-brand-100 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-800 transition-colors group-hover:bg-brand-900 group-hover:text-white">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-semibold text-navy-900">Call</div>
                                    <div className="text-slate-600">{COMPANY.displayPhone}</div>
                                </div>
                            </a>

                            <a href={`mailto:${COMPANY.email}`} className="group flex items-center gap-4 rounded-md border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-brand-100 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-800 transition-colors group-hover:bg-brand-900 group-hover:text-white">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-semibold text-navy-900">Email Us</div>
                                    <div className="text-slate-600">{COMPANY.email}</div>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 rounded-md border border-slate-100 bg-white p-5 shadow-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-semibold text-navy-900">Head Office</div>
                                    <div className="text-slate-600">{COMPANY.city} · {COMPANY.region}</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex-1 rounded bg-brand-900 px-6 py-4 text-center text-xs font-extrabold uppercase tracking-wide text-white shadow-lg shadow-brand-900/20 transition-all hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 active:scale-[0.98]"
                            >
                                Book Appointment
                            </button>
                            <a
                                href={`https://wa.me/${COMPANY.whatsappDigits}`}
                                className="flex-1 rounded border-2 border-brand-200 px-6 py-4 text-center text-xs font-extrabold uppercase tracking-wide text-brand-900 transition-all hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 active:scale-[0.98]"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="relative min-h-[460px] overflow-hidden rounded-md bg-slate-100 shadow-lg ring-1 ring-slate-200">
                        <Image
                            src="/hvac-exterior-units.jpg"
                            alt="Exterior air conditioning units on a commercial building"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/75 via-brand-950/10 to-transparent" />
                        <div className="absolute bottom-7 left-7 right-7 rounded-md bg-white p-6 shadow-xl">
                            <div className="flex items-center gap-4">
                                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-900 text-white">
                                    <Phone className="h-5 w-5" />
                                </span>
                                <div>
                                    <div className="text-lg font-black text-brand-900">24/7 Emergency Service</div>
                                    <p className="mt-1 text-sm font-medium text-gray-600">
                                        We are ready to help anytime, anywhere across the UAE.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
