import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ShieldCheck, Facebook, Instagram, MessageCircle, Calendar } from "lucide-react";
import { COMPANY } from "../layout/Header";
import BookingModal from "../ui/BookingModal";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
};

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <motion.section id="contact" className="bg-neutral-50" {...fadeUp}>
            <BookingModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />

            <div className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                        <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800">
                            Get in Touch
                        </span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-navy-900">Contact Us</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Speak directly with a technician for quick help or a same-day quote.
                            Our team is ready to assist you anywhere in {COMPANY.region}.
                        </p>

                        <div className="mt-8 space-y-4">
                            <a href={`tel:${COMPANY.phone}`} className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-semibold text-navy-900">Call Us 24/7</div>
                                    <div className="text-slate-600">{COMPANY.phone}</div>
                                </div>
                            </a>

                            <a href={`mailto:${COMPANY.email}`} className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-semibold text-navy-900">Email Us</div>
                                    <div className="text-slate-600">{COMPANY.email}</div>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
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
                                className="flex-1 rounded-xl bg-navy-900 px-6 py-4 text-center font-semibold text-white shadow-lg shadow-navy-900/20 hover:bg-navy-800 active:scale-[0.98] transition-all"
                            >
                                Book Appointment
                            </button>
                            <a
                                href={`https://wa.me/${COMPANY.whatsappDigits}`}
                                className="flex-1 rounded-xl border-2 border-slate-200 px-6 py-4 text-center font-semibold text-navy-900 hover:bg-slate-50 active:scale-[0.98] transition-all"
                            >
                                WhatsApp Chat
                            </a>
                        </div>
                    </div>

                    <div className="h-full min-h-[400px] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-lg ring-1 ring-slate-200 lg:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116345.3499738092!2d55.65624169727402!3d24.207198642152862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab137782b137f%3A0 x6f83138372666249!2sAl%20Ain%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1707834612345!5m2!1sen!2sae"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "400px" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Al Maghseel Location Map"
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
