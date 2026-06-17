"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Building2 } from "lucide-react";

export default function NEPInfrastructureSection() {
    return (
        <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-6 lg:px-8">

            {/* Background */}

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* IMAGE */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        <div className="overflow-hidden rounded-[36px] shadow-2xl bg-slate-100">

                            {/* Add your rural school image */}

                            <Image
                                src="/ruralImages/rural-3.webp"
                                alt="Rural Education"
                                width={900}
                                height={700}
                                className="h-full w-full object-cover"
                            />

                        </div>

                        {/* Floating Card */}

                        <div className="absolute -bottom-8 left-8 rounded-[28px] bg-[#08111f] p-7 shadow-2xl">

                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                <GraduationCap
                                    size={32}
                                    className="text-white"
                                />

                            </div>

                            <h3 className="text-4xl font-black text-white">

                                NEP

                            </h3>

                            <p className="mt-2 text-slate-300">

                                2020 Ready
                            </p>

                        </div>

                    </motion.div>

                    {/* CONTENT */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >

                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                            Project Description

                        </span>

                        <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">

                            Next Generation
                            <br />

                            Learning Management
                            <span className="text-orange-500">

                                {" "}System

                            </span>

                        </h2>

                        <p className="mt-8 text-lg leading-8 text-slate-600">

                            This project description outlines the architecture of an intelligent,
                            next generation Learning Management System, Edovu LMS.

                        </p>

                        <p className="mt-6 text-lg leading-8 text-slate-600">

                            Built to comply with India’s National Education Policy (NEP 2020),
                            this platform transitions schools from archaic, rote-based paradigms
                            to cloud-native, population-scale digital education public infrastructure.

                        </p>

                        {/* Feature Box */}

                        <div className="mt-10 rounded-[28px] border border-orange-100 bg-orange-50 p-8">

                            <div className="flex gap-5">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">

                                    <Building2 size={26} />

                                </div>

                                <div>

                                    <h4 className="text-xl font-bold text-slate-900">

                                        Built for Modern Indian Education

                                    </h4>

                                    <p className="mt-3 leading-7 text-slate-600">

                                        A cloud-native digital learning ecosystem designed to
                                        support scalable education infrastructure aligned with
                                        NEP 2020 and future-ready institutional transformation.

                                    </p>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}