"use client";

import { motion } from "framer-motion";
import {
    BrainCircuit,
    ShieldCheck,
    Rocket,
    Globe,
    Cpu,
    Users,
} from "lucide-react";

const reasons = [
    {
        icon: BrainCircuit,
        title: "AI-First Learning",
        description:
            "Every learning experience is enhanced through AI tutoring, adaptive assessments and personalized recommendations.",
    },

    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        description:
            "Secure cloud-native architecture with role-based access, encrypted data and verified user portals.",
    },

    {
        icon: Rocket,
        title: "High Performance",
        description:
            "Designed for institutions of every size with fast loading, scalable infrastructure and 99.9% availability.",
    },

    {
        icon: Globe,
        title: "Anywhere Learning",
        description:
            "Access courses, live classes, assignments and analytics from any device and any location.",

    },

    {
        icon: Cpu,
        title: "Smart Automation",
        description:
            "Automate admissions, attendance, grading, reports and academic workflows with intelligent AI.",

    },

    {
        icon: Users,
        title: "Complete Ecosystem",
        description:
            "Student LMS, Teacher LMS, Parent LMS and School ERP connected inside one unified platform.",

    },

];

export default function WhyChooseEdovu() {

    return (

        <section className="bg-white py-28">

            <div className="mx-auto max-w-7xl px-5">

                <div className="text-center">

                    <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                        Why Choose EdovuTech

                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">

                        Built For

                        <span className="text-orange-500">

                            {" "}Future Ready Institutions

                        </span>

                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

                        A modern AI-powered ecosystem designed to improve
                        learning outcomes, simplify administration and deliver
                        exceptional educational experiences.

                    </p>

                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {reasons.map((item) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                key={item.title}

                                whileHover={{
                                    y: -10,
                                }}

                                className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-2xl"

                            >

                                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-lg shadow-orange-500/30">

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