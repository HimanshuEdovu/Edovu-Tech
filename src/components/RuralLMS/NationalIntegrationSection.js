"use client";

import { motion } from "framer-motion";
import {
    Network,
    Database,
    IdCard,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

const integrations = [
    {
        icon: Network,
        title: "NDEAR & DIKSHA Sandbox",
        description:
            "Full API integration with the DIKSHA infrastructure to pull open-source digital assets, energized textbooks, question banks, and micro-courses across 35+ regional languages.",
        gradient: "from-orange-500 to-orange-400",
    },
    {
        icon: Database,
        title: "UDISE+ Alignment",
        description:
            "Direct synchronization with the Unified District Information System for Education (UDISE+) to verify, pull, and update standardized school master profiles, avoiding data duplication.",
        gradient: "from-cyan-500 to-cyan-400",
    },
    {
        icon: IdCard,
        title: "APAAR ID",
        description:
            "Native integration with the One Nation, One Student ID (APAAR Card) system to record student lifecycle metrics, tracking learning progress asynchronously even if a student changes schools.",
        gradient: "from-purple-500 to-indigo-500",
    },
    {
        icon: ShieldCheck,
        title: "DigiLocker Integration",
        description:
            "Secure API pipeline to push verifiable credentials, digital badges, certificates, and the automated 360-Degree Holistic Progress Card directly into students' official government wallets.",
        gradient: "from-emerald-500 to-teal-500",
    },
];

export default function NationalIntegrationSection() {
    return (
        <section className="relative overflow-hidden bg-[#08111f] py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Heading */}

                <div className="text-center">

                    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                        National Educational & Public Infrastructure Integrations

                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white lg:text-6xl">

                        Connected With

                        <span className="text-orange-400">

                            {" "}India&apos;s Digital Education Ecosystem

                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">

                        The LMS actively interfaces with primary national educational
                        frameworks via verified open APIs to ensure a seamless data flow.

                    </p>

                </div>

                {/* Integration Cards */}

                <div className="mt-20 grid gap-8 lg:grid-cols-2">

                    {integrations.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                key={item.title}

                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                transition={{
                                    duration: .6,
                                    delay: index * .1,
                                }}

                                viewport={{
                                    once: true,
                                }}

                                whileHover={{
                                    y: -8,
                                }}

                                className="group rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/20 hover:bg-white/10"

                            >

                                <div className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${item.gradient}`}>

                                    <Icon
                                        size={36}
                                        className="text-white"
                                    />

                                </div>

                                <h3 className="text-3xl font-black text-white">

                                    {item.title}

                                </h3>

                                <p className="mt-6 leading-8 text-slate-300">

                                    {item.description}

                                </p>

                                <div className="mt-8 flex items-center gap-2 font-semibold text-orange-400">

                                    Government Integration

                                    <ArrowRight
                                        size={18}
                                        className="transition group-hover:translate-x-1"
                                    />

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

                {/* Bottom Banner */}

                <div className="mt-20 rounded-[40px] border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-12 backdrop-blur-xl">

                    <div className="grid items-center gap-10 lg:grid-cols-2">

                        <div>

                            <span className="rounded-full bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                                Seamless Data Flow

                            </span>

                            <h3 className="mt-6 text-4xl font-black text-white">

                                Unified Educational
                                <span className="text-orange-400">

                                    {" "}Infrastructure

                                </span>

                            </h3>

                            <p className="mt-6 text-lg leading-8 text-slate-300">

                                From learning resources and school profiles to
                                student identity and digital credentials, Edovu LMS
                                securely connects with India&apos;s digital education
                                ecosystem.

                            </p>

                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">

                            <div className="rounded-3xl bg-white/5 p-6">

                                <h4 className="text-3xl font-black text-orange-400">

                                    35+

                                </h4>

                                <p className="mt-3 text-slate-300">

                                    Regional Languages

                                </p>

                            </div>

                            <div className="rounded-3xl bg-white/5 p-6">

                                <h4 className="text-3xl font-black text-orange-400">

                                    Open API

                                </h4>

                                <p className="mt-3 text-slate-300">

                                    Government Integration

                                </p>

                            </div>

                            <div className="rounded-3xl bg-white/5 p-6">

                                <h4 className="text-3xl font-black text-orange-400">

                                    One Nation

                                </h4>

                                <p className="mt-3 text-slate-300">

                                    APAAR Student Identity

                                </p>

                            </div>

                            <div className="rounded-3xl bg-white/5 p-6">

                                <h4 className="text-3xl font-black text-orange-400">

                                    360°

                                </h4>

                                <p className="mt-3 text-slate-300">

                                    Holistic Progress Cards

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}