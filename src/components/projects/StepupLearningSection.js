"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
    GraduationCap,
    BookOpen,
    Users,
    Languages,
    BrainCircuit,
    Sparkles,
} from "lucide-react";

const features = [
    {
        icon: BrainCircuit,
        title: "Personalized Learning",
        description:
            "Customized learning pathways tailored to individual student needs.",
    },
    {
        icon: GraduationCap,
        title: "Online Homeschooling",
        description:
            "Flexible and structured education delivered through a modern digital environment.",
    },
    {
        icon: Users,
        title: "Expert Tutors",
        description:
            "Qualified educators providing personalized academic guidance and mentorship.",
    },
    {
        icon: Languages,
        title: "English Literacy Programs",
        description:
            "Building strong communication and language skills for academic success.",
    },
];

const tags = [
    "Personalized Learning",
    "K-12 Homeschooling",
    "Expert Academic Support",
    "English Language Development",
    "Interactive Online Classes",
    "Global Learning Community",
];

export default function StepupLearningSection() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-24">

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Header */}

                <div className="mx-auto max-w-4xl text-center">

                    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                        UAE Education Platform

                    </span>

                    <h2 className="mt-7 text-5xl font-black text-slate-900 lg:text-6xl">

                        StepUp Learning

                    </h2>

                    <p className="mt-5 text-2xl font-semibold text-orange-500">

                        Personalized Learning. Global Opportunities.

                    </p>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">

                        A personalized digital learning ecosystem delivering
                        homeschooling, tutoring, language development and
                        AI-enhanced education for learners across the UAE and
                        beyond.

                    </p>

                </div>

                {/* Showcase Card */}

                <motion.div

                    initial={{ opacity: 0, y: 40 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .7 }}

                    className="mt-20 overflow-hidden rounded-[40px] bg-white shadow-2xl"

                >

                    <div className="grid lg:grid-cols-[1.1fr_1fr]">

                        <div className="relative min-h-[500px]">

                            {/* Replace Image */}

                            <Image
                                src=""
                                alt="StepUp Learning"
                                fill
                                className="object-cover"
                            />

                        </div>

                        <div className="flex flex-col justify-center p-10 lg:p-14">

                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">

                                Project Overview

                            </span>

                            <h3 className="mt-5 text-4xl font-black text-slate-900">

                                Personalized Digital Education For Every Learner

                            </h3>

                            <p className="mt-7 text-lg leading-8 text-slate-600">

                                StepUp Learning is an innovative online education
                                initiative designed to provide personalized
                                academic support, homeschooling solutions and
                                language development programs for learners across
                                diverse educational backgrounds.

                            </p>

                            <p className="mt-6 text-lg leading-8 text-slate-600">

                                Powered by Edovu Learn's technology ecosystem,
                                the platform delivers engaging virtual classrooms,
                                structured curriculum, continuous academic
                                support and flexible learning experiences that
                                help every learner achieve their full potential.

                            </p>

                        </div>

                    </div>

                </motion.div>

                {/* Feature Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {features.map((item) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                whileHover={{ y: -8 }}

                                key={item.title}

                                className="rounded-[30px] bg-white p-8 shadow-lg transition"

                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                    <Icon

                                        className="text-white"

                                        size={30}

                                    />

                                </div>

                                <h3 className="text-2xl font-black text-slate-900">

                                    {item.title}

                                </h3>

                                <p className="mt-5 leading-8 text-slate-600">

                                    {item.description}

                                </p>

                            </motion.div>

                        );

                    })}

                </div>

                {/* Highlight Banner */}

                <div className="mt-20 rounded-[40px] bg-[#08111f] p-14 text-center text-white">

                    <Sparkles
                        className="mx-auto mb-6 text-orange-400"
                        size={42}
                    />

                    <h2 className="text-5xl font-black">

                        Every Learner Deserves
                        <span className="block text-orange-400">

                            Individual Attention

                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-300">

                        StepUp Learning combines personalized instruction,
                        interactive technology, academic support and digital
                        learning innovation to create a flexible environment
                        where students can thrive regardless of location while
                        achieving their educational goals with confidence.

                    </p>

                </div>

                {/* Tags */}
{/* 
                <div className="mt-16 flex flex-wrap justify-center gap-4">

                    {tags.map((tag) => (

                        <div

                            key={tag}

                            className="rounded-full border border-orange-200 bg-orange-50 px-6 py-3 font-semibold text-slate-700"

                        >

                            {tag}

                        </div>

                    ))}

                </div> */}

            </div>

        </section>
    );
}