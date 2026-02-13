import React from "react";
import { motion } from "framer-motion";
import {
    Wrench,
    Fan,
    Thermometer,
    ShieldCheck,
    Clock,
    ArrowRight,
    CheckCircle,
} from "lucide-react";
import { COMPANY } from "../layout/Header";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
};

type Service = {
    icon: React.ReactNode;
    name: string;
    short: string;
    points: string[];
};

export const SERVICES: Service[] = [
    {
        icon: <Wrench className="w-6 h-6" />,
        name: "AC Installation & Commissioning",
        short:
            "Complete supply, installation, and commissioning of new air conditioning units.",
        points: [
            "Includes unit selection and supply",
            "Professional installation with proper mounting and wiring",
            "System testing and performance verification",
            "Ensures compliance with safety and energy standards",
        ],
    },
    {
        icon: <Clock className="w-6 h-6" />,
        name: "Annual Maintenance Contracts",
        short:
            "Scheduled maintenance plans to keep AC systems running efficiently year-round.",
        points: [
            "Regular inspections and cleaning",
            "Priority support for breakdowns",
            "Cost-effective long-term upkeep",
            "Helps extend equipment life",
        ],
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        name: "On-Site AC Repair & Maintenance",
        short: "Mobile repair services for resolving any AC issues at your location.",
        points: [
            "Quick diagnostics and fixes",
            "Covers indoor and outdoor units",
            "Reduces downtime",
            "No need to uninstall system",
        ],
    },
    {
        icon: <Fan className="w-6 h-6" />,
        name: "Indoor & Outdoor Water Service",
        short:
            "Servicing water lines and components connected to split or duct AC units.",
        points: [
            "Water drainage check and cleaning",
            "Removal of clogs in pipes",
            "Prevents leakage and water damage",
            "Balances indoor humidity",
        ],
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        name: "Water Leak Fixing",
        short: "Identifying and repairing internal or external AC water leaks.",
        points: [
            "Drain pipe clearing",
            "Sealant application",
            "Water tray and hose inspection",
            "Prevents mold and water stains",
        ],
    },
    {
        icon: <Thermometer className="w-6 h-6" />,
        name: "Gas Leak Fixing",
        short: "Detection and repair of refrigerant gas leaks in AC systems.",
        points: [
            "Pressure test and leak detection",
            "Gas refill with correct refrigerant",
            "Valve and pipe repair",
            "Restores cooling efficiency",
        ],
    },
    {
        icon: <Wrench className="w-6 h-6" />,
        name: "Capacitor & Magnetic Conductor Fixing",
        short: "Repair or replacement of key electrical components inside the AC.",
        points: [
            "Faulty capacitor replacement",
            "Magnetic relay/contactor service",
            "Improves startup performance",
            "Fixes power supply issues",
        ],
    },
    {
        icon: <Wrench className="w-6 h-6" />,
        name: "Compressor Fixing",
        short:
            "Repair or servicing of the AC compressor, the system’s cooling engine.",
        points: [
            "Overheating and noise diagnostics",
            "Oil top-up or compressor replacement",
            "Increases cooling performance",
            "High-precision repair required",
        ],
    },
    {
        icon: <Wrench className="w-6 h-6" />,
        name: "PC Board Fixing",
        short: "Electronic board (PCB) troubleshooting and repair.",
        points: [
            "Resolves display or control issues",
            "Repair/replace burnt-out components",
            "Restores normal operation",
            "Involves micro-level testing",
        ],
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        name: "Electrical Connection Issues",
        short: "Rectification of wiring and power supply issues in the AC.",
        points: [
            "Loose or damaged wire replacement",
            "Voltage stability checks",
            "Ensures safe operation",
            "Prevents short circuits and power loss",
        ],
    },
    {
        icon: <Fan className="w-6 h-6" />,
        name: "Piping Works",
        short: "Installation and repair of copper and drainage piping for AC systems.",
        points: [
            "Leak-proof copper piping",
            "Drain pipe routing",
            "Insulation of lines",
            "Affects cooling efficiency directly",
        ],
    },
    {
        icon: <Fan className="w-6 h-6" />,
        name: "Fan Blade & Fan Motor",
        short:
            "Servicing or replacement of fan blade/motor in indoor or outdoor units.",
        points: [
            "Fixes noise and airflow issues",
            "Replacement of bent/damaged blades",
            "Lubrication and motor rewiring",
            "Essential for proper air circulation",
        ],
    },
    {
        icon: <Thermometer className="w-6 h-6" />,
        name: "Thermostat Repair",
        short: "Diagnosis and fixing of AC temperature control units.",
        points: [
            "Calibration and wiring checks",
            "Replacement of faulty sensors",
            "Accurate temperature regulation",
            "Supports energy efficiency",
        ],
    },
    {
        icon: <Fan className="w-6 h-6" />,
        name: "Condensing Coil Cleaning/Repair",
        short: "Maintenance or replacement of the external condensing coil.",
        points: [
            "Dirt/debris removal",
            "Improves heat dissipation",
            "Repairs corrosion or blockages",
            "Crucial for compressor performance",
        ],
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        name: "Filter Tray, Switch, Blower, etc.",
        short: "Servicing of miscellaneous internal AC components.",
        points: [
            "Filter tray cleaning",
            "Switch replacement",
            "Blower motor service",
            "Ensures clean air and smooth airflow",
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16">
                <motion.h2 className="text-3xl md:text-4xl font-bold" {...fadeUp}>Our Services</motion.h2>
                <motion.p className="mt-2 text-gray-700" {...fadeUp} transition={{ delay: 0.05 }}>End-to-end A/C solutions across the UAE.</motion.p>
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((s, i) => (
                        <motion.div
                            key={i}
                            data-testid="service-card"
                            className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, delay: i * 0.04 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="rounded-xl bg-red-50 text-red-900 p-2">{s.icon}</div>
                                <h3 className="font-semibold text-lg">{s.name}</h3>
                            </div>
                            <p className="mt-2 text-sm text-gray-700">{s.short}</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                {s.points.map((pt, j) => (
                                    <li key={j} className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 mt-0.5 text-red-700" />
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-5">
                                <a
                                    href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(`I am interested in: ${s.name}`)}`}
                                    className="inline-flex items-center gap-1 text-red-800 font-medium hover:underline"
                                >
                                    Request this service <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
