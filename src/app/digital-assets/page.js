"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import DigitalAssetsOverview from "@/components/DigitalAssets/DigitalAssetsOverview";
import InteractiveResources from "@/components/DigitalAssets/InteractiveResources";
import LearningBeyondClassroom from "@/components/DigitalAssets/LearningBeyondClassroom";
import ResourceHighlights from "@/components/DigitalAssets/ResourceHighlights";

import { motion } from "framer-motion";
import { MonitorPlay, ArrowRight } from "lucide-react";

export default function DigitalAssetsPage() {
    return (
        <div className="min-h-screen bg-slate-50">

            <Navbar />

            <main>

                {/* Hero */}

                <section className="relative overflow-hidden bg-[#08111f] px-5 py-24 text-white sm:px-6 lg:px-8">

                    {/* Background */}

                    <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-500/15 blur-[140px]" />

                    <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

                    <div className="relative mx-auto max-w-7xl">

                        <div className="max-w-4xl">

                            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-200">

                                <MonitorPlay size={14} />

                                Digital Assets

                            </span>

                            <motion.h1

                                initial={{ opacity: 0, y: 30 }}

                                animate={{ opacity: 1, y: 0 }}

                                transition={{ duration: .7 }}

                                className="mt-7 text-5xl font-black leading-tight lg:text-7xl"

                            >

                                Interactive Digital

                                <br />

                                <span className="text-orange-400">

                                    Learning Resources

                                </span>

                            </motion.h1>

                            <motion.p

                                initial={{ opacity: 0, y: 30 }}

                                animate={{ opacity: 1, y: 0 }}

                                transition={{ duration: .8, delay: .1 }}

                                className="mt-8 max-w-3xl text-xl leading-9 text-slate-300"

                            >

                                Learning extends beyond the classroom with Edovu’s rich collection of digital resources designed to make education interactive, engaging, and accessible.

                            </motion.p>

                            <motion.div

                                initial={{ opacity: 0, y: 30 }}

                                animate={{ opacity: 1, y: 0 }}

                                transition={{ duration: .8, delay: .2 }}

                                className="mt-10 flex flex-wrap gap-5"

                            >

                                <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 font-bold text-white shadow-xl shadow-orange-500/30 transition hover:scale-105">

                                    Explore Resources

                                    <ArrowRight size={18} />

                                </button>

                            </motion.div>

                        </div>

                    </div>

                </section>

                {/* Section 1 */}

                <DigitalAssetsOverview />

                {/* Section 2 */}

                {/* <InteractiveResources /> */}

                {/* Section 3 */}

                {/* <LearningBeyondClassroom /> */}

                {/* Section 4 */}

                <ResourceHighlights />

            </main>

            <Footer />

        </div>
    );
}