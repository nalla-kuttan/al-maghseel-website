import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "../layout/Header";

/** Mobile Call/WhatsApp sticky bar */
export default function MobileCallBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t md:hidden z-40">
            <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-3">
                <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-800 text-white py-3 shadow active:scale-[0.99]">
                    <Phone className="w-4 h-4" /> Call
                </a>
                <a href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent("Hello Al Maghseel!")}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-800 text-red-800 py-3 active:scale-[0.99]">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
            </div>
        </div>
    );
}
