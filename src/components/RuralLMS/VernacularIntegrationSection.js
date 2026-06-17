"use client";

import { motion } from "framer-motion";
import {
    Languages,
    PlayCircle,
    FlaskConical,
    BookOpen,
    FileText,
    CheckCircle2,
} from "lucide-react";

const features = [
    {
        icon: Languages,
        title: "Regional-Medium Curriculum",
        description:
            "Full support for regional-medium curriculum designed for inclusive and accessible learning experiences.",
        color: "from-orange-500 to-orange-400",
    },
    {
        icon: PlayCircle,
        title: "Interactive Videos",
        description:
            "Engaging multimedia lessons that simplify concepts and improve classroom participation.",
        color: "from-cyan-500 to-cyan-400",
    },
    {
        icon: FlaskConical,
        title: "Interactive Simulations",
        description:
            "Hands-on digital simulations that encourage practical understanding and experiential learning.",
        color: "from-emerald-500 to-teal-500",
    },
    {
        icon: BookOpen,
        title: "Digital E-Books",
        description:
            "Curriculum aligned e-books accessible anytime across devices for uninterrupted learning.",
        color: "from-purple-500 to-indigo-500",
    },
];

export default function VernacularIntegrationSection() {
    return (
        <section className="relative overflow-hidden bg-[#f8fafc] py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Heading */}

                <div className="text-center">

                    <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                        Vernacular Content Integration

                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900 lg:text-6xl">

                        Learning In

                        <span className="text-orange-500">

                            {" "}Every Language

                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-600">

                        Full support for regional-medium curriculum, including
                        interactive videos, simulations and e-books aligned
                        with the SCERT syllabus.

                    </p>

                </div>

                {/* Feature Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {features.map((item) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                key={item.title}

                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                transition={{
                                    duration: .6,
                                }}

                                viewport={{
                                    once: true,
                                }}

                                whileHover={{
                                    y: -8,
                                }}

                                className="rounded-[32px] bg-white p-8 shadow-lg transition-all duration-300"

                            >

                                <div className={`mb-8 flex h-18 w-18 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color} p-5 shadow-xl`}>

                                    <Icon
                                        size={34}
                                        className="text-white"
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

                {/* Bottom Highlight */}

                <div className="mt-20 rounded-[36px] bg-gradient-to-r from-[#08111f] to-[#14253f] p-12 text-white">

                    <div className="grid items-center gap-10 lg:grid-cols-2">

                        <div>

                            <span className="rounded-full bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                                SCERT Aligned Learning

                            </span>

                            <h3 className="mt-6 text-4xl font-black">

                                Designed For Every
                                <span className="text-orange-400">

                                    {" "}Regional Classroom

                                </span>

                            </h3>

                            <p className="mt-6 text-lg leading-8 text-slate-300">

                                Delivering localized educational experiences
                                through multilingual content, engaging
                                simulations and curriculum aligned digital
                                resources.

                            </p>

                        </div>

                        <div className="space-y-5">

                            {[
                                "Regional Language Support",
                                "Interactive Videos",
                                "Digital Simulations",
                                "Curriculum E-Books",
                                "SCERT Syllabus Alignment",
                            ].map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 backdrop-blur-xl"
                                >

                                    <CheckCircle2
                                        size={22}
                                        className="text-orange-400"
                                    />

                                    <span className="text-lg text-slate-200">

                                        {item}

                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}