import React from "react";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "../layout/Header";

export default function WhatsAppFAB() {
    return (
        <a
            href={`https://wa.me/${COMPANY.whatsappDigits}?text=Hi%2C%20I%20need%20A%2FC%20service.`}
            className="fixed bottom-5 right-5 z-50 hidden rounded-full bg-emerald-700 p-4 text-white shadow-lg transition hover:bg-emerald-800 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 md:inline-flex"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
        </a>
    );
}
