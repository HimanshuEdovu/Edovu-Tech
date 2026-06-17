"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
    BrainCircuit,
    Bot,
    Sparkles,
    BarChart3,
    ClipboardCheck,
    TrendingUp,
} from "lucide-react";
import {
    GraduationCap,
    Clock3,
} from "lucide-react";

const benefits = [
    {
        icon: GraduationCap,
        title: "Increased Student Engagement",
        description:
            "Interactive AI-driven experiences keep learners motivated and involved.",
    },
    {
        icon: TrendingUp,
        title: "Improved Academic Outcomes",
        description:
            "Personalized learning paths help students achieve better results.",
    },
    {
        icon: Clock3,
        title: "Reduced Administrative Workload",
        description:
            "Automated grading and AI assistance save valuable educator time.",
    },
    {
        icon: BarChart3,
        title: "Data-Driven Decision Making",
        description:
            "Real-time analytics provide actionable insights for institutions.",
    },
    {
        icon: Sparkles,
        title: "Enhanced Learning Personalization",
        description:
            "Every learner receives tailored recommendations and resources.",
    },
];


const features = [
    {
        icon: BrainCircuit,
        title: "Personalized Learning Paths",
        description:
            "AI analyzes student performance and recommends customized learning content, activities and assessments.",
    },

    {
        icon: Sparkles,
        title: "Smart Content Recommendations",
        description:
            "Students receive course materials based on interests, learning behavior and academic progress.",
    },

    {
        icon: ClipboardCheck,
        title: "Automated Assessment & Evaluation",
        description:
            "AI-assisted grading reduces educator workload while providing faster feedback.",
    },

    {
        icon: BarChart3,
        title: "Learning Analytics Dashboard",
        description:
            "Track attendance, engagement, progress and performance with real-time insights.",
    },

    {
        icon: Bot,
        title: "AI Learning Assistant",
        description:
            "A virtual assistant helps students find resources and answer course-related questions instantly.",
    },

    {
        icon: TrendingUp,
        title: "Predictive Performance Monitoring",
        description:
            "Identify at-risk students early and provide targeted academic interventions.",
    },
];

// const benefits = [
//     "Increased Student Engagement",
//     "Improved Academic Outcomes",
//     "Reduced Administrative Workload",
//     "Data-Driven Decision Making",
//     "Enhanced Learning Personalization",
// ];

export default function AIShowcaseSection() {
    return (
        <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-7xl">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Image */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        <div className="overflow-hidden rounded-[32px] shadow-2xl">

                            <Image
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
                                width={900}
                                height={900}
                                alt="AI Powered LMS"
                                className="h-full w-full object-cover"
                            />

                        </div>

                        <div className="absolute -bottom-8 left-8 rounded-3xl bg-[#08111f] p-6 shadow-2xl">

                            <BrainCircuit
                                size={42}
                                className="mb-3 text-orange-400"
                            />

                            <h3 className="text-3xl font-black text-white">
                                AI LMS
                            </h3>

                            <p className="mt-2 text-slate-300">
                                Intelligent Learning Experience
                            </p>

                        </div>

                    </motion.div>

                    {/* Content */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                    >

                        <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                            AI Powered Education
                        </span>

                        <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">

                            Intelligent Learning
                            <br />

                            for Modern Education

                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">

                            Edovu Learn&apos;s AI-Powered LMS transforms traditional learning
                            into personalized educational experiences, helping institutions
                            deliver smarter teaching, deeper engagement and measurable
                            academic success.

                        </p>

                    </motion.div>

                </div>

                <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {features.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="mb-5 inline-flex rounded-2xl bg-orange-100 p-4">

                                    <Icon
                                        className="text-orange-500"
                                        size={28}
                                    />

                                </div>

                                <h3 className="text-xl font-bold">

                                    {item.title}

                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">

                                    {item.description}

                                </p>

                            </div>

                        );

                    })}

                </div>

                <section className="relative overflow-hidden rounded-[40px] bg-[#08111f] px-8 py-20 mt-10">

    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500/15 blur-[100px]" />
    <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

    <div className="relative">

        <div className="text-center">

            <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                Benefits
            </span>

            <h2 className="mt-5 text-4xl font-black text-white lg:text-5xl">
                Why Institutions Choose
                <span className="text-orange-400"> Edovu AI LMS</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
                Empower educators and learners with intelligent automation,
                personalized experiences and powerful academic insights.
            </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">

            {benefits.map((item) => {

                const Icon = item.icon;

                return (

                    <div
                        key={item.title}
                        className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-400/30 hover:bg-white/10"
                    >

                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-lg shadow-orange-500/30">

                            <Icon
                                size={30}
                                className="text-white"
                            />

                        </div>

                        <h3 className="text-xl font-bold text-white">

                            {item.title}

                        </h3>

                        <p className="mt-4 text-sm leading-7 text-slate-300">

                            {item.description}

                        </p>

                    </div>

                );

            })}

        </div>

    </div>

</section>

            </div>

        </section>
    );
}