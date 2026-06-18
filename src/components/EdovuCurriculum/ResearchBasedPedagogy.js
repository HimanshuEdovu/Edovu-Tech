"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import {
    BrainCircuit,
    Cpu,
    Search,
    FlaskConical,
    Users,
    RefreshCcw,
} from "lucide-react";

const pedagogy = [
    {
        icon: BrainCircuit,
        title: "5E Learning Model",
        image: "/contentImages/5e.png",
        description:
            "A structured, inquiry-driven approach that begins with a real-world phenomenon to spark curiosity and drive learning. Through the five stages—Engage, Explore, Explain, Elaborate, and Evaluate—learners actively construct understanding, apply concepts, and develop critical thinking skills.",
    },

    {
        icon: Cpu,
        title: "TPACK Framework",
        image: "/contentImages/t-pack.png",
        description:
            "Integrates Technology, Pedagogy, and Content Knowledge to create impactful and engaging learning experiences.",
    },

    {
        icon: Search,
        title: "Inquiry-Based Learning",
        image: "",
        description:
            "Encourages students to ask questions, investigate ideas, and construct their own understanding.",
    },

    {
        icon: FlaskConical,
        title: "Experiential Learning",
        image: "",
        description:
            "Promotes learning through hands-on activities, exploration, and real-world experiences.",
    },

    {
        icon: Users,
        title: "Collaborative Learning",
        image: "",
        description:
            "Develops communication, teamwork, and problem-solving skills through meaningful interactions and shared learning experiences.",
    },

    {
        icon: RefreshCcw,
        title: "Reflective Learning",
        image: "",
        description:
            "Encourages students to think critically about their learning process, strengthening self-awareness and continuous improvement.",
    },
];

export default function ResearchBasedPedagogy() {

    const [active, setActive] = useState(0);

    const ActiveIcon = pedagogy[active].icon;

    return (

        <section className="relative overflow-hidden bg-white py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Heading */}

                <div className="mx-auto max-w-4xl text-center">

                    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                        Research-Based Learning Pedagogy

                    </span>

                    <h2 className="mt-7 text-5xl font-black text-slate-900">

                        Research-Based Learning Pedagogy

                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-600">

                        Our curriculum is grounded in proven educational practices that make learning engaging, meaningful, and effective.

                    </p>

                </div>

                {/* Timeline */}

         {/* Timeline */}

<div className="mt-5 hidden lg:flex items-center justify-center">

    <div className="relative w-full max-w-6xl">

        {/* Center Line */}

        <div className="absolute left-[6%] right-[6%] top-6 h-[2px] rounded-full bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200" />

        {/* Buttons */}

        <div className="relative flex justify-between">

            {pedagogy.map((item, index) => {

                const Icon = item.icon;

                return (

                    <button

                        key={item.title}

                        onClick={() => setActive(index)}

                        className="group flex w-[110px] flex-col items-center"

                    >

                        {/* Circle */}

                        <div

                            className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300

                            ${
                                active === index
                                    ? "bg-gradient-to-br from-orange-500 to-orange-400 shadow-xl shadow-orange-500/30 scale-110"
                                    : "border border-slate-200 bg-white hover:border-orange-300"
                            }

                            `}

                        >

                            <Icon

                                size={24}

                                className={
                                    active === index
                                        ? "text-white"
                                        : "text-orange-500"
                                }

                            />

                        </div>

                        {/* Text */}

                        <p

                            className={`mt-4 text-center text-sm font-bold leading-5 transition

                            ${
                                active === index
                                    ? "text-orange-500"
                                    : "text-slate-700"
                            }

                            `}

                        >

                            {item.title}

                        </p>

                    </button>

                );

            })}

        </div>

    </div>

</div>

                {/* Mobile */}

                <div className="mt-14 flex gap-4 overflow-x-auto lg:hidden pb-3">

                    {pedagogy.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <button

                                key={item.title}

                                onClick={() => setActive(index)}

                                className={`flex min-w-[170px] flex-col items-center rounded-3xl p-5 transition

                                ${active === index

                                        ? "bg-orange-500 text-white"

                                        : "bg-white border border-slate-200"

                                    }

                                `}

                            >

                                <Icon

                                    size={28}

                                    className={active === index ? "text-white" : "text-orange-500"}

                                />

                                <span className="mt-3 text-sm font-bold text-center">

                                    {item.title}

                                </span>

                            </button>

                        );

                    })}

                </div>

                {/* Active Card */}
                <AnimatePresence mode="wait">

                    <motion.div

                        key={active}

                        initial={{ opacity: 0, y: 30 }}

                        animate={{ opacity: 1, y: 0 }}

                        exit={{ opacity: 0, y: -30 }}

                        transition={{ duration: .45 }}

                        className="relative mt-5 overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-2xl"

                    >

                        <div className="grid items-center lg:grid-cols-[1.1fr_1fr]">

                            {/* Image */}

<div className="relative flex  items-center justify-center overflow-hidden rounded-l-[40px] bg-gradient-to-br from-slate-50 to-orange-50">

                                <Image

                                    src={pedagogy[active].image}

                                    alt={pedagogy[active].title}

                                    width={900}

                                    height={900}

                                    className="h-full w-full object-cover transition duration-700"

                                />

                                {/* Gradient */}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                            </div>

                            {/* Content */}

                            <div className="relative p-10 lg:p-14">

                                <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-orange-500/10 blur-[100px]" />

                                <div className="relative">

                                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-xl shadow-orange-500/30">

                                        <ActiveIcon

                                            size={36}

                                            className="text-white"

                                        />

                                    </div>

                                    <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                                        Research-Based Learning Pedagogy

                                    </span>

                                    <h3 className="mt-7 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">

                                        {pedagogy[active].title}

                                    </h3>

                                    <p className="mt-8 text-lg leading-9 text-slate-600">

                                        {pedagogy[active].description}

                                    </p>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </AnimatePresence>                {/* Bottom Premium Highlight */}

                <motion.div

                    initial={{ opacity: 0, y: 40 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .7 }}

                    className="relative mt-24 overflow-hidden rounded-[40px] bg-[#08111f] p-14 lg:p-20"

                >

                    {/* Background Glow */}

                    <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

                    <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

                    <div className="relative mx-auto max-w-5xl text-center">

                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                            Research-Based Learning Pedagogy

                        </span>

                        <h3 className="mt-2 text-4xl font-black leading-tight text-white lg:text-4xl">

                            Together, these approaches create dynamic learning environments where students actively engage, explore, collaborate, and reflect, leading to deeper understanding and long-term success.

                        </h3>

                    </div>

                </motion.div>

            </div>

        </section>

    );

}