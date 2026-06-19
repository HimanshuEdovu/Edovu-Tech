"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    GraduationCap,
    BrainCircuit,
    BriefcaseBusiness,
    Globe2,
    Building2,
    ArrowUpRight,
} from "lucide-react";

const highlights = [
    {
        icon: BrainCircuit,
        title: "AI-Powered Learning Experience",
        description:
            "Personalized educational journeys, adaptive content recommendations, performance insights and data-driven learner engagement strategies.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Career-Oriented Education",
        description:
            "Industry exposure, internships, certifications and career development support designed to improve employability.",
    },
    {
        icon: Globe2,
        title: "Global Learning Opportunities",
        description:
            "International educational pathways, academic collaborations and globally relevant learning experiences.",
    },
    {
        icon: Building2,
        title: "Industry & Corporate Integration",
        description:
            "Partnerships with industry experts and technology leaders to ensure workforce readiness.",
    },
    {
        icon: GraduationCap,
        title: "Scalable Digital Infrastructure",
        description:
            "Cloud-based learner management, assessments, analytics and academic administration at scale.",
    },
];

export default function EduxllSection() {

    return (

        <section className="relative overflow-hidden bg-[#08111f] py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-500/15 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div

                        initial={{ opacity: 0, x: -40 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                    >

                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                            Future Ready Higher Education

                        </span>

                        <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

                            eduXLL

                            <span className="block text-orange-400">

                                Higher Education Ecosystem

                            </span>

                        </h2>

                        <p className="mt-8 text-xl leading-9 text-slate-300">

                            Reimagining Higher Education Through AI,
                            Innovation & Career-Focused Learning.

                        </p>

                        <p className="mt-8 text-lg leading-8 text-slate-300">

                            eduXLL is a flagship digital education initiative
                            designed to bridge the gap between academic
                            learning and industry requirements.

                        </p>

                        <p className="mt-6 text-lg leading-8 text-slate-300">

                            Powered by Edovu Learn&apos;s technology ecosystem,
                            the platform enables universities, institutions,
                            professionals and learners to access high-quality
                            education, career-focused programs and emerging
                            technology training through a modern digital
                            learning environment.

                        </p>

                        {/* <button className="mt-10 flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 font-bold text-white shadow-xl shadow-orange-500/20 transition hover:scale-105">

                            Explore Platform

                            <ArrowUpRight size={18} />

                        </button> */}

                    </motion.div>

                    {/* Right */}

                    <motion.div

                        initial={{ opacity: 0, x: 40 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                        className="relative"

                    >

                        <div className="overflow-hidden rounded-[40px] bg-white/5 backdrop-blur-xl shadow-2xl">

                            {/* Replace image */}

                            <Image

                                src="/images/eduxll-2.png"

                                alt="eduXLL"

                                width={900}

                                height={900}

                                className="h-full w-full object-cover"

                            />

                        </div>

                        <div className="absolute -bottom-8 left-8 rounded-[30px] border border-white/10 bg-white/10 p-7 backdrop-blur-xl">

                            <BrainCircuit

                                className="mb-4 text-orange-400"

                                size={36}

                            />

                            <h3 className="text-4xl font-black text-white">

                                AI

                            </h3>

                            <p className="mt-2 text-slate-300">

                                Career Focused Learning

                            </p>

                        </div>

                    </motion.div>

                </div>

                {/* Highlights */}

                <div className="mt-24">

                    <div className="text-center">

                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                            Key Project Highlights

                        </span>

                        <h3 className="mt-6 text-5xl font-black text-white">

                            Designed For

                            <span className="text-orange-400">

                                {" "}Modern Learners

                            </span>

                        </h3>

                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {highlights.map((item) => {

                            const Icon = item.icon;

                            return (

                                <motion.div

                                    key={item.title}

                                    whileHover={{ y: -8 }}

                                    className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:bg-white/10"

                                >

                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                        <Icon

                                            size={30}

                                            className="text-white"

                                        />

                                    </div>

                                    <h4 className="text-2xl font-black text-white">

                                        {item.title}

                                    </h4>

                                    <p className="mt-5 leading-8 text-slate-300">

                                        {item.description}

                                    </p>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

       
            </div>

        </section>

    );

}