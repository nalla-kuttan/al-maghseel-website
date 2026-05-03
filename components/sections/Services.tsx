import React from "react";
import { motion } from "framer-motion";
import {
    Wrench,
    Fan,
    Thermometer,
    ShieldCheck,
    Clock,
    ArrowRight,
    Droplets,
    Zap,
} from "lucide-react";
import { COMPANY } from "../layout/Header";

const fadeUp = {
    initial: { opacity: 1, y: 0 },
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

const featuredServices = [
    { icon: <Fan className="h-9 w-9" />, name: "A/C Installation & Commissioning" },
    { icon: <Clock className="h-9 w-9" />, name: "Annual Maintenance Contracts" },
    { icon: <Wrench className="h-9 w-9" />, name: "A/C Repair Services" },
    { icon: <Thermometer className="h-9 w-9" />, name: "Gas Leak Repair" },
    { icon: <Droplets className="h-9 w-9" />, name: "Water Leak Repair" },
    { icon: <ShieldCheck className="h-9 w-9" />, name: "Compressor Repair" },
    { icon: <Zap className="h-9 w-9" />, name: "Electrical Fault Repair" },
    { icon: <Wrench className="h-9 w-9" />, name: "PCB / Control Board Repair" },
    { icon: <Thermometer className="h-9 w-9" />, name: "Coil Cleaning & Maintenance" },
    { icon: <Fan className="h-9 w-9" />, name: "Filter, Blower & Unit Service" },
];

export default function Services() {
    return (
        <section id="services" className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-14 md:py-18">
                <motion.div className="text-center" {...fadeUp}>
                    <div className="text-xs font-black uppercase tracking-[0.18em] text-brand-800">Our Services</div>
                    <h2 className="mt-2 font-heading text-3xl font-black tracking-normal text-gray-950 md:text-4xl">
                        Complete A/C Solutions
                    </h2>
                </motion.div>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {featuredServices.map((s, i) => (
                        <motion.div
                            key={i}
                            data-testid="service-card"
                            className="group flex min-h-[132px] flex-col items-center justify-center rounded-md border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_14px_28px_rgba(59,12,10,0.1)]"
                            initial={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, delay: i * 0.04 }}
                        >
                            <div className="text-brand-800 transition group-hover:scale-105">{s.icon}</div>
                            <h3 className="mt-4 text-sm font-black leading-tight text-gray-950">{s.name}</h3>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <a
                        href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent("Hello Al Maghseel, I would like to view all A/C services.")}`}
                        className="inline-flex items-center justify-center gap-3 rounded bg-brand-900 px-7 py-4 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-800"
                    >
                        View All Services <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
