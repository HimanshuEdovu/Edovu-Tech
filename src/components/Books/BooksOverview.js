"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    BookOpen,
    Sparkles,
    GraduationCap,
} from "lucide-react";

export default function BooksOverview() {

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

                            {/* Replace image */}

                            <Image

                                src="/contentImages/print-resources.png"

                                alt="Edovu Books"

                                width={900}

                                height={900}

                                className="h-full w-full object-cover"

                            />

                        </div>

                        {/* Floating Card */}

                        <div className="absolute -bottom-8 left-8 rounded-[30px] bg-[#08111f] p-7 shadow-2xl">

                            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                <BookOpen

                                    size={32}

                                    className="text-white"

                                />

                            </div>

                            <h3 className="text-4xl font-black text-white">

                                Books

                            </h3>

                            <p className="mt-2 text-slate-300">

                                Structured Learning Resources

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

                            Edovu Books

                        </span>

                        <h2 className="mt-7 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">

                            Print Resources Designed

                            <span className="block text-orange-500">

                                For Modern Learning

                            </span>

                        </h2>

                        <p className="mt-8 text-lg leading-9 text-slate-600">

                            Our carefully designed print resources provide students with a structured and engaging learning experience that supports concept mastery, skill development, and academic growth.

                        </p>

                        <p className="mt-6 text-lg leading-9 text-slate-600">

                            Each component serves a unique purpose, creating a complete learning pathway from understanding to application and assessment.

                        </p>

                        {/* Feature Box */}

                        {/* <div className="mt-10 rounded-[32px] border border-slate-200 bg-slate-50 p-8">

                            <div className="space-y-6">

                                <div className="flex items-start gap-4">

                                    <div className="rounded-2xl bg-orange-100 p-4">

                                        <Sparkles

                                            size={24}

                                            className="text-orange-500"

                                        />

                                    </div>

                                    <div>

                                        <h4 className="text-xl font-bold text-slate-900">

                                            Concept Mastery

                                        </h4>

                                        <p className="mt-2 text-slate-600">

                                            Structured learning experiences designed to build strong academic foundations.

                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-start gap-4">

                                    <div className="rounded-2xl bg-orange-100 p-4">

                                        <GraduationCap

                                            size={24}

                                            className="text-orange-500"

                                        />

                                    </div>

                                    <div>

                                        <h4 className="text-xl font-bold text-slate-900">

                                            Progressive Learning Journey

                                        </h4>

                                        <p className="mt-2 text-slate-600">

                                            Supporting learners from concept understanding to application and assessment.

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div> */}

                    </motion.div>

                </div>

            </div>

        </section>

    );

}