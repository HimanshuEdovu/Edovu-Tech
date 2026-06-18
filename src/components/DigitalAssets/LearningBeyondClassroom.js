"use client";

import { motion } from "framer-motion";
import {
    Laptop,
    BrainCircuit,
    GraduationCap,
} from "lucide-react";

export default function LearningBeyondClassroom() {
    return (
        <section className="relative overflow-hidden bg-[#08111f] py-24">

            {/* Background Glow */}

            <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="mx-auto max-w-5xl text-center">

                    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                        Blended Learning Ecosystem

                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

                        Learning Beyond

                        <span className="block text-orange-400">

                            The Classroom

                        </span>

                    </h2>

                    <p className="mx-auto mt-10 max-w-4xl text-xl leading-9 text-slate-300">

                        By seamlessly integrating technology into the learning process, Edovu creates a blended learning ecosystem that extends beyond textbooks and classrooms, empowering students to learn anytime, anywhere.

                    </p>

                </div>

                {/* Feature Cards */}

                <div className="mt-20 grid gap-8 lg:grid-cols-3">

                    <motion.div

                        initial={{ opacity: 0, y: 30 }}

                        whileInView={{ opacity: 1, y: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .6 }}

                        whileHover={{ y: -8 }}

                        className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

                    >

                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                            <Laptop

                                size={30}

                                className="text-white"

                            />

                        </div>

                        <h3 className="text-2xl font-black text-white">

                            Interactive Learning

                        </h3>

                        <p className="mt-5 leading-8 text-slate-300">

                            Learning extends beyond the classroom with Edovu’s rich collection of digital resources designed to make education interactive, engaging, and accessible.

                        </p>

                    </motion.div>

                    <motion.div

                        initial={{ opacity: 0, y: 30 }}

                        whileInView={{ opacity: 1, y: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                        whileHover={{ y: -8 }}

                        className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

                    >

                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                            <BrainCircuit

                                size={30}

                                className="text-white"

                            />

                        </div>

                        <h3 className="text-2xl font-black text-white">

                            Conceptual Understanding

                        </h3>

                        <p className="mt-5 leading-8 text-slate-300">

                            These digital tools encourage active participation, self-paced learning, and deeper conceptual understanding while supporting teachers in delivering dynamic and engaging lessons.

                        </p>

                    </motion.div>

                    <motion.div

                        initial={{ opacity: 0, y: 30 }}

                        whileInView={{ opacity: 1, y: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .8 }}

                        whileHover={{ y: -8 }}

                        className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

                    >

                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                            <GraduationCap

                                size={30}

                                className="text-white"

                            />

                        </div>

                        <h3 className="text-2xl font-black text-white">

                            Learn Anytime, Anywhere

                        </h3>

                        <p className="mt-5 leading-8 text-slate-300">

                            By seamlessly integrating technology into the learning process, Edovu creates a blended learning ecosystem that extends beyond textbooks and classrooms, empowering students to learn anytime, anywhere.

                        </p>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}