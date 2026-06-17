"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function DataSecurityHero() {
    return (<>
        <section className="relative overflow-hidden bg-[#08111f] px-5 pt-24 pb-10 sm:px-6 lg:px-8">

            {/* Background */}

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]" />

            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                <div className="">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                    >

                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                            Data Privacy & Security

                        </span>

                        <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">

                            Protecting Learning,
                            <br />

                            Securing Every
                            <span className="text-orange-400">

                                {" "}Interaction

                            </span>

                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">

                            Data privacy in eLearning involves safeguarding
                            personal information gathered, stored and utilized
                            by online learning platforms.

                        </p>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">

                            Edovu LMS collects learning progress, behaviour,
                            personal information and academic records to
                            personalize learning experiences while adhering to
                            ISO 27001 Privacy Information Management System
                            (PIMS) standards.

                        </p>

                    </motion.div>


                </div>

            </div>

        </section>
       
    </>
    );
}