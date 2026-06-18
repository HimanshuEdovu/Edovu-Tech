"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    MonitorPlay,
    PlayCircle,
    FlaskConical,
    Gamepad2,
} from "lucide-react";

const resources = [
    {
        icon: PlayCircle,
        title: "Concept Videos & Animations",
        description:
            "Simplify complex concepts through visual learning.",
        image: "",
    },

    {
        icon: MonitorPlay,
        title: "Interactive Learning Modules",
        description:
            "Engaging activities that promote exploration and understanding.",
        image: "",
    },

    {
        icon: FlaskConical,
        title: "Simulations & Virtual Labs",
        description:
            "Hands-on learning experiences in a safe digital environment.",
        image: "",
    },

    {
        icon: Gamepad2,
        title: "Educational Games",
        description:
            "Reinforce concepts through fun and interactive challenges.",
        image: "",
    },
];

export default function InteractiveResources() {

    return (

        <section className="relative overflow-hidden bg-slate-50 py-24">

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="text-center">

                    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                        Digital Resources Included

                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">

                        Interactive Learning Experiences

                    </h2>

                </div>

                <div className="mt-20 space-y-16">

                    {resources.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                key={item.title}

                                initial={{ opacity: 0, y: 40 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{ duration: .6 }}

                                className={`grid items-center gap-14 lg:grid-cols-2 ${
                                    index % 2 === 1
                                        ? "lg:[&>*:first-child]:order-2"
                                        : ""
                                }`}

                            >

                                {/* Content */}

                                <div>

                                    <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-xl shadow-orange-500/20">

                                        <Icon

                                            size={36}

                                            className="text-white"

                                        />

                                    </div>

                                    <h3 className="text-4xl font-black text-slate-900">

                                        {item.title}

                                    </h3>

                                    <p className="mt-7 text-lg leading-9 text-slate-600">

                                        {item.description}

                                    </p>

                                </div>

                                {/* Image */}

                                <div>

                                    <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-slate-100 shadow-2xl">

                                        <Image

                                            src={item.image}

                                            alt={item.title}

                                            width={900}

                                            height={700}

                                            className="h-full w-full object-cover transition duration-700 hover:scale-105"

                                        />

                                    </div>

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}