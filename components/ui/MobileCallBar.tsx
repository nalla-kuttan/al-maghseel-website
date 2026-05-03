import React from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "../layout/Header";

/** Mobile Call/WhatsApp sticky bar */
export default function MobileCallBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 overflow-hidden rounded-t-lg bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.15)] md:hidden">
            <div className="grid grid-cols-3 text-xs font-black text-white">
                <a href={`tel:${COMPANY.phone}`} className="inline-flex flex-col items-center justify-center gap-1 bg-brand-900 py-3 active:scale-[0.99]">
                    <Phone className="w-5 h-5" /> Call Now
                </a>
                <a href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent("Hello Al Maghseel!")}`} className="inline-flex flex-col items-center justify-center gap-1 bg-[#07973f] py-3 active:scale-[0.99]">
                    <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
                <a href={`mailto:${COMPANY.email}`} className="inline-flex flex-col items-center justify-center gap-1 bg-brand-800 py-3 active:scale-[0.99]">
                    <Mail className="w-5 h-5" /> Get Quote
                </a>
            </div>
        </div>
    );
}
