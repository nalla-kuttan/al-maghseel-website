import Image from "next/image";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "./Header";
import { SERVICES } from "../sections/Services";

const quickLinks = [
    ["Home", "#"],
    ["About Us", "#about"],
    ["Services", "#services"],
    ["Service Areas", "#areas"],
    ["Contact Us", "#contact"],
];
const serviceAreas = ["Al Ain", "Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"];

export default function Footer() {
    return (
        <footer className="bg-[#1f1513] text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.25fr_0.8fr_1fr_0.9fr_1fr]">
                <div>
                    <div className="flex items-center gap-3">
                        <Image
                            src="/logo-al-maghseel.png"
                            alt="Al Maghseel Logo"
                            width={64}
                            height={64}
                            className="object-contain"
                        />
                        <div>
                            <div className="text-lg font-black uppercase leading-tight">Al Maghseel</div>
                            <div className="text-xs font-semibold text-brand-100">{COMPANY.tagline}</div>
                        </div>
                    </div>
                    <p className="mt-5 max-w-xs text-sm font-medium leading-6 text-white/70">
                        Reliable A/C solutions for homes, businesses and industries across the UAE.
                    </p>
                </div>

                <div>
                    <h3 className="text-xs font-black uppercase tracking-wide">Quick Links</h3>
                    <ul className="mt-5 space-y-2 text-sm text-white/70">
                        {quickLinks.map(([label, href]) => (
                            <li key={label}><a href={href} className="rounded-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100">{label}</a></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xs font-black uppercase tracking-wide">Our Services</h3>
                    <ul className="mt-5 space-y-2 text-sm text-white/70">
                        {SERVICES.slice(0, 7).map((item) => (
                            <li key={item.name}><a href="#services" className="rounded-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100">{item.name.replace("On-Site ", "").replace(" & Commissioning", "")}</a></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xs font-black uppercase tracking-wide">Service Areas</h3>
                    <ul className="mt-5 space-y-2 text-sm text-white/70">
                        {serviceAreas.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xs font-black uppercase tracking-wide">Get in Touch</h3>
                    <div className="mt-5 space-y-5 text-sm text-white/75">
                        <a href={`tel:${COMPANY.phone}`} className="flex rounded-sm gap-3 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100">
                            <Phone className="mt-0.5 h-5 w-5 text-brand-100" />
                            <span><strong className="block text-white">{COMPANY.displayPhone}</strong>24/7 Call Support</span>
                        </a>
                        <a href={`mailto:${COMPANY.email}`} className="flex rounded-sm gap-3 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100">
                            <Mail className="mt-0.5 h-5 w-5 text-brand-100" />
                            <span><strong className="block text-white">{COMPANY.email}</strong>Email Us</span>
                        </a>
                        <div className="flex gap-3">
                            <MapPin className="mt-0.5 h-5 w-5 text-brand-100" />
                            <span><strong className="block text-white">Al Ain, UAE</strong>Serving All Emirates</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl px-4 py-5 text-xs text-white/60">
                    <div>© {new Date().getFullYear()} Al Maghseel Central Air Conditioner Est. All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    );
}
