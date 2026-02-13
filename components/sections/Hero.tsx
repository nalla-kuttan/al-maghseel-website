import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ShieldCheck, Clock, Wrench } from "lucide-react";
import { COMPANY } from "../layout/Header";
import Counter from "../ui/Counter";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
};

export default function Hero() {
    // Rotating locations & gradient overlay (no Arabic support)
    const locations = [
        "Al Ain",
        "Abu Dhabi",
        "Dubai",
        "Sharjah",
        "Ajman",
        "Ras Al Khaimah",
        "Umm Al Quwain",
        "Fujairah",
    ];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setIndex((p) => (p + 1) % locations.length), 2500);
        return () => clearInterval(id);
    }, []);

    const gradients = [
        "from-red-50 via-rose-50 to-red-100",
        "from-amber-50 via-yellow-50 to-amber-100",
        "from-rose-50 via-pink-50 to-rose-100",
        "from-sky-50 via-blue-50 to-sky-100",
        "from-emerald-50 via-teal-50 to-emerald-100",
        "from-cyan-50 via-teal-50 to-cyan-100",
        "from-violet-50 via-indigo-50 to-violet-100",
    ];

    return (
        <motion.section
            className="relative isolate overflow-hidden bg-navy-900"
            {...fadeUp}
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop"
                    alt="HVAC Technician inspecting commercial AC unit on rooftop"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/60 to-navy-900/30" />
            </div>

            <div className="mx-auto max-w-7xl px-4 py-24 sm:py-32 grid md:grid-cols-2 gap-10 items-center">
                <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                        Serving {COMPANY.region} · Since {COMPANY.since}
                    </span>
                    <h1 className="mt-6 text-4xl md:text-6xl font-heading font-bold tracking-tight text-white leading-tight">
                        Reliable Central A/C Services in{" "}
                        <motion.span
                            key={index}
                            className="text-red-500 inline-block"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {locations[index]}
                        </motion.span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
                        From new installations to emergency repairs, our expert team keeps your cooling system running at peak performance. <Counter target={COMPANY.years} />+ years of trusted service.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                            href={`tel:${COMPANY.phone}`}
                            className="inline-flex items-center gap-2 rounded-xl bg-red-600 text-white px-6 py-4 font-semibold shadow-lg shadow-red-900/20 hover:bg-red-500 active:scale-[0.98] transition-all"
                        >
                            <Phone className="w-5 h-5" /> Call {COMPANY.phone}
                        </a>
                        <a
                            href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(`Hello Al Maghseel, ${COMPANY.cta}`)}`}
                            className="inline-flex items-center gap-2 rounded-xl border border-white/20 text-white px-6 py-4 font-semibold hover:bg-white/10 active:scale-[0.98] transition-all"
                        >
                            <MessageCircle className="w-5 h-5" /> {COMPANY.cta}
                        </a>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-slate-400">
                        <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-red-400" /> Licensed & Experienced</div>
                        <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-red-400" /> Fast Response</div>
                        <div className="flex items-center gap-2"><Wrench className="w-5 h-5 text-red-400" /> Genuine Parts</div>
                    </div>
                </motion.div>
                {/* Removed the logo image column for a cleaner, text-focused hero with background context */}
                <div className="hidden md:block"></div>
            </div>
        </motion.section>
    );
}
