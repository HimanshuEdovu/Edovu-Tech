"use client";

import { motion } from "framer-motion";
import {
    Target,
    Search,
    Lightbulb,
    Users,
    Globe2,
    Rocket,
} from "lucide-react";

const highlights = [
    {
        icon: Target,
        title: "Outcome-Driven Learning",
        description: "Clear learning goals and measurable outcomes",
    },
    {
        icon: Search,
        title: "Inquiry-Based Learning",
        description: "Encourages curiosity, exploration, and discovery",
    },
    {
        icon: Lightbulb,
        title: "Conceptual Understanding",
        description: "Focus on deep learning rather than memorization",
    },
    {
        icon: Users,
        title: "21st Century Skills",
        description:
            "Critical thinking, creativity, collaboration, and communication",
    },
    {
        icon: Globe2,
        title: "Real-World Connections",
        description:
            "Learning linked to authentic contexts and experiences",
    },
    {
        icon: Rocket,
        title: "Future-Ready Education",
        description:
            "Preparing learners for success in a dynamic world",
    },
];

export default function CurriculumHighlights() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="mx-auto max-w-4xl text-center">

                    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                        Key Highlights

                    </span>

                    <h2 className="mt-7 text-5xl font-black text-slate-900">

                        Key Highlights

                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">

                        The Edovu Curriculum is designed to create meaningful
                        learning experiences through inquiry, conceptual
                        understanding, skill development, and real-world
                        application.

                    </p>

                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {highlights.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                key={item.title}

                                initial={{ opacity: 0, y: 30 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{
                                    duration: .5,
                                    delay: index * .1,
                                }}

                                whileHover={{
                                    y: -8,
                                }}

                                className="group rounded-[32px] border border-white/20 bg-white/70 p-8 backdrop-blur-xl shadow-lg transition-all hover:border-orange-200 hover:shadow-2xl"

                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-lg shadow-orange-500/20 transition group-hover:scale-110">

                                    <Icon
                                        size={30}
                                        className="text-white"
                                    />

                                </div>

                                <h3 className="text-2xl font-black text-slate-900">

                                    {item.title}

                                </h3>

                                <p className="mt-5 text-lg leading-8 text-slate-600">

                                    {item.description}

                                </p>

                            </motion.div>

                        );

                    })}

                </div>

                {/* Bottom Premium Banner */}

                <motion.div

                    initial={{ opacity: 0, y: 40 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .7 }}

                    className="relative mt-24 overflow-hidden rounded-[40px] bg-[#08111f] p-14"

                >

                    <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

                    <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

                    <div className="relative mx-auto max-w-5xl text-center">

                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                            Future-Ready Education

                        </span>

                        <h2 className="mt-8 text-5xl font-black leading-tight text-white">

                            Preparing learners for success in a dynamic world

                        </h2>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}