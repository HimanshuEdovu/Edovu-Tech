"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { services } from "@/data/site";

export default function ServicesSection() {
    return (
        <section className="relative overflow-hidden px-5 py-24 sm:px-6 lg:px-8">
            <motion.div
                animate={{
                    x: [-20, 20, -20],
                    y: [-10, 15, -10],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-100 blur-3xl opacity-60"
            />      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal-100 blur-3xl opacity-60" />

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto max-w-7xl"
            >
                <SectionHeader
                    eyebrow="Our Services"
                    title="Everything an Institution Needs To Scale"
                    description="One ecosystem connecting academics, administration and digital learning."
                />

                <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((service) => (
                        <motion.div
                            whileHover={{ y: -10 }}
                            key={service.title}
                            className="group relative overflow-hidden rounded-[30px] border border-slate-200/70 bg-white/70 p-7 shadow-[0_15px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl transition"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-teal-50 opacity-0 transition duration-500 group-hover:opacity-100" />

                            <div className="relative">
                                <h3 className="text-xl font-black text-slate-900">{service.title}</h3>
                                <p className="mt-4 text-slate-600 leading-7">{service.description}</p>
                                <div className="mt-6 font-semibold text-orange-500">Learn More →</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
