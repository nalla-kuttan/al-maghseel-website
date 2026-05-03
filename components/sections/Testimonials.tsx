import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const fadeUp = {
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
};

const TESTIMONIALS = [
    {
        name: "Ahmed R.",
        role: "Villa Owner, Al Ain",
        text: "Very professional team. They fixed our AC issue the same day. Highly recommended!",
        stars: 5,
    },
    {
        name: "Fatima K.",
        role: "Office Manager, Abu Dhabi",
        text: "We have an AMC with Al Maghseel for our office. Excellent service and very prompt response.",
        stars: 5,
    },
    {
        name: "Rashid M.",
        role: "Shop Owner, Dubai",
        text: "Genuine people with great technical knowledge. Fair prices and reliable service.",
        stars: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <motion.div className="text-center" {...fadeUp}>
                    <div className="text-xs font-black uppercase tracking-[0.18em] text-brand-800">What Our Clients Say</div>
                    <h2 className="text-3xl font-heading font-bold text-navy-900 sm:text-4xl">
                        Trusted by Thousands Across the UAE
                    </h2>
                </motion.div>

                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={i}
                            className="flex min-h-[245px] flex-col justify-between rounded-md bg-white p-8 shadow-sm ring-1 ring-slate-200"
                            initial={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <div>
                                <div className="flex items-center justify-between">
                                    <Quote className="h-9 w-9 fill-brand-800 text-brand-800" />
                                    <div className="flex items-center gap-1 text-yellow-500">
                                    {[...Array(t.stars)].map((_, si) => (
                                        <Star key={si} className="h-4 w-4 fill-current" />
                                    ))}
                                    </div>
                                </div>
                                <p className="mt-7 text-sm font-medium leading-7 text-slate-700">{t.text}</p>
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
