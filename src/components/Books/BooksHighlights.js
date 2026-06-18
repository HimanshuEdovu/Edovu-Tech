"use client";

import { motion } from "framer-motion";
import {
    BookOpen,
    PencilLine,
    ClipboardCheck,
    Target,
    BrainCircuit,
    Rocket,
} from "lucide-react";

const highlights = [
    {
        icon: BookOpen,
        title: "Student Book",
        description: "Concept Learning & Guided Exploration",
    },
    {
        icon: PencilLine,
        title: "Activity Book",
        description: "Hands-On Practice & Skill Building",
    },
    {
        icon: ClipboardCheck,
        title: "Assessment Book",
        description: "Competency-Based Evaluation",
    },
    {
        icon: Target,
        title: "Learning Outcomes",
        description: "Clear Goals and Progress Tracking",
    },
    {
        icon: BrainCircuit,
        title: "Concept Mastery",
        description: "Deep Understanding and Application",
    },
    {
        icon: Rocket,
        title: "Learner Confidence",
        description: "Support for Continuous Growth",
    },
];

export default function BooksHighlights() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Heading */}

                <div className="mx-auto max-w-4xl text-center">

                    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                        Key Highlights

                    </span>

                    <h2 className="mt-7 text-5xl font-black text-slate-900">

                        Everything Students Need To Learn With Confidence

                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">

                        Every resource is carefully designed to strengthen conceptual understanding, encourage active participation, and support continuous academic growth.

                    </p>

                </div>

                {/* Cards */}

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
                                    delay: index * .08,
                                }}

                                whileHover={{
                                    y: -8,
                                }}

                                className="group rounded-[32px] border border-white/30 bg-white/80 p-8 shadow-lg backdrop-blur-xl transition-all hover:border-orange-200 hover:shadow-2xl"

                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-lg shadow-orange-500/20 transition-all group-hover:scale-110">

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

                {/* Bottom CTA */}

                <motion.div

                    initial={{ opacity: 0, y: 40 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .7 }}

                    className="relative mt-24 overflow-hidden rounded-[40px] bg-[#08111f] p-14 lg:p-20"

                >

                    <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

                    <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

                    <div className="relative mx-auto max-w-5xl text-center">

                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                            Future-Ready Learning Resources

                        </span>

                        <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-6xl">

                            From Concept Learning To Learner Confidence

                        </h2>

                        <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">

                            Supporting every learner through concept acquisition, skill practice, application, assessment, and continuous academic growth.

                        </p>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}