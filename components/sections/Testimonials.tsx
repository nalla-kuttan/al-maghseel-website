import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
};

const TESTIMONIALS = [
    {
        name: "Ahmed Al Mansoori",
        role: "Homeowner, Al Ain",
        text: "Excellent service! They fixed my AC within 2 hours of calling. The technician was very professional and explained exactly what was wrong.",
        stars: 5,
    },
    {
        name: "Sarah Johnson",
        role: "Villa Resident in Abu Dhabi",
        text: "I've been using Al Maghseel for my annual maintenance for 3 years now. Reliable, honest pricing, and they always clean up after themselves.",
        stars: 5,
    },
    {
        name: "Mohammed Rashid",
        role: "Shop Owner",
        text: "My shop's AC broke down in the middle of summer. They came immediately and replaced the compressor. Highly recommended for commercial needs.",
        stars: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="bg-navy-50 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <motion.div className="text-center" {...fadeUp}>
                    <h2 className="text-3xl font-heading font-bold text-navy-900 sm:text-4xl">
                        Trusted by Families & Businesses
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Don't just take our word for it—hear from our satisfied customers across the UAE.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <div>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {[...Array(t.stars)].map((_, si) => (
                                        <Star key={si} className="h-5 w-5 fill-current" />
                                    ))}
                                </div>
                                <div className="mt-6 relative">
                                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-slate-100 -z-10 transform scale-150" />
                                    <p className="text-base leading-7 text-slate-700 italic">"{t.text}"</p>
                                </div>
                            </div>
                            <div className="mt-8 border-t border-slate-100 pt-6">
                                <div className="font-semibold text-navy-900">{t.name}</div>
                                <div className="text-sm text-slate-500">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
