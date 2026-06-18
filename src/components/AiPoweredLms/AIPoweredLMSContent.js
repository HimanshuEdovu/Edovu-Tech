"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    BrainCircuit,
    GraduationCap,
    Users,
    School,
    BookOpen,
    ArrowRight,
} from "lucide-react";

const platforms = [
    {
        icon: GraduationCap,
        title: "Student LMS",
        description:
            "Personalized learning paths, AI tutoring, adaptive quizzes and instant assessments.",
    },
    {
        icon: BookOpen,
        title: "Teacher LMS",
        description:
            "Manage classrooms, create content, automate grading and monitor student progress.",
    },
    {
        icon: Users,
        title: "Parent LMS",
        description:
            "Stay connected with attendance, performance analytics and academic updates.",
    },
    {
        icon: School,
        title: "School ERP",
        description:
            "Admissions, fees, attendance, examinations and curriculum in one platform.",
    },
];

export default function AIPoweredLMSContent() {
    return (
        <>
        <section className="bg-white px-5 py-24 sm:px-6 lg:px-8 ">

            <div className="mx-auto max-w-7xl">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* Image */}

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        <div className="overflow-hidden rounded-[36px] shadow-2xl">

                            <Image
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80"
                                width={900}
                                height={900}
                                alt="AI LMS"
                                className="h-full w-full object-cover"
                            />

                        </div>

                        <div className="absolute -bottom-10 left-8 rounded-[28px] bg-[#08111f] p-6 shadow-2xl">

                            <BrainCircuit
                                size={40}
                                className="mb-3 text-orange-400"
                            />

                            <h3 className="text-3xl font-black text-white">

                                AI Online
                                <br />

                                School

                            </h3>

                            <p className="mt-3 text-slate-300">

                                Smart • Interactive • Personalized

                            </p>

                        </div>

                    </motion.div>

                    {/* Content */}

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                    >

                        <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                            AI Online School Learning Platform

                        </span>

                        <h2 className="mt-7 text-5xl font-black leading-tight text-slate-900">

                            Intelligent Learning

                            <br />

                            for Every Student

                        </h2>

                        <p className="mt-7 text-lg leading-8 text-slate-600">

                            EdovuLearn LMS platform supports AI enabled online
                            school, virtual classroom technology, online school
                            with AI learning, online learning management
                            systems and interactive virtual school platforms
                            designed for modern institutions.

                        </p>

                        <div className="mt-10 space-y-5">

                            {[
                                "AI enabled online school",
                                "Virtual classroom technology",
                                "Online school with AI learning",
                                "Online learning management system school",
                                "Interactive virtual school platform",
                            ].map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-4"
                                >

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100">

                                        <ArrowRight
                                            size={18}
                                            className="text-orange-500"
                                        />

                                    </div>

                                    <span className="font-semibold text-slate-700">

                                        {item}

                                    </span>

                                </div>

                            ))}

                        </div>

                    </motion.div>

                </div>
            </div>

        </section>

        <section className=" px-5 my-20 sm:px-6 lg:px-8">
            
                {/* Platform Cards */}

                <div className=" mx-auto max-w-7xl">

                    <div className="text-center">

                        <span className="rounded-full bg-[#08111f] px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                            Platform Ecosystem

                        </span>

                        <h2 className="mt-6 text-5xl font-black text-slate-900">

                            Everything Connected

                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

                            One intelligent platform supporting students,
                            teachers, parents and educational institutions with
                            AI-powered learning and ERP capabilities.

                        </p>

                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        {platforms.map((item) => {

                            const Icon = item.icon;

                            return (

                                <motion.div
                                    key={item.title}
                                    whileHover={{ y: -8 }}
                                    className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
                                >

                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                        <Icon
                                            size={30}
                                            className="text-white"
                                        />

                                    </div>

                                    <h3 className="text-2xl font-bold">

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
        </>
    );
}