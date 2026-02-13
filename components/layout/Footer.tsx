import React from "react";
import { COMPANY } from "./Header";

export default function Footer() {
    return (
        <footer className="bg-red-900 text-red-50">
            <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-2 gap-8">
                <div>
                    <div className="font-semibold">{COMPANY.name}</div>
                    <div className="text-sm opacity-90">{COMPANY.tagline}</div>
                    <div className="mt-3 text-sm opacity-90">© {new Date().getFullYear()} · All Rights Reserved</div>
                </div>
                <div className="text-sm md:text-right space-y-2">
                    <div><a className="hover:underline" href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a></div>
                    <div><a className="hover:underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
                    <div className="opacity-90">Based in {COMPANY.city} · Serving {COMPANY.region}</div>
                </div>
            </div>
        </footer>
    );
}
