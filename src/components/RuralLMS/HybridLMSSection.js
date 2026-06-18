"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    WifiOff,
    HardDrive,
    Smartphone,
    RefreshCw,
    CheckCircle2,
} from "lucide-react";

const features = [
    {
        icon: WifiOff,
        title: "Hybrid Offline / Online LMS",
        description:
            "Essential for rural areas. Student progress syncs automatically once a device reaches a network zone.",
    },
    {
        icon: HardDrive,
        title: "SD Card Eco System",
        description:
            "The entire adaptive learning algorithm, local login frameworks, and multimedia files (Odia/English bilingual streams) execute directly from an SD Card configuration on school-registered, Mobile Device Management enrolled devices.",
    },
];

const highlights = [
    "Works even without continuous internet connectivity",
    "Automatic progress synchronization",
    "School registered secure devices",
    "Mobile Device Management enabled",
];

export default function HybridLMSSection() {
    return (
        <section className="relative overflow-hidden bg-white py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* CONTENT */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                    >

                        <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                            Hybrid Offline / Online LMS

                        </span>

                        <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">

                            Learning That Works

                            <span className="text-orange-500">

                                {" "}Anywhere

                            </span>

                        </h2>

                        <p className="mt-8 text-lg leading-8 text-slate-600">

                            Essential for rural areas. Student progress syncs
                            automatically once a device reaches a network zone.

                        </p>

                        <div className="mt-10 rounded-[32px] border border-orange-100 bg-orange-50 p-8">

                            <div className="flex gap-5">

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                    <HardDrive
                                        size={30}
                                        className="text-white"
                                    />

                                </div>

                                <div>

                                    <h3 className="text-2xl font-bold text-slate-900">

                                        SD Card Eco System

                                    </h3>

                                    <p className="mt-4 leading-8 text-slate-600">

                                        The entire adaptive learning algorithm,
                                        local login frameworks, and multimedia
                                        files (Odia/English bilingual streams)
                                        execute directly from an SD Card
                                        configuration on school-registered,
                                        Mobile Device Management enrolled
                                        devices.

                                    </p>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                    {/* IMAGE */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        <div className="overflow-hidden rounded-[40px] shadow-2xl bg-slate-100">

                            {/* Add your image */}

                            <Image
                                src="/contentImages/sd-card.png"
                                alt="Hybrid LMS"
                                width={900}
                                height={700}
                                className="h-full w-full object-cover"
                            />

                        </div>

                        {/* Floating Card */}

                        {/* <div className="absolute -bottom-8 right-8 rounded-[30px] bg-[#08111f] p-7 shadow-2xl">

                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                <Smartphone
                                    size={30}
                                    className="text-white"
                                />

                            </div>

                            <h3 className="text-3xl font-black text-white">

                                Offline Ready

                            </h3>

                            <p className="mt-2 text-slate-300">

                                Learn without interruption

                            </p>

                        </div> */}

                    </motion.div>

                </div>

                {/* Bottom Highlights */}

                <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {highlights.map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
                        >

                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                {index === 0 && (
                                    <WifiOff
                                        className="text-white"
                                        size={28}
                                    />
                                )}

                                {index === 1 && (
                                    <RefreshCw
                                        className="text-white"
                                        size={28}
                                    />
                                )}

                                {index === 2 && (
                                    <HardDrive
                                        className="text-white"
                                        size={28}
                                    />
                                )}

                                {index === 3 && (
                                    <CheckCircle2
                                        className="text-white"
                                        size={28}
                                    />
                                )}

                            </div>

                            <h3 className="text-xl font-bold text-slate-900 leading-8">

                                {item}

                            </h3>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}