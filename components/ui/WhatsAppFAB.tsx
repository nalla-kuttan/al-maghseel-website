import React from "react";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "../layout/Header";

export default function WhatsAppFAB() {
    return (
        <a
            href={`https://wa.me/${COMPANY.whatsappDigits}?text=Hi%2C%20I%20need%20A%2FC%20service.`}
            className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 text-white p-4 shadow-lg hover:shadow-xl"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
        </a>
    );
}
