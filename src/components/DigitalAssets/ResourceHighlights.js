"use client";

import { motion } from "framer-motion";
import {
    PlayCircle,
    MonitorPlay,
    FlaskConical,
    Gamepad2,
    CreditCard,
    BrainCircuit,
    Microscope,
    ClipboardCheck,
} from "lucide-react";

const resources = [
    {
        icon: PlayCircle,
        title: "Concept Videos & Animations",
        description: "Simplify complex concepts through visual learning.",
    },
    {
        icon: MonitorPlay,
        title: "Interactive Learning Modules",
        description:
            "Engaging activities that promote exploration and understanding.",
    },
    {
        icon: FlaskConical,
        title: "Simulations & Virtual Labs",
        description:
            "Hands-on learning experiences in a safe digital environment.",
    },
    {
        icon: Gamepad2,
        title: "Educational Games",
        description:
            "Reinforce concepts through fun and interactive challenges.",
    },
    {
        icon: CreditCard,
        title: "Flashcards",
        description:
            "Quick revision and knowledge reinforcement.",
    },
    {
        icon: BrainCircuit,
        title: "Concept Maps",
        description:
            "Help learners connect ideas and build conceptual clarity.",
    },
    {
        icon: Microscope,
        title: "STEM Resources",
        description:
            "Encourage innovation, experimentation, and problem-solving.",
    },
    {
        icon: ClipboardCheck,
        title: "Online Assessments",
        description:
            "Track learning progress through competency-based evaluations.",
    },
];

export default function ResourceHighlights() {
    return (<>
        <section className="relative overflow-hidden bg-slate-50 py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Heading */}

                <div className="mx-auto max-w-4xl text-center">

                    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                        Digital Resources Included

                    </span>

                    <h2 className="mt-7 text-5xl font-black text-slate-900">

                        Complete Digital Learning Toolkit

                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">

                        Every digital resource is designed to support interactive learning, conceptual understanding, self-paced practice, and competency-based education.

                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {resources.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                key={item.title}

                                initial={{ opacity: 0, y: 30 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{
                                    duration: .5,
                                    delay: index * .08,
                                }}

                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                }}

                                className="group rounded-[30px] border border-white/30 bg-white/80 p-8 shadow-lg backdrop-blur-xl transition-all hover:border-orange-200 hover:shadow-2xl"

                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-lg shadow-orange-500/20 transition-all duration-300 group-hover:scale-110">

                                    <Icon

                                        size={30}

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

        

            </div>

        </section>
        <section className="relative overflow-hidden bg-white py-24">
                    {/* Premium Bottom Banner */}

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .7 }}

                    className="relative mt-6 mx-auto w-[80%] overflow-hidden rounded-[40px] bg-[#08111f] p-14 lg:p-20"

                >

                    <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

                    <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

                    <div className="relative mx-auto max-w-5xl text-center">

                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                            Digital Learning Ecosystem

                        </span>

                        <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-6xl">

                            Learning Anytime,

                            <span className="block text-orange-400">

                                Anywhere

                            </span>

                        </h2>

                        <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">

                            By seamlessly integrating technology into the learning process, Edovu creates a blended learning ecosystem that extends beyond textbooks and classrooms, empowering students to learn anytime, anywhere.

                        </p>

                    </div>

                </motion.div>
        </section>
        </>
    );
}