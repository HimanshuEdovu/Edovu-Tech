"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    BrainCircuit,
    Clock3,
    Target,
    TrendingUp,
    MessageSquare,
    Sparkles,
} from "lucide-react";

const features = [
    {
        icon: BrainCircuit,
        title: "Cognitive Footprint",
        description:
            "The platform maps a student's unique cognitive footprint based on learning behaviour and performance.",
    },
    {
        icon: Clock3,
        title: "Response Time",
        description:
            "AI continuously evaluates response time to understand comprehension and learning pace.",
    },
    {
        icon: TrendingUp,
        title: "Historical Error Patterns",
        description:
            "Past mistakes are analyzed to identify recurring concepts requiring additional attention.",
    },
    {
        icon: Target,
        title: "Individual Pacing",
        description:
            "Learning difficulty automatically adjusts according to every student's progress and pace.",
    },
    {
        icon: Sparkles,
        title: "Localized Micro-Remediation",
        description:
            "AI recommends personalized remediation paths designed to strengthen weak concepts.",
    },
    {
        icon: MessageSquare,
        title: "AI Conversational Tutors",
        description:
            "Students receive real-time query resolution through intelligent conversational tutoring.",
    },
];

export default function PersonalizedLearningSection() {
    return (
        <section className="relative overflow-hidden bg-white py-24">

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* IMAGE */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                        className="relative"
                    >

                        <div className="overflow-hidden rounded-[36px] shadow-2xl bg-slate-100">

                            {/* Add Rural Student Image */}

                            <Image
                                src="/ruralImages/rural-2.webp"
                                alt="AI Personalized Learning"
                                width={900}
                                height={700}
                                className="h-full w-full object-cover"
                            />

                        </div>

                        <div className="absolute -bottom-8 left-8 rounded-[28px] bg-[#08111f] p-7 shadow-2xl">

                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                <BrainCircuit
                                    size={30}
                                    className="text-white"
                                />

                            </div>

                            <h3 className="text-4xl font-black text-white">

                                AI PAL

                            </h3>

                            <p className="mt-2 text-slate-300">

                                Personalized Adaptive Learning

                            </p>

                        </div>

                    </motion.div>

                    {/* CONTENT */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                    >

                        <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                            AI Enabled Personalized Adaptive Learning (PAL)

                        </span>

                        <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">

                            Personalized Learning
                            <span className="text-orange-500">

                                {" "}For Every Student

                            </span>

                        </h2>

                        <p className="mt-8 text-lg leading-8 text-slate-600">

                            The platform maps a student&apos;s unique cognitive footprint
                            based on response time, historical error patterns and
                            individual pacing.

                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">

                            It automatically alters content difficulty, suggests
                            localized micro-remediation paths and embeds AI
                            conversational tutors for real-time query resolution.

                        </p>

                    </motion.div>

                </div>

                {/* FEATURES */}

                <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {features.map((item) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={item.title}
                                whileHover={{ y: -8 }}
                                className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                    <Icon
                                        size={30}
                                        className="text-white"
                                    />

                                </div>

                                <h3 className="text-2xl font-bold text-slate-900">

                                    {item.title}

                                </h3>

                                <p className="mt-5 leading-8 text-slate-600">

                                    {item.description}

                                </p>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}