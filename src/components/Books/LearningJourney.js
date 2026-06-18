"use client";

import { motion } from "framer-motion";
import {
    BookOpen,
    PencilLine,
    ClipboardCheck,
    ArrowRight,
} from "lucide-react";

const journey = [
    {
        icon: BookOpen,
        title: "Student Book",
        description:
            "Designed to build strong conceptual foundations through engaging content, guided exploration, real-world connections, and thought-provoking activities that make learning meaningful and relevant.",
    },
    {
        icon: PencilLine,
        title: "Activity Book",
        description:
            "Encourages hands-on learning through practice exercises, projects, investigations, and application-based tasks that help students reinforce concepts, develop skills, and learn by doing.",
    },
    {
        icon: ClipboardCheck,
        title: "Assessment Book",
        description:
            "Supports continuous and competency-based evaluation through formative and summative assessments, helping teachers track progress while enabling students to reflect on and improve their learning.",
    },
];

export default function LearningJourney() {
    return (
        <section className="relative overflow-hidden bg-white py-24">

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="mx-auto max-w-4xl text-center">

                    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                        Learning Journey

                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">

                        From Understanding To Assessment

                    </h2>

                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">

                        Together, these resources provide a complete learning pathway—from concept acquisition and skill practice to application and assessment—ensuring every learner progresses with confidence and clarity.

                    </p>

                </div>

                <div className="mt-20 grid gap-10 lg:grid-cols-3">

                    {journey.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                key={item.title}

                                initial={{ opacity: 0, y: 40 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{
                                    duration: .6,
                                    delay: index * .2,
                                }}

                                className="relative rounded-[36px] border border-slate-200 bg-white p-10 shadow-xl"

                            >

                                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-xl shadow-orange-500/20">

                                    <Icon
                                        size={36}
                                        className="text-white"
                                    />

                                </div>

                                <h3 className="text-3xl font-black text-slate-900">

                                    {item.title}

                                </h3>

                                <p className="mt-6 leading-8 text-slate-600">

                                    {item.description}

                                </p>

                                {index !== journey.length - 1 && (

                                    <div className="absolute -right-7 top-1/2 hidden -translate-y-1/2 lg:flex">

                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 shadow-lg">

                                            <ArrowRight
                                                className="text-white"
                                                size={24}
                                            />

                                        </div>

                                    </div>

                                )}

                            </motion.div>

                        );

                    })}

                </div>

                {/* Bottom Highlight */}

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .7 }}

                    className="relative mt-24 overflow-hidden rounded-[40px] bg-[#08111f] p-14"

                >

                    <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

                    <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

                    <div className="relative mx-auto max-w-5xl text-center">

                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                            Complete Learning Pathway

                        </span>

                        <h3 className="mt-8 text-4xl font-black leading-tight text-white lg:text-5xl">

                            Together, these resources provide a complete learning pathway—from concept acquisition and skill practice to application and assessment—ensuring every learner progresses with confidence and clarity.

                        </h3>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}