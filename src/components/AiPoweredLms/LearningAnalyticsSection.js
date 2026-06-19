"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    PlayCircle,
    Gamepad2,
    BrainCircuit,
    BarChart3,
    CheckCircle2,
    MonitorPlay,
} from "lucide-react";

const learningFeatures = [
    {
        icon: BrainCircuit,
        title: "Interactive Learning",
        description:
            "Transform learning into an experience with gamified lessons designed to make complex concepts stick. With instant AI assessments following every topic, students move from 'just studying' to true mastery.",
    },
    {
        icon: Gamepad2,
        title: "Gamification & Immersive Content",
        description:
            "Our AI LMS features adaptive quizzing that evolves in difficulty based on every answer. We also offer immersive simulations, bringing virtual labs and real-world scenarios directly to the student's screen.",
    },
    {
        icon: PlayCircle,
        title: "Learning Videos & Simulators",
        description:
            "Learning Videos and Simulators serve as the bridge between theoretical knowledge and practical application. Simulators allow students to engage in Learning by Doing, proven to increase long-term retention.",
    },
];

const analytics = [
    {
        icon: BarChart3,
        title: "Bloom Taxonomy-based Analytics",
        description:
            "Bloom's Taxonomy-based analytics provides a granular look at a student's cognitive depth.",
    },
    {
        icon: BrainCircuit,
        title: "Performance Analytics",
        description:
            "Performance Analytics transforms raw data into predictive insights and actionable suggestions. By tracking every interaction, the AI creates a 360-degree view of a student's academic journey.",
    },
    {
        icon: CheckCircle2,
        title: "Attendance & Assessment Monitoring",
        description:
            "Assessment and Attendance become real-time data streams that provide deep insights into student reliability and academic integrity.",
    },
];

export default function LearningAnalyticsSection() {
    return (
        <section className="bg-slate-50 py-24">

            <div className="mx-auto max-w-7xl px-5">

                {/* Heading */}

                <div className="text-center">

                    <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                        Technology Enhanced Learning

                    </span>

                    <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">

                        Learning Beyond
                        <span className="text-orange-500">

                            {" "}Traditional Classrooms

                        </span>

                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

                        AI-powered education combines interactive experiences,
                        adaptive learning and immersive simulations to improve
                        engagement and long-term knowledge retention.

                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 space-y-12">

                    <div className="mt-20 space-y-24">

                        {/* SECTION 1 */}

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .6 }}
                            className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2"
                        >

                            <div>

                                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-xl">

                                    <BrainCircuit
                                        size={38}
                                        className="text-white"
                                    />

                                </div>

                                <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                                    Interactive Learning

                                </span>

                                <h3 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">

                                    Transform Learning Into
                                    An Experience

                                </h3>

                                <p className="mt-6 text-base leading-7 sm:text-lg sm:leading-8 text-slate-600">

                                    Transform learning into an experience with gamified lessons
                                    designed to make complex concepts stick. With instant AI
                                    assessments following every topic, students move from just
                                    studying to true mastery.

                                </p>

                            </div>

                            <div>

                                <div className="overflow-hidden rounded-[40px] shadow-2xl">

                                    <Image

                                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80"

                                        width={900}

                                        height={700}

                                        alt="Interactive Learning"

                                            className="h-full w-full object-cover"


                                    />

                                </div>

                            </div>

                        </motion.div>

                        {/* SECTION 2 */}

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .6 }}
className="relative overflow-hidden rounded-[40px] bg-[#08111f] p-6 sm:p-8 lg:p-12"                        >

                            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

                            <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2">

                                <div>

                                    <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                                        Gamification

                                    </span>

                                    <h3 className="mt-6 text-5xl font-black text-white">

                                        Gamification &
                                        Immersive Content

                                    </h3>

                                    <p className="mt-6 text-lg leading-8 text-slate-300">

                                        Our AI LMS features adaptive quizzing that evolves in
                                        difficulty based on every answer. We also offer immersive
                                        simulations, bringing virtual labs and real-world scenarios
                                        directly to the student&apos;s screen.

                                    </p>

                                </div>

                                <div className="grid gap-6">

                                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                                        <Gamepad2
                                            className="mb-4 text-orange-400"
                                            size={34}
                                        />

                                        <h4 className="text-2xl font-bold text-white">

                                            Adaptive Quizzing

                                        </h4>

                                    </div>

                                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                                        <MonitorPlay
                                            className="mb-4 text-orange-400"
                                            size={34}
                                        />

                                        <h4 className="text-2xl font-bold text-white">

                                            Virtual Simulations

                                        </h4>

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                        {/* SECTION 3 */}

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .6 }}
                            className="rounded-[40px] bg-gradient-to-r from-orange-50 to-cyan-50 p-6 sm:p-8 lg:p-12"                        >

                            <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2">

                                <div>

                                    <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-[40px] shadow-2xl">
                                        <Image

                                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80"

                                            fill

                                            alt="Learning Videos"

                                            className="object-cover"

                                        />

                                    </div>

                                </div>

                                <div>

                                    <span className="rounded-full bg-cyan-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">

                                        Learning Videos

                                    </span>

                                    <h3 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">

                                        Learning Videos &
                                        Simulators

                                    </h3>

                                    <p className="mt-6 text-base leading-7 sm:text-lg sm:leading-8 text-slate-600">

                                        Learning Videos and Simulators serve as the bridge between
                                        theoretical knowledge and practical application.
                                        Simulators allow students to engage in Learning by Doing,
                                        proven to increase long-term retention.

                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    </div>
                </div>

            </div>

            {/* Analytics Section */}

            <section className="relative mt-32 overflow-hidden bg-[#08111f] py-24">

                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

                <div className="relative mx-auto max-w-7xl px-5">

                    <div className="text-center">

                        <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                            Real-Time Tracking & Learning Analytics

                        </span>

                        <h2 className="mt-6 text-5xl font-black text-white">

                            Data Driven
                            <span className="text-orange-400">

                                {" "}Academic Intelligence

                            </span>

                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

                            Transform every interaction into meaningful insights
                            that improve engagement, learning outcomes and
                            institutional performance.

                        </p>

                    </div>

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {analytics.map((item) => {

                            const Icon = item.icon;

                            return (

                                <motion.div

                                    whileHover={{ y: -10 }}

                                    key={item.title}

                                    className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

                                >

                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                        <Icon
                                            size={30}
                                            className="text-white"
                                        />

                                    </div>

                                    <h3 className="text-2xl font-bold text-white">

                                        {item.title}

                                    </h3>

                                    <p className="mt-5 leading-8 text-slate-300">

                                        {item.description}

                                    </p>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </section>

        </section>
    );
}