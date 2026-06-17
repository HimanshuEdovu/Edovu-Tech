"use client";

import { motion } from "framer-motion";
import {
    Languages,
    Bot,
    BrainCircuit,
    MessageCircle,
    Mic,
    GraduationCap,
    ArrowRight,
} from "lucide-react";

const tutoringFeatures = [
    {
        icon: Languages,
        title: "Doubt Clearing in Regional Language",
        description:
            "Voice enabled Mobile app to communicate in regional language and helps to clear student’s doubt instantly. All answers will be appropriate to the student’s grade.",
        color: "from-orange-500 to-orange-400",
    },
    {
        icon: Bot,
        title: "Socratic AI Tutoring",
        description:
            "It acts as a Virtual AI Teacher. When a student is stuck, the Mobile App doesn't just give the answer. The AI teacher asks guiding to lead them to the solution.",
        color: "from-cyan-500 to-cyan-400",
    },
    {
        icon: BrainCircuit,
        title: "AI Mentoring",
        description:
            "Personalized AI mentoring: Identifying core strengths and weaknesses to guide students toward better academic outcomes.",
        color: "from-purple-500 to-indigo-500",
    },
    {
        icon: GraduationCap,
        title: "Skill Development",
        description:
            "Learn English Communication: Learn English communication through mobile app. It’s a contextual and vernacular learning and English conversation with AI will build confidence.",
        color: "from-emerald-500 to-teal-500",
    },
];

export default function IntelligentTutoringSection() {
    return (
        <section className="relative overflow-hidden bg-[#08111f] py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Heading */}

                <div className="text-center">

                    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                        Intelligent Tutoring System (ITS)

                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white lg:text-6xl">

                        Every Student Gets
                        <span className="text-orange-400">

                            {" "}A Personal AI Teacher

                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">

                        Intelligent tutoring designed to provide instant support,
                        personalized mentoring and contextual learning experiences
                        for every learner.

                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2">

                    {tutoringFeatures.map((item, index) => {

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
                                    delay: index * .1,
                                }}

                                viewport={{
                                    once: true,
                                }}

                                whileHover={{
                                    y: -8,
                                }}

                                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/20"

                            >

                                <div className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color}`}>

                                    <Icon
                                        size={36}
                                        className="text-white"
                                    />

                                </div>

                                <h3 className="text-3xl font-black text-white">

                                    {item.title}

                                </h3>

                                <p className="mt-6 leading-8 text-slate-300">

                                    {item.description}

                                </p>

                                <div className="mt-8 flex items-center gap-2 text-orange-400 font-semibold">

                                    Learn More

                                    <ArrowRight
                                        size={18}
                                        className="transition group-hover:translate-x-1"
                                    />

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

                {/* Bottom Stats */}

                <div className="mt-20 rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

                    <div className="grid gap-8 md:grid-cols-3">

                        <div className="text-center">

                            <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-3xl bg-orange-500">

                                <Mic
                                    className="text-white"
                                    size={34}
                                />

                            </div>

                            <h3 className="mt-6 text-3xl font-black text-white">

                                Voice Enabled

                            </h3>

                            <p className="mt-3 text-slate-300">

                                Regional language interaction through mobile devices.

                            </p>

                        </div>

                        <div className="text-center">

                            <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-3xl bg-cyan-500">

                                <MessageCircle
                                    className="text-white"
                                    size={34}
                                />

                            </div>

                            <h3 className="mt-6 text-3xl font-black text-white">

                                Contextual Learning

                            </h3>

                            <p className="mt-3 text-slate-300">

                                AI adapts conversations according to every student's grade.

                            </p>

                        </div>

                        <div className="text-center">

                            <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-cyan-500">

                                <BrainCircuit
                                    className="text-white"
                                    size={34}
                                />

                            </div>

                            <h3 className="mt-6 text-3xl font-black text-white">

                                Personalized Growth

                            </h3>

                            <p className="mt-3 text-slate-300">

                                AI continuously identifies strengths and weaknesses to improve outcomes.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}