import Image from "next/image";
import React from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "./Header";

const quickLinks = [
    ["About", "#about"],
    ["A/C services", "#services"],
    ["Service locations", "#areas"],
    ["Contact", "#contact"],
];

const serviceLinks = [
    "A/C not cooling",
    "Water leakage",
    "New installation",
    "Planned maintenance",
];

export default function Footer() {
    return (
        <footer className="bg-[#1f1513] text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.15fr_1fr_1fr] md:py-14">
                <div>
                    <div className="flex items-center gap-3">
                        <Image
                            src="/logo-al-maghseel.png"
                            alt="Al Maghseel"
                            width={64}
                            height={64}
                            className="object-contain"
                        />
                        <div>
                            <div className="text-lg font-black uppercase leading-tight">Al Maghseel</div>
                            <div className="text-xs font-semibold text-brand-100">{COMPANY.tagline}</div>
                        </div>
                    </div>
                    <p className="mt-5 max-w-sm text-sm font-medium leading-6 text-white/75">
                        A/C installation, maintenance and repair enquiries from an established Al Ain service business.
                    </p>
                    <p className="mt-3 max-w-sm text-xs font-semibold leading-5 text-white/60">
                        Service availability is confirmed by location before dispatch.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-sm font-black">Explore</h3>
                        <ul className="mt-4 space-y-3 text-sm text-white/75">
                            {quickLinks.map(([label, href]) => (
                                <li key={label}><a href={href} className="rounded-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100">{label}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-black">Common needs</h3>
                        <ul className="mt-4 space-y-3 text-sm text-white/75">
                            {serviceLinks.map((item) => (
                                <li key={item}><a href="#services" className="rounded-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-black">Contact</h3>
                    <div className="mt-4 space-y-4 text-sm text-white/75">
                        <a href={`tel:${COMPANY.phone}`} className="flex gap-3 rounded-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100">
                            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-100" />
                            <span><strong className="block text-white">{COMPANY.displayPhone}</strong>Call for urgent support</span>
                        </a>
                        <a href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent("Hello Al Maghseel, I would like an A/C service quote.")}`} className="flex gap-3 rounded-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100">
                            <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-100" />
                            <span><strong className="block text-white">WhatsApp quote</strong>{COMPANY.displayPhone}</span>
                        </a>
                        <a href={`mailto:${COMPANY.email}`} className="flex gap-3 rounded-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100">
                            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-100" />
                            <span className="min-w-0 break-all"><strong className="block text-white">Email</strong>{COMPANY.email}</span>
                        </a>
                        <div className="flex gap-3">
                            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-100" />
                            <span><strong className="block text-white">Al Ain, Abu Dhabi</strong>Head office</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl px-4 py-5 text-xs text-white/60">
                    <div>© {new Date().getFullYear()} Al Maghseel Central Air Conditioner Est. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
}
