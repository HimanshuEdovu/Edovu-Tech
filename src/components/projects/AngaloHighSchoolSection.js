"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    GraduationCap,
    BrainCircuit,
    BookOpen,
    Rocket,
    ArrowUpRight,
} from "lucide-react";

const features = [
    {
        icon: BookOpen,
        title: "Digital Learning",
        description:
            "Interactive classrooms, digital resources and modern learning tools creating engaging educational experiences.",
    },
    {
        icon: GraduationCap,
        title: "Academic Excellence",
        description:
            "Structured curriculum delivery with continuous performance improvement and holistic student development.",
    },
    {
        icon: BrainCircuit,
        title: "AI-Powered Insights",
        description:
            "Real-time analytics help educators identify learning trends and deliver personalized academic support.",
    },
    {
        icon: Rocket,
        title: "Future-Ready Skills",
        description:
            "Developing creativity, collaboration, digital literacy and critical thinking for tomorrow's leaders.",
    },
];

export default function AngaloHighSchoolSection() {
    return (
        <section className="relative overflow-hidden bg-white py-24">

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* Image */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                        className="relative"
                    >

                        <div className="overflow-hidden rounded-[40px] shadow-2xl bg-slate-200">

                            {/* Replace Image */}

                            <Image
                                src="/images/angalo.webp"
                                alt="Angalo High School"
                                width={900}
                                height={900}
                                className="h-full w-full object-cover"
                            />

                        </div>

                        <div className="absolute -bottom-8 left-8 rounded-[30px] bg-[#08111f] p-8 shadow-2xl">

                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                <GraduationCap
                                    className="text-white"
                                    size={30}
                                />

                            </div>

                            <h3 className="text-3xl font-black text-white">

                            Rural India

                            </h3>

                            <p className="mt-2 text-slate-300">

                                Digital Education

                            </p>

                        </div>

                    </motion.div>

                    {/* Content */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                    >

                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                            Featured Institution

                        </span>

                        <h2 className="mt-7 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">

                            Angalo High School

                        </h2>

                        <p className="mt-5 text-2xl font-semibold text-orange-500">

                            Empowering Future Leaders Through Global Education

                        </p>

                        <p className="mt-8 text-lg leading-8 text-slate-600">

                            Angalo High School represents Edovu Learn&apos;s commitment
                            to helping educational institutions embrace digital
                            transformation while maintaining academic excellence
                            and student success.

                        </p>

                        <p className="mt-6 text-lg leading-8 text-slate-600">

                            By integrating classroom instruction, digital learning
                            technologies, student engagement tools, academic
                            analytics and secure education management systems,
                            the institution creates a future-ready learning
                            environment where every learner can thrive.

                        </p>

                        {/* <button className="mt-10 flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 font-bold text-white shadow-xl shadow-orange-500/20 transition hover:scale-105">

                            Explore Institution

                            <ArrowUpRight size={18} />

                        </button> */}

                    </motion.div>

                </div>

                {/* Feature Cards */}

                <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {features.map((item) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                whileHover={{ y: -8 }}

                                key={item.title}

                                className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition"

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
                                {/* ================= PREMIUM HIGHLIGHT ================= */}

                <div className="relative mt-24 overflow-hidden rounded-[40px] bg-[#08111f] p-14">

                    <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

                    <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

                    <div className="relative mx-auto max-w-5xl text-center">

                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                            Preparing Students For The Future

                        </span>

                        <h2 className="mt-8 text-5xl font-black leading-tight text-white">

                            Academic Excellence

                            <span className="block text-orange-400">

                                Powered By Digital Innovation

                            </span>

                        </h2>

                        <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-300">

                            Angalo High School demonstrates how educational
                            institutions can successfully combine academic
                            excellence with modern technology to create
                            meaningful learning experiences.

                        </p>

                        <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-slate-300">

                            By integrating digital innovation with strong
                            academic foundations, the institution prepares
                            students with the knowledge, confidence and
                            skills required to succeed in an increasingly
                            connected world.

                        </p>

                    </div>

                </div>

                {/* ================= MESSAGE ================= */}
{/* 
                <motion.div

                    initial={{ opacity: 0, y: 40 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .7 }}

                    className="mt-20 overflow-hidden rounded-[36px] border border-orange-100 bg-gradient-to-r from-orange-50 to-white p-10 shadow-xl"

                >

                    <div className="grid items-center gap-10 lg:grid-cols-[180px_1fr]">

                        <div className="flex justify-center">

                            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-400 text-5xl font-black text-white shadow-xl">

                                PS

                            </div>

                        </div>

                        <div>

                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">

                                Leadership Message

                            </span>

                            <h3 className="mt-4 text-4xl font-black text-slate-900">

                                Building Future Leaders

                            </h3>

                            <p className="mt-6 text-lg leading-9 text-slate-600">

                                "Education is not only about academic
                                achievement—it is about inspiring curiosity,
                                nurturing creativity and preparing students to
                                become confident global citizens.

                                Through technology-enabled learning and
                                dedicated educators, Angalo High School
                                empowers every learner to develop critical
                                thinking, collaboration, digital literacy and
                                lifelong values that extend beyond the
                                classroom."

                            </p>

                            <div className="mt-8">

                               

                            </div>

                        </div>

                    </div>

                </motion.div> */}

                {/* ================= BOTTOM TAGS ================= */}

                {/* <div className="mt-20 flex flex-wrap justify-center gap-5">

                    {[
                        "Digital Learning",
                        "Academic Excellence",
                        "AI-Powered Education",
                        "Student Analytics",
                        "Secure Infrastructure",
                        "Future-Ready Skills",
                    ].map((item) => (

                        <div

                            key={item}

                            className="rounded-full border border-orange-200 bg-orange-50 px-7 py-4 font-semibold text-slate-700 transition hover:-translate-y-1 hover:bg-orange-500 hover:text-white"

                        >

                            {item}

                        </div>

                    ))}

                </div> */}

            </div>

        </section>

    );
}