"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    MonitorPlay,
    Sparkles,
    BrainCircuit,
} from "lucide-react";

export default function DigitalAssetsOverview() {
    return (
        <section className="relative overflow-hidden bg-white py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Image */}

                    <motion.div

                        initial={{ opacity: 0, x: -40 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                        className="relative"

                    >

                        <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-slate-100 shadow-2xl">

                            {/* Add Image */}

                            <Image

                                src="/contentImages/digital-assets.png"

                                alt="Digital Assets"

                                width={900}

                                height={900}

                                className="h-full w-full object-cover"

                            />

                        </div>

                        {/* Floating Card */}

                        <div className="absolute -bottom-8 left-8 rounded-[30px] bg-[#08111f] p-7 shadow-2xl">

                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                <MonitorPlay

                                    size={32}

                                    className="text-white"

                                />

                            </div>

                            <h3 className="text-4xl font-black text-white">

                                Digital

                            </h3>

                            <p className="mt-2 text-slate-300">

                                Interactive Learning Resources

                            </p>

                        </div>

                    </motion.div>

                    {/* Content */}

                    <motion.div

                        initial={{ opacity: 0, x: 40 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .7 }}

                    >

                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                            Digital Assets

                        </span>

                        <h2 className="mt-7 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">

                            Interactive Resources

                            <span className="block text-orange-500">

                                For Meaningful Learning

                            </span>

                        </h2>

                        <p className="mt-8 text-lg leading-9 text-slate-600">

                            Learning extends beyond the classroom with Edovu’s rich collection of digital resources designed to make education interactive, engaging, and accessible. These tools help students visualize concepts, explore ideas, practice skills, and learn at their own pace.

                        </p>

                        <p className="mt-6 text-lg leading-9 text-slate-600">

                            From concept videos and interactive learning modules to simulations, educational games, flashcards, and concept maps, every resource is carefully developed to make learning meaningful and enjoyable. These digital tools encourage active participation, self-paced learning, and deeper conceptual understanding while supporting teachers in delivering dynamic and engaging lessons.

                        </p>

                        <p className="mt-6 text-lg leading-9 text-slate-600">

                            By seamlessly integrating technology into the learning process, Edovu creates a blended learning ecosystem that extends beyond textbooks and classrooms, empowering students to learn anytime, anywhere.

                        </p>

                     
                    </motion.div>

                </div>

            </div>

        </section>
    );
}