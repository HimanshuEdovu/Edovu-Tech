"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Smartphone,
    Star,
    ArrowRight,
} from "lucide-react";

const features = [
    "App for both Students , Parents & Teachers",
    "Access from anywhere, anytime on mobile phone",
    "Get Alert of Classes, Assignments, Exams",
    "Notification for every important information",
    "Payment reminder to Parent",
];

export default function MobileAppSection() {

    return (

        <section className="relative overflow-hidden bg-white py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div

                        initial={{ opacity: 0, x: -40 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                    >

                        <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">

                            <Smartphone size={14} />

                            Mobile Experience

                        </span>

                        <h2 className="mt-8 text-5xl font-black italic text-slate-900 lg:text-6xl">

                            Mobile App

                        </h2>

                        <div className="mt-5 h-1.5 w-20 rounded-full bg-orange-500" />

                        <div className="mt-14 space-y-7">

                            {features.map((item, index) => (

                                <motion.div

                                    key={index}

                                    initial={{
                                        opacity: 0,
                                        x: -20,
                                    }}

                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}

                                    viewport={{ once: true }}

                                    transition={{
                                        delay: index * .1,
                                    }}

                                    className="flex items-start gap-5"

                                >

                                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100">

                                        <Star

                                            size={18}

                                            fill="#f97316"

                                            className="text-orange-500"

                                        />

                                    </div>

                                    <p className="text-xl leading-9 text-slate-600">

                                        {item}

                                    </p>

                                </motion.div>

                            ))}

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.div

                        initial={{ opacity: 0, x: 40 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                        className="relative flex items-center justify-center"

                    >

                        {/* Glow */}

                        <div className="absolute h-80 w-80 rounded-full bg-orange-200/30 blur-[100px]" />

                        {/* Back Phone */}

                        <div className="absolute left-6 top-8 z-0 hidden lg:block">

                            <Image

                                src="/appImages/app-1.jpg"

                                alt="Mobile App"

                                width={320}

                                height={650}

                                className="h-auto w-[260px] drop-shadow-[0_25px_50px_rgba(0,0,0,.25)]"

                            />

                        </div>

                        {/* Front Phone */}

                        <div className="relative z-10">

                            <Image

                                src="/appImages/app-2.jpg"

                                alt="Mobile App"

                                width={340}

                                height={700}

                                className="h-auto w-[280px] drop-shadow-[0_30px_60px_rgba(0,0,0,.35)] transition duration-500 hover:-translate-y-3"

                            />

                        </div>

                    </motion.div>

                </div>

                {/* Bottom Card */}

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .7 }}

                    className="relative mt-20 overflow-hidden rounded-[36px] bg-[#08111f] p-10 lg:p-14"

                >

                    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />

                    <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

                    <div className="relative flex flex-col items-center justify-center gap-8 lg:flex-row">

                        <div>

                            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">

                                Learn Anytime, Anywhere

                            </span>

                            <h3 className="mt-4 text-4xl font-black text-white">

                                Education In Your Pocket

                            </h3>

                        </div>
{/* 
                        <button className="flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 font-bold text-white shadow-xl shadow-orange-500/20 transition hover:scale-105">

                            Explore Mobile Experience

                            <ArrowRight size={18} />

                        </button> */}

                    </div>

                </motion.div>

            </div>

        </section>

    );

}