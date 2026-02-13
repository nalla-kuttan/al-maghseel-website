import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
};

export default function ServiceAreas() {
    const areas = [
        "Al Ain",
        "Abu Dhabi",
        "Dubai",
        "Sharjah",
        "Ajman",
        "Ras Al Khaimah",
        "Umm Al Quwain",
        "Fujairah",
    ];
    return (
        <section id="areas" className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16">
                <motion.h2 className="text-3xl md:text-4xl font-bold" {...fadeUp}>Service Areas</motion.h2>
                <motion.p className="mt-2 text-gray-700" {...fadeUp}>We operate across the United Arab Emirates.</motion.p>
                <div className="mt-6 flex flex-wrap gap-2">
                    {areas.map((c, idx) => (
                        <motion.span
                            key={c}
                            className="px-3 py-1 rounded-full bg-red-50 text-red-900 border border-red-100 text-sm"
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.03 }}
                        >
                            {c}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}
