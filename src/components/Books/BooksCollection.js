"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    BookOpen,
    PencilLine,
    ClipboardCheck,
} from "lucide-react";

const books = [
    {
        icon: BookOpen,
        title: "Student Book",
        description:
            "Designed to build strong conceptual foundations through engaging content, guided exploration, real-world connections, and thought-provoking activities that make learning meaningful and relevant.",
        image: "/contentImages/student-book.png",
        bottom: "Concept Learning • Guided Exploration",
    },

    {
        icon: PencilLine,
        title: "Activity Book",
        description:
            "Encourages hands-on learning through practice exercises, projects, investigations, and application-based tasks that help students reinforce concepts, develop skills, and learn by doing.",
        image: "/contentImages/activity-book.png",
        bottom: "Hands-On Practice • Skill Development",
    },

    {
        icon: ClipboardCheck,
        title: "Assessment Book",
        description:
            "Supports continuous and competency-based evaluation through formative and summative assessments, helping teachers track progress while enabling students to reflect on and improve their learning.",
        image: "/contentImages/assessment-book.png",
        bottom: "Competency-Based Evaluation",
    },
];

export default function BooksCollection() {

    return (

        <section className="relative overflow-hidden bg-slate-50 py-24">

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="mx-auto max-w-4xl text-center">

                    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                        Learning Resources

                    </span>

                    <h2 className="mt-7 text-5xl font-black text-slate-900">

                        Complete Learning Collection

                    </h2>

                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">

                        Every resource is designed to create a structured learning pathway that supports understanding, practice, application, and continuous academic growth.

                    </p>

                </div>

                <div className="mt-20 grid gap-8 lg:grid-cols-3">

                    {books.map((book, index) => {

                        const Icon = book.icon;

                        return (

                            <motion.div

                                key={book.title}

                                initial={{ opacity: 0, y: 40 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{
                                    duration: .6,
                                    delay: index * .15,
                                }}

                                whileHover={{
                                    y: -10,
                                }}

                                className="group overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl transition-all"

                            >

                                {/* Image */}

                                <div className="relative h-[300px] overflow-hidden bg-slate-100">

                                    <Image

                                        src={book.image}

                                        alt={book.title}

                                        width={800}

                                        height={800}

                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"

                                    />

                                    <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-xl">

                                        <Icon

                                            size={30}

                                            className="text-white"

                                        />

                                    </div>

                                </div>

                                {/* Content */}

                                <div className="p-8">

                                    <h3 className="text-3xl font-black text-slate-900">

                                        {book.title}

                                    </h3>

                                    <p className="mt-6 leading-8 text-slate-600">

                                        {book.description}

                                    </p>

                                </div>

                                {/* Bottom Strip */}

                                <div className="border-t border-slate-100 bg-gradient-to-r from-orange-50 to-white px-8 py-5">

                                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">

                                        {book.bottom}

                                    </p>

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}