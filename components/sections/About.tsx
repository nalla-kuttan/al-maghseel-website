import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CalendarCheck, Home, MapPin } from "lucide-react";
import { COMPANY } from "../layout/Header";

const fadeUp = {
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
};

const reasons = [
    { icon: CalendarCheck, title: "Since 2006", text: "established A/C service" },
    { icon: MapPin, title: "Al Ain base", text: "location-first dispatch" },
    { icon: Home, title: "Residential", text: "homes and villas" },
    { icon: Building2, title: "Commercial", text: "shops and workplaces" },
];

export default function About() {
    return (
        <section id="about" className="bg-white">
            <div className="border-y border-brand-100 bg-brand-50">
                <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-brand-200 px-4 py-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                    {reasons.map(({ icon: Icon, title, text }) => (
                        <div key={title} className="flex items-center justify-center gap-3 px-4 py-4">
                            <Icon className="h-8 w-8 shrink-0 text-brand-800" />
                            <div className="text-sm leading-tight">
                                <div className="font-black text-brand-900">{title}</div>
                                <div className="font-semibold text-gray-700">{text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <motion.div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-[1.08fr_0.92fr]" {...fadeUp}>
                <div className="relative overflow-hidden rounded-md">
                    <Image
                        src="/hvac-commercial-units.jpg"
                        alt="Commercial HVAC units installed in a row"
                        width={900}
                        height={620}
                        className="aspect-[1.55/1] w-full object-cover"
                    />
                    <div className="absolute bottom-8 left-8 grid h-28 w-28 place-items-center rounded-full bg-brand-900 text-center text-white shadow-xl ring-4 ring-white">
                        <div>
                            <div className="text-[10px] font-bold uppercase tracking-wide">Since</div>
                            <div className="text-3xl font-black">{COMPANY.since}</div>
                            <div className="text-[9px] font-semibold">Established A/C Service</div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="max-w-lg font-heading text-4xl font-black leading-tight tracking-normal text-gray-950">
                        Practical service, with the next step made clear.
                    </h2>
                    <div className="mt-4 flex max-w-xl flex-wrap gap-2 text-sm font-extrabold text-brand-900">
                        <span className="rounded bg-brand-50 px-3 py-2">Since {COMPANY.since}</span>
                        <span className="rounded bg-brand-50 px-3 py-2">Based in Al Ain</span>
                    </div>
                    <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-gray-700">
                        Al Maghseel Central Air Conditioner Est. has handled A/C installation, maintenance and repair
                        enquiries since {COMPANY.since}. Share your location and the symptoms you see; the team will
                        confirm service availability and the appropriate next step.
                    </p>
                    <div className="mt-6 max-w-xl border-y border-brand-100 py-5 text-sm font-semibold leading-7 text-gray-800">
                        For the fastest assessment, include your area, building type, A/C type and whether the problem is cooling, airflow, noise or water leakage.
                    </div>
                    <a
                        href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent("Hello Al Maghseel, I need help with an A/C issue. My location is: ")}`}
                        className="mt-8 inline-flex items-center gap-3 rounded bg-brand-900 px-6 py-4 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
                    >
                        Ask About Your A/C <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
