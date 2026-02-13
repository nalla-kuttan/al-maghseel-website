import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { COMPANY } from "../layout/Header";
import Counter from "../ui/Counter";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
};

export default function About() {
    return (
        <motion.section id="about" className="bg-neutral-50" {...fadeUp}>
            <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
                    <p className="mt-3 text-gray-700">
                        We are a locally trusted A/C specialist headquartered in {COMPANY.city}. For over <Counter target={COMPANY.years} /> years, our technicians have supported homes, shops, and commercial spaces across {COMPANY.region}. We focus on safe installs, quick repairs, and honest advice.
                    </p>
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        {["Certified technicians", "Fast on-site response", "Clear pricing, no surprises", "Genuine parts & warranty"].map((b, i) => (
                            <li key={i} className="flex items-center gap-2 bg-white border rounded-xl p-3">
                                <CheckCircle className="w-4 h-4 text-red-700" />
                                {b}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="order-1 md:order-2">
                    <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 grid place-items-center">
                        <div className="text-center px-8">
                            <div className="font-semibold">Fully Covered</div>
                            <div className="text-3xl font-extrabold text-red-800">All Over UAE</div>
                            <p className="mt-2 text-gray-600">Residential • Retail • Commercial • Industrial</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
