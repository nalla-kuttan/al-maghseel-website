import React, { useEffect, useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "../layout/Header";

/** Mobile Call/WhatsApp sticky bar */
export default function MobileCallBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 520);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 overflow-hidden rounded-t-lg bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.15)] transition duration-200 md:hidden ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
            }`}
        >
            <div className="grid grid-cols-3 text-xs font-black text-white">
                <a href={`tel:${COMPANY.phone}`} className="inline-flex min-h-16 flex-col items-center justify-center gap-1 bg-brand-900 px-2 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100 focus-visible:ring-inset active:scale-[0.99]">
                    <Phone className="w-5 h-5" /> Call Now
                </a>
                <a href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent("Hello Al Maghseel!")}`} className="inline-flex min-h-16 flex-col items-center justify-center gap-1 bg-emerald-700 px-2 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-inset active:scale-[0.99]">
                    <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
                <a href={`mailto:${COMPANY.email}`} className="inline-flex min-h-16 flex-col items-center justify-center gap-1 bg-brand-800 px-2 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100 focus-visible:ring-inset active:scale-[0.99]">
                    <Mail className="w-5 h-5" /> Get Quote
                </a>
            </div>
        </div>
    );
}
