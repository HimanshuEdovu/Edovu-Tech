"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
    Globe2,
    BrainCircuit,
    BookOpen,
    Sparkles,
} from "lucide-react";

export default function K12SchoolsSection() {

    return (

        <section className="relative overflow-hidden bg-slate-50 py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* Left Image */}

                    <motion.div

                        initial={{ opacity: 0, x: -40 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: 0.7 }}

                        className="relative"

                    >

                        <div className="overflow-hidden rounded-[40px] bg-slate-200 shadow-2xl">

                            {/* Add your project image */}

                            <Image

                                src="/images/k12.png"

                                alt="K12 Online Schools"

                                width={900}

                                height={900}

                                className="h-full w-full object-cover"

                            />

                        </div>

                        {/* Floating Card */}

                        <div className="absolute -bottom-8 left-8 rounded-[32px] bg-[#08111f] p-8 shadow-2xl">

                            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                <Globe2

                                    size={32}

                                    className="text-white"

                                />

                            </div>

                            <h3 className="text-4xl font-black text-white">

                                50+

                            </h3>

                            <p className="mt-2 text-slate-300">

                                Countries Connected

                            </p>

                        </div>

                    </motion.div>

                    {/* Right Content Starts Here */}
                    {/* ================= RIGHT CONTENT ================= */}

<motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
>

    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

        Featured Project

    </span>

    <h2 className="mt-7 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">

        K12 Schools

        <span className="block text-orange-500">

            Global AI-Powered Learning Ecosystem

        </span>

    </h2>

    <p className="mt-8 text-lg leading-8 text-slate-600">

        Edovu Learn designed, developed and continues to power the
        digital ecosystem behind K12 Schools, enabling students across
        50+ countries to access world-class education through British,
        Cambridge, American and Indian curricula.

    </p>

    <p className="mt-6 text-lg leading-8 text-slate-600">

        Built on a secure cloud-native architecture, the platform
        combines AI-powered learning intelligence, virtual classrooms,
        real-time analytics and mobile-first experiences to create a
        personalized and scalable education ecosystem for students,
        teachers and parents worldwide.

    </p>

    {/* Highlights */}

    <div className="mt-10 grid gap-4 sm:grid-cols-2">

        <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">

            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">

                <Globe2
                    size={22}
                    className="text-white"
                />

            </div>

            <h4 className="font-bold text-slate-900">

                50+ Countries

            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">

                Delivering high-quality online education worldwide.

            </p>

        </div>

        <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">

            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">

                <BrainCircuit
                    size={22}
                    className="text-white"
                />

            </div>

            <h4 className="font-bold text-slate-900">

                AI Learning

            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">

                Personalized learning paths and intelligent academic insights.

            </p>

        </div>

        <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">

            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">

                <BookOpen
                    size={22}
                    className="text-white"
                />

            </div>

            <h4 className="font-bold text-slate-900">

                Global Curriculum

            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">

                British, Cambridge, American and Indian educational frameworks.

            </p>

        </div>

        <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">

            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">

                <Sparkles
                    size={22}
                    className="text-white"
                />

            </div>

            <h4 className="font-bold text-slate-900">

                Secure Cloud Platform

            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">

                Virtual classrooms, analytics, assessments and enterprise security.

            </p>

        </div>

    </div>


</motion.div>
</div>
  {/* Bottom Feature Strip */}

    <div className="mt-10 rounded-[28px] bg-[#08111f] p-10">

        <div className="grid gap-6 md:grid-cols-3 justify-items-center">

            <div>

                <h3 className="text-4xl font-black text-orange-400">

                    1500+

                </h3>

                <p className="mt-2 text-sm text-slate-300">

                    Live Learning Sessions Daily

                </p>

            </div>

            <div>

                <h3 className="text-4xl font-black text-orange-400">

                    AI

                </h3>

                <p className="mt-2 text-sm text-slate-300">

                    Learning Intelligence & Analytics

                </p>

            </div>

            <div>

                <h3 className="text-4xl font-black text-orange-400">

                    Cloud

                </h3>

                <p className="mt-2 text-sm text-slate-300">

                    Secure & Scalable Infrastructure

                </p>

            </div>

        </div>

    </div>
</div>

</section>)
}