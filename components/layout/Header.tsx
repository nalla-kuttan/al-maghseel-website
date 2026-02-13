import Image from "next/image";
import React from "react";
import { MessageCircle } from "lucide-react";

export const COMPANY = {
  name: "Al Maghseel Central Air Conditioner Est.",
  tagline: "Installation · Repair · Maintenance",
  city: "Al Ain, Abu Dhabi",
  region: "All over UAE",
  years: 19,
  since: 2006,
  phone: "+971506734821",
  whatsappDigits: "00971506734821",
  email: "service@almaghseel.com",
  facebook:
    "https://www.facebook.com/p/Al-Maghseel-Central-Air-Conditioner-Est-100076006452976/",
  instagram: "https://www.instagram.com/maghseel/?hl=am-et",
  cta: "Get a Free Quote in 1 Hour",
};

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-al-maghseel.PNG"
            alt="Al Maghseel Logo"
            width={56}
            height={56}
            className="h-14 w-14 object-contain rounded"
            priority
          />
          <div className="leading-tight">
            <div className="font-semibold text-lg">{COMPANY.name}</div>
            <div className="text-sm text-gray-600">{COMPANY.tagline}</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-red-700">Services</a>
          <a href="#about" className="hover:text-red-700">About</a>
          <a href="#areas" className="hover:text-red-700">Service Areas</a>
          <a href="#contact" className="hover:text-red-700">Contact</a>
          <a
            href={`https://wa.me/${COMPANY.whatsappDigits}?text=Hello%20Al%20Maghseel,%20I%27d%20like%20a%20quote.`}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-red-800 text-white"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
