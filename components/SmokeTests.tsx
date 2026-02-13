import React, { useEffect } from "react";
import { COMPANY } from "./layout/Header";

/** Console-only smoke tests */
export default function SmokeTests() {
    useEffect(() => {
        const results: [string, boolean, string][] = [];

        const hasName = document.body.textContent?.includes(COMPANY.name) ?? false;
        results.push(["renders company name", hasName, COMPANY.name]);

        const cards = document.querySelectorAll('[data-testid="service-card"]').length;
        // We can't easily check against SERVICES length without importing it. for now checking > 0.
        results.push(["renders service cards", cards > 0, `${cards}`]);

        const tel = document.querySelector(`a[href="tel:${COMPANY.phone}"]`);
        results.push(["has tel: link", !!tel, `tel:${COMPANY.phone}`]);

        const whats = document.querySelector(`a[href^="https://wa.me/${COMPANY.whatsappDigits}"]`);
        results.push(["has WhatsApp link", !!whats, COMPANY.whatsappDigits]);

        const allPass = results.every(([, ok]) => ok);
        console.groupCollapsed(allPass ? "✅ Smoke tests passed" : "❌ Smoke tests had failures");
        results.forEach(([name, ok, extra]) => console.log(ok ? "✅" : "❌", name, "-", extra));
        console.groupEnd();
    }, []);
    return null;
}
