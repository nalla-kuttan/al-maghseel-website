import React from "react";
import {
    ArrowRight,
    CalendarCheck,
    Droplets,
    Fan,
    MessageCircle,
    Snowflake,
    Wrench,
} from "lucide-react";
import { COMPANY } from "../layout/Header";

export const SERVICE_OFFERINGS = [
    {
        name: "A/C troubleshooting and repair",
        description: "Diagnosis for cooling, airflow, refrigerant, thermostat, compressor and electrical faults.",
    },
    {
        name: "A/C water-leak repair",
        description: "Drain clearing, tray and hose inspection, seals and indoor-unit water issues.",
    },
    {
        name: "A/C installation",
        description: "Unit selection, mounting, piping, wiring, testing and commissioning.",
    },
    {
        name: "Planned A/C maintenance",
        description: "Cleaning, inspection and scheduled support for homes and commercial properties.",
    },
];

const servicePaths = [
    {
        icon: Snowflake,
        cue: "The A/C is not cooling",
        scope: "Diagnosis for airflow, refrigerant, thermostat, compressor and electrical faults.",
    },
    {
        icon: Droplets,
        cue: "Water is leaking",
        scope: "Drain clearing, tray and hose inspection, seals and indoor-unit water issues.",
    },
    {
        icon: Fan,
        cue: "I need a new system",
        scope: "Unit selection, mounting, piping, wiring, testing and commissioning.",
    },
    {
        icon: CalendarCheck,
        cue: "I need planned maintenance",
        scope: "Cleaning, inspection and scheduled support for homes and commercial properties.",
    },
];

const technicalServices = [
    "Refrigerant leak testing and refill",
    "Compressor inspection and repair",
    "PCB and control-board faults",
    "Capacitor and magnetic contactor replacement",
    "Electrical connections and wiring",
    "Copper and drainage piping",
    "Fan blade, fan motor and blower service",
    "Thermostat and sensor faults",
    "Condenser coil cleaning and repair",
    "Filters, trays, switches and internal components",
];

const serviceSteps = [
    {
        title: "Share the symptom",
        text: "Send your location, building type and what the A/C is doing.",
    },
    {
        title: "Confirm availability",
        text: "We confirm the visit window and whether any known parts may be needed.",
    },
    {
        title: "Inspect before repair",
        text: "The technician diagnoses the issue and explains the next step before major work.",
    },
];

export default function Services() {
    return (
        <section id="services" className="border-t border-brand-100 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
                <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
                    <div>
                        <h2 className="max-w-md font-heading text-3xl font-black leading-tight text-gray-950 md:text-5xl">
                            Start with what your A/C is doing.
                        </h2>
                        <p className="mt-5 max-w-md text-base font-medium leading-7 text-gray-700">
                            You do not need to diagnose the component yourself. Choose the closest symptom and send us the details you know.
                        </p>
                        <a
                            href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent("Hello Al Maghseel, I need help diagnosing an A/C issue.")}`}
                            className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded bg-emerald-700 px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                        >
                            <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
                        </a>
                    </div>

                    <div className="border-y border-brand-100">
                        {servicePaths.map(({ icon: Icon, cue, scope }, index) => (
                            <a
                                key={cue}
                                href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(`Hello Al Maghseel, ${cue.toLowerCase()}. My location is: `)}`}
                                className="group grid min-h-28 grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-brand-100 px-1 py-5 last:border-b-0 sm:gap-6 sm:px-4"
                            >
                                <span className="grid h-11 w-11 place-items-center rounded bg-brand-900 text-white">
                                    <Icon className="h-5 w-5" />
                                </span>
                                <span>
                                    <span className="block text-lg font-black text-gray-950">{cue}</span>
                                    <span className="mt-1 block max-w-2xl text-sm font-medium leading-6 text-gray-700">{scope}</span>
                                </span>
                                <ArrowRight className="h-5 w-5 text-brand-700 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-12 grid gap-8 border-y border-brand-100 py-8 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <h3 className="text-2xl font-black leading-tight text-gray-950">How a service visit works</h3>
                        <p className="mt-3 max-w-md text-sm font-medium leading-6 text-gray-700">
                            A clear handoff for urgent repairs, planned maintenance and installations.
                        </p>
                    </div>
                    <ol className="grid gap-6 sm:grid-cols-3">
                        {serviceSteps.map((step, index) => (
                            <li key={step.title}>
                                <div className="text-sm font-black text-brand-800">0{index + 1}</div>
                                <div className="mt-2 text-sm font-black text-gray-950">{step.title}</div>
                                <p className="mt-2 text-sm font-medium leading-6 text-gray-700">{step.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>

                <details className="mt-8 rounded-md bg-brand-50 px-5 py-4 text-gray-950">
                    <summary className="cursor-pointer text-sm font-black focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2">
                        See the technical work we handle
                    </summary>
                    <ul className="mt-5 grid gap-x-8 gap-y-3 border-t border-brand-100 pt-5 text-sm font-semibold leading-6 text-gray-700 sm:grid-cols-2">
                        {technicalServices.map((service) => (
                            <li key={service} className="flex items-start gap-3">
                                <Wrench className="mt-1 h-4 w-4 shrink-0 text-brand-800" />
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                </details>
            </div>
        </section>
    );
}
