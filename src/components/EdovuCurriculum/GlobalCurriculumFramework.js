"use client";

import { motion } from "framer-motion";
import {
    Globe2,
    BookOpen,
    GraduationCap,
} from "lucide-react";

const frameworks = [
    {
        icon: Globe2,
        title: "IB-Inspired Learning",
        description:
            "Encourages inquiry, critical thinking, reflection, and real-world connections.",
    },
    {
        icon: BookOpen,
        title: "Cambridge Approach",
        description:
            "Promotes conceptual understanding, skill development, and application-based learning.",
    },
    {
        icon: GraduationCap,
        title: "CBSE Alignment",
        description:
            "Provides strong academic foundations and structured progression across grades.",
    },
];

export default function GlobalCurriculumFramework() {
    return (
        <section className="relative overflow-hidden bg-[#fafafa] py-24">

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="mx-auto max-w-4xl text-center">

                    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                        Global Curriculum Framework

                    </span>

                    <h2 className="mt-7 text-5xl font-black text-slate-900">

                        Global Curriculum Framework

                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">

                        Our curriculum is built on a blended framework that incorporates the strengths of internationally recognized educational models, ensuring a balanced and future-ready learning experience.

                    </p>

                </div>

                <div className="relative mt-20">

                    <div className="absolute left-1/2 top-12 hidden h-1 w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 lg:block" />

                    <div className="grid gap-8 lg:grid-cols-3">

                        {frameworks.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: .6,
                                        delay: index * .15,
                                    }}
                                    whileHover={{
                                        y: -8,
                                    }}
                                    className="relative rounded-[36px] border border-slate-200 bg-white p-10 shadow-lg"
                                >

                                    <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-xl shadow-orange-500/20">

                                        <Icon
                                            size={36}
                                            className="text-white"
                                        />

                                    </div>

                                    <h3 className="text-center text-3xl font-black text-slate-900">

                                        {item.title}

                                    </h3>

                                    <p className="mt-6 text-center text-lg leading-8 text-slate-600">

                                        {item.description}

                                    </p>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="mx-auto mt-20 max-w-5xl rounded-[36px] bg-[#08111f] p-12 text-center"
                >

                    <h3 className="text-3xl font-black text-white">

                        Together, these globally recognized frameworks create a balanced learning experience that nurtures academic excellence, critical thinking, confidence, and lifelong curiosity.

                    </h3>

                </motion.div>

            </div>

        </section>
    );
}